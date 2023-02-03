
const { response, request } = require('express')
// const res = require('express/lib/response')
const Pool=require('pg').Pool
var config = {
    user: 'postgres', 
    database: 'wsdb', 
    password: 'postgres', 
    host: 'localhost', 
    port: 5432, 
    max: 10
};

const pool = new Pool(config);

const createUser = 
     (req, res) =>
     {
     const { company, branch, usercode,username,password,department,designation,mailid,mobile,status } = req.body;
 
    // let hashedPassword =  bcrypt.hash(password, salt);
    // let trimmedPassword = hashedPassword.trim();

    // let dataresult = 
     pool.query(
        `insert into master_user(company,branch,usercode,username,userpassword,department,designation,mail_id,mobileno,approvedstatus)VALUES ($1, $2, $3,$4, $5, $6,$7, $8, $9, $10)`,
        [company, branch, usercode,username,password,department,designation,mailid,mobile,status ],(error,result)=>{
            if (error)
            {
                throw error
            }
            res.status(201).send(`Record Insered :${username}`)
        }
    );
    
    // response.status(201).send(`machine added : ${username}`)

}
module.exports={createUser}


