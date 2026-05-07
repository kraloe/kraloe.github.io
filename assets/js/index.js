const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        document.body.classList.toggle("nav-open");
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.body.classList.remove('nav-open');
    });
});

// WebGL 데모 Iframe이 키보드 입력을 받을 수 있도록 클릭 시 포커스 설정
document.addEventListener("DOMContentLoaded", function () {
    const iframe = document.getElementById("demo");
    if (!iframe) return;

    iframe.addEventListener("load", function () {
        try {
            const iframeDoc = iframe.contentWindow.document;
            iframeDoc.addEventListener("mousedown", function () {
                if(iframe.contentWindow.Module && iframe.contentWindow.Module.canvas) {
                    iframe.contentWindow.Module.canvas.focus();
                }
            });
        } catch (e) {
            console.error("Iframe focus error:", e);
        }
    });
});