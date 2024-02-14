// 配置
window.Config = {

  // 站点名
  SiteName: '3chome Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm790128704-eafcbc6c5ab7531a43a00d59',//status（本站）
    'm790128017-0d57be41c8a168eb56c2818d',//博客
    'm790128012-77c5086d7d9525f6c1e6af61',//主页（引导页）
    'm790128708-595f55f87bcb20c673300dca',//下载站
    'm790128984-692dceca849a5eafe857fb86',//短链接
    'm790128968-d62c17944fa572765c5a9313',//waline
    'm790128880-a3224aa43face513a3ba2cf0',//fresh
    'm790128910-d4596ea0a791a6748a4798f7',//musicapi
    'm790180412-22847ab08ad7d518db7be702',//rsshub
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    },
    {
      text: 'log in',
      url: 'https://stats.uptimerobot.com/NjXwYhZ9Dk'
    }
  ]
};
