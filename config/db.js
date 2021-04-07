import sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = process.env.DB;
const password = process.env.PASSWORD;
const username = process.env.USER;

const database = new sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
  define: {
    timestamps: false
  }
});

database.authenticate().then(() => {
  async() => {
    try {
        await database.sync({force: true})

    } catch (error) {
        console.log(error.message)
    }

}}).catch( (e) => {
  console.log(e.message)
})

export default database;