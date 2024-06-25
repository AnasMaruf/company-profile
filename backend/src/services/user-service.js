import { prismaClient } from "../applications/database.js";
import { logger } from "../applications/logging.js";
import { ResponseError } from "../errors/response-error.js";
import {
  loginUserValidation,
  registerUserValidation,
} from "../validation/user-validation.js";
import validate from "../validation/validation.js";
import bcrypt from "bcrypt";

const register = async (request) => {
  const user = validate(registerUserValidation, request);
  const countUser = await prismaClient.user.count({
    where: {
      email: user.email,
    },
  });
  if (countUser === 1) {
    throw new ResponseError(400, "Email already exist");
  }

  // Hash kata sandi sebelum menyimpan ke basis data
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(user.password, salt);

  // Validasi konfirmasi kata sandi
  await bcrypt.compare(user.confPassword, hashedPassword);

  // Hapus confPassword dari objek data yang akan disimpan
  delete user.confPassword;
  return prismaClient.user.create({
    data: {
      username: user.username,
      email: user.email,
      password: hashedPassword,
      user_role: "user",
    },
    select: {
      username: true,
      email: true,
      user_role: true,
    },
  });
};
const login = async (request, refreshToken) => {
  const user = validate(loginUserValidation, request);
  const checkUser = await prismaClient.user.findUnique({
    where: {
      email: user.email,
    },
  });
  if (!checkUser) {
    throw new ResponseError(400, "Email or password is incorrect");
  }
  const isPasswordValid = await bcrypt.compare(
    user.password,
    checkUser.password
  );
  if (!isPasswordValid) {
    throw new ResponseError(400, "Email or password is incorrect");
  }
  return prismaClient.user.update({
    where: {
      email: user.email,
    },
    data: {
      token: refreshToken,
    },
    select: {
      token: true,
    },
  });
};
export default { register, login };
