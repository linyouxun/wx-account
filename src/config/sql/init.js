function toSqlString(params, join = " and ") {
  return Object.keys(params)
    .map((ele) => `${ele} = ?`)
    .join(join);
}

function insert(tableName, params = {}) {
  return `INSERT INTO ${tableName}(${Object.keys(params).join(
    ", "
  )}) VALUES(${Object.keys(params)
    .map((_) => "?")
    .join(", ")})`;
}

function query(tableName, params = {}, order = "DESC") {
  var extra = "";
  if (Object.keys(params).length > 0) {
    extra = "where " + toSqlString(params);
  }
  return `SELECT * FROM ${tableName} ${
    extra || ""
  } ORDER BY createTime ${order}`;
}

function update(tableName, params = {}, where = {}) {
  var set = "";
  if (Object.keys(params).length > 0) {
    set = "SET " + toSqlString(params, ", ");
  }
  var whereStr = "";
  if (Object.keys(where).length > 0) {
    whereStr = "WHERE " + toSqlString(where);
  }

  return `UPDATE  ${tableName} ${set || ""} ${whereStr || ""}`;
}

function deleteSql(tableName, params = {}) {
  var extra = "";
  if (Object.keys(params).length > 0) {
    extra = "where " + toSqlString(params);
  }
  return `DELETE FROM ${tableName} ${extra || ""}`;
}

module.exports = {
  insert,
  query,
  update,
  delete: deleteSql,
};
