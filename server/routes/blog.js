const {
    createPost,
    getPosts,
    deletePost,
    getPost,
    updatePost,
} = require("../controllers/blog");
const { protect, authorize } = require("../middleware/auth");
const router = require("express").Router();

router.post("/", protect, authorize("admin"), createPost);
router.get("/", getPosts);
router.get("/:slug", getPost);
router.put("/:id", protect, authorize("admin"), updatePost);
router.delete("/:id", protect, authorize("admin"), deletePost);

module.exports = router;
