import { prismaClient } from "../applications/database.js";
import { ResponseError } from "../errors/response-error.js";
import {
  createPostValidation,
  getIdPostValidation,
  updatePostValidation,
} from "../validation/post-validation.js";
import validate from "../validation/validation.js";
import fs, { unlinkSync } from "fs";

const create = async (user, request, file) => {
  const post = validate(createPostValidation, request);
  post.email_user = user.email;

  if (file) {
    post.image = file.filename;
  }

  return prismaClient.post.create({
    data: post,
    select: {
      title: true,
      category_name: true,
      description: true,
      image: true,
    },
  });
};

const update = async (user, request, file) => {
  const post = validate(updatePostValidation, request);
  // Old Image
  const oldImage = await prismaClient.post.findFirst({
    where: {
      id: post.id,
    },
  });
  //cek kondisi ketika tidak ada file baru
  if (!file) {
    post.image = oldImage.image;
  }
  const checkPost = await prismaClient.post.count({
    where: {
      id: post.id,
      email_user: user.email,
    },
  });
  if (checkPost > 1) {
    throw new ResponseError(404, "Post not found");
  }

  const updatedPost = await prismaClient.post.update({
    where: {
      id: post.id,
    },
    data: post,
    select: {
      title: true,
      category_name: true,
      description: true,
      image: true,
    },
  });

  if (updatedPost.image !== oldImage.image) {
    const oldFilePath = `public/images/${oldImage.image}`;

    // Cek jika file ada sebelum dihapus
    if (file.existsSync(oldFilePath)) {
      unlinkSync(oldFilePath);
    }
  }
  return updatedPost;
};

const remove = async (postId) => {
  postId = validate(getIdPostValidation, postId);
  const checkedPost = await prismaClient.post.findFirst({
    where: {
      id: postId,
    },
  });
  if (!checkedPost) {
    throw new ResponseError(404, "Post is not found");
  }
  await prismaClient.post.delete({
    where: {
      id: postId,
    },
  });
};
export default { create, update, remove };
