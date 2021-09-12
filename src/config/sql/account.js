const sql = require("./init");
var AccountSql = {
  insert: sql.insert.bind(void 0, "account"),
  query: sql.query.bind(void 0, "account"),
  update: sql.update.bind(void 0, "account"),
  delete: sql.delete.bind(void 0, "account"),
};
module.exports = AccountSql;
