const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Logger = require("koa-logger");
const cors = require("koa-cors");
import { router } from "./src/routes";

const app = new Koa();

app.use(BodyParser());
app.use(Logger());
app.use(cors());

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => console.log("---------- Server started ----------"));

module.exports = app;
