const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.pageX;
    const yPos = event.pageY;
    
    const spanEl = document.createElement("span");
    spanEl.classList.add("floating");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    const size = Math.random() * 50 + 10; // 10px to 60px
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    bodyEl.appendChild(spanEl);

    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
