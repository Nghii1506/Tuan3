/* try the different selection calls here */
// Bước 2: Đổi nội dung văn bản trong ô textarea (#msgArea)
var msg = $('#msgArea');
msg.val("here is some new text");

// Bước 3: Đổi nội dung HTML bên trong thẻ có id="first"
$('#first').html("new Title");

// Bước 4: Lấy tên class của #msgArea và hiển thị vào chính ô đó
$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

// Bước 5: Đổi màu nền tất cả các nút <button> thành đỏ
var buttons = $('button');
buttons.css('background-color', 'red');

// Bước 6: Đổi màu nền của <body> thành màu kem (ivory)
var temp = $('body');
temp.css("background-color", "ivory");

// Bước 7: Thêm class 'selected' vào các phần tử .center-icons
$('.center-icons').addClass('selected');
