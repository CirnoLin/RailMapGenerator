(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[57],{79:function(e,n,t){var a={"./basic/blank":[52,0],"./basic/blank.ts":[52,0],"./basic/default":[55,28],"./basic/default.ts":[55,28],"./gzmtr/gf":[56,39],"./gzmtr/gf.ts":[56,39],"./gzmtr/gz1":[57,44],"./gzmtr/gz1.ts":[57,44],"./gzmtr/gz14":[58,45],"./gzmtr/gz14.ts":[58,45],"./gzmtr/gz2":[59,23],"./gzmtr/gz2.ts":[59,23],"./gzmtr/gz21":[60,24],"./gzmtr/gz21.ts":[60,24],"./gzmtr/gz3":[61,25],"./gzmtr/gz3.ts":[61,25],"./gzmtr/gz4":[62,26],"./gzmtr/gz4.ts":[62,26],"./gzmtr/gz5":[63,27],"./gzmtr/gz5.ts":[63,27],"./gzmtr/gz6":[64,29],"./gzmtr/gz6.ts":[64,29],"./gzmtr/gz7":[65,30],"./gzmtr/gz7.ts":[65,30],"./gzmtr/gz8":[66,31],"./gzmtr/gz8.ts":[66,31],"./gzmtr/gz9":[67,32],"./gzmtr/gz9.ts":[67,32],"./mlm/taipa":[68,33],"./mlm/taipa.ts":[68,33],"./mtr/ael":[69,34],"./mtr/ael.ts":[69,34],"./mtr/eal":[70,35],"./mtr/eal.ts":[70,35],"./mtr/isl":[71,36],"./mtr/isl.ts":[71,36],"./mtr/ktl":[72,37],"./mtr/ktl.ts":[72,37],"./mtr/mol":[73,38],"./mtr/mol.ts":[73,38],"./mtr/sile":[74,40],"./mtr/sile.ts":[74,40],"./mtr/tkl":[75,41],"./mtr/tkl.ts":[75,41],"./mtr/twl":[76,42],"./mtr/twl.ts":[76,42],"./mtr/wrl":[77,43],"./mtr/wrl.ts":[77,43]};function i(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],i=n[0];return t.e(n[1]).then((function(){return t(i)}))}i.keys=function(){return Object.keys(a)},i.id=79,e.exports=i},98:function(e,n,t){"use strict";t.r(n);var a=t(4),i=t(3),r=t(0),s=t(6),l=t(2),m=t(9),o=[{id:"basic",name:{en:"Basic",zh:"\u57fa\u672c"}},{id:"gzmtr",name:{en:"Guangzhou Metro","zh-Hans":"\u5e7f\u5dde\u5730\u94c1","zh-Hant":"\u5ee3\u5dde\u5730\u9435"}},{id:"mlm",name:{en:"Macao LRT",pt:"Metro Ligeiro de Macau","zh-Hans":"\u6fb3\u95e8\u8f7b\u8f68","zh-Hant":"\u6fb3\u9580\u8f15\u8ecc"}},{id:"mtr",name:{en:"MTR","zh-Hans":"\u6e2f\u94c1","zh-Hant":"\u6e2f\u9435"}}],z={basic:[{filename:"blank",desc:{en:"Blank",zh:"\u7a7a\u767d"}},{filename:"default",desc:{en:"Default","zh-Hans":"\u9ed8\u8ba4","zh-Hant":"\u9810\u8a2d"}}],gzmtr:[{filename:"gz1",desc:{en:"Line 1","zh-Hans":"1\u53f7\u7ebf","zh-Hant":"1\u865f\u7dda"}},{filename:"gz2",desc:{en:"Line 2","zh-Hans":"2\u53f7\u7ebf","zh-Hant":"2\u865f\u7dda"}},{filename:"gz3",desc:{en:"Line 3","zh-Hans":"3\u53f7\u7ebf","zh-Hant":"3\u865f\u7dda"}},{filename:"gz4",desc:{en:"Line 4","zh-Hans":"4\u53f7\u7ebf","zh-Hant":"4\u865f\u7dda"}},{filename:"gz5",desc:{en:"Line 5","zh-Hans":"5\u53f7\u7ebf","zh-Hant":"5\u865f\u7dda"}},{filename:"gz6",desc:{en:"Line 6","zh-Hans":"6\u53f7\u7ebf","zh-Hant":"6\u865f\u7dda"}},{filename:"gz7",desc:{en:"Line 7","zh-Hans":"7\u53f7\u7ebf","zh-Hant":"7\u865f\u7dda"}},{filename:"gz8",desc:{en:"Line 8","zh-Hans":"8\u53f7\u7ebf","zh-Hant":"8\u865f\u7dda"}},{filename:"gz9",desc:{en:"Line 9","zh-Hans":"9\u53f7\u7ebf","zh-Hant":"9\u865f\u7dda"}},{filename:"gz14",desc:{en:"Line 14","zh-Hans":"14\u53f7\u7ebf","zh-Hant":"14\u865f\u7dda"}},{filename:"gz21",desc:{en:"Line 21","zh-Hans":"21\u53f7\u7ebf","zh-Hant":"21\u865f\u7dda"}},{filename:"gf",desc:{en:"Guangfo Line","zh-Hans":"\u5e7f\u4f5b\u7ebf","zh-Hant":"\u5ee3\u4f5b\u7dda"}}],mlm:[{filename:"taipa",desc:{en:"Taipa Line",pt:"Linha Taipa","zh-Hans":"\u6c39\u4ed4\u7ebf","zh-Hant":"\u6c39\u4ed4\u7dda"}}],mtr:[{filename:"twl",desc:{en:"Tsuen Wan Line","zh-Hans":"\u8343\u6e7e\u7ebf","zh-Hant":"\u8343\u7063\u7dab"}},{filename:"ktl",desc:{en:"Kwun Tong Line","zh-Hans":"\u89c2\u5858\u7ebf","zh-Hant":"\u89c0\u5858\u7dab"}},{filename:"isl",desc:{en:"Island Line","zh-Hans":"\u6e2f\u5c9b\u7ebf","zh-Hant":"\u6e2f\u5cf6\u7dab"}},{filename:"tkl",desc:{en:"Tseung Kwan O Line","zh-Hans":"\u5c06\u519b\u6fb3\u7ebf","zh-Hant":"\u5c07\u8ecd\u6fb3\u7dab"}},{filename:"sile",desc:{en:"South Island Line","zh-Hans":"\u5357\u6e2f\u5c9b\u7ebf","zh-Hant":"\u5357\u6e2f\u5cf6\u7dab"}},{filename:"ael",desc:{en:"Airport Express","zh-Hans":"\u673a\u573a\u5feb\u7ebf","zh-Hant":"\u6a5f\u5834\u5feb\u7dab"}},{filename:"eal",desc:{en:"East Rail Line","zh-Hans":"\u4e1c\u94c1\u7ebf","zh-Hant":"\u6771\u9435\u7dab"}},{filename:"wrl",desc:{en:"West Rail Line","zh-Hans":"\u897f\u94c1\u7ebf","zh-Hant":"\u897f\u9435\u7dab"}},{filename:"mol",desc:{en:"Tuen Ma Line Phase 1","zh-Hans":"\u5c6f\u9a6c\u7ebf\u4e00\u671f","zh-Hant":"\u5c6f\u99ac\u7dab\u4e00\u671f"}}]},c=Object(l.makeStyles)((function(e){var n;return Object(l.createStyles)({root:(n={display:"flex",flexDirection:"row"},Object(i.a)(n,e.breakpoints.down("xs"),{flexDirection:"column",paddingTop:0,paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}),Object(i.a)(n,e.breakpoints.up("sm"),{height:350}),n),tab:Object(i.a)({minWidth:0},e.breakpoints.down("xs"),{minWidth:"calc(100% / 3)"}),tabpanel:{flex:1,overflow:"auto",minWidth:220}})})),g=function(e){var n=Object(s.useTranslation)(),i=n.t,g=n.i18n,h=c(),d=Object(l.useTheme)(),u=Object(l.useMediaQuery)(d.breakpoints.down("xs")),f=r.useState(0),H=Object(a.a)(f,2),p=H[0],b=H[1],L=o[p].id;return r.useMemo((function(){return r.createElement(l.Dialog,{open:e.open,onClose:function(){return e.onClose()}},r.createElement(l.DialogTitle,null,i("file.new.title")),r.createElement(l.DialogContent,{dividers:!0,className:h.root},r.createElement(l.Tabs,{value:p,orientation:u?"horizontal":"vertical",variant:"scrollable",scrollButtons:"off",indicatorColor:"primary",onChange:function(e,n){return b(n)}},o.map((function(e){return r.createElement(l.Tab,{key:e.id,label:Object(m.b)(e.name,g.languages),className:h.tab})}))),r.createElement(l.Typography,{component:"div",role:"tabpanel",className:h.tabpanel},r.createElement(l.List,{disablePadding:!0},z[o[p].id].map((function(e){return r.createElement(l.ListItem,{button:!0,onClick:(n=e.filename,function(){t(79)("./".concat(L,"/").concat(n)).then((function(e){localStorage.rmgParam=JSON.stringify(e.default),window.location.reload(!0)})).catch((function(e){return console.error(e)}))}),key:e.filename},r.createElement(l.ListItemText,{primary:Object(m.b)(e.desc,g.languages)}));var n}))))),r.createElement(l.DialogActions,null,r.createElement(l.Button,{variant:"outlined",onClick:function(){return e.onClose()},color:"primary",autoFocus:!0},i("dialog.cancel"))))}),[e.open,p,u,g.language,JSON.stringify(h)])};n.default=g}}]);
//# sourceMappingURL=panelSaveTemplateDialog.f4731c5c.chunk.js.map