const e=document.querySelector("body"),t=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");let o=null;t.addEventListener("click",(()=>{o=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),r.addEventListener("click",(()=>{clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.6459e231.js.map
