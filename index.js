var main = document.querySelector("#main");
var image = document.querySelector("#page>img");
main.addEventListener("mousemove", function (dets) {
    image.style.top = 1 - dets.y * 0.05 + "px"
    image.style.left = 1 - dets.x * 0.05 + "px"
});
var timeout;
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";
    function mouseStop() {
        cursor.style.display = "none";
    }
    timeout = setTimeout(mouseStop, 1000);
})
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";

})


