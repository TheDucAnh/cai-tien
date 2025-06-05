const menuBtn = document.getElementById('menuBtn');
const calculatorPrimary = document.getElementById('calculatorPrimary');
const calculatorSecondary = document.getElementById('calculatorSecondary');
const programmingContent = document.getElementById('programmingContent');
const programmingTitle = document.getElementById('programmingTitle');
const programmingDescription = document.getElementById('programmingDescription');

const leftMenuBtn = document.getElementById('leftMenuBtn');

// Hiển thị máy tính tiểu học mặc định
function showPrimary() {
  calculatorPrimary.style.display = 'block';
  calculatorSecondary.style.display = 'none';
  programmingContent.style.display = 'none';
  menuBtn.innerText = "Máy tính tiểu học ▼";
}
function showSecondary() {
  calculatorPrimary.style.display = 'none';
  calculatorSecondary.style.display = 'block';
  programmingContent.style.display = 'none';
  menuBtn.innerText = "Máy tính cấp 2 ▼";
}

// Hiển thị nội dung bài học lập trình
function showProgramming(language) {
  calculatorPrimary.style.display = 'none';
  calculatorSecondary.style.display = 'none';
  programmingContent.style.display = 'block';

  menuBtn.innerText = "Chọn máy tính ▼";
  programmingTitle.innerText = `Bài học: ${language}`;

  let description = "";

  switch(language) {
    case "Python":
      description = `Python là ngôn ngữ lập trình dễ học, phổ biến.\n\nVí dụ cơ bản:\nprint("Hello, world!")\nx = 5\ny = 10\nprint(x + y)`;
      break;
    case "C++":
      description = `C++ là ngôn ngữ lập trình mạnh mẽ, được dùng cho phần mềm hệ thống.\n\nVí dụ cơ bản:\n#include <iostream>\nusing namespace std;\n\nint main() {\n  cout << "Hello, world!" << endl;\n  return 0;\n}`;
      break;
    case "Java":
      description = `Java là ngôn ngữ lập trình đa nền tảng, phổ biến trong doanh nghiệp.\n\nVí dụ cơ bản:\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, world!");\n  }\n}`;
      break;
    default:
      description = "Nội dung đang cập nhật...";
  }

  programmingDescription.innerText = description;
}

// Xử lý menu chọn máy tính bên phải
menuBtn.addEventListener('click', () => {
  // Nếu menu đã hiện thì xóa menu cũ
  const existingMenu = document.getElementById('menuDropdown');
  if (existingMenu) {
    existingMenu.remove();
    return;
  }

  // Tạo menu dropdown bên phải
  const menu = document.createElement('div');
  menu.id = 'menuDropdown';
  menu.style.position = 'absolute';
  menu.style.top = menuBtn.getBoundingClientRect().bottom + window.scrollY + 'px';
  menu.style.right = '20px';
  menu.style.background = 'white';
  menu.style.border = '1px solid #ccc';
  menu.style.borderRadius = '5px';
  menu.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
  menu.style.zIndex = 1000;
  menu.style.width = '180px';

  menu.innerHTML = `
    <div id="menuPrimary" style="border-bottom: 1px solid #eee;">Máy tính tiểu học</div>
    <div id="menuSecondary">Máy tính cấp 2</div>
  `;

  document.body.appendChild(menu);

  function outsideClick(event) {
    if (!menu.contains(event.target) && event.target !== menuBtn) {
      menu.remove();
      document.removeEventListener('click', outsideClick);
    }
  }
  document.addEventListener('click', outsideClick);

  document.getElementById('menuPrimary').onclick = () => {
    showPrimary();
    menu.remove();
  };
  document.getElementById('menuSecondary').onclick = () => {
    showSecondary();
    menu.remove();
  };
});

// Xử lý menu bên trái (bổ sung thêm)
leftMenuBtn.addEventListener('click', () => {
  // Nếu menu đã hiện thì xóa menu cũ
  const existingMenu = document.getElementById('sideMenuDropdown');
  if (existingMenu) {
    existingMenu.remove();
    return;
  }

  // Tạo menu dropdown bên trái
  const menu = document.createElement('div');
  menu.id = 'sideMenuDropdown';
  menu.style.position = 'absolute';
  menu.style.top = leftMenuBtn.getBoundingClientRect().bottom + window.scrollY + 'px';
  menu