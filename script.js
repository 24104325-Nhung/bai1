function upDate(previewPic) {
    // 1. In thông tin ra console để kiểm tra
    console.log("Đã di chuột vào ảnh!");
    console.log("Alt text:", previewPic.alt);
    console.log("Source URL:", previewPic.src);

    // 2. Lấy khung hiển thị ảnh
    let imageDiv = document.getElementById("image");

    // 3. Thay đổi chữ thành nội dung mô tả của ảnh
    imageDiv.innerHTML = previewPic.alt;

    // 4. Thay đổi hình nền thành đường dẫn của ảnh
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    // Lấy khung hiển thị ảnh
    let imageDiv = document.getElementById("image");

    // 1. Bỏ hình nền đi (trở về mặc định)
    imageDiv.style.backgroundImage = "url('')";

    // 2. Đổi lại chữ ban đầu
    imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}