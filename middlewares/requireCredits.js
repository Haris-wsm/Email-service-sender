module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    return res.status(403).json({ message: 'Not enoung credits!' });
  }
  next();
};
