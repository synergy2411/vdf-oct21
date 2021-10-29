const { Sequelize } = require("sequelize");

const PG_URL = 'postgres://zsmuroqmrozpdb:4a0e94bd1273f16b885a276ec59310bbf97fefa76a24c6ac150e4d08a1c0978e@ec2-54-211-174-60.compute-1.amazonaws.com:5432/ddv0qgi3lpbg19'

const db = new Sequelize(PG_URL,{
    dialect : 'postgres',
    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized : false
        }
    }
})

db.authenticate()
    .then(conn => console.log("Postgres Connected"))
    .catch(err => console.log(err))

// const db = new Sequelize({
//     storage : "./sqlitedb/vdi-db.sqlite",
//     dialect : 'sqlite'
// })

// db.authenticate()
//     .then(conn =>{
//         console.log('SQLite Connected')
//     }).catch(err => console.log("ERROR : ", err))

module.exports = db;