const Koa = require("koa");
const KoaStatic = require("koa-static");
const app = new Koa();
app.use(KoaStatic("dist"));
app.listen(8080, () => {
  console.log("🚀🚀🚀🚀server is running at port 8080");
});
