(this["webpackJsonpcounter-app"]=this["webpackJsonpcounter-app"]||[]).push([[0],{25:function(e,t,n){"use strict";n.r(t);var a,r,c,i,o,s,u,l,b=n(0),m=n.n(b),d=n(13),j=n.n(d),h=n(5),O=n(6),p=n(2),g=n(8),v=n(7),f=n(3),k=n(4),y=n(1),x=k.a.div(a||(a=Object(f.a)(["\n  display: flex;\n  align-items: center;\n  background-color: dodgerblue;\n  color: navy;\n  margin-bottom: 2rem;\n"]))),I=k.a.p(r||(r=Object(f.a)(["\n  padding: .5rem 1rem;\n  border-radius: 2rem;\n"]))),C=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(y.jsxs)(x,{children:[Object(y.jsx)("i",{className:"fa fa-shop"}),Object(y.jsxs)(I,{children:[" ",this.props.value," "]}),Object(y.jsx)("p",{children:" Items "})]})}}]),n}(m.a.Component),V=n(17),w=k.a.input.attrs((function(e){return{className:"btn btn-primary"}}))(c||(c=Object(f.a)(["\n  width: min-content;\n  padding: .2rem;\n  margin-right: 1rem;\n  background-color: rgb(255, 193, 7);\n  border: .2rem solid goldenrod;\n  font-size: 1.6rem;\n  font-weight: bold;\n"]))),q=k.a.input(i||(i=Object(f.a)(["\n  padding: .5rem;\n  margin-right: .5rem;\n  border-width: .2rem;\n  border-style: solid;\n"]))),B=Object(k.a)(q)(o||(o=Object(f.a)(["\n  background-color: tomato;\n  border-color: orangered;\n"]))),J=Object(k.a)(q)(s||(s=Object(f.a)(["\n  background-color: dodgerblue;\n  border-color: blue;\n"]))),N=Object(k.a)(q)(u||(u=Object(f.a)(["\n  background-color: aquamarine;\n  border-color: mediumaquamarine;\n"]))),S=k.a.div(l||(l=Object(f.a)(["\n  margin-bottom: .4rem;\n"]))),z=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).addValue=a.addValue.bind(Object(p.a)(a)),a.menosValue=a.menosValue.bind(Object(p.a)(a)),a.removeItem=a.removeItem.bind(Object(p.a)(a)),a.reset=a.reset.bind(Object(p.a)(a)),a}return Object(O.a)(n,[{key:"menosValue",value:function(e){var t=this.props.value;t[e.target.name]&&t[e.target.name]--,this.props.changeItems(t)}},{key:"addValue",value:function(e){var t=this.props.value;t[e.target.name]++,this.props.changeItems(t)}},{key:"removeItem",value:function(e){var t=this.props.value;delete t[e.target.name],this.props.changeItems(t)}},{key:"shouldBeDisabled",value:function(e){return 0===this.props.value[e]}},{key:"reset",value:function(){for(var e=this.props.totalOriginal,t={},n=1;n<=e;++n)t["item"+n]=0;this.props.changeItems(t)}},{key:"render",value:function(){var e=this,t=this.props.value,n=Object.keys(t);return Object(y.jsxs)("div",{children:[Object(y.jsx)("button",{onClick:this.reset,children:"Reset"}),n.map((function(n){return Object(y.jsxs)(S,{children:[Object(y.jsx)(w,{type:"text",value:t[n],readOnly:!0}),Object(y.jsx)(B,{type:"button",value:"+",name:n,onClick:e.addValue}),Object(y.jsx)(J,{type:"button",value:"-",name:n,onClick:e.menosValue}),Object(y.jsx)(N,{type:"button",value:"x",name:n,onClick:e.removeItem})]},Object(V.a)())}))]})}}]),n}(m.a.Component),D=function(e){Object(g.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={cant:0,totalOriginal:5,items:{item1:0,item2:0,item3:0,item4:0,item5:0}},a.changeCant=a.changeCant.bind(Object(p.a)(a)),a.changeItems=a.changeItems.bind(Object(p.a)(a)),a}return Object(O.a)(n,[{key:"changeCant",value:function(e){this.setState({cant:e})}},{key:"changeItems",value:function(e){this.setState({items:e});var t=Object.keys(e).filter((function(t){return e[t]>0})).length;t!==this.state.cant&&this.changeCant(t)}},{key:"render",value:function(){return Object(y.jsxs)("div",{children:[Object(y.jsx)(C,{value:this.state.cant}),Object(y.jsx)(z,{changeItems:this.changeItems,value:this.state.items,totalOriginal:this.state.totalOriginal})]})}}]),n}(m.a.Component);j.a.render(Object(y.jsx)(D,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.d29f654d.chunk.js.map