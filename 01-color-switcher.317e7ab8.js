const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyField:document.querySelector("body")};let e;t.startBtn.addEventListener("click",(()=>{e||(e=setInterval((()=>{t.bodyField.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),t.startBtn.disabled=!0)})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),e=null,t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.317e7ab8.js.map