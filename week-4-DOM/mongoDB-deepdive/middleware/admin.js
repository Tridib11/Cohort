const { Admin } = require("../db");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const value = await Admin.findOne({ username, password });
    if (value) {
      next();
    } else {
      res.status(401).json({ msg: "Admin does not exist" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Server error", error: error.message });
  }
}

module.exports = adminMiddleware;
