/*  
脚本功能：傲软抠图解锁会员
软件版本：1.7.0（商店最新版）
脚本作者：king
下载地址：http://t.cn/A6xBOE5d
更新时间：2022.5.17
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

更新日志：2023.10.6                1.7.0
        2022.5.17                1.5.9                  
        2021.11.20               1.5.1
使用方法: 打开规则 登录账号即可

************ QX ***************

[rewrite_local]

# 傲软抠图解锁会员
^https?:(.+).aoscdn.com/base/vip/v2/vips$ url script-response-body https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/arkt.js
[mitm] 

hostname = *.aoscdn.com
********** 小火箭 **************

[Script]

傲软抠图 = type=http-response,script-path=https://raw.githubusercontent.com/nameking77/Qx/main/rewrite/arkt.js,pattern=^https?:(.+).aoscdn.com/base/vip/v2/vips$,max-size=131072,requires-body=true,timeout=10,enable=true

[mitm] 

hostname = *.aoscdn.com
*******************************

*/


var objc = JSON.parse($response.body);

objc.data.status=1;
objc.data.expired_at=4476614400;

$done({body: JSON.stringify(objc)});

