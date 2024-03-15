/*************************************

项目名称：iScreen-小组件-辅助解锁
下载地址：https://t.cn/A6MsPY5O
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/cs\.kuso\.xyz\/configs.+ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/iscreenfz.js

[mitm]
hostname = cs.kuso.xyz

*************************************/


var body=$response.body;

body = body.replace(/"FeedAd":\d+/g,'"FeedAd":2');
body = body.replace(/"ab":\d+/g,'"ab":1');
body = body.replace(/"noAds":\d+/g,'"noAds":1');
body = body.replace(/"rewardAd":\d+/g,'"rewardAd":0');
body = body.replace(/"mainPop_open":\d+/g,'"mainPop_open":1');
body = body.replace(/"vipPopupType":\d/g,'"vipPopupType":2');

$done(body);
