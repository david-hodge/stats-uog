/* This code is to ensure clipboard copy icons are always visible */

document.addEventListener("DOMContentLoaded", function() {
  // Ensure clipboard icons show
  document.querySelectorAll(".code-copy-button").forEach(function(btn){
    const icon = btn.querySelector("i.bi");
    if(icon && icon.innerHTML.trim() === "") {
      icon.classList.add("bi-clipboard");
    }
  });
});

