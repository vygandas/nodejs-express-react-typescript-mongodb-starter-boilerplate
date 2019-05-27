import * as mongoose from "mongoose";
require('dotenv').config();

class Database {
    
    constructor() {
        this.connect();
    }

    private connect() {
        mongoose.connect(process.env.MONGODB_URL)
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error', err);
            });
    }

}

export default new Database();
