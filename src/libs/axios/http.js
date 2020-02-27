import axios from 'axios';
import utils from "../utils";
import {Loading} from 'element-ui';
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://192.168.1.242:8090'; //填写域名
//http request 拦截器
let loading;
axios.interceptors.request.use(
  config => {
    config.data = JSON.stringify(config.data);
    loading = Loading.service({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    })
    config.headers = {
      'Content-Type': 'application/json'
    }
    // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token=window.sessionStorage.getItem('sessionId') || '';
    token&&(config.headers['Authorization']=token)
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器即异常处理
axios.interceptors.response.use(response => {
  loading.close();
  return response;
}, err => {
  console.log(err)
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log('错误请求')
        break;
      case 401:
        console.log('未授权，请重新登录')
        break;
      case 403:
        console.log('拒绝访问')
        break;
      case 404:
        console.log('请求错误,未找到该资源')
        break;
      case 405:
        console.log('请求方法未允许')
        break;
      case 408:
        console.log('请求超时')
        break;
      case 500:
        console.log('服务器端出错')
        break;
      case 501:
        console.log('网络未实现')
        break;
      case 502:
        console.log('网络错误')
        break;
      case 503:
        console.log('服务不可用')
        break;
      case 504:
        console.log('网络超时')
        break;
      case 505:
        console.log('http版本不支持该请求')
        break;
      default:
        console.log(`连接错误${err.response.status}`)
    }
  } else {
    console.log('连接到服务器失败')
  }
  return Promise.resolve(err.response)
})


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function getRequest(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        if(response && response.data){
          resolve(response.data);
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postRequest(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        if(response && response.data){
          resolve(response.data);
        }
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patchRequest(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        if(response && response.data){
          resolve(response.data);
        }
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function putRequest(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        if(response && response.data){
          resolve(response.data);
        }
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function deleRequest(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
