
document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.querySelector("button");
    
    if (backButton) {
        backButton.addEventListener("click", function () {
            window.history.back();
        });
    }
});
