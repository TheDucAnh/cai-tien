function showProgramming(language) {
  calculatorPrimary.style.display = 'none';
  calculatorSecondary.style.display = 'none';
  programmingContent.style.display = 'block';

  menuBtn.innerText = "Chọn máy tính ▼";
  programmingTitle.innerText = `Bài học: ${language}`;

  let description = "";

  switch(language) {
    case "Python":
      description = `
🔹 Python là gì?
Python là một ngôn ngữ lập trình bậc cao, dễ học, cú pháp đơn giản và rất phổ biến.

🔹 In ra màn hình:
print("Hello, World!")

🔹 Biến & kiểu dữ liệu:
name = "Lan"
age = 18
is_student = True

🔹 Phép toán:
a = 5
b = 3
print(a + b)  # Cộng
print(a ** b) # Lũy thừa

🔹 Câu điều kiện:
if age >= 18:
    print("Bạn đã trưởng thành.")
else:
    print("Bạn chưa đủ tuổi.")

🔹 Vòng lặp:
for i in range(5):
    print(i)

🔹 Hàm:
def say_hello(name):
    print("Xin chào", name)

say_hello("Lan")

🔹 Danh sách:
fruits = ["Táo", "Cam", "Xoài"]
for fruit in fruits:
    print(fruit)
`;
      break;

    case "Java":
      description = `
🔹 Java là gì?
Java là ngôn ngữ lập trình hướng đối tượng, được dùng rộng rãi trong các hệ thống doanh nghiệp, ứng dụng Android, và phần mềm đa nền tảng.

🔹 Chương trình đơn giản:
public class Hello {
  public static void main(String[] args) {
    System.out.println("Xin chào Java!");
  }
}

🔹 Biến & kiểu dữ liệu:
int age = 20;
String name = "Nam";
boolean isStudent = true;

🔹 Toán học:
int a = 10, b = 3;
System.out.println(a + b); // Cộng
System.out.println(Math.pow(a, b)); // Lũy thừa

🔹 Điều kiện:
if (age >= 18) {
  System.out.println("Trưởng thành");
} else {
  System.out.println("Chưa đủ tuổi");
}

🔹 Vòng lặp:
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

🔹 Hàm:
public static int tong(int x, int y) {
  return x + y;
}
System.out.println(tong(5, 10));

🔹 Mảng:
String[] colors = {"Đỏ", "Xanh", "Vàng"};
for (String color : colors) {
  System.out.println(color);
}
`;
      break;

    case "Scratch":
      description = `
🔹 Scratch là gì?
Scratch là một ngôn ngữ lập trình kéo thả, dành cho trẻ em và người mới học lập trình. Nó giúp rèn tư duy logic thông qua hoạt động tạo game, hoạt hình.

🔹 Giao diện:
- Sân khấu (Stage)
- Nhân vật (Sprite)
- Khối lệnh kéo thả

🔹 Các nhóm lệnh chính:
- Sự kiện: "Khi nhấn lá cờ xanh"
- Di chuyển: "Di chuyển 10 bước", "quay 15 độ"
- Hiển thị: "nói 'xin chào' trong 2 giây"
- Lặp lại: "lặp lại 10 lần"
- Điều kiện: "nếu ... thì"

🔹 Ví dụ hoạt động đơn giản:
[Khi nhấn lá cờ xanh]
→ [Nói "Xin chào thế giới!" trong 2 giây]
→ [Di chuyển 50 bước]
→ [Lặp lại 10 lần → quay 15 độ → di chuyển 10 bước]

🔹 Logic nâng cao:
- Biến: điểm số, thời gian
- Cảm biến: chạm màu, chạm cạnh
- Điều kiện lồng nhau, vòng lặp lồng nhau

🔹 Ứng dụng thực tế:
- Làm game đơn giản (đuổi bắt, bắn súng)
- Tạo hoạt hình, kể chuyện
- Điều khiển robot (LEGO, Arduino qua Scratch)
`;
      break;

    case "Các ngôn ngữ khác":
      description = `
🔹 C++ là gì?
C++ là ngôn ngữ mạnh, thường dùng trong game, hệ điều hành và ứng dụng hiệu năng cao.

🔹 Ví dụ:
#include <iostream>
using namespace std;

int main() {
  cout << "Xin chào từ C++!" << endl;
  return 0;
}

🔹 Biến & kiểu dữ liệu:
int a = 5;
float b = 2.5;
string name = "Linh";

🔹 Vòng lặp & điều kiện:
for (int i = 0; i < 5; i++) {
  cout << i << endl;
}

if (a > b) {
  cout << "a lớn hơn b";
}

🔹 JavaScript là gì?
Ngôn ngữ lập trình dành cho web, chạy trực tiếp trên trình duyệt.

🔹 Ví dụ:
let name = "Trang";
alert("Xin chào " + name);

🔹 HTML & CSS là gì?
- HTML tạo cấu trúc trang web.
- CSS dùng để làm đẹp và bố cục trang web.

🔹 HTML:
<h1>Xin chào</h1>
<p>Đây là đoạn văn</p>

🔹 CSS:
h1 {
  color: red;
  text-align: center;
}

🔹 Ruby:
puts "Xin chào từ Ruby"
name = "Mai"
puts "Tên bạn là #{name}"
`;
      break;

    default:
      description = "Nội dung đang cập nhật...";
  }

  programmingDescription.innerText = description;
}
