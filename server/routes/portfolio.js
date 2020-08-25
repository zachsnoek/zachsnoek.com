const {
    createProject,
    deleteProject,
    getProjects,
    updateProject,
} = require("../controllers/portfolio");
const { protect, authorize } = require("../middleware/auth");
const router = require("express").Router();

router.get("/", getProjects);
router.post("/", protect, authorize("admin"), createProject);
router.put("/:id", protect, authorize("admin"), updateProject);
router.delete("/:id", protect, authorize("admin"), deleteProject);

module.exports = router;
