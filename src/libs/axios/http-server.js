import {getRequest,postRequest,patchRequest,putRequest,deleRequest} from './http.js'

export const server = {
  //登录接口
  login: (params) => {
    return postRequest(`/login`,params);
  },
  //首页获取互动课堂班级列表
  getClassList: (params) => {
    return getRequest(`/classList`,params);
  },
  //添加班级中的获取ERP班级列表数据
  getErpClassList:(params) => {
    return getRequest(`/erpClass`,params);
  },
  // 互动课堂中编辑班级的获取学生列表数据
  getStudentList:(params) => {
    return getRequest(`/api/getStudentList`,params);
  },
 //获取教师信息列表
  getLoginList: (params) => {
    return getRequest(`/api/getLoginList`,params);
  },
  //删除登录的教师信息列表
  removeLoginList:(params)=>{
    return getRequest(`/api/removeLoginData`,params);
  },
  //编辑班级中获取erp导入学生信息列表
  getExportStudentData:(params)=>{
    return getRequest(`/api/getExportStudentData`,params);
  },

}
