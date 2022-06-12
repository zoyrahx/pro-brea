(function(){"use strict";var t={5599:function(t,e,i){i(6992),i(8674),i(9601),i(7727);var a=i(144),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-main",[i("ProBreaHome")],1)],1)},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-row",{staticClass:"text-center"},[i("v-col",{attrs:{cols:"12"}},[i("h1",[t._v("Pro-BREA")]),i("h3",[t._v(" Profit and Break-Even Analysis ")]),i("p",[i("br"),t._v(" To help business owners analyze their expenses and profit, we have created this application to automate generation of financial report. Business owners can input their expenses based on each category below. Click Generate Report at the bottom to generate excel file. The report can be modified and can be used for further analysis. ")])])],1),i("v-row",{staticClass:"mb-3"},[i("div",{staticClass:"ma-0 pa-2"},[i("h3",[t._v("1. Fixed Cost (Rent, Equipment, Salary)")]),t._v(" Fixed cost refers to expenses the business owner has to pay, independent of the product quantity produced or sold. ")])]),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.fixedCost,"sort-by":"name","hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Fixed Cost")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"success",dark:""}},"v-btn",n,!1),a),[t._v(" New Expense ")])]}}]),model:{value:t.fixedDialog,callback:function(e){t.fixedDialog=e},expression:"fixedDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"text-h5"},[t._v(t._s(t.fixedFormTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Expense"},model:{value:t.fixedEditedItem.name,callback:function(e){t.$set(t.fixedEditedItem,"name",e)},expression:"fixedEditedItem.name"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Cost"},model:{value:t.fixedEditedItem.cost,callback:function(e){t.$set(t.fixedEditedItem,"cost",e)},expression:"fixedEditedItem.cost"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.close(0)}}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.save(0)}}},[t._v(" Save ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.fixedDialogDelete,callback:function(e){t.fixedDialogDelete=e},expression:"fixedDialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeDelete(0)}}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.deleteItemConfirm(0)}}},[t._v("OK")]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(0,a)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(0,a)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0}],null,!0)}),i("v-row",{staticClass:"my-3"},[i("div",{staticClass:"ma-0 pa-2"},[i("h3",[t._v("2. Unit Variable Cost (Ingredients, Packaging, Delivery)")]),t._v(" Refers to the cost of producing a unit of the product. ")])]),i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.variableCost,"sort-by":"name","hide-default-footer":""},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Unit Variable Cost")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"success",dark:""}},"v-btn",n,!1),a),[t._v(" New Expense ")])]}}]),model:{value:t.varDialog,callback:function(e){t.varDialog=e},expression:"varDialog"}},[i("v-card",[i("v-card-title",[i("span",{staticClass:"text-h5"},[t._v(t._s(t.varFormTitle))])]),i("v-card-text",[i("v-container",[i("v-row",[i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Expense"},model:{value:t.varEditedItem.name,callback:function(e){t.$set(t.varEditedItem,"name",e)},expression:"varEditedItem.name"}})],1),i("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[i("v-text-field",{attrs:{label:"Cost"},model:{value:t.varEditedItem.cost,callback:function(e){t.$set(t.varEditedItem,"cost",e)},expression:"varEditedItem.cost"}})],1)],1)],1)],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.close(1)}}},[t._v(" Cancel ")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.save(1)}}},[t._v(" Save ")])],1)],1)],1),i("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.varDialogDelete,callback:function(e){t.varDialogDelete=e},expression:"varDialogDelete"}},[i("v-card",[i("v-card-title",{staticClass:"text-h5"},[t._v("Are you sure you want to delete this item?")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.closeDelete(1)}}},[t._v("Cancel")]),i("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){return t.deleteItemConfirm(1)}}},[t._v("OK")]),i("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[i("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(1,a)}}},[t._v(" mdi-pencil ")]),i("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(1,a)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[i("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v(" Reset ")])]},proxy:!0}],null,!0)}),i("v-row",{staticClass:"mt-3"},[i("div",{staticClass:"ma-0 pa-2"},[i("h3",[t._v("3. Selling Price")]),t._v(" Price of a unit of the product. ")])]),i("v-row",{staticClass:"mb-0 pb-0"},[i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{placeholder:"0",outlined:""},model:{value:t.sellingPrice,callback:function(e){t.sellingPrice=e},expression:"sellingPrice"}})],1)],1),i("v-row",{staticClass:"mt-0"},[i("div",{staticClass:"my-0 px-2"},[i("h3",[t._v("4. Target Profit")]),t._v(" Target amount the business wants to earn. ")])]),i("v-row",{staticClass:"my-2"},[i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{placeholder:"0",outlined:""},model:{value:t.targetProfit,callback:function(e){t.targetProfit=e},expression:"targetProfit"}})],1)],1),i("v-row",{staticClass:"mb-6",attrs:{align:"center",justify:"center"}},[i("v-btn",{attrs:{"x-large":"",color:"primary"}},[t._v(" Generate Report ")])],1)],1)},s=[],l=(i(561),{name:"ProBreaHome",data:function(){return{fixedDialog:!1,varDialog:!1,fixedDialogDelete:!1,varDialogDelete:!1,fixedEditedIndex:-1,varEditedIndex:-1,sellingPrice:0,targetProfit:0,headers:[{text:"Name of Expenses",value:"name",width:"50%"},{text:"Cost",value:"cost",width:"30%"},{text:"Actions",value:"actions",sortable:!1}],fixedCost:[{title:"name",description:"",cost:0}],variableCost:[{title:"name",description:"",cost:0}],fixedEditedItem:{name:"",description:0,cost:0},fixedDefaultItem:{name:"",description:0,cost:0},varEditedItem:{name:"",description:0,cost:0},varDefaultItem:{name:"",description:0,cost:0}}},computed:{fixedFormTitle:function(){return-1===this.fixedEditedIndex?"New Expense":"Edit Expense"},varFormTitle:function(){return-1===this.varEditedIndex?"New Expense":"Edit Expense"}},watch:{fixedDialog:function(t){t||this.close(0)},varDialog:function(t){t||this.close(1)},fixedDialogDelete:function(t){t||this.closeDelete(0)},varDialogDelete:function(t){t||this.closeDelete(1)}},created:function(){this.initialize()},methods:{initialize:function(){this.fixedCost=[{name:"Rent",description:0,cost:0}]},close:function(t){var e=this;0==t?(this.fixedDialog=!1,this.$nextTick((function(){e.fixedEditedItem=Object.assign({},e.defaultItem),e.fixedEditedIndex=-1}))):(this.varDialog=!1,this.$nextTick((function(){e.varEditedItem=Object.assign({},e.defaultItem),e.varEditedIndex=-1})))},save:function(t){0==t?this.fixedEditedIndex>-1?Object.assign(this.fixedCost[this.fixedEditedIndex],this.fixedEditedItem):this.fixedCost.push(this.fixedEditedItem):this.varEditedIndex>-1?Object.assign(this.variableCost[this.varEditedIndex],this.varEditedItem):this.variableCost.push(this.varEditedItem),this.close(t)},closeDelete:function(t){var e=this;0==t?(this.fixedDialogDelete=!1,this.$nextTick((function(){e.fixedEditedItem=Object.assign({},e.defaultItem),e.fixedEditedIndex=-1}))):(this.varDialogDelete=!1,this.$nextTick((function(){e.varEditedItem=Object.assign({},e.defaultItem),e.varEditedIndex=-1})))},editItem:function(t,e){0==t?(this.fixedEditedIndex=this.fixedCost.indexOf(e),this.fixedEditedItem=Object.assign({},e),this.fixedDialog=!0):(this.varEditedIndex=this.variableCost.indexOf(e),this.varEditedItem=Object.assign({},e),this.varDialog=!0)},deleteItem:function(t,e){0==t?(this.fixedEditedIndex=this.fixedCost.indexOf(e),this.fixedEditedItem=Object.assign({},e),this.fixedDialogDelete=!0):(this.varEditedIndex=this.variableCost.indexOf(e),this.varEditedItem=Object.assign({},e),this.varDialogDelete=!0)},deleteItemConfirm:function(t){0==t?this.fixedCost.splice(this.fixedEditedIndex,1):this.variableCost.splice(this.varEditedIndex,1),this.closeDelete(t)}}}),c=l,d=i(1001),v=i(3453),u=i.n(v),f=i(680),m=i(3237),x=i(7118),p=i(2102),h=i(9846),b=i(2392),g=i(7336),C=i(1418),E=i(6428),I=i(2877),k=i(9762),D=i(5978),_=i(7688),y=i(7921),w=(0,d.Z)(c,r,s,!1,null,null,null),O=w.exports;u()(w,{VBtn:f.Z,VCard:m.Z,VCardActions:x.h7,VCardText:x.ZB,VCardTitle:x.EB,VCol:p.Z,VContainer:h.Z,VDataTable:b.Z,VDialog:g.Z,VDivider:C.Z,VIcon:E.Z,VRow:I.Z,VSpacer:k.Z,VTextField:D.Z,VToolbar:_.Z,VToolbarTitle:y.qW});var T={name:"App",components:{ProBreaHome:O},data:function(){return{}}},Z=T,P=i(7524),V=i(1009),j=(0,d.Z)(Z,n,o,!1,null,null,null),S=j.exports;u()(j,{VApp:P.Z,VMain:V.Z});var $=i(9132);a.Z.use($.Z);var B=new $.Z({});a.Z.config.productionTip=!1,new a.Z({vuetify:B,render:function(t){return t(S)}}).$mount("#app")}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,i),o.exports}i.m=t,function(){var t=[];i.O=function(e,a,n,o){if(!a){var r=1/0;for(d=0;d<t.length;d++){a=t[d][0],n=t[d][1],o=t[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(t){return i.O[t](a[l])}))?a.splice(l--,1):(s=!1,o<r&&(r=o));if(s){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,n,o]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,r=a[0],s=a[1],l=a[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in s)i.o(s,n)&&(i.m[n]=s[n]);if(l)var d=l(i)}for(e&&e(a);c<r.length;c++)o=r[c],i.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return i.O(d)},a=self["webpackChunkpro_brea"]=self["webpackChunkpro_brea"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=i.O(void 0,[998],(function(){return i(5599)}));a=i.O(a)})();
//# sourceMappingURL=app-legacy.451d42bf.js.map