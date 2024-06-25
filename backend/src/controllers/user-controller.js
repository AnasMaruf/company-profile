import userService from "../services/user-service.js";
import jwt from "jsonwebtoken";

const register = async (req, res, next) => {
  try {
    const result = await userService.register(req.body);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const request = req.body;
    const username = request.username;
    const email = request.email;
    const password = request.password;
    const accessToken = jwt.sign(
      { username, email, password },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30m" }
    );
    const refreshToken = jwt.sign(
      { username, email, password },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    await userService.login(request, refreshToken);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      token: accessToken,
    });
  } catch (e) {
    next(e);
  }
};
export default { register, login };
