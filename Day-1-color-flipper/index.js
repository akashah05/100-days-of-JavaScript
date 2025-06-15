const CHANGE_COLOR = () => {
    const RED = Math.floor(Math.random() * 256);
    const GREEN = Math.floor(Math.random() * 256);
    const BLUE = Math.floor(Math.random() * 256);

    const GENERATE_COLOR = `RGB(${RED}, ${GREEN}, ${BLUE})`;
    return GENERATE_COLOR;
};

const CHANGE_BTN = document.querySelector(".change-btn");
const COLOR_CODE = document.querySelector(".color-code");

CHANGE_BTN.addEventListener("click", () => {
    document.body.style.background = CHANGE_COLOR();
    COLOR_CODE.textContent = CHANGE_COLOR();
    console.log(COLOR_CODE)
});
