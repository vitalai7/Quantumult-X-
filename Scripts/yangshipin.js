/******************************
🧚🏻‍♂️项目名称：央视频 
🧚🏻‍♂️脚本作者：ios151
🧚🏻‍♂️特别说明：公益项目请勿盗用
🧚🏻‍♂️软件版本: 2024731最新版本
🧚🏻‍♂️注意事项：仅供学习 请勿传播售卖
***************************

[rewrite_local]

^http:\/\/(liveinfo|bkliveinfo|playvv)\.ysp\.cctv\.cn\/(playvinfo\?.+|.*) url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js

# 解锁[电视]内会员 如果登录提示错误的话 手动屏蔽下面这条
&guid=[\w-]+&app_version=[\d\.]+&spadseg=\d&userid=(\d*)? url 302 &guid=f066be2cdf1c4f4893eb818de454313a&app_version=3.0.0.23522&spadseg=3&userid=234090757

#^https:\/\/liveinfo\.ysp\.cctv\.cn\/ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js
#^https:\/\/m\.yangshipin\.cn\/static\/\w/\w+\/index\.html$ url script-request-header https://raw.githubusercontent.com/Yu9191/Rewrite/main/yangshipin.js
# > 央视频 去广告
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/.+\.json url reject-dict


[mitm]
hostname = *.ysp.cctv.cn, cdn.cmgadx.com

*******************************/

var iｉl='jsjiami.com.v7';const li1II=iii1II;(function(IIII1l,i1ili1,i1l1l1,IlI1I,II11Ii,II11Il,IlI11){return IIII1l=IIII1l>>0x2,II11Il='hs',IlI11='hs',function(iIIIIl,II1Il,lilIlI,iIIIIi,iii1I1){const i1li=iii1II;iIIIIi='tfi',II11Il=iIIIIi+II11Il,iii1I1='up',IlI11+=iii1I1,II11Il=lilIlI(II11Il),IlI11=lilIlI(IlI11),lilIlI=0x0;const II1Ii=iIIIIl();while(!![]&&--IlI1I+II1Il){try{iIIIIi=parseInt(i1li(0x1ad))/0x1*(-parseInt(i1li(0x1af))/0x2)+-parseInt(i1li(0x1ae))/0x3+parseInt(i1li(0x1ac))/0x4+-parseInt(i1li(0x1a7))/0x5+parseInt(i1li(0x1a6))/0x6+-parseInt(i1li(0x1a8))/0x7+parseInt(i1li(0x1a9))/0x8;}catch(i1ii){iIIIIi=lilIlI;}finally{iii1I1=II1Ii[II11Il]();if(IIII1l<=IlI1I)lilIlI?II11Ii?iIIIIi=iii1I1:II11Ii=iii1I1:lilIlI=iii1I1;else{if(lilIlI==II11Ii['replace'](/[fhGQgtkMrdCPnRVbBwF=]/g,'')){if(iIIIIi===II1Il){II1Ii['un'+II11Il](iii1I1);break;}II1Ii[IlI11](iii1I1);}}}}}(i1l1l1,i1ili1,function(I1iIl1,i1il,lI1Il1,lilIi1,IiilII,IliI1I,lI1Iii){return i1il='\x73\x70\x6c\x69\x74',I1iIl1=arguments[0x0],I1iIl1=I1iIl1[i1il](''),lI1Il1='\x72\x65\x76\x65\x72\x73\x65',I1iIl1=I1iIl1[lI1Il1]('\x76'),lilIi1='\x6a\x6f\x69\x6e',(0x17bc40,I1iIl1[lilIi1](''));});}(0x2fc,0xe125d,Iii11l,0xc1),Iii11l)&&(iｉl=Iii11l);let headers=$request[li1II(0x1a5)];function iii1II(_0x3f5b97,_0x3ceed1){const _0x264637=Iii11l();return iii1II=function(_0x27de0f,_0x2f9b35){_0x27de0f=_0x27de0f-0x1a5;let _0x1719e0=_0x264637[_0x27de0f];if(iii1II['muQFbf']===undefined){var _0x510e5c=function(_0x571fef){const _0x41a1a0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x244253='',_0x553a65='';for(let _0x1e9572=0x0,_0x3d0194,_0x153a03,_0x471cc8=0x0;_0x153a03=_0x571fef['charAt'](_0x471cc8++);~_0x153a03&&(_0x3d0194=_0x1e9572%0x4?_0x3d0194*0x40+_0x153a03:_0x153a03,_0x1e9572++%0x4)?_0x244253+=String['fromCharCode'](0xff&_0x3d0194>>(-0x2*_0x1e9572&0x6)):0x0){_0x153a03=_0x41a1a0['indexOf'](_0x153a03);}for(let _0x5adc4d=0x0,_0x210bb7=_0x244253['length'];_0x5adc4d<_0x210bb7;_0x5adc4d++){_0x553a65+='%'+('00'+_0x244253['charCodeAt'](_0x5adc4d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x553a65);};iii1II['wrUSya']=_0x510e5c,_0x3f5b97=arguments,iii1II['muQFbf']=!![];}const _0x25bd8d=_0x264637[0x0],_0x2e5cac=_0x27de0f+_0x25bd8d,_0x3a3ac6=_0x3f5b97[_0x2e5cac];return!_0x3a3ac6?(_0x1719e0=iii1II['wrUSya'](_0x1719e0),_0x3f5b97[_0x2e5cac]=_0x1719e0):_0x1719e0=_0x3a3ac6,_0x1719e0;},iii1II(_0x3f5b97,_0x3ceed1);}function Iii11l(){const IliI11=(function(){return[iｉl,'hdwjbBsFCjPiQMawbmgi.rRcMoVmd.tvG7nRkRft==','mJGZmdu2otzvt3zfvK0','x3zPzgvVx3fXx3zLCNnPB249ms4Wo192AwrLB19XCv92zxjZAw9UpteUmdTFDMLKzw9FCxfFDMvYC2LVBJ0XlJa7x3zPzgvVx3fXx3zLCNnPB249ms4Wo3nRzxK9kg51BgWPo3nRzxK9kg51BgWPo3nRzxK9kg51BgWPo3nRzxK9kg51BgWPo3nPzgvdB2rLpsHUDwXSktTZAwrLq29Kzt0OBNvSBcK7C2LKzunVzgu9kg51BgWPo3nPzgvdB2rLpsHUDwXSktTHy2nLC3nuB2TLBJ1frKyYqZfbota4m0iXotm5rKqXrKncnejbnte3mezenJTHy2nLC3nuB2TLBJ1frKyYqZfbota4m0iXotm5rKqXrKncnejbnte3mezenJTHy2nLC3nuB2TLBJ1frKyYqZfbota4m0iXotm5rKqXrKncnejbnte3mezenJTHy2nLC3nuB2TLBJ1frKyYqZfbota4m0iXotm5rKqXrKncnejbnte3mezenJTYzwzYzxnOvg9Rzw49rtyWruzdm0u0nJKWnKqXrdGZney1rJa0otbgrtC5mee7CMvMCMvZAfrVA2vUpuu2mevgqZnfndy5mdzemuq4mZrgnuyWndKWrKu3otbbo3jLzNjLC2HuB2TLBJ1fnJbfrKmZrtq2ota2rdfeodm0rJvgmdq5mezfnZKWqtTYzwzYzxnOvg9Rzw49rtyWruzdm0u0nJKWnKqXrdGZney1rJa0otbgrtC5mee7B3bLBKLKpuu0mtiZqtyZqJiWquzeqtbboey5nJK2mKiYodzcrdDfo29Wzw5jzd1fndeYm0e2m0iYmefgreeWqtHgoty5nJjcmJG2qKq3rtTVCgvUswq9rtqXmJnbnJncmJbbrKrbmee4rJK2otyYqJi4nKjen0u7B3bLBKLKpuu0mtiZqtyZqJiWquzeqtbboey5nJK2mKiYodzcrdDfo3z1C2vYAwq9mJm0mdKWnZu3o3z1C2vYAwq9mJm0mdKWnZu3o3z1C2vYAwq9mJm0mdKWnZu3o3z1C2vYAwq9mJm0mdKWnZu3o3z1C2vZC2LVBJ1OmZn0AtLnodDsv0XlBu5lAfO1BJK5ou0Xq1PowxmWmKHOofbbAMC5wK1bo3z1C2vZC2LVBJ1OmZn0AtLnodDsv0XlBu5lAfO1BJK5ou0Xq1PowxmWmKHOofbbAMC5wK1bo3z1C2vZC2LVBJ1OmZn0AtLnodDsv0XlBu5lAfO1BJK5ou0Xq1PowxmWmKHOofbbAMC5wK1bo3z1C2vZC2LVBJ1OmZn0AtLnodDsv0XlBu5lAfO1BJK5ou0Xq1PowxmWmKHOofbbAMC5wK1bo3zWBgf0zM9YBt01o2D1Awq9zJa2nMjLmMnKzJfJngy0odKZzwi4mtHKztq1ndmXm2e7CwLTzwK9mZeYyZy1ndCZzdDJmdzMnwiYnMm0yMjHmdaWmdeZzde1yJe5o3zWBgf0zM9YBt01o2D1Awq9zJa2nMjLmMnKzJfJngy0odKZzwi4mtHKztq1ndmXm2e7CwLTzwK9mZeYyZy1ndCZzdDJmdzMnwiYnMm0yMjHmdaWmdeZzde1yJe5o3zWBgf0zM9YBt01o2D1Awq9zJa2nMjLmMnKzJfJngy0odKZzwi4mtHKztq1ndmXm2e7CwLTzwK9mZeYyZy1ndCZzdDJmdzMnwiYnMm0yMjHmdaWmdeZzde1yJe5o3zWBgf0zM9YBt01o2D1Awq9zJa2nMjLmMnKzJfJngy0odKZzwi4mtHKztq1ndmXm2e7CwLTzwK9mZeYyZy1ndCZzdDJmdzMnwiYnMm0yMjHmdaWmdeZzde1yJe5','q29VA2LL'].concat((function(){return['ntGWodCYogHKExz4qW','mty4nJa5ovfuvLHLtG','mtmYnJqWmKLVseXXta','mM5ftunxCG','AgvHzgvYCW'].concat((function(){return['mZa5mta4nK93Bw9LvG','mZmWodm5mgTlBuvfCq','mti1ntqYmtngANLnuw8'];}()));}()));}());Iii11l=function(){return IliI11;};return Iii11l();};headers[li1II(0x1ab)]=li1II(0x1aa),$done({'headers':headers});var version_ = 'jsjiami.com.v7';