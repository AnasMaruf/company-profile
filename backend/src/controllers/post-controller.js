import postService from "../services/post-service.js";

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
  } catch (e) {
    next(e);
  }
};

const update = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res, next) => {
  try {
  } catch (e) {
    next(e);
  }
};
export default { create, search, update, remove };
