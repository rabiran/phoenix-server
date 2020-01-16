
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV,
    sessionSecret: process.env.SESSION_SECRET
}