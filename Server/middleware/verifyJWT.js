const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  // Check for the authorization header
  const authHeader = req.headers.authorization || req.headers.Authorization;

  // If no authorization header or it doesn't start with 'Bearer ', respond with 401 (Unauthorized)
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Extract the token from the 'Bearer ' scheme
  const token = authHeader.split(" ")[1];

  // Verify the token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    // If the token is invalid or expired, respond with 403 (Forbidden)
    if (err) return res.status(403).json({ message: "Forbidden" });

    // Attach user info and roles to the request object for use in subsequent middleware/routes
    req.user = decoded.UserInfo.username;
    req.roles = decoded.UserInfo.roles;

    // Proceed to the next middleware/route handler
    next();
  });
};

module.exports = verifyJWT;
