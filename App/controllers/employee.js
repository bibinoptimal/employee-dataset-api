const connectKeepAlive = require("../Helper/database");

exports.createEmployee = async (req, res) => {
  const data = [
    req.body.name,
    req.body.email,
    req.body.address,
    req.body.mobile,
    req.emp_code,
    req.company
  ];
  const cols = 'name, email, address, mobile, emp_code, company'
  try {
    sql = `INSERT INTO user_detail(${cols}) VALUES(?)`;
    connectKeepAlive
      .promise()
      .query(sql, [data])
      .then((response) => {
        return res.json({ response: "Form Submited", status: 200 });
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.log(err);
  }
};

exports.getEmployee = async (req, res) => {
  try {
    sql = "SELECT * FROM user_details";
    connectKeepAlive
      .promise()
      .query(sql)
      .then((response) => {
        return res.json({ response: "Form Submited", status: 200 });
      })
      .catch((err) => {
        console.error(err);
      });
  } catch (err) {
    console.log(err);
  }
};
