const Koa = require("koa");
const KoaStatic = require("koa-static");
const app = new Koa();
app.use(KoaStatic("build"));
app.listen(8080, () => {
  console.log("🚀🚀🚀🚀server is running at port 8080");
});
