// script.js

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

// Hàm tạo dropdown, nhận nút và danh sách option {label, action}
function createDropdown(button, options) {
  closeDropdown();

  dropdownMenu = document.createElement('div');
  dropdownMenu.classList.add('dropdown-menu');

  options.forEach(opt => {
    const item = document.createElement('div');
    item.classList.add('dropdown-item');
    item.textContent = opt.label;
    item.onclick = () => {
      opt.action();
      closeDropdown();
    };
    dropdownMenu.appendChild(item);
  });

  // Tính vị trí dropdown dưới nút
  const rect = button.getBoundingClientRect();
  dropdownMenu.style.top = `${rect.bottom + window.scrollY}px`;
  dropdownMenu.style.left = `${rect.left + window.scrollX}px`;

  document.body.appendChild(dropdownMenu);
}

function closeDropdown() {
  if (dropdownMenu) {
    dropdownMenu.remove();
    dropdownMenu = null;
  }
}

// Đóng dropdown nếu click ngoài
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

// Hiện máy tính Tiểu học
function showPrimary() {
  calculatorPrimary.style.display = 'block';
  calculatorSecondary.style.display = 'none';
  programmingContent.style.display = 'none';
  menuBtn.textContent = "Tiểu học ▼";
}

// Hiện máy tính Cấp 2
function showSecondary() {
  calculatorPrimary.style.display = 'none';
  calculatorSecondary.style.display = 'block';
  programmingContent.style.display = 'none';
  menuBtn.textContent = "Cấp 2 ▼";
}

// Hiện phần lập trình theo ngôn ngữ
function showProgramming(language) {
  calculatorPrimary.style.display = 'none';
  calculatorSecondary.style.display = 'none';
  programmingContent.style.display = 'block';

  leftMenuBtn.textContent = language + " ▼";
  programmingTitle.textContent = `Bài học lập trình: ${language}`;

  // Nội dung ví dụ (bạn có thể thay bằng nội dung khác)
  const lessons = {
    Python: "print('Hello World')\n\nPython là ngôn ngữ dễ học, phổ biến.",
    JavaScript: "console.log('Hello World');\n\nDùng nhiều trong web.",
    Java: "public class Main {\n  public static void main(String[] args) {\n    System.out.println(\"Hello World\");\n  }\n}\n\nNgôn ngữ hướng đối tượng mạnh.",
    C: "#include <stdio.h>\nint main() {\n  printf(\"Hello World\\n\");\n  return 0;\n}\n\nNgôn ngữ cơ bản và hiệu năng cao."
  };
  programmingDescription.textContent = lessons[language] || "Nội dung chưa có.";
}

// Xử lý tính toán máy tính tiểu học (đơn giản, chỉ phép + - * /)
calcBtnPrimary.addEventListener('click', () => {
  const expr = document.getElementById('expressionPrimary').value.trim();
  const resultEl = document.getElementById('resultPrimary');

  if (!expr) {
    resultEl.textContent = "Vui lòng nhập biểu thức.";
    return;
  }

  // Chỉ cho phép số và phép + - * /
  if (/[^0-9+\-*/().\s]/.test(expr)) {
    resultEl.textContent = "Biểu thức chỉ được chứa số và phép + - * /";
    return;
  }

  try {
    const result = eval(expr);
    resultEl.textContent = `Kết quả: ${result}`;
  } catch {
    resultEl.textContent = "Biểu thức không hợp lệ.";
  }
});

// Xử lý tính toán máy tính cấp 2 (hỗ trợ ^, sqrt)
calcBtnSecondary.addEventListener('click', () => {
  let expr = document.getElementById('expressionSecondary').value.trim();
  const resultEl = document.getElementById('resultSecondary');

  if (!expr) {
    resultEl.textContent = "Vui lòng nhập biểu thức.";
    return;
  }

  // Thay ^ thành Math.pow
  expr = expr.replace(/(\d+(\.\d+)?|\([^()]+\))\s*\^\s*(\d+(\.\d+)?|\([^()]+\))/g, 'Math.pow($1,$3)');

  // Thay sqrt(x) thành Math.sqrt(x)
  expr = expr.replace(/sqrt\s*\(([^()]+)\)/g, 'Math.sqrt($1)');

  // Chỉ cho phép ký tự hợp lệ (số, toán tử, chữ trong Math.pow, Math.sqrt, dấu ngoặc)
  if (/[^0-9+\-*/().,Mathpowsqrt \t]/i.test(expr)) {
    resultEl.textContent = "Biểu thức không hợp lệ (chỉ dùng số, + - * / ^ sqrt, dấu ngoặc).";
    return;
  }

  try {
    const result = eval(expr);
    resultEl.textContent = `Kết quả: ${result}`;
  } catch {
    resultEl.textContent = "Biểu thức không hợp lệ.";
  }
});

// Mở dropdown menu khi bấm nút Tiểu học / Cấp 2
menuBtn.addEventListener('click', () => {
  createDropdown(menuBtn, [
    { label: "Tiểu học", action: showPrimary },
    { label: "Cấp 2", action: showSecondary }
  ]);
});

// Mở dropdown menu khi bấm nút Lập trình
leftMenuBtn.addEventListener('click', () => {
  createDropdown(leftMenuBtn, [
    { label: "Python", action: () => showProgramming("Python") },
    { label: "JavaScript", action: () => showProgramming("JavaScript") },
    { label: "Java", action: () => showProgramming("Java") },
    { label: "C", action: () => showProgramming("C") }
  ]);
});

// Mặc định hiện máy tính Tiểu học khi load trang
showPrimary();
