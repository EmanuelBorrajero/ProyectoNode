import bodyParser from "body-parser";
import http from "http";

const app = express();
const server = http.createServer(app);
const port = 8000;
app.use(bodyParser.json({ extended: true }));
//const {sequelize, Sequelize} = db
//Middlewares

//Routing

//Error HandIng

server.listen({ port });
