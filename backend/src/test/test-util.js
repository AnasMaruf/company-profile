import { prismaClient } from "../applications/database";

export const removeUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      email: "test@gmail.com",
    },
  });
};
