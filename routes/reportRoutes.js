const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const {
  exportTaskReport,
  exportUserReport,
} = require("../controllers/reportController");

const router = express.Router();

router.get("/export/tasks", protect, adminOnly, exportTaskReport); // export all tasks as excell/pdf
router.get("/export/users", protect, adminOnly, exportUserReport); //export user reports

module.exports = router;
