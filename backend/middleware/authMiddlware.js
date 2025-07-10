import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  const userCookie = req.cookies.assess_token;

  try {
    if (!userCookie) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    jwt.verify(userCookie, process.env.SECRET_KEY, (error, user) => {
      if (error) {
        return res
          .status(401)
          .json({ message: "Unauthorized - Invalid token" });
      }

      req.user = user.id;
      next();
    });
  } catch (error) {
    // Use your error handler or send a response
    return res
      .status(401)
      .json({ message: "Unauthorized - Authentication failed" });
  }
};

export default authMiddleware;
