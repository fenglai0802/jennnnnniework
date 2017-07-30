import Regular from 'regularjs';
import restate from 'regular-state';

const App = Regular.extend({
  template:
     `<div>
       <h2>主页</h2>
       <div>
         <a href='#/app/chat'>Go Chat</a>|
         <a href='#/app/blog'>Go Blog</a>
       </div>
       <div r-view ></div>
      </div>
     `
});

const routes = {
  app: {
    view: App
  }
  // 'app.blog': {
  //   view: Blog
  // },
  // 'app.chat': {
  //   view: Chat
  // }
};

restate()
    .state(routes) // 完成路由节点注册
    .start({ // 启动路由
      view: document.getElementById('app') // 顶层容器节点
    });
