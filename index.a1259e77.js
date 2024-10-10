document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id),t.textContent=e.name.toUpperCase(),e.placeholder=e.name.charAt(0).toUpperCase()+e.name.slice(1),e.parentNode.insertBefore(t,e)});
//# sourceMappingURL=index.a1259e77.js.map
