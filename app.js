// app.js
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");

const app = express();

// Đọc file swagger.yaml
const swaggerDocument = YAML.load(path.join(__dirname, "swagger.yaml"));

// Kích hoạt Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Các route API của bạn
app.get("/users", (req, res) => {
  res.json([{ id: 1, name: "John Doe" }]);
});

app.listen(5000, () => {
  console.log("Server đang chạy trên http://localhost:5000");
  console.log("Tài liệu Swagger có tại http://localhost:5000/api-docs");
});
