const { contact } = require("../controllers/contact");
const router = require("express").Router();

router.post("/", contact);

module.exports = router;
