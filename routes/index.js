// import express from "express";
// import userRouter from "./users.route"; // Adjust the path as needed

// const router = express.Router();

// router.use("/users", userRouter);

// export default router;

import express from "express";
import userRouter from "./users.route.js"; // Adjust the path as needed

const router = express.Router();

router.use("/users", userRouter);

export default router;
