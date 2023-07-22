const mysql = require('mysql2');

const pool = mysql.createPool({
	/*
	host: process.env.DB_HOST , 
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
	*/
	host: 'localhost' , 
	user: 'root',
	password: '',
	database: 'blog'
});

module.exports = pool.promise()