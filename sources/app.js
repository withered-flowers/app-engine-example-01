// import module
const path = require('path');

const Koa = require('koa');
const Router = require('@koa/router');
const render = require('koa-ejs');

// change to axios for advanced fetch
const fetch = require('node-fetch');

// declare variable
const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;

// middleware render (for ejs templating)
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'template',
  viewExt: 'ejs',
  cache: false,
  debug: false
});

// router definition
router.get('/', async (ctx, next) => {
  try {
    // fetch data from external
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let result = await response.json();

    // build the context via ejs render
    await ctx.render('home', {
      // title --> Title of the site (template.ejs)
      // header --> Header for this content (template.ejs)
      // dataPlaceholder --> data to show in table (home.ejs)
      title: 'Main Page',
      header: 'Data users fetched from json.placeholder.typicode.com',
      dataPlaceholder: result
    });
  }
  catch(err) {
    ctx.status = 404;
    ctx.body = err;
  }
});

// application method
app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port, () => {
    console.log(`Application working as intended at port ${port}`);
  });