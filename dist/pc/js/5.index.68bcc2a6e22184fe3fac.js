(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{10:function(t,e,n){var r=n(17);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},102:function(t,e,n){(t.exports=n(25)(!1)).push([t.i,".container{width:672px;background-color:#ccc;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.container span{background-color:#fff;width:30px;height:30px;margin:1px}.container span.active{background-color:blue}.container span.food{background-color:red}",""])},103:function(t,e,n){var r=n(102);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals),(0,n(12).default)("3a769bee",r,!0,{})},108:function(t,e,n){"use strict";n.r(e);var r=n(16),i=n.n(r),o=n(15),s=n.n(o),a=n(4),c=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],u=n(14),h=function(){function t(e){var n=e.container;i()(this,t),this.container=n,this.direct="ArrowRight",this.border={width:c[0].length-1,height:c.length-1},this.snake=[{x:1,y:5},{x:2,y:5}],this.food={x:Math.floor(Math.random()*this.border.width),y:Math.floor(Math.random()*this.border.height)}}return s()(t,[{key:"draw",value:function(){var t=document.querySelectorAll(".active");t&&t.forEach(function(t){return t.classList.remove("active")}),this.snake.forEach(function(t){var e=t.x,n=t.y;document.querySelector(".list-"+n+"-"+e).classList.add("active")}),document.querySelector(".list-"+this.food.y+"-"+this.food.x).classList.add("food")}},{key:"isEat",value:function(){var t=this.snake[this.snake.length-1];return t.x===this.food.x&&t.y===this.food.y&&(document.querySelector(".list-"+this.food.y+"-"+this.food.x).classList.remove("food"),this.food={x:Math.floor(Math.random()*this.border.width),y:Math.floor(Math.random()*this.border.height)},!0)}},{key:"move",value:function(t){var e=this,n=t.time;"ArrowRight"===this.direct?this.snake[this.snake.length-1].x===this.border.width?this.snake.push({x:0,y:this.snake[this.snake.length-1].y}):this.snake.push({x:this.snake[this.snake.length-1].x+1,y:this.snake[this.snake.length-1].y}):"ArrowLeft"===this.direct?0===this.snake[this.snake.length-1].x?this.snake.push({x:this.border.width,y:this.snake[this.snake.length-1].y}):this.snake.push({x:this.snake[this.snake.length-1].x-1,y:this.snake[this.snake.length-1].y}):"ArrowDown"===this.direct?this.snake[this.snake.length-1].y===this.border.height?this.snake.push({x:this.snake[this.snake.length-1].x,y:0}):this.snake.push({x:this.snake[this.snake.length-1].x,y:this.snake[this.snake.length-1].y+1}):"ArrowUp"===this.direct&&(0===this.snake[this.snake.length-1].y?this.snake.push({x:this.snake[this.snake.length-1].x,y:this.border.height}):this.snake.push({x:this.snake[this.snake.length-1].x,y:this.snake[this.snake.length-1].y-1})),this.isEat()||this.snake.shift(),this.draw(),setTimeout(function(){e.move({time:n})},n)}},{key:"turn",value:function(t){var e=t.direct;"ArrowUp"===this.direct&&"ArrowDown"===e||"ArrowDown"===this.direct&&"ArrowUp"===e||"ArrowLeft"===this.direct&&"ArrowRight"===e||"ArrowRight"===this.direct&&"ArrowLeft"===e||"ArrowUp"!==e&&"ArrowDown"!==e&&"ArrowRight"!==e&&"ArrowLeft"!==e||(this.direct=e)}},{key:"init",value:function(t){var e=t.time;this.draw(),this.move({time:e})}}]),t}(),l={store:a.a,data:function(){return{ball:[],cache:[],numArray:[1,2,3],colorArray:["#3BE","#09C","#A6C","#93C","#9C0","#690","#FB3","#F80","#F44","#C00"],R:4,W:700,H:1e3}},created:function(){window.app=this},mounted:function(t){var e=document.querySelector(".container");e.innerHTML=c.map(function(t,e){return t.map(function(t,n){return'<span class="list-'+e+"-"+n+'"></span>'})}).map(function(t){return t.join("")}).join("");var n=new h({container:e});n.init({time:100}),Object(u.a)(window).on("keydown",function(t){n.turn({direct:t.key})})},methods:{}},f=n(1),p=Object(f.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"})},[],!1,function(t){n(103)},null,null);e.default=p.exports},11:function(t,e,n){var r=n(6),i=n(18);t.exports=n(5)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},14:function(t,e,n){"use strict";!function(t,e,n){const r=t=>Object.prototype.toString.call(t).match(/(?<=\s)\w*/g)[0],i=t=>new class{constructor(t){const n=r(t);console.log("type",n),"String"===n?this.elements=Array.prototype.slice.call(e.querySelectorAll(t)):"HTMLLIElement"!==n&&"HTMLDocument"!==n&&"Window"!==n||(this.elements=[t]),this.author="pengliheng",this.version="0.0.1"}css(t,e){return this.elements.forEach(n=>{n.style[t]=e}),this}eq(t){return this.elements=[this.elements[t]],this}find(t){let e=[];return this.elements.forEach(n=>{e=[...e,...n.querySelectorAll(t)]}),this.elements=e,this}attr(t,e){return this.elements.forEach(n=>{t.match(/data-/)?n.dataset[t.match(/(?<=-)\w*/g)]=e:n[t]=e}),this}click(t){return this.elements.forEach(e=>{e.addEventListener("click",e=>t(e))}),this}each(t){return this.elements.forEach((e,n)=>{t(e,n)}),this}ready(t){return e.addEventListener("DOMContentLoaded",()=>{t.bind(this.elements[0])()}),this}on(t,e){return"hover"===t?this.elements.forEach(t=>{t.addEventListener("mouseover",()=>{const n=t.style;e.bind(t)(),t.addEventListener("mouseout",()=>{t.style=n})})}):this.elements.forEach(n=>{n.addEventListener(t,t=>e.bind(n)(t))}),this}append(t){return this.elements.forEach(e=>e.innerHTML+=t),this}html(t){return this.elements.forEach(e=>e.innerHTML=t),this}typeof(){return this.elements.map(t=>Object.prototype.toString.call(t).replace(/(\[object HTML)|(Element\])/g,"").toLocaleLowerCase())}is(t){return this.elements.map(e=>Object.prototype.toString.call(e).replace(/(\[object HTML)|(Element\])/g,"").toLocaleLowerCase()===t)}}(t);i.typeOf=r,i.ajax=(({type:t,url:e,dataType:n,success:r,error:i,data:o})=>{fetch(e,{headers:{Accept:"application/json","Content-Type":"application/json"},method:t,body:JSON.stringify(o)}).then(t=>t[n]()).then(t=>r(t)).catch(t=>i(t))}),i.sleep=(t=>new Promise(e=>setTimeout(e,t))),t.$=i}(window,document),e.a=$},15:function(t,e,n){"use strict";e.__esModule=!0;var r,i=(r=n(55))&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},16:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},17:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},18:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},19:function(t,e,n){var r=n(7),i=n(8),o=n(31),s=n(11),a=n(9),c=function(t,e,n){var u,h,l,f=t&c.F,p=t&c.G,d=t&c.S,y=t&c.P,w=t&c.B,m=t&c.W,v=p?i:i[e]||(i[e]={}),k=v.prototype,g=p?r:d?r[e]:(r[e]||{}).prototype;for(u in p&&(n=e),n)(h=!f&&g&&void 0!==g[u])&&a(v,u)||(l=h?g[u]:n[u],v[u]=p&&"function"!=typeof g[u]?n[u]:w&&h?o(l,r):m&&g[u]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):y&&"function"==typeof l?o(Function.call,l):l,y&&((v.virtual||(v.virtual={}))[u]=l,t&c.R&&k&&!k[u]&&s(k,u,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},29:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},30:function(t,e,n){var r=n(17),i=n(7).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},31:function(t,e,n){var r=n(52);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},5:function(t,e,n){t.exports=!n(29)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},50:function(t,e,n){var r=n(17);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},51:function(t,e,n){t.exports=!n(5)&&!n(29)(function(){return 7!=Object.defineProperty(n(30)("div"),"a",{get:function(){return 7}}).a})},52:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},53:function(t,e,n){var r=n(19);r(r.S+r.F*!n(5),"Object",{defineProperty:n(6).f})},54:function(t,e,n){n(53);var r=n(8).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},55:function(t,e,n){t.exports={default:n(54),__esModule:!0}},6:function(t,e,n){var r=n(10),i=n(51),o=n(50),s=Object.defineProperty;e.f=n(5)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},7:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},8:function(t,e){var n=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=n)},9:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}}}]);