import axios from 'axios'

export function request(config){
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/h8',
    timeout: 5000
  })
  // 2.1 请求拦截器
  instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    // config.headers = {'X-Requested-With': 'XMLHttpRequest'}
    // console.log('请求拦截');
    // 必须返回config，修改后的
    return config;
  }, err => {
    // 对请求错误做些什么
    // console.log(err);
    return Promise.reject(err);
  });
  // 2.2 响应拦截器
  instance.interceptors.response.use(res => {
    // 得到数据之后，先对数据进行处理然后再return出去，再被then捕获
    res = res.data;
    return res;
  }, err => {
    // 对响应错误做些什么，返回一个Promise对象可以被catch捕获
    return Promise.reject(err);
  });
  // 3. 注意axios实例发送网络请求返回的就是一个Promise对象
  return instance(config)
}