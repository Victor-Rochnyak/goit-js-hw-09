!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){n=setInterval((function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.setAttribute("disabled",!0),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){e.setAttribute("disabled",!0),t.removeAttribute("disabled",!1),clearInterval(n)}));var n=null}();
//# sourceMappingURL=01-color-switcher.88097019.js.map