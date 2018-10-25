const koa = require('koa');
const cors = require('@koa/cors');
const router = require('koa-router');
const dbctrl = require('./controls/dbctrl');
const data = require('./users_data');

dbctrl.dbconnect('mongodb://localhost:27017/test');
dbctrl.dbdrop(data.model);
dbctrl.dbadd(data.model, data.data);
dbctrl.dbinsert(data.model, [{name:"Hello",height:120,profession:"LL"},{name:"jane",height:130,profession:"undefined",id:5}]);

const app = new koa();
app.use(cors());

let routerRest = new router();
routerRest
  .get('/Person',dbctrl.dbmgshow(data.model))
  .get('/Something',async (ctx)=>{ctx.body = "Hello"});

let routerAll = new router();
routerAll.use('', routerRest.routes(), routerRest.allowedMethods());

app.use(routerAll.routes()).use(routerAll.allowedMethods());
app.listen(3000, ()=>{console.log('koa starts at port 3000!')});

console.log(dbctrl.dbshow(data.model));
