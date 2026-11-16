
var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

// Bước 5: Comment dòng in mảng dạng chữ thuần
// document.write(daysOfWeek + "<br/>");

document.write("<table border=1>");
document.write("<tr>");

// Bước 6 & 7: In dòng tiêu đề các thứ trong tuần (in nghiêng từ có >= 4 ký tự)
for (var i = 0; i < daysOfWeek.length; i++) {
    var day;
    if (daysOfWeek[i].length < 4)
        day = daysOfWeek[i];
    else
        day = "<em>" + daysOfWeek[i] + "</em>";
    document.write("<th>" + day + "</th>");
}
document.write("</tr>");

// Bước 8: Dùng vòng lặp in các ngày từ 1 đến 30 (bắt đầu từ Chủ nhật - Sun)
for (var d = 1; d <= 30; d++) {
    // Cứ đầu tuần (ngày 1, 8, 15, 22, 29 -> chia 7 dư 1) thì mở hàng mới <tr>
    if (d % 7 == 1) {
        document.write("<tr>");
    }
    
    document.write("<td>" + d + "</td>");
    
    // Cứ cuối tuần (ngày 7, 14, 21, 28 -> chia hết cho 7) thì đóng hàng </tr>
    if (d % 7 == 0) {
        document.write("</tr>");
    }
}

document.write("</tr>");
document.write("</table>");


