const button = document.getElementById("versionButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    const now = new Date().toLocaleString("vi-VN");
    message.textContent = `Phiên bản 1.0 - Cập nhật lúc: ${now}`;
});
