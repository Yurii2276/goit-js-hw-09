!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),l={formField:document.querySelector("form"),delayField:document.querySelector('input[name="delay"]'),stepField:document.querySelector('input[name="step"]'),amountField:document.querySelector('input[name="amount"]')};function a(e,n){return new Promise((function(t,o){var r=setInterval((function(){Math.random()>.3?(clearInterval(r),t({position:e,delay:n})):(clearInterval(r),o({position:e,delay:n}))}),n)}))}addEventListener("submit",(function(){event.preventDefault();var n=Number(l.delayField.value),t=Number(l.stepField.value),o=Number(l.amountField.value),r=0;(o<=0||n<0||t<0)&&e(i).Notify.failure(" Please input correct values (>=0)");for(var u=1;u<=o;u+=1)a(r=u,n).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),n+=t;l.formField.reset(),console.log(n,t,o,r),console.log("функціям генерайт")}))}();
//# sourceMappingURL=03-promises.c0174895.js.map
