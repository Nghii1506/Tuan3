/* try the different advanced selection calls here */
// Bước 2 & 3: Chọn tất cả ô mật khẩu và đổi nền vàng (đã comment lại theo yêu cầu bước 3)
// $(':password').css('background-color', 'yellow');

// Bước 4: Chọn mỗi phần tử con thứ 4 bên trong thẻ <form> và đổi nền vàng
$('form :nth-child(4n)').css('background-color', 'yellow');

// Bước 5: Chọn thẻ <label> có chứa chuỗi "word" (ví dụ: Password) và đổi màu chữ thành đen
$('label:contains("word")').css("color", "black");
