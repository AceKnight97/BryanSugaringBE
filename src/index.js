
require("dotenv/config");
const connectDb = require("./config/db");
const server = require("./apolloServer");
const clerk = require("@clerk/clerk-sdk-node");

connectDb();
server();

const getUseer = async () => {
    try {
        
        const userList = await clerk.users.getUserList();
        console.log({ userList })
    } catch (error) {
        console.log({ error })
    }
};
// getUseer();