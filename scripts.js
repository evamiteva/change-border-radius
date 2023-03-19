let box = document.querySelector("div"),
    input = document.querySelector("input"); 6

input.addEventListener("input", () => {
    box.style.borderRadius = input.value;
    box.style.background = input.value;
});