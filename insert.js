
const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "demo",
  password: "123",
  port: 5432
});

pool.query('select * from demo_table',(err,result) => {
    if(!err){
        console.log(result.rows);
        console.log("sheela1");
    }
    // client.end();
})
  
    pool.query(
      "INSERT INTO demo_table (id, name, address) VALUES (10,'thanga', 'goldpalace')",
      (error, results) => {
        if (error) {
        //   throw error;
        console.log("sheela1 err");
        }
      }
    );
