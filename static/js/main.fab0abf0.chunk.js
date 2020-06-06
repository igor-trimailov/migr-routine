(this["webpackJsonpfizz-cult-app"]=this["webpackJsonpfizz-cult-app"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return qe}));var n={};a.r(n),a.d(n,"requestRoutinesData",(function(){return R})),a.d(n,"restApiCall",(function(){return O})),a.d(n,"registerUser",(function(){return S})),a.d(n,"registerUserSuccess",(function(){return x})),a.d(n,"requestRoutines",(function(){return N})),a.d(n,"receiveRoutinesSuccess",(function(){return j})),a.d(n,"receiveRoutinesError",(function(){return C})),a.d(n,"orderRoutines",(function(){return y})),a.d(n,"orderExercises",(function(){return w})),a.d(n,"startExercise",(function(){return k})),a.d(n,"setExerciseDuration",(function(){return z})),a.d(n,"finishExercise",(function(){return T})),a.d(n,"apiError",(function(){return U})),a.d(n,"ActionTypes",(function(){return I}));var r=a(0),c=a.n(r),i=a(10),o=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(5),s=a(65),u=a(66),d=a(63),m=a(68),E=a.n(m),f=function(e){return function(e){return function(t){var a=e(t);return t.type,a}}},p=a(81),_=a(21),v=a(12),b=a(57),g=a.n(b),h=a(69),R=function(){return function(){var e=Object(h.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(N()),e.next=3,fetch("/fizz-cult-app/data.json").then((function(e){return e.json()})).then((function(e){console.log("fetced data",e),t(j(e))})).catch((function(e){console.warn("data fetch error",e),t(C("Could not fetch data"))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function O(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return fetch("http://localhost:5000/api/v1"+t,Object(v.a)({method:"GET",headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"},timeout:2e4},n)).then((function(e){return 200===e.status?e.json().then((function(e){return"success"!==e.status?Promise.reject({error:e.message}):e})):Promise.reject({error:"SERVER_ERROR"})}),(function(){return Promise.reject({error:"SERVER_ERROR"})})).then((function(t){e(a(t))})).catch((function(t){e(U(t))}))}function S(e,t){return function(a){var n={method:"POST",body:new URLSearchParams(e)};return O(a,"/users/register/",t,n)}}function x(e){return{type:"REGISTER_SUCCESS",payload:e.data}}var I={REQUEST_EXERCISES:"REQUEST_EXERCISES",RECEIVE_EXERCISES_SUCCESS:"RECEIVE_EXERCISES_SUCCESS",RECEIVE_EXERCISES_ERROR:"RECEIVE_EXERCISES_ERROR",ORDER_EXERCISES:"ORDER_EXERCISES",SET_EXERCISE_DURATION:"SET_EXERCISE_DURATION",FINISH_EXERCISE:"FINISH_EXERCISE",REQUEST_ROUTINES:"REQUEST_ROUTINES",RECEIVE_ROUTINES_SUCCESS:"RECEIVE_ROUTINES_SUCCESS",RECEIVE_ROUTINES_ERROR:"RECEIVE_ROUTINES_ERROR",ORDER_ROUTINES:"ORDER_ROUTINES",START_EXERCISE:"START_EXERCISE",STOP_EXERCISE:"STOP_EXERCISE",API_ERROR:"API_ERROR"};function N(){return{type:I.REQUEST_ROUTINES}}function j(e){return{type:I.RECEIVE_ROUTINES_SUCCESS,payload:e}}function C(e){return{type:I.RECEIVE_ROUTINES_ERROR,payload:e}}function y(e){return{type:I.ORDER_ROUTINES,payload:e}}function w(e){return{type:I.ORDER_EXERCISES,payload:e}}function k(e){return{type:I.START_EXERCISE,payload:e}}function z(e){return{type:I.SET_EXERCISE_DURATION,payload:e}}function T(){return{type:I.FINISH_EXERCISE}}function U(e){return{type:I.API_ERROR,payload:e}}var A=a(17),X={previous:null,current:null};var P=Object(l.combineReducers)({exercise:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.START_EXERCISE:return null===e.current?Object(v.a)(Object(v.a)({},e),{},{current:t.payload}):{previous:e.current,current:t.payload};case I.STOP_EXERCISE:case I.FINISH_EXERCISE:return X;default:return e}},exercises:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.RECEIVE_ROUTINES_SUCCESS:return t.payload.routines.reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(_.a)({},t.id,t.exercises))}),{});case I.ORDER_EXERCISES:var a=t.payload,n=a.routineId,r=a.exercises;return Object(v.a)(Object(v.a)({},e),{},Object(_.a)({},n,e[n].length===r.length?r:e));case I.SET_EXERCISE_DURATION:var c=t.payload,i=c.routineId,o=c.exerciseId,l=c.duration;return Object(v.a)(Object(v.a)({},e),{},Object(_.a)({},i,e[i].map((function(e){return e.id===o?Object(v.a)(Object(v.a)({},e),{},{duration:l}):e}))));default:return e}},routines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.RECEIVE_ROUTINES_SUCCESS:return t.payload.routines.map((function(e){return Object(A.omit)(e,"exercises")}));case I.ORDER_ROUTINES:return e.length===t.payload.length?t.payload:e;default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"API_ERROR":return[].concat(Object(p.a)(e),[t.payload]);default:return e}}}),D={key:"root",whitelist:["routines","exercises"],storage:E.a},V=Object(d.a)(D,P);var L=a(9),B=a(70),F=a(8),G=a(14),q=(a(99),a(62)),K=a(32),H=a(20),Q="login",M={defaultLocale:"en_GB",locales:{en_GB:{locale:"en_GB",name:"English",voice:"Google UK English Female",voiceLanguage:"en-GB"},ru_RU:{locale:"ru_RU",name:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",voice:"Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439",voiceLanguage:"ru-RU"}},breakExercise:{id:-1,name:{en_GB:"Break-time!",ru_RU:"\u041f\u0435\u0440\u0435\u0440\u044b\u0432!"},image:"break.png",image_alt:"Take a Break!",sound:"break.mp3",duration:5,type:"BREAK_EXERCISE"}},W=function(){return window.AudioManager||(window.AudioManager=new Audio),window.AudioManager};function Z(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(e){var n=W();n.src="/fizz-cult-app/sounds/"+e;var r=function e(){n.removeEventListener("ended",e),0===(a-=1)?"function"===typeof t&&t():(n.addEventListener("ended",e),n.play())};n.addEventListener("ended",r),n.play()}else console.warn("Sound: "+e+" was not found")}function $(e,t,a){if(e.destination&&e.destination.index!==e.source.index){var n=function(e,t,a){var n=Array.from(e),r=n.splice(t,1),c=Object(H.a)(r,1)[0];return n.splice(a,0,c),n}(t,e.source.index,e.destination.index);"function"===typeof a&&a(n)}}function J(){var e=M.locales,t=M.defaultLocale,a=window.localStorage.getItem("fizz-cult-locale");return a&&e[a]?e[a]:e[t]}var Y=a(82);q.a.use(Y.a).use(K.f).init({lng:J().locale,fallbackLng:["en_GB","ru_RU"],whitelist:["en_GB","ru_RU"],debug:!1,backend:{loadPath:"/fizz-cult-app/locales/{{lng}}/{{ns}}.json"},interpolation:{escapeValue:!1}});q.a;var ee=a(58),te=(a(100),a(120));var ae=function(e,t){var a=Object(r.useRef)();Object(r.useEffect)((function(){a.current=e}),[e]),Object(r.useEffect)((function(){var e=null;return null!==t&&(e=setInterval((function(){a.current()}),t)),function(){return clearInterval(e)}}))};var ne=function(e,t,a){var n=Object(r.useState)(!1),c=Object(H.a)(n,2),i=c[0],o=c[1],l=Object(r.useRef)(),s=Object(r.useRef)();Object(r.useEffect)((function(){l.current=t,s.current=a}),[t,a]),Object(r.useEffect)((function(){var t=new window.SpeechSynthesisUtterance,a=function(){var e=J(),t=window.speechSynthesis.getVoices(),a=t.find((function(t){return t.name===e.voice}));return a||t.find((function(t){return t.lang.replace(/[^a-zA-Z]/gi,"")===e.voiceLanguage.replace(/[^a-zA-Z]/gi,"")}))}();function n(){o(!0)}return t.text=e,t.voice=a,t.language=J.voiceLanguage,t.onstart=l.current,t.onend=s.current,a?window.speechSynthesis.speak(t):window.speechSynthesis.addEventListener("voiceschanged",n),function(){window.speechSynthesis.cancel(),window.speechSynthesis.removeEventListener("voiceschanged",n)}}),[e,i])},re=a(4),ce=a.n(re);var ie=c.a.memo((function(e){var t=e.play,a=e.playCallback,n=e.nextCallback,r=e.previousCallback,i=e.disabled,o=ce()("exercise-controls",{"exercise-controls--disabled":i}),l=ce()({"exercise-controls__play":!t,"exercise-controls__pause":t});return c.a.createElement("div",{className:o},c.a.createElement("span",{className:"exercise-controls__previous",onClick:r}),c.a.createElement("span",{className:l,onClick:function(){i||a()}}),c.a.createElement("span",{className:"exercise-controls__next",onClick:function(){i||n()}}))}));var oe=a(77),le=a(19),se=a(118),ue=a(83),de=a(112),me=a(113),Ee=a(53);var fe=function(e){var t=e.actions,a=e.routineId,n=e.exercise,r=e.index,i=Object(te.a)(),o=i.t,l=i.i18n.language;return c.a.createElement(le.b,{draggableId:n.id.toString(),index:r},(function(e){return c.a.createElement(ue.a,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),c.a.createElement("div",{className:"exercise-list-item"},c.a.createElement("div",{className:"exercise-list-item__name"},n.name[l]),c.a.createElement("div",{className:"exercise-list-item__duration"},c.a.createElement(de.a,{as:me.a,key:"".concat(n.id,"-duration"),id:"dropdown-button-drop-duration",drop:"down",variant:"secondary",title:"".concat(n.duration," ").concat(o("exercises.exercise.duration_unit")),onSelect:function(e){t.setExerciseDuration({routineId:a,exerciseId:n.id,duration:e})}},c.a.createElement(Ee.a.Item,{eventKey:"15"},"15"),c.a.createElement(Ee.a.Item,{eventKey:"30"},"30"),c.a.createElement(Ee.a.Item,{eventKey:"45"},"45"),c.a.createElement(Ee.a.Item,{eventKey:"60"},"60")))))}))};var pe=function(e){var t=e.actions,a=e.routineId,n=e.exercises,r=e.onExerciseClick,i=function(e){t.orderExercises({routineId:a,exercises:e})};return c.a.createElement(le.a,{onDragEnd:function(e){$(e,n,i)}},c.a.createElement(le.c,{droppableId:"list"},(function(e){return c.a.createElement(se.a,Object.assign({className:"exercise-list",ref:e.innerRef},e.droppableProps),n.map((function(e,n){return c.a.createElement(fe,{actions:t,exercise:e,routineId:a,index:n,key:e.id,selectExercise:r})})),e.placeholder)})))},_e=a(117),ve=a(119);function be(){var e=Object(te.a)().i18n,t=e.language,a=e.languages,n=M.locales,r=function(t){var a;e.changeLanguage(t),a=t,J().locale!==a?window.localStorage.setItem("fizz-cult-locale",a):console.log("Error: new locale is the same as the old locale")};return c.a.createElement("div",{className:"locale-switcher"},c.a.createElement(_e.a,{placement:"left",trigger:"click",rootClose:!0,overlay:c.a.createElement(ve.a,{id:"popover-locale"},c.a.createElement(ve.a.Content,null,c.a.createElement("div",{className:"locale-switcher__locale-list"},a.map((function(e){return c.a.createElement("div",{className:"locale-switcher__locale",key:"locale-".concat(e),onClick:function(){document.body.click(),r(e)}},c.a.createElement("div",{className:"locale-switcher__locale-flag"},c.a.createElement("img",{src:"/fizz-cult-app"+"/images/flag/".concat(e,".png"),alt:e})),c.a.createElement("div",{className:"locale-switcher__locale-name"},n[e].name))})))))},c.a.createElement("img",{src:"/fizz-cult-app"+"/images/flag/".concat(t,".png"),alt:t})))}var ge=c.a.memo((function(e){var t=Object(F.g)(),a=Object(te.a)().t;return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header__content"},c.a.createElement("div",{className:"header__title"},a("header.title")),c.a.createElement("div",{className:"header__nav"},c.a.createElement("div",{className:"header__nav-item"},a("header.nav.about")),c.a.createElement("div",{className:"header__nav-item"},c.a.createElement(G.b,{to:{pathname:"".concat("/fizz-cult-app","/account/login"),state:{background:t}}},a("header.nav.login"))),c.a.createElement("div",{className:"header__nav-item"},c.a.createElement(be,e)))))})),he=a(114);var Re=function(e){var t=e.heading,a=e.text,n=e.image,r=e.children;return c.a.createElement("div",{className:"fc-header"},c.a.createElement("div",{className:"fc-header__container"},c.a.createElement("div",{className:"fc-header__text"},c.a.createElement("div",{className:"fc-header__text-heading"},t),c.a.createElement("div",{className:"fc-header__text-text"},a)),n&&c.a.createElement("div",{className:"fc-header__image"},c.a.createElement(he.a,{src:"/fizz-cult-app/images/"+n,fluid:!0})),c.a.createElement("div",{className:"fc-header__children"},r)))};var Oe=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer__container"},c.a.createElement("div",{className:"footer__header"},"FizzCultApp"),c.a.createElement("div",{className:"footer__links"},c.a.createElement(G.b,null,"Privacy policy"),c.a.createElement(G.b,null,"Contact Us")),c.a.createElement("div",{className:"footer__social"},c.a.createElement("div",{className:"footer__social-item footer__social-item--twitter"}),c.a.createElement("div",{className:"footer__social-item footer__social-item--facebook"}),c.a.createElement("div",{className:"footer__social-item footer__social-item--instagram"}),c.a.createElement("div",{className:"footer__social-item footer__social-item--linkedin"})),c.a.createElement("div",{className:"footer__copyright"},"\xa9 2020 Igor, Inc. All Rights Reserved")))};function Se(){var e=Object(F.g)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var xe=function(){return c.a.createElement("div",{className:"fc-loader"},c.a.createElement("div",{className:"fc-loader__header"}),c.a.createElement("div",{className:"fc-loader__body"},c.a.createElement("div",{className:"fc-loader__content"},c.a.createElement("span",{className:"fc-loader__spinner"}))),c.a.createElement("div",{className:"fc-loader__footer"}))};var Ie=function(e){var t=Object(te.a)().t,a=Object(F.f)(),n=e.exercises,r=e.routineId,i=e.actions;return c.a.createElement("div",{className:"exercises"},c.a.createElement(Re,{heading:t("exercises.header.heading"),text:t("exercises.header.text"),image:"logo.png"},c.a.createElement(oe.a,{variant:"secondary",onClick:function(){W();var e=n[0];e&&(i.startExercise(e),a.push("/fizz-cult-app"+"/routine/".concat(r,"/exercise/").concat(e.id)))}},t("exercises.header.button"))),c.a.createElement(pe,{actions:i,exercises:n,routineId:r}))};var Ne=function(e){var t=e.routine,a=e.index,n=e.selectRoutine,r=Object(te.a)(),i=r.t,o=r.i18n.language,l=function(){n(t.id)};return c.a.createElement(le.b,{draggableId:t.id.toString(),index:a},(function(e){return c.a.createElement("div",Object.assign({className:"routines-list__item",ref:e.innerRef},e.draggableProps,e.dragHandleProps),c.a.createElement("div",{className:"routines-list__item-container"},c.a.createElement("div",{className:"routines-list__item-image"},c.a.createElement(he.a,{src:"/fizz-cult-app/images/"+t.image.src,alt:t.image.alt,fluid:!0})),c.a.createElement("div",{className:"routines-list__item-text"},c.a.createElement("div",{className:"routines-list__item-name"},t.name[o]),c.a.createElement("div",{className:"routines-list__item-description"},t.description[o])),c.a.createElement("div",{className:"routines-list__item-button"},c.a.createElement(oe.a,{variant:"primary",onClick:l},i("routines.routine.buttons.start")))))}))};var je=function(e){var t=e.actions,a=e.routines,n=Object(F.f)(),i=Object(te.a)().t;Object(r.useEffect)((function(){t.requestRoutinesData()}),[t]);var o=function(e){t.orderRoutines(e)},l=function(e){n.push("/fizz-cult-app/routine/"+e)};return c.a.createElement("div",{className:"routines"},c.a.createElement(Re,{heading:i("routines.header.heading"),text:i("routines.header.text"),image:"logo.png"}),c.a.createElement(le.a,{onDragEnd:function(e){$(e,a,o)}},c.a.createElement(le.c,{droppableId:"list"},(function(e){return c.a.createElement("div",Object.assign({className:"routines-list",ref:e.innerRef},e.droppableProps),a.map((function(e,t){return c.a.createElement(Ne,{routine:e,index:t,key:e.id,selectRoutine:l})})),e.placeholder)}))))};function Ce(e,t){if(!e.current)return null;if(t.findIndex((function(t){return t.id===e.current.id}))===t.length-1)return null;if("BREAK_EXERCISE"!==e.current.type)return M.breakExercise;var a=t.findIndex((function(t){return t.id===e.previous.id}));return t[a+1]}var ye=Object(L.b)((function(e,t){var a=e.exercise,n=e.exercises,r=Object(A.get)(t,"match.params.routineId");return{config:M,routineId:r,exercise:a.current,previousExercise:a.previous,nextExercise:Ce(a,n[r])}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))((function(e){var t=e.exercise,a=e.nextExercise,n=e.actions,i=Object(r.useState)(Object(A.get)(t,"duration",30)),o=Object(H.a)(i,2),l=o[0],s=o[1],u=Object(r.useState)(!1),d=Object(H.a)(u,2),m=d[0],E=d[1],f=Object(r.useState)(!0),p=Object(H.a)(f,2),_=p[0],v=p[1],b=Object(F.f)(),g=Object(te.a)().i18n.language,h=t?t.name[g]:"";ae((function(){1===l&&m&&Z("beep.wav",O,2),l<6&&1!==l&&Z("beep.wav"),s(l-1)}),m?1e3:null),ne(h,(function(){v(!0),E(!1)}),(function(){setTimeout((function(){E(!0),v(!1)}),1e3)}));var R=Object(r.useCallback)((function(e){e?(E(!1),s(e.duration),n.startExercise(e)):(E(!1),n.finishExercise())}),[n]),O=Object(r.useCallback)((function(){R(a)}),[R,a]),S=Object(r.useCallback)((function(){R(t)}),[R,t]),x=Object(r.useCallback)((function(){E(!m)}),[m]),I=function(){n.finishExercise(),b.push("".concat("/fizz-cult-app","/finished"))};return t?c.a.createElement("div",{className:"exercise"},c.a.createElement("div",{className:"exercise__header"},t.name[g],c.a.createElement("div",{className:"exercise__header-icon",onClick:I})),c.a.createElement("div",{className:"exercise__body"},c.a.createElement("div",{className:"exercise__image"},c.a.createElement("img",{src:"/fizz-cult-app/images/"+t.image,alt:t.image_alt})),c.a.createElement("div",{className:"exercise__timer"},c.a.createElement(ee.a,{value:l,minValue:"0",maxValue:t.duration,text:l,styles:Object(ee.b)({strokeLinecap:"butt",textSize:"20px",pathTransitionDuration:.5,pathColor:"#13a0c3",textColor:"#13a0c3",trailColor:"#d6d6d6",backgroundColor:"#3e98c7"})}))),c.a.createElement("div",{className:"exercise__footer"},c.a.createElement(ie,{play:m,playCallback:x,nextCallback:O,previousCallback:S,disabled:_}))):(I(),null)})),we=Object(L.b)((function(e,t){var a=Object(A.get)(t,"match.params.routineId");return{routineId:a,exercises:Object(A.get)(e,["exercises",a],[])}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))(Ie),ke=Object(L.b)((function(e){return{routines:e.routines}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))(je),ze=Object(L.b)((function(e){return{}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))(ge),Te=a(115),Ue=a(116);var Ae=function(e){var t=Object(r.useState)(!1),a=Object(H.a)(t,2),n=a[0],i=a[1],o=Object(L.d)((function(e){return e.errors})),l=Object(L.c)();console.log("ERRORS: ",o);var s=function(){i(!n)},u=Object(r.useCallback)((function(e){if(e.preventDefault(),console.log("does something"),e.target.checkValidity()){var t=new FormData(e.target);l(S(t))}else console.log("validation error")}),[l]),d=function(e){var t=e.text;return c.a.createElement("div",{className:"fc-form__link",onClick:s},t)},m=n?c.a.createElement("span",null,c.a.createElement(d,{text:"Sign In"})," / Sign Up"):c.a.createElement("span",null,"Sing In / ",c.a.createElement(d,{text:"Sign Up"})),E=ce()("fc-form__label",{"fc-form__label--hidden":!n}),f=Object(v.a)({},n&&{required:"required"}),p=Object(v.a)({},n&&{pattern:"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,32}$"});return c.a.createElement("div",{className:"fc-form"},c.a.createElement("div",{className:"fc-form__header"},m),c.a.createElement("form",{className:"fc-form__body",onSubmit:u},c.a.createElement(Ue.a,{in:n,timeout:300,classNames:"fc-form__label"},c.a.createElement("label",{className:E,htmlFor:"fc-name"},"Name",c.a.createElement("input",Object.assign({className:"fc-form__input",id:"fc-name",name:"name",type:"text"},f)))),c.a.createElement("label",{className:"fc-form__label",htmlFor:"fc-email"},"Email",c.a.createElement("input",{className:"fc-form__input",id:"fc-email",name:"email",type:"email",required:!0})),c.a.createElement("label",{className:"fc-form__label",htmlFor:"fc-password"},"Password",n&&c.a.createElement(_e.a,{placement:"bottom",overlay:function(e){return c.a.createElement(Te.a,e,c.a.createElement("p",null,"Password must have:"),c.a.createElement("ul",null,c.a.createElement("li",null,"length of at least 8 characters"),c.a.createElement("li",null,"at least one upper case letter"),c.a.createElement("li",null,"at least one lower case letters"),c.a.createElement("li",null,"at least one special characters"),c.a.createElement("li",null,"at least one digit")))}},c.a.createElement("span",{className:"fc-form__password-info"})),c.a.createElement("input",Object.assign({className:"fc-form__input",id:"fc-password",name:"password",type:"password",required:!0},p))),c.a.createElement("input",{type:"submit",className:"fc-form__button",value:n?"Sign Up":"Sign In"}),c.a.createElement("p",{className:"fc-form__reminder"},"Forgot password?")))},Xe=Object(L.b)((function(e,t){}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))(Ae);function Pe(){return c.a.createElement("div",{className:"fc-modal__container"},c.a.createElement("div",{className:"fc-modal__header"}),c.a.createElement("div",{className:"fc-modal__body"},c.a.createElement(Xe,null)))}var De=function(e){e.config;var t=e.subroute,a=Object(F.f)(),n=function(e){e.stopPropagation(),a.goBack()};return o.a.createPortal(c.a.createElement("div",{className:"fc-modal__wrapper",onClick:n},c.a.createElement("div",{className:"fc-modal",onClick:function(e){e.stopPropagation()}},c.a.createElement("div",{className:"fc-modal__close",onClick:n}),t===Q&&c.a.createElement(Pe,null))),document.querySelector("#modal"))},Ve=Object(L.b)((function(e,t){var a=Object(A.get)(t,"match.params.subroute");return{config:M,subroute:a}}),(function(e){return{actions:Object(l.bindActionCreators)(n,e)}}))(De);var Le=function(){var e=Object(F.f)(),t=Object(te.a)().t;return c.a.createElement("div",{className:"exercise-finished"},c.a.createElement("div",{className:"exercise-finished__header"},t("exercises.exercise.finished.header")),c.a.createElement("div",{className:"exercise-finished__body"},t("exercises.exercise.finished.body")),c.a.createElement("div",{className:"exercise-finished__footer"},c.a.createElement(oe.a,{onClick:function(){e.push("".concat("/fizz-cult-app","/"))}},t("exercises.exercise.finished.button"))))},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=[f,s.a],a=l.applyMiddleware.apply(void 0,t),n=Object(u.composeWithDevTools)(a),r=Object(l.createStore)(V,e,n),c=Object(d.b)(r);return{store:r,persistor:c}}(),Fe=Be.store,Ge=Be.persistor;function qe(){var e=Object(F.g)(),t=e.state&&e.state.background;return c.a.createElement("div",{className:"body"},c.a.createElement(F.c,{location:t||e},c.a.createElement(F.a,{exact:!0,path:"/fizz-cult-app/routine/:routineId",component:we}),c.a.createElement(F.a,{exact:!0,path:"/fizz-cult-app/routine/:routineId/exercise/:exerciseId",component:ye}),c.a.createElement(F.a,{exact:!0,path:"/fizz-cult-app/finished",component:Le}),c.a.createElement(F.a,{exact:!0,path:"/fizz-cult-app/account/login",component:ke}),c.a.createElement(F.a,{exact:!0,path:"/fizz-cult-app/",component:ke})),t&&c.a.createElement(F.a,{exact:!0,path:"/fizz-cult-app/account/:subroute",component:Ve}))}o.a.render(c.a.createElement(L.a,{store:Fe},c.a.createElement(B.a,{loading:null,persistor:Ge},c.a.createElement(G.a,{onUpdate:function(){return window.scrollTo(0,0)}},c.a.createElement(r.Suspense,{fallback:c.a.createElement(xe,null)},c.a.createElement(ze,null),c.a.createElement(Se,null),c.a.createElement(qe,null),c.a.createElement(Oe,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},86:function(e,t,a){e.exports=a(107)},99:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.fab0abf0.chunk.js.map