!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/static-dist/",r(r.s=498)}({498:function(e,t){var n,o;$('a[data-role="announcement-modal"]').click(function(){$("#modal").html("").load($(this).data("url"))}),$(".announcement-list").on("click","[data-role=delete]",function(){return confirm(Translator.trans("announcement.delete_hint"))&&$.post($(this).data("url"),function(){window.location.reload()}),!1}),$(".alert-edit").height()&&((o=(n=$(".alert-edit .alert-header")).find(".icon-click")).hasClass("es-icon-chevronright")?o.data("toggle",!0):o.data("toggle",!1),n.click(function(){$(this).siblings(".details").animate({visibility:"toggle",opacity:"toggle",easing:"linear"});var e=$(this).find(".icon-click");e.data("toggle")&&e.parents(".alert-header").siblings(".details").height()?(e.addClass("es-icon-keyboardarrowdown").removeClass("es-icon-chevronright"),e.data("toggle",!1)):(e.addClass("es-icon-chevronright").removeClass("es-icon-keyboardarrowdown"),e.data("toggle",!0))})),$(".annoucement-add-btn, .es-icon-edit").click(function(){$("#modal").modal("hide")})}});