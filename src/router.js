const express = require("express");

let router = express.Router();

router.get("/user/info", function (req, res) {
  res.json({
    user: "2222",
  });
});

router.post("/user/info", function (req, res) {
  res.json({
    user: "2222wwww",
  });
});

//导出该路由
module.exports = router;
