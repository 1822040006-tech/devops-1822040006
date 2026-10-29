const button = document.getElementById("versionButton");
const message = document.getElementById("message");

document.getElementById("versionButton").onclick = () => {
    const time = new Date().toLocaleTimeString("vi-VN");
    document.getElementById("message").textContent = `Phiên bản 2.0 - Cập nhật lúc: ${time}`;
};
