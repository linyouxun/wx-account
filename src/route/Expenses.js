var express = require("express");
var router = express.Router();

var db = require("../config/db"); //引入db
var sql = require("../config/sql/expenses");

router.post("/expenses/list", function (req, res, next) {
  db.query(sql.query(), function (err, rows) {
    if (err) {
      console.log(err);
      res.send({ code: 400, msg: "未知错误", data: [] });
    }
    res.send({ code: 200, data: rows });
  });
});

router.post("/expenses/add", function (req, res, next) {
  const {
    accountId = "",
    type = "",
    useTime = new Date(),
    money = 0,
    remark = "",
  } = req.body;
  const params = { accountId, type, useTime, remark, money };
  db.queryArgs(sql.insert(params), Object.values(params), function (err, rows) {
    if (err) {
      console.log(err);
      res.send({
        code: 400,
        msg: "新增数据失败",
        data: params,
      });
      return;
    }
    res.send({
      code: 200,
      msg: "新增数据成功",
      data: params,
    });
  });
});

router.post("/expenses/update", function (req, res, next) {
  const {
    accountId = "",
    type = "",
    useTime = new Date(),
    id = "",
    remark = "",
  } = req.body;
  const params = { useTime, remark };
  if (accountId) {
    params["accountId"] = accountId;
  }
  if (type) {
    params["type"] = type;
  }
  if (!id) {
    res.send({ code: 400, msg: "id未填写" });
  }
  const paramsId = { id };
  db.queryArgs(
    sql.query(paramsId),
    Object.values(paramsId),
    function (err, rows) {
      if (err) {
        console.log(err);
        res.send({ code: 400, msg: "未知错误" });
      }
      if (rows.length > 0) {
        db.queryArgs(
          sql.update(params, paramsId),
          [...Object.values(params), ...Object.values(paramsId)],
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
    }
  );
});

router.post("/expenses/delete", function (req, res, next) {
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
