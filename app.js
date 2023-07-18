var modebtn;
var big_wrapper;

function declare() {
    modebtn = document.querySelector(".modebtn");
    big_wrapper = document.querySelector(".big-wrapper");
}

const main = document.querySelector("main");

declare();

let dark = false;

function animation() {
    dark = !dark;
    let clone = big_wrapper.cloneNode(true);
    if (dark === true) {
        clone.classList.remove("light");
        clone.classList.add("dark");
    } else {
        clone.classList.remove("dark");
        clone.classList.add("light");
    }
    clone.classList.add("copy");
    main.appendChild(clone);

    document.body.classList.add("stop-scrolling");

    clone.addEventListener("animationend", () => {
        document.body.classList.remove("stop-scrolling");
        big_wrapper.remove();
        clone.classList.remove("copy");
        // Reset
        declare();
        events();
    });

}

function events(){
    modebtn.addEventListener("click", animation);
}
events();
