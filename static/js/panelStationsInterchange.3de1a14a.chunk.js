(this["webpackJsonprail-map-generator"]=this["webpackJsonprail-map-generator"]||[]).push([[60],{49:function(e,t,n){var a={"./beijing":[24,1],"./beijing.ts":[24,1],"./chengdu":[25,7],"./chengdu.ts":[25,7],"./chongqing":[26,18],"./chongqing.ts":[26,18],"./dongguan":[27,21],"./dongguan.ts":[27,21],"./edinburgh":[28,22],"./edinburgh.ts":[28,22],"./foshan":[29,2],"./foshan.ts":[29,2],"./glasgow":[30,3],"./glasgow.ts":[30,3],"./guangzhou":[31,4],"./guangzhou.ts":[31,4],"./hongkong":[32,5],"./hongkong.ts":[32,5],"./kaohsiung":[33,6],"./kaohsiung.ts":[33,6],"./london":[34,8],"./london.ts":[34,8],"./macau":[35,9],"./macau.ts":[35,9],"./newtaipei":[36,10],"./newtaipei.ts":[36,10],"./other":[37,11],"./other.ts":[37,11],"./sanfrancisco":[38,12],"./sanfrancisco.ts":[38,12],"./seoul":[39,13],"./seoul.ts":[39,13],"./shanghai":[40,14],"./shanghai.ts":[40,14],"./shenzhen":[41,15],"./shenzhen.ts":[41,15],"./taipei":[42,16],"./taipei.ts":[42,16],"./tokyo":[43,17],"./tokyo.ts":[43,17],"./toronto":[44,19],"./toronto.ts":[44,19],"./xi'an":[45,20],"./xi'an.ts":[45,20]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(a)},o.id=49,e.exports=o},50:function(e,t,n){"use strict";var a=n(0),o=n(6),i=n(2),r=Object(i.makeStyles)((function(){return Object(i.createStyles)({listItemIcon:{width:"1em",fontSize:"1.5rem",textAlign:"center"}})}));t.a=function(e){var t=Object(o.useTranslation)().t,n=r();return a.useMemo((function(){return a.createElement(a.Fragment,null,a.createElement(i.ListItem,null,a.createElement(i.ListItemIcon,null,a.createElement("span",{className:n.listItemIcon},"\u6f22")),a.createElement(i.TextField,{style:{width:"100%"},variant:"outlined",label:t("stations.edit.name.nameZH"),onChange:e.onUpdate(0),value:e.name[0]})),a.createElement(i.ListItem,null,a.createElement(i.ListItemIcon,null,a.createElement("span",{className:n.listItemIcon},"A")),a.createElement(i.TextField,{style:{width:"100%"},variant:"outlined",label:t("stations.edit.name.nameEN"),onChange:e.onUpdate(1),value:e.name[1],helperText:t("stations.edit.name.nameENHelper")})))}),[e.name.toString()])}},51:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(6),r=n(2),l=n(8),c=n(1),s=n(4),u=n(9),m=[{id:"beijing",country:"CN",name:{en:"Beijing",zh:"\u5317\u4eac"}},{id:"chengdu",country:"CN",name:{en:"Chengdu",zh:"\u6210\u90fd"}},{id:"chongqing",country:"CN",name:{en:"Chongqing","zh-Hans":"\u91cd\u5e86","zh-Hant":"\u91cd\u6176"}},{id:"dongguan",country:"CN",name:{en:"Dongguan","zh-Hans":"\u4e1c\u839e","zh-Hant":"\u6771\u839e"}},{id:"edinburgh",country:"GBSCT",name:{en:"Edinburgh",ga:"D\xf9n \xc8ideann","zh-Hans":"\u7231\u4e01\u5821","zh-Hant":"\u611b\u4e01\u5821"}},{id:"foshan",country:"CN",name:{en:"Foshan",zh:"\u4f5b\u5c71"}},{id:"glasgow",country:"GBSCT",name:{en:"Glasgow",ga:"Glaschu",zh:"\u683c\u62c9\u65af\u54e5"}},{id:"guangzhou",country:"CN",name:{en:"Guangzhou","zh-Hans":"\u5e7f\u5dde","zh-Hant":"\u5ee3\u5dde"}},{id:"hongkong",country:"HK",name:{en:"Hong Kong",zh:"\u9999\u6e2f"}},{id:"kaohsiung",country:"TW",name:{en:"Kaohsiung",zh:"\u9ad8\u96c4"}},{id:"london",country:"GBENG",name:{en:"London","zh-Hans":"\u4f26\u6566","zh-Hant":"\u502b\u6566"}},{id:"macau",country:"MO",name:{en:"Macao",pt:"Macau","zh-Hans":"\u6fb3\u95e8","zh-Hant":"\u6fb3\u9580"}},{id:"newtaipei",country:"TW",name:{en:"New Taipei",zh:"\u65b0\u5317"}},{id:"sanfrancisco",country:"US",name:{en:"San Francisco","zh-Hans":"\u65e7\u91d1\u5c71","zh-HK":"\u4e09\u85e9\u5e02","zh-TW":"\u820a\u91d1\u5c71"}},{id:"seoul",country:"KR",name:{en:"Seoul (Metropolitan Area)",ko:"\uc11c\uc6b8(\uc218\ub3c4\uad8c)","zh-Hans":"\u9996\u5c14\uff08\u9996\u90fd\u5708\uff09","zh-Hant":"\u9996\u723e\uff08\u9996\u90fd\u5708\uff09"}},{id:"shanghai",country:"CN",name:{en:"Shanghai",zh:"\u4e0a\u6d77"}},{id:"shenzhen",country:"CN",name:{en:"Shenzhen",zh:"\u6df1\u5733"}},{id:"taipei",country:"TW",name:{en:"Taipei","zh-Hans":"\u53f0\u5317","zh-Hant":"\u81fa\u5317"}},{id:"tokyo",country:"JP",name:{en:"Tokyo (Greater Tokyo Area)",ja:"\u6771\u4eac\uff08\u9996\u90fd\u570f\uff09","zh-Hans":"\u4e1c\u4eac\uff08\u9996\u90fd\u5708\uff09","zh-Hant":"\u6771\u4eac\uff08\u9996\u90fd\u5708\uff09"}},{id:"toronto",country:"CA",name:{en:"Toronto","zh-Hans":"\u591a\u4f26\u591a","zh-Hant":"\u591a\u502b\u591a"}},{id:"xian",country:"CN",name:{en:"Xi'an",zh:"\u897f\u5b89"}},{id:"other",country:"UN",name:{en:"Customise (Beta)","zh-Hans":"\u81ea\u5b9a\u4e49 (Beta)","zh-Hant":"\u81ea\u8a02 (Beta)"}}],d=Object(r.makeStyles)((function(){return Object(r.createStyles)({cityItem:{display:"flex",flexDirection:"row",alignItems:"center"},menuItemSpan:{padding:"0 .3rem"},button:{borderRadius:"50%",height:28,width:28,minWidth:0,marginRight:8,border:"solid",padding:0},inputColour:{position:"absolute",width:0,height:0,left:27,top:32},buttonContainer:{display:"flex",flexShrink:1}})})),h=o.a.memo((function(e){var t=d(),l=Object(i.useTranslation)(),h=l.t,g=l.i18n,f=o.a.useState(e.theme[2]),E=Object(s.a)(f,2),I=E[0],y=E[1],b=function(e){var t=o.a.useState([]),i=Object(s.a)(t,2),r=i[0],l=i[1],u=e[0]?n(49)("./".concat(e[0])).then((function(e){return e.default})):Promise.resolve([]);return Object(a.useEffect)((function(){"undefined"!==typeof e[0]&&("other"===e[0]?u.then((function(t){l(t.map((function(t,n){return 0===n?Object(c.a)({},t,{colour:e[2],fg:e[3]||"#fff"}):Object(c.a)({},t)})))})):u.then((function(e){return l(e)})))}),[e.toString()]),r}(e.theme);Object(a.useEffect)((function(){if(0!==b.length&&!b.filter((function(t){return t.id===e.theme[1]})).length){var t=[e.theme[0],b[0].id,b[0].colour,b[0].fg||"#fff"];e.onUpdate("theme",t)}}),[b]);Object(a.useEffect)((function(){y(e.theme[2])}),[e.theme[2]]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.ListItem,null,o.a.createElement(r.ListItemIcon,null,o.a.createElement(r.Icon,null,"location_city")),o.a.createElement(r.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:h("colour.city"),onChange:function(t){var n=e.theme.map((function(e,n){return 0===n?t.target.value:e}));e.onUpdate("theme",n)},value:e.theme[0]},m.map((function(e){return o.a.createElement(r.MenuItem,{key:e.id,value:e.id},o.a.createElement("span",{className:t.cityItem},o.a.createElement(p,{code:e.country}),o.a.createElement("span",null,Object(u.b)(e.name,g.languages))))})))),o.a.createElement(r.ListItem,null,o.a.createElement(r.ListItemIcon,null,o.a.createElement(r.Icon,null,"subway")),o.a.createElement(r.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:h("colour.line"),onChange:function(t){var n=t.target.value,a=[e.theme[0],n,b.filter((function(e){return e.id===n}))[0].colour,b.filter((function(e){return e.id===n}))[0].fg||"#fff"];e.onUpdate("theme",a)},value:e.theme[1]},b.map((function(e){return o.a.createElement(r.MenuItem,{key:e.id,value:e.id},o.a.createElement("span",{className:t.menuItemSpan,style:{backgroundColor:e.colour,color:e.fg||"#fff"}},Object(u.b)(e.name,g.languages)))})))),o.a.createElement(r.ListItem,null,o.a.createElement("div",{className:t.buttonContainer},o.a.createElement("input",{type:"color",id:"input-color",value:e.theme[2],onChange:function(t){var n=t.target.value;if(y(n),"other"!==e.theme[0]){var a=["other",e.theme[1],n,e.theme[3]];e.onUpdate("theme",a)}else{var o=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",o)}},className:t.inputColour}),o.a.createElement("label",{htmlFor:"input-color"},o.a.createElement(r.Tooltip,{title:h("colour.tooltip"),"aria-label":"colour picker"},o.a.createElement(r.Button,{className:t.button,style:{backgroundColor:e.theme[2],borderColor:e.theme[3]||"#fff"},variant:"contained",component:"span"}," ")))),o.a.createElement(r.TextField,{error:!(null===I||void 0===I?void 0:I.match(/^#[0-9a-fA-f]{6}$/g)),style:{width:"100%",marginRight:5},variant:"outlined",label:h("colour.colour"),onChange:function(t){var n=t.target.value;if(null!==n.match(/^#[0-9a-fA-f]{0,6}$/))if(y(n),"other"!==e.theme[0])if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var a=["other",e.theme[1],n,e.theme[3]];e.onUpdate("theme",a)}else{var o=["other",e.theme[1],e.theme[2],e.theme[3]];e.onUpdate("theme",o)}else if(null!==n.match(/^#[0-9a-fA-f]{6}$/)){var i=e.theme.map((function(e,t){return 2===t?n:e}));e.onUpdate("theme",i)}},value:null===I||void 0===I?void 0:I.toUpperCase()}),o.a.createElement(r.TextField,{select:!0,style:{width:"100%"},variant:"outlined",label:h("colour.fg"),onChange:function(t){var n=["other","other",e.theme[2],t.target.value];e.onUpdate("theme",n)},value:e.theme[3]||"#fff"},o.a.createElement(r.MenuItem,{key:"#fff",value:"#fff"},h("colour.fgWhite")),o.a.createElement(r.MenuItem,{key:"#000",value:"#000"},h("colour.fgBlack")))))}),(function(e,t){return e.theme.toString()===t.theme.toString()})),g=Object(r.makeStyles)((function(){return Object(r.createStyles)({img:{height:20,marginRight:"0.2rem"}})}));function p(e){var t,n=Object(i.useTranslation)().i18n,a=g(),r=[];2===e.code.length?r=e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):(t=r=["1F3F4","E007F"]).splice.apply(t,[1,0].concat(Object(l.a)(e.code.toUpperCase().split("").map((function(e){return((e.codePointAt(0)||0)+917536).toString(16).toUpperCase()})))));return["zh-CN","zh-Hans"].includes(n.language)&&"TW"===e.code&&(r=["1F3F4"]),-1!==navigator.platform.indexOf("Win32")||-1!==navigator.platform.indexOf("Win64")?o.a.createElement("img",{src:"/RailMapGenerator"+"/images/flags/".concat(r.join("-"),".svg"),className:a.img,alt:"Flag of ".concat(e.code)}):o.a.createElement("span",null,String.fromCodePoint.apply(String,Object(l.a)(r.map((function(e){return parseInt(e,16)})))))}var f=Object(r.makeStyles)((function(e){return Object(r.createStyles)({paperRoot:{width:250},listItemPaper:{justifyContent:"center"},iconRoot:{position:"absolute",color:e.palette.action.active},inputBaseRoot:{display:"block"},inputBaseInputZH:{textAlign:"center",fontSize:36,padding:0,paddingTop:6,height:45},inputBaseInputEN:{textAlign:"center",fontSize:18,padding:0,paddingBottom:6,height:"auto"}})})),E=o.a.memo((function(e){var t=f(),n=Object(i.useTranslation)().t,a=function(t,n){var a=e.lineName.map((function(e,a){return a===n?t:e}));e.onUpdate("name",a)},l=function(){e.onClose()};return o.a.createElement(r.Dialog,{onClose:l,open:e.open},o.a.createElement(r.DialogTitle,null,n("colour.title")),o.a.createElement(r.DialogContent,{dividers:!0},o.a.createElement(r.List,null,o.a.createElement(r.ListItem,{className:t.listItemPaper},o.a.createElement(r.Paper,{className:t.paperRoot,style:{backgroundColor:e.theme[2]}},o.a.createElement(r.Icon,{className:t.iconRoot},"edit"),o.a.createElement(r.InputBase,{value:e.lineName[0],classes:{root:t.inputBaseRoot,input:t.inputBaseInputZH},style:{color:e.theme[3]||"#fff"},onChange:function(e){return a(e.target.value,0)},autoFocus:!0}),o.a.createElement(r.InputBase,{value:e.lineName[1],classes:{root:t.inputBaseRoot,input:t.inputBaseInputEN},style:{color:e.theme[3]||"#fff"},onChange:function(e){return a(e.target.value,1)}}))),o.a.createElement(h,{theme:e.theme,onUpdate:e.onUpdate}))),o.a.createElement(r.DialogActions,null,o.a.createElement(r.Button,{onClick:l,color:"primary"},n("dialog.done"))))}),(function(e,t){return e.open===t.open&&e.lineName.toString()===t.lineName.toString()&&e.theme.toString()===t.theme.toString()}));t.a=E},88:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n(1),i=n(4),r=n(0),l=n.n(r),c=n(6),s=n(2),u=n(5),m=n(51),d=n(50);t.default=function(e){var t=Object(c.useTranslation)().t,n=l.a.useState(!1),a=Object(i.a)(n,2),r=a[0],u=a[1],m=function(t){var n,a=e.stnTrans.info.map((function(e){return e.length}));if(1===a.length&&(a[1]=0),a[t]+=1,n=3===a[0]&&0===a[1]?"int3":2===a[0]&&1===a[1]?"osi31":2===a[0]&&0===a[1]?"int3":1===a[0]&&2===a[1]?"osi22":1===a[0]&&1===a[1]?"osi21":1===a[0]&&0===a[1]?"int2":0===a[0]&&3===a[1]?"osi13":0===a[0]&&2===a[1]?"osi12":0===a[0]&&1===a[1]?"osi11":0===a[0]&&0===a[1]?"none":"int3",console.log(n),1===e.stnTrans.info.length&&1===t){var i=Object(o.a)({},e.stnTrans,{type:n,osi_names:n.includes("osi")?[e.stnTrans.osi_names[0]||["\u8eca\u7ad9\u540d","Stn Name"]]:[],info:e.stnTrans.info.concat([[Array(6)]])});console.log(i),e.onUpdate(i)}else{var r=Object(o.a)({},e.stnTrans,{type:n,osi_names:n.includes("osi")?[e.stnTrans.osi_names[0]||["\u8eca\u7ad9\u540d","Stn Name"]]:[],info:e.stnTrans.info.map((function(e,n){return n===t?e.concat([Array(6)]):e}))});console.log(r),e.onUpdate(r)}},d=function(t,n){var a,i=e.stnTrans.info.map((function(e){return e.length}));1===i.length&&(i[1]=0),i[t]-=1,a=3===i[0]&&0===i[1]?"int3":2===i[0]&&1===i[1]?"osi31":2===i[0]&&0===i[1]?"int3":1===i[0]&&2===i[1]?"osi22":1===i[0]&&1===i[1]?"osi21":1===i[0]&&0===i[1]?"int2":0===i[0]&&3===i[1]?"osi13":0===i[0]&&2===i[1]?"osi12":0===i[0]&&1===i[1]?"osi11":0===i[0]&&0===i[1]?"none":"int3",console.log(a);var r=Object(o.a)({},e.stnTrans,{type:a,osi_names:a.includes("osi")?[e.stnTrans.osi_names[0]||["\u8eca\u7ad9\u540d","Stn Name"]]:[],info:e.stnTrans.info.map((function(e,a){return a===t?e.slice(0,n).concat(e.slice(n+1)):e}))});console.log(r),e.onUpdate(r)};return l.a.createElement(s.List,null,l.a.createElement(s.ListItem,null,l.a.createElement(s.ListItemText,null,l.a.createElement("h3",{style:{margin:0}},t("stations.edit.interchange.within"))),l.a.createElement(s.ListItemSecondaryAction,null,l.a.createElement(s.Tooltip,{title:t("stations.edit.interchange.add"),"aria-label":"add"},l.a.createElement(s.IconButton,{onClick:function(){return m(0)}},l.a.createElement(s.Icon,null,"add_circle"))))),l.a.createElement(s.ListItem,null,l.a.createElement(g,{stnId:e.stnId,setIndex:0,onDelete:function(e){return d(0,e)}})),["mtr","shmetro"].includes(window.urlParams.get("style")||"")&&l.a.createElement(l.a.Fragment,null,l.a.createElement(s.Divider,null),l.a.createElement(s.ListItem,null,l.a.createElement(s.ListItemText,null,l.a.createElement("h3",{style:{margin:0}},t("stations.edit.interchange.osi"))),l.a.createElement(s.ListItemSecondaryAction,null,l.a.createElement(s.Button,{variant:"outlined",color:"primary",style:{lineHeight:"1rem",whiteSpace:"pre",marginRight:5},onClick:function(){return u(!0)}},e.stnTrans.osi_names[0]?e.stnTrans.osi_names[0].join("\r\n"):"\u8eca\u7ad9\u540d\r\nStn Name"),l.a.createElement(p,{open:r,osiName:e.stnTrans.osi_names[0]||["",""],stnId:e.stnId,onClose:function(){return u(!1)}}),l.a.createElement(s.Tooltip,{title:t("stations.edit.interchange.add"),"aria-label":"add"},l.a.createElement(s.IconButton,{onClick:function(){return m(1)}},l.a.createElement(s.Icon,null,"add_circle"))))),l.a.createElement(s.ListItem,null,l.a.createElement(g,{stnId:e.stnId,setIndex:1,onDelete:function(e){return d(1,e)}})),l.a.createElement(s.ListItem,null,l.a.createElement("span",null,t("stations.edit.interchange.note")))),"mtr"===window.urlParams.get("style")&&l.a.createElement(f,{stnId:e.stnId}))};var h=Object(s.makeStyles)((function(){return Object(s.createStyles)({intChip:{borderRadius:4.5,height:40,lineHeight:"1rem",margin:2},intChipText:{display:"block",textAlign:"center"},intChipTextZH:{fontSize:18,lineHeight:"1.2rem"},intChipTextEN:{fontSize:".75rem",lineHeight:".9rem",whiteSpace:"pre-wrap"},intChipLabel:{paddingLeft:6,paddingRight:6},intChipDeleteIcon:{marginLeft:-3}})})),g=function(e){var t=h(),n=l.a.useContext(u.b),a=n.param,o=n.dispatch,r=a.stn_list[e.stnId].transfer.info[e.setIndex],c=l.a.useState(-1),d=Object(i.a)(c,2),g=d[0],p=d[1],f=l.a.useState(!1),E=Object(i.a)(f,2),I=E[0],y=E[1],b=null===r||void 0===r?void 0:r.map((function(n,a){var o=l.a.createElement("span",{style:{color:n[3]}},l.a.createElement("span",{className:"".concat(t.intChipText," ").concat(t.intChipTextZH)},n[4]),l.a.createElement("span",{className:"".concat(t.intChipText," ").concat(t.intChipTextEN)},n[5]));return l.a.createElement(s.Chip,{key:a,label:o,className:t.intChip,classes:{label:t.intChipLabel,deleteIcon:t.intChipDeleteIcon},style:{backgroundColor:n[2]},onDelete:function(){return e.onDelete(a)},onClick:function(){return p(a),void y(!0)}})}));return l.a.createElement("div",null,b,l.a.createElement(m.a,{open:I,theme:-1===g?[]:[r[g][0],r[g][1],r[g][2],r[g][3]],lineName:-1===g?[]:[r[g][4],r[g][5]],onUpdate:function(t,n){"theme"===t&&o({type:"UPDATE_STATION_INTERCHANGE_INFO",stnId:e.stnId,setIdx:e.setIndex,intIdx:g,info:n.concat(Array(2))}),"name"===t&&o({type:"UPDATE_STATION_INTERCHANGE_INFO",stnId:e.stnId,setIdx:e.setIndex,intIdx:g,info:Array(4).concat(n)})},onClose:function(){return y(!1)}}))},p=l.a.memo((function(e){var t=Object(c.useTranslation)().t,n=l.a.useContext(u.b).dispatch;return l.a.createElement(s.Dialog,{open:e.open,onClose:e.onClose},l.a.createElement(s.DialogTitle,null,t("stations.edit.interchange.osiName")),l.a.createElement(s.DialogContent,{dividers:!0},l.a.createElement(s.List,null,l.a.createElement(d.a,{onUpdate:function(t){return function(a){var o=e.osiName.map((function(e,n){return n===t?a.target.value:e}));n({type:"UPDATE_STATION_OSI_NAME",stnId:e.stnId,name:o})}},name:e.osiName}))),l.a.createElement(s.DialogActions,null,l.a.createElement(s.Button,{onClick:e.onClose,color:"primary",autoFocus:!0},t("dialog.done"))))}),(function(e,t){return e.open===t.open&&e.osiName.toString()===t.osiName.toString()})),f=function(e){var t=Object(c.useTranslation)().t,n=l.a.useContext(u.b),o=n.param,i=n.dispatch,r=o.stn_list[e.stnId].transfer,m=function(t,n){"l"!==n&&"r"!==n||i({type:"UPDATE_STATION_TICK_DIREC",stnId:e.stnId,direction:n})},d=function(t,n){return i({type:"UPDATE_STATION_PAID_AREA",stnId:e.stnId,isPaid:n})};return l.a.useMemo((function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.Divider,null),l.a.createElement(s.ListItem,null,l.a.createElement(s.ListItemText,null,l.a.createElement("h3",{style:{margin:0}},t("stations.edit.interchange.settings")))),l.a.createElement(s.ListItem,null,l.a.createElement(s.ListItemIcon,null,l.a.createElement(s.Icon,null,"format_textdirection_l_to_r")),l.a.createElement(s.ListItemText,{primary:t("stations.edit.interchange.tickDirec.label"),secondary:l.a.createElement(s.RadioGroup,{name:"tick_direc",row:!0,value:r.tick_direc,onChange:m},l.a.createElement(s.FormControlLabel,{value:"l",control:l.a.createElement(s.Radio,{color:"secondary"}),label:t("stations.edit.interchange.tickDirec.l"),labelPlacement:"end"}),l.a.createElement(s.FormControlLabel,{value:"r",control:l.a.createElement(s.Radio,{color:"secondary"}),label:t("stations.edit.interchange.tickDirec.r"),labelPlacement:"end"})),secondaryTypographyProps:Object(a.a)({},"component","div")})),l.a.createElement(s.ListItem,null,l.a.createElement(s.ListItemIcon,null,l.a.createElement(s.Icon,null,"attach_money")),l.a.createElement(s.ListItemText,{primary:t("stations.edit.interchange.paidArea")}),l.a.createElement(s.ListItemSecondaryAction,null,l.a.createElement(s.Switch,{edge:"end",onChange:d,checked:r.paid_area}))))}),[e.stnId,r.tick_direc,r.paid_area])}}}]);
//# sourceMappingURL=panelStationsInterchange.3de1a14a.chunk.js.map