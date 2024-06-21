import { prismaClient } from "../applications/database";
import { createPostValidation } from "../validation/post-validation";
import validate from "../validation/validation";

const create = async (user, request) => {
  const post = validate(createPostValidation, request);
  post.email_user = user.email;
};
const update = async (user, request, postId) => {};
const remove = async (postId) => {};
export default { create, update, remove };
