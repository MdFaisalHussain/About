/* Select Elements */
let hdr = document.querySelector(".hdr");
let nav = document.querySelector(".nv");
let nvOpen = document.querySelector(".nv_open");
let nvClose = document.querySelector(".nv_close");

/* Defualt Function */
window.addEventListener("scroll", () => {
	stickyHdr();
	activeLinks();
	scrollTop();
});
window.addEventListener("load", () => {
	stickyHdr();
	activeLinks();
	scrollTop();
});


/* Cursor */
let cursor = document.querySelector(".cursor"), timeout;

document.addEventListener("mousemove", (e) => {
	let x = e.pageX;
	let y = e.pageY;

	cursor.style.top = y + "px";
	cursor.style.left = x + "px";

	cursor.style.display = "block";

	function mouseStopped() {
		cursor.style.display = "none";
	}
	clearTimeout(timeout);
	timeout = setTimeout(mouseStopped, 1000)
});
document.addEventListener("mouseout", () => {
	cursor.style.display = "none";
});

/* Add Sticky To Header */

function stickyHdr() {
	if (document.documentElement.scrollTop > 0) {
		hdr.classList.add("sticky");
	} else {
		hdr.classList.remove("sticky");
	}
}

/* Nav */
// Nav Open
nvOpen.addEventListener("click", () => {
	nav.classList.add("active");
});
// Nav Close
nvClose.addEventListener("click", () => {
	nav.classList.remove("active");
});
/* Nav Active Links*/
let section = document.querySelectorAll(".sec");
let navlinks = document.querySelectorAll(".nv_links");
function activeLinks() {
	section.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 200;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("data-sec-name");

		if (top > offset && top < offset + height) {

			sec.classList.add("active");

			navlinks.forEach(link => {
				link.classList.remove("active");
				try {
					document.querySelector(".nv_links[data-link-name*="+ id + "]").classList.add("active");
				} catch (err) {
					console.log(err)
				}
			});
		}
	});
}

/* Scroll Up */ 
let scrollBtn = document.querySelector(".scroll_top");
function scrollTop () {
	if (document.documentElement.scrollTop > 0) {
		scrollBtn.classList.add("active");
	} else {
		scrollBtn.classList.remove("active");
	}
	scrollBtn.addEventListener("click", () => {
		document.documentElement.scrollTop = 0;
	});
}