(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(n,e,t){n.exports=t(417)},207:function(n,e){},209:function(n,e){},241:function(n,e){},242:function(n,e){},311:function(n,e){},417:function(n,e,t){"use strict";t.r(e);var o=t(1),r=t.n(o),a=t(76),c=t.n(a),i=t(30),u=t(31),l=t(179),s=t(106),d=t.n(s),f=t(176);function g(){var n=Object(i.a)(["\n  background-color: white;\n"]);return g=function(){return n},n}function m(){var n=Object(i.a)(["",""]);return m=function(){return n},n}function p(){var n=Object(i.a)(["\n  width: 500px;\n  height: 50px;\n  background-color: white;\n  font-size: 20px;\n  outline: none;\n  margin-bottom: 15px;\n"]);return p=function(){return n},n}function v(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  transition: all 0.5s ease;\n"]);return v=function(){return n},n}var b=new(t.n(f).a)("X1-ZWz182nhjn9897_64j9s"),h=u.b.div(v()),w=Object(u.a)(p()),E=u.b.input(m(),w),j=u.b.div(g()),x=function(n){var e=n.className,t=Object(o.useState)(),a=Object(l.a)(t,2),c=a[0],i=a[1];return r.a.createElement(h,null,r.a.createElement(d.a,{onChange:i,value:c,className:e,onSelect:function(n){i(n),Object(s.geocodeByAddress)(n).then(function(e){var t=e[0].address_components[3],o=e[0].address_components[5];console.log(b);var r={address:n,citystatezip:"".concat(t,", ").concat(o)};return b.get("GetSearchResults",r).then(function(n){return console.log(n)})})}},function(n){var e=n.getInputProps,t=n.suggestions,o=n.getSuggestionItemProps,a=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,e({placeholder:"Search listings..."})),r.a.createElement(j,{address:c},a&&r.a.createElement("div",null,"Loading..."),t.map(function(n){var e=n.active?"suggestion-item--active":"suggestion-item",t=n.active?{backgroundColor:"#fafafa",cursor:"pointer"}:{backgroundColor:"#ffffff",cursor:"pointer"};return r.a.createElement("div",o(n,{className:e,style:t}),r.a.createElement("span",null,n.description))})))}))};function O(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  box-sizing: border-box;\n"]);return O=function(){return n},n}var k=u.b.div(O());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(function(){return r.a.createElement(k,null,r.a.createElement("h1",null,"Housing Finder"),r.a.createElement(x,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[181,1,2]]]);
//# sourceMappingURL=main.34282e16.chunk.js.map