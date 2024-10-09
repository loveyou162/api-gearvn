// routes/api.js
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lấy danh sách người dùng
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get("/users", (req, res) => {
  res.json([{ id: 1, name: "John Doe" }]);
});

module.exports = router;
