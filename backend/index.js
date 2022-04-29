import Koa from "koa";
import Router from "@koa/router";
import cors from "@koa/cors";
import koaBody from "koa-body";
import fetch from "isomorphic-fetch";

// Import routes
import getActivity from "./routes/activity.js";
import getBreed from "./controllers/getBreed.js";

const app = new Koa();
const router = new Router();
const port = 3011;

app.use(cors({ origin: "*" }));

app.use(koaBody())

// Routes
router.get("/", (ctx) => {
  ctx.body = "Welcome to Dog Breed Server Side Web App!";
});
router.get("/api/activity", getActivity);
router.post("/api/breed", getBreed);

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

app.use(router.routes());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
