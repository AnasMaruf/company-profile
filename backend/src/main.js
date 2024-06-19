import { logger } from "./applications/logging.js";
import web from "./applications/web.js";
import userController from "./controllers/user-controller.js";

web.listen(8000, () => {
  logger.info("Server running on port 8000");
});
