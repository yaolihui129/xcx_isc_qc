/**
 * 小程序配置文件
 */

// 此处主机域名是腾讯云解决方案分配的域名
// 小程序后台服务解决方案：https://www.qcloud.com/solution/la

var host = "https://xiuliguanggao.com/index.php"
// var host = "http://qc.zhidaoauto.com/index.php"

var config = {

  // 下面的地址配合云端 Server 工作
  host,

  // 登录地址，用于建立会话
  loginUrl: `${host}/Report/Minipro`,

  // 测试的请求地址，用于测试会话
  requestUrl: `${host}/testRequest`,

  // 获取项目迭代数据
  reportUrl: `${host}/Report/Minipro`,

  // 获取设备图书数据
  booksUrl: `${host}/Device/Minipro`,

  // 用code换取openId
  openIdUrl: `${host}/Report/Minipro`,

  // 测试的信道服务接口
  tunnelUrl: `${host}/tunnel`,

  // 生成支付订单的接口
  paymentUrl: `${host}/payment`,

  // 发送模板消息接口
  templateMessageUrl: `${host}/templateMessage`,

  // 上传文件接口
  uploadFileUrl: `${host}/upload`,

  // 下载示例图片接口
  downloadExampleUrl: `${host}/static/weapp.jpg`
};

module.exports = config