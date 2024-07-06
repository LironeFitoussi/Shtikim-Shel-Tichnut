### MySQL
```javascript
const mysql = require('mysql2/promise');

async function query() {
    const connection = await mysql.createConnection({host: 'localhost', user: 'root', database: 'test'});
    const [rows, fields] = await connection.execute('SELECT * FROM users WHERE id = ?', [1]);
    console.log(rows);
    await connection.end();
}

query();
```

### PostgreSQL
```javascript
const { Pool } = require('pg');

const pool = new Pool({
    user: 'user',
    host: 'localhost',
    database: 'test',
    password: 'password',
    port: 5432,
});

async function query() {
    const res = await pool.query('SELECT * FROM users WHERE id = $1', [1]);
    console.log(res.rows);
}

query();
```

### SQL Server
```javascript
const sql = require('mssql');

const config = {
    user: 'user',
    password: 'password',
    server: 'localhost',
    database: 'test',
};

async function query() {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request()
            .input('id', sql.Int, 1)
            .query('SELECT * FROM users WHERE id = @id');
        console.log(result.recordset);
    } catch (err) {
        console.error(err);
    } finally {
        await sql.close();
    }
}

query();
```

### Oracle
```javascript
const oracledb = require('oracledb');

async function query() {
    let connection;

    try {
        connection = await oracledb.getConnection({
            user: 'user',
            password: 'password',
            connectString: 'localhost/XE'
        });

        const result = await connection.execute(
            `SELECT * FROM users WHERE id = :id`,
            [1]
        );

        console.log(result.rows);
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error(err);
            }
        }
    }
}

query();
```

### SQLite
```javascript
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    db.run("CREATE TABLE users (id INT, name TEXT)");
    db.run("INSERT INTO users (id, name) VALUES (?, ?)", [1, 'John Doe']);

    db.all("SELECT * FROM users WHERE id = ?", [1], (err, rows) => {
        if (err) {
            throw err;
        }
        console.log(rows);
    });
});

db.close();
```