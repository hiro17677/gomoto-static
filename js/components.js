$(document).ready(function() {
    // 加載導航欄
    $("#nav-placeholder").load("navbar.html", function(response, status, xhr) {
        if (status == "error") {
            console.log("無法加載導航欄：" + xhr.status + " " + xhr.statusText);
        }
    });

    // 加載頁尾
    $("#footer-placeholder").load("footer.html", function(response, status, xhr) {
        if (status == "error") {
            console.log("無法加載頁尾：" + xhr.status + " " + xhr.statusText);
        }
    });
}); 