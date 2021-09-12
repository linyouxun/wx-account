const sql = require("./init");
var ExpensesSql = {
  insert: sql.insert.bind(void 0, "expenses"),
  query: sql.query.bind(void 0, "expenses"),
  update: sql.update.bind(void 0, "expenses"),
  delete: sql.delete.bind(void 0, "expenses"),
};

module.exports = ExpensesSql;
