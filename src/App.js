import React, { Component } from 'react';
// 导入相关组件
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import './App.css';
import Login from './login.js';
import axios from 'axios';
axios.defaults.baseURL='http://47.96.21.88:8086/';
// 响应拦截器
axios.interceptors.response.use(function(response){
  return response.data
},function(error){
  return Promise.reject(error)
});

class App extends Component {
  render() {
return (
      // 配置路由的填充情况
      // router组件下面不能放注释
        // 放一些路由的配置项 程序入口，哪些路径需要配路由，就在这里配
        // 打开界面显示的页面，什么都不选择是/登录页面 这些页面是用户滑屏是可进入的页面
      <Router>
        <Switch>
          <Route exact path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/show" component={Show} />
          <Redirect to="/" />
      </Switch>
      </Router>
    );

  }
}
// 如果逻辑复杂就单独抽取出来写  先简单输出以下页面内容
const Home = () => {
  return <div>Home</div>
}
const Show = () => {
  return <div>Show</div>
}
export default App;
