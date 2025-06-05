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
    case "Java":
      description = `Java là ngôn ngữ lập trình đa nền tảng, phổ biến trong doanh nghiệp.\n\nVí dụ cơ bản:\npublic class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, world!");\n  }\n}`;
      break;
    case "Scratch":
      description = `Scratch là ngôn ngữ lập trình đồ họa, rất phù hợp cho người mới học lập trình.\n\nVí dụ cơ bản:\n- Kéo thả các khối lệnh để tạo trò chơi hoặc hoạt hình.`;
      break;
    case "Các ngôn ngữ khác":
      description = `Các ngôn ngữ lập trình khác bao gồm C++, JavaScript, Ruby, và nhiều hơn nữa.\nBạn có thể tìm hiểu thêm tùy theo sở thích và mục đích.`;
      break;
    default:
      description = "Nội dung đang cập nhật...";
  }

  programmingDescription.innerText = description;
}

// Xử lý menu chọn máy tính bên phải
menuBtn.addEventListener('click', () => {
  const existingMenu = document.getElementById('menuDropdown');
  if (existingMenu) {
    existingMenu.remove();
    return;
  }

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
    <div id="menuPrimary" style="border-bottom: 1px solid #eee; padding:10px; cursor:pointer;">Máy tính tiểu học</div>
    <div id="menuSecondary" style="padding:10px; cursor:pointer;">Máy tính cấp 2</div>
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

// Xử lý menu bên trái (hướng dẫn học lập trình)
leftMenuBtn.addEventListener('click', () => {
  const existingMenu = document.getElementById('sideMenuDropdown');
  if (existingMenu) {
    existingMenu.remove();
    return;
  }

  const menu = document.createElement('div');
  menu.id = 'sideMenuDropdown';
  menu.style.position = 'absolute';
  menu.style.top = leftMenuBtn.getBoundingClientRect().bottom + window.scrollY + 'px';
  menu.style.left = '20px';
  menu.style.background = 'white';
  menu.style.border = '1px solid #ccc';
  menu.style.borderRadius = '5px';
  menu.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
  menu.style.zIndex = 1000;
  menu.style.width = '220px';

  menu.innerHTML = `
    <div id="progPython">Python</div>
    <div id="progJava">Java</div>
    <div id="progScratch">Scratch</div>
    <div id="progOthers">Các ngôn ngữ khác</div>
  `;

  document.body.appendChild(menu);

  function outsideClick(event) {
    if (!menu.contains(event.target) && event.target !== leftMenuBtn) {
      menu.remove();
      document.removeEventListener('click', outsideClick);
    }
  }
  document.addEventListener('click', outsideClick);

  document.getElementById('progPython').onclick = () => {
    showProgramming('Python');
    menu.remove();
  };
  document.getElementById('progJava').onclick = () => {
    showProgramming('Java');
    menu.remove();
  };
  document.getElementById('progScratch').onclick = () => {
    showProgramming('Scratch');
    menu.remove();
  };
  document.getElementById('progOthers').onclick = () => {
    showProgramming('Các ngôn ngữ khác');
    menu.remove();
  };
});

// Hàm tính cho máy tính tiểu học
function calculatePrimary() {
  const expr = document.getElementById('expressionPrimary').value;
  try {
    // Coi như biểu thức toán học bình thường (không có ^ hay sqrt)
    const result = eval(expr);
    document.getElementById('resultPrimary').innerText = `Kết quả: ${result}`;
  } catch {
    document.getElementById('resultPrimary').innerText = 'Biểu thức không hợp lệ!';
  }
}

// Hàm tính cho máy tính cấp 2 (hỗ trợ ^ và sqrt)
function calculateSecondary() {
  let expr = document.getElementById('expressionSecondary').value;
  try {
    expr = expr.replace(/\^/g, '**'); // Thay ^ thành **
    const result = eval(expr);
    document.getElementById('resultSecondary').innerText = `Kết quả: ${result}`;
  } catch {
    document.getElementById('resultSecondary').innerText = 'Biểu thức không hợp lệ!';
  }
}

// Mặc định hiển thị máy tính tiểu học
showPrimary();
