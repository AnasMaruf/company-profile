import { prismaClient } from "../applications/database.js";
import postService from "../services/post-service.js";
import { getEmailPostValidation } from "../validation/post-validation.js";
import validate from "../validation/validation.js";

const create = async (req, res, next) => {
  try {
    const result = await postService.create(req.user, req.body, req.file);
    res.status(201).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};
const search = async (req, res, next) => {
  try {
    const emailUser = validate(getEmailPostValidation, req.user.email);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.search_query || "";
    const skip = limit * page;
    const totalRows = await prismaClient.post.count({
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
    });
    const totalPage = Math.ceil(totalRows / limit);
    const result = await postService.search(search, skip, limit, emailUser);
    return res.status(200).json({
      result,
      page,
      limit,
      totalRows,
      totalPage,
    });
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
    const postId = req.params.postId;
    const request = req.body;
    request.id = postId;
    const result = await postService.update(req.user, request, req.file);
    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    await postService.remove(req.user, req.params.postId);
    res.status(200).json({
      msg: "Post has been deleted",
    });
  } catch (e) {
    next(e);
  }
};

export default { create, search, update, remove };
