"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","dd2f05f8f3b187c4f827dc5a21e7d056"],["/static/css/main.371aab77.css","2d943eda8f789b227aa4d3201543b67d"],["/static/js/0.8eeb838a.chunk.js","8fbb802a618ed5a932d2a767737c5fb2"],["/static/js/main.a04b5ab1.js","d0f1ea596539071d2d777b8b6c32301c"],["/static/media/Inconsolata.a9112572.woff","a911257208f5ba236647ac7a2b9e82f9"],["/static/media/about.bb07d190.jpg","bb07d190ecc2b5746ebb3659b1616562"],["/static/media/help.dd652767.jpg","dd652767349760acb10850d225b57618"],["/static/media/icsmap.ec3fc451.png","ec3fc4519390e85456044fd2e0cedd57"],["/static/media/logo_banner.0842d724.png","0842d724f09d76d557120094894a9278"],["/static/media/shodanLogo.588ba783.png","588ba783f244e2a377376867fb15e260"],["/static/media/webfont.572a2b1a.woff","572a2b1af9ba4a74a0ee379b0702fd29"],["/static/media/webfont.59649848.eot","596498485d3f0b0917983d9c63b57747"],["/static/media/webfont.f6af31c4.ttf","f6af31c47e6c60cc92189f5db2287023"],["/static/media/xjy.721a6f7b.jpg","721a6f7be80971d8e86f0d32a6c1403e"],["/static/media/ypf.8ab3f7e1.jpg","8ab3f7e1db498e5e9a434ce2ee64f242"],["/static/media/ysq.796476ac.jpg","796476acdd79131f52364395a8b27134"],["/static/media/zax.246c5e8e.jpg","246c5e8eead117af5f3cfee1fbc7c4fa"],["/static/media/zh.8e8ebd5e.jpg","8e8ebd5ee0494a765413b308b56ba987"],["/static/media/zjh.cab9dbae.jpg","cab9dbaefd7f816d53ad227e3b78b7ff"],["/static/media/zzh.32792962.jpg","32792962867fe11f03df233b1ce7aa40"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});