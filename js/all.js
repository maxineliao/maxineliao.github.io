//cursor
const cursor = document.querySelector('#cursor');
let mouse = { x: 300, y: 300 };
let pos = { x: 0, y: 0 };
const speed = 0.1; // between 0 and 1

const updatePosition = () => {
	pos.x += (mouse.x - pos.x) * speed;
	pos.y += (mouse.y - pos.y) * speed;
	cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
};

const updateCoordinates = e => {
	mouse.x = e.clientX;
	mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function loop() {
	updatePosition();
	requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

document.querySelectorAll("[data-cursor]").forEach((item) => {
	item.addEventListener("mouseover", (e) => {
		if (item.dataset.cursor === "pointer") {
		cursor.children[0].classList.add("cursor--mouseover");
		}
		// if (item.dataset.cursor === "pointer2") {
		//   cursorBorder.style.backgroundColor = "white";
		//   cursorBorder.style.mixBlendMode = "difference";
		//   cursorBorder.style.setProperty("--size", "80px");
		// }
	});
	item.addEventListener("mouseout", (e) => {
		cursor.children[0].classList.remove("cursor--mouseover");
	});
});
