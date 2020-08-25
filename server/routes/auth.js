const { registerUser, login, logout, getMe } = require("../controllers/auth");
const { protect } = require("../middleware/auth");
const router = require("express").Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", protect, getMe);

module.exports = router;
