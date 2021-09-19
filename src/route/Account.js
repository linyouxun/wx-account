var express = require("express");
var router = express.Router();

var db = require("../config/db"); //引入db
var sql = require("../config/sql/account");

router.post("/account/info", function (req, res, next) {
  const { openid } = req.body;
  db.queryArgs(sql.query({ openid }), [openid], function (err, rows) {
    if (err) {
      res.send({ code: 400, msg: "未知错误", data: {} });
    }
    if (rows.length > 0) {
      res.send({ code: 200, data: rows[0] });
    } else {
      res.send({
        code: 400,
        msg: "未绑定openid,请切换到我的页面进行绑定",
        data: {},
      });
    }
  });
});

router.post("/account/list", function (req, res, next) {
  db.query(sql.query(), function (err, rows) {
    if (err) {
      console.log(err);
      res.send({ code: 400, msg: "未知错误", data: [] });
    }
    res.send({ code: 200, data: rows });
  });
});

router.post("/account/add", function (req, res, next) {
  const { name = "", openid = "", password = "" } = req.body;
  db.queryArgs(sql.query({ openid }), [openid], function (err, rows) {
    if (err) {
      console.log(err);
      res.send({ code: 400, msg: "未知错误" });
    }
    if (rows.length > 0) {
      res.send({ code: 400, msg: "已绑定openId" });
    } else {
      db.queryArgs(
        sql.insert({ name, openid, password }),
        [name, openid, password],
        function (err, rows) {
          if (err) {
            console.log(err);
            res.send({
              code: 400,
              msg: "新增数据失败",
              data: { name, openid, password },
            });
            return;
          }
          res.send({
            code: 200,
            msg: "新增数据成功",
            data: { name, openid, password },
          });
        }
      );
    }
  });
});

router.post("/account/update", function (req, res, next) {
  const { name = "", openid = "", password = "", id = "" } = req.body;
  if (!id) {
    res.send({ code: 400, msg: "id未填写" });
  }
  const params = { name, openid, password, updateTime: Date.now() };
  db.queryArgs(sql.query({ id }), [id], function (err, rows) {
    if (err) {
      console.log(err);
      res.send({ code: 400, msg: "未知错误" });
    }
    if (rows.length > 0) {
      db.queryArgs(
        sql.update(params, { id }),
        [name, openid, password, new Date(), id],
        function (err, rows) {
          console.log(rows);
          if (err) {
            console.log(err);
            res.send({
              code: 400,
              msg: "更新数据失败",
              data: params,
            });
            return;
          }
          res.send({
            code: 200,
            msg: "更新数据成功",
            data: params,
          });
        }
      );
    } else {
      res.send({ code: 400, msg: "id不存在" });
    }
  });
});

router.post("/account/delete", function (req, res, next) {
  const { id = "" } = req.body;
  if (!id) {
    res.send({ code: 400, msg: "id未填写" });
  }
  const params = { id };
  db.queryArgs(sql.query(params), Object.values(params), function (err, rows) {
    if (err) {
      console.log(err);
      res.send({ code: 400, msg: "未知错误" });
    }
    if (rows.length > 0) {
      db.queryArgs(
        sql.delete(params),
        Object.values(params),
        function (err, rows) {
          console.log(rows);
          if (err) {
            console.log(err);
            res.send({
              code: 400,
              msg: "删除数据失败",
              data: params,
            });
            return;
          }
          res.send({
            code: 200,
            msg: "删除数据成功",
            data: params,
          });
        }
      );
    } else {
      res.send({ code: 400, msg: "id不存在" });
    }
  });
});

module.exports = router;
