const express = require("express");
const cors = require("cors");
const router = express.Router();
router.use(cors());
const { authMiddleware } = require("../middleware/auth.middleware");
const { getUsers, signup, login, addFakeUsers, updateDetails } = require("../controllers/teacher.controller");

router.get("/get_all_users", getUsers);

router.post("/signup", signup);
router.post("/login", login);
router.post("/add_fake_users", addFakeUsers);
router.post("/update_details", authMiddleware, updateDetails);

module.exports = router;
