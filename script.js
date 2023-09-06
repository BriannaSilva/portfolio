document.addEventListener("DOMContentLoaded", () => {
    
    const btnBack = document.getElementsByClassName("x-back");
    
    btnBack.addEventListener("click", () => {
        window.history.back();
    });
});

$('img').mousedown(function (e) {
    if(e.button == 2) { // right click
      return false; // do nothing!
    }
  });