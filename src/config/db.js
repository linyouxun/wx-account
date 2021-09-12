//mysql连接池配置文件
var mysql = require("mysql");
var $dbConfig = require("./mysql.json"); //注意改成自己项目中mysql配置文件的路径
// 使用连接池，避免开太多的线程，提升性能
var pool = mysql.createPool($dbConfig);

/**
 * 封装query之sql带不占位符func
 */
function query(sql, callback = () => {}) {
  console.log(`[sql] ${sql}`);
  pool.getConnection(function (err, connection) {
    if (err) {
      callback(err, connection);
      return;
    }
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      //释放链接
      connection.release();
    });
  });
}

/**
 * 封装query之sql带占位符func
 */
function queryArgs(sql, args, callback) {
  console.log(`[sql] ${sql} ${args}`);
  pool.getConnection(function (err, connection) {
    if (err) {
      callback(err, connection);
      return;
    }
    connection.query(sql, args, function (err, rows) {
      callback(err, rows);
      //释放链接
      connection.release();
    });
  });
}

//exports
module.exports = {
  query: query,
  queryArgs: queryArgs,
};
