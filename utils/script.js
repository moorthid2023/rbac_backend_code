import connectMongo from './mongoClient.js';
import bcrypt from 'bcryptjs';

const DEFAULT_PASSWORD = 'ChangeMe123'; // Set a default password if missing

const migrate = async () => {
  const db = await connectMongo();

  // Migrate students
  const students = await db.collection('students').find().toArray();
  for (const s of students) {
    let password = s.password;
    if (!password) {
      // If no password, set a default and hash it
      password = await bcrypt.hash(DEFAULT_PASSWORD, 10);
    } else if (!password.startsWith('$2')) {
      // If not hashed, hash it
      password = await bcrypt.hash(password, 10);
    }
    await db.collection('users').updateOne(
      { email: s.email },
      {
        $setOnInsert: {
          name: s.name,
          email: s.email,
          password,
          role: 'student',
        },
      },
      { upsert: true }
    );
  }

  // Migrate faculties
  const faculties = await db.collection('faculties').find().toArray();
  for (const f of faculties) {
    let password = f.password;
    if (!password) {
      password = await bcrypt.hash(DEFAULT_PASSWORD, 10);
    } else if (!password.startsWith('$2')) {
      password = await bcrypt.hash(password, 10);
    }
    await db.collection('users').updateOne(
      { email: f.email },
      {
        $setOnInsert: {
          name: f.name,
          email: f.email,
          password,
          role: 'faculty',
        },
      },
      { upsert: true }
    );
  }

  console.log('Migration complete. All users are now in the users collection.');
  process.exit();
};

migrate();