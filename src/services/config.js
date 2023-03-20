const devBaseURL = " http://localhost:3000";//开发环境的URL，用部署过的URL
const proBaseURL = "http://localhost:3000";

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;

