const express=require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan');
const path=require('path');
const db=require('./config/db');

// Database connection
db.authenticate()
    .then(() => console.log('Database connection OK!'.cyan.bold))
    .catch(err => console.warn(`Connection failed: ${err}`.red.bold));

//router
const transactions=require('./routes/transactions');

const app=express();
// Body parser middleware
app.use(express.json());

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'development') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) =>res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const PORT=process.env.PORT || 5000;
app.listen(PORT, console.log(`server running OK in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
