import fs from "fs";
import validate from "../validation/validation.js";
import {
  createPostValidation,
  getEmailPostValidation,
  getIdPostValidation,
  updatePostValidation,
} from "../validation/post-validation.js";
import { prismaClient } from "../applications/database.js";
import { ResponseError } from "../errors/response-error.js";

const create = async (user, request, file) => {
  const product = validate(createPostValidation, request);
  product.email_user = user.email;

  if (file) {
    product.image = file.filename;
  }

  return prismaClient.post.create({
    data: product,
    select: {
      id: true,
      title: true,
      category_name: true,
      description: true,
      image: true,
    },
  });
};
const list = async (user) => {
  const emailUser = validate(getEmailPostValidation, user.email);
  const product = await prismaClient.post.findMany({
    where: {
      email_user: emailUser,
    },
    select: {
      id: true,
      title: true,
      category_name: true,
      description: true,
      image: true,
    },
  });
  if (!product) {
    throw new ResponseError(404, "Product is not found");
  }
  return product;
};

const update = async (user, request, file) => {
  const post = validate(updatePostValidation, request);
  // Old Image
  const oldImage = await prismaClient.post.findFirst({
    where: {
      id: post.id,
    },
  });
  //jika ada file baru masukan file baru, jika tidak ada file baru masukan oldImagePath
  post.image = file ? file.filename : oldImage.image;
  const checkProduct = await prismaClient.post.count({
    where: {
      id: post.id,
      email_user: user.email,
    },
  });
  if (!checkProduct) {
    throw new ResponseError(404, "Product is not found");
  }

  const post_updated = await prismaClient.post.update({
    where: {
      id: post.id,
    },
    data: {
      name: post.name,
      price: post.price,
      description: post.description,
      image: post.image,
    },
    select: {
      id: true,
      title: true,
      category_name: true,
      description: true,
      image: true,
    },
  });
  if (post_updated.image !== oldImage.image) {
    const oldFilePath = `./public/images/${oldImage.image}`;

    // Cek jika file ada sebelum menghapusnya
    if (fs.existsSync(oldFilePath)) {
      fs.unlinkSync(oldFilePath);
    }
  }
  return post_updated;
};

const remove = async (user, postId) => {
  const post = validate(getIdPostValidation, postId);
  const checkPost = await prismaClient.post.count({
    where: {
      id: post,
      email_user: user.email,
    },
  });
  if (checkPost !== 1) {
    throw new ResponseError(404, "Post is not found");
  }
  const postDeleted = await prismaClient.post.findFirst({
    where: {
      id: post,
    },
  });
  if (!postDeleted) {
    throw new ResponseError(404, "Post is not found");
  }
  await prismaClient.post.delete({
    where: {
      id: post,
    },
  });
  const filePath = `./public/images/${postDeleted.image}`;
  fs.unlinkSync(filePath);
};

const search = async (search, skip, limit, emailUser) => {
  return prismaClient.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: search,
          },
        },
        {
          email_user: emailUser,
        },
      ],
    },
    skip: skip,
    take: limit,
    orderBy: {
      id: "desc",
    },
  });
};

export default { create, list, update, remove, search };
