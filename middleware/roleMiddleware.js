const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.role;

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: 'Forbidden: Access denied' });
    }

    next();
  };
};

export default roleMiddleware;
    