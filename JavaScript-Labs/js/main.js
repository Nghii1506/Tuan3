document.addEventListener("DOMContentLoaded", function () {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            const targetId = btn.getAttribute("data-target");
            const sublist = document.getElementById(targetId);

            if (!sublist) return;

            const isHidden = sublist.classList.toggle("hidden");
            btn.textContent = isHidden ? "Chi tiết ▾" : "Thu gọn ▴";
        });
    });
});