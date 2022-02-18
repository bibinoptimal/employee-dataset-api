const express = require('express')
const app = express()


app.use(express.json());

//  INITIAL ROUTE
app.get('/', async(req, res) => {
    res.send('EMPLOYEE DATASET API')
});


// Routes
require('./App/routes/employee')(app);


app.listen(9100, () => {
    console.log('SERVER STARTED ON PORT 9100')
})