(this["webpackJsonppizza-online-store-react"]=this["webpackJsonppizza-online-store-react"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(10),a=c.n(i),l=(c(15),c(3)),r=c(5),j=c(2),o=c(6),d=Object(s.createContext)(null),b=c(0),m=function(e){var t=e.product,c=Object(s.useState)(!1),n=Object(l.a)(c,2),i=n[0],a=n[1],j=Object(s.useContext)(d),m=j.cart,u=j.setCart;return Object(b.jsx)(r.b,{to:"/products/".concat(t._id),children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:t.image,alt:"pizza"}),Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("h2",{className:"text-lg font-bold py-2",children:t.name}),Object(b.jsx)("span",{className:"bg-gray-200 py-1 rounded-full text-sm px-4",children:t.size})]}),Object(b.jsxs)("div",{className:"flex justify-between items-center mt-4",children:[Object(b.jsxs)("span",{children:["\u20b9 ",t.price]}),Object(b.jsxs)("button",{className:"".concat(i?"bg-green-500":"bg-yellow-500","  py-1 px-4 rounded-full font-bold"),onClick:function(e){!function(e,t){e.preventDefault();var c=Object(o.a)({},m);c.items||(c.items={}),c.items[t._id]?c.items[t._id]+=1:c.items[t._id]=1,c.totalItems||(c.totalItems=0),c.totalItems+=1,u(c),a(!0),setTimeout((function(){a(!1)}),1e3)}(e,t)},disabled:i,children:["ADD",i?"ED":""]})]})]})})},u=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){fetch("/api/products").then((function(e){return e.json()})).then((function(e){n(e)}))}),[]),Object(b.jsxs)("div",{className:"container mx-auto pb-24",children:[Object(b.jsx)("h1",{className:"text-lg font-bold my-8",children:"Products"}),Object(b.jsx)("div",{className:"grid grid-cols-5 my-8 gap-24",children:c.map((function(e){return Object(b.jsx)(m,{product:e},e._id)}))})]})},x=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"hero py-16",children:Object(b.jsxs)("div",{className:"container mx-auto flex items-center justify-between",children:[Object(b.jsxs)("div",{className:"w-1/2",children:[Object(b.jsx)("h6",{className:"text-lg",children:Object(b.jsx)("em",{children:"Are you hungry?"})}),Object(b.jsx)("h1",{className:"text-3xl md:text-6xl font-bold",children:"Don't Wait !"}),Object(b.jsx)("button",{className:"bg-yellow-500 px-6 py-2 rounded-full text-white font-bold mt-4 hover:bg-yellow-600",children:"Order Now"})]}),Object(b.jsx)("div",{className:"w-1/2",children:Object(b.jsx)("img",{className:"w-4/5",src:"/images/pizza.png",alt:"pizza"})})]})}),Object(b.jsx)("div",{className:"pb-24",children:Object(b.jsx)(u,{})})]})},O=function(){var e=Object(s.useContext)(d).cart;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("nav",{className:"container mx-auto flex items-center justify-between py-4",children:[Object(b.jsx)(r.b,{to:"/",children:Object(b.jsx)("img",{src:"/images/logo.png",alt:"",style:{height:45}})}),Object(b.jsxs)("ul",{className:"flex items-center",children:[Object(b.jsx)("li",{children:Object(b.jsx)(r.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"ml-6",children:Object(b.jsx)(r.b,{to:"/productspage",children:"Products"})}),Object(b.jsx)("li",{className:"ml-6",children:Object(b.jsx)(r.b,{to:"/cart",children:Object(b.jsxs)("div",{style:{backgroundColor:"#F59E0D",display:"flex",padding:"6px 12px",borderRadius:"50px"},children:[Object(b.jsx)("span",{children:e.totalItems?e.totalItems:0}),Object(b.jsx)("img",{className:"ml-2",src:"/images/cart.png",alt:"cart-icon"})]})})})]})]})})},h=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(u,{})})},f=c(8),p=function(){var e=Object(s.useContext)(d),t=e.cart,c=e.setCart,n=Object(f.useState)([]),i=Object(l.a)(n,2),a=i[0],r=i[1],j=0,m=Object(f.useState)(!1),u=Object(l.a)(m,2),x=u[0],O=u[1];Object(f.useEffect)((function(){t.items&&(x||fetch("/api/products/cart-items",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ids:Object.keys(t.items)})}).then((function(e){return e.json()})).then((function(e){r(e),O(!0)})))}),[t,x]);var h=function(e){return t.items[e]},p=function(e,t){var c=t*h(e);return j+=c,c};return a.length?Object(b.jsxs)("div",{className:"container mx-auto lg:w-1/2 w-full pb-24",children:[Object(b.jsx)("h1",{className:"my-12 font-bold",children:"Cart Items"}),Object(b.jsx)("ul",{children:a.map((function(e){return Object(b.jsx)("li",{className:"mb-12",children:Object(b.jsxs)("div",{className:"flex items-center justify-between",children:[Object(b.jsxs)("div",{className:"flex items-center",children:[Object(b.jsx)("img",{className:"h-16",src:e.image,alt:""}),Object(b.jsx)("span",{className:"font-bold ml-4 w-48",children:e.name})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("button",{className:"bg-yellow-500 px-4 py-2 rounded-full leading-none",onClick:function(){!function(e){var s=t.items[e];if(1!==s){var n=Object(o.a)({},t);n.items[e]=s-1,n.totalItems-=1,c(n)}}(e._id)},children:"-"}),Object(b.jsx)("b",{className:"px-4",children:h(e._id)}),Object(b.jsx)("button",{className:"bg-yellow-500 px-4 py-2 rounded-full leading-none",onClick:function(){!function(e){var s=t.items[e],n=Object(o.a)({},t);n.items[e]=s+1,n.totalItems+=1,c(n)}(e._id)},children:"+"})]}),Object(b.jsxs)("span",{children:["\u20b9 ",p(e._id,e.price)]}),Object(b.jsx)("button",{className:"bg-red-500 px-4 py-2 rounded-full leading-none text-white",onClick:function(){!function(e){var s=Object(o.a)({},t),n=s.items[e];delete s.items[e],s.totalItems-=n,c(s);var i=a.filter((function(t){return t._id!==e}));r(i)}(e._id)},children:"Delete"})]})},e._id)}))}),Object(b.jsx)("hr",{className:"my-6"}),Object(b.jsxs)("div",{className:"text-right",children:[Object(b.jsx)("b",{children:"Grand Total:"})," \u20b9 ",j]}),Object(b.jsx)("div",{className:"text-right mt-6",children:Object(b.jsx)("button",{className:"bg-yellow-500 px-4 py-2 rounded-full leading-none",onClick:function(){window.alert("Order Placed Successfully!"),r([]),c({})},children:"Order Now"})})]}):Object(b.jsx)("img",{className:"mx-auto w-1/2 mt-12",src:"/images/empty-cart.png",alt:""})},g=function(){var e=Object(s.useState)({}),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(j.g)(),a=Object(j.f)(),r=Object(s.useState)(!1),m=Object(l.a)(r,2),u=m[0],x=m[1],O=Object(s.useContext)(d),h=O.cart,f=O.setCart;Object(s.useEffect)((function(){fetch("/api/products/".concat(i._id)).then((function(e){return e.json()})).then((function(e){n(e)}))}),[i._id]);return Object(b.jsxs)("div",{className:"container mx-auto mt-12",children:[Object(b.jsx)("button",{className:"mb-12 font-bold",onClick:function(){a("/")},children:"Back"}),Object(b.jsxs)("div",{className:"flex",children:[Object(b.jsx)("img",{src:c.image,alt:"pizza"}),Object(b.jsxs)("div",{className:"ml-16",children:[Object(b.jsx)("h1",{className:"text-xl font-bold",children:c.name}),Object(b.jsx)("div",{className:"text-md",children:c.size}),Object(b.jsxs)("div",{className:"font-bold mt-2",children:["\u20b9 ",c.price]}),Object(b.jsxs)("button",{className:"".concat(u?"bg-green-500":"bg-yellow-500","  py-1 px-8 rounded-full font-bold mt-4"),onClick:function(e){!function(e,t){e.preventDefault();var c=Object(o.a)({},h);c.items||(c.items={}),c.items[t._id]?c.items[t._id]+=1:c.items[t._id]=1,c.totalItems||(c.totalItems=0),c.totalItems+=1,f(c),x(!0),setTimeout((function(){x(!1)}),1e3)}(e,c)},disabled:u,children:["ADD",u?"ED":""]})]})]})]})};var N=function(){var e=Object(s.useState)({}),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){new Promise((function(e,t){e(window.localStorage.getItem("cart"))})).then((function(e){n(JSON.parse(e))}))}),[]),Object(s.useEffect)((function(){!function(e){window.localStorage.setItem("cart",JSON.stringify(e))}(JSON.stringify(c))}),[c]),Object(b.jsx)(r.a,{children:Object(b.jsx)(d.Provider,{value:{cart:c,setCart:n},children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",element:Object(b.jsx)(x,{})}),Object(b.jsx)(j.a,{path:"/productspage",element:Object(b.jsx)(h,{})}),Object(b.jsx)(j.a,{path:"/products/:_id",element:Object(b.jsx)(g,{})}),Object(b.jsx)(j.a,{path:"/cart",element:Object(b.jsx)(p,{})})]})]})})})};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3b8077d4.chunk.js.map