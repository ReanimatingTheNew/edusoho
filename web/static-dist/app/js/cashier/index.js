webpackJsonp(["app/js/cashier/index"],{0:function(e,t){e.exports=jQuery},"02ad171abc9cada5bff7":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("4d4dc8c99e38b826f59e"),s=function(e){return e&&e.__esModule?e:{default:e}}(c),u=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"afterTradeCreated",value:function(e){this.checkOrderStatus(),location.href=e.mwebUrl}}]),t}(s.default);t.default=u},"0462758757283f323cc5":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t){r(this,e),this.$container=t.$coinContainer,this.cashierForm=t.cashierForm,this.$form=t.$form,this.priceType=this.$container.data("priceType"),this.coinRate=this.$container.data("coinRate"),this.maxCoinInput=this.$container.data("maxAllowCoin")>this.$container.data("coinBalance")?this.$container.data("coinBalance"):this.$container.data("maxAllowCoin"),this.init()}return a(e,[{key:"init",value:function(){this.initEvent()}},{key:"initEvent",value:function(){var e=this;this.$form.on("change",".js-coin-amount",function(t){return e.changeAmount(t)})}},{key:"changeAmount",value:function(e){var t=$(e.currentTarget),n=t.val();if(parseFloat(n)>parseFloat(this.maxCoinInput)&&(n=this.maxCoinInput),isNaN(parseFloat(n))||parseFloat(n)<=0)return n=0,t.val(""),this.removePasswordValidate(),this.$form.trigger("removePriceItem",["coin-price"]),void this.cashierForm.calcPayPrice(n);t.val(parseFloat(n).toFixed(2)),this.addPasswordValidate();var r=this.$form.data("coin-name"),a=0;if("coin"===this.priceType){a=parseFloat(n).toFixed(2)+" "+r;var o=parseFloat(this.$container.data("maxAllowCoin")),i=parseFloat(o-n).toFixed(2)+" "+r;this.$form.trigger("changeCoinPrice",[i])}else a="￥"+parseFloat(n/this.coinRate).toFixed(2);this.$form.trigger("addPriceItem",["coin-price",r+Translator.trans("order.create.minus"),a]),this.cashierForm.calcPayPrice(n)}},{key:"addPasswordValidate",value:function(){this.$container.find('[name="payPassword"]').rules("add","required es_remote")}},{key:"removePasswordValidate",value:function(){this.$container.find('[name="payPassword"]').rules("remove","required es_remote")}}]),e}();t.default=o},"11e5fc7e9f7d4f25c86a":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("e2fcc42cde2f41b58be2"),c=function(e){return e&&e.__esModule?e:{default:e}}(i),s=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(c.default);t.default=s},"1af657f7645917c6310d":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("fef17b80bef935ad2682"),c=r(i),s=n("8d6b1145d2f0f7c079ac"),u=r(s),f=n("e2fcc42cde2f41b58be2"),l=r(f),d=n("11e5fc7e9f7d4f25c86a"),h=r(d),p=n("986a76353ac203061fe7"),y=r(p),v=n("a5753a9f265083dbf9c8"),b=r(v),m=n("02ad171abc9cada5bff7"),w=r(m);n("d5e8fa5f17ac5fe79c78");var g=function(){function e(){a(this,e)}return o(e,[{key:"pay",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getGateway(e.payment,e.isMobile,e.isWechat);e.gateway=n;var r=this.initPaySdk(n);return r.options=Object.assign({showConfirmModal:1},t),r.pay(e),r}},{key:"checkOrderStatus",value:function(){var e=this.initPaySdk();null!=e&&e.checkOrderStatus()}},{key:"cancelCheckOrder",value:function(){var e=this.initPaySdk();null!=e&&e.cancelCheckOrder()}},{key:"initPaySdk",value:function(e){e=void 0===e?store.get("payment_gateway"):e;var t=null;switch(e){case"WechatPay_Native":t=this.wpn?this.wpn:this.wpn=new c.default;break;case"WechatPay_MWeb":t=this.wpm?this.wpm:this.wpm=new w.default;break;case"WechatPay_Js":t=this.wpj?this.wpj:this.wpj=new b.default;break;case"Alipay_LegacyExpress":t=this.ale?this.ale:this.ale=new u.default;break;case"Alipay_LegacyWap":t=this.alw?this.alw:this.alw=new l.default;break;case"Lianlian_Wap":t=this.llwp?this.llwp:this.llwp=new h.default;break;case"Lianlian_Web":t=this.llwb?this.llwb:this.llwb=new y.default}return t}},{key:"getGateway",value:function(e,t,n){var r="";switch(e){case"wechat":r=n?"WechatPay_Js":t?"WechatPay_MWeb":"WechatPay_Native";break;case"alipay":r=t?"Alipay_LegacyWap":"Alipay_LegacyExpress";break;case"lianlianpay":r=t?"Lianlian_Wap":"Lianlian_Web"}return store.set("payment_gateway",r),r}}]),e}();t.default=g},"4d4dc8c99e38b826f59e":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("5eb223de522186da1dd9"),c=r(i);n("d5e8fa5f17ac5fe79c78");var s=n("b334fd7e4c5a19234db2"),u=r(s),f=n("c55e05a178f0ee906431"),l=r(f);n("9415ea13985847610e60");var d=function(){function e(){a(this,e)}return o(e,[{key:"setOptions",value:function(e){this.options=e}},{key:"getOptions",value:function(){return this.options}},{key:"showConfirmModal",value:function(e){this.confirmModal||(this.confirmModal=new l.default),this.confirmModal.show(e)}},{key:"pay",value:function(e){var t=this.createTrade(e);null!=t&&(t.paidSuccessUrl?location.href=t.paidSuccessUrl:(store.set("trade_"+this.getURLParameter("sn"),t.tradeSn),this.afterTradeCreated(t)))}},{key:"afterTradeCreated",value:function(e){}},{key:"customParams",value:function(e){return e}},{key:"checkOrderStatus",value:function(){this.startInterval()&&(window.intervalCheckOrderId=setInterval(this.checkIsPaid.bind(this),2e3))}},{key:"cancelCheckOrder",value:function(){clearInterval(window.intervalCheckOrderId)}},{key:"startInterval",value:function(){return!1}},{key:"checkIsPaid",value:function(){var t=this,n=store.get("trade_"+this.getURLParameter("sn"));e.getTrade(n).then(function(e){e.isPaid&&(store.remove("payment_gateway"),store.remove("trade_"+t.getURLParameter("sn")),location.href=e.paidSuccessUrl)})}},{key:"getURLParameter",value:function(e){return decodeURIComponent((new RegExp("[?|&]"+e+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[null,""])[1].replace(/\+/g,"%20"))||null}},{key:"filterParams",value:function(e){var t={gateway:e.gateway,type:e.type,orderSn:e.orderSn,coinAmount:e.coinAmount,amount:e.amount,openid:e.openid,payPassword:window.XXTEA.encryptToBase64(e.payPassword,"EduSoho")};return t=this.customParams(t),Object.keys(t).forEach(function(e){return!t[e]&&void 0!==t[e]&&delete t[e]}),t}},{key:"createTrade",value:function(e){var t=this.filterParams(e),n=null;return c.default.trade.create({data:t,async:!1,promise:!1}).done(function(e){n=e}).error(function(e){var t=JSON.parse(e.responseText);2==t.error.code?(0,u.default)("danger",t.error.message):(0,u.default)("danger",Translator.trans("cashier.pay.error_message"))}),n}}],[{key:"getTrade",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n={};return void 0==e||""==e?new Promise(function(e,t){e({isPaid:!1})}):(e&&(n.tradeSn=e),t&&(n.orderSn=t),c.default.trade.get({params:n}))}}]),e}();t.default=d},"770ef50e2abf4f1587c8":function(e,t,n){"use strict";var r=n("d2551c5247eab259ba5a");new(function(e){return e&&e.__esModule?e:{default:e}}(r).default)({element:"#cashier-form"})},"8d6b1145d2f0f7c079ac":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("4d4dc8c99e38b826f59e"),s=function(e){return e&&e.__esModule?e:{default:e}}(c),u=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"afterTradeCreated",value:function(e){this.checkOrderStatus(),this.getOptions().showConfirmModal?(window.open(e.payUrl,"_blank"),this.showConfirmModal(e.tradeSn)):location.href=e.payUrl}}]),t}(s.default);t.default=u},"9415ea13985847610e60":function(e,t,n){"use strict";!function(e){function t(e,t){var n=e.length,r=n<<2;if(t){var a=e[n-1];if(r-=4,a<r-3||a>r)return null;r=a}for(var o=0;o<n;o++)e[o]=String.fromCharCode(255&e[o],e[o]>>>8&255,e[o]>>>16&255,e[o]>>>24&255);var i=e.join("");return t?i.substring(0,r):i}function n(e,t){var n=e.length,r=n>>2;0!=(3&n)&&++r;var a;t?(a=new Array(r+1),a[r]=n):a=new Array(r);for(var o=0;o<n;++o)a[o>>2]|=e.charCodeAt(o)<<((3&o)<<3);return a}function r(e){return 4294967295&e}function a(e,t,n,r,a,o){return(n>>>5^t<<2)+(t>>>3^n<<4)^(e^t)+(o[3&r^a]^n)}function o(e){return e.length<4&&(e.length=4),e}function i(e,t){var n,o,i,c,s,u,f=e.length,l=f-1;for(o=e[l],i=0,u=0|Math.floor(6+52/f);u>0;--u){for(i=r(i+v),c=i>>>2&3,s=0;s<l;++s)n=e[s+1],o=e[s]=r(e[s]+a(i,n,o,s,c,t));n=e[0],o=e[l]=r(e[l]+a(i,n,o,l,c,t))}return e}function c(e,t){var n,o,i,c,s,u,f=e.length,l=f-1;for(n=e[0],u=Math.floor(6+52/f),i=r(u*v);0!==i;i=r(i-v)){for(c=i>>>2&3,s=l;s>0;--s)o=e[s-1],n=e[s]=r(e[s]-a(i,n,o,s,c,t));o=e[l],n=e[0]=r(e[0]-a(i,n,o,0,c,t))}return e}function s(e){if(/^[\x00-\x7f]*$/.test(e))return e;for(var t=[],n=e.length,r=0,a=0;r<n;++r,++a){var o=e.charCodeAt(r);if(o<128)t[a]=e.charAt(r);else if(o<2048)t[a]=String.fromCharCode(192|o>>6,128|63&o);else{if(!(o<55296||o>57343)){if(r+1<n){var i=e.charCodeAt(r+1);if(o<56320&&56320<=i&&i<=57343){var c=65536+((1023&o)<<10|1023&i);t[a]=String.fromCharCode(240|c>>18&63,128|c>>12&63,128|c>>6&63,128|63&c),++r;continue}}throw new Error("Malformed string")}t[a]=String.fromCharCode(224|o>>12,128|o>>6&63,128|63&o)}}return t.join("")}function u(e,t){for(var n=new Array(t),r=0,a=0,o=e.length;r<t&&a<o;r++){var i=e.charCodeAt(a++);switch(i>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:n[r]=i;break;case 12:case 13:if(!(a<o))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(31&i)<<6|63&e.charCodeAt(a++);break;case 14:if(!(a+1<o))throw new Error("Unfinished UTF-8 octet sequence");n[r]=(15&i)<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++);break;case 15:if(!(a+2<o))throw new Error("Unfinished UTF-8 octet sequence");var c=((7&i)<<18|(63&e.charCodeAt(a++))<<12|(63&e.charCodeAt(a++))<<6|63&e.charCodeAt(a++))-65536;if(!(0<=c&&c<=1048575))throw new Error("Character outside valid Unicode range: 0x"+c.toString(16));n[r++]=c>>10&1023|55296,n[r]=1023&c|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+i.toString(16))}}return r<t&&(n.length=r),String.fromCharCode.apply(String,n)}function f(e,t){for(var n=[],r=new Array(32768),a=0,o=0,i=e.length;a<t&&o<i;a++){var c=e.charCodeAt(o++);switch(c>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:r[a]=c;break;case 12:case 13:if(!(o<i))throw new Error("Unfinished UTF-8 octet sequence");r[a]=(31&c)<<6|63&e.charCodeAt(o++);break;case 14:if(!(o+1<i))throw new Error("Unfinished UTF-8 octet sequence");r[a]=(15&c)<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++);break;case 15:if(!(o+2<i))throw new Error("Unfinished UTF-8 octet sequence");var s=((7&c)<<18|(63&e.charCodeAt(o++))<<12|(63&e.charCodeAt(o++))<<6|63&e.charCodeAt(o++))-65536;if(!(0<=s&&s<=1048575))throw new Error("Character outside valid Unicode range: 0x"+s.toString(16));r[a++]=s>>10&1023|55296,r[a]=1023&s|56320;break;default:throw new Error("Bad UTF-8 encoding 0x"+c.toString(16))}if(a>=32766){var u=a+1;r.length=u,n[n.length]=String.fromCharCode.apply(String,r),t-=u,a=-1}}return a>0&&(r.length=a,n[n.length]=String.fromCharCode.apply(String,r)),n.join("")}function l(e,t){return(void 0===t||null===t||t<0)&&(t=e.length),0===t?"":/^[\x00-\x7f]*$/.test(e)||!/^[\x00-\xff]*$/.test(e)?t===e.length?e:e.substr(0,t):t<65535?u(e,t):f(e,t)}function d(e,r){return void 0===e||null===e||0===e.length?e:(e=s(e),r=s(r),t(i(n(e,!0),o(n(r,!1))),!1))}function h(t,n){return e.btoa(d(t,n))}function p(e,r){return void 0===e||null===e||0===e.length?e:(r=s(r),l(t(c(n(e,!1),o(n(r,!1))),!0)))}function y(t,n){return void 0===t||null===t||0===t.length?t:p(e.atob(t),n)}void 0===e.btoa&&(e.btoa=function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");return function(t){var n,r,a,o,i,c,s;for(r=a=0,o=t.length,i=o%3,o-=i,c=o/3<<2,i>0&&(c+=4),n=new Array(c);r<o;)s=t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<8|t.charCodeAt(r++),n[a++]=e[s>>18]+e[s>>12&63]+e[s>>6&63]+e[63&s];return 1==i?(s=t.charCodeAt(r++),n[a++]=e[s>>2]+e[(3&s)<<4]+"=="):2==i&&(s=t.charCodeAt(r++)<<8|t.charCodeAt(r++),n[a++]=e[s>>10]+e[s>>4&63]+e[(15&s)<<2]+"="),n.join("")}}()),void 0===e.atob&&(e.atob=function(){var e=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1];return function(t){var n,r,a,o,i,c,s,u,f,l;if((s=t.length)%4!=0)return"";if(/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(t))return"";for(u="="==t.charAt(s-2)?1:"="==t.charAt(s-1)?2:0,f=s,u>0&&(f-=4),f=3*(f>>2)+u,l=new Array(f),i=c=0;i<s&&-1!=(n=e[t.charCodeAt(i++)])&&-1!=(r=e[t.charCodeAt(i++)])&&(l[c++]=String.fromCharCode(n<<2|(48&r)>>4),-1!=(a=e[t.charCodeAt(i++)]))&&(l[c++]=String.fromCharCode((15&r)<<4|(60&a)>>2),-1!=(o=e[t.charCodeAt(i++)]));)l[c++]=String.fromCharCode((3&a)<<6|o);return l.join("")}}());var v=2654435769;e.XXTEA={utf8Encode:s,utf8Decode:l,encrypt:d,encryptToBase64:h,decrypt:p,decryptFromBase64:y}}(window)},"986a76353ac203061fe7":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("8d6b1145d2f0f7c079ac"),c=function(e){return e&&e.__esModule?e:{default:e}}(i),s=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),t}(c.default);t.default=s},a5753a9f265083dbf9c8:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("4d4dc8c99e38b826f59e"),s=function(e){return e&&e.__esModule?e:{default:e}}(c),u=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"pay",value:function(e){location.href="/pay/center/wxpay?"+$.param(e)}}]),t}(s.default);t.default=u},c55e05a178f0ee906431:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("b334fd7e4c5a19234db2"),c=r(i),s=n("4d4dc8c99e38b826f59e"),u=r(s),f=function(){function e(){a(this,e),this.$container=$("body"),this.modalID="cashier-confirm-modal",this.tradeSn="";var t='\n      <div id="'+this.modalID+'" class="modal">\n        <div class="modal-dialog cd-modal-dialog">\n          <div class="modal-content">\n            <div class="modal-header">\n              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n                <i class="cd-icon cd-icon-close"></i>\n              </button>\n              <h4 class="modal-title">'+Translator.trans("cashier.confirm.title")+'</h4>\n            </div>\n            <div class="modal-body">\n              <p>\n              '+Translator.trans("cashier.confirm.desc")+'\n              </p>\n            </div>\n            <div class="modal-footer">\n              <a class="btn cd-btn cd-btn-flat-default cd-btn-lg" data-dismiss="modal">'+Translator.trans("cashier.confirm.pick_again")+'</a>\n              <a class="btn cd-btn cd-btn-primary cd-btn-lg js-confirm-btn">'+Translator.trans("cashier.confirm.success")+"</a>\n            </div>\n          </div>\n        <div>  \n      </div>\n    ";0===this.$container.find("#"+this.modalID).length&&this.$container.append(t),$("body").on("click",".js-confirm-btn",this.checkIsPaid.bind(this))}return o(e,[{key:"checkIsPaid",value:function(){var e=this;u.default.getTrade(this.tradeSn).then(function(t){t.isPaid?location.href=t.paidSuccessUrl:((0,c.default)("danger",Translator.trans("cashier.confirm.fail_message")),$("#"+e.modalID).modal("hide"))})}},{key:"show",value:function(e){$("#"+this.modalID).modal("show"),this.tradeSn=e}}]),e}();t.default=f},d2551c5247eab259ba5a:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("0462758757283f323cc5"),c=r(i),s=n("1af657f7645917c6310d"),u=r(s),f=function(){function e(t){a(this,e),this.$form=$(t.element),this.$priceList=this.$form.find("#order-center-price-list"),this.validator=this.$form.validate(),this.initEvent(),this.initCoin(),this.paySdk=new u.default,this.paySdk.checkOrderStatus()}return o(e,[{key:"initCoin",value:function(){var e=$("#coin-use-section");e.length>0&&(this.coin=new c.default({$coinContainer:e,cashierForm:this,$form:this.$form}))}},{key:"initEvent",value:function(){var e=this,t=this.$form;t.on("click",".js-pay-type",function(t){return e.switchPayType(t)}),t.on("click",".js-pay-btn",function(t){return e.payOrder(t)}),t.on("addPriceItem",function(t,n,r,a){return e.addPriceItem(t,n,r,a)}),t.on("removePriceItem",function(t,n){return e.removePriceItem(t,n)}),t.on("changeCoinPrice",function(t,n){return e.changeCoinPrice(t,n)})}},{key:"payOrder",value:function(e){var t=this.$form;if(t.valid()){var n=$(e.currentTarget);n.button("loading");var r=this.formDataToObject(t);r.payAmount=t.find(".js-pay-price").text(),this.paySdk.cancelCheckOrder(),this.paySdk.pay(r),n.button("reset")}}},{key:"switchPayType",value:function(e){var t=$(e.currentTarget);t.hasClass("active")||(t.addClass("active").siblings().removeClass("active"),$("input[name='payment']").val(t.attr("id")))}},{key:"calcPayPrice",value:function(e){var t=this;$.post(this.$form.data("priceUrl"),{coinAmount:e}).done(function(e){t.$form.find(".js-pay-price").text(e.data)})}},{key:"formDataToObject",value:function(e){var t={},n=e.serializeArray();for(var r in n)t[n[r].name]=n[r].value;return t}},{key:"hasPriceItem",value:function(e,t){return!!$("#"+t).length}},{key:"addPriceItem",value:function(e,t,n,r){var a=$("#"+t);this.hasPriceItem(e,t)&&a.remove();var o='\n      <div class="order-center-price" id="'+t+'">\n        <div class="order-center-price__title">'+n+'</div>\n        <div class="order-center-price__content">-'+r+"</div>\n      </div>\n    ";this.$priceList.append(o)}},{key:"removePriceItem",value:function(e,t){var n=$("#"+t);this.hasPriceItem(e,t)&&n.remove()}},{key:"changeCoinPrice",value:function(e,t){this.$form.find(".js-pay-coin").text(t)}}]),e}();t.default=f},e2fcc42cde2f41b58be2:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("4d4dc8c99e38b826f59e"),s=function(e){return e&&e.__esModule?e:{default:e}}(c),u=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"afterTradeCreated",value:function(e){location.href=e.payUrl}},{key:"customParams",value:function(e){return this.isQQBuildInBrowser()||(e.app_pay="Y"),e}},{key:"isQQBuildInBrowser",value:function(){return!!navigator.userAgent.match(/QQ\//i)}}]),t}(s.default);t.default=u},fef17b80bef935ad2682:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n("4d4dc8c99e38b826f59e"),s=function(e){return e&&e.__esModule?e:{default:e}}(c),u=function(e){function t(){r(this,t);var e=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.$container=$("body"),e.modalID="wechat-qrcode-modal";var n='\n      <div id="'+e.modalID+'" class="modal">\n        <div class="modal-dialog cd-modal-dialog cd-modal-dialog-sm">\n          <div class="modal-content">\n          \n            <div class="modal-header">\n              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">\n                <i class="cd-icon cd-icon-close"></i>\n              </button>\n              <h4 class="modal-title">'+Translator.trans("cashier.wechat_pay")+'</h4>\n            </div>\n            \n            <div class="modal-body text-center">\n              <div style="height: 270px; width: 270px; margin: 0 auto;">\n                <img class="cd-mb16 js-qrcode-img" src="">\n              </div>\n              <div class="cd-mb16">\n                '+Translator.trans("cashier.wechat_pay.scan_qcode_pay_tips")+'\n              </div>\n              <div class="cd-text-danger cd-mb32 js-pay-amount" style="font-size:16px;"></div>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n    ';return 0===e.$container.find("#"+e.modalID).length&&e.$container.append(n),e.$container.find("#"+e.modalID).on("hidden.bs.modal",function(){clearInterval(window.intervalWechatId)}),e}return o(t,e),i(t,[{key:"afterTradeCreated",value:function(e){this.checkOrderStatus();var t=this.$container.find("#"+this.modalID);t.find(".js-qrcode-img").attr("src",e.qrcodeUrl),t.find(".js-pay-amount").text("￥"+e.cash_amount),t.modal("show")}},{key:"startInterval",value:function(){return!0}}]),t}(s.default);t.default=u}},["770ef50e2abf4f1587c8"]);