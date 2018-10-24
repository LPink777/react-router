# react-router

* [HashRouter](https://github.com/LPink777/react-router/blob/master/src/react-router-dom/HashRouter.js)
* [Route](https://github.com/LPink777/react-router/blob/master/src/react-router-dom/Route.js)
* [Redirect](https://github.com/LPink777/react-router/blob/master/src/react-router-dom/Redirect.js)
* [Switch](https://github.com/LPink777/react-router/blob/master/src/react-router-dom/Switch.js)
* [Link](https://github.com/LPink777/react-router/blob/master/src/react-router-dom/Link.js)

react-router的原理:利用react中createContext的api创建出Provider,Consumer两个变量。
Provider用于在HashRouter中提供state的状态，Consumer用于在Link,Redirect,Route等组
件接受state的状态并转换为自己需要的参数。