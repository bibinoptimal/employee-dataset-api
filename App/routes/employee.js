module.exports = (app) => {
    const emp = require('../controllers/employee')
    app.post('/employee',emp.createEmployee);
    app.get('/employee',emp.getEmployee);
  }