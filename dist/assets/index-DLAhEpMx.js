var y1=Object.defineProperty;var S1=(n,e,t)=>e in n?y1(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Be=(n,e,t)=>S1(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function M1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ty={exports:{}},yh={},ny={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ku=Symbol.for("react.element"),E1=Symbol.for("react.portal"),w1=Symbol.for("react.fragment"),T1=Symbol.for("react.strict_mode"),A1=Symbol.for("react.profiler"),C1=Symbol.for("react.provider"),R1=Symbol.for("react.context"),b1=Symbol.for("react.forward_ref"),P1=Symbol.for("react.suspense"),L1=Symbol.for("react.memo"),D1=Symbol.for("react.lazy"),e0=Symbol.iterator;function N1(n){return n===null||typeof n!="object"?null:(n=e0&&n[e0]||n["@@iterator"],typeof n=="function"?n:null)}var iy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ry=Object.assign,sy={};function fl(n,e,t){this.props=n,this.context=e,this.refs=sy,this.updater=t||iy}fl.prototype.isReactComponent={};fl.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};fl.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function oy(){}oy.prototype=fl.prototype;function _g(n,e,t){this.props=n,this.context=e,this.refs=sy,this.updater=t||iy}var vg=_g.prototype=new oy;vg.constructor=_g;ry(vg,fl.prototype);vg.isPureReactComponent=!0;var t0=Array.isArray,ay=Object.prototype.hasOwnProperty,xg={current:null},ly={key:!0,ref:!0,__self:!0,__source:!0};function uy(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ay.call(e,i)&&!ly.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ku,type:n,key:s,ref:o,props:r,_owner:xg.current}}function I1(n,e){return{$$typeof:Ku,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function yg(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ku}function U1(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var n0=/\/+/g;function Yh(n,e){return typeof n=="object"&&n!==null&&n.key!=null?U1(""+n.key):e.toString(36)}function of(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ku:case E1:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Yh(o,0):i,t0(r)?(t="",n!=null&&(t=n.replace(n0,"$&/")+"/"),of(r,e,t,"",function(u){return u})):r!=null&&(yg(r)&&(r=I1(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(n0,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",t0(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Yh(s,a);o+=of(s,e,t,l,r)}else if(l=N1(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Yh(s,a++),o+=of(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function oc(n,e,t){if(n==null)return n;var i=[],r=0;return of(n,i,"","",function(s){return e.call(t,s,r++)}),i}function O1(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Qn={current:null},af={transition:null},F1={ReactCurrentDispatcher:Qn,ReactCurrentBatchConfig:af,ReactCurrentOwner:xg};function cy(){throw Error("act(...) is not supported in production builds of React.")}dt.Children={map:oc,forEach:function(n,e,t){oc(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return oc(n,function(){e++}),e},toArray:function(n){return oc(n,function(e){return e})||[]},only:function(n){if(!yg(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};dt.Component=fl;dt.Fragment=w1;dt.Profiler=A1;dt.PureComponent=_g;dt.StrictMode=T1;dt.Suspense=P1;dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F1;dt.act=cy;dt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=ry({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=xg.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)ay.call(e,l)&&!ly.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ku,type:n.type,key:r,ref:s,props:i,_owner:o}};dt.createContext=function(n){return n={$$typeof:R1,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:C1,_context:n},n.Consumer=n};dt.createElement=uy;dt.createFactory=function(n){var e=uy.bind(null,n);return e.type=n,e};dt.createRef=function(){return{current:null}};dt.forwardRef=function(n){return{$$typeof:b1,render:n}};dt.isValidElement=yg;dt.lazy=function(n){return{$$typeof:D1,_payload:{_status:-1,_result:n},_init:O1}};dt.memo=function(n,e){return{$$typeof:L1,type:n,compare:e===void 0?null:e}};dt.startTransition=function(n){var e=af.transition;af.transition={};try{n()}finally{af.transition=e}};dt.unstable_act=cy;dt.useCallback=function(n,e){return Qn.current.useCallback(n,e)};dt.useContext=function(n){return Qn.current.useContext(n)};dt.useDebugValue=function(){};dt.useDeferredValue=function(n){return Qn.current.useDeferredValue(n)};dt.useEffect=function(n,e){return Qn.current.useEffect(n,e)};dt.useId=function(){return Qn.current.useId()};dt.useImperativeHandle=function(n,e,t){return Qn.current.useImperativeHandle(n,e,t)};dt.useInsertionEffect=function(n,e){return Qn.current.useInsertionEffect(n,e)};dt.useLayoutEffect=function(n,e){return Qn.current.useLayoutEffect(n,e)};dt.useMemo=function(n,e){return Qn.current.useMemo(n,e)};dt.useReducer=function(n,e,t){return Qn.current.useReducer(n,e,t)};dt.useRef=function(n){return Qn.current.useRef(n)};dt.useState=function(n){return Qn.current.useState(n)};dt.useSyncExternalStore=function(n,e,t){return Qn.current.useSyncExternalStore(n,e,t)};dt.useTransition=function(){return Qn.current.useTransition()};dt.version="18.3.1";ny.exports=dt;var ue=ny.exports;const k1=M1(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z1=ue,B1=Symbol.for("react.element"),H1=Symbol.for("react.fragment"),V1=Object.prototype.hasOwnProperty,G1=z1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W1={key:!0,ref:!0,__self:!0,__source:!0};function fy(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)V1.call(e,i)&&!W1.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:B1,type:n,key:s,ref:o,props:r,_owner:G1.current}}yh.Fragment=H1;yh.jsx=fy;yh.jsxs=fy;ty.exports=yh;var V=ty.exports,dp={},hy={exports:{}},Oi={},dy={exports:{}},py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,K){var b=D.length;D.push(K);e:for(;0<b;){var ie=b-1>>>1,Te=D[ie];if(0<r(Te,K))D[ie]=K,D[b]=Te,b=ie;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],b=D.pop();if(b!==K){D[0]=b;e:for(var ie=0,Te=D.length,Ke=Te>>>1;ie<Ke;){var q=2*(ie+1)-1,re=D[q],ne=q+1,se=D[ne];if(0>r(re,b))ne<Te&&0>r(se,re)?(D[ie]=se,D[ne]=b,ie=ne):(D[ie]=re,D[q]=b,ie=q);else if(ne<Te&&0>r(se,b))D[ie]=se,D[ne]=b,ie=ne;else break e}}return K}function r(D,K){var b=D.sortIndex-K.sortIndex;return b!==0?b:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,f=3,p=!1,g=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var K=t(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=D)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=t(u)}}function S(D){if(_=!1,x(D),!g)if(t(l)!==null)g=!0,B(C);else{var K=t(u);K!==null&&j(S,K.startTime-D)}}function C(D,K){g=!1,_&&(_=!1,d(R),R=-1),p=!0;var b=f;try{for(x(K),h=t(l);h!==null&&(!(h.expirationTime>K)||D&&!T());){var ie=h.callback;if(typeof ie=="function"){h.callback=null,f=h.priorityLevel;var Te=ie(h.expirationTime<=K);K=n.unstable_now(),typeof Te=="function"?h.callback=Te:h===t(l)&&i(l),x(K)}else i(l);h=t(l)}if(h!==null)var Ke=!0;else{var q=t(u);q!==null&&j(S,q.startTime-K),Ke=!1}return Ke}finally{h=null,f=b,p=!1}}var w=!1,M=null,R=-1,N=5,y=-1;function T(){return!(n.unstable_now()-y<N)}function I(){if(M!==null){var D=n.unstable_now();y=D;var K=!0;try{K=M(!0,D)}finally{K?z():(w=!1,M=null)}}else w=!1}var z;if(typeof v=="function")z=function(){v(I)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=I,z=function(){$.postMessage(null)}}else z=function(){m(I,0)};function B(D){M=D,w||(w=!0,z())}function j(D,K){R=m(function(){D(n.unstable_now())},K)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,B(C))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(f){case 1:case 2:case 3:var K=3;break;default:K=f}var b=f;f=K;try{return D()}finally{f=b}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var b=f;f=D;try{return K()}finally{f=b}},n.unstable_scheduleCallback=function(D,K,b){var ie=n.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?ie+b:ie):b=ie,D){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=b+Te,D={id:c++,callback:K,priorityLevel:D,startTime:b,expirationTime:Te,sortIndex:-1},b>ie?(D.sortIndex=b,e(u,D),t(l)===null&&D===t(u)&&(_?(d(R),R=-1):_=!0,j(S,b-ie))):(D.sortIndex=Te,e(l,D),g||p||(g=!0,B(C))),D},n.unstable_shouldYield=T,n.unstable_wrapCallback=function(D){var K=f;return function(){var b=f;f=K;try{return D.apply(this,arguments)}finally{f=b}}}})(py);dy.exports=py;var X1=dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j1=ue,Ni=X1;function ce(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var my=new Set,Mu={};function Go(n,e){Xa(n,e),Xa(n+"Capture",e)}function Xa(n,e){for(Mu[n]=e,n=0;n<e.length;n++)my.add(e[n])}var Zr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pp=Object.prototype.hasOwnProperty,Y1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,i0={},r0={};function q1(n){return pp.call(r0,n)?!0:pp.call(i0,n)?!1:Y1.test(n)?r0[n]=!0:(i0[n]=!0,!1)}function $1(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function K1(n,e,t,i){if(e===null||typeof e>"u"||$1(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Cn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Cn[n]=new Jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Cn[e]=new Jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Cn[n]=new Jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Cn[n]=new Jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Cn[n]=new Jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Cn[n]=new Jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Cn[n]=new Jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Cn[n]=new Jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Cn[n]=new Jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Sg=/[\-:]([a-z])/g;function Mg(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Sg,Mg);Cn[e]=new Jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Sg,Mg);Cn[e]=new Jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Sg,Mg);Cn[e]=new Jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Cn[n]=new Jn(n,1,!1,n.toLowerCase(),null,!1,!1)});Cn.xlinkHref=new Jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Cn[n]=new Jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Eg(n,e,t,i){var r=Cn.hasOwnProperty(e)?Cn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(K1(e,t,r,i)&&(t=null),i||r===null?q1(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ss=j1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ac=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),wg=Symbol.for("react.strict_mode"),mp=Symbol.for("react.profiler"),gy=Symbol.for("react.provider"),_y=Symbol.for("react.context"),Tg=Symbol.for("react.forward_ref"),gp=Symbol.for("react.suspense"),_p=Symbol.for("react.suspense_list"),Ag=Symbol.for("react.memo"),gs=Symbol.for("react.lazy"),vy=Symbol.for("react.offscreen"),s0=Symbol.iterator;function xl(n){return n===null||typeof n!="object"?null:(n=s0&&n[s0]||n["@@iterator"],typeof n=="function"?n:null)}var $t=Object.assign,qh;function kl(n){if(qh===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);qh=e&&e[1]||""}return`
`+qh+n}var $h=!1;function Kh(n,e){if(!n||$h)return"";$h=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{$h=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?kl(n):""}function Z1(n){switch(n.tag){case 5:return kl(n.type);case 16:return kl("Lazy");case 13:return kl("Suspense");case 19:return kl("SuspenseList");case 0:case 2:case 15:return n=Kh(n.type,!1),n;case 11:return n=Kh(n.type.render,!1),n;case 1:return n=Kh(n.type,!0),n;default:return""}}function vp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ma:return"Fragment";case pa:return"Portal";case mp:return"Profiler";case wg:return"StrictMode";case gp:return"Suspense";case _p:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _y:return(n.displayName||"Context")+".Consumer";case gy:return(n._context.displayName||"Context")+".Provider";case Tg:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Ag:return e=n.displayName||null,e!==null?e:vp(n.type)||"Memo";case gs:e=n._payload,n=n._init;try{return vp(n(e))}catch{}}return null}function Q1(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vp(e);case 8:return e===wg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hs(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function xy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J1(n){var e=xy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function lc(n){n._valueTracker||(n._valueTracker=J1(n))}function yy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=xy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function If(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xp(n,e){var t=e.checked;return $t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function o0(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Hs(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sy(n,e){e=e.checked,e!=null&&Eg(n,"checked",e,!1)}function yp(n,e){Sy(n,e);var t=Hs(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Sp(n,e.type,t):e.hasOwnProperty("defaultValue")&&Sp(n,e.type,Hs(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function a0(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Sp(n,e,t){(e!=="number"||If(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var zl=Array.isArray;function Pa(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Hs(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Mp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return $t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function l0(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ce(92));if(zl(t)){if(1<t.length)throw Error(ce(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Hs(t)}}function My(n,e){var t=Hs(e.value),i=Hs(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function u0(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Ey(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ep(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Ey(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var uc,wy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(uc=uc||document.createElement("div"),uc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=uc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Eu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Zl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ew=["Webkit","ms","Moz","O"];Object.keys(Zl).forEach(function(n){ew.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Zl[e]=Zl[n]})});function Ty(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Zl.hasOwnProperty(n)&&Zl[n]?(""+e).trim():e+"px"}function Ay(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ty(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var tw=$t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wp(n,e){if(e){if(tw[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Tp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ap=null;function Cg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Cp=null,La=null,Da=null;function c0(n){if(n=Ju(n)){if(typeof Cp!="function")throw Error(ce(280));var e=n.stateNode;e&&(e=Th(e),Cp(n.stateNode,n.type,e))}}function Cy(n){La?Da?Da.push(n):Da=[n]:La=n}function Ry(){if(La){var n=La,e=Da;if(Da=La=null,c0(n),e)for(n=0;n<e.length;n++)c0(e[n])}}function by(n,e){return n(e)}function Py(){}var Zh=!1;function Ly(n,e,t){if(Zh)return n(e,t);Zh=!0;try{return by(n,e,t)}finally{Zh=!1,(La!==null||Da!==null)&&(Py(),Ry())}}function wu(n,e){var t=n.stateNode;if(t===null)return null;var i=Th(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ce(231,e,typeof t));return t}var Rp=!1;if(Zr)try{var yl={};Object.defineProperty(yl,"passive",{get:function(){Rp=!0}}),window.addEventListener("test",yl,yl),window.removeEventListener("test",yl,yl)}catch{Rp=!1}function nw(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ql=!1,Uf=null,Of=!1,bp=null,iw={onError:function(n){Ql=!0,Uf=n}};function rw(n,e,t,i,r,s,o,a,l){Ql=!1,Uf=null,nw.apply(iw,arguments)}function sw(n,e,t,i,r,s,o,a,l){if(rw.apply(this,arguments),Ql){if(Ql){var u=Uf;Ql=!1,Uf=null}else throw Error(ce(198));Of||(Of=!0,bp=u)}}function Wo(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Dy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function f0(n){if(Wo(n)!==n)throw Error(ce(188))}function ow(n){var e=n.alternate;if(!e){if(e=Wo(n),e===null)throw Error(ce(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return f0(r),n;if(s===i)return f0(r),e;s=s.sibling}throw Error(ce(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(t.alternate!==i)throw Error(ce(190))}if(t.tag!==3)throw Error(ce(188));return t.stateNode.current===t?n:e}function Ny(n){return n=ow(n),n!==null?Iy(n):null}function Iy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Iy(n);if(e!==null)return e;n=n.sibling}return null}var Uy=Ni.unstable_scheduleCallback,h0=Ni.unstable_cancelCallback,aw=Ni.unstable_shouldYield,lw=Ni.unstable_requestPaint,nn=Ni.unstable_now,uw=Ni.unstable_getCurrentPriorityLevel,Rg=Ni.unstable_ImmediatePriority,Oy=Ni.unstable_UserBlockingPriority,Ff=Ni.unstable_NormalPriority,cw=Ni.unstable_LowPriority,Fy=Ni.unstable_IdlePriority,Sh=null,Rr=null;function fw(n){if(Rr&&typeof Rr.onCommitFiberRoot=="function")try{Rr.onCommitFiberRoot(Sh,n,void 0,(n.current.flags&128)===128)}catch{}}var fr=Math.clz32?Math.clz32:pw,hw=Math.log,dw=Math.LN2;function pw(n){return n>>>=0,n===0?32:31-(hw(n)/dw|0)|0}var cc=64,fc=4194304;function Bl(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function kf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Bl(a):(s&=o,s!==0&&(i=Bl(s)))}else o=t&~r,o!==0?i=Bl(o):s!==0&&(i=Bl(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-fr(e),r=1<<t,i|=n[t],e&=~r;return i}function mw(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gw(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-fr(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=mw(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Pp(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ky(){var n=cc;return cc<<=1,!(cc&4194240)&&(cc=64),n}function Qh(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Zu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-fr(e),n[e]=t}function _w(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-fr(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function bg(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-fr(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Tt=0;function zy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var By,Pg,Hy,Vy,Gy,Lp=!1,hc=[],Rs=null,bs=null,Ps=null,Tu=new Map,Au=new Map,vs=[],vw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function d0(n,e){switch(n){case"focusin":case"focusout":Rs=null;break;case"dragenter":case"dragleave":bs=null;break;case"mouseover":case"mouseout":Ps=null;break;case"pointerover":case"pointerout":Tu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Au.delete(e.pointerId)}}function Sl(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ju(e),e!==null&&Pg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function xw(n,e,t,i,r){switch(e){case"focusin":return Rs=Sl(Rs,n,e,t,i,r),!0;case"dragenter":return bs=Sl(bs,n,e,t,i,r),!0;case"mouseover":return Ps=Sl(Ps,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Tu.set(s,Sl(Tu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Au.set(s,Sl(Au.get(s)||null,n,e,t,i,r)),!0}return!1}function Wy(n){var e=_o(n.target);if(e!==null){var t=Wo(e);if(t!==null){if(e=t.tag,e===13){if(e=Dy(t),e!==null){n.blockedOn=e,Gy(n.priority,function(){Hy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function lf(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Dp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Ap=i,t.target.dispatchEvent(i),Ap=null}else return e=Ju(t),e!==null&&Pg(e),n.blockedOn=t,!1;e.shift()}return!0}function p0(n,e,t){lf(n)&&t.delete(e)}function yw(){Lp=!1,Rs!==null&&lf(Rs)&&(Rs=null),bs!==null&&lf(bs)&&(bs=null),Ps!==null&&lf(Ps)&&(Ps=null),Tu.forEach(p0),Au.forEach(p0)}function Ml(n,e){n.blockedOn===e&&(n.blockedOn=null,Lp||(Lp=!0,Ni.unstable_scheduleCallback(Ni.unstable_NormalPriority,yw)))}function Cu(n){function e(r){return Ml(r,n)}if(0<hc.length){Ml(hc[0],n);for(var t=1;t<hc.length;t++){var i=hc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Rs!==null&&Ml(Rs,n),bs!==null&&Ml(bs,n),Ps!==null&&Ml(Ps,n),Tu.forEach(e),Au.forEach(e),t=0;t<vs.length;t++)i=vs[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<vs.length&&(t=vs[0],t.blockedOn===null);)Wy(t),t.blockedOn===null&&vs.shift()}var Na=ss.ReactCurrentBatchConfig,zf=!0;function Sw(n,e,t,i){var r=Tt,s=Na.transition;Na.transition=null;try{Tt=1,Lg(n,e,t,i)}finally{Tt=r,Na.transition=s}}function Mw(n,e,t,i){var r=Tt,s=Na.transition;Na.transition=null;try{Tt=4,Lg(n,e,t,i)}finally{Tt=r,Na.transition=s}}function Lg(n,e,t,i){if(zf){var r=Dp(n,e,t,i);if(r===null)ld(n,e,i,Bf,t),d0(n,i);else if(xw(r,n,e,t,i))i.stopPropagation();else if(d0(n,i),e&4&&-1<vw.indexOf(n)){for(;r!==null;){var s=Ju(r);if(s!==null&&By(s),s=Dp(n,e,t,i),s===null&&ld(n,e,i,Bf,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ld(n,e,i,null,t)}}var Bf=null;function Dp(n,e,t,i){if(Bf=null,n=Cg(i),n=_o(n),n!==null)if(e=Wo(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Dy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Bf=n,null}function Xy(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uw()){case Rg:return 1;case Oy:return 4;case Ff:case cw:return 16;case Fy:return 536870912;default:return 16}default:return 16}}var Ss=null,Dg=null,uf=null;function jy(){if(uf)return uf;var n,e=Dg,t=e.length,i,r="value"in Ss?Ss.value:Ss.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return uf=r.slice(n,1<i?1-i:void 0)}function cf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function dc(){return!0}function m0(){return!1}function Fi(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dc:m0,this.isPropagationStopped=m0,this}return $t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),e}var hl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ng=Fi(hl),Qu=$t({},hl,{view:0,detail:0}),Ew=Fi(Qu),Jh,ed,El,Mh=$t({},Qu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ig,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==El&&(El&&n.type==="mousemove"?(Jh=n.screenX-El.screenX,ed=n.screenY-El.screenY):ed=Jh=0,El=n),Jh)},movementY:function(n){return"movementY"in n?n.movementY:ed}}),g0=Fi(Mh),ww=$t({},Mh,{dataTransfer:0}),Tw=Fi(ww),Aw=$t({},Qu,{relatedTarget:0}),td=Fi(Aw),Cw=$t({},hl,{animationName:0,elapsedTime:0,pseudoElement:0}),Rw=Fi(Cw),bw=$t({},hl,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pw=Fi(bw),Lw=$t({},hl,{data:0}),_0=Fi(Lw),Dw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uw(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Iw[n])?!!e[n]:!1}function Ig(){return Uw}var Ow=$t({},Qu,{key:function(n){if(n.key){var e=Dw[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=cf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Nw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ig,charCode:function(n){return n.type==="keypress"?cf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?cf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fw=Fi(Ow),kw=$t({},Mh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),v0=Fi(kw),zw=$t({},Qu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ig}),Bw=Fi(zw),Hw=$t({},hl,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vw=Fi(Hw),Gw=$t({},Mh,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ww=Fi(Gw),Xw=[9,13,27,32],Ug=Zr&&"CompositionEvent"in window,Jl=null;Zr&&"documentMode"in document&&(Jl=document.documentMode);var jw=Zr&&"TextEvent"in window&&!Jl,Yy=Zr&&(!Ug||Jl&&8<Jl&&11>=Jl),x0=" ",y0=!1;function qy(n,e){switch(n){case"keyup":return Xw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $y(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ga=!1;function Yw(n,e){switch(n){case"compositionend":return $y(e);case"keypress":return e.which!==32?null:(y0=!0,x0);case"textInput":return n=e.data,n===x0&&y0?null:n;default:return null}}function qw(n,e){if(ga)return n==="compositionend"||!Ug&&qy(n,e)?(n=jy(),uf=Dg=Ss=null,ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Yy&&e.locale!=="ko"?null:e.data;default:return null}}var $w={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function S0(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!$w[n.type]:e==="textarea"}function Ky(n,e,t,i){Cy(i),e=Hf(e,"onChange"),0<e.length&&(t=new Ng("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var eu=null,Ru=null;function Kw(n){aS(n,0)}function Eh(n){var e=xa(n);if(yy(e))return n}function Zw(n,e){if(n==="change")return e}var Zy=!1;if(Zr){var nd;if(Zr){var id="oninput"in document;if(!id){var M0=document.createElement("div");M0.setAttribute("oninput","return;"),id=typeof M0.oninput=="function"}nd=id}else nd=!1;Zy=nd&&(!document.documentMode||9<document.documentMode)}function E0(){eu&&(eu.detachEvent("onpropertychange",Qy),Ru=eu=null)}function Qy(n){if(n.propertyName==="value"&&Eh(Ru)){var e=[];Ky(e,Ru,n,Cg(n)),Ly(Kw,e)}}function Qw(n,e,t){n==="focusin"?(E0(),eu=e,Ru=t,eu.attachEvent("onpropertychange",Qy)):n==="focusout"&&E0()}function Jw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Eh(Ru)}function eT(n,e){if(n==="click")return Eh(e)}function tT(n,e){if(n==="input"||n==="change")return Eh(e)}function nT(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var pr=typeof Object.is=="function"?Object.is:nT;function bu(n,e){if(pr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!pp.call(e,r)||!pr(n[r],e[r]))return!1}return!0}function w0(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function T0(n,e){var t=w0(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=w0(t)}}function Jy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Jy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function eS(){for(var n=window,e=If();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=If(n.document)}return e}function Og(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function iT(n){var e=eS(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Jy(t.ownerDocument.documentElement,t)){if(i!==null&&Og(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=T0(t,s);var o=T0(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var rT=Zr&&"documentMode"in document&&11>=document.documentMode,_a=null,Np=null,tu=null,Ip=!1;function A0(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Ip||_a==null||_a!==If(i)||(i=_a,"selectionStart"in i&&Og(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),tu&&bu(tu,i)||(tu=i,i=Hf(Np,"onSelect"),0<i.length&&(e=new Ng("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=_a)))}function pc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var va={animationend:pc("Animation","AnimationEnd"),animationiteration:pc("Animation","AnimationIteration"),animationstart:pc("Animation","AnimationStart"),transitionend:pc("Transition","TransitionEnd")},rd={},tS={};Zr&&(tS=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function wh(n){if(rd[n])return rd[n];if(!va[n])return n;var e=va[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in tS)return rd[n]=e[t];return n}var nS=wh("animationend"),iS=wh("animationiteration"),rS=wh("animationstart"),sS=wh("transitionend"),oS=new Map,C0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qs(n,e){oS.set(n,e),Go(e,[n])}for(var sd=0;sd<C0.length;sd++){var od=C0[sd],sT=od.toLowerCase(),oT=od[0].toUpperCase()+od.slice(1);qs(sT,"on"+oT)}qs(nS,"onAnimationEnd");qs(iS,"onAnimationIteration");qs(rS,"onAnimationStart");qs("dblclick","onDoubleClick");qs("focusin","onFocus");qs("focusout","onBlur");qs(sS,"onTransitionEnd");Xa("onMouseEnter",["mouseout","mouseover"]);Xa("onMouseLeave",["mouseout","mouseover"]);Xa("onPointerEnter",["pointerout","pointerover"]);Xa("onPointerLeave",["pointerout","pointerover"]);Go("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Go("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Go("onBeforeInput",["compositionend","keypress","textInput","paste"]);Go("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Go("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Go("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hl));function R0(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,sw(i,e,void 0,n),n.currentTarget=null}function aS(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;R0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;R0(r,a,u),s=l}}}if(Of)throw n=bp,Of=!1,bp=null,n}function Ut(n,e){var t=e[zp];t===void 0&&(t=e[zp]=new Set);var i=n+"__bubble";t.has(i)||(lS(e,n,2,!1),t.add(i))}function ad(n,e,t){var i=0;e&&(i|=4),lS(t,n,i,e)}var mc="_reactListening"+Math.random().toString(36).slice(2);function Pu(n){if(!n[mc]){n[mc]=!0,my.forEach(function(t){t!=="selectionchange"&&(aT.has(t)||ad(t,!1,n),ad(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[mc]||(e[mc]=!0,ad("selectionchange",!1,e))}}function lS(n,e,t,i){switch(Xy(e)){case 1:var r=Sw;break;case 4:r=Mw;break;default:r=Lg}t=r.bind(null,e,t,n),r=void 0,!Rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ld(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=_o(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Ly(function(){var u=s,c=Cg(t),h=[];e:{var f=oS.get(n);if(f!==void 0){var p=Ng,g=n;switch(n){case"keypress":if(cf(t)===0)break e;case"keydown":case"keyup":p=Fw;break;case"focusin":g="focus",p=td;break;case"focusout":g="blur",p=td;break;case"beforeblur":case"afterblur":p=td;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Tw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Bw;break;case nS:case iS:case rS:p=Rw;break;case sS:p=Vw;break;case"scroll":p=Ew;break;case"wheel":p=Ww;break;case"copy":case"cut":case"paste":p=Pw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=v0}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,x;v!==null;){x=v;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,d!==null&&(S=wu(v,d),S!=null&&_.push(Lu(v,S,x)))),m)break;v=v.return}0<_.length&&(f=new p(f,g,null,t,c),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==Ap&&(g=t.relatedTarget||t.fromElement)&&(_o(g)||g[Qr]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=u,g=g?_o(g):null,g!==null&&(m=Wo(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(_=g0,S="onMouseLeave",d="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(_=v0,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?f:xa(p),x=g==null?f:xa(g),f=new _(S,v+"leave",p,t,c),f.target=m,f.relatedTarget=x,S=null,_o(c)===u&&(_=new _(d,v+"enter",g,t,c),_.target=x,_.relatedTarget=m,S=_),m=S,p&&g)t:{for(_=p,d=g,v=0,x=_;x;x=Yo(x))v++;for(x=0,S=d;S;S=Yo(S))x++;for(;0<v-x;)_=Yo(_),v--;for(;0<x-v;)d=Yo(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Yo(_),d=Yo(d)}_=null}else _=null;p!==null&&b0(h,f,p,_,!1),g!==null&&m!==null&&b0(h,m,g,_,!0)}}e:{if(f=u?xa(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=Zw;else if(S0(f))if(Zy)C=tT;else{C=Jw;var w=Qw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=eT);if(C&&(C=C(n,u))){Ky(h,C,t,c);break e}w&&w(n,f,u),n==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Sp(f,"number",f.value)}switch(w=u?xa(u):window,n){case"focusin":(S0(w)||w.contentEditable==="true")&&(_a=w,Np=u,tu=null);break;case"focusout":tu=Np=_a=null;break;case"mousedown":Ip=!0;break;case"contextmenu":case"mouseup":case"dragend":Ip=!1,A0(h,t,c);break;case"selectionchange":if(rT)break;case"keydown":case"keyup":A0(h,t,c)}var M;if(Ug)e:{switch(n){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ga?qy(n,t)&&(R="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(R="onCompositionStart");R&&(Yy&&t.locale!=="ko"&&(ga||R!=="onCompositionStart"?R==="onCompositionEnd"&&ga&&(M=jy()):(Ss=c,Dg="value"in Ss?Ss.value:Ss.textContent,ga=!0)),w=Hf(u,R),0<w.length&&(R=new _0(R,n,null,t,c),h.push({event:R,listeners:w}),M?R.data=M:(M=$y(t),M!==null&&(R.data=M)))),(M=jw?Yw(n,t):qw(n,t))&&(u=Hf(u,"onBeforeInput"),0<u.length&&(c=new _0("onBeforeInput","beforeinput",null,t,c),h.push({event:c,listeners:u}),c.data=M))}aS(h,e)})}function Lu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Hf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=wu(n,t),s!=null&&i.unshift(Lu(n,s,r)),s=wu(n,e),s!=null&&i.push(Lu(n,s,r))),n=n.return}return i}function Yo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function b0(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=wu(t,s),l!=null&&o.unshift(Lu(t,l,a))):r||(l=wu(t,s),l!=null&&o.push(Lu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var lT=/\r\n?/g,uT=/\u0000|\uFFFD/g;function P0(n){return(typeof n=="string"?n:""+n).replace(lT,`
`).replace(uT,"")}function gc(n,e,t){if(e=P0(e),P0(n)!==e&&t)throw Error(ce(425))}function Vf(){}var Up=null,Op=null;function Fp(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kp=typeof setTimeout=="function"?setTimeout:void 0,cT=typeof clearTimeout=="function"?clearTimeout:void 0,L0=typeof Promise=="function"?Promise:void 0,fT=typeof queueMicrotask=="function"?queueMicrotask:typeof L0<"u"?function(n){return L0.resolve(null).then(n).catch(hT)}:kp;function hT(n){setTimeout(function(){throw n})}function ud(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Cu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Cu(e)}function Ls(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function D0(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var dl=Math.random().toString(36).slice(2),Er="__reactFiber$"+dl,Du="__reactProps$"+dl,Qr="__reactContainer$"+dl,zp="__reactEvents$"+dl,dT="__reactListeners$"+dl,pT="__reactHandles$"+dl;function _o(n){var e=n[Er];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Qr]||t[Er]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=D0(n);n!==null;){if(t=n[Er])return t;n=D0(n)}return e}n=t,t=n.parentNode}return null}function Ju(n){return n=n[Er]||n[Qr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ce(33))}function Th(n){return n[Du]||null}var Bp=[],ya=-1;function $s(n){return{current:n}}function Ft(n){0>ya||(n.current=Bp[ya],Bp[ya]=null,ya--)}function Dt(n,e){ya++,Bp[ya]=n.current,n.current=e}var Vs={},kn=$s(Vs),ii=$s(!1),No=Vs;function ja(n,e){var t=n.type.contextTypes;if(!t)return Vs;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ri(n){return n=n.childContextTypes,n!=null}function Gf(){Ft(ii),Ft(kn)}function N0(n,e,t){if(kn.current!==Vs)throw Error(ce(168));Dt(kn,e),Dt(ii,t)}function uS(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,Q1(n)||"Unknown",r));return $t({},t,i)}function Wf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Vs,No=kn.current,Dt(kn,n),Dt(ii,ii.current),!0}function I0(n,e,t){var i=n.stateNode;if(!i)throw Error(ce(169));t?(n=uS(n,e,No),i.__reactInternalMemoizedMergedChildContext=n,Ft(ii),Ft(kn),Dt(kn,n)):Ft(ii),Dt(ii,t)}var Hr=null,Ah=!1,cd=!1;function cS(n){Hr===null?Hr=[n]:Hr.push(n)}function mT(n){Ah=!0,cS(n)}function Ks(){if(!cd&&Hr!==null){cd=!0;var n=0,e=Tt;try{var t=Hr;for(Tt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Hr=null,Ah=!1}catch(r){throw Hr!==null&&(Hr=Hr.slice(n+1)),Uy(Rg,Ks),r}finally{Tt=e,cd=!1}}return null}var Sa=[],Ma=0,Xf=null,jf=0,Hi=[],Vi=0,Io=null,Wr=1,Xr="";function ao(n,e){Sa[Ma++]=jf,Sa[Ma++]=Xf,Xf=n,jf=e}function fS(n,e,t){Hi[Vi++]=Wr,Hi[Vi++]=Xr,Hi[Vi++]=Io,Io=n;var i=Wr;n=Xr;var r=32-fr(i)-1;i&=~(1<<r),t+=1;var s=32-fr(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wr=1<<32-fr(e)+r|t<<r|i,Xr=s+n}else Wr=1<<s|t<<r|i,Xr=n}function Fg(n){n.return!==null&&(ao(n,1),fS(n,1,0))}function kg(n){for(;n===Xf;)Xf=Sa[--Ma],Sa[Ma]=null,jf=Sa[--Ma],Sa[Ma]=null;for(;n===Io;)Io=Hi[--Vi],Hi[Vi]=null,Xr=Hi[--Vi],Hi[Vi]=null,Wr=Hi[--Vi],Hi[Vi]=null}var Pi=null,Ai=null,zt=!1,ar=null;function hS(n,e){var t=Xi(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function U0(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Pi=n,Ai=Ls(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Pi=n,Ai=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Io!==null?{id:Wr,overflow:Xr}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Xi(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Pi=n,Ai=null,!0):!1;default:return!1}}function Hp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vp(n){if(zt){var e=Ai;if(e){var t=e;if(!U0(n,e)){if(Hp(n))throw Error(ce(418));e=Ls(t.nextSibling);var i=Pi;e&&U0(n,e)?hS(i,t):(n.flags=n.flags&-4097|2,zt=!1,Pi=n)}}else{if(Hp(n))throw Error(ce(418));n.flags=n.flags&-4097|2,zt=!1,Pi=n}}}function O0(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Pi=n}function _c(n){if(n!==Pi)return!1;if(!zt)return O0(n),zt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Fp(n.type,n.memoizedProps)),e&&(e=Ai)){if(Hp(n))throw dS(),Error(ce(418));for(;e;)hS(n,e),e=Ls(e.nextSibling)}if(O0(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ce(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Ai=Ls(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Ai=null}}else Ai=Pi?Ls(n.stateNode.nextSibling):null;return!0}function dS(){for(var n=Ai;n;)n=Ls(n.nextSibling)}function Ya(){Ai=Pi=null,zt=!1}function zg(n){ar===null?ar=[n]:ar.push(n)}var gT=ss.ReactCurrentBatchConfig;function wl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ce(309));var i=t.stateNode}if(!i)throw Error(ce(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ce(284));if(!t._owner)throw Error(ce(290,n))}return n}function vc(n,e){throw n=Object.prototype.toString.call(e),Error(ce(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function F0(n){var e=n._init;return e(n._payload)}function pS(n){function e(d,v){if(n){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function t(d,v){if(!n)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Us(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,n?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,v,x,S){return v===null||v.tag!==6?(v=_d(x,d.mode,S),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,S){var C=x.type;return C===ma?c(d,v,x.props.children,S,x.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gs&&F0(C)===v.type)?(S=r(v,x.props),S.ref=wl(d,v,x),S.return=d,S):(S=_f(x.type,x.key,x.props,null,d.mode,S),S.ref=wl(d,v,x),S.return=d,S)}function u(d,v,x,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=vd(x,d.mode,S),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function c(d,v,x,S,C){return v===null||v.tag!==7?(v=To(x,d.mode,S,C),v.return=d,v):(v=r(v,x),v.return=d,v)}function h(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=_d(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ac:return x=_f(v.type,v.key,v.props,null,d.mode,x),x.ref=wl(d,null,v),x.return=d,x;case pa:return v=vd(v,d.mode,x),v.return=d,v;case gs:var S=v._init;return h(d,S(v._payload),x)}if(zl(v)||xl(v))return v=To(v,d.mode,x,null),v.return=d,v;vc(d,v)}return null}function f(d,v,x,S){var C=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:a(d,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ac:return x.key===C?l(d,v,x,S):null;case pa:return x.key===C?u(d,v,x,S):null;case gs:return C=x._init,f(d,v,C(x._payload),S)}if(zl(x)||xl(x))return C!==null?null:c(d,v,x,S,null);vc(d,x)}return null}function p(d,v,x,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(x)||null,a(v,d,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ac:return d=d.get(S.key===null?x:S.key)||null,l(v,d,S,C);case pa:return d=d.get(S.key===null?x:S.key)||null,u(v,d,S,C);case gs:var w=S._init;return p(d,v,x,w(S._payload),C)}if(zl(S)||xl(S))return d=d.get(x)||null,c(v,d,S,C,null);vc(v,S)}return null}function g(d,v,x,S){for(var C=null,w=null,M=v,R=v=0,N=null;M!==null&&R<x.length;R++){M.index>R?(N=M,M=null):N=M.sibling;var y=f(d,M,x[R],S);if(y===null){M===null&&(M=N);break}n&&M&&y.alternate===null&&e(d,M),v=s(y,v,R),w===null?C=y:w.sibling=y,w=y,M=N}if(R===x.length)return t(d,M),zt&&ao(d,R),C;if(M===null){for(;R<x.length;R++)M=h(d,x[R],S),M!==null&&(v=s(M,v,R),w===null?C=M:w.sibling=M,w=M);return zt&&ao(d,R),C}for(M=i(d,M);R<x.length;R++)N=p(M,d,R,x[R],S),N!==null&&(n&&N.alternate!==null&&M.delete(N.key===null?R:N.key),v=s(N,v,R),w===null?C=N:w.sibling=N,w=N);return n&&M.forEach(function(T){return e(d,T)}),zt&&ao(d,R),C}function _(d,v,x,S){var C=xl(x);if(typeof C!="function")throw Error(ce(150));if(x=C.call(x),x==null)throw Error(ce(151));for(var w=C=null,M=v,R=v=0,N=null,y=x.next();M!==null&&!y.done;R++,y=x.next()){M.index>R?(N=M,M=null):N=M.sibling;var T=f(d,M,y.value,S);if(T===null){M===null&&(M=N);break}n&&M&&T.alternate===null&&e(d,M),v=s(T,v,R),w===null?C=T:w.sibling=T,w=T,M=N}if(y.done)return t(d,M),zt&&ao(d,R),C;if(M===null){for(;!y.done;R++,y=x.next())y=h(d,y.value,S),y!==null&&(v=s(y,v,R),w===null?C=y:w.sibling=y,w=y);return zt&&ao(d,R),C}for(M=i(d,M);!y.done;R++,y=x.next())y=p(M,d,R,y.value,S),y!==null&&(n&&y.alternate!==null&&M.delete(y.key===null?R:y.key),v=s(y,v,R),w===null?C=y:w.sibling=y,w=y);return n&&M.forEach(function(I){return e(d,I)}),zt&&ao(d,R),C}function m(d,v,x,S){if(typeof x=="object"&&x!==null&&x.type===ma&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ac:e:{for(var C=x.key,w=v;w!==null;){if(w.key===C){if(C=x.type,C===ma){if(w.tag===7){t(d,w.sibling),v=r(w,x.props.children),v.return=d,d=v;break e}}else if(w.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===gs&&F0(C)===w.type){t(d,w.sibling),v=r(w,x.props),v.ref=wl(d,w,x),v.return=d,d=v;break e}t(d,w);break}else e(d,w);w=w.sibling}x.type===ma?(v=To(x.props.children,d.mode,S,x.key),v.return=d,d=v):(S=_f(x.type,x.key,x.props,null,d.mode,S),S.ref=wl(d,v,x),S.return=d,d=S)}return o(d);case pa:e:{for(w=x.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{t(d,v);break}else e(d,v);v=v.sibling}v=vd(x,d.mode,S),v.return=d,d=v}return o(d);case gs:return w=x._init,m(d,v,w(x._payload),S)}if(zl(x))return g(d,v,x,S);if(xl(x))return _(d,v,x,S);vc(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(d,v.sibling),v=r(v,x),v.return=d,d=v):(t(d,v),v=_d(x,d.mode,S),v.return=d,d=v),o(d)):t(d,v)}return m}var qa=pS(!0),mS=pS(!1),Yf=$s(null),qf=null,Ea=null,Bg=null;function Hg(){Bg=Ea=qf=null}function Vg(n){var e=Yf.current;Ft(Yf),n._currentValue=e}function Gp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ia(n,e){qf=n,Bg=Ea=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(ni=!0),n.firstContext=null)}function Zi(n){var e=n._currentValue;if(Bg!==n)if(n={context:n,memoizedValue:e,next:null},Ea===null){if(qf===null)throw Error(ce(308));Ea=n,qf.dependencies={lanes:0,firstContext:n}}else Ea=Ea.next=n;return e}var vo=null;function Gg(n){vo===null?vo=[n]:vo.push(n)}function gS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Gg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Jr(n,i)}function Jr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var _s=!1;function Wg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _S(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function $r(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ds(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,xt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Jr(n,t)}return r=i.interleaved,r===null?(e.next=e,Gg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Jr(n,t)}function ff(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bg(n,t)}}function k0(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function $f(n,e,t,i){var r=n.updateQueue;_s=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,_=a;switch(f=e,p=t,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(p,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(p,h,f):g,f==null)break e;h=$t({},h,f);break e;case 2:_s=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Oo|=o,n.lanes=o,n.memoizedState=h}}function z0(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var ec={},br=$s(ec),Nu=$s(ec),Iu=$s(ec);function xo(n){if(n===ec)throw Error(ce(174));return n}function Xg(n,e){switch(Dt(Iu,e),Dt(Nu,n),Dt(br,ec),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ep(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ep(e,n)}Ft(br),Dt(br,e)}function $a(){Ft(br),Ft(Nu),Ft(Iu)}function vS(n){xo(Iu.current);var e=xo(br.current),t=Ep(e,n.type);e!==t&&(Dt(Nu,n),Dt(br,t))}function jg(n){Nu.current===n&&(Ft(br),Ft(Nu))}var Xt=$s(0);function Kf(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var fd=[];function Yg(){for(var n=0;n<fd.length;n++)fd[n]._workInProgressVersionPrimary=null;fd.length=0}var hf=ss.ReactCurrentDispatcher,hd=ss.ReactCurrentBatchConfig,Uo=0,qt=null,cn=null,xn=null,Zf=!1,nu=!1,Uu=0,_T=0;function Rn(){throw Error(ce(321))}function qg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!pr(n[t],e[t]))return!1;return!0}function $g(n,e,t,i,r,s){if(Uo=s,qt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hf.current=n===null||n.memoizedState===null?ST:MT,n=t(i,r),nu){s=0;do{if(nu=!1,Uu=0,25<=s)throw Error(ce(301));s+=1,xn=cn=null,e.updateQueue=null,hf.current=ET,n=t(i,r)}while(nu)}if(hf.current=Qf,e=cn!==null&&cn.next!==null,Uo=0,xn=cn=qt=null,Zf=!1,e)throw Error(ce(300));return n}function Kg(){var n=Uu!==0;return Uu=0,n}function _r(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?qt.memoizedState=xn=n:xn=xn.next=n,xn}function Qi(){if(cn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var e=xn===null?qt.memoizedState:xn.next;if(e!==null)xn=e,cn=n;else{if(n===null)throw Error(ce(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},xn===null?qt.memoizedState=xn=n:xn=xn.next=n}return xn}function Ou(n,e){return typeof e=="function"?e(n):e}function dd(n){var e=Qi(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=cn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Uo&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,qt.lanes|=c,Oo|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,pr(i,e.memoizedState)||(ni=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,qt.lanes|=s,Oo|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function pd(n){var e=Qi(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);pr(s,e.memoizedState)||(ni=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function xS(){}function yS(n,e){var t=qt,i=Qi(),r=e(),s=!pr(i.memoizedState,r);if(s&&(i.memoizedState=r,ni=!0),i=i.queue,Zg(ES.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||xn!==null&&xn.memoizedState.tag&1){if(t.flags|=2048,Fu(9,MS.bind(null,t,i,r,e),void 0,null),yn===null)throw Error(ce(349));Uo&30||SS(t,e,r)}return r}function SS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=qt.updateQueue,e===null?(e={lastEffect:null,stores:null},qt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function MS(n,e,t,i){e.value=t,e.getSnapshot=i,wS(e)&&TS(n)}function ES(n,e,t){return t(function(){wS(e)&&TS(n)})}function wS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!pr(n,t)}catch{return!0}}function TS(n){var e=Jr(n,1);e!==null&&hr(e,n,1,-1)}function B0(n){var e=_r();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ou,lastRenderedState:n},e.queue=n,n=n.dispatch=yT.bind(null,qt,n),[e.memoizedState,n]}function Fu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=qt.updateQueue,e===null?(e={lastEffect:null,stores:null},qt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function AS(){return Qi().memoizedState}function df(n,e,t,i){var r=_r();qt.flags|=n,r.memoizedState=Fu(1|e,t,void 0,i===void 0?null:i)}function Ch(n,e,t,i){var r=Qi();i=i===void 0?null:i;var s=void 0;if(cn!==null){var o=cn.memoizedState;if(s=o.destroy,i!==null&&qg(i,o.deps)){r.memoizedState=Fu(e,t,s,i);return}}qt.flags|=n,r.memoizedState=Fu(1|e,t,s,i)}function H0(n,e){return df(8390656,8,n,e)}function Zg(n,e){return Ch(2048,8,n,e)}function CS(n,e){return Ch(4,2,n,e)}function RS(n,e){return Ch(4,4,n,e)}function bS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function PS(n,e,t){return t=t!=null?t.concat([n]):null,Ch(4,4,bS.bind(null,e,n),t)}function Qg(){}function LS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function DS(n,e){var t=Qi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&qg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function NS(n,e,t){return Uo&21?(pr(t,e)||(t=ky(),qt.lanes|=t,Oo|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,ni=!0),n.memoizedState=t)}function vT(n,e){var t=Tt;Tt=t!==0&&4>t?t:4,n(!0);var i=hd.transition;hd.transition={};try{n(!1),e()}finally{Tt=t,hd.transition=i}}function IS(){return Qi().memoizedState}function xT(n,e,t){var i=Is(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},US(n))OS(e,t);else if(t=gS(n,e,t,i),t!==null){var r=Kn();hr(t,n,i,r),FS(t,e,i)}}function yT(n,e,t){var i=Is(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(US(n))OS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,pr(a,o)){var l=e.interleaved;l===null?(r.next=r,Gg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=gS(n,e,r,i),t!==null&&(r=Kn(),hr(t,n,i,r),FS(t,e,i))}}function US(n){var e=n.alternate;return n===qt||e!==null&&e===qt}function OS(n,e){nu=Zf=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function FS(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,bg(n,t)}}var Qf={readContext:Zi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},ST={readContext:Zi,useCallback:function(n,e){return _r().memoizedState=[n,e===void 0?null:e],n},useContext:Zi,useEffect:H0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,df(4194308,4,bS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return df(4194308,4,n,e)},useInsertionEffect:function(n,e){return df(4,2,n,e)},useMemo:function(n,e){var t=_r();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=_r();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=xT.bind(null,qt,n),[i.memoizedState,n]},useRef:function(n){var e=_r();return n={current:n},e.memoizedState=n},useState:B0,useDebugValue:Qg,useDeferredValue:function(n){return _r().memoizedState=n},useTransition:function(){var n=B0(!1),e=n[0];return n=vT.bind(null,n[1]),_r().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=qt,r=_r();if(zt){if(t===void 0)throw Error(ce(407));t=t()}else{if(t=e(),yn===null)throw Error(ce(349));Uo&30||SS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,H0(ES.bind(null,i,s,n),[n]),i.flags|=2048,Fu(9,MS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=_r(),e=yn.identifierPrefix;if(zt){var t=Xr,i=Wr;t=(i&~(1<<32-fr(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Uu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=_T++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},MT={readContext:Zi,useCallback:LS,useContext:Zi,useEffect:Zg,useImperativeHandle:PS,useInsertionEffect:CS,useLayoutEffect:RS,useMemo:DS,useReducer:dd,useRef:AS,useState:function(){return dd(Ou)},useDebugValue:Qg,useDeferredValue:function(n){var e=Qi();return NS(e,cn.memoizedState,n)},useTransition:function(){var n=dd(Ou)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:xS,useSyncExternalStore:yS,useId:IS,unstable_isNewReconciler:!1},ET={readContext:Zi,useCallback:LS,useContext:Zi,useEffect:Zg,useImperativeHandle:PS,useInsertionEffect:CS,useLayoutEffect:RS,useMemo:DS,useReducer:pd,useRef:AS,useState:function(){return pd(Ou)},useDebugValue:Qg,useDeferredValue:function(n){var e=Qi();return cn===null?e.memoizedState=n:NS(e,cn.memoizedState,n)},useTransition:function(){var n=pd(Ou)[0],e=Qi().memoizedState;return[n,e]},useMutableSource:xS,useSyncExternalStore:yS,useId:IS,unstable_isNewReconciler:!1};function sr(n,e){if(n&&n.defaultProps){e=$t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Wp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:$t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Rh={isMounted:function(n){return(n=n._reactInternals)?Wo(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Kn(),r=Is(n),s=$r(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ds(n,s,r),e!==null&&(hr(e,n,r,i),ff(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Kn(),r=Is(n),s=$r(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ds(n,s,r),e!==null&&(hr(e,n,r,i),ff(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Kn(),i=Is(n),r=$r(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ds(n,r,i),e!==null&&(hr(e,n,i,t),ff(e,n,i))}};function V0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!bu(t,i)||!bu(r,s):!0}function kS(n,e,t){var i=!1,r=Vs,s=e.contextType;return typeof s=="object"&&s!==null?s=Zi(s):(r=ri(e)?No:kn.current,i=e.contextTypes,s=(i=i!=null)?ja(n,r):Vs),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rh,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function G0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Rh.enqueueReplaceState(e,e.state,null)}function Xp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Wg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zi(s):(s=ri(e)?No:kn.current,r.context=ja(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rh.enqueueReplaceState(r,r.state,null),$f(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ka(n,e){try{var t="",i=e;do t+=Z1(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function md(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function jp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var wT=typeof WeakMap=="function"?WeakMap:Map;function zS(n,e,t){t=$r(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){eh||(eh=!0,nm=i),jp(n,e)},t}function BS(n,e,t){t=$r(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){jp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){jp(n,e),typeof i!="function"&&(Ns===null?Ns=new Set([this]):Ns.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function W0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new wT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=kT.bind(null,n,e,t),e.then(n,n))}function X0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function j0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=$r(-1,1),e.tag=2,Ds(t,e,1))),t.lanes|=1),n)}var TT=ss.ReactCurrentOwner,ni=!1;function Wn(n,e,t,i){e.child=n===null?mS(e,null,t,i):qa(e,n.child,t,i)}function Y0(n,e,t,i,r){t=t.render;var s=e.ref;return Ia(e,r),i=$g(n,e,t,i,s,r),t=Kg(),n!==null&&!ni?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,es(n,e,r)):(zt&&t&&Fg(e),e.flags|=1,Wn(n,e,i,r),e.child)}function q0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!o_(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,HS(n,e,s,i,r)):(n=_f(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:bu,t(o,i)&&n.ref===e.ref)return es(n,e,r)}return e.flags|=1,n=Us(s,i),n.ref=e.ref,n.return=e,e.child=n}function HS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(bu(s,i)&&n.ref===e.ref)if(ni=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(ni=!0);else return e.lanes=n.lanes,es(n,e,r)}return Yp(n,e,t,i,r)}function VS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Ta,xi),xi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Dt(Ta,xi),xi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Dt(Ta,xi),xi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Dt(Ta,xi),xi|=i;return Wn(n,e,r,t),e.child}function GS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Yp(n,e,t,i,r){var s=ri(t)?No:kn.current;return s=ja(e,s),Ia(e,r),t=$g(n,e,t,i,s,r),i=Kg(),n!==null&&!ni?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,es(n,e,r)):(zt&&i&&Fg(e),e.flags|=1,Wn(n,e,t,r),e.child)}function $0(n,e,t,i,r){if(ri(t)){var s=!0;Wf(e)}else s=!1;if(Ia(e,r),e.stateNode===null)pf(n,e),kS(e,t,i),Xp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zi(u):(u=ri(t)?No:kn.current,u=ja(e,u));var c=t.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&G0(e,o,i,u),_s=!1;var f=e.memoizedState;o.state=f,$f(e,i,o,r),l=e.memoizedState,a!==i||f!==l||ii.current||_s?(typeof c=="function"&&(Wp(e,t,c,i),l=e.memoizedState),(a=_s||V0(e,t,a,i,f,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,_S(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:sr(e.type,a),o.props=u,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zi(l):(l=ri(t)?No:kn.current,l=ja(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&G0(e,o,i,l),_s=!1,f=e.memoizedState,o.state=f,$f(e,i,o,r);var g=e.memoizedState;a!==h||f!==g||ii.current||_s?(typeof p=="function"&&(Wp(e,t,p,i),g=e.memoizedState),(u=_s||V0(e,t,u,i,f,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return qp(n,e,t,i,s,r)}function qp(n,e,t,i,r,s){GS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&I0(e,t,!1),es(n,e,s);i=e.stateNode,TT.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=qa(e,n.child,null,s),e.child=qa(e,null,a,s)):Wn(n,e,a,s),e.memoizedState=i.state,r&&I0(e,t,!0),e.child}function WS(n){var e=n.stateNode;e.pendingContext?N0(n,e.pendingContext,e.pendingContext!==e.context):e.context&&N0(n,e.context,!1),Xg(n,e.containerInfo)}function K0(n,e,t,i,r){return Ya(),zg(r),e.flags|=256,Wn(n,e,t,i),e.child}var $p={dehydrated:null,treeContext:null,retryLane:0};function Kp(n){return{baseLanes:n,cachePool:null,transitions:null}}function XS(n,e,t){var i=e.pendingProps,r=Xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Dt(Xt,r&1),n===null)return Vp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lh(o,i,0,null),n=To(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Kp(t),e.memoizedState=$p,n):Jg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return AT(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Us(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Us(a,s):(s=To(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Kp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=$p,i}return s=n.child,n=s.sibling,i=Us(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Jg(n,e){return e=Lh({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function xc(n,e,t,i){return i!==null&&zg(i),qa(e,n.child,null,t),n=Jg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function AT(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=md(Error(ce(422))),xc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Lh({mode:"visible",children:i.children},r,0,null),s=To(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qa(e,n.child,null,o),e.child.memoizedState=Kp(o),e.memoizedState=$p,s);if(!(e.mode&1))return xc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=md(s,i,void 0),xc(n,e,o,i)}if(a=(o&n.childLanes)!==0,ni||a){if(i=yn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Jr(n,r),hr(i,n,r,-1))}return s_(),i=md(Error(ce(421))),xc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=zT.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Ai=Ls(r.nextSibling),Pi=e,zt=!0,ar=null,n!==null&&(Hi[Vi++]=Wr,Hi[Vi++]=Xr,Hi[Vi++]=Io,Wr=n.id,Xr=n.overflow,Io=e),e=Jg(e,i.children),e.flags|=4096,e)}function Z0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Gp(n.return,e,t)}function gd(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function jS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Wn(n,e,i.children,t),i=Xt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Z0(n,t,e);else if(n.tag===19)Z0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Dt(Xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Kf(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),gd(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Kf(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}gd(e,!0,t,null,s);break;case"together":gd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pf(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function es(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Oo|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ce(153));if(e.child!==null){for(n=e.child,t=Us(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Us(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function CT(n,e,t){switch(e.tag){case 3:WS(e),Ya();break;case 5:vS(e);break;case 1:ri(e.type)&&Wf(e);break;case 4:Xg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Dt(Yf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Dt(Xt,Xt.current&1),e.flags|=128,null):t&e.child.childLanes?XS(n,e,t):(Dt(Xt,Xt.current&1),n=es(n,e,t),n!==null?n.sibling:null);Dt(Xt,Xt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return jS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Dt(Xt,Xt.current),i)break;return null;case 22:case 23:return e.lanes=0,VS(n,e,t)}return es(n,e,t)}var YS,Zp,qS,$S;YS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Zp=function(){};qS=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,xo(br.current);var s=null;switch(t){case"input":r=xp(n,r),i=xp(n,i),s=[];break;case"select":r=$t({},r,{value:void 0}),i=$t({},i,{value:void 0}),s=[];break;case"textarea":r=Mp(n,r),i=Mp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Vf)}wp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ut("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$S=function(n,e,t,i){t!==i&&(e.flags|=4)};function Tl(n,e){if(!zt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function bn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function RT(n,e,t){var i=e.pendingProps;switch(kg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(e),null;case 1:return ri(e.type)&&Gf(),bn(e),null;case 3:return i=e.stateNode,$a(),Ft(ii),Ft(kn),Yg(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(_c(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ar!==null&&(sm(ar),ar=null))),Zp(n,e),bn(e),null;case 5:jg(e);var r=xo(Iu.current);if(t=e.type,n!==null&&e.stateNode!=null)qS(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return bn(e),null}if(n=xo(br.current),_c(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Er]=e,i[Du]=s,n=(e.mode&1)!==0,t){case"dialog":Ut("cancel",i),Ut("close",i);break;case"iframe":case"object":case"embed":Ut("load",i);break;case"video":case"audio":for(r=0;r<Hl.length;r++)Ut(Hl[r],i);break;case"source":Ut("error",i);break;case"img":case"image":case"link":Ut("error",i),Ut("load",i);break;case"details":Ut("toggle",i);break;case"input":o0(i,s),Ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ut("invalid",i);break;case"textarea":l0(i,s),Ut("invalid",i)}wp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&gc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&gc(i.textContent,a,n),r=["children",""+a]):Mu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ut("scroll",i)}switch(t){case"input":lc(i),a0(i,s,!0);break;case"textarea":lc(i),u0(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ey(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Er]=e,n[Du]=i,YS(n,e,!1,!1),e.stateNode=n;e:{switch(o=Tp(t,i),t){case"dialog":Ut("cancel",n),Ut("close",n),r=i;break;case"iframe":case"object":case"embed":Ut("load",n),r=i;break;case"video":case"audio":for(r=0;r<Hl.length;r++)Ut(Hl[r],n);r=i;break;case"source":Ut("error",n),r=i;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),r=i;break;case"details":Ut("toggle",n),r=i;break;case"input":o0(n,i),r=xp(n,i),Ut("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=$t({},i,{value:void 0}),Ut("invalid",n);break;case"textarea":l0(n,i),r=Mp(n,i),Ut("invalid",n);break;default:r=i}wp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ay(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&wy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Eu(n,l):typeof l=="number"&&Eu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ut("scroll",n):l!=null&&Eg(n,s,l,o))}switch(t){case"input":lc(n),a0(n,i,!1);break;case"textarea":lc(n),u0(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Hs(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Pa(n,!!i.multiple,s,!1):i.defaultValue!=null&&Pa(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Vf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return bn(e),null;case 6:if(n&&e.stateNode!=null)$S(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(t=xo(Iu.current),xo(br.current),_c(e)){if(i=e.stateNode,t=e.memoizedProps,i[Er]=e,(s=i.nodeValue!==t)&&(n=Pi,n!==null))switch(n.tag){case 3:gc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&gc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Er]=e,e.stateNode=i}return bn(e),null;case 13:if(Ft(Xt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(zt&&Ai!==null&&e.mode&1&&!(e.flags&128))dS(),Ya(),e.flags|=98560,s=!1;else if(s=_c(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[Er]=e}else Ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;bn(e),s=!1}else ar!==null&&(sm(ar),ar=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Xt.current&1?hn===0&&(hn=3):s_())),e.updateQueue!==null&&(e.flags|=4),bn(e),null);case 4:return $a(),Zp(n,e),n===null&&Pu(e.stateNode.containerInfo),bn(e),null;case 10:return Vg(e.type._context),bn(e),null;case 17:return ri(e.type)&&Gf(),bn(e),null;case 19:if(Ft(Xt),s=e.memoizedState,s===null)return bn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Tl(s,!1);else{if(hn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Kf(n),o!==null){for(e.flags|=128,Tl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Dt(Xt,Xt.current&1|2),e.child}n=n.sibling}s.tail!==null&&nn()>Za&&(e.flags|=128,i=!0,Tl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Kf(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Tl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return bn(e),null}else 2*nn()-s.renderingStartTime>Za&&t!==1073741824&&(e.flags|=128,i=!0,Tl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=nn(),e.sibling=null,t=Xt.current,Dt(Xt,i?t&1|2:t&1),e):(bn(e),null);case 22:case 23:return r_(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xi&1073741824&&(bn(e),e.subtreeFlags&6&&(e.flags|=8192)):bn(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function bT(n,e){switch(kg(e),e.tag){case 1:return ri(e.type)&&Gf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $a(),Ft(ii),Ft(kn),Yg(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return jg(e),null;case 13:if(Ft(Xt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Ya()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return Ft(Xt),null;case 4:return $a(),null;case 10:return Vg(e.type._context),null;case 22:case 23:return r_(),null;case 24:return null;default:return null}}var yc=!1,In=!1,PT=typeof WeakSet=="function"?WeakSet:Set,Pe=null;function wa(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Kt(n,e,i)}else t.current=null}function Qp(n,e,t){try{t()}catch(i){Kt(n,e,i)}}var Q0=!1;function LT(n,e){if(Up=zf,n=eS(),Og(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Op={focusedElem:n,selectionRange:t},zf=!1,Pe=e;Pe!==null;)if(e=Pe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Pe=n;else for(;Pe!==null;){e=Pe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:sr(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){Kt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Pe=n;break}Pe=e.return}return g=Q0,Q0=!1,g}function iu(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qp(e,t,s)}r=r.next}while(r!==i)}}function bh(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Jp(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function KS(n){var e=n.alternate;e!==null&&(n.alternate=null,KS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Er],delete e[Du],delete e[zp],delete e[dT],delete e[pT])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ZS(n){return n.tag===5||n.tag===3||n.tag===4}function J0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ZS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function em(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Vf));else if(i!==4&&(n=n.child,n!==null))for(em(n,e,t),n=n.sibling;n!==null;)em(n,e,t),n=n.sibling}function tm(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(tm(n,e,t),n=n.sibling;n!==null;)tm(n,e,t),n=n.sibling}var En=null,or=!1;function as(n,e,t){for(t=t.child;t!==null;)QS(n,e,t),t=t.sibling}function QS(n,e,t){if(Rr&&typeof Rr.onCommitFiberUnmount=="function")try{Rr.onCommitFiberUnmount(Sh,t)}catch{}switch(t.tag){case 5:In||wa(t,e);case 6:var i=En,r=or;En=null,as(n,e,t),En=i,or=r,En!==null&&(or?(n=En,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):En.removeChild(t.stateNode));break;case 18:En!==null&&(or?(n=En,t=t.stateNode,n.nodeType===8?ud(n.parentNode,t):n.nodeType===1&&ud(n,t),Cu(n)):ud(En,t.stateNode));break;case 4:i=En,r=or,En=t.stateNode.containerInfo,or=!0,as(n,e,t),En=i,or=r;break;case 0:case 11:case 14:case 15:if(!In&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qp(t,e,o),r=r.next}while(r!==i)}as(n,e,t);break;case 1:if(!In&&(wa(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Kt(t,e,a)}as(n,e,t);break;case 21:as(n,e,t);break;case 22:t.mode&1?(In=(i=In)||t.memoizedState!==null,as(n,e,t),In=i):as(n,e,t);break;default:as(n,e,t)}}function ev(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new PT),e.forEach(function(i){var r=BT.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function er(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:En=a.stateNode,or=!1;break e;case 3:En=a.stateNode.containerInfo,or=!0;break e;case 4:En=a.stateNode.containerInfo,or=!0;break e}a=a.return}if(En===null)throw Error(ce(160));QS(s,o,r),En=null,or=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Kt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)JS(e,n),e=e.sibling}function JS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(er(e,n),gr(n),i&4){try{iu(3,n,n.return),bh(3,n)}catch(_){Kt(n,n.return,_)}try{iu(5,n,n.return)}catch(_){Kt(n,n.return,_)}}break;case 1:er(e,n),gr(n),i&512&&t!==null&&wa(t,t.return);break;case 5:if(er(e,n),gr(n),i&512&&t!==null&&wa(t,t.return),n.flags&32){var r=n.stateNode;try{Eu(r,"")}catch(_){Kt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sy(r,s),Tp(a,o);var u=Tp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Ay(r,h):c==="dangerouslySetInnerHTML"?wy(r,h):c==="children"?Eu(r,h):Eg(r,c,h,u)}switch(a){case"input":yp(r,s);break;case"textarea":My(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Pa(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Pa(r,!!s.multiple,s.defaultValue,!0):Pa(r,!!s.multiple,s.multiple?[]:"",!1))}r[Du]=s}catch(_){Kt(n,n.return,_)}}break;case 6:if(er(e,n),gr(n),i&4){if(n.stateNode===null)throw Error(ce(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){Kt(n,n.return,_)}}break;case 3:if(er(e,n),gr(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Cu(e.containerInfo)}catch(_){Kt(n,n.return,_)}break;case 4:er(e,n),gr(n);break;case 13:er(e,n),gr(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(n_=nn())),i&4&&ev(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(In=(u=In)||c,er(e,n),In=u):er(e,n),gr(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Pe=n,c=n.child;c!==null;){for(h=Pe=c;Pe!==null;){switch(f=Pe,p=f.child,f.tag){case 0:case 11:case 14:case 15:iu(4,f,f.return);break;case 1:wa(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){Kt(i,t,_)}}break;case 5:wa(f,f.return);break;case 22:if(f.memoizedState!==null){nv(h);continue}}p!==null?(p.return=f,Pe=p):nv(h)}c=c.sibling}e:for(c=null,h=n;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ty("display",o))}catch(_){Kt(n,n.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Kt(n,n.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:er(e,n),gr(n),i&4&&ev(n);break;case 21:break;default:er(e,n),gr(n)}}function gr(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(ZS(t)){var i=t;break e}t=t.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Eu(r,""),i.flags&=-33);var s=J0(n);tm(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=J0(n);em(n,a,o);break;default:throw Error(ce(161))}}catch(l){Kt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function DT(n,e,t){Pe=n,eM(n)}function eM(n,e,t){for(var i=(n.mode&1)!==0;Pe!==null;){var r=Pe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||In;a=yc;var u=In;if(yc=o,(In=l)&&!u)for(Pe=r;Pe!==null;)o=Pe,l=o.child,o.tag===22&&o.memoizedState!==null?iv(r):l!==null?(l.return=o,Pe=l):iv(r);for(;s!==null;)Pe=s,eM(s),s=s.sibling;Pe=r,yc=a,In=u}tv(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Pe=s):tv(n)}}function tv(n){for(;Pe!==null;){var e=Pe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:In||bh(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!In)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:sr(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&z0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}z0(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Cu(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}In||e.flags&512&&Jp(e)}catch(f){Kt(e,e.return,f)}}if(e===n){Pe=null;break}if(t=e.sibling,t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function nv(n){for(;Pe!==null;){var e=Pe;if(e===n){Pe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Pe=t;break}Pe=e.return}}function iv(n){for(;Pe!==null;){var e=Pe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{bh(4,e)}catch(l){Kt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Kt(e,r,l)}}var s=e.return;try{Jp(e)}catch(l){Kt(e,s,l)}break;case 5:var o=e.return;try{Jp(e)}catch(l){Kt(e,o,l)}}}catch(l){Kt(e,e.return,l)}if(e===n){Pe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Pe=a;break}Pe=e.return}}var NT=Math.ceil,Jf=ss.ReactCurrentDispatcher,e_=ss.ReactCurrentOwner,$i=ss.ReactCurrentBatchConfig,xt=0,yn=null,ln=null,Tn=0,xi=0,Ta=$s(0),hn=0,ku=null,Oo=0,Ph=0,t_=0,ru=null,ti=null,n_=0,Za=1/0,zr=null,eh=!1,nm=null,Ns=null,Sc=!1,Ms=null,th=0,su=0,im=null,mf=-1,gf=0;function Kn(){return xt&6?nn():mf!==-1?mf:mf=nn()}function Is(n){return n.mode&1?xt&2&&Tn!==0?Tn&-Tn:gT.transition!==null?(gf===0&&(gf=ky()),gf):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:Xy(n.type)),n):1}function hr(n,e,t,i){if(50<su)throw su=0,im=null,Error(ce(185));Zu(n,t,i),(!(xt&2)||n!==yn)&&(n===yn&&(!(xt&2)&&(Ph|=t),hn===4&&xs(n,Tn)),si(n,i),t===1&&xt===0&&!(e.mode&1)&&(Za=nn()+500,Ah&&Ks()))}function si(n,e){var t=n.callbackNode;gw(n,e);var i=kf(n,n===yn?Tn:0);if(i===0)t!==null&&h0(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&h0(t),e===1)n.tag===0?mT(rv.bind(null,n)):cS(rv.bind(null,n)),fT(function(){!(xt&6)&&Ks()}),t=null;else{switch(zy(i)){case 1:t=Rg;break;case 4:t=Oy;break;case 16:t=Ff;break;case 536870912:t=Fy;break;default:t=Ff}t=lM(t,tM.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function tM(n,e){if(mf=-1,gf=0,xt&6)throw Error(ce(327));var t=n.callbackNode;if(Ua()&&n.callbackNode!==t)return null;var i=kf(n,n===yn?Tn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=nh(n,i);else{e=i;var r=xt;xt|=2;var s=iM();(yn!==n||Tn!==e)&&(zr=null,Za=nn()+500,wo(n,e));do try{OT();break}catch(a){nM(n,a)}while(!0);Hg(),Jf.current=s,xt=r,ln!==null?e=0:(yn=null,Tn=0,e=hn)}if(e!==0){if(e===2&&(r=Pp(n),r!==0&&(i=r,e=rm(n,r))),e===1)throw t=ku,wo(n,0),xs(n,i),si(n,nn()),t;if(e===6)xs(n,i);else{if(r=n.current.alternate,!(i&30)&&!IT(r)&&(e=nh(n,i),e===2&&(s=Pp(n),s!==0&&(i=s,e=rm(n,s))),e===1))throw t=ku,wo(n,0),xs(n,i),si(n,nn()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:lo(n,ti,zr);break;case 3:if(xs(n,i),(i&130023424)===i&&(e=n_+500-nn(),10<e)){if(kf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Kn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=kp(lo.bind(null,n,ti,zr),e);break}lo(n,ti,zr);break;case 4:if(xs(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-fr(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=nn()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*NT(i/1960))-i,10<i){n.timeoutHandle=kp(lo.bind(null,n,ti,zr),i);break}lo(n,ti,zr);break;case 5:lo(n,ti,zr);break;default:throw Error(ce(329))}}}return si(n,nn()),n.callbackNode===t?tM.bind(null,n):null}function rm(n,e){var t=ru;return n.current.memoizedState.isDehydrated&&(wo(n,e).flags|=256),n=nh(n,e),n!==2&&(e=ti,ti=t,e!==null&&sm(e)),n}function sm(n){ti===null?ti=n:ti.push.apply(ti,n)}function IT(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!pr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xs(n,e){for(e&=~t_,e&=~Ph,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-fr(e),i=1<<t;n[t]=-1,e&=~i}}function rv(n){if(xt&6)throw Error(ce(327));Ua();var e=kf(n,0);if(!(e&1))return si(n,nn()),null;var t=nh(n,e);if(n.tag!==0&&t===2){var i=Pp(n);i!==0&&(e=i,t=rm(n,i))}if(t===1)throw t=ku,wo(n,0),xs(n,e),si(n,nn()),t;if(t===6)throw Error(ce(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,lo(n,ti,zr),si(n,nn()),null}function i_(n,e){var t=xt;xt|=1;try{return n(e)}finally{xt=t,xt===0&&(Za=nn()+500,Ah&&Ks())}}function Fo(n){Ms!==null&&Ms.tag===0&&!(xt&6)&&Ua();var e=xt;xt|=1;var t=$i.transition,i=Tt;try{if($i.transition=null,Tt=1,n)return n()}finally{Tt=i,$i.transition=t,xt=e,!(xt&6)&&Ks()}}function r_(){xi=Ta.current,Ft(Ta)}function wo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,cT(t)),ln!==null)for(t=ln.return;t!==null;){var i=t;switch(kg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Gf();break;case 3:$a(),Ft(ii),Ft(kn),Yg();break;case 5:jg(i);break;case 4:$a();break;case 13:Ft(Xt);break;case 19:Ft(Xt);break;case 10:Vg(i.type._context);break;case 22:case 23:r_()}t=t.return}if(yn=n,ln=n=Us(n.current,null),Tn=xi=e,hn=0,ku=null,t_=Ph=Oo=0,ti=ru=null,vo!==null){for(e=0;e<vo.length;e++)if(t=vo[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}vo=null}return n}function nM(n,e){do{var t=ln;try{if(Hg(),hf.current=Qf,Zf){for(var i=qt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Zf=!1}if(Uo=0,xn=cn=qt=null,nu=!1,Uu=0,e_.current=null,t===null||t.return===null){hn=1,ku=e,ln=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Tn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=X0(o);if(p!==null){p.flags&=-257,j0(p,o,a,s,e),p.mode&1&&W0(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){W0(s,u,e),s_();break e}l=Error(ce(426))}}else if(zt&&a.mode&1){var m=X0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),j0(m,o,a,s,e),zg(Ka(l,a));break e}}s=l=Ka(l,a),hn!==4&&(hn=2),ru===null?ru=[s]:ru.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=zS(s,l,e);k0(s,d);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ns===null||!Ns.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=BS(s,a,e);k0(s,S);break e}}s=s.return}while(s!==null)}sM(t)}catch(C){e=C,ln===t&&t!==null&&(ln=t=t.return);continue}break}while(!0)}function iM(){var n=Jf.current;return Jf.current=Qf,n===null?Qf:n}function s_(){(hn===0||hn===3||hn===2)&&(hn=4),yn===null||!(Oo&268435455)&&!(Ph&268435455)||xs(yn,Tn)}function nh(n,e){var t=xt;xt|=2;var i=iM();(yn!==n||Tn!==e)&&(zr=null,wo(n,e));do try{UT();break}catch(r){nM(n,r)}while(!0);if(Hg(),xt=t,Jf.current=i,ln!==null)throw Error(ce(261));return yn=null,Tn=0,hn}function UT(){for(;ln!==null;)rM(ln)}function OT(){for(;ln!==null&&!aw();)rM(ln)}function rM(n){var e=aM(n.alternate,n,xi);n.memoizedProps=n.pendingProps,e===null?sM(n):ln=e,e_.current=null}function sM(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=bT(t,e),t!==null){t.flags&=32767,ln=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,ln=null;return}}else if(t=RT(t,e,xi),t!==null){ln=t;return}if(e=e.sibling,e!==null){ln=e;return}ln=e=n}while(e!==null);hn===0&&(hn=5)}function lo(n,e,t){var i=Tt,r=$i.transition;try{$i.transition=null,Tt=1,FT(n,e,t,i)}finally{$i.transition=r,Tt=i}return null}function FT(n,e,t,i){do Ua();while(Ms!==null);if(xt&6)throw Error(ce(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ce(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(_w(n,s),n===yn&&(ln=yn=null,Tn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Sc||(Sc=!0,lM(Ff,function(){return Ua(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=$i.transition,$i.transition=null;var o=Tt;Tt=1;var a=xt;xt|=4,e_.current=null,LT(n,t),JS(t,n),iT(Op),zf=!!Up,Op=Up=null,n.current=t,DT(t),lw(),xt=a,Tt=o,$i.transition=s}else n.current=t;if(Sc&&(Sc=!1,Ms=n,th=r),s=n.pendingLanes,s===0&&(Ns=null),fw(t.stateNode),si(n,nn()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(eh)throw eh=!1,n=nm,nm=null,n;return th&1&&n.tag!==0&&Ua(),s=n.pendingLanes,s&1?n===im?su++:(su=0,im=n):su=0,Ks(),null}function Ua(){if(Ms!==null){var n=zy(th),e=$i.transition,t=Tt;try{if($i.transition=null,Tt=16>n?16:n,Ms===null)var i=!1;else{if(n=Ms,Ms=null,th=0,xt&6)throw Error(ce(331));var r=xt;for(xt|=4,Pe=n.current;Pe!==null;){var s=Pe,o=s.child;if(Pe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Pe=u;Pe!==null;){var c=Pe;switch(c.tag){case 0:case 11:case 15:iu(8,c,s)}var h=c.child;if(h!==null)h.return=c,Pe=h;else for(;Pe!==null;){c=Pe;var f=c.sibling,p=c.return;if(KS(c),c===u){Pe=null;break}if(f!==null){f.return=p,Pe=f;break}Pe=p}}}var g=s.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}Pe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Pe=o;else e:for(;Pe!==null;){if(s=Pe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:iu(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Pe=d;break e}Pe=s.return}}var v=n.current;for(Pe=v;Pe!==null;){o=Pe;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Pe=x;else e:for(o=v;Pe!==null;){if(a=Pe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bh(9,a)}}catch(C){Kt(a,a.return,C)}if(a===o){Pe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Pe=S;break e}Pe=a.return}}if(xt=r,Ks(),Rr&&typeof Rr.onPostCommitFiberRoot=="function")try{Rr.onPostCommitFiberRoot(Sh,n)}catch{}i=!0}return i}finally{Tt=t,$i.transition=e}}return!1}function sv(n,e,t){e=Ka(t,e),e=zS(n,e,1),n=Ds(n,e,1),e=Kn(),n!==null&&(Zu(n,1,e),si(n,e))}function Kt(n,e,t){if(n.tag===3)sv(n,n,t);else for(;e!==null;){if(e.tag===3){sv(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ns===null||!Ns.has(i))){n=Ka(t,n),n=BS(e,n,1),e=Ds(e,n,1),n=Kn(),e!==null&&(Zu(e,1,n),si(e,n));break}}e=e.return}}function kT(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Kn(),n.pingedLanes|=n.suspendedLanes&t,yn===n&&(Tn&t)===t&&(hn===4||hn===3&&(Tn&130023424)===Tn&&500>nn()-n_?wo(n,0):t_|=t),si(n,e)}function oM(n,e){e===0&&(n.mode&1?(e=fc,fc<<=1,!(fc&130023424)&&(fc=4194304)):e=1);var t=Kn();n=Jr(n,e),n!==null&&(Zu(n,e,t),si(n,t))}function zT(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),oM(n,t)}function BT(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),oM(n,t)}var aM;aM=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||ii.current)ni=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return ni=!1,CT(n,e,t);ni=!!(n.flags&131072)}else ni=!1,zt&&e.flags&1048576&&fS(e,jf,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pf(n,e),n=e.pendingProps;var r=ja(e,kn.current);Ia(e,t),r=$g(null,e,i,n,r,t);var s=Kg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ri(i)?(s=!0,Wf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wg(e),r.updater=Rh,e.stateNode=r,r._reactInternals=e,Xp(e,i,n,t),e=qp(null,e,i,!0,s,t)):(e.tag=0,zt&&s&&Fg(e),Wn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(pf(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=VT(i),n=sr(i,n),r){case 0:e=Yp(null,e,i,n,t);break e;case 1:e=$0(null,e,i,n,t);break e;case 11:e=Y0(null,e,i,n,t);break e;case 14:e=q0(null,e,i,sr(i.type,n),t);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),Yp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),$0(n,e,i,r,t);case 3:e:{if(WS(e),n===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,_S(n,e),$f(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ka(Error(ce(423)),e),e=K0(n,e,i,t,r);break e}else if(i!==r){r=Ka(Error(ce(424)),e),e=K0(n,e,i,t,r);break e}else for(Ai=Ls(e.stateNode.containerInfo.firstChild),Pi=e,zt=!0,ar=null,t=mS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ya(),i===r){e=es(n,e,t);break e}Wn(n,e,i,t)}e=e.child}return e;case 5:return vS(e),n===null&&Vp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Fp(i,r)?o=null:s!==null&&Fp(i,s)&&(e.flags|=32),GS(n,e),Wn(n,e,o,t),e.child;case 6:return n===null&&Vp(e),null;case 13:return XS(n,e,t);case 4:return Xg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=qa(e,null,i,t):Wn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),Y0(n,e,i,r,t);case 7:return Wn(n,e,e.pendingProps,t),e.child;case 8:return Wn(n,e,e.pendingProps.children,t),e.child;case 12:return Wn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Dt(Yf,i._currentValue),i._currentValue=o,s!==null)if(pr(s.value,o)){if(s.children===r.children&&!ii.current){e=es(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=$r(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Gp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Gp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Wn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ia(e,t),r=Zi(r),i=i(r),e.flags|=1,Wn(n,e,i,t),e.child;case 14:return i=e.type,r=sr(i,e.pendingProps),r=sr(i.type,r),q0(n,e,i,r,t);case 15:return HS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:sr(i,r),pf(n,e),e.tag=1,ri(i)?(n=!0,Wf(e)):n=!1,Ia(e,t),kS(e,i,r),Xp(e,i,r,t),qp(null,e,i,!0,n,t);case 19:return jS(n,e,t);case 22:return VS(n,e,t)}throw Error(ce(156,e.tag))};function lM(n,e){return Uy(n,e)}function HT(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xi(n,e,t,i){return new HT(n,e,t,i)}function o_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function VT(n){if(typeof n=="function")return o_(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Tg)return 11;if(n===Ag)return 14}return 2}function Us(n,e){var t=n.alternate;return t===null?(t=Xi(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function _f(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")o_(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ma:return To(t.children,r,s,e);case wg:o=8,r|=8;break;case mp:return n=Xi(12,t,e,r|2),n.elementType=mp,n.lanes=s,n;case gp:return n=Xi(13,t,e,r),n.elementType=gp,n.lanes=s,n;case _p:return n=Xi(19,t,e,r),n.elementType=_p,n.lanes=s,n;case vy:return Lh(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case gy:o=10;break e;case _y:o=9;break e;case Tg:o=11;break e;case Ag:o=14;break e;case gs:o=16,i=null;break e}throw Error(ce(130,n==null?n:typeof n,""))}return e=Xi(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function To(n,e,t,i){return n=Xi(7,n,i,e),n.lanes=t,n}function Lh(n,e,t,i){return n=Xi(22,n,i,e),n.elementType=vy,n.lanes=t,n.stateNode={isHidden:!1},n}function _d(n,e,t){return n=Xi(6,n,null,e),n.lanes=t,n}function vd(n,e,t){return e=Xi(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function GT(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Qh(0),this.expirationTimes=Qh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qh(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function a_(n,e,t,i,r,s,o,a,l){return n=new GT(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xi(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wg(s),n}function WT(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function uM(n){if(!n)return Vs;n=n._reactInternals;e:{if(Wo(n)!==n||n.tag!==1)throw Error(ce(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ri(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(n.tag===1){var t=n.type;if(ri(t))return uS(n,t,e)}return e}function cM(n,e,t,i,r,s,o,a,l){return n=a_(t,i,!0,n,r,s,o,a,l),n.context=uM(null),t=n.current,i=Kn(),r=Is(t),s=$r(i,r),s.callback=e??null,Ds(t,s,r),n.current.lanes=r,Zu(n,r,i),si(n,i),n}function Dh(n,e,t,i){var r=e.current,s=Kn(),o=Is(r);return t=uM(t),e.context===null?e.context=t:e.pendingContext=t,e=$r(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ds(r,e,o),n!==null&&(hr(n,r,o,s),ff(n,r,o)),o}function ih(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ov(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function l_(n,e){ov(n,e),(n=n.alternate)&&ov(n,e)}function XT(){return null}var fM=typeof reportError=="function"?reportError:function(n){console.error(n)};function u_(n){this._internalRoot=n}Nh.prototype.render=u_.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ce(409));Dh(n,e,null,null)};Nh.prototype.unmount=u_.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Fo(function(){Dh(null,n,null,null)}),e[Qr]=null}};function Nh(n){this._internalRoot=n}Nh.prototype.unstable_scheduleHydration=function(n){if(n){var e=Vy();n={blockedOn:null,target:n,priority:e};for(var t=0;t<vs.length&&e!==0&&e<vs[t].priority;t++);vs.splice(t,0,n),t===0&&Wy(n)}};function c_(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ih(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function av(){}function jT(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ih(o);s.call(u)}}var o=cM(e,i,n,0,null,!1,!1,"",av);return n._reactRootContainer=o,n[Qr]=o.current,Pu(n.nodeType===8?n.parentNode:n),Fo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=ih(l);a.call(u)}}var l=a_(n,0,!1,null,null,!1,!1,"",av);return n._reactRootContainer=l,n[Qr]=l.current,Pu(n.nodeType===8?n.parentNode:n),Fo(function(){Dh(e,l,t,i)}),l}function Uh(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ih(o);a.call(l)}}Dh(e,o,n,r)}else o=jT(t,e,n,r,i);return ih(o)}By=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Bl(e.pendingLanes);t!==0&&(bg(e,t|1),si(e,nn()),!(xt&6)&&(Za=nn()+500,Ks()))}break;case 13:Fo(function(){var i=Jr(n,1);if(i!==null){var r=Kn();hr(i,n,1,r)}}),l_(n,1)}};Pg=function(n){if(n.tag===13){var e=Jr(n,134217728);if(e!==null){var t=Kn();hr(e,n,134217728,t)}l_(n,134217728)}};Hy=function(n){if(n.tag===13){var e=Is(n),t=Jr(n,e);if(t!==null){var i=Kn();hr(t,n,e,i)}l_(n,e)}};Vy=function(){return Tt};Gy=function(n,e){var t=Tt;try{return Tt=n,e()}finally{Tt=t}};Cp=function(n,e,t){switch(e){case"input":if(yp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Th(i);if(!r)throw Error(ce(90));yy(i),yp(i,r)}}}break;case"textarea":My(n,t);break;case"select":e=t.value,e!=null&&Pa(n,!!t.multiple,e,!1)}};by=i_;Py=Fo;var YT={usingClientEntryPoint:!1,Events:[Ju,xa,Th,Cy,Ry,i_]},Al={findFiberByHostInstance:_o,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qT={bundleType:Al.bundleType,version:Al.version,rendererPackageName:Al.rendererPackageName,rendererConfig:Al.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ss.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ny(n),n===null?null:n.stateNode},findFiberByHostInstance:Al.findFiberByHostInstance||XT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mc.isDisabled&&Mc.supportsFiber)try{Sh=Mc.inject(qT),Rr=Mc}catch{}}Oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YT;Oi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!c_(e))throw Error(ce(200));return WT(n,e,null,t)};Oi.createRoot=function(n,e){if(!c_(n))throw Error(ce(299));var t=!1,i="",r=fM;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=a_(n,1,!1,null,null,t,!1,i,r),n[Qr]=e.current,Pu(n.nodeType===8?n.parentNode:n),new u_(e)};Oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ce(188)):(n=Object.keys(n).join(","),Error(ce(268,n)));return n=Ny(e),n=n===null?null:n.stateNode,n};Oi.flushSync=function(n){return Fo(n)};Oi.hydrate=function(n,e,t){if(!Ih(e))throw Error(ce(200));return Uh(null,n,e,!0,t)};Oi.hydrateRoot=function(n,e,t){if(!c_(n))throw Error(ce(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=fM;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=cM(e,null,n,1,t??null,r,!1,s,o),n[Qr]=e.current,Pu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Nh(e)};Oi.render=function(n,e,t){if(!Ih(e))throw Error(ce(200));return Uh(null,n,e,!1,t)};Oi.unmountComponentAtNode=function(n){if(!Ih(n))throw Error(ce(40));return n._reactRootContainer?(Fo(function(){Uh(null,null,n,!1,function(){n._reactRootContainer=null,n[Qr]=null})}),!0):!1};Oi.unstable_batchedUpdates=i_;Oi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ih(t))throw Error(ce(200));if(n==null||n._reactInternals===void 0)throw Error(ce(38));return Uh(n,e,t,!1,i)};Oi.version="18.3.1-next-f1338f8080-20240426";function hM(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hM)}catch(n){console.error(n)}}hM(),hy.exports=Oi;var $T=hy.exports,lv=$T;dp.createRoot=lv.createRoot,dp.hydrateRoot=lv.hydrateRoot;function Br(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function dM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Li={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qa={duration:.5,overwrite:!1,delay:0},f_,An,Bt,ji=1e8,Pt=1/ji,om=Math.PI*2,KT=om/4,ZT=0,pM=Math.sqrt,QT=Math.cos,JT=Math.sin,Sn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},ts=function(e){return typeof e=="number"},h_=function(e){return typeof e>"u"},Lr=function(e){return typeof e=="object"},oi=function(e){return e!==!1},d_=function(){return typeof window<"u"},Ec=function(e){return Zt(e)||Sn(e)},mM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Fn=Array.isArray,eA=/random\([^)]+\)/g,tA=/,\s*/g,uv=/(?:-?\.?\d|\.)+/gi,gM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Aa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,xd=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_M=/[+-]=-?[.\d]+/,nA=/[^,'"\[\]\s]+/gi,iA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,vr,am,p_,Ii={},rh={},vM,xM=function(e){return(rh=Ja(e,Ii))&&hi},m_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},zu=function(e,t){return!t&&console.warn(e)},yM=function(e,t){return e&&(Ii[e]=t)&&rh&&(rh[e]=t)||Ii},Bu=function(){return 0},rA={suppressEvents:!0,isStart:!0,kill:!1},vf={suppressEvents:!0,kill:!1},sA={suppressEvents:!0},g_={},Os=[],lm={},SM,Si={},yd={},cv=30,xf=[],__="",v_=function(e){var t=e[0],i,r;if(Lr(t)||Zt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=xf.length;r--&&!xf[r].targetTest(t););i=xf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new XM(e[r],i)))||e.splice(r,1);return e},Ao=function(e){return e._gsap||v_(Yi(e))[0]._gsap},MM=function(e,t,i){return(i=e[t])&&Zt(i)?e[t]():h_(i)&&e.getAttribute&&e.getAttribute(t)||i},ai=function(e,t){return(e=e.split(",")).forEach(t)||e},tn=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},Oa=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},oA=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},sh=function(){var e=Os.length,t=Os.slice(0),i,r;for(lm={},Os.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},x_=function(e){return!!(e._initted||e._startAt||e.add)},EM=function(e,t,i,r){Os.length&&!An&&sh(),e.render(t,i,!!(An&&t<0&&x_(e))),Os.length&&!An&&sh()},wM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(nA).length<2?t:Sn(e)?e.trim():e},TM=function(e){return e},Ui=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},aA=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ja=function(e,t){for(var i in t)e[i]=t[i];return e},fv=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Lr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},oh=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ou=function(e){var t=e.parent||jt,i=e.keyframes?aA(Fn(e.keyframes)):Ui;if(oi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},lA=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},AM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Oh=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Gs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Co=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},uA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},um=function(e,t,i,r){return e._startAt&&(An?e._startAt.revert(vf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},cA=function n(e){return!e||e._ts&&n(e.parent)},hv=function(e){return e._repeat?el(e._tTime,e=e.duration()+e._rDelay)*e:0},el=function(e,t){var i=Math.floor(e=Wt(e/t));return e&&i===e?i-1:i},ah=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fh=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},kh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Wt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fh(e),i._dirty||Co(i,e)),e},CM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=ah(e.rawTime(),t),(!t._dur||tc(0,t.totalDuration(),i)-t._tTime>Pt)&&t.render(i,!0)),Co(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Pt}},wr=function(e,t,i,r){return t.parent&&Gs(t),t._start=Wt((ts(i)?i:i||e!==jt?Bi(e,i,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),AM(e,t,"_first","_last",e._sort?"_start":0),cm(t)||(e._recent=t),r||CM(e,t),e._ts<0&&kh(e,e._tTime),e},RM=function(e,t){return(Ii.ScrollTrigger||m_("scrollTrigger",t))&&Ii.ScrollTrigger.create(t,e)},bM=function(e,t,i,r,s){if(S_(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!An&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&SM!==wi.frame)return Os.push(e),e._lazy=[s,r],1},fA=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},cm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hA=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&fA(e)&&!(!e._initted&&cm(e))||(e._ts<0||e._dp._ts<0)&&!cm(e))?0:1,a=e._rDelay,l=0,u,c,h;if(a&&e._repeat&&(l=tc(0,e._tDur,t),c=el(l,a),e._yoyo&&c&1&&(o=1-o),c!==el(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||An||r||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&bM(e,t,r,i,l))return;for(h=e._zTime,e._zTime=t||(i?Pt:0),i||(i=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&um(e,t,i,!0),e._onUpdate&&!i&&Ci(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Gs(e,1),!i&&!An&&(Ci(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dA=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},tl=function(e,t,i,r){var s=e._repeat,o=Wt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Wt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&kh(e,e._tTime=e._tDur*a),e.parent&&Fh(e),i||Co(e.parent,e),e},dv=function(e){return e instanceof qn?Co(e):tl(e,e._dur)},pA={_start:0,endTime:Bu,totalDuration:Bu},Bi=function n(e,t,i){var r=e.labels,s=e._recent||pA,o=e.duration()>=ji?s.endTime(!1):e._dur,a,l,u;return Sn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Fn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},au=function(e,t,i){var r=ts(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=oi(l.vars.inherit)&&l.parent;o.immediateRender=oi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new an(t[0],o,t[s+1])},Zs=function(e,t){return e||e===0?t(e):t},tc=function(e,t,i){return i<e?e:i>t?t:i},Un=function(e,t){return!Sn(e)||!(t=iA.exec(e))?"":t[1]},mA=function(e,t,i){return Zs(i,function(r){return tc(e,t,r)})},fm=[].slice,PM=function(e,t){return e&&Lr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Lr(e[0]))&&!e.nodeType&&e!==vr},gA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Sn(r)&&!t||PM(r,1)?(s=i).push.apply(s,Yi(r)):i.push(r)})||i},Yi=function(e,t,i){return Bt&&!t&&Bt.selector?Bt.selector(e):Sn(e)&&!i&&(am||!nl())?fm.call((t||p_).querySelectorAll(e),0):Fn(e)?gA(e,i):PM(e)?fm.call(e,0):e?[e]:[]},hm=function(e){return e=Yi(e)[0]||zu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Yi(t,i.querySelectorAll?i:i===e?zu("Invalid scope")||p_.createElement("div"):e)}},LM=function(e){return e.sort(function(){return .5-Math.random()})},DM=function(e){if(Zt(e))return e;var t=Lr(e)?e:{each:e},i=Ro(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,h=r;return Sn(r)?c=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],h=r[1]),function(f,p,g){var _=(g||t).length,m=o[_],d,v,x,S,C,w,M,R,N;if(!m){if(N=t.grid==="auto"?0:(t.grid||[1,ji])[1],!N){for(M=-ji;M<(M=g[N++].getBoundingClientRect().left)&&N<_;);N<_&&N--}for(m=o[_]=[],d=l?Math.min(N,_)*c-.5:r%N,v=N===ji?0:l?_*h/N-.5:r/N|0,M=0,R=ji,w=0;w<_;w++)x=w%N-d,S=v-(w/N|0),m[w]=C=u?Math.abs(u==="y"?S:x):pM(x*x+S*S),C>M&&(M=C),C<R&&(R=C);r==="random"&&LM(m),m.max=M-R,m.min=R,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(N>_?_-1:u?u==="y"?_/N:N:Math.max(N,_/N))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Un(t.amount||t.each)||0,i=i&&_<0?VM(i):i}return _=(m[f]-m.min)/m.max||0,Wt(m.b+(i?i(_):_)*m.v)+m.u}},dm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Wt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ts(i)?0:Un(i))}},NM=function(e,t){var i=Fn(e),r,s;return!i&&Lr(e)&&(r=i=e.radius||ji,e.values?(e=Yi(e.values),(s=!ts(e[0]))&&(r*=r)):e=dm(e.increment)),Zs(t,i?Zt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=ji,c=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<u&&(u=f,c=h);return c=!r||u<=r?e[c]:o,s||c===o||ts(o)?c:c+Un(o)}:dm(e))},IM=function(e,t,i,r){return Zs(Fn(e)?!t:i===!0?!!(i=0):!r,function(){return Fn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},_A=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},vA=function(e,t){return function(i){return e(parseFloat(i))+(t||Un(i))}},xA=function(e,t,i){return OM(e,t,0,1,i)},UM=function(e,t,i){return Zs(i,function(r){return e[~~t(r)]})},yA=function n(e,t,i){var r=t-e;return Fn(e)?UM(e,n(0,e.length),t):Zs(i,function(s){return(r+(s-e)%r)%r+e})},SA=function n(e,t,i){var r=t-e,s=r*2;return Fn(e)?UM(e,n(0,e.length-1),t):Zs(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Hu=function(e){return e.replace(eA,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(tA);return IM(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},OM=function(e,t,i,r,s){var o=t-e,a=r-i;return Zs(s,function(l){return i+((l-e)/o*a||0)})},MA=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Sn(e),a={},l,u,c,h,f;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Fn(e)&&!Fn(t)){for(c=[],h=e.length,f=h-2,u=1;u<h;u++)c.push(n(e[u-1],e[u]));h--,s=function(g){g*=h;var _=Math.min(f,~~g);return c[_](g-_)},i=t}else r||(e=Ja(Fn(e)?[]:{},e));if(!c){for(l in t)y_.call(a,e,l,"get",t[l]);s=function(g){return w_(g,a)||(o?e.p:e)}}}return Zs(i,s)},pv=function(e,t,i){var r=e.labels,s=ji,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ci=function(e,t,i){var r=e.vars,s=r[t],o=Bt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Os.length&&sh(),a&&(Bt=a),c=l?s.apply(u,l):s.call(u),Bt=o,c},Vl=function(e){return Gs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!An),e.progress()<1&&Ci(e,"onInterrupt"),e},Ca,FM=[],kM=function(e){if(e)if(e=!e.name&&e.default||e,d_()||e.headless){var t=e.name,i=Zt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Bu,render:w_,add:y_,kill:kA,modifier:FA,rawVars:0},o={targetTest:0,get:0,getSetter:E_,aliases:{},register:0};if(nl(),e!==r){if(Si[t])return;Ui(r,Ui(oh(e,s),o)),Ja(r.prototype,Ja(s,oh(e,o))),Si[r.prop=t]=r,e.targetTest&&(xf.push(r),g_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yM(t,r),e.register&&e.register(hi,r,li)}else FM.push(e)},bt=255,Gl={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Sd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*bt+.5|0},zM=function(e,t,i){var r=e?ts(e)?[e>>16,e>>8&bt,e&bt]:0:Gl.black,s,o,a,l,u,c,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Gl[e])r=Gl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&bt,r&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(uv),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Sd(l+1/3,s,o),r[1]=Sd(l,s,o),r[2]=Sd(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(gM),i&&r.length<4&&(r[3]=1),r}else r=e.match(uv)||Gl.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/bt,o=r[1]/bt,a=r[2]/bt,h=Math.max(s,o,a),f=Math.min(s,o,a),c=(h+f)/2,h===f?l=u=0:(p=h-f,u=c>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},BM=function(e){var t=[],i=[],r=-1;return e.split(Fs).forEach(function(s){var o=s.match(Aa)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},mv=function(e,t,i){var r="",s=(e+r).match(Fs),o=t?"hsla(":"rgba(",a=0,l,u,c,h;if(!s)return e;if(s=s.map(function(f){return(f=zM(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(c=BM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Fs,"1").split(Aa),h=u.length-1;a<h;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Fs),h=u.length-1;a<h;a++)r+=u[a]+s[a];return r+u[h]},Fs=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Gl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),EA=/hsl[a]?\(/,HM=function(e){var t=e.join(" "),i;if(Fs.lastIndex=0,Fs.test(t))return i=EA.test(t),e[1]=mv(e[1],i),e[0]=mv(e[0],i,BM(e[1])),!0},Vu,wi=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,h,f,p,g=function _(m){var d=n()-r,v=m===!0,x,S,C,w;if((d>e||d<0)&&(i+=d-t),r+=d,C=r-i,x=C-o,(x>0||v)&&(w=++h.frame,f=C-h.time*1e3,h.time=C=C/1e3,o+=x+(x>=s?4:s-x),S=1),v||(l=u(_)),S)for(p=0;p<a.length;p++)a[p](C,f,w,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){vM&&(!am&&d_()&&(vr=am=window,p_=vr.document||{},Ii.gsap=hi,(vr.gsapVersions||(vr.gsapVersions=[])).push(hi.version),xM(rh||vr.GreenSockGlobals||!vr.gsap&&vr||{}),FM.forEach(kM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),u=c||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Vu=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Vu=0,u=Bu},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,d,v){var x=d?function(S,C,w,M){m(S,C,w,M),h.remove(x)}:m;return h.remove(m),a[v?"unshift":"push"](x),nl(),x},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},h}(),nl=function(){return!Vu&&wi.wake()},vt={},wA=/^[\d.\-M][\d.\-,\s]/,TA=/["']/g,AA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(TA,"").trim():+u,r=l.substr(a+1).trim();return t},CA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},RA=function(e){var t=(e+"").split("("),i=vt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[AA(t[1])]:CA(e).split(",").map(wM)):vt._CE&&wA.test(e)?vt._CE("",e):i},VM=function(e){return function(t){return 1-e(1-t)}},GM=function n(e,t){for(var i=e._first,r;i;)i instanceof qn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},Ro=function(e,t){return e&&(Zt(e)?e:vt[e]||RA(e))||t},Xo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return ai(e,function(a){vt[a]=Ii[a]=s,vt[o=a.toLowerCase()]=i;for(var l in s)vt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=vt[a+"."+l]=s[l]}),s},WM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Md=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/om*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*JT((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:WM(a);return s=om/s,l.config=function(u,c){return n(e,u,c)},l},Ed=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:WM(i);return r.config=function(s){return n(e,s)},r};ai("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Xo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;Xo("Elastic",Md("in"),Md("out"),Md());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Xo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Xo("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Xo("Circ",function(n){return-(pM(1-n*n)-1)});Xo("Sine",function(n){return n===1?1:-QT(n*KT)+1});Xo("Back",Ed("in"),Ed("out"),Ed());vt.SteppedEase=vt.steps=Ii.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Pt;return function(a){return((r*tc(0,o,a)|0)+s)*i}}};Qa.ease=vt["quad.out"];ai("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return __+=n+","+n+"Params,"});var XM=function(e,t){this.id=ZT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:MM,this.set=t?t.getSetter:E_},Gu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,tl(this,+t.duration,1,1),this.data=t.data,Bt&&(this._ctx=Bt,Bt.data.push(this)),Vu||wi.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,tl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(nl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(kh(this,i),!s._dp||s.parent||CM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&wr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Pt||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),EM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+hv(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+hv(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?el(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?ah(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pt?0:this._rts,this.totalTime(tc(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Fh(this),uA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(nl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Wt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&wr(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(oi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ah(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=sA);var r=An;return An=i,x_(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),An=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,dv(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,dv(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Bi(this,i),oi(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,oi(r)),this._dur||(this._zTime=-Pt),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Pt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=Zt(i)?i:TM,l=function(){var c=r.then;r.then=null,s&&s(),Zt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Vl(this)},n}();Ui(Gu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var qn=function(n){dM(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=oi(i.sortChildren),jt&&wr(i.parent||jt,Br(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&RM(Br(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return au(0,arguments,this),this},t.from=function(r,s,o){return au(1,arguments,this),this},t.fromTo=function(r,s,o,a){return au(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ou(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new an(r,s,Bi(this,o),1),this},t.call=function(r,s,o){return wr(this,an.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new an(r,o,Bi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,ou(o).immediateRender=oi(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,h){return a.startAt=o,ou(a).immediateRender=oi(a.immediateRender),this.staggerTo(r,s,a,l,u,c,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Wt(r),h=this._zTime<0!=r<0&&(this._initted||!u),f,p,g,_,m,d,v,x,S,C,w,M;if(this!==jt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||h){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),f=c,S=this._start,x=this._ts,d=!x,h&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Wt(c%m),c===l?(_=this._repeat,f=u):(C=Wt(c/m),_=~~C,_&&_===C&&(f=u,_--),f>u&&(f=u)),C=el(this._tTime,m),!a&&this._tTime&&C!==_&&this._tTime-C*m-this._dur<=0&&(C=_),w&&_&1&&(f=u-f,M=1),_!==C&&!this._lock){var R=w&&C&1,N=R===(w&&_&1);if(_<C&&(R=!R),a=R?0:c%u?u:c,this._lock=1,this.render(a||(M?0:Wt(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,C=_),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,N&&(this._lock=2,a=R?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;GM(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=dA(this,Wt(a),Wt(f)),v&&(c-=f-(f=v._start))),this._tTime=c,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!C&&(Ci(this,"onStart"),this._tTime!==c))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=-Pt);break}}p=g}else{p=this._last;for(var y=r<0?r:f;p;){if(g=p._prev,(p._act||y<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(y-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(y-p._start)*p._ts,s,o||An&&x_(p)),f!==this._time||!this._ts&&!d){v=0,g&&(c+=this._zTime=y?-Pt:Pt);break}}p=g}}if(v&&!s&&(this.pause(),v.render(f>=a?0:-Pt)._zTime=f>=a?1:-1,this._ts))return this._start=S,Fh(this),this.render(r,s,o);this._onUpdate&&!s&&Ci(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Gs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ci(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ts(s)||(s=Bi(this,s,r)),!(r instanceof Gu)){if(Fn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Sn(r))return this.addLabel(r,s);if(Zt(r))r=an.delayedCall(0,r);else return this}return this!==r?wr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ji);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof an?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Sn(r)?this.removeLabel(r):Zt(r)?this.killTweensOf(r):(r.parent===this&&Oh(this,r),r===this._recent&&(this._recent=this._last),Co(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(wi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Bi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=an.delayedCall(0,s||Bu,o);return a.data="isPause",this._hasPause=1,wr(this,a,Bi(this,r))},t.removePause=function(r){var s=this._first;for(r=Bi(this,r);s;)s._start===r&&s.data==="isPause"&&Gs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Es!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Yi(r),l=this._first,u=ts(s),c;l;)l instanceof an?oA(l._targets,a)&&(u?(!Es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Bi(o,r),l=s,u=l.startAt,c=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=an.to(o,Ui({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&tl(g,m,0,1).render(g._time,!0,!0),p=1}c&&c.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Ui({startAt:{time:Bi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),pv(this,Bi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),pv(this,Bi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=Wt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return Co(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Co(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ji,u,c,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,wr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Wt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;tl(o,o===jt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(jt._ts&&(EM(jt,ah(r,jt)),SM=wi.frame),wi.frame>=cv){cv+=Li.autoSleep||120;var s=jt._first;if((!s||!s._ts)&&Li.autoSleep&&wi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||wi.sleep()}}},e}(Gu);Ui(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var bA=function(e,t,i,r,s,o,a){var l=new li(this._pt,e,t,0,1,ZM,null,s),u=0,c=0,h,f,p,g,_,m,d,v;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Hu(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),f=i.match(xd)||[];h=xd.exec(r);)g=h[0],_=r.substring(u,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[c++]&&(m=parseFloat(f[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:g.charAt(1)==="="?Oa(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},u=xd.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(_M.test(r)||d)&&(l.e=0),this._pt=l,l},y_=function(e,t,i,r,s,o,a,l,u,c){Zt(r)&&(r=r(s||0,e,o));var h=e[t],f=i!=="get"?i:Zt(h)?u?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():h,p=Zt(h)?u?IA:$M:M_,g;if(Sn(r)&&(~r.indexOf("random(")&&(r=Hu(r)),r.charAt(1)==="="&&(g=Oa(f,r)+(Un(f)||0),(g||g===0)&&(r=g))),!c||f!==r||pm)return!isNaN(f*r)&&r!==""?(g=new li(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?OA:KM,0,p),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&m_(t,r),bA.call(this,e,t,f,r,p,l||Li.stringFilter,u))},PA=function(e,t,i,r,s){if(Zt(e)&&(e=lu(e,s,t,i,r)),!Lr(e)||e.style&&e.nodeType||Fn(e)||mM(e))return Sn(e)?lu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=lu(e[a],s,t,i,r);return o},jM=function(e,t,i,r,s,o){var a,l,u,c;if(Si[e]&&(a=new Si[e]).init(s,a.rawVars?t[e]:PA(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new li(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==Ca))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Es,pm,S_=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,h=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,d=e.parent,v=d&&d.data==="nested"?d.vars.targets:m,x=e._overwrite==="auto"&&!f_,S=e.timeline,C,w,M,R,N,y,T,I,z,Y,$,B,j;if(S&&(!f||!s)&&(s="none"),e._ease=Ro(s,Qa.ease),e._yEase=h?VM(Ro(h===!0?s:h,Qa.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!S&&!!r.runBackwards,!S||f&&!r.stagger){if(I=m[0]?Ao(m[0]).harness:0,B=I&&r[I.prop],C=oh(r,g_),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&g?vf:rA),_._lazy=0),o){if(Gs(e._startAt=an.set(m,Ui({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&oi(l),startAt:null,delay:0,onUpdate:u&&function(){return Ci(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An||!a&&!p)&&e._startAt.revert(vf),a&&g&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&g&&!_){if(t&&(a=!1),M=Ui({overwrite:!1,data:"isFromStart",lazy:a&&!_&&oi(l),immediateRender:a,stagger:0,parent:d},C),B&&(M[I.prop]=B),Gs(e._startAt=an.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(An?e._startAt.revert(vf):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&oi(l)||l&&!g,w=0;w<m.length;w++){if(N=m[w],T=N._gsap||v_(m)[w]._gsap,e._ptLookup[w]=Y={},lm[T.id]&&Os.length&&sh(),$=v===m?w:v.indexOf(N),I&&(z=new I).init(N,B||C,e,$,v)!==!1&&(e._pt=R=new li(e._pt,N,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(D){Y[D]=R}),z.priority&&(y=1)),!I||B)for(M in C)Si[M]&&(z=jM(M,C,e,$,N,v))?z.priority&&(y=1):Y[M]=R=y_.call(e,N,M,"get",C[M],$,v,0,r.stringFilter);e._op&&e._op[w]&&e.kill(N,e._op[w]),x&&e._pt&&(Es=e,jt.killTweensOf(N,Y,e.globalTime(t)),j=!e.parent,Es=0),e._pt&&l&&(lm[T.id]=1)}y&&QM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!j,f&&t<=0&&S.render(ji,!0,!0)},LA=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,h,f,p;if(!u)for(u=e._ptCache[t]=[],f=e._ptLookup,p=e._targets.length;p--;){if(c=f[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return pm=1,e.vars[t]="+=0",S_(e,a),pm=0,l?zu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)h=u[p],c=h._pt||h,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,h.e&&(h.e=tn(i)+Un(h.e)),h.b&&(h.b=c.s+Un(h.b))},DA=function(e,t){var i=e[0]?Ao(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ja({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},NA=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Fn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},lu=function(e,t,i,r,s){return Zt(e)?e.call(t,i,r,s):Sn(e)&&~e.indexOf("random(")?Hu(e):e},YM=__+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qM={};ai(YM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return qM[n]=1});var an=function(n){dM(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ou(r))||this;var l=a.vars,u=l.duration,c=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,v=r.parent||jt,x=(Fn(i)||mM(i)?ts(i[0]):"length"in r)?[i]:Yi(i),S,C,w,M,R,N,y,T;if(a._targets=x.length?v_(x):zu("GSAP target "+i+" not found. https://gsap.com",!Li.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Ec(u)||Ec(c)){if(r=a.vars,S=a.timeline=new qn({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:x}),S.kill(),S.parent=S._dp=Br(a),S._start=0,f||Ec(u)||Ec(c)){if(M=x.length,y=f&&DM(f),Lr(f))for(R in f)~YM.indexOf(R)&&(T||(T={}),T[R]=f[R]);for(C=0;C<M;C++)w=oh(r,qM),w.stagger=0,d&&(w.yoyoEase=d),T&&Ja(w,T),N=x[C],w.duration=+lu(u,Br(a),C,N,x),w.delay=(+lu(c,Br(a),C,N,x)||0)-a._delay,!f&&M===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),S.to(N,w,y?y(C,N,x):0),S._ease=vt.none;S.duration()?u=c=0:a.timeline=0}else if(g){ou(Ui(S.vars.defaults,{ease:"none"})),S._ease=Ro(g.ease||r.ease||"none");var I=0,z,Y,$;if(Fn(g))g.forEach(function(B){return S.to(x,B,">")}),S.duration();else{w={};for(R in g)R==="ease"||R==="easeEach"||NA(R,g[R],w,g.easeEach);for(R in w)for(z=w[R].sort(function(B,j){return B.t-j.t}),I=0,C=0;C<z.length;C++)Y=z[C],$={ease:Y.e,duration:(Y.t-(C?z[C-1].t:0))/100*u},$[R]=Y.v,S.to(x,$,I),I+=$.duration;S.duration()<u&&S.to({},{duration:u-S.duration()})}}u||a.duration(u=S.duration())}else a.timeline=0;return p===!0&&!f_&&(Es=Br(a),jt.killTweensOf(x),Es=0),wr(v,Br(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!u&&!g&&a._start===Wt(v._time)&&oi(h)&&cA(Br(a))&&v.data!=="nested")&&(a._tTime=-Pt,a.render(Math.max(0,-c)||0)),m&&RM(Br(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,h=r>l-Pt&&!c?l:r<Pt?0:r,f,p,g,_,m,d,v,x,S;if(!u)hA(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(f=h,x=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(f=Wt(h%_),h===l?(g=this._repeat,f=u):(m=Wt(h/_),g=~~m,g&&g===m?(f=u,g--):f>u&&(f=u)),d=this._yoyo&&g&1,d&&(S=this._yEase,f=u-f),m=el(this._tTime,_),f===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(x&&this._yEase&&GM(x,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=o=1,this.render(Wt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(bM(this,c?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(S||this._ease)(f/u),this._from&&(this.ratio=v=1-v),!a&&h&&!s&&!m&&(Ci(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&um(this,r,s,o),Ci(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Ci(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(c&&!this._onUpdate&&um(this,r,!0,!0),(r||!u)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Gs(this,1),!s&&!(c&&!a)&&(h||a||d)&&(Ci(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Vu||wi.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||S_(this,u),c=this._ease(u/this._dur),LA(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(kh(this,0),this.parent||AM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Vl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!An),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Es&&Es.vars.overwrite!==!0)._first||Vl(this),this.parent&&o!==this.timeline.totalDuration()&&tl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Yi(r):a,u=this._ptLookup,c=this._pt,h,f,p,g,_,m,d;if((!s||s==="all")&&lA(a,l))return s==="all"&&(this._pt=0),Vl(this);for(h=this._op=this._op||[],s!=="all"&&(Sn(s)&&(_={},ai(s,function(v){return _[v]=1}),s=_),s=DA(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){f=u[d],s==="all"?(h[d]=s,g=f,p={}):(p=h[d]=h[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Oh(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&Vl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return au(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return au(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return jt.killTweensOf(r,s,o)},e}(Gu);Ui(an.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ai("staggerTo,staggerFrom,staggerFromTo",function(n){an[n]=function(){var e=new qn,t=fm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var M_=function(e,t,i){return e[t]=i},$M=function(e,t,i){return e[t](i)},IA=function(e,t,i,r){return e[t](r.fp,i)},UA=function(e,t,i){return e.setAttribute(t,i)},E_=function(e,t){return Zt(e[t])?$M:h_(e[t])&&e.setAttribute?UA:M_},KM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},OA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ZM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},w_=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},FA=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},kA=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Oh(this,t,"_pt"):t.dep||(i=1),t=r;return!i},zA=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},QM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},li=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||KM,this.d=l||this,this.set=u||M_,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=zA,this.m=i,this.mt=s,this.tween=r},n}();ai(__+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return g_[n]=1});Ii.TweenMax=Ii.TweenLite=an;Ii.TimelineLite=Ii.TimelineMax=qn;jt=new qn({sortChildren:!1,defaults:Qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Li.stringFilter=HM;var bo=[],yf={},BA=[],gv=0,HA=0,wd=function(e){return(yf[e]||BA).map(function(t){return t()})},mm=function(){var e=Date.now(),t=[];e-gv>2&&(wd("matchMediaInit"),bo.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=vr.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),wd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),gv=e,wd("matchMedia"))},JM=function(){function n(t,i){this.selector=i&&hm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=HA++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Zt(i)&&(s=r,r=i,i=Zt);var o=this,a=function(){var u=Bt,c=o.selector,h;return u&&u!==o&&u.data.push(o),s&&(o.selector=hm(s)),Bt=o,h=r.apply(o,arguments),Zt(h)&&o._r.push(h),Bt=u,o.selector=c,o.isReverted=!1,h};return o.last=a,i===Zt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Bt;Bt=null,i(this),Bt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof an&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,h){return h.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof qn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof an)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=bo.length;o--;)bo[o].id===this.id&&bo.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),VA=function(){function n(t){this.contexts=[],this.scope=t,Bt&&Bt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Lr(i)||(i={matches:i});var o=new JM(0,s||this.scope),a=o.conditions={},l,u,c;Bt&&!o.selector&&(o.selector=Bt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=vr.matchMedia(i[u]),l&&(bo.indexOf(o)<0&&bo.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(mm):l.addEventListener("change",mm)));return c&&r(o,function(h){return o.add(null,h)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),lh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return kM(r)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Sn(e)&&(e=Yi(e)[0]);var s=Ao(e||{}).get,o=i?TM:wM;return i==="native"&&(i=""),e&&(t?o((Si[t]&&Si[t].get||s)(e,t,i,r)):function(a,l,u){return o((Si[a]&&Si[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Yi(e),e.length>1){var r=e.map(function(c){return hi.quickSetter(c,t,i)}),s=r.length;return function(c){for(var h=s;h--;)r[h](c)}}e=e[0]||{};var o=Si[t],a=Ao(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var h=new o;Ca._pt=0,h.init(e,i?c+i:c,Ca,0,[e]),h.render(1,h),Ca._pt&&w_(1,Ca)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=hi.to(e,Ui((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ro(e.ease,Qa.ease)),fv(Qa,e||{})},config:function(e){return fv(Li,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Si[a]&&!Ii[a]&&zu(t+" effect requires "+a+" plugin.")}),yd[t]=function(a,l,u){return i(Yi(a),Ui(l||{},s),u)},o&&(qn.prototype[t]=function(a,l,u){return this.add(yd[t](a,Lr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){vt[e]=Ro(t)},parseEase:function(e,t){return arguments.length?Ro(e,t):vt},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new qn(e),r,s;for(i.smoothChildTiming=oi(e.smoothChildTiming),jt.remove(i),i._dp=0,i._time=i._tTime=jt._time,r=jt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof an&&r.vars.onComplete===r._targets[0]))&&wr(i,r,r._start-r._delay),r=s;return wr(jt,i,0),i},context:function(e,t){return e?new JM(e,t):Bt},matchMedia:function(e){return new VA(e)},matchMediaRefresh:function(){return bo.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||mm()},addEventListener:function(e,t){var i=yf[e]||(yf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=yf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:yA,wrapYoyo:SA,distribute:DM,random:IM,snap:NM,normalize:xA,getUnit:Un,clamp:mA,splitColor:zM,toArray:Yi,selector:hm,mapRange:OM,pipe:_A,unitize:vA,interpolate:MA,shuffle:LM},install:xM,effects:yd,ticker:wi,updateRoot:qn.updateRoot,plugins:Si,globalTimeline:jt,core:{PropTween:li,globals:yM,Tween:an,Timeline:qn,Animation:Gu,getCache:Ao,_removeLinkedListItem:Oh,reverting:function(){return An},context:function(e){return e&&Bt&&(Bt.data.push(e),e._ctx=Bt),Bt},suppressOverwrites:function(e){return f_=e}}};ai("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return lh[n]=an[n]});wi.add(qn.updateRoot);Ca=lh.to({},{duration:0});var GA=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},WA=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=GA(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Td=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Sn(s)&&(l={},ai(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}WA(a,s)}}}},hi=lh.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)An?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Td("roundProps",dm),Td("modifiers"),Td("snap",NM))||lh;an.version=qn.version=hi.version="3.14.2";vM=1;d_()&&nl();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _v,ws,Fa,T_,yo,vv,A_,XA=function(){return typeof window<"u"},ns={},uo=180/Math.PI,ka=Math.PI/180,qo=Math.atan2,xv=1e8,C_=/([A-Z])/g,jA=/(left|right|width|margin|padding|x)/i,YA=/[\s,\(]\S/,Ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},qA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$A=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},KA=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ZA=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},eE=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},tE=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},QA=function(e,t,i){return e.style[t]=i},JA=function(e,t,i){return e.style.setProperty(t,i)},eC=function(e,t,i){return e._gsap[t]=i},tC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},nC=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},iC=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Yt="transform",ui=Yt+"Origin",rC=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in ns&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ar[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Vr(r,a)}):this.tfm[e]=o.x?o[e]:Vr(r,e),e===ui&&(this.tfm.zOrigin=o.zOrigin);else return Ar.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(Yt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ui,t,"")),e=Yt}(s||t)&&this.props.push(e,t,s[e])},nE=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sC=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(C_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=A_(),(!s||!s.isStart)&&!i[Yt]&&(nE(i),r.zOrigin&&i[ui]&&(i[ui]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},iE=function(e,t){var i={target:e,props:[],revert:sC,save:rC};return e._gsap||hi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},rE,_m=function(e,t){var i=ws.createElementNS?ws.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ws.createElement(e);return i&&i.style?i:ws.createElement(e)},Ri=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(C_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,il(t)||t,1)||""},yv="O,Moz,ms,Ms,Webkit".split(","),il=function(e,t,i){var r=t||yo,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(yv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?yv[o]:"")+e},vm=function(){XA()&&window.document&&(_v=window,ws=_v.document,Fa=ws.documentElement,yo=_m("div")||{style:{}},_m("div"),Yt=il(Yt),ui=Yt+"Origin",yo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",rE=!!il("perspective"),A_=hi.core.reverting,T_=1)},Sv=function(e){var t=e.ownerSVGElement,i=_m("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Fa.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Fa.removeChild(i),s},Mv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},sE=function(e){var t,i;try{t=e.getBBox()}catch{t=Sv(e),i=1}return t&&(t.width||t.height)||i||(t=Sv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Mv(e,["x","cx","x1"])||0,y:+Mv(e,["y","cy","y1"])||0,width:0,height:0}:t},oE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&sE(e))},Ws=function(e,t){if(t){var i=e.style,r;t in ns&&t!==ui&&(t=Yt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(C_,"-$1").toLowerCase())):i.removeAttribute(t)}},Ts=function(e,t,i,r,s,o){var a=new li(e._pt,t,i,0,1,o?tE:eE);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Ev={deg:1,rad:1,turn:1},oC={grid:1,flex:1},Xs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=yo.style,l=jA.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,_,m,d;if(r===o||!s||Ev[r]||Ev[o])return s;if(o!=="px"&&!f&&(s=n(e,t,i,"px")),d=e.getCTM&&oE(e),(p||o==="%")&&(ns[t]||~t.indexOf("adius")))return g=d?e.getBBox()[l?"width":"height"]:e[c],tn(p?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(f?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ws||!_.appendChild)&&(_=ws.body),m=_._gsap,m&&p&&m.width&&l&&m.time===wi.time&&!m.uncache)return tn(s/m.width*h);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=h+r,g=e[c],v?e.style[t]=v:Ws(e,t)}else(p||o==="%")&&!oC[Ri(_,"display")]&&(a.position=Ri(e,"position")),_===e&&(a.position="static"),_.appendChild(yo),g=yo[c],_.removeChild(yo),a.position="absolute";return l&&p&&(m=Ao(_),m.time=wi.time,m.width=_[c]),tn(f?g*s/h:g&&s?h/g*s:0)},Vr=function(e,t,i,r){var s;return T_||vm(),t in Ar&&t!=="transform"&&(t=Ar[t],~t.indexOf(",")&&(t=t.split(",")[0])),ns[t]&&t!=="transform"?(s=Xu(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ch(Ri(e,ui))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=uh[t]&&uh[t](e,t,i)||Ri(e,t)||MM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Xs(e,t,s,i)+i:s},aC=function(e,t,i,r){if(!i||i==="none"){var s=il(t,e,1),o=s&&Ri(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ri(e,"borderTopColor"))}var a=new li(this._pt,e.style,t,0,1,ZM),l=0,u=0,c,h,f,p,g,_,m,d,v,x,S,C;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Ri(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ri(e,t)||r,_?e.style[t]=_:Ws(e,t)),c=[i,r],HM(c),i=c[0],r=c[1],f=i.match(Aa)||[],C=r.match(Aa)||[],C.length){for(;h=Aa.exec(r);)m=h[0],v=r.substring(l,h.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=f[u++]||"")&&(p=parseFloat(_)||0,S=_.substr((p+"").length),m.charAt(1)==="="&&(m=Oa(p,m)+S),d=parseFloat(m),x=m.substr((d+"").length),l=Aa.lastIndex-x.length,x||(x=x||Li.units[t]||S,l===r.length&&(r+=x,a.e+=x)),S!==x&&(p=Xs(e,t,_,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?tE:eE;return _M.test(r)&&(a.e=0),this._pt=a,a},wv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},lC=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=wv[i]||i,t[1]=wv[r]||r,t.join(" ")},uC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],ns[a]&&(l=1,a=a==="transformOrigin"?ui:Yt),Ws(i,a);l&&(Ws(i,Yt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Xu(i,1),o.uncache=1,nE(r)))}},uh={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new li(e._pt,t,i,0,0,uC);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Wu=[1,0,0,1,0,0],aE={},lE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Tv=function(e){var t=Ri(e,Yt);return lE(t)?Wu:t.substr(7).match(gM).map(tn)},R_=function(e,t){var i=e._gsap||Ao(e),r=e.style,s=Tv(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Wu:s):(s===Wu&&!e.offsetParent&&e!==Fa&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,Fa.appendChild(e)),s=Tv(e),l?r.display=l:Ws(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Fa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},xm=function(e,t,i,r,s,o){var a=e._gsap,l=s||R_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],v=l[5],x=t.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,w,M,R,N;i?l!==Wu&&(M=p*m-g*_)&&(R=S*(m/M)+C*(-_/M)+(_*v-m*d)/M,N=S*(-g/M)+C*(p/M)-(p*v-g*d)/M,S=R,C=N):(w=sE(e),S=w.x+(~x[0].indexOf("%")?S/100*w.width:S),C=w.y+(~(x[1]||x[0]).indexOf("%")?C/100*w.height:C)),r||r!==!1&&a.smooth?(d=S-u,v=C-c,a.xOffset=h+(d*p+v*_)-d,a.yOffset=f+(d*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=C,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ui]="0px 0px",o&&(Ts(o,a,"xOrigin",u,S),Ts(o,a,"yOrigin",c,C),Ts(o,a,"xOffset",h,a.xOffset),Ts(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},Xu=function(e,t){var i=e._gsap||new XM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ri(e,ui)||"0",c,h,f,p,g,_,m,d,v,x,S,C,w,M,R,N,y,T,I,z,Y,$,B,j,D,K,b,ie,Te,Ke,q,re;return c=h=f=_=m=d=v=x=S=0,p=g=1,i.svg=!!(e.getCTM&&oE(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Yt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Yt]!=="none"?l[Yt]:"")),r.scale=r.rotate=r.translate="none"),M=R_(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",j=""):j=!t&&e.getAttribute("data-svg-origin"),xm(e,j||u,!!j||i.originIsAbsolute,i.smooth!==!1,M)),C=i.xOrigin||0,w=i.yOrigin||0,M!==Wu&&(T=M[0],I=M[1],z=M[2],Y=M[3],c=$=M[4],h=B=M[5],M.length===6?(p=Math.sqrt(T*T+I*I),g=Math.sqrt(Y*Y+z*z),_=T||I?qo(I,T)*uo:0,v=z||Y?qo(z,Y)*uo+_:0,v&&(g*=Math.abs(Math.cos(v*ka))),i.svg&&(c-=C-(C*T+w*z),h-=w-(C*I+w*Y))):(re=M[6],Ke=M[7],b=M[8],ie=M[9],Te=M[10],q=M[11],c=M[12],h=M[13],f=M[14],R=qo(re,Te),m=R*uo,R&&(N=Math.cos(-R),y=Math.sin(-R),j=$*N+b*y,D=B*N+ie*y,K=re*N+Te*y,b=$*-y+b*N,ie=B*-y+ie*N,Te=re*-y+Te*N,q=Ke*-y+q*N,$=j,B=D,re=K),R=qo(-z,Te),d=R*uo,R&&(N=Math.cos(-R),y=Math.sin(-R),j=T*N-b*y,D=I*N-ie*y,K=z*N-Te*y,q=Y*y+q*N,T=j,I=D,z=K),R=qo(I,T),_=R*uo,R&&(N=Math.cos(R),y=Math.sin(R),j=T*N+I*y,D=$*N+B*y,I=I*N-T*y,B=B*N-$*y,T=j,$=D),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=tn(Math.sqrt(T*T+I*I+z*z)),g=tn(Math.sqrt(B*B+re*re)),R=qo($,B),v=Math.abs(R)>2e-4?R*uo:0,S=q?1/(q<0?-q:q):0),i.svg&&(j=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!lE(Ri(e,Yt)),j&&e.setAttribute("transform",j))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=h-((i.yPercent=h&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=tn(p),i.scaleY=tn(g),i.rotation=tn(_)+a,i.rotationX=tn(m)+a,i.rotationY=tn(d)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=S+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[ui]=ch(u)),i.xOffset=i.yOffset=0,i.force3D=Li.force3D,i.renderTransform=i.svg?fC:rE?uE:cC,i.uncache=0,i},ch=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ad=function(e,t,i){var r=Un(t);return tn(parseFloat(t)+parseFloat(Xs(e,"x",i+"px",r)))+r},cC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,uE(e,t)},Js="0deg",Cl="0px",eo=") ",uE=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,h=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,v=i.target,x=i.zOrigin,S="",C=d==="auto"&&e&&e!==1||d===!0;if(x&&(h!==Js||c!==Js)){var w=parseFloat(c)*ka,M=Math.sin(w),R=Math.cos(w),N;w=parseFloat(h)*ka,N=Math.cos(w),o=Ad(v,o,M*N*-x),a=Ad(v,a,-Math.sin(w)*-x),l=Ad(v,l,R*N*-x+x)}m!==Cl&&(S+="perspective("+m+eo),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||o!==Cl||a!==Cl||l!==Cl)&&(S+=l!==Cl||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+eo),u!==Js&&(S+="rotate("+u+eo),c!==Js&&(S+="rotateY("+c+eo),h!==Js&&(S+="rotateX("+h+eo),(f!==Js||p!==Js)&&(S+="skew("+f+", "+p+eo),(g!==1||_!==1)&&(S+="scale("+g+", "+_+eo),v.style[Yt]=S||"translate(0, 0)"},fC=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,h=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,v=i.forceCSS,x=parseFloat(o),S=parseFloat(a),C,w,M,R,N;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=ka,u*=ka,C=Math.cos(l)*h,w=Math.sin(l)*h,M=Math.sin(l-u)*-f,R=Math.cos(l-u)*f,u&&(c*=ka,N=Math.tan(u-c),N=Math.sqrt(1+N*N),M*=N,R*=N,c&&(N=Math.tan(c),N=Math.sqrt(1+N*N),C*=N,w*=N)),C=tn(C),w=tn(w),M=tn(M),R=tn(R)):(C=h,R=f,w=M=0),(x&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(x=Xs(p,"x",o,"px"),S=Xs(p,"y",a,"px")),(g||_||m||d)&&(x=tn(x+g-(g*C+_*M)+m),S=tn(S+_-(g*w+_*R)+d)),(r||s)&&(N=p.getBBox(),x=tn(x+r/100*N.width),S=tn(S+s/100*N.height)),N="matrix("+C+","+w+","+M+","+R+","+x+","+S+")",p.setAttribute("transform",N),v&&(p.style[Yt]=N)},hC=function(e,t,i,r,s){var o=360,a=Sn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?uo:1),u=l-r,c=r+u+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),h==="cw"&&u<0?u=(u+o*xv)%o-~~(u/o)*o:h==="ccw"&&u>0&&(u=(u-o*xv)%o-~~(u/o)*o)),e._pt=f=new li(e._pt,t,i,r,u,qA),f.e=c,f.u="deg",e._props.push(i),f},Av=function(e,t){for(var i in t)e[i]=t[i];return e},dC=function(e,t,i){var r=Av({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,h,f,p,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[Yt]=t,a=Xu(i,1),Ws(i,Yt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[Yt],o[Yt]=t,a=Xu(i,1),o[Yt]=u);for(l in ns)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Un(u),g=Un(c),h=p!==g?Xs(i,l,u,g):parseFloat(u),f=parseFloat(c),e._pt=new li(e._pt,a,l,h,f-h,gm),e._pt.u=g||0,e._props.push(l));Av(a,r)};ai("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});uh[e>1?"border"+n:n]=function(a,l,u,c,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return Vr(a,g,u)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(c+"").split(" "),p={},o.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,h)}});var cE={name:"css",register:vm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,h,f,p,g,_,m,d,v,x,S,C,w,M,R,N;T_||vm(),this.styles=this.styles||iE(e),R=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Si[_]&&jM(_,t,i,r,e,s)))){if(p=typeof c,g=uh[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Hu(c)),g)g(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Fs.lastIndex=0,Fs.test(u)||(m=Un(u),d=Un(c),d?m!==d&&(u=Xs(e,_,u,d)+d):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),R.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Sn(u)&&~u.indexOf("random(")&&(u=Hu(u)),Un(u+"")||u==="auto"||(u+=Li.units[_]||Un(Vr(e,_))||""),(u+"").charAt(1)==="="&&(u=Vr(e,_))):u=Vr(e,_),f=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),h=parseFloat(c),_ in Ar&&(_==="autoAlpha"&&(f===1&&Vr(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),Ts(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Ar[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in ns,x){if(this.styles.save(_),N=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Ri(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=c,c=Ri(e,"perspective"),y?e.style.perspective=y:Ws(e,"perspective")}h=parseFloat(c)}if(S||(C=e._gsap,C.renderTransform&&!t.parseTransform||Xu(e,t.parseTransform),w=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new li(this._pt,a,Yt,0,1,C.renderTransform,C,0,-1),S.dep=1),_==="scale")this._pt=new li(this._pt,C,"scaleY",C.scaleY,(v?Oa(C.scaleY,v+h):h)-C.scaleY||0,gm),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(ui,0,a[ui]),c=lC(c),C.svg?xm(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==C.zOrigin&&Ts(this,C,"zOrigin",C.zOrigin,d),Ts(this,a,_,ch(u),ch(c)));continue}else if(_==="svgOrigin"){xm(e,c,1,w,0,this);continue}else if(_ in aE){hC(this,C,_,f,v?Oa(f,v+c):c);continue}else if(_==="smoothOrigin"){Ts(this,C,"smooth",C.smooth,c);continue}else if(_==="force3D"){C[_]=c;continue}else if(_==="transform"){dC(this,c,e);continue}}else _ in a||(_=il(_)||_);if(x||(h||h===0)&&(f||f===0)&&!YA.test(c)&&_ in a)m=(u+"").substr((f+"").length),h||(h=0),d=Un(c)||(_ in Li.units?Li.units[_]:m),m!==d&&(f=Xs(e,_,u,d)),this._pt=new li(this._pt,x?C:a,_,f,(v?Oa(f,v+h):h)-f,!x&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?ZA:gm),this._pt.u=d||0,x&&N!==c?(this._pt.b=u,this._pt.e=N,this._pt.r=KA):m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=$A);else if(_ in a)aC.call(this,e,_,u,v?v+c:c);else if(_ in e)this.add(e,_,u||e[_],v?v+c:c,r,s);else if(_!=="parseTransform"){m_(_,c);continue}x||(_ in a?R.push(_,0,a[_]):typeof e[_]=="function"?R.push(_,2,e[_]()):R.push(_,1,u||e[_])),o.push(_)}}M&&QM(this)},render:function(e,t){if(t.tween._time||!A_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Vr,aliases:Ar,getSetter:function(e,t,i){var r=Ar[t];return r&&r.indexOf(",")<0&&(t=r),t in ns&&t!==ui&&(e._gsap.x||Vr(e,"x"))?i&&vv===i?t==="scale"?tC:eC:(vv=i||{})&&(t==="scale"?nC:iC):e.style&&!h_(e.style[t])?QA:~t.indexOf("-")?JA:E_(e,t)},core:{_removeProperty:Ws,_getMatrix:R_}};hi.utils.checkPrefix=il;hi.core.getStyleSaver=iE;(function(n,e,t,i){var r=ai(n+","+e+","+t,function(s){ns[s]=1});ai(e,function(s){Li.units[s]="deg",aE[s]=1}),Ar[r[13]]=n+","+e,ai(i,function(s){var o=s.split(":");Ar[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ai("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Li.units[n]="px"});hi.registerPlugin(cE);var gt=hi.registerPlugin(cE)||hi;gt.core.Tween;function pC(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function mC(n,e,t){return e&&pC(n.prototype,e),n}/*!
 * Observer 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var wn,Sf,Ti,As,Cs,za,fE,co,uu,hE,jr,rr,dE,pE=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},mE=1,Ra=[],ht=[],Pr=[],cu=Date.now,ym=function(e,t){return t},gC=function(){var e=uu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,ht),r.push.apply(r,Pr),ht=i,Pr=r,ym=function(o,a){return t[o](a)}},ks=function(e,t){return~Pr.indexOf(e)&&Pr[Pr.indexOf(e)+1][t]},fu=function(e){return!!~hE.indexOf(e)},Bn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},zn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},wc="scrollLeft",Tc="scrollTop",Sm=function(){return jr&&jr.isPressed||ht.cache++},fh=function(e,t){var i=function r(s){if(s||s===0){mE&&(Ti.history.scrollRestoration="manual");var o=jr&&jr.isPressed;s=r.v=Math.round(s)||(jr&&jr.iOS?1:0),e(s),r.cacheID=ht.cache,o&&ym("ss",s)}else(t||ht.cache!==r.cacheID||ym("ref"))&&(r.cacheID=ht.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},$n={s:wc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fh(function(n){return arguments.length?Ti.scrollTo(n,fn.sc()):Ti.pageXOffset||As[wc]||Cs[wc]||za[wc]||0})},fn={s:Tc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:$n,sc:fh(function(n){return arguments.length?Ti.scrollTo($n.sc(),n):Ti.pageYOffset||As[Tc]||Cs[Tc]||za[Tc]||0})},ei=function(e,t){return(t&&t._ctx&&t._ctx.selector||wn.utils.toArray)(e)[0]||(typeof e=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},_C=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},js=function(e,t){var i=t.s,r=t.sc;fu(e)&&(e=As.scrollingElement||Cs);var s=ht.indexOf(e),o=r===fn.sc?1:2;!~s&&(s=ht.push(e)-1),ht[s+o]||Bn(e,"scroll",Sm);var a=ht[s+o],l=a||(ht[s+o]=fh(ks(e,i),!0)||(fu(e)?r:fh(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=wn.getProperty(e,"scrollBehavior")==="smooth"),l},Mm=function(e,t,i){var r=e,s=e,o=cu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(g,_){var m=cu();_||m-o>l?(s=r,r=g,a=o,o=m):i?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=i?0:r,a=o=0},f=function(g){var _=a,m=s,d=cu();return(g||g===0)&&g!==r&&c(g),o===a||d-a>u?0:(r+(i?m:-m))/((i?d:o)-_)*1e3};return{update:c,reset:h,getVelocity:f}},Rl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Cv=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},gE=function(){uu=wn.core.globals().ScrollTrigger,uu&&uu.core&&gC()},_E=function(e){return wn=e||pE(),!Sf&&wn&&typeof document<"u"&&document.body&&(Ti=window,As=document,Cs=As.documentElement,za=As.body,hE=[Ti,As,Cs,za],wn.utils.clamp,dE=wn.core.context||function(){},co="onpointerenter"in za?"pointer":"mouse",fE=rn.isTouch=Ti.matchMedia&&Ti.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ti||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,rr=rn.eventTypes=("ontouchstart"in Cs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Cs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return mE=0},500),gE(),Sf=1),Sf};$n.op=fn;ht.cache=0;var rn=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){Sf||_E(wn)||console.warn("Please gsap.registerPlugin(Observer)"),uu||gE();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,h=i.onStop,f=i.onStopDelay,p=i.ignore,g=i.wheelSpeed,_=i.event,m=i.onDragStart,d=i.onDragEnd,v=i.onDrag,x=i.onPress,S=i.onRelease,C=i.onRight,w=i.onLeft,M=i.onUp,R=i.onDown,N=i.onChangeX,y=i.onChangeY,T=i.onChange,I=i.onToggleX,z=i.onToggleY,Y=i.onHover,$=i.onHoverEnd,B=i.onMove,j=i.ignoreCheck,D=i.isNormalizer,K=i.onGestureStart,b=i.onGestureEnd,ie=i.onWheel,Te=i.onEnable,Ke=i.onDisable,q=i.onClick,re=i.scrollSpeed,ne=i.capture,se=i.allowClicks,Re=i.lockAxis,Me=i.onLockAxis;this.target=a=ei(a)||Cs,this.vars=i,p&&(p=wn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,re=re||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(Ti.getComputedStyle(za).lineHeight)||22);var He,De,Ye,L,lt,Ve,Ze,k=this,tt=0,Oe=0,P=i.passive||!c&&i.passive!==!1,E=js(a,$n),G=js(a,fn),ee=E(),J=G(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&rr[0]==="pointerdown",Ae=fu(a),le=a.ownerDocument||As,me=[0,0,0],Qe=[0,0,0],ae=0,Ee=function(){return ae=cu()},Ce=function(we,pt){return(k.event=we)&&p&&_C(we.target,p)||pt&&Q&&we.pointerType!=="touch"||j&&j(we,pt)},ge=function(){k._vx.reset(),k._vy.reset(),De.pause(),h&&h(k)},he=function(){var we=k.deltaX=Cv(me),pt=k.deltaY=Cv(Qe),ve=Math.abs(we)>=r,Xe=Math.abs(pt)>=r;T&&(ve||Xe)&&T(k,we,pt,me,Qe),ve&&(C&&k.deltaX>0&&C(k),w&&k.deltaX<0&&w(k),N&&N(k),I&&k.deltaX<0!=tt<0&&I(k),tt=k.deltaX,me[0]=me[1]=me[2]=0),Xe&&(R&&k.deltaY>0&&R(k),M&&k.deltaY<0&&M(k),y&&y(k),z&&k.deltaY<0!=Oe<0&&z(k),Oe=k.deltaY,Qe[0]=Qe[1]=Qe[2]=0),(L||Ye)&&(B&&B(k),Ye&&(m&&Ye===1&&m(k),v&&v(k),Ye=0),L=!1),Ve&&!(Ve=!1)&&Me&&Me(k),lt&&(ie(k),lt=!1),He=0},ke=function(we,pt,ve){me[ve]+=we,Qe[ve]+=pt,k._vx.update(we),k._vy.update(pt),u?He||(He=requestAnimationFrame(he)):he()},Ne=function(we,pt){Re&&!Ze&&(k.axis=Ze=Math.abs(we)>Math.abs(pt)?"x":"y",Ve=!0),Ze!=="y"&&(me[2]+=we,k._vx.update(we,!0)),Ze!=="x"&&(Qe[2]+=pt,k._vy.update(pt,!0)),u?He||(He=requestAnimationFrame(he)):he()},Je=function(we){if(!Ce(we,1)){we=Rl(we,c);var pt=we.clientX,ve=we.clientY,Xe=pt-k.x,ze=ve-k.y,qe=k.isDragging;k.x=pt,k.y=ve,(qe||(Xe||ze)&&(Math.abs(k.startX-pt)>=s||Math.abs(k.startY-ve)>=s))&&(Ye||(Ye=qe?2:1),qe||(k.isDragging=!0),Ne(Xe,ze))}},U=k.onPress=function(be){Ce(be,1)||be&&be.button||(k.axis=Ze=null,De.pause(),k.isPressed=!0,be=Rl(be),tt=Oe=0,k.startX=k.x=be.clientX,k.startY=k.y=be.clientY,k._vx.reset(),k._vy.reset(),Bn(D?a:le,rr[1],Je,P,!0),k.deltaX=k.deltaY=0,x&&x(k))},oe=k.onRelease=function(be){if(!Ce(be,1)){zn(D?a:le,rr[1],Je,!0);var we=!isNaN(k.y-k.startY),pt=k.isDragging,ve=pt&&(Math.abs(k.x-k.startX)>3||Math.abs(k.y-k.startY)>3),Xe=Rl(be);!ve&&we&&(k._vx.reset(),k._vy.reset(),c&&se&&wn.delayedCall(.08,function(){if(cu()-ae>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(le.createEvent){var ze=le.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,Ti,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(ze)}}})),k.isDragging=k.isGesturing=k.isPressed=!1,h&&pt&&!D&&De.restart(!0),Ye&&he(),d&&pt&&d(k),S&&S(k,ve)}},Z=function(we){return we.touches&&we.touches.length>1&&(k.isGesturing=!0)&&K(we,k.isDragging)},te=function(){return(k.isGesturing=!1)||b(k)},de=function(we){if(!Ce(we)){var pt=E(),ve=G();ke((pt-ee)*re,(ve-J)*re,1),ee=pt,J=ve,h&&De.restart(!0)}},pe=function(we){if(!Ce(we)){we=Rl(we,c),ie&&(lt=!0);var pt=(we.deltaMode===1?l:we.deltaMode===2?Ti.innerHeight:1)*g;ke(we.deltaX*pt,we.deltaY*pt,0),h&&!D&&De.restart(!0)}},nt=function(we){if(!Ce(we)){var pt=we.clientX,ve=we.clientY,Xe=pt-k.x,ze=ve-k.y;k.x=pt,k.y=ve,L=!0,h&&De.restart(!0),(Xe||ze)&&Ne(Xe,ze)}},Ie=function(we){k.event=we,Y(k)},it=function(we){k.event=we,$(k)},Ge=function(we){return Ce(we)||Rl(we,c)&&q(k)};De=k._dc=wn.delayedCall(f||.25,ge).pause(),k.deltaX=k.deltaY=0,k._vx=Mm(0,50,!0),k._vy=Mm(0,50,!0),k.scrollX=E,k.scrollY=G,k.isDragging=k.isGesturing=k.isPressed=!1,dE(this),k.enable=function(be){return k.isEnabled||(Bn(Ae?le:a,"scroll",Sm),o.indexOf("scroll")>=0&&Bn(Ae?le:a,"scroll",de,P,ne),o.indexOf("wheel")>=0&&Bn(a,"wheel",pe,P,ne),(o.indexOf("touch")>=0&&fE||o.indexOf("pointer")>=0)&&(Bn(a,rr[0],U,P,ne),Bn(le,rr[2],oe),Bn(le,rr[3],oe),se&&Bn(a,"click",Ee,!0,!0),q&&Bn(a,"click",Ge),K&&Bn(le,"gesturestart",Z),b&&Bn(le,"gestureend",te),Y&&Bn(a,co+"enter",Ie),$&&Bn(a,co+"leave",it),B&&Bn(a,co+"move",nt)),k.isEnabled=!0,k.isDragging=k.isGesturing=k.isPressed=L=Ye=!1,k._vx.reset(),k._vy.reset(),ee=E(),J=G(),be&&be.type&&U(be),Te&&Te(k)),k},k.disable=function(){k.isEnabled&&(Ra.filter(function(be){return be!==k&&fu(be.target)}).length||zn(Ae?le:a,"scroll",Sm),k.isPressed&&(k._vx.reset(),k._vy.reset(),zn(D?a:le,rr[1],Je,!0)),zn(Ae?le:a,"scroll",de,ne),zn(a,"wheel",pe,ne),zn(a,rr[0],U,ne),zn(le,rr[2],oe),zn(le,rr[3],oe),zn(a,"click",Ee,!0),zn(a,"click",Ge),zn(le,"gesturestart",Z),zn(le,"gestureend",te),zn(a,co+"enter",Ie),zn(a,co+"leave",it),zn(a,co+"move",nt),k.isEnabled=k.isPressed=k.isDragging=!1,Ke&&Ke(k))},k.kill=k.revert=function(){k.disable();var be=Ra.indexOf(k);be>=0&&Ra.splice(be,1),jr===k&&(jr=0)},Ra.push(k),D&&fu(a)&&(jr=k),k.enable(_)},mC(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();rn.version="3.14.2";rn.create=function(n){return new rn(n)};rn.register=_E;rn.getAll=function(){return Ra.slice()};rn.getById=function(n){return Ra.filter(function(e){return e.vars.id===n})[0]};pE()&&wn.registerPlugin(rn);/*!
 * ScrollTrigger 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Le,fa,ft,Lt,Mi,Mt,b_,hh,ju,hu,Wl,Ac,Dn,zh,Em,Xn,Rv,bv,ha,vE,Cd,xE,Gn,wm,yE,SE,ms,Tm,P_,Ba,L_,du,Am,Rd,Cc=1,Nn=Date.now,bd=Nn(),Ki=0,Xl=0,Pv=function(e,t,i){var r=yi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Lv=function(e,t){return t&&(!yi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},vC=function n(){return Xl&&requestAnimationFrame(n)},Dv=function(){return zh=1},Nv=function(){return zh=0},xr=function(e){return e},jl=function(e){return Math.round(e*1e5)/1e5||0},ME=function(){return typeof window<"u"},EE=function(){return Le||ME()&&(Le=window.gsap)&&Le.registerPlugin&&Le},ko=function(e){return!!~b_.indexOf(e)},wE=function(e){return(e==="Height"?L_:ft["inner"+e])||Mi["client"+e]||Mt["client"+e]},TE=function(e){return ks(e,"getBoundingClientRect")||(ko(e)?function(){return Af.width=ft.innerWidth,Af.height=L_,Af}:function(){return Gr(e)})},xC=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=ks(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?wE(s):e["client"+s])||0}},yC=function(e,t){return!t||~Pr.indexOf(e)?TE(e):function(){return Af}},Cr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=ks(e,i))?o()-TE(e)()[s]:ko(e)?(Mi[i]||Mt[i])-wE(r):e[i]-e["offset"+r])},Rc=function(e,t){for(var i=0;i<ha.length;i+=3)(!t||~t.indexOf(ha[i+1]))&&e(ha[i],ha[i+1],ha[i+2])},yi=function(e){return typeof e=="string"},On=function(e){return typeof e=="function"},Yl=function(e){return typeof e=="number"},fo=function(e){return typeof e=="object"},bl=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Pd=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},$o=Math.abs,AE="left",CE="top",D_="right",N_="bottom",Po="width",Lo="height",pu="Right",mu="Left",gu="Top",_u="Bottom",on="padding",Gi="margin",rl="Width",I_="Height",un="px",Wi=function(e){return ft.getComputedStyle(e)},SC=function(e){var t=Wi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Iv=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Gr=function(e,t){var i=t&&Wi(e)[Em]!=="matrix(1, 0, 0, 1, 0, 0)"&&Le.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},dh=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},RE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},MC=function(e){return function(t){return Le.utils.snap(RE(e),t)}},U_=function(e){var t=Le.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},EC=function(e){return function(t,i){return U_(RE(e))(t,i.direction)}},bc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},vn=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},_n=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Pc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Uv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Lc={toggleActions:"play",anticipatePin:0},ph={top:0,left:0,center:.5,bottom:1,right:1},Mf=function(e,t){if(yi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ph?ph[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Dc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,h=s.fontSize,f=s.indent,p=s.fontWeight,g=Lt.createElement("div"),_=ko(i)||ks(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,d=_?Mt:i,v=e.indexOf("start")!==-1,x=v?u:c,S="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(S+=(r===fn?D_:N_)+":"+(o+parseFloat(f))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,d.children[0]?d.insertBefore(g,d.children[0]):d.appendChild(g),g._offset=g["offset"+r.op.d2],Ef(g,0,r,v),g},Ef=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+rl]=1,s["border"+a+rl]=0,s[i.p]=t+"px",Le.set(e,s)},ct=[],Cm={},Yu,Ov=function(){return Nn()-Ki>34&&(Yu||(Yu=requestAnimationFrame(Kr)))},Ko=function(){(!Gn||!Gn.isPressed||Gn.startX>Mt.clientWidth)&&(ht.cache++,Gn?Yu||(Yu=requestAnimationFrame(Kr)):Kr(),Ki||Bo("scrollStart"),Ki=Nn())},Ld=function(){SE=ft.innerWidth,yE=ft.innerHeight},ql=function(e){ht.cache++,(e===!0||!Dn&&!xE&&!Lt.fullscreenElement&&!Lt.webkitFullscreenElement&&(!wm||SE!==ft.innerWidth||Math.abs(ft.innerHeight-yE)>ft.innerHeight*.25))&&hh.restart(!0)},zo={},wC=[],bE=function n(){return _n(rt,"scrollEnd",n)||So(!0)},Bo=function(e){return zo[e]&&zo[e].map(function(t){return t()})||wC},vi=[],PE=function(e){for(var t=0;t<vi.length;t+=5)(!e||vi[t+4]&&vi[t+4].query===e)&&(vi[t].style.cssText=vi[t+1],vi[t].getBBox&&vi[t].setAttribute("transform",vi[t+2]||""),vi[t+3].uncache=1)},LE=function(){return ht.forEach(function(e){return On(e)&&++e.cacheID&&(e.rec=e())})},O_=function(e,t){var i;for(Xn=0;Xn<ct.length;Xn++)i=ct[Xn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));du=!0,t&&PE(t),t||Bo("revert")},DE=function(e,t){ht.cache++,(t||!jn)&&ht.forEach(function(i){return On(i)&&i.cacheID++&&(i.rec=0)}),yi(e)&&(ft.history.scrollRestoration=P_=e)},jn,Do=0,Fv,TC=function(){if(Fv!==Do){var e=Fv=Do;requestAnimationFrame(function(){return e===Do&&So(!0)})}},NE=function(){Mt.appendChild(Ba),L_=!Gn&&Ba.offsetHeight||ft.innerHeight,Mt.removeChild(Ba)},kv=function(e){return ju(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},So=function(e,t){if(Mi=Lt.documentElement,Mt=Lt.body,b_=[ft,Lt,Mi,Mt],Ki&&!e&&!du){vn(rt,"scrollEnd",bE);return}NE(),jn=rt.isRefreshing=!0,du||LE();var i=Bo("refreshInit");vE&&rt.sort(),t||O_(),ht.forEach(function(r){On(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),ct.slice(0).forEach(function(r){return r.refresh()}),du=!1,ct.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Am=1,kv(!0),ct.forEach(function(r){var s=Cr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),kv(!1),Am=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),ht.forEach(function(r){On(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),DE(P_,1),hh.pause(),Do++,jn=2,Kr(2),ct.forEach(function(r){return On(r.vars.onRefresh)&&r.vars.onRefresh(r)}),jn=rt.isRefreshing=!1,Bo("refresh")},Rm=0,wf=1,vu,Kr=function(e){if(e===2||!jn&&!du){rt.isUpdating=!0,vu&&vu.update(0);var t=ct.length,i=Nn(),r=i-bd>=50,s=t&&ct[0].scroll();if(wf=Rm>s?-1:1,jn||(Rm=s),r&&(Ki&&!zh&&i-Ki>200&&(Ki=0,Bo("scrollEnd")),Wl=bd,bd=i),wf<0){for(Xn=t;Xn-- >0;)ct[Xn]&&ct[Xn].update(0,r);wf=1}else for(Xn=0;Xn<t;Xn++)ct[Xn]&&ct[Xn].update(0,r);rt.isUpdating=!1}Yu=0},bm=[AE,CE,N_,D_,Gi+_u,Gi+pu,Gi+gu,Gi+mu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Tf=bm.concat([Po,Lo,"boxSizing","max"+rl,"max"+I_,"position",Gi,on,on+gu,on+pu,on+_u,on+mu]),AC=function(e,t,i){Ha(i);var r=e._gsap;if(r.spacerIsNative)Ha(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Dd=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=bm.length,o=t.style,a=e.style,l;s--;)l=bm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[N_]=a[D_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Po]=dh(e,$n)+un,o[Lo]=dh(e,fn)+un,o[on]=a[Gi]=a[CE]=a[AE]="0",Ha(r),a[Po]=a["max"+rl]=i[Po],a[Lo]=a["max"+I_]=i[Lo],a[on]=i[on],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},CC=/([A-Z])/g,Ha=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Le.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(CC,"-$1").toLowerCase())}},Nc=function(e){for(var t=Tf.length,i=e.style,r=[],s=0;s<t;s++)r.push(Tf[s],i[Tf[s]]);return r.t=e,r},RC=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Af={left:0,top:0},zv=function(e,t,i,r,s,o,a,l,u,c,h,f,p,g){On(e)&&(e=e(l)),yi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Mf("0"+e.substr(3),i):0));var _=p?p.time():0,m,d,v;if(p&&p.seek(0),isNaN(e)||(e=+e),Yl(e))p&&(e=Le.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&Ef(a,i,r,!0);else{On(t)&&(t=t(l));var x=(e||"0").split(" "),S,C,w,M;v=ei(t,l)||Mt,S=Gr(v)||{},(!S||!S.left&&!S.top)&&Wi(v).display==="none"&&(M=v.style.display,v.style.display="block",S=Gr(v),M?v.style.display=M:v.style.removeProperty("display")),C=Mf(x[0],S[r.d]),w=Mf(x[1]||"0",i),e=S[r.p]-u[r.p]-c+C+s-w,a&&Ef(a,w,r,i-w<20||a._isStart&&w>20),i-=i-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var R=e+i,N=o._isStart;m="scroll"+r.d2,Ef(o,R,r,N&&R>20||!N&&(h?Math.max(Mt[m],Mi[m]):o.parentNode[m])<=R+1),h&&(u=Gr(a),h&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+un))}return p&&v&&(m=Gr(v),p.seek(f),d=Gr(v),p._caScrollDist=m[r.p]-d[r.p],e=e/p._caScrollDist*f),p&&p.seek(_),p?e:Math.round(e)},bC=/(webkit|moz|length|cssText|inset)/i,Bv=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Mt){e._stOrig=s.cssText,a=Wi(e);for(o in a)!+o&&!bC.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Le.core.getCache(e).uncache=1,t.appendChild(e)}},IE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=Math.round(o),r}},Ic=function(e,t,i){var r={};r[t.p]="+="+i,Le.set(e,r)},Hv=function(e,t){var i=js(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,h){var f=o.tween,p=l.onComplete,g={};u=u||i();var _=IE(i,u,function(){f.kill(),o.tween=0});return h=c&&h||0,c=c||a-u,f&&f.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(u+c*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ht.cache++,o.tween&&Kr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Le.to(e,l),f};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",i.wheelHandler),rt.isTouch&&vn(e,"touchmove",i.wheelHandler),s},rt=function(){function n(t,i){fa||n.register(Le)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Tm(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Xl){this.update=this.refresh=this.kill=xr;return}i=Iv(yi(i)||Yl(i)||i.nodeType?{trigger:i}:i,Lc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,h=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,d=s.onScrubComplete,v=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,w=s.pinSpacer,M=s.containerAnimation,R=s.fastScrollEnd,N=s.preventOverlaps,y=i.horizontal||i.containerAnimation&&i.horizontal!==!1?$n:fn,T=!h&&h!==0,I=ei(i.scroller||ft),z=Le.core.getCache(I),Y=ko(I),$=("pinType"in i?i.pinType:ks(I,"pinType")||Y&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],j=T&&i.toggleActions.split(" "),D="markers"in i?i.markers:Lc.markers,K=Y?0:parseFloat(Wi(I)["border"+y.p2+rl])||0,b=this,ie=i.onRefreshInit&&function(){return i.onRefreshInit(b)},Te=xC(I,Y,y),Ke=yC(I,Y),q=0,re=0,ne=0,se=js(I,y),Re,Me,He,De,Ye,L,lt,Ve,Ze,k,tt,Oe,P,E,G,ee,J,Q,Ae,le,me,Qe,ae,Ee,Ce,ge,he,ke,Ne,Je,U,oe,Z,te,de,pe,nt,Ie,it;if(b._startClamp=b._endClamp=!1,b._dir=y,m*=45,b.scroller=I,b.scroll=M?M.time.bind(M):se,De=se(),b.vars=i,r=r||i.animation,"refreshPriority"in i&&(vE=1,i.refreshPriority===-9999&&(vu=b)),z.tweenScroll=z.tweenScroll||{top:Hv(I,fn),left:Hv(I,$n)},b.tweenTo=Re=z.tweenScroll[y.p],b.scrubDuration=function(ve){Z=Yl(ve)&&ve,Z?oe?oe.duration(ve):oe=Le.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Z,paused:!0,onComplete:function(){return d&&d(b)}}):(oe&&oe.progress(1).kill(),oe=0)},r&&(r.vars.lazy=!1,r._initted&&!b.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),b.animation=r.pause(),r.scrollTrigger=b,b.scrubDuration(h),Je=0,l||(l=r.vars.id)),S&&((!fo(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in Mt.style&&Le.set(Y?[Mt,Mi]:I,{scrollBehavior:"auto"}),ht.forEach(function(ve){return On(ve)&&ve.target===(Y?Lt.scrollingElement||Mi:I)&&(ve.smooth=!1)}),He=On(S.snapTo)?S.snapTo:S.snapTo==="labels"?MC(r):S.snapTo==="labelsDirectional"?EC(r):S.directional!==!1?function(ve,Xe){return U_(S.snapTo)(ve,Nn()-re<500?0:Xe.direction)}:Le.utils.snap(S.snapTo),te=S.duration||{min:.1,max:2},te=fo(te)?hu(te.min,te.max):hu(te,te),de=Le.delayedCall(S.delay||Z/2||.1,function(){var ve=se(),Xe=Nn()-re<500,ze=Re.tween;if((Xe||Math.abs(b.getVelocity())<10)&&!ze&&!zh&&q!==ve){var qe=(ve-L)/E,Qt=r&&!T?r.totalProgress():qe,st=Xe?0:(Qt-U)/(Nn()-Wl)*1e3||0,kt=Le.utils.clamp(-qe,1-qe,$o(st/2)*st/.185),Jt=qe+(S.inertia===!1?0:kt),Nt,Rt,wt=S,di=wt.onStart,It=wt.onInterrupt,A=wt.onComplete;if(Nt=He(Jt,b),Yl(Nt)||(Nt=Jt),Rt=Math.max(0,Math.round(L+Nt*E)),ve<=lt&&ve>=L&&Rt!==ve){if(ze&&!ze._initted&&ze.data<=$o(Rt-ve))return;S.inertia===!1&&(kt=Nt-qe),Re(Rt,{duration:te($o(Math.max($o(Jt-Qt),$o(Nt-Qt))*.185/st/.05||0)),ease:S.ease||"power3",data:$o(Rt-ve),onInterrupt:function(){return de.restart(!0)&&It&&It(b)},onComplete:function(){b.update(),q=se(),r&&!T&&(oe?oe.resetTo("totalProgress",Nt,r._tTime/r._tDur):r.progress(Nt)),Je=U=r&&!T?r.totalProgress():b.progress,v&&v(b),A&&A(b)}},ve,kt*E,Rt-ve-kt*E),di&&di(b,Re.tween)}}else b.isActive&&q!==ve&&de.restart(!0)}).pause()),l&&(Cm[l]=b),f=b.trigger=ei(f||p!==!0&&p),it=f&&f._gsap&&f._gsap.stRevert,it&&(it=it(b)),p=p===!0?f:ei(p),yi(a)&&(a={targets:f,className:a}),p&&(g===!1||g===Gi||(g=!g&&p.parentNode&&p.parentNode.style&&Wi(p.parentNode).display==="flex"?!1:on),b.pin=p,Me=Le.core.getCache(p),Me.spacer?G=Me.pinState:(w&&(w=ei(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),Me.spacerIsNative=!!w,w&&(Me.spacerState=Nc(w))),Me.spacer=Q=w||Lt.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Me.pinState=G=Nc(p)),i.force3D!==!1&&Le.set(p,{force3D:!0}),b.spacer=Q=Me.spacer,Ne=Wi(p),Ee=Ne[g+y.os2],le=Le.getProperty(p),me=Le.quickSetter(p,y.a,un),Dd(p,Q,Ne),J=Nc(p)),D){Oe=fo(D)?Iv(D,Uv):Uv,k=Dc("scroller-start",l,I,y,Oe,0),tt=Dc("scroller-end",l,I,y,Oe,0,k),Ae=k["offset"+y.op.d2];var Ge=ei(ks(I,"content")||I);Ve=this.markerStart=Dc("start",l,Ge,y,Oe,Ae,0,M),Ze=this.markerEnd=Dc("end",l,Ge,y,Oe,Ae,0,M),M&&(Ie=Le.quickSetter([Ve,Ze],y.a,un)),!$&&!(Pr.length&&ks(I,"fixedMarkers")===!0)&&(SC(Y?Mt:I),Le.set([k,tt],{force3D:!0}),ge=Le.quickSetter(k,y.a,un),ke=Le.quickSetter(tt,y.a,un))}if(M){var be=M.vars.onUpdate,we=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){b.update(0,0,1),be&&be.apply(M,we||[])})}if(b.previous=function(){return ct[ct.indexOf(b)-1]},b.next=function(){return ct[ct.indexOf(b)+1]},b.revert=function(ve,Xe){if(!Xe)return b.kill(!0);var ze=ve!==!1||!b.enabled,qe=Dn;ze!==b.isReverted&&(ze&&(pe=Math.max(se(),b.scroll.rec||0),ne=b.progress,nt=r&&r.progress()),Ve&&[Ve,Ze,k,tt].forEach(function(Qt){return Qt.style.display=ze?"none":"block"}),ze&&(Dn=b,b.update(ze)),p&&(!C||!b.isActive)&&(ze?AC(p,Q,G):Dd(p,Q,Wi(p),Ce)),ze||b.update(ze),Dn=qe,b.isReverted=ze)},b.refresh=function(ve,Xe,ze,qe){if(!((Dn||!b.enabled)&&!Xe)){if(p&&ve&&Ki){vn(n,"scrollEnd",bE);return}!jn&&ie&&ie(b),Dn=b,Re.tween&&!ze&&(Re.tween.kill(),Re.tween=0),oe&&oe.pause(),_&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren?r.getChildren(!0,!0,!1).forEach(function(ut){return ut.vars.immediateRender&&ut.render(0,!0,!0)}):r.vars.immediateRender&&r.render(0,!0,!0)),b.isReverted||b.revert(!0,!0),b._subPinOffset=!1;var Qt=Te(),st=Ke(),kt=M?M.duration():Cr(I,y),Jt=E<=.01||!E,Nt=0,Rt=qe||0,wt=fo(ze)?ze.end:i.end,di=i.endTrigger||f,It=fo(ze)?ze.start:i.start||(i.start===0||!f?0:p?"0 0":"0 100%"),A=b.pinnedContainer=i.pinnedContainer&&ei(i.pinnedContainer,b),F=f&&Math.max(0,ct.indexOf(b))||0,H=F,W,O,fe,Se,xe,_e,Fe,$e,Ue,_t,mt,At,mn;for(D&&fo(ze)&&(At=Le.getProperty(k,y.p),mn=Le.getProperty(tt,y.p));H-- >0;)_e=ct[H],_e.end||_e.refresh(0,1)||(Dn=b),Fe=_e.pin,Fe&&(Fe===f||Fe===p||Fe===A)&&!_e.isReverted&&(_t||(_t=[]),_t.unshift(_e),_e.revert(!0,!0)),_e!==ct[H]&&(F--,H--);for(On(It)&&(It=It(b)),It=Pv(It,"start",b),L=zv(It,f,Qt,y,se(),Ve,k,b,st,K,$,kt,M,b._startClamp&&"_startClamp")||(p?-.001:0),On(wt)&&(wt=wt(b)),yi(wt)&&!wt.indexOf("+=")&&(~wt.indexOf(" ")?wt=(yi(It)?It.split(" ")[0]:"")+wt:(Nt=Mf(wt.substr(2),Qt),wt=yi(It)?It:(M?Le.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,L):L)+Nt,di=f)),wt=Pv(wt,"end",b),lt=Math.max(L,zv(wt||(di?"100% 0":kt),di,Qt,y,se()+Nt,Ze,tt,b,st,K,$,kt,M,b._endClamp&&"_endClamp"))||-.001,Nt=0,H=F;H--;)_e=ct[H]||{},Fe=_e.pin,Fe&&_e.start-_e._pinPush<=L&&!M&&_e.end>0&&(W=_e.end-(b._startClamp?Math.max(0,_e.start):_e.start),(Fe===f&&_e.start-_e._pinPush<L||Fe===A)&&isNaN(It)&&(Nt+=W*(1-_e.progress)),Fe===p&&(Rt+=W));if(L+=Nt,lt+=Nt,b._startClamp&&(b._startClamp+=Nt),b._endClamp&&!jn&&(b._endClamp=lt||-.001,lt=Math.min(lt,Cr(I,y))),E=lt-L||(L-=.01)&&.001,Jt&&(ne=Le.utils.clamp(0,1,Le.utils.normalize(L,lt,pe))),b._pinPush=Rt,Ve&&Nt&&(W={},W[y.a]="+="+Nt,A&&(W[y.p]="-="+se()),Le.set([Ve,Ze],W)),p&&!(Am&&b.end>=Cr(I,y)))W=Wi(p),Se=y===fn,fe=se(),Qe=parseFloat(le(y.a))+Rt,!kt&&lt>1&&(mt=(Y?Lt.scrollingElement||Mi:I).style,mt={style:mt,value:mt["overflow"+y.a.toUpperCase()]},Y&&Wi(Mt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(mt.style["overflow"+y.a.toUpperCase()]="scroll")),Dd(p,Q,W),J=Nc(p),O=Gr(p,!0),$e=$&&js(I,Se?$n:fn)(),g?(Ce=[g+y.os2,E+Rt+un],Ce.t=Q,H=g===on?dh(p,y)+E+Rt:0,H&&(Ce.push(y.d,H+un),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=H+un)),Ha(Ce),A&&ct.forEach(function(ut){ut.pin===A&&ut.vars.pinSpacing!==!1&&(ut._subPinOffset=!0)}),$&&se(pe)):(H=dh(p,y),H&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=H+un)),$&&(xe={top:O.top+(Se?fe-L:$e)+un,left:O.left+(Se?$e:fe-L)+un,boxSizing:"border-box",position:"fixed"},xe[Po]=xe["max"+rl]=Math.ceil(O.width)+un,xe[Lo]=xe["max"+I_]=Math.ceil(O.height)+un,xe[Gi]=xe[Gi+gu]=xe[Gi+pu]=xe[Gi+_u]=xe[Gi+mu]="0",xe[on]=W[on],xe[on+gu]=W[on+gu],xe[on+pu]=W[on+pu],xe[on+_u]=W[on+_u],xe[on+mu]=W[on+mu],ee=RC(G,xe,C),jn&&se(0)),r?(Ue=r._initted,Cd(1),r.render(r.duration(),!0,!0),ae=le(y.a)-Qe+E+Rt,he=Math.abs(E-ae)>1,$&&he&&ee.splice(ee.length-2,2),r.render(0,!0,!0),Ue||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Cd(0)):ae=E,mt&&(mt.value?mt.style["overflow"+y.a.toUpperCase()]=mt.value:mt.style.removeProperty("overflow-"+y.a));else if(f&&se()&&!M)for(O=f.parentNode;O&&O!==Mt;)O._pinOffset&&(L-=O._pinOffset,lt-=O._pinOffset),O=O.parentNode;_t&&_t.forEach(function(ut){return ut.revert(!1,!0)}),b.start=L,b.end=lt,De=Ye=jn?pe:se(),!M&&!jn&&(De<pe&&se(pe),b.scroll.rec=0),b.revert(!1,!0),re=Nn(),de&&(q=-1,de.restart(!0)),Dn=0,r&&T&&(r._initted||nt)&&r.progress()!==nt&&r.progress(nt||0,!0).render(r.time(),!0,!0),(Jt||ne!==b.progress||M||_||r&&!r._initted)&&(r&&!T&&(r._initted||ne||r.vars.immediateRender!==!1)&&r.totalProgress(M&&L<-.001&&!ne?Le.utils.normalize(L,lt,0):ne,!0),b.progress=Jt||(De-L)/E===ne?0:ne),p&&g&&(Q._pinOffset=Math.round(b.progress*ae)),oe&&oe.invalidate(),isNaN(At)||(At-=Le.getProperty(k,y.p),mn-=Le.getProperty(tt,y.p),Ic(k,y,At),Ic(Ve,y,At-(qe||0)),Ic(tt,y,mn),Ic(Ze,y,mn-(qe||0))),Jt&&!jn&&b.update(),c&&!jn&&!P&&(P=!0,c(b),P=!1)}},b.getVelocity=function(){return(se()-Ye)/(Nn()-Wl)*1e3||0},b.endAnimation=function(){bl(b.callbackAnimation),r&&(oe?oe.progress(1):r.paused()?T||bl(r,b.direction<0,1):bl(r,r.reversed()))},b.labelToScroll=function(ve){return r&&r.labels&&(L||b.refresh()||L)+r.labels[ve]/r.duration()*E||0},b.getTrailing=function(ve){var Xe=ct.indexOf(b),ze=b.direction>0?ct.slice(0,Xe).reverse():ct.slice(Xe+1);return(yi(ve)?ze.filter(function(qe){return qe.vars.preventOverlaps===ve}):ze).filter(function(qe){return b.direction>0?qe.end<=L:qe.start>=lt})},b.update=function(ve,Xe,ze){if(!(M&&!ze&&!ve)){var qe=jn===!0?pe:b.scroll(),Qt=ve?0:(qe-L)/E,st=Qt<0?0:Qt>1?1:Qt||0,kt=b.progress,Jt,Nt,Rt,wt,di,It,A,F;if(Xe&&(Ye=De,De=M?se():qe,S&&(U=Je,Je=r&&!T?r.totalProgress():st)),m&&p&&!Dn&&!Cc&&Ki&&(!st&&L<qe+(qe-Ye)/(Nn()-Wl)*m?st=1e-4:st===1&&lt>qe+(qe-Ye)/(Nn()-Wl)*m&&(st=.9999)),st!==kt&&b.enabled){if(Jt=b.isActive=!!st&&st<1,Nt=!!kt&&kt<1,It=Jt!==Nt,di=It||!!st!=!!kt,b.direction=st>kt?1:-1,b.progress=st,di&&!Dn&&(Rt=st&&!kt?0:st===1?1:kt===1?2:3,T&&(wt=!It&&j[Rt+1]!=="none"&&j[Rt+1]||j[Rt],F=r&&(wt==="complete"||wt==="reset"||wt in r))),N&&(It||F)&&(F||h||!r)&&(On(N)?N(b):b.getTrailing(N).forEach(function(fe){return fe.endAnimation()})),T||(oe&&!Dn&&!Cc?(oe._dp._time-oe._start!==oe._time&&oe.render(oe._dp._time-oe._start),oe.resetTo?oe.resetTo("totalProgress",st,r._tTime/r._tDur):(oe.vars.totalProgress=st,oe.invalidate().restart())):r&&r.totalProgress(st,!!(Dn&&(re||ve)))),p){if(ve&&g&&(Q.style[g+y.os2]=Ee),!$)me(jl(Qe+ae*st));else if(di){if(A=!ve&&st>kt&&lt+1>qe&&qe+1>=Cr(I,y),C)if(!ve&&(Jt||A)){var H=Gr(p,!0),W=qe-L;Bv(p,Mt,H.top+(y===fn?W:0)+un,H.left+(y===fn?0:W)+un)}else Bv(p,Q);Ha(Jt||A?ee:J),he&&st<1&&Jt||me(Qe+(st===1&&!A?ae:0))}}S&&!Re.tween&&!Dn&&!Cc&&de.restart(!0),a&&(It||x&&st&&(st<1||!Rd))&&ju(a.targets).forEach(function(fe){return fe.classList[Jt||x?"add":"remove"](a.className)}),o&&!T&&!ve&&o(b),di&&!Dn?(T&&(F&&(wt==="complete"?r.pause().totalProgress(1):wt==="reset"?r.restart(!0).pause():wt==="restart"?r.restart(!0):r[wt]()),o&&o(b)),(It||!Rd)&&(u&&It&&Pd(b,u),B[Rt]&&Pd(b,B[Rt]),x&&(st===1?b.kill(!1,1):B[Rt]=0),It||(Rt=st===1?1:3,B[Rt]&&Pd(b,B[Rt]))),R&&!Jt&&Math.abs(b.getVelocity())>(Yl(R)?R:2500)&&(bl(b.callbackAnimation),oe?oe.progress(1):bl(r,wt==="reverse"?1:!st,1))):T&&o&&!Dn&&o(b)}if(ke){var O=M?qe/M.duration()*(M._caScrollDist||0):qe;ge(O+(k._isFlipped?1:0)),ke(O)}Ie&&Ie(-qe/M.duration()*(M._caScrollDist||0))}},b.enable=function(ve,Xe){b.enabled||(b.enabled=!0,vn(I,"resize",ql),Y||vn(I,"scroll",Ko),ie&&vn(n,"refreshInit",ie),ve!==!1&&(b.progress=ne=0,De=Ye=q=se()),Xe!==!1&&b.refresh())},b.getTween=function(ve){return ve&&Re?Re.tween:oe},b.setPositions=function(ve,Xe,ze,qe){if(M){var Qt=M.scrollTrigger,st=M.duration(),kt=Qt.end-Qt.start;ve=Qt.start+kt*ve/st,Xe=Qt.start+kt*Xe/st}b.refresh(!1,!1,{start:Lv(ve,ze&&!!b._startClamp),end:Lv(Xe,ze&&!!b._endClamp)},qe),b.update()},b.adjustPinSpacing=function(ve){if(Ce&&ve){var Xe=Ce.indexOf(y.d)+1;Ce[Xe]=parseFloat(Ce[Xe])+ve+un,Ce[1]=parseFloat(Ce[1])+ve+un,Ha(Ce)}},b.disable=function(ve,Xe){if(ve!==!1&&b.revert(!0,!0),b.enabled&&(b.enabled=b.isActive=!1,Xe||oe&&oe.pause(),pe=0,Me&&(Me.uncache=1),ie&&_n(n,"refreshInit",ie),de&&(de.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!Y)){for(var ze=ct.length;ze--;)if(ct[ze].scroller===I&&ct[ze]!==b)return;_n(I,"resize",ql),Y||_n(I,"scroll",Ko)}},b.kill=function(ve,Xe){b.disable(ve,Xe),oe&&!Xe&&oe.kill(),l&&delete Cm[l];var ze=ct.indexOf(b);ze>=0&&ct.splice(ze,1),ze===Xn&&wf>0&&Xn--,ze=0,ct.forEach(function(qe){return qe.scroller===b.scroller&&(ze=1)}),ze||jn||(b.scroll.rec=0),r&&(r.scrollTrigger=null,ve&&r.revert({kill:!1}),Xe||r.kill()),Ve&&[Ve,Ze,k,tt].forEach(function(qe){return qe.parentNode&&qe.parentNode.removeChild(qe)}),vu===b&&(vu=0),p&&(Me&&(Me.uncache=1),ze=0,ct.forEach(function(qe){return qe.pin===p&&ze++}),ze||(Me.spacer=0)),i.onKill&&i.onKill(b)},ct.push(b),b.enable(!1,!1),it&&it(b),r&&r.add&&!E){var pt=b.update;b.update=function(){b.update=pt,ht.cache++,L||lt||b.refresh()},Le.delayedCall(.01,b.update),E=.01,L=lt=0}else b.refresh();p&&TC()},n.register=function(i){return fa||(Le=i||EE(),ME()&&window.document&&n.enable(),fa=Xl),fa},n.defaults=function(i){if(i)for(var r in i)Lc[r]=i[r];return Lc},n.disable=function(i,r){Xl=0,ct.forEach(function(o){return o[r?"kill":"disable"](i)}),_n(ft,"wheel",Ko),_n(Lt,"scroll",Ko),clearInterval(Ac),_n(Lt,"touchcancel",xr),_n(Mt,"touchstart",xr),bc(_n,Lt,"pointerdown,touchstart,mousedown",Dv),bc(_n,Lt,"pointerup,touchend,mouseup",Nv),hh.kill(),Rc(_n);for(var s=0;s<ht.length;s+=3)Pc(_n,ht[s],ht[s+1]),Pc(_n,ht[s],ht[s+2])},n.enable=function(){if(ft=window,Lt=document,Mi=Lt.documentElement,Mt=Lt.body,Le&&(ju=Le.utils.toArray,hu=Le.utils.clamp,Tm=Le.core.context||xr,Cd=Le.core.suppressOverwrites||xr,P_=ft.history.scrollRestoration||"auto",Rm=ft.pageYOffset||0,Le.core.globals("ScrollTrigger",n),Mt)){Xl=1,Ba=document.createElement("div"),Ba.style.height="100vh",Ba.style.position="absolute",NE(),vC(),rn.register(Le),n.isTouch=rn.isTouch,ms=rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),wm=rn.isTouch===1,vn(ft,"wheel",Ko),b_=[ft,Lt,Mi,Mt],Le.matchMedia?(n.matchMedia=function(u){var c=Le.matchMedia(),h;for(h in u)c.add(h,u[h]);return c},Le.addEventListener("matchMediaInit",function(){LE(),O_()}),Le.addEventListener("matchMediaRevert",function(){return PE()}),Le.addEventListener("matchMedia",function(){So(0,1),Bo("matchMedia")}),Le.matchMedia().add("(orientation: portrait)",function(){return Ld(),Ld})):console.warn("Requires GSAP 3.11.0 or later"),Ld(),vn(Lt,"scroll",Ko);var i=Mt.hasAttribute("style"),r=Mt.style,s=r.borderTopStyle,o=Le.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=Gr(Mt),fn.m=Math.round(a.top+fn.sc())||0,$n.m=Math.round(a.left+$n.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),i||(Mt.setAttribute("style",""),Mt.removeAttribute("style")),Ac=setInterval(Ov,250),Le.delayedCall(.5,function(){return Cc=0}),vn(Lt,"touchcancel",xr),vn(Mt,"touchstart",xr),bc(vn,Lt,"pointerdown,touchstart,mousedown",Dv),bc(vn,Lt,"pointerup,touchend,mouseup",Nv),Em=Le.utils.checkPrefix("transform"),Tf.push(Em),fa=Nn(),hh=Le.delayedCall(.2,So).pause(),ha=[Lt,"visibilitychange",function(){var u=ft.innerWidth,c=ft.innerHeight;Lt.hidden?(Rv=u,bv=c):(Rv!==u||bv!==c)&&ql()},Lt,"DOMContentLoaded",So,ft,"load",So,ft,"resize",ql],Rc(vn),ct.forEach(function(u){return u.enable(0,1)}),l=0;l<ht.length;l+=3)Pc(_n,ht[l],ht[l+1]),Pc(_n,ht[l],ht[l+2])}},n.config=function(i){"limitCallbacks"in i&&(Rd=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Ac)||(Ac=r)&&setInterval(Ov,r),"ignoreMobileResize"in i&&(wm=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Rc(_n)||Rc(vn,i.autoRefreshEvents||"none"),xE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=ei(i),o=ht.indexOf(s),a=ko(s);~o&&ht.splice(o,a?6:2),r&&(a?Pr.unshift(ft,r,Mt,r,Mi,r):Pr.unshift(s,r))},n.clearMatchMedia=function(i){ct.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(yi(i)?ei(i):i).getBoundingClientRect(),a=o[s?Po:Lo]*r||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},n.positionInViewport=function(i,r,s){yi(i)&&(i=ei(i));var o=i.getBoundingClientRect(),a=o[s?Po:Lo],l=r==null?a/2:r in ph?ph[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},n.killAll=function(i){if(ct.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=zo.killAll||[];zo={},r.forEach(function(s){return s()})}},n}();rt.version="3.14.2";rt.saveStyles=function(n){return n?ju(n).forEach(function(e){if(e&&e.style){var t=vi.indexOf(e);t>=0&&vi.splice(t,5),vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Le.core.getCache(e),Tm())}}):vi};rt.revert=function(n,e){return O_(!n,e)};rt.create=function(n,e){return new rt(n,e)};rt.refresh=function(n){return n?ql(!0):(fa||rt.register())&&So(!0)};rt.update=function(n){return++ht.cache&&Kr(n===!0?2:0)};rt.clearScrollMemory=DE;rt.maxScroll=function(n,e){return Cr(n,e?$n:fn)};rt.getScrollFunc=function(n,e){return js(ei(n),e?$n:fn)};rt.getById=function(n){return Cm[n]};rt.getAll=function(){return ct.filter(function(n){return n.vars.id!=="ScrollSmoother"})};rt.isScrolling=function(){return!!Ki};rt.snapDirectional=U_;rt.addEventListener=function(n,e){var t=zo[n]||(zo[n]=[]);~t.indexOf(e)||t.push(e)};rt.removeEventListener=function(n,e){var t=zo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};rt.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var h=[],f=[],p=Le.delayedCall(r,function(){c(h,f),h=[],f=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&On(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return On(s)&&(s=s(),vn(rt,"refresh",function(){return s=e.batchMax()})),ju(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(rt.create(u))}),t};var Vv=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},Nd=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(rn.isTouch?" pinch-zoom":""):"none",e===Mi&&n(Mt,t)},Uc={auto:1,scroll:1},PC=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Le.core.getCache(s),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Uc[(l=Wi(s)).overflowY]||Uc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!ko(s)&&(Uc[(l=Wi(s)).overflowY]||Uc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},UE=function(e,t,i,r){return rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&PC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&vn(Lt,rn.eventTypes[0],Wv,!1,!0)},onDisable:function(){return _n(Lt,rn.eventTypes[0],Wv,!0)}})},LC=/(input|label|select|textarea)/i,Gv,Wv=function(e){var t=LC.test(e.target.tagName);(t||Gv)&&(e._gsapAllow=!0,Gv=t)},DC=function(e){fo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=ei(e.target)||Mi,c=Le.core.globals().ScrollSmoother,h=c&&c.get(),f=ms&&(e.content&&ei(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=js(u,fn),g=js(u,$n),_=1,m=(rn.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,d=0,v=On(r)?function(){return r(a)}:function(){return r||2.8},x,S,C=UE(u,e.type,!0,s),w=function(){return S=!1},M=xr,R=xr,N=function(){l=Cr(u,fn),R=hu(ms?1:0,l),i&&(M=hu(0,Cr(u,$n))),x=Do},y=function(){f._gsap.y=jl(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},T=function(){if(S){requestAnimationFrame(w);var D=jl(a.deltaY/2),K=R(p.v-D);if(f&&K!==p.v+p.offset){p.offset=K-p.v;var b=jl((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+b+", 0, 1)",f._gsap.y=b+"px",p.cacheID=ht.cache,Kr()}return!0}p.offset&&y(),S=!0},I,z,Y,$,B=function(){N(),I.isActive()&&I.vars.scrollY>l&&(p()>l?I.progress(1)&&p(l):I.resetTo("scrollY",l))};return f&&Le.set(f,{y:"+=0"}),e.ignoreCheck=function(j){return ms&&j.type==="touchmove"&&T()||_>1.05&&j.type!=="touchstart"||a.isGesturing||j.touches&&j.touches.length>1},e.onPress=function(){S=!1;var j=_;_=jl((ft.visualViewport&&ft.visualViewport.scale||1)/m),I.pause(),j!==_&&Nd(u,_>1.01?!0:i?!1:"x"),z=g(),Y=p(),N(),x=Do},e.onRelease=e.onGestureStart=function(j,D){if(p.offset&&y(),!D)$.restart(!0);else{ht.cache++;var K=v(),b,ie;i&&(b=g(),ie=b+K*.05*-j.velocityX/.227,K*=Vv(g,b,ie,Cr(u,$n)),I.vars.scrollX=M(ie)),b=p(),ie=b+K*.05*-j.velocityY/.227,K*=Vv(p,b,ie,Cr(u,fn)),I.vars.scrollY=R(ie),I.invalidate().duration(K).play(.01),(ms&&I.vars.scrollY>=l||b>=l-1)&&Le.to({},{onUpdate:B,duration:K})}o&&o(j)},e.onWheel=function(){I._ts&&I.pause(),Nn()-d>1e3&&(x=0,d=Nn())},e.onChange=function(j,D,K,b,ie){if(Do!==x&&N(),D&&i&&g(M(b[2]===D?z+(j.startX-j.x):g()+D-b[1])),K){p.offset&&y();var Te=ie[2]===K,Ke=Te?Y+j.startY-j.y:p()+K-ie[1],q=R(Ke);Te&&Ke!==q&&(Y+=q-Ke),p(q)}(K||D)&&Kr()},e.onEnable=function(){Nd(u,i?!1:"x"),rt.addEventListener("refresh",B),vn(ft,"resize",B),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){Nd(u,!0),_n(ft,"resize",B),rt.removeEventListener("refresh",B),C.kill()},e.lockAxis=e.lockAxis!==!1,a=new rn(e),a.iOS=ms,ms&&!p()&&p(1),ms&&Le.ticker.add(xr),$=a._dc,I=Le.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:IE(p,p(),function(){return I.pause()})},onUpdate:Kr,onComplete:$.vars.onComplete}),a};rt.sort=function(n){if(On(n))return ct.sort(n);var e=ft.pageYOffset||0;return rt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ct.sort(n||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})};rt.observe=function(n){return new rn(n)};rt.normalizeScroll=function(n){if(typeof n>"u")return Gn;if(n===!0&&Gn)return Gn.enable();if(n===!1){Gn&&Gn.kill(),Gn=n;return}var e=n instanceof rn?n:DC(n);return Gn&&Gn.target===e.target&&Gn.kill(),ko(e.target)&&(Gn=e),e};rt.core={_getVelocityProp:Mm,_inputObserver:UE,_scrollers:ht,_proxies:Pr,bridge:{ss:function(){Ki||Bo("scrollStart"),Ki=Nn()},ref:function(){return Dn}}};EE()&&Le.registerPlugin(rt);var Xv="1.3.21";function OE(n,e,t){return Math.max(n,Math.min(e,t))}function NC(n,e,t){return(1-t)*n+t*e}function IC(n,e,t,i){return NC(n,e,1-Math.exp(-t*i))}function UC(n,e){return(n%e+e)%e}var OC=class{constructor(){Be(this,"isRunning",!1);Be(this,"value",0);Be(this,"from",0);Be(this,"to",0);Be(this,"currentTime",0);Be(this,"lerp");Be(this,"duration");Be(this,"easing");Be(this,"onUpdate")}advance(n){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=n;const i=OE(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=IC(this.value,this.to,this.lerp*60,n),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(n,e,{lerp:t,duration:i,easing:r,onStart:s,onUpdate:o}){this.from=this.value=n,this.to=e,this.lerp=t,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function FC(n,e){let t;return function(...i){clearTimeout(t),t=setTimeout(()=>{t=void 0,n.apply(this,i)},e)}}var kC=class{constructor(n,e,{autoResize:t=!0,debounce:i=250}={}){Be(this,"width",0);Be(this,"height",0);Be(this,"scrollHeight",0);Be(this,"scrollWidth",0);Be(this,"debouncedResize");Be(this,"wrapperResizeObserver");Be(this,"contentResizeObserver");Be(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Be(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Be(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=n,this.content=e,t&&(this.debouncedResize=FC(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var n,e;(n=this.wrapperResizeObserver)==null||n.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},FE=class{constructor(){Be(this,"events",{})}emit(n,...e){var i;const t=this.events[n]||[];for(let r=0,s=t.length;r<s;r++)(i=t[r])==null||i.call(t,...e)}on(n,e){return this.events[n]?this.events[n].push(e):this.events[n]=[e],()=>{var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}}off(n,e){var t;this.events[n]=(t=this.events[n])==null?void 0:t.filter(i=>e!==i)}destroy(){this.events={}}};const zC=100/6,ls={passive:!1};function jv(n,e){return n===1?zC:n===2?e:1}var BC=class{constructor(n,e={wheelMultiplier:1,touchMultiplier:1}){Be(this,"touchStart",{x:0,y:0});Be(this,"lastDelta",{x:0,y:0});Be(this,"window",{width:0,height:0});Be(this,"emitter",new FE);Be(this,"onTouchStart",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:n})});Be(this,"onTouchMove",n=>{const{clientX:e,clientY:t}=n.targetTouches?n.targetTouches[0]:n,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:n})});Be(this,"onTouchEnd",n=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:n})});Be(this,"onWheel",n=>{let{deltaX:e,deltaY:t,deltaMode:i}=n;const r=jv(i,this.window.width),s=jv(i,this.window.height);e*=r,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:n})});Be(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=n,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ls),this.element.addEventListener("touchstart",this.onTouchStart,ls),this.element.addEventListener("touchmove",this.onTouchMove,ls),this.element.addEventListener("touchend",this.onTouchEnd,ls)}on(n,e){return this.emitter.on(n,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,ls),this.element.removeEventListener("touchstart",this.onTouchStart,ls),this.element.removeEventListener("touchmove",this.onTouchMove,ls),this.element.removeEventListener("touchend",this.onTouchEnd,ls)}};const Yv=n=>Math.min(1,1.001-2**(-10*n));var HC=class{constructor({wrapper:n=window,content:e=document.documentElement,eventsTarget:t=n,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:u=.1,infinite:c=!1,orientation:h="vertical",gestureOrientation:f=h==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:d,overscroll:v=!0,autoRaf:x=!1,anchors:S=!1,autoToggle:C=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:M=!1,naiveDimensions:R=M,stopInertiaOnNavigate:N=!1}={}){Be(this,"_isScrolling",!1);Be(this,"_isStopped",!1);Be(this,"_isLocked",!1);Be(this,"_preventNextNativeScrollEvent",!1);Be(this,"_resetVelocityTimeout",null);Be(this,"_rafId",null);Be(this,"isTouching");Be(this,"time",0);Be(this,"userData",{});Be(this,"lastVelocity",0);Be(this,"velocity",0);Be(this,"direction",0);Be(this,"options");Be(this,"targetScroll");Be(this,"animatedScroll");Be(this,"animate",new OC);Be(this,"emitter",new FE);Be(this,"dimensions");Be(this,"virtualScroll");Be(this,"onScrollEnd",n=>{n instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&n.stopPropagation()});Be(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Be(this,"onTransitionEnd",n=>{var e;(e=n.propertyName)!=null&&e.includes("overflow")&&n.target===this.rootElement&&this.checkOverflow()});Be(this,"onClick",n=>{const e=n.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),t=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>t.host===r.host&&t.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${i.hash.split("#")[1]}`;this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>t.host===i.host&&t.pathname!==i.pathname)){this.reset();return}});Be(this,"onPointerDown",n=>{n.button===1&&this.reset()});Be(this,"onVirtualScroll",n=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(n)===!1)return;const{deltaX:e,deltaY:t,event:i}=n;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");this.isTouching=i.type==="touchstart"||i.type==="touchmove";const o=e===0&&t===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||a)return;let l=i.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const u=this.options.prevent,c=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(g=>{var _,m,d,v,x;return g instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(g))||((_=g.hasAttribute)==null?void 0:_.call(g,"data-lenis-prevent"))||c==="vertical"&&((m=g.hasAttribute)==null?void 0:m.call(g,"data-lenis-prevent-vertical"))||c==="horizontal"&&((d=g.hasAttribute)==null?void 0:d.call(g,"data-lenis-prevent-horizontal"))||r&&((v=g.hasAttribute)==null?void 0:v.call(g,"data-lenis-prevent-touch"))||s&&((x=g.hasAttribute)==null?void 0:x.call(g,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(g,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let h=t;this.options.gestureOrientation==="both"?h=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(h=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const f=r&&this.options.syncTouch,p=r&&i.type==="touchend";p&&(h=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+h,{programmatic:!1,...f?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Be(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const n=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-n,this.direction=Math.sign(this.animatedScroll-n),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Be(this,"raf",n=>{const e=n-(this.time||n);this.time=n,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Xv,window.lenis||(window.lenis={}),window.lenis.version=Xv,h==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),(!n||n===document.documentElement)&&(n=window),typeof a=="number"&&typeof l!="function"?l=Yv:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:n,content:e,eventsTarget:t,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:u,infinite:c,gestureOrientation:f,orientation:h,touchMultiplier:p,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:d,overscroll:v,autoRaf:x,anchors:S,autoToggle:C,allowNestedScroll:w,naiveDimensions:R,stopInertiaOnNavigate:N},this.dimensions=new kC(n,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new BC(t,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(n,e){return this.emitter.on(n,e)}off(n,e){return this.emitter.off(n,e)}get overflow(){const n=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[n]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(n){this.isHorizontal?this.options.wrapper.scrollTo({left:n,behavior:"instant"}):this.options.wrapper.scrollTo({top:n,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(n,{offset:e=0,immediate:t=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:o=r?this.options.duration:void 0,easing:a=r?this.options.easing:void 0,onStart:l,onComplete:u,force:c=!1,userData:h}={}){if((this.isStopped||this.isLocked)&&!c)return;let f=n,p=e;if(typeof f=="string"&&["top","left","start","#"].includes(f))f=0;else if(typeof f=="string"&&["bottom","right","end"].includes(f))f=this.limit;else{let g=null;if(typeof f=="string"?(g=document.querySelector(f),g||(f==="#top"?f=0:console.warn("Lenis: Target not found",f))):f instanceof HTMLElement&&(f!=null&&f.nodeType)&&(g=f),g){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?S.left:S.top}const _=g.getBoundingClientRect(),m=getComputedStyle(g),d=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),x=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);f=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(d)?0:d)-(Number.isNaN(x)?0:x)}}if(typeof f=="number"){if(f+=p,f=Math.round(f),this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const g=f-this.animatedScroll;g>this.limit/2?f-=this.limit:g<-this.limit/2&&(f+=this.limit)}}else f=OE(0,f,this.limit);if(f===this.targetScroll){l==null||l(this),u==null||u(this);return}if(this.userData=h??{},t){this.animatedScroll=this.targetScroll=f,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=f),typeof o=="number"&&typeof a!="function"?a=Yv:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,f,{duration:o,easing:a,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),r&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(n,{deltaX:e,deltaY:t}){const i=Date.now();n._lenis||(n._lenis={});const r=n._lenis;let s,o,a,l,u,c,h,f,p,g;if(i-(r.time??0)>2e3){r.time=Date.now();const w=window.getComputedStyle(n);if(r.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),u=["auto"].includes(w.overscrollBehaviorX),c=["auto"].includes(w.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=o,!(s||o))return!1;h=n.scrollWidth,f=n.scrollHeight,p=n.clientWidth,g=n.clientHeight,a=h>p,l=f>g,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=f,r.clientWidth=p,r.clientHeight=g,r.hasOverscrollBehaviorX=u,r.hasOverscrollBehaviorY=c}else a=r.isScrollableX,l=r.isScrollableY,s=r.hasOverflowX,o=r.hasOverflowY,h=r.scrollWidth,f=r.scrollHeight,p=r.clientWidth,g=r.clientHeight,u=r.hasOverscrollBehaviorX,c=r.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,d,v,x,S,C;if(_==="horizontal")m=Math.round(n.scrollLeft),d=h-p,v=e,x=s,S=a,C=u;else if(_==="vertical")m=Math.round(n.scrollTop),d=f-g,v=t,x=o,S=l,C=c;else return!1;return!C&&(m>=d||m<=0)?!0:(v>0?m<d:m>0)&&x&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const n=this.options.wrapper;return this.isHorizontal?n.scrollX??n.scrollLeft:n.scrollY??n.scrollTop}get scroll(){return this.options.infinite?UC(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(n){this._isScrolling!==n&&(this._isScrolling=n,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(n){this._isStopped!==n&&(this._isStopped=n,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(n){this._isLocked!==n&&(this._isLocked=n,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let n="lenis";return this.options.autoToggle&&(n+=" lenis-autoToggle"),this.isStopped&&(n+=" lenis-stopped"),this.isLocked&&(n+=" lenis-locked"),this.isScrolling&&(n+=" lenis-scrolling"),this.isScrolling==="smooth"&&(n+=" lenis-smooth"),n}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const F_="169",VC=0,qv=1,GC=2,kE=1,WC=2,kr=3,Ys=0,ci=1,Tr=2,zs=0,Va=1,$v=2,Kv=3,Zv=4,XC=5,mo=100,jC=101,YC=102,qC=103,$C=104,KC=200,ZC=201,QC=202,JC=203,Pm=204,Lm=205,eR=206,tR=207,nR=208,iR=209,rR=210,sR=211,oR=212,aR=213,lR=214,Dm=0,Nm=1,Im=2,sl=3,Um=4,Om=5,Fm=6,km=7,zE=0,uR=1,cR=2,Bs=0,fR=1,hR=2,dR=3,pR=4,mR=5,gR=6,_R=7,BE=300,ol=301,al=302,zm=303,Bm=304,Bh=306,Hm=1e3,Mo=1001,Vm=1002,qi=1003,vR=1004,Oc=1005,lr=1006,Id=1007,Eo=1008,is=1009,HE=1010,VE=1011,qu=1012,k_=1013,Ho=1014,Yr=1015,nc=1016,z_=1017,B_=1018,ll=1020,GE=35902,WE=1021,XE=1022,cr=1023,jE=1024,YE=1025,Ga=1026,ul=1027,qE=1028,H_=1029,$E=1030,V_=1031,G_=1033,Cf=33776,Rf=33777,bf=33778,Pf=33779,Gm=35840,Wm=35841,Xm=35842,jm=35843,Ym=36196,qm=37492,$m=37496,Km=37808,Zm=37809,Qm=37810,Jm=37811,eg=37812,tg=37813,ng=37814,ig=37815,rg=37816,sg=37817,og=37818,ag=37819,lg=37820,ug=37821,Lf=36492,cg=36494,fg=36495,KE=36283,hg=36284,dg=36285,pg=36286,xR=3200,yR=3201,ZE=0,SR=1,ys="",yr="srgb",Qs="srgb-linear",W_="display-p3",Hh="display-p3-linear",mh="linear",Ot="srgb",gh="rec709",_h="p3",Zo=7680,Qv=519,MR=512,ER=513,wR=514,QE=515,TR=516,AR=517,CR=518,RR=519,Jv=35044,ex="300 es",qr=2e3,vh=2001;class pl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tx=1234567;const xu=Math.PI/180,$u=180/Math.PI;function ml(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function Yn(n,e,t){return Math.max(e,Math.min(t,n))}function X_(n,e){return(n%e+e)%e}function bR(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function PR(n,e,t){return n!==e?(t-n)/(e-n):0}function yu(n,e,t){return(1-t)*n+t*e}function LR(n,e,t,i){return yu(n,e,1-Math.exp(-t*i))}function DR(n,e=1){return e-Math.abs(X_(n,e*2)-e)}function NR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function IR(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function UR(n,e){return n+Math.floor(Math.random()*(e-n+1))}function OR(n,e){return n+Math.random()*(e-n)}function FR(n){return n*(.5-Math.random())}function kR(n){n!==void 0&&(tx=n);let e=tx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zR(n){return n*xu}function BR(n){return n*$u}function HR(n){return(n&n-1)===0&&n!==0}function VR(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function GR(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function WR(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*h,l*f,a*u);break;case"YZY":n.set(l*f,a*c,l*h,a*u);break;case"ZXZ":n.set(l*h,l*f,a*c,a*u);break;case"XZX":n.set(a*c,l*g,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*g,a*u);break;case"ZYZ":n.set(l*g,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function da(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Hn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ud={DEG2RAD:xu,RAD2DEG:$u,generateUUID:ml,clamp:Yn,euclideanModulo:X_,mapLinear:bR,inverseLerp:PR,lerp:yu,damp:LR,pingpong:DR,smoothstep:NR,smootherstep:IR,randInt:UR,randFloat:OR,randFloatSpread:FR,seededRandom:kR,degToRad:zR,radToDeg:BR,isPowerOfTwo:HR,ceilPowerOfTwo:VR,floorPowerOfTwo:GR,setQuaternionFromProperEuler:WR,normalize:Hn,denormalize:da};class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,t,i,r,s,o,a,l,u){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],v=r[1],x=r[4],S=r[7],C=r[2],w=r[5],M=r[8];return s[0]=o*_+a*v+l*C,s[3]=o*m+a*x+l*w,s[6]=o*d+a*S+l*M,s[1]=u*_+c*v+h*C,s[4]=u*m+c*x+h*w,s[7]=u*d+c*S+h*M,s[2]=f*_+p*v+g*C,s[5]=f*m+p*x+g*w,s[8]=f*d+p*S+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,g=t*h+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Od.makeScale(e,t)),this}rotate(e){return this.premultiply(Od.makeRotation(-e)),this}translate(e,t){return this.premultiply(Od.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Od=new at;function JE(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xh(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function XR(){const n=xh("canvas");return n.style.display="block",n}const nx={};function Df(n){n in nx||(nx[n]=!0,console.warn(n))}function jR(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function YR(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function qR(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ix=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rx=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pl={[Qs]:{transfer:mh,primaries:gh,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[yr]:{transfer:Ot,primaries:gh,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Hh]:{transfer:mh,primaries:_h,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(rx),fromReference:n=>n.applyMatrix3(ix)},[W_]:{transfer:Ot,primaries:_h,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(rx),fromReference:n=>n.applyMatrix3(ix).convertLinearToSRGB()}},$R=new Set([Qs,Hh]),Et={enabled:!0,_workingColorSpace:Qs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!$R.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Pl[e].toReference,r=Pl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Pl[n].primaries},getTransfer:function(n){return n===ys?mh:Pl[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Pl[e].luminanceCoefficients)}};function Wa(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Fd(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Qo;class KR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qo===void 0&&(Qo=xh("canvas")),Qo.width=e.width,Qo.height=e.height;const i=Qo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xh("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wa(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wa(t[i]/255)*255):t[i]=Wa(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZR=0;class e1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZR++}),this.uuid=ml(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(kd(r[o].image)):s.push(kd(r[o]))}else s=kd(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function kd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?KR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let QR=0;class fi extends pl{constructor(e=fi.DEFAULT_IMAGE,t=fi.DEFAULT_MAPPING,i=Mo,r=Mo,s=lr,o=Eo,a=cr,l=is,u=fi.DEFAULT_ANISOTROPY,c=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QR++}),this.uuid=ml(),this.name="",this.source=new e1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==BE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hm:e.x=e.x-Math.floor(e.x);break;case Mo:e.x=e.x<0?0:1;break;case Vm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hm:e.y=e.y-Math.floor(e.y);break;case Mo:e.y=e.y<0?0:1;break;case Vm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fi.DEFAULT_IMAGE=null;fi.DEFAULT_MAPPING=BE;fi.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,S=(p+1)/2,C=(d+1)/2,w=(c+f)/4,M=(h+_)/4,R=(g+m)/4;return x>S&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=M/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=R/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=M/s,r=R/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JR extends pl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:lr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new fi(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new e1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vo extends JR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class t1 extends fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qi,this.minFilter=qi,this.wrapR=Mo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eb extends fi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=qi,this.minFilter=qi,this.wrapR=Mo,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||u!==p||c!==g){let m=1-a;const d=l*f+u*p+c*g+h*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,d*v);m=Math.sin(m*w)/C,a=Math.sin(a*w)/C}const S=a*v;if(l=l*m+f*S,u=u*m+p*S,c=c*m+g*S,h=h*m+_*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=C,u*=C,c*=C,h*=C}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+c*h+l*p-u*f,e[t+1]=l*g+c*f+u*h-a*p,e[t+2]=u*g+c*p+a*f-l*h,e[t+3]=c*g-a*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"YXZ":this._x=f*c*h+u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"ZXY":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h-f*p*g;break;case"ZYX":this._x=f*c*h-u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h+f*p*g;break;case"YZX":this._x=f*c*h+u*p*g,this._y=u*p*h+f*c*g,this._z=u*c*g-f*p*h,this._w=u*c*h-f*p*g;break;case"XZY":this._x=f*c*h-u*p*g,this._y=u*p*h-f*c*g,this._z=u*c*g+f*p*h,this._w=u*c*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,i=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zd.copy(this).projectOnVector(e),this.sub(zd)}reflect(e){return this.sub(zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zd=new X,sx=new ic;class rc{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(tr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(tr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=tr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,tr):tr.fromBufferAttribute(s,o),tr.applyMatrix4(e.matrixWorld),this.expandByPoint(tr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fc.copy(i.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,tr),tr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ll),kc.subVectors(this.max,Ll),Jo.subVectors(e.a,Ll),ea.subVectors(e.b,Ll),ta.subVectors(e.c,Ll),us.subVectors(ea,Jo),cs.subVectors(ta,ea),to.subVectors(Jo,ta);let t=[0,-us.z,us.y,0,-cs.z,cs.y,0,-to.z,to.y,us.z,0,-us.x,cs.z,0,-cs.x,to.z,0,-to.x,-us.y,us.x,0,-cs.y,cs.x,0,-to.y,to.x,0];return!Bd(t,Jo,ea,ta,kc)||(t=[1,0,0,0,1,0,0,0,1],!Bd(t,Jo,ea,ta,kc))?!1:(zc.crossVectors(us,cs),t=[zc.x,zc.y,zc.z],Bd(t,Jo,ea,ta,kc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,tr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(tr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nr=[new X,new X,new X,new X,new X,new X,new X,new X],tr=new X,Fc=new rc,Jo=new X,ea=new X,ta=new X,us=new X,cs=new X,to=new X,Ll=new X,kc=new X,zc=new X,no=new X;function Bd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){no.fromArray(n,s);const a=r.x*Math.abs(no.x)+r.y*Math.abs(no.y)+r.z*Math.abs(no.z),l=e.dot(no),u=t.dot(no),c=i.dot(no);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const tb=new rc,Dl=new X,Hd=new X;class Vh{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tb.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dl.subVectors(e,this.center);const t=Dl.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Dl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dl.copy(e.center).add(Hd)),this.expandByPoint(Dl.copy(e.center).sub(Hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ir=new X,Vd=new X,Bc=new X,fs=new X,Gd=new X,Hc=new X,Wd=new X;class n1{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ir)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ir.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ir.copy(this.origin).addScaledVector(this.direction,t),Ir.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Vd.copy(e).add(t).multiplyScalar(.5),Bc.copy(t).sub(e).normalize(),fs.copy(this.origin).sub(Vd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Bc),a=fs.dot(this.direction),l=-fs.dot(Bc),u=fs.lengthSq(),c=Math.abs(1-o*o);let h,f,p,g;if(c>0)if(h=o*l-a,f=o*a-l,g=s*c,h>=0)if(f>=-g)if(f<=g){const _=1/c;h*=_,f*=_,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vd).addScaledVector(Bc,f),p}intersectSphere(e,t){Ir.subVectors(e.center,this.origin);const i=Ir.dot(this.direction),r=Ir.dot(Ir)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ir)!==null}intersectTriangle(e,t,i,r,s){Gd.subVectors(t,e),Hc.subVectors(i,e),Wd.crossVectors(Gd,Hc);let o=this.direction.dot(Wd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fs.subVectors(this.origin,e);const l=a*this.direction.dot(Hc.crossVectors(fs,Hc));if(l<0)return null;const u=a*this.direction.dot(Gd.cross(fs));if(u<0||l+u>o)return null;const c=-a*fs.dot(Wd);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,i,r,s,o,a,l,u,c,h,f,p,g,_,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,h,f,p,g,_,m)}set(e,t,i,r,s,o,a,l,u,c,h,f,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/na.setFromMatrixColumn(e,0).length(),s=1/na.setFromMatrixColumn(e,1).length(),o=1/na.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+g*u,t[5]=f-_*u,t[9]=-a*l,t[2]=_-f*u,t[6]=g+p*u,t[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f+_*a,t[4]=g*a-p,t[8]=o*u,t[1]=o*h,t[5]=o*c,t[9]=-a,t[2]=p*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,g=u*c,_=u*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*c,t[9]=_-f*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*h,g=a*c,_=a*h;t[0]=l*c,t[4]=g*u-p,t[8]=f*u+_,t[1]=l*h,t[5]=_*u+f,t[9]=p*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=_-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,p=o*u,g=a*l,_=a*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+_,t[5]=o*c,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*c,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nb,e,ib)}lookAt(e,t,i){const r=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),hs.crossVectors(i,mi),hs.lengthSq()===0&&(Math.abs(i.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),hs.crossVectors(i,mi)),hs.normalize(),Vc.crossVectors(mi,hs),r[0]=hs.x,r[4]=Vc.x,r[8]=mi.x,r[1]=hs.y,r[5]=Vc.y,r[9]=mi.y,r[2]=hs.z,r[6]=Vc.z,r[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],v=i[3],x=i[7],S=i[11],C=i[15],w=r[0],M=r[4],R=r[8],N=r[12],y=r[1],T=r[5],I=r[9],z=r[13],Y=r[2],$=r[6],B=r[10],j=r[14],D=r[3],K=r[7],b=r[11],ie=r[15];return s[0]=o*w+a*y+l*Y+u*D,s[4]=o*M+a*T+l*$+u*K,s[8]=o*R+a*I+l*B+u*b,s[12]=o*N+a*z+l*j+u*ie,s[1]=c*w+h*y+f*Y+p*D,s[5]=c*M+h*T+f*$+p*K,s[9]=c*R+h*I+f*B+p*b,s[13]=c*N+h*z+f*j+p*ie,s[2]=g*w+_*y+m*Y+d*D,s[6]=g*M+_*T+m*$+d*K,s[10]=g*R+_*I+m*B+d*b,s[14]=g*N+_*z+m*j+d*ie,s[3]=v*w+x*y+S*Y+C*D,s[7]=v*M+x*T+S*$+C*K,s[11]=v*R+x*I+S*B+C*b,s[15]=v*N+x*z+S*j+C*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+_*(+t*l*p-t*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+t*u*h-t*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*h+t*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],v=h*m*u-_*f*u+_*l*p-a*m*p-h*l*d+a*f*d,x=g*f*u-c*m*u-g*l*p+o*m*p+c*l*d-o*f*d,S=c*_*u-g*h*u+g*a*p-o*_*p-c*a*d+o*h*d,C=g*h*l-c*_*l-g*a*f+o*_*f+c*a*m-o*h*m,w=t*v+i*x+r*S+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(_*f*s-h*m*s-_*r*p+i*m*p+h*r*d-i*f*d)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*M,e[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*M,e[4]=x*M,e[5]=(c*m*s-g*f*s+g*r*p-t*m*p-c*r*d+t*f*d)*M,e[6]=(g*l*s-o*m*s-g*r*u+t*m*u+o*r*d-t*l*d)*M,e[7]=(o*f*s-c*l*s+c*r*u-t*f*u-o*r*p+t*l*p)*M,e[8]=S*M,e[9]=(g*h*s-c*_*s-g*i*p+t*_*p+c*i*d-t*h*d)*M,e[10]=(o*_*s-g*a*s+g*i*u-t*_*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*h*s-c*i*u+t*h*u+o*i*p-t*a*p)*M,e[12]=C*M,e[13]=(c*_*r-g*h*r+g*i*f-t*_*f-c*i*m+t*h*m)*M,e[14]=(g*a*r-o*_*r-g*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*h*r-c*a*r+c*i*l-t*h*l-o*i*f+t*a*f)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,g=s*h,_=o*c,m=o*h,d=a*h,v=l*u,x=l*c,S=l*h,C=i.x,w=i.y,M=i.z;return r[0]=(1-(_+d))*C,r[1]=(p+S)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(p-S)*w,r[5]=(1-(f+d))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+x)*M,r[9]=(m-v)*M,r[10]=(1-(f+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=na.set(r[0],r[1],r[2]).length();const o=na.set(r[4],r[5],r[6]).length(),a=na.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],nr.copy(this);const u=1/s,c=1/o,h=1/a;return nr.elements[0]*=u,nr.elements[1]*=u,nr.elements[2]*=u,nr.elements[4]*=c,nr.elements[5]*=c,nr.elements[6]*=c,nr.elements[8]*=h,nr.elements[9]*=h,nr.elements[10]*=h,t.setFromRotationMatrix(nr),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=qr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,g;if(a===qr)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===vh)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=qr){const l=this.elements,u=1/(t-e),c=1/(i-r),h=1/(o-s),f=(t+e)*u,p=(i+r)*c;let g,_;if(a===qr)g=(o+s)*h,_=-2*h;else if(a===vh)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const na=new X,nr=new Ht,nb=new X(0,0,0),ib=new X(1,1,1),hs=new X,Vc=new X,mi=new X,ox=new Ht,ax=new ic;class Dr{constructor(e=0,t=0,i=0,r=Dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Yn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Yn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Yn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ox.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ox,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ax.setFromEuler(this),this.setFromQuaternion(ax,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dr.DEFAULT_ORDER="XYZ";class i1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rb=0;const lx=new X,ia=new ic,Ur=new Ht,Gc=new X,Nl=new X,sb=new X,ob=new ic,ux=new X(1,0,0),cx=new X(0,1,0),fx=new X(0,0,1),hx={type:"added"},ab={type:"removed"},ra={type:"childadded",child:null},Xd={type:"childremoved",child:null};class Zn extends pl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zn.DEFAULT_UP.clone();const e=new X,t=new Dr,i=new ic,r=new X(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ht},normalMatrix:{value:new at}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new i1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(ux,e)}rotateY(e){return this.rotateOnAxis(cx,e)}rotateZ(e){return this.rotateOnAxis(fx,e)}translateOnAxis(e,t){return lx.copy(e).applyQuaternion(this.quaternion),this.position.add(lx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ux,e)}translateY(e){return this.translateOnAxis(cx,e)}translateZ(e){return this.translateOnAxis(fx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ur.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Gc.copy(e):Gc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ur.lookAt(Nl,Gc,this.up):Ur.lookAt(Gc,Nl,this.up),this.quaternion.setFromRotationMatrix(Ur),r&&(Ur.extractRotation(r.matrixWorld),ia.setFromRotationMatrix(Ur),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hx),ra.child=e,this.dispatchEvent(ra),ra.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ab),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ur.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ur.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ur),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hx),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,e,sb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Nl,ob,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zn.DEFAULT_UP=new X(0,1,0);Zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ir=new X,Or=new X,jd=new X,Fr=new X,sa=new X,oa=new X,dx=new X,Yd=new X,qd=new X,$d=new X,Kd=new Ct,Zd=new Ct,Qd=new Ct;class ur{constructor(e=new X,t=new X,i=new X){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ir.subVectors(e,t),r.cross(ir);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ir.subVectors(r,t),Or.subVectors(i,t),jd.subVectors(e,t);const o=ir.dot(ir),a=ir.dot(Or),l=ir.dot(jd),u=Or.dot(Or),c=Or.dot(jd),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,g=(o*c-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fr)===null?!1:Fr.x>=0&&Fr.y>=0&&Fr.x+Fr.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fr.x),l.addScaledVector(o,Fr.y),l.addScaledVector(a,Fr.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Kd.setScalar(0),Zd.setScalar(0),Qd.setScalar(0),Kd.fromBufferAttribute(e,t),Zd.fromBufferAttribute(e,i),Qd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Kd,s.x),o.addScaledVector(Zd,s.y),o.addScaledVector(Qd,s.z),o}static isFrontFacing(e,t,i,r){return ir.subVectors(i,t),Or.subVectors(e,t),ir.cross(Or).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ir.subVectors(this.c,this.b),Or.subVectors(this.a,this.b),ir.cross(Or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ur.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ur.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return ur.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ur.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ur.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;sa.subVectors(r,i),oa.subVectors(s,i),Yd.subVectors(e,i);const l=sa.dot(Yd),u=oa.dot(Yd);if(l<=0&&u<=0)return t.copy(i);qd.subVectors(e,r);const c=sa.dot(qd),h=oa.dot(qd);if(c>=0&&h<=c)return t.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(sa,o);$d.subVectors(e,s);const p=sa.dot($d),g=oa.dot($d);if(g>=0&&p<=g)return t.copy(s);const _=p*u-l*g;if(_<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(oa,a);const m=c*g-p*h;if(m<=0&&h-c>=0&&p-g>=0)return dx.subVectors(s,r),a=(h-c)/(h-c+(p-g)),t.copy(r).addScaledVector(dx,a);const d=1/(m+_+f);return o=_*d,a=f*d,t.copy(i).addScaledVector(sa,o).addScaledVector(oa,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const r1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Wc={h:0,s:0,l:0};function Jd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Et.workingColorSpace){if(e=X_(e,1),t=Yn(t,0,1),i=Yn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Jd(o,s,e+1/3),this.g=Jd(o,s,e),this.b=Jd(o,s,e-1/3)}return Et.toWorkingColorSpace(this,r),this}setStyle(e,t=yr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yr){const i=r1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}copyLinearToSRGB(e){return this.r=Fd(e.r),this.g=Fd(e.g),this.b=Fd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yr){return Et.fromWorkingColorSpace(Ln.copy(this),e),Math.round(Yn(Ln.r*255,0,255))*65536+Math.round(Yn(Ln.g*255,0,255))*256+Math.round(Yn(Ln.b*255,0,255))}getHexString(e=yr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.fromWorkingColorSpace(Ln.copy(this),t);const i=Ln.r,r=Ln.g,s=Ln.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Et.workingColorSpace){return Et.fromWorkingColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=yr){Et.fromWorkingColorSpace(Ln.copy(this),e);const t=Ln.r,i=Ln.g,r=Ln.b;return e!==yr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(Wc);const i=yu(ds.h,Wc.h,t),r=yu(ds.s,Wc.s,t),s=yu(ds.l,Wc.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new et;et.NAMES=r1;let lb=0;class gl extends pl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=Va,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pm,this.blendDst=Lm,this.blendEquation=mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=sl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zo,this.stencilZFail=Zo,this.stencilZPass=Zo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Va&&(i.blending=this.blending),this.side!==Ys&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pm&&(i.blendSrc=this.blendSrc),this.blendDst!==Lm&&(i.blendDst=this.blendDst),this.blendEquation!==mo&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class j_ extends gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.combine=zE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sn=new X,Xc=new yt;class dr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jv,this.updateRanges=[],this.gpuType=Yr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Xc.fromBufferAttribute(this,t),Xc.applyMatrix3(e),this.setXY(t,Xc.x,Xc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix3(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=da(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=da(t,this.array)),t}setX(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=da(t,this.array)),t}setY(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=da(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=da(t,this.array)),t}setW(e,t){return this.normalized&&(t=Hn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),r=Hn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Hn(t,this.array),i=Hn(i,this.array),r=Hn(r,this.array),s=Hn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jv&&(e.usage=this.usage),e}}class s1 extends dr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class o1 extends dr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Di extends dr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ub=0;const zi=new Ht,ep=new Zn,aa=new X,gi=new rc,Il=new rc,gn=new X;class mr extends pl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(JE(e)?o1:s1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new at().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,i){return zi.makeTranslation(e,t,i),this.applyMatrix4(zi),this}scale(e,t,i){return zi.makeScale(e,t,i),this.applyMatrix4(zi),this}lookAt(e){return ep.lookAt(e),ep.updateMatrix(),this.applyMatrix4(ep.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Il.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(gi.min,Il.min),gi.expandByPoint(gn),gn.addVectors(gi.max,Il.max),gi.expandByPoint(gn)):(gi.expandByPoint(Il.min),gi.expandByPoint(Il.max))}gi.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)gn.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(gn));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)gn.fromBufferAttribute(a,u),l&&(aa.fromBufferAttribute(e,u),gn.add(aa)),r=Math.max(r,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new X,l[R]=new X;const u=new X,c=new X,h=new X,f=new yt,p=new yt,g=new yt,_=new X,m=new X;function d(R,N,y){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,N),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,N),g.fromBufferAttribute(s,y),c.sub(u),h.sub(u),p.sub(f),g.sub(f);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(T),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(T),a[R].add(_),a[N].add(_),a[y].add(_),l[R].add(m),l[N].add(m),l[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,N=v.length;R<N;++R){const y=v[R],T=y.start,I=y.count;for(let z=T,Y=T+I;z<Y;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new X,S=new X,C=new X,w=new X;function M(R){C.fromBufferAttribute(r,R),w.copy(C);const N=a[R];x.copy(N),x.sub(C.multiplyScalar(C.dot(N))).normalize(),S.crossVectors(w,N);const T=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,N=v.length;R<N;++R){const y=v[R],T=y.start,I=y.count;for(let z=T,Y=T+I;z<Y;z+=3)M(e.getX(z+0)),M(e.getX(z+1)),M(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new X,s=new X,o=new X,a=new X,l=new X,u=new X,c=new X,h=new X;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)f[g++]=u[p++]}return new dr(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const px=new Ht,io=new n1,jc=new Vh,mx=new X,Yc=new X,qc=new X,$c=new X,tp=new X,Kc=new X,gx=new X,Zc=new X;class bi extends Zn{constructor(e=new mr,t=new j_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Kc.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(tp.fromBufferAttribute(h,e),o?Kc.addScaledVector(tp,c):Kc.addScaledVector(tp.sub(t),c))}t.add(Kc)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jc.copy(i.boundingSphere),jc.applyMatrix4(s),io.copy(e.ray).recast(e.near),!(jc.containsPoint(io.origin)===!1&&(io.intersectSphere(jc,mx)===null||io.origin.distanceToSquared(mx)>(e.far-e.near)**2))&&(px.copy(s).invert(),io.copy(e.ray).applyMatrix4(px),!(i.boundingBox!==null&&io.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,io)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const w=a.getX(S),M=a.getX(S+1),R=a.getX(S+2);r=Qc(this,d,e,i,u,c,h,w,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Qc(this,o,e,i,u,c,h,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,C=x;S<C;S+=3){const w=S,M=S+1,R=S+2;r=Qc(this,d,e,i,u,c,h,w,M,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const v=m,x=m+1,S=m+2;r=Qc(this,o,e,i,u,c,h,v,x,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function cb(n,e,t,i,r,s,o,a){let l;if(e.side===ci?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ys,a),l===null)return null;Zc.copy(a),Zc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Zc);return u<t.near||u>t.far?null:{distance:u,point:Zc.clone(),object:n}}function Qc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,Yc),n.getVertexPosition(l,qc),n.getVertexPosition(u,$c);const c=cb(n,e,t,i,Yc,qc,$c,gx);if(c){const h=new X;ur.getBarycoord(gx,Yc,qc,$c,h),r&&(c.uv=ur.getInterpolatedAttribute(r,a,l,u,h,new yt)),s&&(c.uv1=ur.getInterpolatedAttribute(s,a,l,u,h,new yt)),o&&(c.normal=ur.getInterpolatedAttribute(o,a,l,u,h,new X),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new X,materialIndex:0};ur.getNormal(Yc,qc,$c,f.normal),c.face=f,c.barycoord=h}return c}class _l extends mr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Di(u,3)),this.setAttribute("normal",new Di(c,3)),this.setAttribute("uv",new Di(h,2));function g(_,m,d,v,x,S,C,w,M,R,N){const y=S/M,T=C/R,I=S/2,z=C/2,Y=w/2,$=M+1,B=R+1;let j=0,D=0;const K=new X;for(let b=0;b<B;b++){const ie=b*T-z;for(let Te=0;Te<$;Te++){const Ke=Te*y-I;K[_]=Ke*v,K[m]=ie*x,K[d]=Y,u.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[d]=w>0?1:-1,c.push(K.x,K.y,K.z),h.push(Te/M),h.push(1-b/R),j+=1}}for(let b=0;b<R;b++)for(let ie=0;ie<M;ie++){const Te=f+ie+$*b,Ke=f+ie+$*(b+1),q=f+(ie+1)+$*(b+1),re=f+(ie+1)+$*b;l.push(Te,Ke,re),l.push(Ke,q,re),D+=6}a.addGroup(p,D,N),p+=D,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vn(n){const e={};for(let t=0;t<n.length;t++){const i=cl(n[t]);for(const r in i)e[r]=i[r]}return e}function fb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function a1(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const hb={clone:cl,merge:Vn};var db=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=db,this.fragmentShader=pb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cl(e.uniforms),this.uniformsGroups=fb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class l1 extends Zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=qr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new X,_x=new yt,vx=new yt;class Ei extends l1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$u*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $u*2*Math.atan(Math.tan(xu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ps.x,ps.y).multiplyScalar(-e/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-e/ps.z)}getViewSize(e,t){return this.getViewBounds(e,_x,vx),t.subVectors(vx,_x)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(xu*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const la=-90,ua=1;class mb extends Zn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ei(la,ua,e,t);r.layers=this.layers,this.add(r);const s=new Ei(la,ua,e,t);s.layers=this.layers,this.add(s);const o=new Ei(la,ua,e,t);o.layers=this.layers,this.add(o);const a=new Ei(la,ua,e,t);a.layers=this.layers,this.add(a);const l=new Ei(la,ua,e,t);l.layers=this.layers,this.add(l);const u=new Ei(la,ua,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===qr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vh)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class u1 extends fi{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:ol,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gb extends Vo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new u1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:lr}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _l(5,5,5),s=new rs({name:"CubemapFromEquirect",uniforms:cl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ci,blending:zs});s.uniforms.tEquirect.value=t;const o=new bi(r,s),a=t.minFilter;return t.minFilter===Eo&&(t.minFilter=lr),new mb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const np=new X,_b=new X,vb=new at;class ho{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=np.subVectors(i,t).cross(_b.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(np),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vb.getNormalMatrix(e),r=this.coplanarPoint(np).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ro=new Vh,Jc=new X;class Y_{constructor(e=new ho,t=new ho,i=new ho,r=new ho,s=new ho,o=new ho){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],g=r[9],_=r[10],m=r[11],d=r[12],v=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-u,m-p,S-d).normalize(),i[1].setComponents(l+s,f+u,m+p,S+d).normalize(),i[2].setComponents(l+o,f+c,m+g,S+v).normalize(),i[3].setComponents(l-o,f-c,m-g,S-v).normalize(),i[4].setComponents(l-a,f-h,m-_,S-x).normalize(),t===qr)i[5].setComponents(l+a,f+h,m+_,S+x).normalize();else if(t===vh)i[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ro.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ro.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ro)}intersectsSprite(e){return ro.center.set(0,0,0),ro.radius=.7071067811865476,ro.applyMatrix4(e.matrixWorld),this.intersectsSphere(ro)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Jc.x=r.normal.x>0?e.max.x:e.min.x,Jc.y=r.normal.y>0?e.max.y:e.min.y,Jc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function c1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xb(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,c);else{h.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<h.length;p++){const g=h[f],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class sc extends mr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,f=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<c;d++){const v=d*f-o;for(let x=0;x<u;x++){const S=x*h-s;g.push(S,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const x=v+u*d,S=v+u*(d+1),C=v+1+u*(d+1),w=v+1+u*d;p.push(x,S,w),p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new Di(g,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sc(e.width,e.height,e.widthSegments,e.heightSegments)}}var yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ab=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Db=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ib=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Gb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$b=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,eP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_P=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,MP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wP=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,UP=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,OP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kP=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VP=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,GP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,WP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,$P=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,n2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,a2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,p2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,g2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,v2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,A2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,C2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,b2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,I2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U2=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O2=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F2=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k2=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z2=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,B2=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,H2=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V2=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,G2=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,W2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,q2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Q2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:yb,alphahash_pars_fragment:Sb,alphamap_fragment:Mb,alphamap_pars_fragment:Eb,alphatest_fragment:wb,alphatest_pars_fragment:Tb,aomap_fragment:Ab,aomap_pars_fragment:Cb,batching_pars_vertex:Rb,batching_vertex:bb,begin_vertex:Pb,beginnormal_vertex:Lb,bsdfs:Db,iridescence_fragment:Nb,bumpmap_pars_fragment:Ib,clipping_planes_fragment:Ub,clipping_planes_pars_fragment:Ob,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:kb,color_fragment:zb,color_pars_fragment:Bb,color_pars_vertex:Hb,color_vertex:Vb,common:Gb,cube_uv_reflection_fragment:Wb,defaultnormal_vertex:Xb,displacementmap_pars_vertex:jb,displacementmap_vertex:Yb,emissivemap_fragment:qb,emissivemap_pars_fragment:$b,colorspace_fragment:Kb,colorspace_pars_fragment:Zb,envmap_fragment:Qb,envmap_common_pars_fragment:Jb,envmap_pars_fragment:eP,envmap_pars_vertex:tP,envmap_physical_pars_fragment:hP,envmap_vertex:nP,fog_vertex:iP,fog_pars_vertex:rP,fog_fragment:sP,fog_pars_fragment:oP,gradientmap_pars_fragment:aP,lightmap_pars_fragment:lP,lights_lambert_fragment:uP,lights_lambert_pars_fragment:cP,lights_pars_begin:fP,lights_toon_fragment:dP,lights_toon_pars_fragment:pP,lights_phong_fragment:mP,lights_phong_pars_fragment:gP,lights_physical_fragment:_P,lights_physical_pars_fragment:vP,lights_fragment_begin:xP,lights_fragment_maps:yP,lights_fragment_end:SP,logdepthbuf_fragment:MP,logdepthbuf_pars_fragment:EP,logdepthbuf_pars_vertex:wP,logdepthbuf_vertex:TP,map_fragment:AP,map_pars_fragment:CP,map_particle_fragment:RP,map_particle_pars_fragment:bP,metalnessmap_fragment:PP,metalnessmap_pars_fragment:LP,morphinstance_vertex:DP,morphcolor_vertex:NP,morphnormal_vertex:IP,morphtarget_pars_vertex:UP,morphtarget_vertex:OP,normal_fragment_begin:FP,normal_fragment_maps:kP,normal_pars_fragment:zP,normal_pars_vertex:BP,normal_vertex:HP,normalmap_pars_fragment:VP,clearcoat_normal_fragment_begin:GP,clearcoat_normal_fragment_maps:WP,clearcoat_pars_fragment:XP,iridescence_pars_fragment:jP,opaque_fragment:YP,packing:qP,premultiplied_alpha_fragment:$P,project_vertex:KP,dithering_fragment:ZP,dithering_pars_fragment:QP,roughnessmap_fragment:JP,roughnessmap_pars_fragment:e2,shadowmap_pars_fragment:t2,shadowmap_pars_vertex:n2,shadowmap_vertex:i2,shadowmask_pars_fragment:r2,skinbase_vertex:s2,skinning_pars_vertex:o2,skinning_vertex:a2,skinnormal_vertex:l2,specularmap_fragment:u2,specularmap_pars_fragment:c2,tonemapping_fragment:f2,tonemapping_pars_fragment:h2,transmission_fragment:d2,transmission_pars_fragment:p2,uv_pars_fragment:m2,uv_pars_vertex:g2,uv_vertex:_2,worldpos_vertex:v2,background_vert:x2,background_frag:y2,backgroundCube_vert:S2,backgroundCube_frag:M2,cube_vert:E2,cube_frag:w2,depth_vert:T2,depth_frag:A2,distanceRGBA_vert:C2,distanceRGBA_frag:R2,equirect_vert:b2,equirect_frag:P2,linedashed_vert:L2,linedashed_frag:D2,meshbasic_vert:N2,meshbasic_frag:I2,meshlambert_vert:U2,meshlambert_frag:O2,meshmatcap_vert:F2,meshmatcap_frag:k2,meshnormal_vert:z2,meshnormal_frag:B2,meshphong_vert:H2,meshphong_frag:V2,meshphysical_vert:G2,meshphysical_frag:W2,meshtoon_vert:X2,meshtoon_frag:j2,points_vert:Y2,points_frag:q2,shadow_vert:$2,shadow_frag:K2,sprite_vert:Z2,sprite_frag:Q2},ye={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Sr={basic:{uniforms:Vn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:Vn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:Vn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:Vn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:Vn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new et(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:Vn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:Vn([ye.points,ye.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:Vn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:Vn([ye.common,ye.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:Vn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:Vn([ye.sprite,ye.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:Vn([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:Vn([ye.lights,ye.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Sr.physical={uniforms:Vn([Sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const ef={r:0,b:0,g:0},so=new Dr,J2=new Ht;function eL(n,e,t,i,r,s,o){const a=new et(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const S=g(v);S===null?d(a,l):S&&S.isColor&&(d(S,1),x=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Bh)?(c===void 0&&(c=new bi(new _l(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:cl(Sr.backgroundCube.uniforms),vertexShader:Sr.backgroundCube.vertexShader,fragmentShader:Sr.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),so.copy(x.backgroundRotation),so.x*=-1,so.y*=-1,so.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(so.y*=-1,so.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(J2.makeRotationFromEuler(so)),c.material.toneMapped=Et.getTransfer(S.colorSpace)!==Ot,(h!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new bi(new sc(2,2),new rs({name:"BackgroundMaterial",uniforms:cl(Sr.background.uniforms),vertexShader:Sr.background.vertexShader,fragmentShader:Sr.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=Et.getTransfer(S.colorSpace)!==Ot,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,x){v.getRGB(ef,a1(n)),i.buffers.color.setClear(ef.r,ef.g,ef.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:m}}function tL(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,T,I,z,Y){let $=!1;const B=h(z,I,T);s!==B&&(s=B,u(s.object)),$=p(y,z,I,Y),$&&g(y,z,I,Y),Y!==null&&e.update(Y,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(y,T,I,z),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return n.createVertexArray()}function u(y){return n.bindVertexArray(y)}function c(y){return n.deleteVertexArray(y)}function h(y,T,I){const z=I.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let $=Y[T.id];$===void 0&&($={},Y[T.id]=$);let B=$[z];return B===void 0&&(B=f(l()),$[z]=B),B}function f(y){const T=[],I=[],z=[];for(let Y=0;Y<t;Y++)T[Y]=0,I[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,T,I,z){const Y=s.attributes,$=T.attributes;let B=0;const j=I.getAttributes();for(const D in j)if(j[D].location>=0){const b=Y[D];let ie=$[D];if(ie===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),b===void 0||b.attribute!==ie||ie&&b.data!==ie.data)return!0;B++}return s.attributesNum!==B||s.index!==z}function g(y,T,I,z){const Y={},$=T.attributes;let B=0;const j=I.getAttributes();for(const D in j)if(j[D].location>=0){let b=$[D];b===void 0&&(D==="instanceMatrix"&&y.instanceMatrix&&(b=y.instanceMatrix),D==="instanceColor"&&y.instanceColor&&(b=y.instanceColor));const ie={};ie.attribute=b,b&&b.data&&(ie.data=b.data),Y[D]=ie,B++}s.attributes=Y,s.attributesNum=B,s.index=z}function _(){const y=s.newAttributes;for(let T=0,I=y.length;T<I;T++)y[T]=0}function m(y){d(y,0)}function d(y,T){const I=s.newAttributes,z=s.enabledAttributes,Y=s.attributeDivisors;I[y]=1,z[y]===0&&(n.enableVertexAttribArray(y),z[y]=1),Y[y]!==T&&(n.vertexAttribDivisor(y,T),Y[y]=T)}function v(){const y=s.newAttributes,T=s.enabledAttributes;for(let I=0,z=T.length;I<z;I++)T[I]!==y[I]&&(n.disableVertexAttribArray(I),T[I]=0)}function x(y,T,I,z,Y,$,B){B===!0?n.vertexAttribIPointer(y,T,I,Y,$):n.vertexAttribPointer(y,T,I,z,Y,$)}function S(y,T,I,z){_();const Y=z.attributes,$=I.getAttributes(),B=T.defaultAttributeValues;for(const j in $){const D=$[j];if(D.location>=0){let K=Y[j];if(K===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const b=K.normalized,ie=K.itemSize,Te=e.get(K);if(Te===void 0)continue;const Ke=Te.buffer,q=Te.type,re=Te.bytesPerElement,ne=q===n.INT||q===n.UNSIGNED_INT||K.gpuType===k_;if(K.isInterleavedBufferAttribute){const se=K.data,Re=se.stride,Me=K.offset;if(se.isInstancedInterleavedBuffer){for(let He=0;He<D.locationSize;He++)d(D.location+He,se.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let He=0;He<D.locationSize;He++)m(D.location+He);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let He=0;He<D.locationSize;He++)x(D.location+He,ie/D.locationSize,q,b,Re*re,(Me+ie/D.locationSize*He)*re,ne)}else{if(K.isInstancedBufferAttribute){for(let se=0;se<D.locationSize;se++)d(D.location+se,K.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let se=0;se<D.locationSize;se++)m(D.location+se);n.bindBuffer(n.ARRAY_BUFFER,Ke);for(let se=0;se<D.locationSize;se++)x(D.location+se,ie/D.locationSize,q,b,ie*re,ie/D.locationSize*se*re,ne)}}else if(B!==void 0){const b=B[j];if(b!==void 0)switch(b.length){case 2:n.vertexAttrib2fv(D.location,b);break;case 3:n.vertexAttrib3fv(D.location,b);break;case 4:n.vertexAttrib4fv(D.location,b);break;default:n.vertexAttrib1fv(D.location,b)}}}}v()}function C(){R();for(const y in i){const T=i[y];for(const I in T){const z=T[I];for(const Y in z)c(z[Y].object),delete z[Y];delete T[I]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const T=i[y.id];for(const I in T){const z=T[I];for(const Y in z)c(z[Y].object),delete z[Y];delete T[I]}delete i[y.id]}function M(y){for(const T in i){const I=i[T];if(I[y.id]===void 0)continue;const z=I[y.id];for(const Y in z)c(z[Y].object),delete z[Y];delete I[y.id]}}function R(){N(),o=!0,s!==r&&(s=r,u(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:N,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:M,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function nL(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,h){h!==0&&(n.drawArraysInstanced(i,u,c,h),t.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let g=0;g<h;g++)p+=c[g];t.update(p,i,1)}function l(u,c,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=c[_];for(let _=0;_<f.length;_++)t.update(g,i,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function iL(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(M){return!(M!==cr&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(M){const R=M===nc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==is&&i.convert(M)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Yr&&!R)}function l(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const M=e.get("EXT_clip_control");M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:C,maxSamples:w}}function rL(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ho,a=new at,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,x=v*4;let S=d.clippingState||null;l.value=S,S=c(g,f,x,p);for(let C=0;C!==x;++C)S[C]=t[C];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,f,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,S=p;x!==_;++x,S+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function sL(n){let e=new WeakMap;function t(o,a){return a===zm?o.mapping=ol:a===Bm&&(o.mapping=al),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zm||a===Bm)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new gb(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class oL extends l1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ba=4,xx=[.125,.215,.35,.446,.526,.582],go=20,ip=new oL,yx=new et;let rp=null,sp=0,op=0,ap=!1;const po=(1+Math.sqrt(5))/2,ca=1/po,Sx=[new X(-po,ca,0),new X(po,ca,0),new X(-ca,0,po),new X(ca,0,po),new X(0,po,-ca),new X(0,po,ca),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class Mx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){rp=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rp,sp,op),this._renderer.xr.enabled=ap,e.scissorTest=!1,tf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ol||e.mapping===al?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rp=this._renderer.getRenderTarget(),sp=this._renderer.getActiveCubeFace(),op=this._renderer.getActiveMipmapLevel(),ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:lr,minFilter:lr,generateMipmaps:!1,type:nc,format:cr,colorSpace:Qs,depthBuffer:!1},r=Ex(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ex(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aL(s)),this._blurMaterial=lL(s,e,t)}return r}_compileMaterial(e){const t=new bi(this._lodPlanes[0],e);this._renderer.compile(t,ip)}_sceneToCubeUV(e,t,i,r){const a=new Ei(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(yx),c.toneMapping=Bs,c.autoClear=!1;const p=new j_({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1}),g=new bi(new _l,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(yx),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const x=this._cubeSize;tf(r,v*x,d>2?x:0,x,x),c.setRenderTarget(r),_&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ol||e.mapping===al;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wx());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;tf(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ip)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Sx[(r-s-1)%Sx.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new bi(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*go-1),_=s/g,m=isFinite(s)?1+Math.floor(c*_):go;m>go&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${go}`);const d=[];let v=0;for(let M=0;M<go;++M){const R=M/_,N=Math.exp(-R*R/2);d.push(N),M===0?v+=N:M<m&&(v+=2*N)}for(let M=0;M<d.length;M++)d[M]=d[M]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;const S=this._sizeLods[r],C=3*S*(r>x-ba?r-x+ba:0),w=4*(this._cubeSize-S);tf(t,C,w,3*S,2*S),l.setRenderTarget(t),l.render(h,ip)}}function aL(n){const e=[],t=[],i=[];let r=n;const s=n-ba+1+xx.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ba?l=xx[o-n+ba-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,g=6,_=3,m=2,d=1,v=new Float32Array(_*g*p),x=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,R=w>2?0:-1,N=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];v.set(N,_*g*w),x.set(f,m*g*w);const y=[w,w,w,w,w,w];S.set(y,d*g*w)}const C=new mr;C.setAttribute("position",new dr(v,_)),C.setAttribute("uv",new dr(x,m)),C.setAttribute("faceIndex",new dr(S,d)),e.push(C),r>ba&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ex(n,e,t){const i=new Vo(n,e,t);return i.texture.mapping=Bh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function tf(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lL(n,e,t){const i=new Float32Array(go),r=new X(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:go,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:q_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function wx(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:q_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function Tx(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:q_(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zs,depthTest:!1,depthWrite:!1})}function q_(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uL(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===zm||l===Bm,c=l===ol||l===al;if(u||c){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Mx(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new Mx(n)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function cL(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Df("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fL(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const v=p.array;_=p.version;for(let x=0,S=v.length;x<S;x+=3){const C=v[x+0],w=v[x+1],M=v[x+2];f.push(C,w,w,M,M,C)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,S=v.length/3-1;x<S;x+=3){const C=x+0,w=x+1,M=x+2;f.push(C,w,w,M,M,C)}}else return;const m=new(JE(f)?o1:s1)(f,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function hL(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function u(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*o,g),t.update(p,i,g))}function c(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];t.update(m,i,1)}function h(f,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v];for(let v=0;v<_.length;v++)t.update(d,i,_[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function dL(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pL(n,e,t){const i=new WeakMap,r=new Ct;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*w*4*h),R=new t1(M,C,w,h);R.type=Yr,R.needsUpdate=!0;const N=S*4;for(let T=0;T<h;T++){const I=d[T],z=v[T],Y=x[T],$=C*w*4*T;for(let B=0;B<I.count;B++){const j=B*N;g===!0&&(r.fromBufferAttribute(I,B),M[$+j+0]=r.x,M[$+j+1]=r.y,M[$+j+2]=r.z,M[$+j+3]=0),_===!0&&(r.fromBufferAttribute(z,B),M[$+j+4]=r.x,M[$+j+5]=r.y,M[$+j+6]=r.z,M[$+j+7]=0),m===!0&&(r.fromBufferAttribute(Y,B),M[$+j+8]=r.x,M[$+j+9]=r.y,M[$+j+10]=r.z,M[$+j+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new yt(C,w)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function mL(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class f1 extends fi{constructor(e,t,i,r,s,o,a,l,u,c=Ga){if(c!==Ga&&c!==ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Ga&&(i=Ho),i===void 0&&c===ul&&(i=ll),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:qi,this.minFilter=l!==void 0?l:qi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const h1=new fi,Ax=new f1(1,1),d1=new t1,p1=new eb,m1=new u1,Cx=[],Rx=[],bx=new Float32Array(16),Px=new Float32Array(9),Lx=new Float32Array(4);function vl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cx[r];if(s===void 0&&(s=new Float32Array(r),Cx[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function dn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Gh(n,e){let t=Rx[e];t===void 0&&(t=new Int32Array(e),Rx[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _L(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function vL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function xL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function yL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;Lx.set(i),n.uniformMatrix2fv(this.addr,!1,Lx),pn(t,i)}}function SL(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;Px.set(i),n.uniformMatrix3fv(this.addr,!1,Px),pn(t,i)}}function ML(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(dn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(dn(t,i))return;bx.set(i),n.uniformMatrix4fv(this.addr,!1,bx),pn(t,i)}}function EL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function TL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function AL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function CL(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function RL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function bL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function PL(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function LL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ax.compareFunction=QE,s=Ax):s=h1,t.setTexture2D(e||s,r)}function DL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||p1,r)}function NL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||m1,r)}function IL(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||d1,r)}function UL(n){switch(n){case 5126:return gL;case 35664:return _L;case 35665:return vL;case 35666:return xL;case 35674:return yL;case 35675:return SL;case 35676:return ML;case 5124:case 35670:return EL;case 35667:case 35671:return wL;case 35668:case 35672:return TL;case 35669:case 35673:return AL;case 5125:return CL;case 36294:return RL;case 36295:return bL;case 36296:return PL;case 35678:case 36198:case 36298:case 36306:case 35682:return LL;case 35679:case 36299:case 36307:return DL;case 35680:case 36300:case 36308:case 36293:return NL;case 36289:case 36303:case 36311:case 36292:return IL}}function OL(n,e){n.uniform1fv(this.addr,e)}function FL(n,e){const t=vl(e,this.size,2);n.uniform2fv(this.addr,t)}function kL(n,e){const t=vl(e,this.size,3);n.uniform3fv(this.addr,t)}function zL(n,e){const t=vl(e,this.size,4);n.uniform4fv(this.addr,t)}function BL(n,e){const t=vl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HL(n,e){const t=vl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function VL(n,e){const t=vl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GL(n,e){n.uniform1iv(this.addr,e)}function WL(n,e){n.uniform2iv(this.addr,e)}function XL(n,e){n.uniform3iv(this.addr,e)}function jL(n,e){n.uniform4iv(this.addr,e)}function YL(n,e){n.uniform1uiv(this.addr,e)}function qL(n,e){n.uniform2uiv(this.addr,e)}function $L(n,e){n.uniform3uiv(this.addr,e)}function KL(n,e){n.uniform4uiv(this.addr,e)}function ZL(n,e,t){const i=this.cache,r=e.length,s=Gh(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||h1,s[o])}function QL(n,e,t){const i=this.cache,r=e.length,s=Gh(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||p1,s[o])}function JL(n,e,t){const i=this.cache,r=e.length,s=Gh(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||m1,s[o])}function eD(n,e,t){const i=this.cache,r=e.length,s=Gh(t,r);dn(i,s)||(n.uniform1iv(this.addr,s),pn(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||d1,s[o])}function tD(n){switch(n){case 5126:return OL;case 35664:return FL;case 35665:return kL;case 35666:return zL;case 35674:return BL;case 35675:return HL;case 35676:return VL;case 5124:case 35670:return GL;case 35667:case 35671:return WL;case 35668:case 35672:return XL;case 35669:case 35673:return jL;case 5125:return YL;case 36294:return qL;case 36295:return $L;case 36296:return KL;case 35678:case 36198:case 36298:case 36306:case 35682:return ZL;case 35679:case 36299:case 36307:return QL;case 35680:case 36300:case 36308:case 36293:return JL;case 36289:case 36303:case 36311:case 36292:return eD}}class nD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=UL(t.type)}}class iD{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tD(t.type)}}class rD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const lp=/(\w+)(\])?(\[|\.)?/g;function Dx(n,e){n.seq.push(e),n.map[e.id]=e}function sD(n,e,t){const i=n.name,r=i.length;for(lp.lastIndex=0;;){const s=lp.exec(i),o=lp.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Dx(t,u===void 0?new nD(a,n,e):new iD(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new rD(a),Dx(t,h)),t=h}}}class Nf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sD(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Nx(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const oD=37297;let aD=0;function lD(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function uD(n){const e=Et.getPrimaries(Et.workingColorSpace),t=Et.getPrimaries(n);let i;switch(e===t?i="":e===_h&&t===gh?i="LinearDisplayP3ToLinearSRGB":e===gh&&t===_h&&(i="LinearSRGBToLinearDisplayP3"),n){case Qs:case Hh:return[i,"LinearTransferOETF"];case yr:case W_:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ix(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+lD(n.getShaderSource(e),o)}else return r}function cD(n,e){const t=uD(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function fD(n,e){let t;switch(e){case fR:t="Linear";break;case hR:t="Reinhard";break;case dR:t="Cineon";break;case pR:t="ACESFilmic";break;case gR:t="AgX";break;case _R:t="Neutral";break;case mR:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nf=new X;function hD(){Et.getLuminanceCoefficients(nf);const n=nf.x.toFixed(4),e=nf.y.toFixed(4),t=nf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($l).join(`
`)}function pD(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mD(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function $l(n){return n!==""}function Ux(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ox(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gD=/^[ \t]*#include +<([\w\d./]+)>/gm;function mg(n){return n.replace(gD,vD)}const _D=new Map;function vD(n,e){let t=ot[e];if(t===void 0){const i=_D.get(e);if(i!==void 0)t=ot[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mg(t)}const xD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fx(n){return n.replace(xD,yD)}function yD(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function SD(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===kE?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===WC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===kr&&(e="SHADOWMAP_TYPE_VSM"),e}function MD(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ol:case al:e="ENVMAP_TYPE_CUBE";break;case Bh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ED(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case al:e="ENVMAP_MODE_REFRACTION";break}return e}function wD(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case zE:e="ENVMAP_BLENDING_MULTIPLY";break;case uR:e="ENVMAP_BLENDING_MIX";break;case cR:e="ENVMAP_BLENDING_ADD";break}return e}function TD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function AD(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=SD(t),u=MD(t),c=ED(t),h=wD(t),f=TD(t),p=dD(t),g=pD(s),_=r.createProgram();let m,d,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($l).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($l).join(`
`),d.length>0&&(d+=`
`)):(m=[kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($l).join(`
`),d=[kx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bs?"#define TONE_MAPPING":"",t.toneMapping!==Bs?ot.tonemapping_pars_fragment:"",t.toneMapping!==Bs?fD("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,cD("linearToOutputTexel",t.outputColorSpace),hD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($l).join(`
`)),o=mg(o),o=Ux(o,t),o=Ox(o,t),a=mg(a),a=Ux(a,t),a=Ox(a,t),o=Fx(o),a=Fx(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ex?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ex?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const x=v+m+o,S=v+d+a,C=Nx(r,r.VERTEX_SHADER,x),w=Nx(r,r.FRAGMENT_SHADER,S);r.attachShader(_,C),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function M(T){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(_).trim(),z=r.getShaderInfoLog(C).trim(),Y=r.getShaderInfoLog(w).trim();let $=!0,B=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,C,w);else{const j=Ix(r,C,"vertex"),D=Ix(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+j+`
`+D)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||Y==="")&&(B=!1);B&&(T.diagnostics={runnable:$,programLog:I,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:d}})}r.deleteShader(C),r.deleteShader(w),R=new Nf(r,_),N=mD(r,_)}let R;this.getUniforms=function(){return R===void 0&&M(this),R};let N;this.getAttributes=function(){return N===void 0&&M(this),N};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,oD)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aD++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let CD=0;class RD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bD(e),t.set(e,i)),i}}class bD{constructor(e){this.id=CD++,this.code=e,this.usedTimes=0}}function PD(n,e,t,i,r,s,o){const a=new i1,l=new RD,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return u.add(y),y===0?"uv":`uv${y}`}function d(y,T,I,z,Y){const $=z.fog,B=Y.geometry,j=y.isMeshStandardMaterial?z.environment:null,D=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),K=D&&D.mapping===Bh?D.image.height:null,b=_[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const ie=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Te=ie!==void 0?ie.length:0;let Ke=0;B.morphAttributes.position!==void 0&&(Ke=1),B.morphAttributes.normal!==void 0&&(Ke=2),B.morphAttributes.color!==void 0&&(Ke=3);let q,re,ne,se;if(b){const be=Sr[b];q=be.vertexShader,re=be.fragmentShader}else q=y.vertexShader,re=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),se=l.getFragmentShaderID(y);const Re=n.getRenderTarget(),Me=Y.isInstancedMesh===!0,He=Y.isBatchedMesh===!0,De=!!y.map,Ye=!!y.matcap,L=!!D,lt=!!y.aoMap,Ve=!!y.lightMap,Ze=!!y.bumpMap,k=!!y.normalMap,tt=!!y.displacementMap,Oe=!!y.emissiveMap,P=!!y.metalnessMap,E=!!y.roughnessMap,G=y.anisotropy>0,ee=y.clearcoat>0,J=y.dispersion>0,Q=y.iridescence>0,Ae=y.sheen>0,le=y.transmission>0,me=G&&!!y.anisotropyMap,Qe=ee&&!!y.clearcoatMap,ae=ee&&!!y.clearcoatNormalMap,Ee=ee&&!!y.clearcoatRoughnessMap,Ce=Q&&!!y.iridescenceMap,ge=Q&&!!y.iridescenceThicknessMap,he=Ae&&!!y.sheenColorMap,ke=Ae&&!!y.sheenRoughnessMap,Ne=!!y.specularMap,Je=!!y.specularColorMap,U=!!y.specularIntensityMap,oe=le&&!!y.transmissionMap,Z=le&&!!y.thicknessMap,te=!!y.gradientMap,de=!!y.alphaMap,pe=y.alphaTest>0,nt=!!y.alphaHash,Ie=!!y.extensions;let it=Bs;y.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(it=n.toneMapping);const Ge={shaderID:b,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:re,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:He,batchingColor:He&&Y._colorsTexture!==null,instancing:Me,instancingColor:Me&&Y.instanceColor!==null,instancingMorph:Me&&Y.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Re===null?n.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Qs,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:Ye,envMap:L,envMapMode:L&&D.mapping,envMapCubeUVHeight:K,aoMap:lt,lightMap:Ve,bumpMap:Ze,normalMap:k,displacementMap:p&&tt,emissiveMap:Oe,normalMapObjectSpace:k&&y.normalMapType===SR,normalMapTangentSpace:k&&y.normalMapType===ZE,metalnessMap:P,roughnessMap:E,anisotropy:G,anisotropyMap:me,clearcoat:ee,clearcoatMap:Qe,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:J,iridescence:Q,iridescenceMap:Ce,iridescenceThicknessMap:ge,sheen:Ae,sheenColorMap:he,sheenRoughnessMap:ke,specularMap:Ne,specularColorMap:Je,specularIntensityMap:U,transmission:le,transmissionMap:oe,thicknessMap:Z,gradientMap:te,opaque:y.transparent===!1&&y.blending===Va&&y.alphaToCoverage===!1,alphaMap:de,alphaTest:pe,alphaHash:nt,combine:y.combine,mapUv:De&&m(y.map.channel),aoMapUv:lt&&m(y.aoMap.channel),lightMapUv:Ve&&m(y.lightMap.channel),bumpMapUv:Ze&&m(y.bumpMap.channel),normalMapUv:k&&m(y.normalMap.channel),displacementMapUv:tt&&m(y.displacementMap.channel),emissiveMapUv:Oe&&m(y.emissiveMap.channel),metalnessMapUv:P&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:me&&m(y.anisotropyMap.channel),clearcoatMapUv:Qe&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ke&&m(y.sheenRoughnessMap.channel),specularMapUv:Ne&&m(y.specularMap.channel),specularColorMapUv:Je&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:oe&&m(y.transmissionMap.channel),thicknessMapUv:Z&&m(y.thicknessMap.channel),alphaMapUv:de&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(k||G),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!B.attributes.uv&&(De||de),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ke,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&Et.getTransfer(y.map.colorSpace)===Ot,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Tr,flipSided:y.side===ci,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ie&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&y.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ge.vertexUv1s=u.has(1),Ge.vertexUv2s=u.has(2),Ge.vertexUv3s=u.has(3),u.clear(),Ge}function v(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(x(T,y),S(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function x(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function S(y,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const T=_[y.type];let I;if(T){const z=Sr[T];I=hb.clone(z.uniforms)}else I=y.uniforms;return I}function w(y,T){let I;for(let z=0,Y=c.length;z<Y;z++){const $=c[z];if($.cacheKey===T){I=$,++I.usedTimes;break}}return I===void 0&&(I=new AD(n,T,y,s),c.push(I)),I}function M(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function R(y){l.remove(y)}function N(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:C,acquireProgram:w,releaseProgram:M,releaseShaderCache:R,programs:c,dispose:N}}function LD(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function DD(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Bx(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,g,_,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function a(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,_,m){const d=o(h,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(h,f){t.length>1&&t.sort(h||DD),i.length>1&&i.sort(f||zx),r.length>1&&r.sort(f||zx)}function c(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function ND(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Bx,n.set(i,[o])):r>=s.length?(o=new Bx,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function ID(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new et};break;case"SpotLight":t={position:new X,direction:new X,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new X,halfWidth:new X,halfHeight:new X};break}return n[e.id]=t,t}}}function UD(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let OD=0;function FD(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function kD(n){const e=new ID,t=UD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new X);const r=new X,s=new Ht,o=new Ht;function a(u){let c=0,h=0,f=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,v=0,x=0,S=0,C=0,w=0,M=0;u.sort(FD);for(let N=0,y=u.length;N<y;N++){const T=u[N],I=T.color,z=T.intensity,Y=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)c+=I.r*z,h+=I.g*z,f+=I.b*z;else if(T.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(T.sh.coefficients[B],z);M++}else if(T.isDirectionalLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const j=T.shadow,D=t.get(T);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=T.shadow.matrix,v++}i.directional[p]=B,p++}else if(T.isSpotLight){const B=e.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(I).multiplyScalar(z),B.distance=Y,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,i.spot[_]=B;const j=T.shadow;if(T.map&&(i.spotLightMap[C]=T.map,C++,j.updateMatrices(T),T.castShadow&&w++),i.spotLightMatrix[_]=j.matrix,T.castShadow){const D=t.get(T);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.spotShadow[_]=D,i.spotShadowMap[_]=$,S++}_++}else if(T.isRectAreaLight){const B=e.get(T);B.color.copy(I).multiplyScalar(z),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),i.rectArea[m]=B,m++}else if(T.isPointLight){const B=e.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){const j=T.shadow,D=t.get(T);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=T.shadow.matrix,x++}i.point[g]=B,g++}else if(T.isHemisphereLight){const B=e.get(T);B.skyColor.copy(T.color).multiplyScalar(z),B.groundColor.copy(T.groundColor).multiplyScalar(z),i.hemi[d]=B,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==C||R.numLightProbes!==M)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=M,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=C,R.numLightProbes=M,i.version=OD++)}function l(u,c){let h=0,f=0,p=0,g=0,_=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const x=u[d];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Hx(n){const e=new kD(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(){e.setup(t)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zD(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Hx(n),e.set(r,[a])):s>=o.length?(a=new Hx(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class BD extends gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HD extends gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WD(n,e,t){let i=new Y_;const r=new yt,s=new yt,o=new Ct,a=new BD({depthPacking:yR}),l=new HD,u={},c=t.maxTextureSize,h={[Ys]:ci,[ci]:Ys,[Tr]:Tr},f=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:VD,fragmentShader:GD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new mr;g.setAttribute("position",new dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kE;let d=this.type;this.render=function(w,M,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const N=n.getRenderTarget(),y=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),I=n.state;I.setBlending(zs),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=d!==kr&&this.type===kr,Y=d===kr&&this.type!==kr;for(let $=0,B=w.length;$<B;$++){const j=w[$],D=j.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,D.mapSize.y=s.y)),D.map===null||z===!0||Y===!0){const ie=this.type!==kr?{minFilter:qi,magFilter:qi}:{};D.map!==null&&D.map.dispose(),D.map=new Vo(r.x,r.y,ie),D.map.texture.name=j.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const b=D.getViewportCount();for(let ie=0;ie<b;ie++){const Te=D.getViewport(ie);o.set(s.x*Te.x,s.y*Te.y,s.x*Te.z,s.y*Te.w),I.viewport(o),D.updateMatrices(j,ie),i=D.getFrustum(),S(M,R,D.camera,j,this.type)}D.isPointLightShadow!==!0&&this.type===kr&&v(D,R),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(N,y,T)};function v(w,M){const R=e.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vo(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(M,null,R,f,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(M,null,R,p,_,null)}function x(w,M,R,N){let y=null;const T=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)y=T;else if(y=R.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const I=y.uuid,z=M.uuid;let Y=u[I];Y===void 0&&(Y={},u[I]=Y);let $=Y[z];$===void 0&&($=y.clone(),Y[z]=$,M.addEventListener("dispose",C)),y=$}if(y.visible=M.visible,y.wireframe=M.wireframe,N===kr?y.side=M.shadowSide!==null?M.shadowSide:M.side:y.side=M.shadowSide!==null?M.shadowSide:h[M.side],y.alphaMap=M.alphaMap,y.alphaTest=M.alphaTest,y.map=M.map,y.clipShadows=M.clipShadows,y.clippingPlanes=M.clippingPlanes,y.clipIntersection=M.clipIntersection,y.displacementMap=M.displacementMap,y.displacementScale=M.displacementScale,y.displacementBias=M.displacementBias,y.wireframeLinewidth=M.wireframeLinewidth,y.linewidth=M.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=n.properties.get(y);I.light=R}return y}function S(w,M,R,N,y){if(w.visible===!1)return;if(w.layers.test(M.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===kr)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const z=e.update(w),Y=w.material;if(Array.isArray(Y)){const $=z.groups;for(let B=0,j=$.length;B<j;B++){const D=$[B],K=Y[D.materialIndex];if(K&&K.visible){const b=x(w,K,N,y);w.onBeforeShadow(n,w,M,R,z,b,D),n.renderBufferDirect(R,null,z,b,w,D),w.onAfterShadow(n,w,M,R,z,b,D)}}}else if(Y.visible){const $=x(w,Y,N,y);w.onBeforeShadow(n,w,M,R,z,$,null),n.renderBufferDirect(R,null,z,$,w,null),w.onAfterShadow(n,w,M,R,z,$,null)}}const I=w.children;for(let z=0,Y=I.length;z<Y;z++)S(I[z],M,R,N,y)}function C(w){w.target.removeEventListener("dispose",C);for(const R in u){const N=u[R],y=w.target.uuid;y in N&&(N[y].dispose(),delete N[y])}}}const XD={[Dm]:Nm,[Im]:Fm,[Um]:km,[sl]:Om,[Nm]:Dm,[Fm]:Im,[km]:Um,[Om]:sl};function jD(n){function e(){let U=!1;const oe=new Ct;let Z=null;const te=new Ct(0,0,0,0);return{setMask:function(de){Z!==de&&!U&&(n.colorMask(de,de,de,de),Z=de)},setLocked:function(de){U=de},setClear:function(de,pe,nt,Ie,it){it===!0&&(de*=Ie,pe*=Ie,nt*=Ie),oe.set(de,pe,nt,Ie),te.equals(oe)===!1&&(n.clearColor(de,pe,nt,Ie),te.copy(oe))},reset:function(){U=!1,Z=null,te.set(-1,0,0,0)}}}function t(){let U=!1,oe=!1,Z=null,te=null,de=null;return{setReversed:function(pe){oe=pe},setTest:function(pe){pe?ne(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(pe){Z!==pe&&!U&&(n.depthMask(pe),Z=pe)},setFunc:function(pe){if(oe&&(pe=XD[pe]),te!==pe){switch(pe){case Dm:n.depthFunc(n.NEVER);break;case Nm:n.depthFunc(n.ALWAYS);break;case Im:n.depthFunc(n.LESS);break;case sl:n.depthFunc(n.LEQUAL);break;case Um:n.depthFunc(n.EQUAL);break;case Om:n.depthFunc(n.GEQUAL);break;case Fm:n.depthFunc(n.GREATER);break;case km:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}te=pe}},setLocked:function(pe){U=pe},setClear:function(pe){de!==pe&&(n.clearDepth(pe),de=pe)},reset:function(){U=!1,Z=null,te=null,de=null}}}function i(){let U=!1,oe=null,Z=null,te=null,de=null,pe=null,nt=null,Ie=null,it=null;return{setTest:function(Ge){U||(Ge?ne(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(Ge){oe!==Ge&&!U&&(n.stencilMask(Ge),oe=Ge)},setFunc:function(Ge,be,we){(Z!==Ge||te!==be||de!==we)&&(n.stencilFunc(Ge,be,we),Z=Ge,te=be,de=we)},setOp:function(Ge,be,we){(pe!==Ge||nt!==be||Ie!==we)&&(n.stencilOp(Ge,be,we),pe=Ge,nt=be,Ie=we)},setLocked:function(Ge){U=Ge},setClear:function(Ge){it!==Ge&&(n.clearStencil(Ge),it=Ge)},reset:function(){U=!1,oe=null,Z=null,te=null,de=null,pe=null,nt=null,Ie=null,it=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,v=null,x=null,S=null,C=null,w=new et(0,0,0),M=0,R=!1,N=null,y=null,T=null,I=null,z=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=B>=2);let D=null,K={};const b=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),Te=new Ct().fromArray(b),Ke=new Ct().fromArray(ie);function q(U,oe,Z,te){const de=new Uint8Array(4),pe=n.createTexture();n.bindTexture(U,pe),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<Z;nt++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(oe+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return pe}const re={};re[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),re[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),re[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ne(n.DEPTH_TEST),s.setFunc(sl),Ve(!1),Ze(qv),ne(n.CULL_FACE),L(zs);function ne(U){u[U]!==!0&&(n.enable(U),u[U]=!0)}function se(U){u[U]!==!1&&(n.disable(U),u[U]=!1)}function Re(U,oe){return c[U]!==oe?(n.bindFramebuffer(U,oe),c[U]=oe,U===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=oe),U===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Me(U,oe){let Z=f,te=!1;if(U){Z=h.get(oe),Z===void 0&&(Z=[],h.set(oe,Z));const de=U.textures;if(Z.length!==de.length||Z[0]!==n.COLOR_ATTACHMENT0){for(let pe=0,nt=de.length;pe<nt;pe++)Z[pe]=n.COLOR_ATTACHMENT0+pe;Z.length=de.length,te=!0}}else Z[0]!==n.BACK&&(Z[0]=n.BACK,te=!0);te&&n.drawBuffers(Z)}function He(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const De={[mo]:n.FUNC_ADD,[jC]:n.FUNC_SUBTRACT,[YC]:n.FUNC_REVERSE_SUBTRACT};De[qC]=n.MIN,De[$C]=n.MAX;const Ye={[KC]:n.ZERO,[ZC]:n.ONE,[QC]:n.SRC_COLOR,[Pm]:n.SRC_ALPHA,[rR]:n.SRC_ALPHA_SATURATE,[nR]:n.DST_COLOR,[eR]:n.DST_ALPHA,[JC]:n.ONE_MINUS_SRC_COLOR,[Lm]:n.ONE_MINUS_SRC_ALPHA,[iR]:n.ONE_MINUS_DST_COLOR,[tR]:n.ONE_MINUS_DST_ALPHA,[sR]:n.CONSTANT_COLOR,[oR]:n.ONE_MINUS_CONSTANT_COLOR,[aR]:n.CONSTANT_ALPHA,[lR]:n.ONE_MINUS_CONSTANT_ALPHA};function L(U,oe,Z,te,de,pe,nt,Ie,it,Ge){if(U===zs){g===!0&&(se(n.BLEND),g=!1);return}if(g===!1&&(ne(n.BLEND),g=!0),U!==XC){if(U!==_||Ge!==R){if((m!==mo||x!==mo)&&(n.blendEquation(n.FUNC_ADD),m=mo,x=mo),Ge)switch(U){case Va:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $v:n.blendFunc(n.ONE,n.ONE);break;case Kv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zv:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Va:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $v:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Kv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zv:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,v=null,S=null,C=null,w.set(0,0,0),M=0,_=U,R=Ge}return}de=de||oe,pe=pe||Z,nt=nt||te,(oe!==m||de!==x)&&(n.blendEquationSeparate(De[oe],De[de]),m=oe,x=de),(Z!==d||te!==v||pe!==S||nt!==C)&&(n.blendFuncSeparate(Ye[Z],Ye[te],Ye[pe],Ye[nt]),d=Z,v=te,S=pe,C=nt),(Ie.equals(w)===!1||it!==M)&&(n.blendColor(Ie.r,Ie.g,Ie.b,it),w.copy(Ie),M=it),_=U,R=!1}function lt(U,oe){U.side===Tr?se(n.CULL_FACE):ne(n.CULL_FACE);let Z=U.side===ci;oe&&(Z=!Z),Ve(Z),U.blending===Va&&U.transparent===!1?L(zs):L(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const te=U.stencilWrite;o.setTest(te),te&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ne(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(U){N!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),N=U)}function Ze(U){U!==VC?(ne(n.CULL_FACE),U!==y&&(U===qv?n.cullFace(n.BACK):U===GC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),y=U}function k(U){U!==T&&($&&n.lineWidth(U),T=U)}function tt(U,oe,Z){U?(ne(n.POLYGON_OFFSET_FILL),(I!==oe||z!==Z)&&(n.polygonOffset(oe,Z),I=oe,z=Z)):se(n.POLYGON_OFFSET_FILL)}function Oe(U){U?ne(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function P(U){U===void 0&&(U=n.TEXTURE0+Y-1),D!==U&&(n.activeTexture(U),D=U)}function E(U,oe,Z){Z===void 0&&(D===null?Z=n.TEXTURE0+Y-1:Z=D);let te=K[Z];te===void 0&&(te={type:void 0,texture:void 0},K[Z]=te),(te.type!==U||te.texture!==oe)&&(D!==Z&&(n.activeTexture(Z),D=Z),n.bindTexture(U,oe||re[U]),te.type=U,te.texture=oe)}function G(){const U=K[D];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ee(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Qe(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ge(U){Te.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Te.copy(U))}function he(U){Ke.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Ke.copy(U))}function ke(U,oe){let Z=l.get(oe);Z===void 0&&(Z=new WeakMap,l.set(oe,Z));let te=Z.get(U);te===void 0&&(te=n.getUniformBlockIndex(oe,U.name),Z.set(U,te))}function Ne(U,oe){const te=l.get(oe).get(U);a.get(oe)!==te&&(n.uniformBlockBinding(oe,te,U.__bindingPointIndex),a.set(oe,te))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,K={},c={},h=new WeakMap,f=[],p=null,g=!1,_=null,m=null,d=null,v=null,x=null,S=null,C=null,w=new et(0,0,0),M=0,R=!1,N=null,y=null,T=null,I=null,z=null,Te.set(0,0,n.canvas.width,n.canvas.height),Ke.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ne,disable:se,bindFramebuffer:Re,drawBuffers:Me,useProgram:He,setBlending:L,setMaterial:lt,setFlipSided:Ve,setCullFace:Ze,setLineWidth:k,setPolygonOffset:tt,setScissorTest:Oe,activeTexture:P,bindTexture:E,unbindTexture:G,compressedTexImage2D:ee,compressedTexImage3D:J,texImage2D:Ee,texImage3D:Ce,updateUBOMapping:ke,uniformBlockBinding:Ne,texStorage2D:Qe,texStorage3D:ae,texSubImage2D:Q,texSubImage3D:Ae,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:ge,viewport:he,reset:Je}}function Vx(n,e,t,i){const r=YD(i);switch(t){case WE:return n*e;case jE:return n*e;case YE:return n*e*2;case qE:return n*e/r.components*r.byteLength;case H_:return n*e/r.components*r.byteLength;case $E:return n*e*2/r.components*r.byteLength;case V_:return n*e*2/r.components*r.byteLength;case XE:return n*e*3/r.components*r.byteLength;case cr:return n*e*4/r.components*r.byteLength;case G_:return n*e*4/r.components*r.byteLength;case Cf:case Rf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case bf:case Pf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Wm:case jm:return Math.max(n,16)*Math.max(e,8)/4;case Gm:case Xm:return Math.max(n,8)*Math.max(e,8)/2;case Ym:case qm:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $m:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Km:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Zm:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Qm:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Jm:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case eg:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case tg:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ng:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ig:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case rg:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case sg:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case og:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ag:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case lg:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ug:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lf:case cg:case fg:return Math.ceil(n/4)*Math.ceil(e/4)*16;case KE:case hg:return Math.ceil(n/4)*Math.ceil(e/4)*8;case dg:case pg:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function YD(n){switch(n){case is:case HE:return{byteLength:1,components:1};case qu:case VE:case nc:return{byteLength:2,components:1};case z_:case B_:return{byteLength:2,components:4};case Ho:case k_:case Yr:return{byteLength:4,components:1};case GE:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function qD(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new yt,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,E){return p?new OffscreenCanvas(P,E):xh("canvas")}function _(P,E,G){let ee=1;const J=Oe(P);if((J.width>G||J.height>G)&&(ee=G/Math.max(J.width,J.height)),ee<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Q=Math.floor(ee*J.width),Ae=Math.floor(ee*J.height);h===void 0&&(h=g(Q,Ae));const le=E?g(Q,Ae):h;return le.width=Q,le.height=Ae,le.getContext("2d").drawImage(P,0,0,Q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Q+"x"+Ae+")."),le}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==qi&&P.minFilter!==lr}function d(P){n.generateMipmap(P)}function v(P,E,G,ee,J=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Q=E;if(E===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),E===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),E===n.RGBA){const Ae=J?mh:Et.getTransfer(ee);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=Ae===Ot?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(P,E){let G;return P?E===null||E===Ho||E===ll?G=n.DEPTH24_STENCIL8:E===Yr?G=n.DEPTH32F_STENCIL8:E===qu&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ho||E===ll?G=n.DEPTH_COMPONENT24:E===Yr?G=n.DEPTH_COMPONENT32F:E===qu&&(G=n.DEPTH_COMPONENT16),G}function S(P,E){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==qi&&P.minFilter!==lr?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function C(P){const E=P.target;E.removeEventListener("dispose",C),M(E),E.isVideoTexture&&c.delete(E)}function w(P){const E=P.target;E.removeEventListener("dispose",w),N(E)}function M(P){const E=i.get(P);if(E.__webglInit===void 0)return;const G=P.source,ee=f.get(G);if(ee){const J=ee[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(P),Object.keys(ee).length===0&&f.delete(G)}i.remove(P)}function R(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const G=P.source,ee=f.get(G);delete ee[E.__cacheKey],o.memory.textures--}function N(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let J=0;J<E.__webglFramebuffer[ee].length;J++)n.deleteFramebuffer(E.__webglFramebuffer[ee][J]);else n.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)n.deleteFramebuffer(E.__webglFramebuffer[ee]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=P.textures;for(let ee=0,J=G.length;ee<J;ee++){const Q=i.get(G[ee]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(G[ee])}i.remove(P)}let y=0;function T(){y=0}function I(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function z(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function Y(P,E){const G=i.get(P);if(P.isVideoTexture&&k(P),P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){const ee=P.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ke(G,P,E);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function $(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Ke(G,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function B(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){Ke(G,P,E);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function j(P,E){const G=i.get(P);if(P.version>0&&G.__version!==P.version){q(G,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const D={[Hm]:n.REPEAT,[Mo]:n.CLAMP_TO_EDGE,[Vm]:n.MIRRORED_REPEAT},K={[qi]:n.NEAREST,[vR]:n.NEAREST_MIPMAP_NEAREST,[Oc]:n.NEAREST_MIPMAP_LINEAR,[lr]:n.LINEAR,[Id]:n.LINEAR_MIPMAP_NEAREST,[Eo]:n.LINEAR_MIPMAP_LINEAR},b={[MR]:n.NEVER,[RR]:n.ALWAYS,[ER]:n.LESS,[QE]:n.LEQUAL,[wR]:n.EQUAL,[CR]:n.GEQUAL,[TR]:n.GREATER,[AR]:n.NOTEQUAL};function ie(P,E){if(E.type===Yr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===lr||E.magFilter===Id||E.magFilter===Oc||E.magFilter===Eo||E.minFilter===lr||E.minFilter===Id||E.minFilter===Oc||E.minFilter===Eo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,D[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,D[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,D[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,K[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,K[E.minFilter]),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,b[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===qi||E.minFilter!==Oc&&E.minFilter!==Eo||E.type===Yr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Te(P,E){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",C));const ee=E.source;let J=f.get(ee);J===void 0&&(J={},f.set(ee,J));const Q=z(E);if(Q!==P.__cacheKey){J[Q]===void 0&&(J[Q]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[Q].usedTimes++;const Ae=J[P.__cacheKey];Ae!==void 0&&(J[P.__cacheKey].usedTimes--,Ae.usedTimes===0&&R(E)),P.__cacheKey=Q,P.__webglTexture=J[Q].texture}return G}function Ke(P,E,G){let ee=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=n.TEXTURE_3D);const J=Te(P,E),Q=E.source;t.bindTexture(ee,P.__webglTexture,n.TEXTURE0+G);const Ae=i.get(Q);if(Q.version!==Ae.__version||J===!0){t.activeTexture(n.TEXTURE0+G);const le=Et.getPrimaries(Et.workingColorSpace),me=E.colorSpace===ys?null:Et.getPrimaries(E.colorSpace),Qe=E.colorSpace===ys||le===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let ae=_(E.image,!1,r.maxTextureSize);ae=tt(E,ae);const Ee=s.convert(E.format,E.colorSpace),Ce=s.convert(E.type);let ge=v(E.internalFormat,Ee,Ce,E.colorSpace,E.isVideoTexture);ie(ee,E);let he;const ke=E.mipmaps,Ne=E.isVideoTexture!==!0,Je=Ae.__version===void 0||J===!0,U=Q.dataReady,oe=S(E,ae);if(E.isDepthTexture)ge=x(E.format===ul,E.type),Je&&(Ne?t.texStorage2D(n.TEXTURE_2D,1,ge,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,ge,ae.width,ae.height,0,Ee,Ce,null));else if(E.isDataTexture)if(ke.length>0){Ne&&Je&&t.texStorage2D(n.TEXTURE_2D,oe,ge,ke[0].width,ke[0].height);for(let Z=0,te=ke.length;Z<te;Z++)he=ke[Z],Ne?U&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,he.width,he.height,Ee,Ce,he.data):t.texImage2D(n.TEXTURE_2D,Z,ge,he.width,he.height,0,Ee,Ce,he.data);E.generateMipmaps=!1}else Ne?(Je&&t.texStorage2D(n.TEXTURE_2D,oe,ge,ae.width,ae.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Ee,Ce,ae.data)):t.texImage2D(n.TEXTURE_2D,0,ge,ae.width,ae.height,0,Ee,Ce,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ne&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,ge,ke[0].width,ke[0].height,ae.depth);for(let Z=0,te=ke.length;Z<te;Z++)if(he=ke[Z],E.format!==cr)if(Ee!==null)if(Ne){if(U)if(E.layerUpdates.size>0){const de=Vx(he.width,he.height,E.format,E.type);for(const pe of E.layerUpdates){const nt=he.data.subarray(pe*de/he.data.BYTES_PER_ELEMENT,(pe+1)*de/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,pe,he.width,he.height,1,Ee,nt,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,he.width,he.height,ae.depth,Ee,he.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,ge,he.width,he.height,ae.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,he.width,he.height,ae.depth,Ee,Ce,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Z,ge,he.width,he.height,ae.depth,0,Ee,Ce,he.data)}else{Ne&&Je&&t.texStorage2D(n.TEXTURE_2D,oe,ge,ke[0].width,ke[0].height);for(let Z=0,te=ke.length;Z<te;Z++)he=ke[Z],E.format!==cr?Ee!==null?Ne?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,he.width,he.height,Ee,he.data):t.compressedTexImage2D(n.TEXTURE_2D,Z,ge,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?U&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,he.width,he.height,Ee,Ce,he.data):t.texImage2D(n.TEXTURE_2D,Z,ge,he.width,he.height,0,Ee,Ce,he.data)}else if(E.isDataArrayTexture)if(Ne){if(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,ge,ae.width,ae.height,ae.depth),U)if(E.layerUpdates.size>0){const Z=Vx(ae.width,ae.height,E.format,E.type);for(const te of E.layerUpdates){const de=ae.data.subarray(te*Z/ae.data.BYTES_PER_ELEMENT,(te+1)*Z/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,te,ae.width,ae.height,1,Ee,Ce,de)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Ce,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ge,ae.width,ae.height,ae.depth,0,Ee,Ce,ae.data);else if(E.isData3DTexture)Ne?(Je&&t.texStorage3D(n.TEXTURE_3D,oe,ge,ae.width,ae.height,ae.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ee,Ce,ae.data)):t.texImage3D(n.TEXTURE_3D,0,ge,ae.width,ae.height,ae.depth,0,Ee,Ce,ae.data);else if(E.isFramebufferTexture){if(Je)if(Ne)t.texStorage2D(n.TEXTURE_2D,oe,ge,ae.width,ae.height);else{let Z=ae.width,te=ae.height;for(let de=0;de<oe;de++)t.texImage2D(n.TEXTURE_2D,de,ge,Z,te,0,Ee,Ce,null),Z>>=1,te>>=1}}else if(ke.length>0){if(Ne&&Je){const Z=Oe(ke[0]);t.texStorage2D(n.TEXTURE_2D,oe,ge,Z.width,Z.height)}for(let Z=0,te=ke.length;Z<te;Z++)he=ke[Z],Ne?U&&t.texSubImage2D(n.TEXTURE_2D,Z,0,0,Ee,Ce,he):t.texImage2D(n.TEXTURE_2D,Z,ge,Ee,Ce,he);E.generateMipmaps=!1}else if(Ne){if(Je){const Z=Oe(ae);t.texStorage2D(n.TEXTURE_2D,oe,ge,Z.width,Z.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Ce,ae)}else t.texImage2D(n.TEXTURE_2D,0,ge,Ee,Ce,ae);m(E)&&d(ee),Ae.__version=Q.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function q(P,E,G){if(E.image.length!==6)return;const ee=Te(P,E),J=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+G);const Q=i.get(J);if(J.version!==Q.__version||ee===!0){t.activeTexture(n.TEXTURE0+G);const Ae=Et.getPrimaries(Et.workingColorSpace),le=E.colorSpace===ys?null:Et.getPrimaries(E.colorSpace),me=E.colorSpace===ys||Ae===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let te=0;te<6;te++)!Qe&&!ae?Ee[te]=_(E.image[te],!0,r.maxCubemapSize):Ee[te]=ae?E.image[te].image:E.image[te],Ee[te]=tt(E,Ee[te]);const Ce=Ee[0],ge=s.convert(E.format,E.colorSpace),he=s.convert(E.type),ke=v(E.internalFormat,ge,he,E.colorSpace),Ne=E.isVideoTexture!==!0,Je=Q.__version===void 0||ee===!0,U=J.dataReady;let oe=S(E,Ce);ie(n.TEXTURE_CUBE_MAP,E);let Z;if(Qe){Ne&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,ke,Ce.width,Ce.height);for(let te=0;te<6;te++){Z=Ee[te].mipmaps;for(let de=0;de<Z.length;de++){const pe=Z[de];E.format!==cr?ge!==null?Ne?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,pe.width,pe.height,ge,pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,ke,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,0,0,pe.width,pe.height,ge,he,pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de,ke,pe.width,pe.height,0,ge,he,pe.data)}}}else{if(Z=E.mipmaps,Ne&&Je){Z.length>0&&oe++;const te=Oe(Ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,ke,te.width,te.height)}for(let te=0;te<6;te++)if(ae){Ne?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ee[te].width,Ee[te].height,ge,he,Ee[te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ke,Ee[te].width,Ee[te].height,0,ge,he,Ee[te].data);for(let de=0;de<Z.length;de++){const nt=Z[de].image[te].image;Ne?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,nt.width,nt.height,ge,he,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,ke,nt.width,nt.height,0,ge,he,nt.data)}}else{Ne?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ge,he,Ee[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ke,ge,he,Ee[te]);for(let de=0;de<Z.length;de++){const pe=Z[de];Ne?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,0,0,ge,he,pe.image[te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+te,de+1,ke,ge,he,pe.image[te])}}}m(E)&&d(n.TEXTURE_CUBE_MAP),Q.__version=J.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function re(P,E,G,ee,J,Q){const Ae=s.convert(G.format,G.colorSpace),le=s.convert(G.type),me=v(G.internalFormat,Ae,le,G.colorSpace);if(!i.get(E).__hasExternalTextures){const ae=Math.max(1,E.width>>Q),Ee=Math.max(1,E.height>>Q);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,Q,me,ae,Ee,E.depth,0,Ae,le,null):t.texImage2D(J,Q,me,ae,Ee,0,Ae,le,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Ze(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,J,i.get(G).__webglTexture,0,Ve(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ee,J,i.get(G).__webglTexture,Q),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ne(P,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer){const ee=E.depthTexture,J=ee&&ee.isDepthTexture?ee.type:null,Q=x(E.stencilBuffer,J),Ae=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=Ve(E);Ze(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,Q,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,Q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,P)}else{const ee=E.textures;for(let J=0;J<ee.length;J++){const Q=ee[J],Ae=s.convert(Q.format,Q.colorSpace),le=s.convert(Q.type),me=v(Q.internalFormat,Ae,le,Q.colorSpace),Qe=Ve(E);G&&Ze(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qe,me,E.width,E.height):Ze(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qe,me,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,me,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,J=Ve(E);if(E.depthTexture.format===Ga)Ze(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ee,0);else if(E.depthTexture.format===ul)Ze(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Re(P){const E=i.get(P),G=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const ee=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",J)};ee.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=ee}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");se(E.__webglFramebuffer,P)}else if(G){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=n.createRenderbuffer(),ne(E.__webglDepthbuffer[ee],P,!1);else{const J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[ee];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,Q)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ne(E.__webglDepthbuffer,P,!1);else{const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,J)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(P,E,G){const ee=i.get(P);E!==void 0&&re(ee.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Re(P)}function He(P){const E=P.texture,G=i.get(P),ee=i.get(E);P.addEventListener("dispose",w);const J=P.textures,Q=P.isWebGLCubeRenderTarget===!0,Ae=J.length>1;if(Ae||(ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture()),ee.__version=E.version,o.memory.textures++),Q){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let me=0;me<E.mipmaps.length;me++)G.__webglFramebuffer[le][me]=n.createFramebuffer()}else G.__webglFramebuffer[le]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<E.mipmaps.length;le++)G.__webglFramebuffer[le]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let le=0,me=J.length;le<me;le++){const Qe=i.get(J[le]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=n.createTexture(),o.memory.textures++)}if(P.samples>0&&Ze(P)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const me=J[le];G.__webglColorRenderbuffer[le]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[le]);const Qe=s.convert(me.format,me.colorSpace),ae=s.convert(me.type),Ee=v(me.internalFormat,Qe,ae,me.colorSpace,P.isXRRenderTarget===!0),Ce=Ve(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,Ee,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,G.__webglColorRenderbuffer[le])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ne(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),ie(n.TEXTURE_CUBE_MAP,E);for(let le=0;le<6;le++)if(E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)re(G.__webglFramebuffer[le][me],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else re(G.__webglFramebuffer[le],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let le=0,me=J.length;le<me;le++){const Qe=J[le],ae=i.get(Qe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),ie(n.TEXTURE_2D,Qe),re(G.__webglFramebuffer,P,Qe,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,0),m(Qe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let le=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(le=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,ee.__webglTexture),ie(le,E),E.mipmaps&&E.mipmaps.length>0)for(let me=0;me<E.mipmaps.length;me++)re(G.__webglFramebuffer[me],P,E,n.COLOR_ATTACHMENT0,le,me);else re(G.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,le,0);m(E)&&d(le),t.unbindTexture()}P.depthBuffer&&Re(P)}function De(P){const E=P.textures;for(let G=0,ee=E.length;G<ee;G++){const J=E[G];if(m(J)){const Q=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ae=i.get(J).__webglTexture;t.bindTexture(Q,Ae),d(Q),t.unbindTexture()}}}const Ye=[],L=[];function lt(P){if(P.samples>0){if(Ze(P)===!1){const E=P.textures,G=P.width,ee=P.height;let J=n.COLOR_BUFFER_BIT;const Q=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(P),le=E.length>1;if(le)for(let me=0;me<E.length;me++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let me=0;me<E.length;me++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),le){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[me]);const Qe=i.get(E[me]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Qe,0)}n.blitFramebuffer(0,0,G,ee,0,0,G,ee,J,n.NEAREST),l===!0&&(Ye.length=0,L.length=0,Ye.push(n.COLOR_ATTACHMENT0+me),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Ye.push(Q),L.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<E.length;me++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[me]);const Qe=i.get(E[me]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,Qe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Ve(P){return Math.min(r.maxSamples,P.samples)}function Ze(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function k(P){const E=o.render.frame;c.get(P)!==E&&(c.set(P,E),P.update())}function tt(P,E){const G=P.colorSpace,ee=P.format,J=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Qs&&G!==ys&&(Et.getTransfer(G)===Ot?(ee!==cr||J!==is)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),E}function Oe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(u.width=P.naturalWidth||P.width,u.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(u.width=P.displayWidth,u.height=P.displayHeight):(u.width=P.width,u.height=P.height),u}this.allocateTextureUnit=I,this.resetTextureUnits=T,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=B,this.setTextureCube=j,this.rebindTextures=Me,this.setupRenderTarget=He,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Ze}function $D(n,e){function t(i,r=ys){let s;const o=Et.getTransfer(r);if(i===is)return n.UNSIGNED_BYTE;if(i===z_)return n.UNSIGNED_SHORT_4_4_4_4;if(i===B_)return n.UNSIGNED_SHORT_5_5_5_1;if(i===GE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===HE)return n.BYTE;if(i===VE)return n.SHORT;if(i===qu)return n.UNSIGNED_SHORT;if(i===k_)return n.INT;if(i===Ho)return n.UNSIGNED_INT;if(i===Yr)return n.FLOAT;if(i===nc)return n.HALF_FLOAT;if(i===WE)return n.ALPHA;if(i===XE)return n.RGB;if(i===cr)return n.RGBA;if(i===jE)return n.LUMINANCE;if(i===YE)return n.LUMINANCE_ALPHA;if(i===Ga)return n.DEPTH_COMPONENT;if(i===ul)return n.DEPTH_STENCIL;if(i===qE)return n.RED;if(i===H_)return n.RED_INTEGER;if(i===$E)return n.RG;if(i===V_)return n.RG_INTEGER;if(i===G_)return n.RGBA_INTEGER;if(i===Cf||i===Rf||i===bf||i===Pf)if(o===Ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pf)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gm||i===Wm||i===Xm||i===jm)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xm)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jm)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ym||i===qm||i===$m)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ym||i===qm)return o===Ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===$m)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Km||i===Zm||i===Qm||i===Jm||i===eg||i===tg||i===ng||i===ig||i===rg||i===sg||i===og||i===ag||i===lg||i===ug)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Km)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jm)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===eg)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===tg)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ng)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ig)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rg)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sg)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===og)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ag)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lg)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ug)return o===Ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Lf||i===cg||i===fg)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Lf)return o===Ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cg)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fg)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===KE||i===hg||i===dg||i===pg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Lf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===hg)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ll?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class KD extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kl extends Zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ZD={type:"move"};class up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,g=.005;u.inputState.pinching&&f>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ZD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Kl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const QD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class e3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new fi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rs({vertexShader:QD,fragmentShader:JD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bi(new sc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class t3 extends pl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,g=null;const _=new e3,m=t.getContextAttributes();let d=null,v=null;const x=[],S=[],C=new yt;let w=null;const M=new Ei;M.layers.enable(1),M.viewport=new Ct;const R=new Ei;R.layers.enable(2),R.viewport=new Ct;const N=[M,R],y=new KD;y.layers.enable(1),y.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=x[q];return re===void 0&&(re=new up,x[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=x[q];return re===void 0&&(re=new up,x[q]=re),re.getGripSpace()},this.getHand=function(q){let re=x[q];return re===void 0&&(re=new up,x[q]=re),re.getHandSpace()};function z(q){const re=S.indexOf(q.inputSource);if(re===-1)return;const ne=x[re];ne!==void 0&&(ne.update(q.inputSource,q.frame,u||o),ne.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let q=0;q<x.length;q++){const re=S[q];re!==null&&(S[q]=null,x[q].disconnect(re))}T=null,I=null,_.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,v=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Vo(p.framebufferWidth,p.framebufferHeight,{format:cr,type:is,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,ne=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?ul:Ga,ne=m.stencil?ll:Ho);const Re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Vo(f.textureWidth,f.textureHeight,{format:cr,type:is,depthTexture:new f1(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ke.setContext(r),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(q){for(let re=0;re<q.removed.length;re++){const ne=q.removed[re],se=S.indexOf(ne);se>=0&&(S[se]=null,x[se].disconnect(ne))}for(let re=0;re<q.added.length;re++){const ne=q.added[re];let se=S.indexOf(ne);if(se===-1){for(let Me=0;Me<x.length;Me++)if(Me>=S.length){S.push(ne),se=Me;break}else if(S[Me]===null){S[Me]=ne,se=Me;break}if(se===-1)break}const Re=x[se];Re&&Re.connect(ne)}}const B=new X,j=new X;function D(q,re,ne){B.setFromMatrixPosition(re.matrixWorld),j.setFromMatrixPosition(ne.matrixWorld);const se=B.distanceTo(j),Re=re.projectionMatrix.elements,Me=ne.projectionMatrix.elements,He=Re[14]/(Re[10]-1),De=Re[14]/(Re[10]+1),Ye=(Re[9]+1)/Re[5],L=(Re[9]-1)/Re[5],lt=(Re[8]-1)/Re[0],Ve=(Me[8]+1)/Me[0],Ze=He*lt,k=He*Ve,tt=se/(-lt+Ve),Oe=tt*-lt;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Oe),q.translateZ(tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Re[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const P=He+tt,E=De+tt,G=Ze-Oe,ee=k+(se-Oe),J=Ye*De/E*P,Q=L*De/E*P;q.projectionMatrix.makePerspective(G,ee,J,Q,P,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function K(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let re=q.near,ne=q.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(ne=_.depthFar)),y.near=R.near=M.near=re,y.far=R.far=M.far=ne,(T!==y.near||I!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,I=y.far);const se=q.parent,Re=y.cameras;K(y,se);for(let Me=0;Me<Re.length;Me++)K(Re[Me],se);Re.length===2?D(y,M,R):y.projectionMatrix.copy(M.projectionMatrix),b(q,y,se)};function b(q,re,ne){ne===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(ne.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$u*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let ie=null;function Te(q,re){if(c=re.getViewerPose(u||o),g=re,c!==null){const ne=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let se=!1;ne.length!==y.cameras.length&&(y.cameras.length=0,se=!0);for(let Me=0;Me<ne.length;Me++){const He=ne[Me];let De=null;if(p!==null)De=p.getViewport(He);else{const L=h.getViewSubImage(f,He);De=L.viewport,Me===0&&(e.setRenderTargetTextures(v,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(v))}let Ye=N[Me];Ye===void 0&&(Ye=new Ei,Ye.layers.enable(Me),Ye.viewport=new Ct,N[Me]=Ye),Ye.matrix.fromArray(He.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(He.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(De.x,De.y,De.width,De.height),Me===0&&(y.matrix.copy(Ye.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),se===!0&&y.cameras.push(Ye)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Me=h.getDepthInformation(ne[0]);Me&&Me.isValid&&Me.texture&&_.init(e,Me,r.renderState)}}for(let ne=0;ne<x.length;ne++){const se=S[ne],Re=x[ne];se!==null&&Re!==void 0&&Re.update(se,re,u||o)}ie&&ie(q,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Ke=new c1;Ke.setAnimationLoop(Te),this.setAnimationLoop=function(q){ie=q},this.dispose=function(){}}}const oo=new Dr,n3=new Ht;function i3(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,a1(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===ci&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===ci&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,S=v.envMapRotation;x&&(m.envMap.value=x,oo.copy(S),oo.x*=-1,oo.y*=-1,oo.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oo.y*=-1,oo.z*=-1),m.envMapRotation.value.setFromMatrix4(n3.makeRotationFromEuler(oo)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===ci&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function r3(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,x){const S=x.program;i.uniformBlockBinding(v,S)}function u(v,x){let S=r[v.id];S===void 0&&(g(v),S=c(v),r[v.id]=S,v.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(v,C);const w=e.render.frame;s[v.id]!==w&&(f(v),s[v.id]=w)}function c(v){const x=h();v.__bindingPointIndex=x;const S=n.createBuffer(),C=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,S),S}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],S=v.uniforms,C=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,M=S.length;w<M;w++){const R=Array.isArray(S[w])?S[w]:[S[w]];for(let N=0,y=R.length;N<y;N++){const T=R[N];if(p(T,w,N,C)===!0){const I=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let Y=0;for(let $=0;$<z.length;$++){const B=z[$],j=_(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,I+Y,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,T.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,S,C){const w=v.value,M=x+"_"+S;if(C[M]===void 0)return typeof w=="number"||typeof w=="boolean"?C[M]=w:C[M]=w.clone(),!0;{const R=C[M];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[M]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(v){const x=v.uniforms;let S=0;const C=16;for(let M=0,R=x.length;M<R;M++){const N=Array.isArray(x[M])?x[M]:[x[M]];for(let y=0,T=N.length;y<T;y++){const I=N[y],z=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,$=z.length;Y<$;Y++){const B=z[Y],j=_(B),D=S%C,K=D%j.boundary,b=D+K;S+=K,b!==0&&C-b<j.storage&&(S+=C-b),I.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=j.storage}}}const w=S%C;return w>0&&(S+=C-w),v.__size=S,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class s3{constructor(e={}){const{canvas:t=XR(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yr,this.toneMapping=Bs,this.toneMappingExposure=1;const x=this;let S=!1,C=0,w=0,M=null,R=-1,N=null;const y=new Ct,T=new Ct;let I=null;const z=new et(0);let Y=0,$=t.width,B=t.height,j=1,D=null,K=null;const b=new Ct(0,0,$,B),ie=new Ct(0,0,$,B);let Te=!1;const Ke=new Y_;let q=!1,re=!1;const ne=new Ht,se=new Ht,Re=new X,Me=new Ct,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Ye(){return M===null?j:1}let L=i;function lt(A,F){return t.getContext(A,F)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${F_}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",pe,!1),L===null){const F="webgl2";if(L=lt(F,A),L===null)throw lt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ve,Ze,k,tt,Oe,P,E,G,ee,J,Q,Ae,le,me,Qe,ae,Ee,Ce,ge,he,ke,Ne,Je,U;function oe(){Ve=new cL(L),Ve.init(),Ne=new $D(L,Ve),Ze=new iL(L,Ve,e,Ne),k=new jD(L),Ze.reverseDepthBuffer&&k.buffers.depth.setReversed(!0),tt=new dL(L),Oe=new LD,P=new qD(L,Ve,k,Oe,Ze,Ne,tt),E=new sL(x),G=new uL(x),ee=new xb(L),Je=new tL(L,ee),J=new fL(L,ee,tt,Je),Q=new mL(L,J,ee,tt),ge=new pL(L,Ze,P),ae=new rL(Oe),Ae=new PD(x,E,G,Ve,Ze,Je,ae),le=new i3(x,Oe),me=new ND,Qe=new zD(Ve),Ce=new eL(x,E,G,k,Q,f,l),Ee=new WD(x,Q,Ze),U=new r3(L,tt,Ze,k),he=new nL(L,Ve,tt),ke=new hL(L,Ve,tt),tt.programs=Ae.programs,x.capabilities=Ze,x.extensions=Ve,x.properties=Oe,x.renderLists=me,x.shadowMap=Ee,x.state=k,x.info=tt}oe();const Z=new t3(x,L);this.xr=Z,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=Ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize($,B,!1))},this.getSize=function(A){return A.set($,B)},this.setSize=function(A,F,H=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,B=F,t.width=Math.floor(A*j),t.height=Math.floor(F*j),H===!0&&(t.style.width=A+"px",t.style.height=F+"px"),this.setViewport(0,0,A,F)},this.getDrawingBufferSize=function(A){return A.set($*j,B*j).floor()},this.setDrawingBufferSize=function(A,F,H){$=A,B=F,j=H,t.width=Math.floor(A*H),t.height=Math.floor(F*H),this.setViewport(0,0,A,F)},this.getCurrentViewport=function(A){return A.copy(y)},this.getViewport=function(A){return A.copy(b)},this.setViewport=function(A,F,H,W){A.isVector4?b.set(A.x,A.y,A.z,A.w):b.set(A,F,H,W),k.viewport(y.copy(b).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,F,H,W){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,F,H,W),k.scissor(T.copy(ie).multiplyScalar(j).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(A){k.setScissorTest(Te=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){K=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(A=!0,F=!0,H=!0){let W=0;if(A){let O=!1;if(M!==null){const fe=M.texture.format;O=fe===G_||fe===V_||fe===H_}if(O){const fe=M.texture.type,Se=fe===is||fe===Ho||fe===qu||fe===ll||fe===z_||fe===B_,xe=Ce.getClearColor(),_e=Ce.getClearAlpha(),Fe=xe.r,$e=xe.g,Ue=xe.b;Se?(p[0]=Fe,p[1]=$e,p[2]=Ue,p[3]=_e,L.clearBufferuiv(L.COLOR,0,p)):(g[0]=Fe,g[1]=$e,g[2]=Ue,g[3]=_e,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}F&&(W|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),me.dispose(),Qe.dispose(),Oe.dispose(),E.dispose(),G.dispose(),Q.dispose(),Je.dispose(),U.dispose(),Ae.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",pt),Z.removeEventListener("sessionend",ve),Xe.stop()};function te(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=tt.autoReset,F=Ee.enabled,H=Ee.autoUpdate,W=Ee.needsUpdate,O=Ee.type;oe(),tt.autoReset=A,Ee.enabled=F,Ee.autoUpdate=H,Ee.needsUpdate=W,Ee.type=O}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function nt(A){const F=A.target;F.removeEventListener("dispose",nt),Ie(F)}function Ie(A){it(A),Oe.remove(A)}function it(A){const F=Oe.get(A).programs;F!==void 0&&(F.forEach(function(H){Ae.releaseProgram(H)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,F,H,W,O,fe){F===null&&(F=He);const Se=O.isMesh&&O.matrixWorld.determinant()<0,xe=wt(A,F,H,W,O);k.setMaterial(W,Se);let _e=H.index,Fe=1;if(W.wireframe===!0){if(_e=J.getWireframeAttribute(H),_e===void 0)return;Fe=2}const $e=H.drawRange,Ue=H.attributes.position;let _t=$e.start*Fe,mt=($e.start+$e.count)*Fe;fe!==null&&(_t=Math.max(_t,fe.start*Fe),mt=Math.min(mt,(fe.start+fe.count)*Fe)),_e!==null?(_t=Math.max(_t,0),mt=Math.min(mt,_e.count)):Ue!=null&&(_t=Math.max(_t,0),mt=Math.min(mt,Ue.count));const At=mt-_t;if(At<0||At===1/0)return;Je.setup(O,W,xe,H,_e);let mn,ut=he;if(_e!==null&&(mn=ee.get(_e),ut=ke,ut.setIndex(mn)),O.isMesh)W.wireframe===!0?(k.setLineWidth(W.wireframeLinewidth*Ye()),ut.setMode(L.LINES)):ut.setMode(L.TRIANGLES);else if(O.isLine){let We=W.linewidth;We===void 0&&(We=1),k.setLineWidth(We*Ye()),O.isLineSegments?ut.setMode(L.LINES):O.isLineLoop?ut.setMode(L.LINE_LOOP):ut.setMode(L.LINE_STRIP)}else O.isPoints?ut.setMode(L.POINTS):O.isSprite&&ut.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ut.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))ut.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const We=O._multiDrawStarts,Mn=O._multiDrawCounts,St=O._multiDrawCount,Ji=_e?ee.get(_e).bytesPerElement:1,jo=Oe.get(W).currentProgram.getUniforms();for(let pi=0;pi<St;pi++)jo.setValue(L,"_gl_DrawID",pi),ut.render(We[pi]/Ji,Mn[pi])}else if(O.isInstancedMesh)ut.renderInstances(_t,At,O.count);else if(H.isInstancedBufferGeometry){const We=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Mn=Math.min(H.instanceCount,We);ut.renderInstances(_t,At,Mn)}else ut.render(_t,At)};function Ge(A,F,H){A.transparent===!0&&A.side===Tr&&A.forceSinglePass===!1?(A.side=ci,A.needsUpdate=!0,Jt(A,F,H),A.side=Ys,A.needsUpdate=!0,Jt(A,F,H),A.side=Tr):Jt(A,F,H)}this.compile=function(A,F,H=null){H===null&&(H=A),m=Qe.get(H),m.init(F),v.push(m),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),A!==H&&A.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return A.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const fe=O.material;if(fe)if(Array.isArray(fe))for(let Se=0;Se<fe.length;Se++){const xe=fe[Se];Ge(xe,H,O),W.add(xe)}else Ge(fe,H,O),W.add(fe)}),v.pop(),m=null,W},this.compileAsync=function(A,F,H=null){const W=this.compile(A,F,H);return new Promise(O=>{function fe(){if(W.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&W.delete(Se)}),W.size===0){O(A);return}setTimeout(fe,10)}Ve.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let be=null;function we(A){be&&be(A)}function pt(){Xe.stop()}function ve(){Xe.start()}const Xe=new c1;Xe.setAnimationLoop(we),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(A){be=A,Z.setAnimationLoop(A),A===null?Xe.stop():Xe.start()},Z.addEventListener("sessionstart",pt),Z.addEventListener("sessionend",ve),this.render=function(A,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(F),F=Z.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,F,M),m=Qe.get(A,v.length),m.init(F),v.push(m),se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Ke.setFromProjectionMatrix(se),re=this.localClippingEnabled,q=ae.init(this.clippingPlanes,re),_=me.get(A,d.length),_.init(),d.push(_),Z.enabled===!0&&Z.isPresenting===!0){const fe=x.xr.getDepthSensingMesh();fe!==null&&ze(fe,F,-1/0,x.sortObjects)}ze(A,F,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,K),De=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,De&&Ce.addToRenderList(_,A),this.info.render.frame++,q===!0&&ae.beginShadows();const H=m.state.shadowsArray;Ee.render(H,A,F),q===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,O=_.transmissive;if(m.setupLights(),F.isArrayCamera){const fe=F.cameras;if(O.length>0)for(let Se=0,xe=fe.length;Se<xe;Se++){const _e=fe[Se];Qt(W,O,A,_e)}De&&Ce.render(A);for(let Se=0,xe=fe.length;Se<xe;Se++){const _e=fe[Se];qe(_,A,_e,_e.viewport)}}else O.length>0&&Qt(W,O,A,F),De&&Ce.render(A),qe(_,A,F);M!==null&&(P.updateMultisampleRenderTarget(M),P.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(x,A,F),Je.resetDefaultState(),R=-1,N=null,v.pop(),v.length>0?(m=v[v.length-1],q===!0&&ae.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ze(A,F,H,W){if(A.visible===!1)return;if(A.layers.test(F.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(F);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ke.intersectsSprite(A)){W&&Me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(se);const Se=Q.update(A),xe=A.material;xe.visible&&_.push(A,Se,xe,H,Me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ke.intersectsObject(A))){const Se=Q.update(A),xe=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Me.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Me.copy(Se.boundingSphere.center)),Me.applyMatrix4(A.matrixWorld).applyMatrix4(se)),Array.isArray(xe)){const _e=Se.groups;for(let Fe=0,$e=_e.length;Fe<$e;Fe++){const Ue=_e[Fe],_t=xe[Ue.materialIndex];_t&&_t.visible&&_.push(A,Se,_t,H,Me.z,Ue)}}else xe.visible&&_.push(A,Se,xe,H,Me.z,null)}}const fe=A.children;for(let Se=0,xe=fe.length;Se<xe;Se++)ze(fe[Se],F,H,W)}function qe(A,F,H,W){const O=A.opaque,fe=A.transmissive,Se=A.transparent;m.setupLightsView(H),q===!0&&ae.setGlobalState(x.clippingPlanes,H),W&&k.viewport(y.copy(W)),O.length>0&&st(O,F,H),fe.length>0&&st(fe,F,H),Se.length>0&&st(Se,F,H),k.buffers.depth.setTest(!0),k.buffers.depth.setMask(!0),k.buffers.color.setMask(!0),k.setPolygonOffset(!1)}function Qt(A,F,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Vo(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?nc:is,minFilter:Eo,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const fe=m.state.transmissionRenderTarget[W.id],Se=W.viewport||y;fe.setSize(Se.z,Se.w);const xe=x.getRenderTarget();x.setRenderTarget(fe),x.getClearColor(z),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),De&&Ce.render(H);const _e=x.toneMapping;x.toneMapping=Bs;const Fe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),q===!0&&ae.setGlobalState(x.clippingPlanes,W),st(A,H,W),P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Ue=0,_t=F.length;Ue<_t;Ue++){const mt=F[Ue],At=mt.object,mn=mt.geometry,ut=mt.material,We=mt.group;if(ut.side===Tr&&At.layers.test(W.layers)){const Mn=ut.side;ut.side=ci,ut.needsUpdate=!0,kt(At,H,W,mn,ut,We),ut.side=Mn,ut.needsUpdate=!0,$e=!0}}$e===!0&&(P.updateMultisampleRenderTarget(fe),P.updateRenderTargetMipmap(fe))}x.setRenderTarget(xe),x.setClearColor(z,Y),Fe!==void 0&&(W.viewport=Fe),x.toneMapping=_e}function st(A,F,H){const W=F.isScene===!0?F.overrideMaterial:null;for(let O=0,fe=A.length;O<fe;O++){const Se=A[O],xe=Se.object,_e=Se.geometry,Fe=W===null?Se.material:W,$e=Se.group;xe.layers.test(H.layers)&&kt(xe,F,H,_e,Fe,$e)}}function kt(A,F,H,W,O,fe){A.onBeforeRender(x,F,H,W,O,fe),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,F,H,W,A,fe),O.transparent===!0&&O.side===Tr&&O.forceSinglePass===!1?(O.side=ci,O.needsUpdate=!0,x.renderBufferDirect(H,F,W,O,A,fe),O.side=Ys,O.needsUpdate=!0,x.renderBufferDirect(H,F,W,O,A,fe),O.side=Tr):x.renderBufferDirect(H,F,W,O,A,fe),A.onAfterRender(x,F,H,W,O,fe)}function Jt(A,F,H){F.isScene!==!0&&(F=He);const W=Oe.get(A),O=m.state.lights,fe=m.state.shadowsArray,Se=O.state.version,xe=Ae.getParameters(A,O.state,fe,F,H),_e=Ae.getProgramCacheKey(xe);let Fe=W.programs;W.environment=A.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(A.isMeshStandardMaterial?G:E).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?F.environmentRotation:A.envMapRotation,Fe===void 0&&(A.addEventListener("dispose",nt),Fe=new Map,W.programs=Fe);let $e=Fe.get(_e);if($e!==void 0){if(W.currentProgram===$e&&W.lightsStateVersion===Se)return Rt(A,xe),$e}else xe.uniforms=Ae.getUniforms(A),A.onBeforeCompile(xe,x),$e=Ae.acquireProgram(xe,_e),Fe.set(_e,$e),W.uniforms=xe.uniforms;const Ue=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=ae.uniform),Rt(A,xe),W.needsLights=It(A),W.lightsStateVersion=Se,W.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=$e,W.uniformsList=null,$e}function Nt(A){if(A.uniformsList===null){const F=A.currentProgram.getUniforms();A.uniformsList=Nf.seqWithValue(F.seq,A.uniforms)}return A.uniformsList}function Rt(A,F){const H=Oe.get(A);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function wt(A,F,H,W,O){F.isScene!==!0&&(F=He),P.resetTextureUnits();const fe=F.fog,Se=W.isMeshStandardMaterial?F.environment:null,xe=M===null?x.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Qs,_e=(W.isMeshStandardMaterial?G:E).get(W.envMap||Se),Fe=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,$e=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!H.morphAttributes.position,_t=!!H.morphAttributes.normal,mt=!!H.morphAttributes.color;let At=Bs;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(At=x.toneMapping);const mn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ut=mn!==void 0?mn.length:0,We=Oe.get(W),Mn=m.state.lights;if(q===!0&&(re===!0||A!==N)){const ki=A===N&&W.id===R;ae.setState(W,A,ki)}let St=!1;W.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Mn.state.version||We.outputColorSpace!==xe||O.isBatchedMesh&&We.batching===!1||!O.isBatchedMesh&&We.batching===!0||O.isBatchedMesh&&We.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&We.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&We.instancing===!1||!O.isInstancedMesh&&We.instancing===!0||O.isSkinnedMesh&&We.skinning===!1||!O.isSkinnedMesh&&We.skinning===!0||O.isInstancedMesh&&We.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&We.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&We.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&We.instancingMorph===!1&&O.morphTexture!==null||We.envMap!==_e||W.fog===!0&&We.fog!==fe||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ae.numPlanes||We.numIntersection!==ae.numIntersection)||We.vertexAlphas!==Fe||We.vertexTangents!==$e||We.morphTargets!==Ue||We.morphNormals!==_t||We.morphColors!==mt||We.toneMapping!==At||We.morphTargetsCount!==ut)&&(St=!0):(St=!0,We.__version=W.version);let Ji=We.currentProgram;St===!0&&(Ji=Jt(W,F,O));let jo=!1,pi=!1,Wh=!1;const en=Ji.getUniforms(),os=We.uniforms;if(k.useProgram(Ji.program)&&(jo=!0,pi=!0,Wh=!0),W.id!==R&&(R=W.id,pi=!0),jo||N!==A){Ze.reverseDepthBuffer?(ne.copy(A.projectionMatrix),YR(ne),qR(ne),en.setValue(L,"projectionMatrix",ne)):en.setValue(L,"projectionMatrix",A.projectionMatrix),en.setValue(L,"viewMatrix",A.matrixWorldInverse);const ki=en.map.cameraPosition;ki!==void 0&&ki.setValue(L,Re.setFromMatrixPosition(A.matrixWorld)),Ze.logarithmicDepthBuffer&&en.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&en.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,pi=!0,Wh=!0)}if(O.isSkinnedMesh){en.setOptional(L,O,"bindMatrix"),en.setOptional(L,O,"bindMatrixInverse");const ki=O.skeleton;ki&&(ki.boneTexture===null&&ki.computeBoneTexture(),en.setValue(L,"boneTexture",ki.boneTexture,P))}O.isBatchedMesh&&(en.setOptional(L,O,"batchingTexture"),en.setValue(L,"batchingTexture",O._matricesTexture,P),en.setOptional(L,O,"batchingIdTexture"),en.setValue(L,"batchingIdTexture",O._indirectTexture,P),en.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&en.setValue(L,"batchingColorTexture",O._colorsTexture,P));const Xh=H.morphAttributes;if((Xh.position!==void 0||Xh.normal!==void 0||Xh.color!==void 0)&&ge.update(O,H,Ji),(pi||We.receiveShadow!==O.receiveShadow)&&(We.receiveShadow=O.receiveShadow,en.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(os.envMap.value=_e,os.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(os.envMapIntensity.value=F.environmentIntensity),pi&&(en.setValue(L,"toneMappingExposure",x.toneMappingExposure),We.needsLights&&di(os,Wh),fe&&W.fog===!0&&le.refreshFogUniforms(os,fe),le.refreshMaterialUniforms(os,W,j,B,m.state.transmissionRenderTarget[A.id]),Nf.upload(L,Nt(We),os,P)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Nf.upload(L,Nt(We),os,P),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&en.setValue(L,"center",O.center),en.setValue(L,"modelViewMatrix",O.modelViewMatrix),en.setValue(L,"normalMatrix",O.normalMatrix),en.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const ki=W.uniformsGroups;for(let jh=0,x1=ki.length;jh<x1;jh++){const J_=ki[jh];U.update(J_,Ji),U.bind(J_,Ji)}}return Ji}function di(A,F){A.ambientLightColor.needsUpdate=F,A.lightProbe.needsUpdate=F,A.directionalLights.needsUpdate=F,A.directionalLightShadows.needsUpdate=F,A.pointLights.needsUpdate=F,A.pointLightShadows.needsUpdate=F,A.spotLights.needsUpdate=F,A.spotLightShadows.needsUpdate=F,A.rectAreaLights.needsUpdate=F,A.hemisphereLights.needsUpdate=F}function It(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,F,H){Oe.get(A.texture).__webglTexture=F,Oe.get(A.depthTexture).__webglTexture=H;const W=Oe.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,F){const H=Oe.get(A);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(A,F=0,H=0){M=A,C=F,w=H;let W=!0,O=null,fe=!1,Se=!1;if(A){const _e=Oe.get(A);if(_e.__useDefaultFramebuffer!==void 0)k.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(_e.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(_e.__hasExternalTextures)P.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ue=A.depthTexture;if(_e.__boundDepthTexture!==Ue){if(Ue!==null&&Oe.has(Ue)&&(A.width!==Ue.image.width||A.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Se=!0);const $e=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray($e[F])?O=$e[F][H]:O=$e[F],fe=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?O=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?O=$e[H]:O=$e,y.copy(A.viewport),T.copy(A.scissor),I=A.scissorTest}else y.copy(b).multiplyScalar(j).floor(),T.copy(ie).multiplyScalar(j).floor(),I=Te;if(k.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&k.drawBuffers(A,O),k.viewport(y),k.scissor(T),k.setScissorTest(I),fe){const _e=Oe.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,H)}else if(Se){const _e=Oe.get(A.texture),Fe=F||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,_e.__webglTexture,H||0,Fe)}R=-1},this.readRenderTargetPixels=function(A,F,H,W,O,fe,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se]),xe){k.bindFramebuffer(L.FRAMEBUFFER,xe);try{const _e=A.texture,Fe=_e.format,$e=_e.type;if(!Ze.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=A.width-W&&H>=0&&H<=A.height-O&&L.readPixels(F,H,W,O,Ne.convert(Fe),Ne.convert($e),fe)}finally{const _e=M!==null?Oe.get(M).__webglFramebuffer:null;k.bindFramebuffer(L.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(A,F,H,W,O,fe,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(xe=xe[Se]),xe){const _e=A.texture,Fe=_e.format,$e=_e.type;if(!Ze.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=A.width-W&&H>=0&&H<=A.height-O){k.bindFramebuffer(L.FRAMEBUFFER,xe);const Ue=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(F,H,W,O,Ne.convert(Fe),Ne.convert($e),0);const _t=M!==null?Oe.get(M).__webglFramebuffer:null;k.bindFramebuffer(L.FRAMEBUFFER,_t);const mt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jR(L,mt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ue),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.deleteBuffer(Ue),L.deleteSync(mt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,F=null,H=0){A.isTexture!==!0&&(Df("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-H),O=Math.floor(A.image.width*W),fe=Math.floor(A.image.height*W),Se=F!==null?F.x:0,xe=F!==null?F.y:0;P.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,Se,xe,O,fe),k.unbindTexture()},this.copyTextureToTexture=function(A,F,H=null,W=null,O=0){A.isTexture!==!0&&(Df("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],F=arguments[2],O=arguments[3]||0,H=null);let fe,Se,xe,_e,Fe,$e;H!==null?(fe=H.max.x-H.min.x,Se=H.max.y-H.min.y,xe=H.min.x,_e=H.min.y):(fe=A.image.width,Se=A.image.height,xe=0,_e=0),W!==null?(Fe=W.x,$e=W.y):(Fe=0,$e=0);const Ue=Ne.convert(F.format),_t=Ne.convert(F.type);P.setTexture2D(F,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),At=L.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=L.getParameter(L.UNPACK_SKIP_PIXELS),ut=L.getParameter(L.UNPACK_SKIP_ROWS),We=L.getParameter(L.UNPACK_SKIP_IMAGES),Mn=A.isCompressedTexture?A.mipmaps[O]:A.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Mn.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mn.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,xe),L.pixelStorei(L.UNPACK_SKIP_ROWS,_e),A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,O,Fe,$e,fe,Se,Ue,_t,Mn.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,O,Fe,$e,Mn.width,Mn.height,Ue,Mn.data):L.texSubImage2D(L.TEXTURE_2D,O,Fe,$e,fe,Se,Ue,_t,Mn),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ut),L.pixelStorei(L.UNPACK_SKIP_IMAGES,We),O===0&&F.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),k.unbindTexture()},this.copyTextureToTexture3D=function(A,F,H=null,W=null,O=0){A.isTexture!==!0&&(Df("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,A=arguments[2],F=arguments[3],O=arguments[4]||0);let fe,Se,xe,_e,Fe,$e,Ue,_t,mt;const At=A.isCompressedTexture?A.mipmaps[O]:A.image;H!==null?(fe=H.max.x-H.min.x,Se=H.max.y-H.min.y,xe=H.max.z-H.min.z,_e=H.min.x,Fe=H.min.y,$e=H.min.z):(fe=At.width,Se=At.height,xe=At.depth,_e=0,Fe=0,$e=0),W!==null?(Ue=W.x,_t=W.y,mt=W.z):(Ue=0,_t=0,mt=0);const mn=Ne.convert(F.format),ut=Ne.convert(F.type);let We;if(F.isData3DTexture)P.setTexture3D(F,0),We=L.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)P.setTexture2DArray(F,0),We=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);const Mn=L.getParameter(L.UNPACK_ROW_LENGTH),St=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ji=L.getParameter(L.UNPACK_SKIP_PIXELS),jo=L.getParameter(L.UNPACK_SKIP_ROWS),pi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,Fe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$e),A.isDataTexture||A.isData3DTexture?L.texSubImage3D(We,O,Ue,_t,mt,fe,Se,xe,mn,ut,At.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(We,O,Ue,_t,mt,fe,Se,xe,mn,At.data):L.texSubImage3D(We,O,Ue,_t,mt,fe,Se,xe,mn,ut,At),L.pixelStorei(L.UNPACK_ROW_LENGTH,Mn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ji),L.pixelStorei(L.UNPACK_SKIP_ROWS,jo),L.pixelStorei(L.UNPACK_SKIP_IMAGES,pi),O===0&&F.generateMipmaps&&L.generateMipmap(We),k.unbindTexture()},this.initRenderTarget=function(A){Oe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),k.unbindTexture()},this.resetState=function(){C=0,w=0,M=null,k.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===W_?"display-p3":"srgb",t.unpackColorSpace=Et.workingColorSpace===Hh?"display-p3":"srgb"}}class $_{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(e),this.density=t}clone(){return new $_(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class o3 extends Zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dr,this.environmentIntensity=1,this.environmentRotation=new Dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class g1 extends gl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Gx=new Ht,gg=new n1,rf=new Vh,sf=new X;class a3 extends Zn{constructor(e=new mr,t=new g1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rf.copy(i.boundingSphere),rf.applyMatrix4(r),rf.radius+=s,e.ray.intersectsSphere(rf)===!1)return;Gx.copy(r).invert(),gg.copy(e.ray).applyMatrix4(Gx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=u.getX(g);sf.fromBufferAttribute(h,m),Wx(sf,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,_=p;g<_;g++)sf.fromBufferAttribute(h,g),Wx(sf,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wx(n,e,t,i,r,s,o){const a=gg.distanceSqToPoint(n);if(a<t){const l=new X;gg.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class K_ extends mr{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let h=e;const f=(t-e)/r,p=new X,g=new yt;for(let _=0;_<=r;_++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=h*Math.cos(d),p.y=h*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,c.push(g.x,g.y)}h+=f}for(let _=0;_<r;_++){const m=_*(i+1);for(let d=0;d<i;d++){const v=d+m,x=v,S=v+i+1,C=v+i+2,w=v+1;a.push(x,S,w),a.push(S,C,w)}}this.setIndex(a),this.setAttribute("position",new Di(l,3)),this.setAttribute("normal",new Di(u,3)),this.setAttribute("uv",new Di(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new K_(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Z_ extends mr{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new X,f=new X,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let C=0;C<=t;C++){const w=C/t;h.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(w+S,1-x),v.push(u++)}c.push(v)}for(let d=0;d<i;d++)for(let v=0;v<t;v++){const x=c[d][v+1],S=c[d][v],C=c[d+1][v],w=c[d+1][v+1];(d!==0||o>0)&&p.push(x,S,w),(d!==i-1||l<Math.PI)&&p.push(S,C,w)}this.setIndex(p),this.setAttribute("position",new Di(g,3)),this.setAttribute("normal",new Di(_,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Z_(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xx extends gl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ZE,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _1 extends Zn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const cp=new Ht,jx=new X,Yx=new X;class l3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Y_,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;jx.setFromMatrixPosition(e.matrixWorld),t.position.copy(jx),Yx.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yx),t.updateMatrixWorld(),cp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cp),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const qx=new Ht,Ul=new X,fp=new X;class u3 extends l3{constructor(){super(new Ei(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new X(1,0,0),new X(-1,0,0),new X(0,0,1),new X(0,0,-1),new X(0,1,0),new X(0,-1,0)],this._cubeUps=[new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,1,0),new X(0,0,1),new X(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ul.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ul),fp.copy(i.position),fp.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fp),i.updateMatrixWorld(),r.makeTranslation(-Ul.x,-Ul.y,-Ul.z),qx.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qx)}}class c3 extends _1{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new u3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class f3 extends _1{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class h3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$x(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$x();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $x(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:F_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=F_);const d3="_hero_cezcx_1",p3="_canvas_cezcx_9",m3="_overlay_cezcx_18",g3="_heroTitle_cezcx_33",_3="_heroSubtitle_cezcx_45",v3="_playBtn_cezcx_54",x3="_playLabel_cezcx_73",y3="_modeSwitcher_cezcx_86",S3="_modeBtn_cezcx_102",M3="_modeBtnActive_cezcx_122",E3="_pauseBtn_cezcx_130",w3="_legend_cezcx_155",T3="_legendRow_cezcx_173",A3="_swatch_cezcx_179",C3="_legendLabel_cezcx_187",R3="_scrollHint_cezcx_195",b3="_scrollText_cezcx_208",Vt={hero:d3,canvas:p3,overlay:m3,heroTitle:g3,heroSubtitle:_3,playBtn:v3,playLabel:x3,modeSwitcher:y3,modeBtn:S3,modeBtnActive:M3,pauseBtn:E3,legend:w3,legendRow:T3,swatch:A3,legendLabel:C3,scrollHint:R3,scrollText:b3},P3=`
  uniform float uTime;
  uniform float uAmplitude;
  uniform float uFlat;
  varying float vElev;
  varying vec2  vUv;

  void main() {
    vUv = uv;
    vec3 pos = position;

    float waves =
      sin(pos.x * 0.28 + uTime * 0.55) * cos(pos.z * 0.28 + uTime * 0.42) * 1.6
    + sin(pos.x * 0.65 + uTime * 0.90) * cos(pos.z * 0.50 + uTime * 0.35) * 0.7;

    float elev = waves * (uAmplitude * 2.8 + 0.4) * (1.0 - uFlat);
    pos.y += elev;
    vElev = elev;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,L3=`
  uniform vec3  uColor;
  uniform float uAmplitude;
  varying float vElev;

  void main() {
    float t = clamp(vElev * 0.18 + 0.5, 0.0, 1.0);
    vec3 low  = vec3(0.040, 0.165, 0.160); /* --teal */
    vec3 high = vec3(0.165, 0.615, 0.565); /* --teal-bright */
    vec3 col  = mix(low, high, t) + uAmplitude * 0.15;
    gl_FragColor = vec4(col, 0.75);
  }
`,Ol=128,Kx=10,Zx=3e3,D3=ue.forwardRef(function({onModeChange:e},t){const[i,r]=ue.useState(!1),[s,o]=ue.useState(!1),[a,l]=ue.useState("amplitude"),u=ue.useRef(null),c=ue.useRef(null),h=ue.useRef(null),f=ue.useRef(null),p=ue.useRef(null),g=ue.useRef(null),_=ue.useRef(null),m=ue.useRef(null),d=ue.useRef(null),v=ue.useRef(null),x=ue.useRef(new h3),S=ue.useRef(null),C=ue.useRef(null),w=ue.useRef(null),M=ue.useRef(null),R=ue.useRef(null),N=ue.useRef([]),y=ue.useRef(null),T=ue.useRef(null),I=ue.useRef(null),z=ue.useRef([]),Y=ue.useRef(null),$=ue.useRef(null),B=ue.useRef(null),j=ue.useRef(null),D=ue.useRef(.05),K=ue.useRef(0),b=ue.useRef(0),ie=ue.useRef("amplitude"),Te=ue.useRef({sphereScale:1,barOpacity:0,planeFlat:0,camZ:14,camY:4.5});ue.useImperativeHandle(t,()=>({setMode(ne){Ke(ne)}}));function Ke(ne){if(ie.current===ne)return;ie.current=ne,l(ne),e&&e(ne);const se=Te.current;ne==="amplitude"?gt.to(se,{sphereScale:1,barOpacity:0,planeFlat:0,camZ:14,camY:4.5,duration:1.2,ease:"power2.inOut"}):ne==="fft"?gt.to(se,{sphereScale:.25,barOpacity:1,planeFlat:1,camZ:18,camY:5.5,duration:1.2,ease:"power2.inOut"}):gt.to(se,{sphereScale:.7,barOpacity:1,planeFlat:0,camZ:16,camY:5,duration:1.2,ease:"power2.inOut"})}ue.useEffect(()=>{const ne=u.current,se=ne.clientWidth,Re=ne.clientHeight,Me=new s3({canvas:ne,antialias:!0,alpha:!1});Me.setSize(se,Re,!1),Me.setPixelRatio(Math.min(window.devicePixelRatio,2)),Me.shadowMap.enabled=!1,m.current=Me;const He=new o3;He.background=new et(396559),He.fog=new $_(396559,.018),d.current=He;const De=new Ei(60,se/Re,.1,300);De.position.set(0,4.5,14),De.lookAt(0,0,0),v.current=De;const Ye=new f3(16117216,.25);He.add(Ye);const L=new c3(15245344,2.5,35);L.position.set(0,6,0),He.add(L),Y.current=L;const lt=new sc(200,200,120,120);lt.rotateX(-Math.PI/2);const Ve=new rs({uniforms:{uTime:{value:0},uAmplitude:{value:0},uFlat:{value:0},uColor:{value:new et(1727578)}},vertexShader:P3,fragmentShader:L3,wireframe:!0,transparent:!0}),Ze=new bi(lt,Ve);Ze.position.y=-1.5,He.add(Ze),R.current=Ve;const k=new mr,tt=new Float32Array(Zx*3);for(let ge=0;ge<Zx;ge++){const he=Math.random()*Math.PI*2,ke=Math.random()*Math.PI*.48,Ne=80+Math.random()*60;tt[ge*3]=Ne*Math.sin(ke)*Math.cos(he),tt[ge*3+1]=Ne*Math.cos(ke)+2,tt[ge*3+2]=Ne*Math.sin(ke)*Math.sin(he)}k.setAttribute("position",new dr(tt,3));const Oe=new g1({color:16117216,size:.18,transparent:!0,opacity:.7,sizeAttenuation:!0}),P=new a3(k,Oe);He.add(P),T.current=P,I.current=Oe;const E=new Z_(1.6,64,32),G=E.attributes.position.array.slice(),ee=new Xx({color:new et(2792847),emissive:new et(871751),emissiveIntensity:.4,roughness:.55,metalness:.35}),J=new bi(E,ee);J.position.y=.5,He.add(J),C.current=J,w.current=E,M.current=G;const Q=new Kl;He.add(Q),y.current=Q;const Ae=[];for(let ge=0;ge<Ol;ge++){const he=ge/Ol*Math.PI*2,ke=ge<Ol/2,Ne=new _l(.09,1,.09);Ne.translate(0,.5,0);const Je=new Xx({color:ke?new et(16729156):new et(16755200),emissive:ke?new et(16720384):new et(16742144),emissiveIntensity:2.2,roughness:.4,metalness:.3,transparent:!0,opacity:0}),U=new bi(Ne,Je);U.position.set(Math.sin(he)*Kx,-1.5,Math.cos(he)*Kx),U.scale.y=.02,Q.add(U),Ae.push(U)}N.current=Ae;function le(){const ge=ne.clientWidth,he=ne.clientHeight;De.aspect=ge/he,De.updateProjectionMatrix(),Me.setSize(ge,he,!1)}window.addEventListener("resize",le);const me=new et(2792847),Qe=new et(15245344),ae=new et(871751),Ee=new et(15245344);function Ce(){S.current=requestAnimationFrame(Ce);const ge=x.current.getElapsedTime(),he=Te.current;let ke=(Math.sin(ge*.85)*.5+.5)*.18+.04,Ne=!1,Je=null;if(B.current&&j.current){B.current.getByteFrequencyData(j.current),Je=j.current;let Ie=0;for(let we=0;we<Je.length;we++)Ie+=Je[we];ke=Ie/Je.length/255;let it=0;for(let we=0;we<8;we++)it+=Je[we];const Ge=it/8/255;D.current=D.current*.92+Ge*.08,Ge>D.current*1.25&&Ge>.15&&K.current<=0&&(Ne=!0,K.current=14,console.log("BEAT",Ge.toFixed(3),"avg",D.current.toFixed(3))),K.current>0&&K.current--}L.intensity=1.5+ke*4;const U=Math.sin(ge*.09)*1.8,oe=Math.sin(ge*.065)*.6;De.position.x+=(he.camZ*0+U-De.position.x)*.03,De.position.y+=(he.camY+oe-De.position.y)*.04,De.position.z+=(he.camZ-De.position.z)*.04,De.lookAt(0,.5,0),Ve.uniforms.uTime.value=ge,Ve.uniforms.uAmplitude.value=ke,Ve.uniforms.uFlat.value=he.planeFlat;const te=Math.max(.4,he.sphereScale)*(1+ke*.35);J.scale.setScalar(Ud.lerp(J.scale.x,te,.1));const de=w.current.attributes.position,pe=M.current;for(let Ie=0;Ie<de.count;Ie++){const it=pe[Ie*3],Ge=pe[Ie*3+1],be=pe[Ie*3+2],we=Math.sqrt(it*it+Ge*Ge+be*be)||1,pt=it/we,ve=Ge/we,Xe=be/we,qe=Math.sin(it*2.8+ge*1.3)*Math.cos(Ge*2.8+ge*.95)*Math.sin(be*2.8+ge*.75)*ke*.7;de.setXYZ(Ie,it+pt*qe,Ge+ve*qe,be+Xe*qe)}if(de.needsUpdate=!0,w.current.computeVertexNormals(),Ne)J.material.color.copy(Qe),J.material.emissive.copy(Ee),J.material.emissiveIntensity=5,b.current=30;else if(b.current>0){b.current--;const Ie=b.current/30;J.material.color.lerpColors(me,Qe,Ie),J.material.emissive.lerpColors(ae,Ee,Ie),J.material.emissiveIntensity=.25+ke*1.2+Ie*4}else{const Ie=ie.current;Ie==="amplitude"?(J.material.color.setHex(2792847),J.material.emissive.setHex(2792847),J.material.emissiveIntensity=.3+ke*2.5):Ie==="fft"?(J.material.color.setHex(1727578),J.material.emissive.setHex(1727578),J.material.emissiveIntensity=.6):(J.material.color.copy(me),J.material.emissive.copy(ae),J.material.emissiveIntensity=Math.max(.4,.25+ke*1.2))}const nt=he.barOpacity;for(let Ie=0;Ie<Ol;Ie++){const it=N.current[Ie];if(it.material.opacity=Ud.lerp(it.material.opacity,nt,.08),Je&&nt>.01){const Ge=Math.floor(Ie/Ol*(Je.length*.8)),be=Je[Ge]/255;it.scale.y=Ud.lerp(it.scale.y,.02+be*6,.22)}}if(P.rotation.y+=6e-5,Ne&&ie.current==="beats"&&(Oe.color.setHex(15245344),gt.delayedCall(.18,()=>{I.current&&I.current.color.setHex(16117216)})),Ne&&ie.current==="beats"){gt.to(De.position,{x:De.position.x+(Math.random()-.5)*.4,y:De.position.y+(Math.random()-.5)*.25,duration:.08,yoyo:!0,repeat:1,ease:"power1.out"});const Ie=new K_(.05,.28,72),it=new j_({color:15245344,side:Tr,transparent:!0,opacity:.85}),Ge=new bi(Ie,it);Ge.rotation.x=-Math.PI/2,Ge.position.y=-1.45,He.add(Ge),z.current.push({mesh:Ge,age:0})}z.current=z.current.filter(Ie=>{Ie.age++;const it=Ie.age/45;return Ie.mesh.scale.setScalar(it*10),Ie.mesh.material.opacity=.98*(1-it*.75),Ie.age>=45?(He.remove(Ie.mesh),Ie.mesh.geometry.dispose(),Ie.mesh.material.dispose(),!1):!0}),Me.render(He,De)}return Ce(),()=>{cancelAnimationFrame(S.current),window.removeEventListener("resize",le),Me.dispose(),E.dispose(),lt.dispose(),k.dispose(),Ae.forEach(ge=>{ge.geometry.dispose(),ge.material.dispose()}),z.current.forEach(ge=>{He.remove(ge.mesh),ge.mesh.geometry.dispose(),ge.mesh.material.dispose()})}},[]),ue.useEffect(()=>{if(!h.current)return;gt.set([h.current,f.current,p.current],{opacity:0,y:24});const ne=gt.timeline({delay:.3});ne.to(h.current,{opacity:1,y:0,duration:.9,ease:"power3.out"},.5),ne.to(f.current,{opacity:1,y:0,duration:.7,ease:"power3.out"},1),ne.to(p.current,{opacity:1,y:0,duration:.6,ease:"power3.out"},1.5)},[]);async function q(){if($.current)return;const ne=c.current,se=new AudioContext;$.current=se;const Re=se.createAnalyser();Re.fftSize=512,Re.smoothingTimeConstant=.82,B.current=Re,j.current=new Uint8Array(Re.frequencyBinCount),se.createMediaElementSource(ne).connect(Re),Re.connect(se.destination),se.state==="suspended"&&await se.resume(),await ne.play(),o(!0),r(!0),gt.to(g.current,{opacity:0,duration:.9,ease:"power2.in"})}async function re(){var ne;if(!i)await q();else{const se=c.current;se.paused?(await((ne=$.current)==null?void 0:ne.resume()),await se.play(),o(!0)):(se.pause(),o(!1))}}return V.jsxs("section",{className:Vt.hero,id:"hero",children:[V.jsx("canvas",{ref:u,className:Vt.canvas}),V.jsx("audio",{ref:c,src:"/balochi_audio.wav",loop:!0,preload:"auto"}),V.jsxs("div",{ref:g,className:Vt.overlay,children:[V.jsx("h1",{ref:h,className:Vt.heroTitle,children:"Ustad Noor Bakhsh"}),V.jsx("p",{ref:f,className:Vt.heroSubtitle,children:"Balochi Audio Visualisers  ·  Week 5"}),V.jsxs("button",{ref:p,className:Vt.playBtn,onClick:re,"aria-label":"Play music","data-cursor":!0,children:[V.jsx(N3,{}),V.jsx("span",{className:Vt.playLabel,children:"play"})]})]}),i&&V.jsx("div",{ref:_,className:Vt.modeSwitcher,children:[{id:"amplitude",label:"Amplitude"},{id:"fft",label:"FFT"},{id:"beats",label:"Beats"}].map(({id:ne,label:se})=>V.jsx("button",{className:`${Vt.modeBtn} ${a===ne?Vt.modeBtnActive:""}`,onClick:()=>Ke(ne),"data-cursor":!0,children:se},ne))}),i&&V.jsx("button",{className:Vt.pauseBtn,onClick:re,"aria-label":s?"Pause":"Resume","data-cursor":!0,children:s?V.jsx(U3,{}):V.jsx(I3,{})}),V.jsxs("div",{className:Vt.legend,style:{opacity:a==="fft"||a==="beats"?1:0},children:[V.jsxs("div",{className:Vt.legendRow,children:[V.jsx("span",{className:Vt.swatch,style:{background:"#ff4444"}}),V.jsx("span",{className:Vt.legendLabel,children:"Low Freq"})]}),V.jsxs("div",{className:Vt.legendRow,children:[V.jsx("span",{className:Vt.swatch,style:{background:"#ffaa00"}}),V.jsx("span",{className:Vt.legendLabel,children:"High Freq"})]}),a==="beats"&&V.jsxs("div",{className:Vt.legendRow,children:[V.jsx("span",{className:Vt.swatch,style:{background:"#e8a020"}}),V.jsx("span",{className:Vt.legendLabel,children:"Beat"})]})]}),V.jsxs("div",{className:Vt.scrollHint,"aria-hidden":"true",children:[V.jsx("span",{className:Vt.scrollText,children:"scroll"}),V.jsx(O3,{})]})]})});function N3(){return V.jsxs("svg",{width:"64",height:"64",viewBox:"0 0 64 64",fill:"none",children:[V.jsx("circle",{cx:"32",cy:"32",r:"30",stroke:"currentColor",strokeWidth:"1.2"}),V.jsx("polygon",{points:"26,20 48,32 26,44",fill:"currentColor"})]})}function I3(){return V.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:V.jsx("polygon",{points:"3,1 14,8 3,15"})})}function U3(){return V.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:[V.jsx("rect",{x:"3",y:"2",width:"4",height:"12"}),V.jsx("rect",{x:"9",y:"2",width:"4",height:"12"})]})}function O3(){return V.jsxs("svg",{width:"18",height:"28",viewBox:"0 0 18 28",fill:"none",children:[V.jsx("rect",{x:"6",y:"1",width:"6",height:"11",rx:"3",stroke:"currentColor",strokeWidth:"1.2"}),V.jsx("circle",{cx:"9",cy:"5",r:"1.5",fill:"currentColor"}),V.jsx("line",{x1:"9",y1:"16",x2:"9",y2:"26",stroke:"currentColor",strokeWidth:"1.2"}),V.jsx("polyline",{points:"5,22 9,26 13,22",stroke:"currentColor",strokeWidth:"1.2",fill:"none"})]})}const F3="_root_16g2d_1",k3="_inner_16g2d_12",z3="_marquee_16g2d_1",B3="_track_16g2d_18",H3="_word_16g2d_25",V3="_teal_16g2d_32",G3="_saffron_16g2d_33",W3="_dim_16g2d_34",Su={root:F3,inner:k3,marquee:z3,track:B3,word:H3,teal:V3,saffron:G3,dim:W3},X3=[{text:"USTAD NOOR BAKHSH",accent:"teal"},{text:"·",accent:"dim"},{text:"ELECTRIC DAMBURA",accent:"saffron"},{text:"·",accent:"dim"},{text:"BALOCHISTAN",accent:"teal"},{text:"·",accent:"dim"},{text:"AAYE HO MERI ZINDAGI",accent:"saffron"},{text:"·",accent:"dim"},{text:"UAL CCI",accent:"saffron"},{text:"·",accent:"dim"}];function Qx(){return V.jsx("div",{className:Su.track,children:Array.from({length:6}).flatMap((n,e)=>X3.map((t,i)=>V.jsxs("span",{className:`${Su.word} ${Su[t.accent]}`,children:[t.text,"  "]},`${e}-${i}`)))})}function j3(){return V.jsx("div",{className:Su.root,"aria-hidden":"true",children:V.jsxs("div",{className:Su.inner,children:[V.jsx(Qx,{}),V.jsx(Qx,{})]})})}class Mr{constructor(e,t={}){if(!(e instanceof Node))throw"Can't initialize VanillaTilt because "+e+" is not a Node.";this.width=null,this.height=null,this.clientWidth=null,this.clientHeight=null,this.left=null,this.top=null,this.gammazero=null,this.betazero=null,this.lastgammazero=null,this.lastbetazero=null,this.transitionTimeout=null,this.updateCall=null,this.event=null,this.updateBind=this.update.bind(this),this.resetBind=this.reset.bind(this),this.element=e,this.settings=this.extendSettings(t),this.reverse=this.settings.reverse?-1:1,this.resetToStart=Mr.isSettingTrue(this.settings["reset-to-start"]),this.glare=Mr.isSettingTrue(this.settings.glare),this.glarePrerender=Mr.isSettingTrue(this.settings["glare-prerender"]),this.fullPageListening=Mr.isSettingTrue(this.settings["full-page-listening"]),this.gyroscope=Mr.isSettingTrue(this.settings.gyroscope),this.gyroscopeSamples=this.settings.gyroscopeSamples,this.elementListener=this.getElementListener(),this.glare&&this.prepareGlare(),this.fullPageListening&&this.updateClientSize(),this.addEventListeners(),this.reset(),this.resetToStart===!1&&(this.settings.startX=0,this.settings.startY=0)}static isSettingTrue(e){return e===""||e===!0||e===1}getElementListener(){if(this.fullPageListening)return window.document;if(typeof this.settings["mouse-event-element"]=="string"){const e=document.querySelector(this.settings["mouse-event-element"]);if(e)return e}return this.settings["mouse-event-element"]instanceof Node?this.settings["mouse-event-element"]:this.element}addEventListeners(){this.onMouseEnterBind=this.onMouseEnter.bind(this),this.onMouseMoveBind=this.onMouseMove.bind(this),this.onMouseLeaveBind=this.onMouseLeave.bind(this),this.onWindowResizeBind=this.onWindowResize.bind(this),this.onDeviceOrientationBind=this.onDeviceOrientation.bind(this),this.elementListener.addEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.addEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.addEventListener("mousemove",this.onMouseMoveBind),(this.glare||this.fullPageListening)&&window.addEventListener("resize",this.onWindowResizeBind),this.gyroscope&&window.addEventListener("deviceorientation",this.onDeviceOrientationBind)}removeEventListeners(){this.elementListener.removeEventListener("mouseenter",this.onMouseEnterBind),this.elementListener.removeEventListener("mouseleave",this.onMouseLeaveBind),this.elementListener.removeEventListener("mousemove",this.onMouseMoveBind),this.gyroscope&&window.removeEventListener("deviceorientation",this.onDeviceOrientationBind),(this.glare||this.fullPageListening)&&window.removeEventListener("resize",this.onWindowResizeBind)}destroy(){clearTimeout(this.transitionTimeout),this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.element.style.willChange="",this.element.style.transition="",this.element.style.transform="",this.resetGlare(),this.removeEventListeners(),this.element.vanillaTilt=null,delete this.element.vanillaTilt,this.element=null}onDeviceOrientation(e){if(e.gamma===null||e.beta===null)return;this.updateElementPosition(),this.gyroscopeSamples>0&&(this.lastgammazero=this.gammazero,this.lastbetazero=this.betazero,this.gammazero===null?(this.gammazero=e.gamma,this.betazero=e.beta):(this.gammazero=(e.gamma+this.lastgammazero)/2,this.betazero=(e.beta+this.lastbetazero)/2),this.gyroscopeSamples-=1);const t=this.settings.gyroscopeMaxAngleX-this.settings.gyroscopeMinAngleX,i=this.settings.gyroscopeMaxAngleY-this.settings.gyroscopeMinAngleY,r=t/this.width,s=i/this.height,o=e.gamma-(this.settings.gyroscopeMinAngleX+this.gammazero),a=e.beta-(this.settings.gyroscopeMinAngleY+this.betazero),l=o/r,u=a/s;this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event={clientX:l+this.left,clientY:u+this.top},this.updateCall=requestAnimationFrame(this.updateBind)}onMouseEnter(){this.updateElementPosition(),this.element.style.willChange="transform",this.setTransition()}onMouseMove(e){this.updateCall!==null&&cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.updateBind)}onMouseLeave(){this.setTransition(),this.settings.reset&&requestAnimationFrame(this.resetBind)}reset(){this.onMouseEnter(),this.fullPageListening?this.event={clientX:(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.clientWidth,clientY:(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.clientHeight}:this.event={clientX:this.left+(this.settings.startX+this.settings.max)/(2*this.settings.max)*this.width,clientY:this.top+(this.settings.startY+this.settings.max)/(2*this.settings.max)*this.height};let e=this.settings.scale;this.settings.scale=1,this.update(),this.settings.scale=e,this.resetGlare()}resetGlare(){this.glare&&(this.glareElement.style.transform="rotate(180deg) translate(-50%, -50%)",this.glareElement.style.opacity="0")}getValues(){let e,t;this.fullPageListening?(e=this.event.clientX/this.clientWidth,t=this.event.clientY/this.clientHeight):(e=(this.event.clientX-this.left)/this.width,t=(this.event.clientY-this.top)/this.height),e=Math.min(Math.max(e,0),1),t=Math.min(Math.max(t,0),1);let i=(this.reverse*(this.settings.max-e*this.settings.max*2)).toFixed(2),r=(this.reverse*(t*this.settings.max*2-this.settings.max)).toFixed(2),s=Math.atan2(this.event.clientX-(this.left+this.width/2),-(this.event.clientY-(this.top+this.height/2)))*(180/Math.PI);return{tiltX:i,tiltY:r,percentageX:e*100,percentageY:t*100,angle:s}}updateElementPosition(){let e=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=e.left,this.top=e.top}update(){let e=this.getValues();this.element.style.transform="perspective("+this.settings.perspective+"px) rotateX("+(this.settings.axis==="x"?0:e.tiltY)+"deg) rotateY("+(this.settings.axis==="y"?0:e.tiltX)+"deg) scale3d("+this.settings.scale+", "+this.settings.scale+", "+this.settings.scale+")",this.glare&&(this.glareElement.style.transform=`rotate(${e.angle}deg) translate(-50%, -50%)`,this.glareElement.style.opacity=`${e.percentageY*this.settings["max-glare"]/100}`),this.element.dispatchEvent(new CustomEvent("tiltChange",{detail:e})),this.updateCall=null}prepareGlare(){if(!this.glarePrerender){const e=document.createElement("div");e.classList.add("js-tilt-glare");const t=document.createElement("div");t.classList.add("js-tilt-glare-inner"),e.appendChild(t),this.element.appendChild(e)}this.glareElementWrapper=this.element.querySelector(".js-tilt-glare"),this.glareElement=this.element.querySelector(".js-tilt-glare-inner"),!this.glarePrerender&&(Object.assign(this.glareElementWrapper.style,{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",overflow:"hidden","pointer-events":"none","border-radius":"inherit"}),Object.assign(this.glareElement.style,{position:"absolute",top:"50%",left:"50%","pointer-events":"none","background-image":"linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",transform:"rotate(180deg) translate(-50%, -50%)","transform-origin":"0% 0%",opacity:"0"}),this.updateGlareSize())}updateGlareSize(){if(this.glare){const e=(this.element.offsetWidth>this.element.offsetHeight?this.element.offsetWidth:this.element.offsetHeight)*2;Object.assign(this.glareElement.style,{width:`${e}px`,height:`${e}px`})}}updateClientSize(){this.clientWidth=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.clientHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}onWindowResize(){this.updateGlareSize(),this.updateClientSize()}setTransition(){clearTimeout(this.transitionTimeout),this.element.style.transition=this.settings.speed+"ms "+this.settings.easing,this.glare&&(this.glareElement.style.transition=`opacity ${this.settings.speed}ms ${this.settings.easing}`),this.transitionTimeout=setTimeout(()=>{this.element.style.transition="",this.glare&&(this.glareElement.style.transition="")},this.settings.speed)}extendSettings(e){let t={reverse:!1,max:15,startX:0,startY:0,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:1,speed:300,transition:!0,axis:null,glare:!1,"max-glare":1,"glare-prerender":!1,"full-page-listening":!1,"mouse-event-element":null,reset:!0,"reset-to-start":!0,gyroscope:!0,gyroscopeMinAngleX:-45,gyroscopeMaxAngleX:45,gyroscopeMinAngleY:-45,gyroscopeMaxAngleY:45,gyroscopeSamples:10},i={};for(var r in t)if(r in e)i[r]=e[r];else if(this.element.hasAttribute("data-tilt-"+r)){let s=this.element.getAttribute("data-tilt-"+r);try{i[r]=JSON.parse(s)}catch{i[r]=s}}else i[r]=t[r];return i}static init(e,t){e instanceof Node&&(e=[e]),e instanceof NodeList&&(e=[].slice.call(e)),e instanceof Array&&e.forEach(i=>{"vanillaTilt"in i||(i.vanillaTilt=new Mr(i,t))})}}typeof document<"u"&&(window.VanillaTilt=Mr,Mr.init(document.querySelectorAll("[data-tilt]")));const Y3="_section_u37ak_1",q3="_imgOuter_u37ak_7",$3="_imgWrap_u37ak_16",K3="_img_u37ak_7",Z3="_imgGradient_u37ak_32",Q3="_imgCredits_u37ak_45",J3="_imgName_u37ak_52",eN="_imgSub_u37ak_61",tN="_textBlock_u37ak_71",nN="_pullQuote_u37ak_77",iN="_body_u37ak_90",rN="_songTitle_u37ak_99",_i={section:Y3,imgOuter:q3,imgWrap:$3,img:K3,imgGradient:Z3,imgCredits:Q3,imgName:J3,imgSub:eN,textBlock:tN,pullQuote:nN,body:iN,songTitle:rN};gt.registerPlugin(rt);function sN(){const n=ue.useRef(null),e=ue.useRef(null),t=ue.useRef(null),i=ue.useRef(null),r=ue.useRef(null),s=ue.useRef(null);return ue.useEffect(()=>{if(e.current)return Mr.init(e.current,{max:8,speed:500,glare:!0,"max-glare":.18,perspective:1100}),()=>{var o,a;return(a=(o=e.current)==null?void 0:o.vanillaTilt)==null?void 0:a.destroy()}},[]),ue.useEffect(()=>{const o=gt.context(()=>{gt.to(t.current,{y:-80,ease:"none",scrollTrigger:{trigger:n.current,start:"top bottom",end:"bottom top",scrub:!0}}),gt.fromTo(i.current,{opacity:0,y:40},{opacity:1,y:0,duration:.9,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:i.current,start:"top 78%"}}),gt.fromTo([r.current,s.current],{opacity:0,y:30},{opacity:1,y:0,duration:.8,stagger:.2,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:r.current,start:"top 80%"}})},n);return()=>o.revert()},[]),V.jsxs("section",{ref:n,className:_i.section,id:"musician",children:[V.jsxs("div",{className:_i.imgOuter,ref:e,"data-cursor":!0,children:[V.jsx("div",{className:_i.imgWrap,ref:t,children:V.jsx("img",{src:"/ustaad-noor-bakhsh.jpg",alt:"Ustad Noor Bakhsh playing the electric dambura",className:_i.img})}),V.jsx("div",{className:_i.imgGradient}),V.jsxs("div",{className:_i.imgCredits,children:[V.jsx("p",{className:_i.imgName,children:"Ustad Noor Bakhsh"}),V.jsx("p",{className:_i.imgSub,children:"Electric Dambura · Balochistan"})]})]}),V.jsxs("div",{className:_i.textBlock,children:[V.jsx("blockquote",{ref:i,className:_i.pullQuote,children:'"His version is rough, low and minimal. The energy lives in the lower frequencies. There is no percussion. What you hear instead is closer to the landscape: vast, unhurried, resonant."'}),V.jsx("p",{ref:r,className:_i.body,children:"The dambura is a long-necked lute native to Balochistan. Ustad Noor Bakhsh's version is homemade and electric — run through a small amplifier powered by a motorcycle battery, performed outdoors for village audiences under open sky. There is no stage. There is no studio. There is just the instrument, the amplifier, and a field."}),V.jsxs("p",{ref:s,className:_i.body,children:["The track is his interpretation of"," ",V.jsx("em",{className:_i.songTitle,children:"Aaye Ho Meri Zindagi Mein Tum Bahar Banke"})," ","— from the 1996 Bollywood film Raja Hindustani. As a Hindi film song it is lush, orchestrated, produced across the full frequency spectrum. In his hands it becomes something else. I picked this recording because it connects to my culture, and because responding to it visually felt meaningful in a way no random track could replicate. Every colour in these visualisers carries weight."]})]})]})}const oN="_section_jpzwk_2",aN="_ghost_jpzwk_9",lN="_ghostLeft_jpzwk_25",uN="_ghostRight_jpzwk_26",cN="_ghostCentre_jpzwk_27",fN="_splitGrid_jpzwk_30",hN="_splitGridFlip_jpzwk_42",dN="_textCol_jpzwk_46",pN="_codeCol_jpzwk_51",mN="_eyebrow_jpzwk_56",gN="_heading_jpzwk_65",_N="_body_jpzwk_76",vN="_inlineCode_jpzwk_84",xN="_saffron_jpzwk_93",yN="_tealBright_jpzwk_94",SN="_callout_jpzwk_97",MN="_calloutLabel_jpzwk_105",EN="_calloutText_jpzwk_114",wN="_ide_jpzwk_123",TN="_ideChrome_jpzwk_136",AN="_dot_jpzwk_146",CN="_ideFile_jpzwk_154",RN="_ideCode_jpzwk_162",bN="_ideCursor_jpzwk_181",PN="_cinematicWrap_jpzwk_197",LN="_cinematicText_jpzwk_205",DN="_headingCinematic_jpzwk_210",NN="_headWord_jpzwk_220",IN="_cinematicBody_jpzwk_225",UN="_cinematicCode_jpzwk_231",je={section:oN,ghost:aN,ghostLeft:lN,ghostRight:uN,ghostCentre:cN,splitGrid:fN,splitGridFlip:hN,textCol:dN,codeCol:pN,eyebrow:mN,heading:gN,body:_N,inlineCode:vN,saffron:xN,tealBright:yN,callout:SN,calloutLabel:MN,calloutText:EN,ide:wN,ideChrome:TN,dot:AN,ideFile:CN,ideCode:RN,ideCursor:bN,cinematicWrap:PN,cinematicText:LN,headingCinematic:DN,headWord:NN,cinematicBody:IN,cinematicCode:UN};gt.registerPlugin(rt);const ON={amplitude:`from dorothy import Dorothy

dot = Dorothy()

class MySketch:
    def __init__(self):
        dot.start_loop(self.setup, self.draw)

    def setup(self):
        dot.music.start_file_stream("balochi_audio.wav")
        dot.music.play()

    def draw(self):
        dot.background((40, 0, 60))

        amp = dot.music.amplitude()
        r = 50 + amp * 900

        dot.fill((180, 20, 40))
        dot.circle(
            (dot.width // 2, dot.height // 2),
            r
        )

MySketch()`,fft:`from dorothy import Dorothy

dot = Dorothy()

class MySketch:
    def __init__(self):
        dot.start_loop(self.setup, self.draw)

    def setup(self):
        dot.music.start_file_stream("balochi_audio.wav")
        dot.music.play()

    def draw(self):
        dot.background((5, 10, 35))

        amp = dot.music.amplitude()
        size = 80 + amp * 900
        dot.fill((0, 180, 170))
        dot.circle((dot.width // 2, dot.height // 2), size)

        fft = dot.music.fft()
        if fft is None:
            return

        half = len(fft) // 2

        for i in range(half):
            h = fft[i] * 50
            x = int(i * 3)
            dot.fill((200, 40, 40))
            dot.rectangle(
                (x, dot.height),
                (x + 2, dot.height - h)
            )

        for i in range(half, len(fft)):
            h = fft[i] * 200
            x = 450 + int((i - half) * 3)
            dot.fill((255, 160, 40))
            dot.rectangle(
                (x, dot.height),
                (x + 2, dot.height - h)
            )

MySketch()`,beats:`from dorothy import Dorothy
import numpy as np

dot = Dorothy()

class MySketch:
    def __init__(self):
        dot.start_loop(self.setup, self.draw)

    def setup(self):
        dot.music.start_file_stream("balochi_audio.wav")
        dot.music.play()

    def draw(self):
        dot.background((10, 10, 10))

        amp = dot.music.amplitude()
        size = 70 + amp * 900

        dot.fill((220, 40, 40))
        dot.circle((dot.width // 2, dot.height // 2), size)

        fft = dot.music.fft()
        if fft is not None:
            num_bars = 20
            bars = fft[:num_bars]
            bar_width = dot.width // num_bars

            for i in range(num_bars):
                h = bars[i] * 100
                if i < num_bars // 2:
                    dot.fill((220, 60, 60))
                else:
                    dot.fill((40, 80, 200))
                x1 = i * bar_width
                x2 = x1 + bar_width - 2
                dot.rectangle(
                    (x1, dot.height),
                    (x2, dot.height - h)
                )

        if dot.music.is_beat():
            dot.fill((255, 200, 60))
            dot.circle(
                (dot.width // 2, dot.height // 2),
                size + 40
            )

MySketch()`},FN={amplitude:"1__balochi_visualiser_amp.py",fft:"2__balochi_visualiser_amp_fft.py",beats:"3__balochi_visualiser_with_beats.py"};function kN(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/(#[^\n]*)/g,'<span class="c">$1</span>').replace(/\b(from|import|class|def|if|else|elif|for|in|range|return|not|None|True|False|and|or)\b/g,'<span class="kw">$1</span>').replace(/("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g,'<span class="str">$1</span>').replace(new RegExp("(?<![.\\w])(\\d+)(?![.\\w])","g"),'<span class="num">$1</span>').replace(/\b(Dorothy|start_file_stream|play|background|fill|circle|amplitude|rectangle|fft|is_beat|start_loop)\b/g,'<span class="fn">$1</span>')}function Q_({mode:n,className:e}){const t=ue.useRef(null),[i,r]=ue.useState(""),[s,o]=ue.useState(!1),a=ue.useRef(0),l=ue.useRef(null),u=ON[n];return ue.useEffect(()=>{const c=new IntersectionObserver(([h])=>{h.isIntersecting&&!s&&o(!0)},{threshold:.15});return t.current&&c.observe(t.current),()=>c.disconnect()},[s]),ue.useEffect(()=>{if(!s)return;a.current=0,r("");function c(){a.current=Math.min(a.current+5,u.length),r(u.slice(0,a.current)),a.current<u.length&&(l.current=requestAnimationFrame(c))}return l.current=requestAnimationFrame(c),()=>cancelAnimationFrame(l.current)},[s,u]),V.jsxs("div",{ref:t,className:`${je.ide} ${e||""}`,children:[V.jsxs("div",{className:je.ideChrome,children:[V.jsx("span",{className:je.dot,style:{background:"#ff5f57"}}),V.jsx("span",{className:je.dot,style:{background:"#febc2e"}}),V.jsx("span",{className:je.dot,style:{background:"#28c840"}}),V.jsx("span",{className:je.ideFile,children:FN[n]})]}),V.jsx("pre",{className:je.ideCode,dangerouslySetInnerHTML:{__html:kN(i)}}),V.jsx("span",{className:je.ideCursor,children:"▋"})]})}function v1({text:n}){return V.jsxs("div",{className:je.callout,children:[V.jsx("span",{className:je.calloutLabel,children:"Why it works"}),V.jsx("p",{className:je.calloutText,children:n})]})}function zN({sectionRef:n}){const e=ue.useRef(null),t=ue.useRef(null),i=ue.useRef(null),r=ue.useRef(null),s=ue.useRef(null);return ue.useEffect(()=>{n&&(n.current=e.current)},[n]),ue.useEffect(()=>{const o=gt.context(()=>{gt.to(t.current,{x:-60,ease:"none",scrollTrigger:{trigger:e.current,start:"top bottom",end:"bottom top",scrub:1.5}}),gt.fromTo(i.current,{x:-50,opacity:0},{x:0,opacity:1,duration:.9,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:i.current,start:"top 78%"}}),gt.fromTo(r.current,{x:50,opacity:0},{x:0,opacity:1,duration:.9,delay:.3,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:r.current,start:"top 80%"}}),gt.fromTo(s.current,{y:24,opacity:0},{y:0,opacity:1,duration:.7,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:s.current,start:"top 82%"}})},e);return()=>o.revert()},[]),V.jsxs("section",{ref:e,className:je.section,style:{background:"#030a0b"},id:"vis-amplitude",children:[V.jsx("span",{ref:t,className:`${je.ghost} ${je.ghostLeft}`,children:"01"}),V.jsxs("div",{className:je.splitGrid,children:[V.jsxs("div",{className:je.textCol,children:[V.jsx("span",{className:je.eyebrow,children:"Visualiser 01 — Amplitude"}),V.jsxs("h2",{ref:i,className:je.heading,children:["Loudness mapped to a"," ",V.jsx("em",{className:je.saffron,children:"breathing"})," sphere"]}),V.jsxs("p",{className:je.body,children:["Amplitude is the simplest reading of audio: how loud is it right now? I mapped that single value to the radius of a circle — 50 pixels at silence, 950 at peak. The sketch reads ",V.jsx("code",{className:je.inlineCode,children:"dot.music.amplitude()"})," every frame and redraws."]}),V.jsxs("p",{className:je.body,children:["Because the dambura has a lot of sustained low energy, the sphere never snaps or flickers. It ",V.jsx("em",{children:"breathes"})," — rising and falling over several seconds at a time. That slow, continuous movement is the instrument's character made visible."]}),V.jsx("p",{className:je.body,children:"The 3D version uses the same value to drive both the sphere scale and a sine-wave vertex displacement across its geometry, so it warps organically rather than uniformly growing."}),V.jsx("div",{ref:s,children:V.jsx(v1,{text:"The simplest reading of any audio. No frequency analysis, no beat detection. Just loudness over time — and that alone tells you something real about the dambura."})})]}),V.jsx("div",{className:je.codeCol,ref:r,children:V.jsx(Q_,{mode:"amplitude"})})]})]})}function BN({sectionRef:n}){const e=ue.useRef(null),t=ue.useRef(null),i=ue.useRef(null),r=ue.useRef(null),s=ue.useRef(null);return ue.useEffect(()=>{n&&(n.current=e.current)},[n]),ue.useEffect(()=>{const o=gt.context(()=>{gt.to(t.current,{x:60,ease:"none",scrollTrigger:{trigger:e.current,start:"top bottom",end:"bottom top",scrub:1.5}}),gt.fromTo(i.current,{x:50,opacity:0},{x:0,opacity:1,duration:.9,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:i.current,start:"top 78%"}}),gt.fromTo(r.current,{x:-50,opacity:0},{x:0,opacity:1,duration:.9,delay:.3,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:r.current,start:"top 80%"}}),gt.fromTo(s.current,{y:24,opacity:0},{y:0,opacity:1,duration:.7,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:s.current,start:"top 82%"}})},e);return()=>o.revert()},[]),V.jsxs("section",{ref:e,className:je.section,style:{background:"#040d0d"},id:"vis-fft",children:[V.jsx("span",{ref:t,className:`${je.ghost} ${je.ghostRight}`,children:"02"}),V.jsxs("div",{className:`${je.splitGrid} ${je.splitGridFlip}`,children:[V.jsx("div",{className:je.codeCol,ref:r,children:V.jsx(Q_,{mode:"fft"})}),V.jsxs("div",{className:je.textCol,children:[V.jsx("span",{className:je.eyebrow,children:"Visualiser 02 — FFT"}),V.jsxs("h2",{ref:i,className:je.heading,children:["Frequency split into"," ",V.jsx("em",{className:je.tealBright,children:"standing stones"})]}),V.jsx("p",{className:je.body,children:'FFT (Fast Fourier Transform) splits the audio into frequency bands — from very low to very high. Instead of "how loud?" we see "which frequencies are active right now?" 128 bars rise from the desert plane in a ring: the first 64 are crimson for low frequencies, the last 64 teal-bright for highs.'}),V.jsx("p",{className:je.body,children:"The left side of the ring — low frequencies — is almost always fully lit. The right side only spikes occasionally on certain plucks. This asymmetry is not a flaw. It is a portrait of the instrument. The dambura is a low instrument. Its energy lives near the floor."}),V.jsx("p",{className:je.body,children:"In FFT mode the desert plane goes flat so the bars tell the full story. The camera pulls back to show the complete stone circle."}),V.jsx("div",{ref:s,children:V.jsx(v1,{text:"The left side never really stops. The right side wakes up briefly and goes quiet. In thirty seconds of watching it, you understand the dambura better than any description could explain."})})]})]})]})}function HN({sectionRef:n}){const e=ue.useRef(null),t=ue.useRef(null),i=ue.useRef(null),r=ue.useRef([]);ue.useEffect(()=>{n&&(n.current=e.current)},[n]),ue.useEffect(()=>{const o=gt.context(()=>{gt.to(t.current,{y:-60,ease:"none",scrollTrigger:{trigger:e.current,start:"top bottom",end:"bottom top",scrub:1.5}});const a=r.current.filter(Boolean);a.length&&gt.fromTo(a,{y:40,opacity:0},{y:0,opacity:1,duration:.7,stagger:.15,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:i.current,start:"top 75%"}})},e);return()=>o.revert()},[]);const s=["A","saffron","shockwave","on","every","accent"];return V.jsxs("section",{ref:e,className:je.section,style:{background:"#060d0f"},id:"vis-beats",children:[V.jsx("span",{ref:t,className:`${je.ghost} ${je.ghostCentre}`,children:"03"}),V.jsxs("div",{className:je.cinematicWrap,children:[V.jsxs("div",{className:je.cinematicText,children:[V.jsx("span",{className:je.eyebrow,children:"Visualiser 03 — Beats"}),V.jsx("h2",{ref:i,className:je.headingCinematic,children:s.map((o,a)=>V.jsxs("span",{ref:l=>r.current[a]=l,className:o==="saffron"||o==="shockwave"?`${je.headWord} ${je.saffron}`:je.headWord,children:[o," "]},a))}),V.jsxs("div",{className:je.cinematicBody,children:[V.jsxs("p",{className:je.body,children:["There is no heavy drum in this recording. But there are clear rhythmic accents in the plucking. When"," ",V.jsx("code",{className:je.inlineCode,children:"dot.music.is_beat()"})," fires, a gold circle flashes over the red one for a single frame."]}),V.jsx("p",{className:je.body,children:"In the 3D version this becomes a saffron RingGeometry shockwave that expands outward across the desert plane — scale 0 to 10, fading over 45 frames. Multiple shockwaves stack. Stars pulse saffron simultaneously. The camera micro-shakes. Those brief gold moments make the rhythm readable at a glance without needing percussion."})]})]}),V.jsx("div",{className:je.cinematicCode,children:V.jsx(Q_,{mode:"beats"})})]})]})}function hp({sectionRef:n,mode:e}){return e==="amplitude"?V.jsx(zN,{sectionRef:n}):e==="fft"?V.jsx(BN,{sectionRef:n}):e==="beats"?V.jsx(HN,{sectionRef:n}):null}const VN="_section_ipjaq_1",GN="_inner_ipjaq_12",WN="_decorQuote_ipjaq_19",XN="_leadQuote_ipjaq_31",jN="_quoteWord_ipjaq_43",YN="_saffronLine_ipjaq_49",qN="_block_ipjaq_58",$N="_blockLabel_ipjaq_69",KN="_blockText_ipjaq_78",ZN="_credits_ipjaq_87",QN="_creditRow_ipjaq_97",JN="_creditKey_ipjaq_103",eI="_creditVal_ipjaq_113",tI="_closing_ipjaq_120",Gt={section:VN,inner:GN,decorQuote:WN,leadQuote:XN,quoteWord:jN,saffronLine:YN,block:qN,blockLabel:$N,blockText:KN,credits:ZN,creditRow:QN,creditKey:JN,creditVal:eI,closing:tI};gt.registerPlugin(rt);const nI=[{label:"What Amplitude Taught",text:`I had assumed a lively folk performance would produce fast, erratic amplitude
jumps. What I saw instead was slow, sustained breathing — the sphere rising and falling
over several seconds at a time. That is the dambura. Long notes, held. No rush.
The visualiser showed time, not just loudness.`},{label:"What FFT Taught",text:`The left side of the frequency ring is almost always fully lit. The right side
only spikes occasionally. Looking at it, you immediately understand why the recording
sounds the way it does. This is a low instrument. Its energy lives near the floor.
FFT made that impossible to misread.`},{label:"What Beats Taught",text:`Beat detection was the most surprising part. I expected the pattern to be
irregular — folk music, hand-plucked, no metronome. But the saffron shockwaves came
at recognisable intervals. There is a pulse in there. It is not loud or insistent.
It is simply present, the way heartbeats are present.`}];function iI(){const n=ue.useRef(null),e=ue.useRef(null),t=ue.useRef([]),i=ue.useRef([]),r=ue.useRef(null);ue.useEffect(()=>{const o=gt.context(()=>{const a=t.current.filter(Boolean);a.length&&gt.fromTo(a,{y:20,opacity:0},{y:0,opacity:1,duration:.55,stagger:.07,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:e.current,start:"top 75%"}}),gt.fromTo(r.current,{scaleX:0,opacity:0},{scaleX:1,opacity:1,duration:.8,transformOrigin:"center",ease:"power2.out",scrollTrigger:{trigger:r.current,start:"top 80%"}});const l=i.current.filter(Boolean);l.length&&gt.fromTo(l,{y:40,opacity:0},{y:0,opacity:1,duration:.8,stagger:.25,ease:"cubic-bezier(0.23,1,0.32,1)",scrollTrigger:{trigger:l[0],start:"top 80%"}})},n);return()=>o.revert()},[]);const s="This project started as a technical exercise. It ended as something more personal.".split(" ");return V.jsx("section",{ref:n,className:Gt.section,id:"reflection",children:V.jsxs("div",{className:Gt.inner,children:[V.jsx("div",{className:Gt.decorQuote,"aria-hidden":"true",children:'"'}),V.jsx("blockquote",{ref:e,className:Gt.leadQuote,children:s.map((o,a)=>V.jsxs("span",{ref:l=>t.current[a]=l,className:Gt.quoteWord,children:[o," "]},a))}),V.jsx("div",{ref:r,className:Gt.saffronLine}),nI.map((o,a)=>V.jsxs("div",{ref:l=>i.current[a]=l,className:Gt.block,children:[V.jsx("span",{className:Gt.blockLabel,children:o.label}),V.jsx("p",{className:Gt.blockText,children:o.text})]},a)),V.jsxs("div",{className:Gt.credits,children:[V.jsxs("div",{className:Gt.creditRow,children:[V.jsx("span",{className:Gt.creditKey,children:"Music"}),V.jsx("span",{className:Gt.creditVal,children:"Ustad Noor Bakhsh — Aaye Ho Meri Zindagi Mein Tum Bahar Banke"})]}),V.jsxs("div",{className:Gt.creditRow,children:[V.jsx("span",{className:Gt.creditKey,children:"Instrument"}),V.jsx("span",{className:Gt.creditVal,children:"Homemade electric dambura, Balochistan"})]}),V.jsxs("div",{className:Gt.creditRow,children:[V.jsx("span",{className:Gt.creditKey,children:"Python"}),V.jsx("span",{className:Gt.creditVal,children:"Dorothy — amplitude, FFT, beat detection"})]}),V.jsxs("div",{className:Gt.creditRow,children:[V.jsx("span",{className:Gt.creditKey,children:"Web"}),V.jsx("span",{className:Gt.creditVal,children:"Three.js · Web Audio API · GSAP · Lenis · React"})]})]}),V.jsx("p",{className:Gt.closing,children:"Week 5  —  Creative Data Methods  —  UAL Camberwell"})]})})}const rI="_dot_wz874_1",sI="_ring_wz874_13",Jx={dot:rI,ring:sI};function oI(){const n=ue.useRef(null),e=ue.useRef(null),t=ue.useRef({x:-100,y:-100}),i=ue.useRef({x:-100,y:-100}),r=ue.useRef(null),s=ue.useRef(!1);return ue.useEffect(()=>{function o(u){t.current={x:u.clientX,y:u.clientY}}function a(u){s.current=!!u.target.closest('a, button, [role="button"], [data-cursor]')}window.addEventListener("mousemove",o,{passive:!0}),window.addEventListener("mouseover",a,{passive:!0});function l(){r.current=requestAnimationFrame(l);const{x:u,y:c}=t.current;if(n.current&&(n.current.style.transform=`translate(${u}px, ${c}px) translate(-50%, -50%)`),i.current.x+=(u-i.current.x)*.12,i.current.y+=(c-i.current.y)*.12,e.current){const h=s.current?1:.4;e.current.style.transform=`translate(${i.current.x}px, ${i.current.y}px) translate(-50%, -50%) scale(${h})`,e.current.style.opacity=s.current?"1":"0.5"}}return l(),()=>{cancelAnimationFrame(r.current),window.removeEventListener("mousemove",o),window.removeEventListener("mouseover",a)}},[]),V.jsxs("div",{id:"custom-cursor",children:[V.jsx("div",{ref:n,className:Jx.dot}),V.jsx("div",{ref:e,className:Jx.ring})]})}const aI="_line_1yopn_1",lI={line:aI};function Fl(){return V.jsx("div",{className:lI.line,"aria-hidden":"true"})}const uI="_main_1v28m_1",cI="_grain_1v28m_8",ey={main:uI,grain:cI};gt.registerPlugin(rt);function fI(){const n=ue.useRef(null),e=ue.useRef(null),t=ue.useRef(null),i=ue.useRef(null);return ue.useEffect(()=>{const r=new HC({duration:1.35,easing:s=>Math.min(1,1.001-Math.pow(2,-10*s)),smoothWheel:!0});return r.on("scroll",rt.update),gt.ticker.add(s=>r.raf(s*1e3)),gt.ticker.lagSmoothing(0),()=>{r.destroy()}},[]),ue.useEffect(()=>{const r=[{ref:e,mode:"amplitude"},{ref:t,mode:"fft"},{ref:i,mode:"beats"}],s=[],o=setTimeout(()=>{r.forEach(({ref:a,mode:l})=>{a.current&&s.push(rt.create({trigger:a.current,start:"top 58%",onEnter:()=>{var u;return(u=n.current)==null?void 0:u.setMode(l)},onEnterBack:()=>{var u;return(u=n.current)==null?void 0:u.setMode(l)}}))})},400);return()=>{clearTimeout(o),s.forEach(a=>a.kill())}},[]),V.jsxs(V.Fragment,{children:[V.jsx(oI,{}),V.jsx("div",{className:ey.grain,"aria-hidden":"true"}),V.jsx(D3,{ref:n}),V.jsxs("main",{className:ey.main,children:[V.jsx(j3,{}),V.jsx(Fl,{}),V.jsx(sN,{}),V.jsx(Fl,{}),V.jsx(hp,{sectionRef:e,mode:"amplitude"}),V.jsx(Fl,{}),V.jsx(hp,{sectionRef:t,mode:"fft"}),V.jsx(Fl,{}),V.jsx(hp,{sectionRef:i,mode:"beats"}),V.jsx(Fl,{}),V.jsx(iI,{})]})]})}dp.createRoot(document.getElementById("root")).render(V.jsx(k1.StrictMode,{children:V.jsx(fI,{})}));
