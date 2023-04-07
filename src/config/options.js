import * as dotenv from "dotenv";

dotenv.config();
const options = {
    API_URL: process.env.API_URL,
};

export { options };
