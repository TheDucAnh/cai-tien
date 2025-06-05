// DOM elements
const menuBtn = document.getElementById('menuBtn');
const leftMenuBtn = document.getElementById('leftMenuBtn');

const calculatorPrimary = document.getElementById('calculatorPrimary');
const calculatorSecondary = document.getElementById('calculatorSecondary');
const programmingContent = document.getElementById('programmingContent');
const programmingTitle = document.getElementById('programmingTitle');
const programmingDescription = document.getElementById('programmingDescription');

const calcBtnPrimary = document.getElementById('calcBtnPrimary');
const calcBtnSecondary = document.getElementById('calcBtnSecondary');

let dropdownMenu = null;

// Hiển thị menu dropdown
function createDropdown(button, options) {
  closeDropdown();

  dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('dropdown-menu');

  options.forEach(opt => {
    const div = document.createElement('div');
    div.textContent = opt.label;
    div.onclick = () => {
      opt.action();
      closeDropdown();
    };
    dropdownMenu.appendChild(div);
  });

  // Đặt vị trí menu dưới button
  const rect = button.getBoundingClientRect();
  dropdownMenu.style.top = `${rect.bottom + window.scrollY}px`;
  dropdownMenu.style.left = `${rect.left + window.scrollX}px`;

  document.body.appendChild(dropdownMenu);
}

// Đóng menu dropdown nếu đang mở
function closeDropdown() {
  if (dropdownMenu) {
    dropdownMenu.remove();
    dropdownMenu = null;
  }
}

// Xử lý khi click ngoài menu để đóng
document.addEventListener('click', e => {
  if (
    dropdownMenu &&
    !dropdownMenu.contains(e.target) &&
    e.target !== menuBtn &&
    e.target !== leftMenuBtn
  ) {
    closeDropdown();
  }
});

// Hiển thị máy tính tiểu học
function showPrimary() {
  calculatorPrimary.style.display = 'block';
  calculatorSecondary.style.display = 'none';
  programmingContent.style.display = 'none';
  menuBtn.textContent = "Máy tính tiểu học ▼";
}

// Hiển thị máy tính cấp 2
function showSecondary() {
  calculatorPrimary.style.display = 'none';
  calculatorSecondary.style.display = 'block';
  programmingContent.style.display = 'none';
  menuBtn.textContent = "Máy tính cấp 2 ▼";
}

// Hiển thị bài học lập trình chi tiết
function showProgramming(language) {
  calculatorPrimary.style.display = 'none';
  calculatorSecondary.style.display = 'none';
  programmingContent.style.display = 'block';

  menuBtn.textContent = "Chọn máy tính ▼";
  programmingTitle.textContent = `Bài học: ${language}`;

  let description = "";

  switch(language) {
    case "Python":
      description = 
`🔸 Giới thiệu:
Python là ngôn ngữ lập trình dễ học, linh hoạt và rất phổ biến trong khoa học dữ liệu, web, tự động hóa,...

🔸 In ra màn hình:
print("Hello, world!")

🔸 Biến và kiểu dữ liệu:
x = 5          # số nguyên
y = 3.14       # số thực
name = "Lan"   # chuỗi
is_student = True  # boolean

🔸 Phép toán cơ bản:
print(x + y)  # cộng
print(x ** 2) # lũy thừa

🔸 Câu điều kiện:
if x > 0:
    print("Dương")
else:
    print("Không dương")

🔸 Vòng lặp:
for i in range(5):
    print(i)

🔸 Hàm:
def greet(name):
    print("Xin chào", name)

greet("Lan")

🔸 Danh sách (list):
fruits = ["Táo", "Cam", "Xoài"]
for fruit in fruits:
    print(fruit)`;
      break;

    case "Java":
      description = 
`🔸 Giới thiệu:
Java là ngôn ngữ lập trình hướng đối tượng, mạnh mẽ, được dùng phổ biến cho ứng dụng doanh nghiệp, Android,...

🔸 Ví dụ đơn giản:
public class Hello {
  public static void main(String[] args) {
    System.out.println("Xin chào Java!");
  }
}

🔸 Biến và kiểu dữ liệu:
int age = 20;
String name = "Nam";
boolean isStudent = true;

🔸 Phép toán:
int a = 10, b = 3;
System.out.println(a + b);           // cộng
System.out.println(Math.pow(a, b));  // lũy thừa

🔸 Câu điều kiện:
if (age >= 18) {
  System.out.println("Đủ tuổi");
} else {
  System.out.println("Chưa đủ tuổi");
}

🔸 Vòng lặp:
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}

🔸 Hàm:
public static void greet(String name) {
  System.out.println("Xin chào " + name);
}

greet("Nam");`;
      break;

    case "C":
      description = 
`🔸 Giới thiệu:
C là ngôn ngữ lập trình cấp thấp, hiệu suất cao, thường dùng cho hệ thống nhúng, lập trình hệ điều hành,...

🔸 Ví dụ in ra màn hình:
#include <stdio.h>

int main() {
    printf("Xin chào C!\\n");
    return 0;
}

🔸 Biến và kiểu dữ liệu:
int x = 5;
float y = 3.14;
char ch = 'A';

🔸 Phép toán:
int a = 10, b = 3;
printf("%d\\n", a + b);  // cộng
printf("%d\\n", a * b);  // nhân

🔸 Câu điều kiện:
if (x > 0) {
    printf("Dương\\n");
} else {
    printf("Không dương\\n");
}

🔸 Vòng lặp:
for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);
}

🔸 Hàm:
int sum(int a, int b) {
    return a + b;
}

printf("%d\\n", sum(2, 3));`;
      break;

    case "JavaScript":
      description =
`🔸 Giới thiệu:
JavaScript là ngôn ngữ kịch bản cho web, dùng để tương tác, xử lý sự kiện,...

🔸 In ra màn hình:
console.log("Xin chào JavaScript!");

🔸 Biến và kiểu dữ liệu:
let x = 5;
const y = 3.14;
var name = "An";

🔸 Phép toán:
console.log(x + y); // cộng
console.log(x ** 2); // lũy thừa

🔸 Câu điều kiện:
if (x > 0) {
  console.log("Dương");
} else {
  console.log("Không dương");
}

🔸 Vòng lặp:
for (let i = 0; i < 5; i++) {
  console.log(i);
}

🔸 Hàm:
function greet(name) {
  console.log("Xin chào " + name);
}

greet("An");`;
      break;

    default:
      description = "Bài học đang được cập nhật...";
  }

  programmingDescription.textContent = description;
}

// Tính toán máy tính tiểu học (dùng eval, cẩn thận input)
function calculatePrimary() {
  const expr = document.getElementById('expressionPrimary').value.trim();
  const resultEl = document.getElementById('resultPrimary');
  if (!expr) {
    resultEl.textContent = "Vui lòng nhập biểu thức.";
    return;
  }

  try {
    // Chỉ cho phép các ký tự toán học an toàn (số, +-*/().)
    if (/[^0-9+\-*/().\s]/.test(expr)) {
      resultEl.textContent = "Biểu thức không hợp lệ (chỉ dùng số và + - * / ( )).";
      return;
    }
    const result = eval(expr);
    resultEl.textContent = `Kết quả: ${result}`;
  } catch {
    resultEl.textContent = "Biểu thức không hợp lệ.";
  }
}

// Tính toán máy tính cấp 2 (hỗ trợ ^ và sqrt())
function calculateSecondary() {
  let expr = document.getElementById('expressionSecondary').value.trim();
  const resultEl = document.getElementById('resultSecondary');
  if (!expr) {
    resultEl.textContent = "Vui lòng nhập biểu thức.";
    return;
  }

  try {
    // Chuyển ^ thành lũy thừa Math.pow(a,b)
    expr = expr.replace(/(\d+)\s*\^\s*(\d+)/g, 'Math.pow($1,$2)');

    // Chuyển sqrt(x) thành Math.sqrt(x)
    expr = expr.replace(/sqrt\s*\(([^)]+)\)/g, 'Math.sqrt($1)');

    // Kiểm tra ký tự an toàn
    if (/[^0-9+\-*/().\sMathpowqrt]/i.test(expr)) {
      resultEl.textContent = "Biểu thức không hợp lệ.";
      return;
    }

    // Thực hiện tính toán
    // eslint-disable-next-line no-eval
    const result = eval(expr);
    if (isNaN(result)) {
      resultEl.textContent = "Biểu thức không hợp lệ.";
    } else {
      resultEl.textContent = `Kết quả: ${result}`;
    }
  } catch {
    resultEl.textContent = "Biểu thức không hợp lệ.";
  }
}

// Menu "Chọn máy tính"
menuBtn.addEventListener('click', () => {
  createDropdown(menuBtn, [
    { label: 'Máy tính tiểu học', action: showPrimary },
    { label: 'Máy tính cấp 2', action: showSecondary }
  ]);
});

// Menu "Học lập trình"
leftMenuBtn.addEventListener('click', () => {
  createDropdown(leftMenuBtn, [
    { label: 'Python', action: () => showProgramming('Python') },
    { label: 'Java', action: () => showProgramming('Java') },
    { label: 'C', action: () => showProgramming('C') },
    { label: 'JavaScript', action: () => showProgramming('JavaScript') }
  ]);
});

// Xử lý tính toán khi nhấn nút
calcBtnPrimary.addEventListener('click', calculatePrimary);
calcBtnSecondary.addEventListener('click', calculateSecondary);

// Mặc định mở máy tính tiểu học
showPrimary();
