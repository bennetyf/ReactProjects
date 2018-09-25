const koa = require('koa');
const cors = require('@koa/cors');
const router = require('koa-router');
const dbctrl = require('./controls/dbctrl');
const data = require('./data');

dbctrl.dbconnect('mongodb://localhost:27017/test');
// dbctrl.dbadd(data.schema,'Person',data.data);

const app = new koa();
app.use(cors());

let routerRest = new router();
routerRest
  .get('/Person',dbctrl.dbshow(data.schema,'Person'))
  .get('/Something',async (ctx)=>{ctx.body = "Hello"});

let routerAll = new router();
routerAll.use('', routerRest.routes(), routerRest.allowedMethods());

app.use(routerAll.routes()).use(routerAll.allowedMethods());
app.listen(3000, ()=>{console.log('koa starts at port 3000!')});
