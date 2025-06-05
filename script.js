const menuBtn = document.getElementById('menuBtn');
const calculatorPrimary = document.getElementById('calculatorPrimary');
const calculatorSecondary = document.getElementById('calculatorSecondary');

// Hiển thị máy tính tiểu học mặc định
function showPrimary() {
  calculatorPrimary.style.display = 'block';
  calculatorSecondary.style.display = 'none';
  menuBtn.innerText = "Máy tính tiểu học ▼";
}
function showSecondary() {
  calculatorPrimary.style.display = 'none';
  calculatorSecondary.style.display = 'block';
  menuBtn.innerText = "Máy tính cấp 2 ▼";
}

// Xử lý menu khi bấm nút
menuBtn.addEventListener('click', () => {
  // Nếu menu đã hiện thì xóa menu cũ
  const existingMenu = document.getElementById('menuDropdown');
  if (existingMenu) {
    existingMenu.remove();
    return;
  }

  // Tạo menu dropdown
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
    <div style="padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;" id="menuPrimary">Máy tính tiểu học</div>
    <div style="padding: 10px; cursor: pointer;" id="menuSecondary">Máy tính cấp 2</div>
  `;

  document.body.appendChild(menu);

  // Bấm ra ngoài menu thì đóng menu
  function outsideClick(event) {
    if (!menu.contains(event.target) && event.target !== menuBtn) {
      menu.remove();
      document.removeEventListener('click', outsideClick);
    }
  }
  document.addEventListener('click', outsideClick);

  // Chọn menu tiểu học
  document.getElementById('menuPrimary').onclick = () => {
    showPrimary();
    menu.remove();
  };
  // Chọn menu cấp 2
  document.getElementById('menuSecondary').onclick = () => {
    showSecondary();
    menu.remove();
  };
});

// Hàm tính máy tính tiểu học (dùng eval)
function calculatePrimary() {
  const expression = document.getElementById('expressionPrimary').value.trim();
  const resultEl = document.getElementById('resultPrimary');
  if (!expression) {
    resultEl.innerText = "Vui lòng nhập phép tính!";
    resultEl.style.color = "red";
    return;
  }
  try {
    const result = eval(expression);
    resultEl.innerText = `Kết quả: ${result}`;
    resultEl.style.color = "#333";
  } catch {
    resultEl.innerText = "Phép tính không hợp lệ!";
    resultEl.style.color = "red";
  }
}

// Hàm tính máy tính cấp 2 hỗ trợ ^ và sqrt()
function calculateSecondary() {
  const expression = document.getElementById('expressionSecondary').value.trim();
  const resultEl = document.getElementById('resultSecondary');
  if (!expression) {
    resultEl.innerText = "Vui lòng nhập phép tính!";
    resultEl.style.color = "red";
    return;
  }

  try {
    // Thay thế ^ thành ** và sqrt thành Math.sqrt
    const safeExpression = expression
      .replace(/\^/g, '**')
      .replace(/sqrt/g, 'Math.sqrt');

    const result = eval(safeExpression);
    resultEl.innerText = `Kết quả: ${result}`;
    resultEl.style.color = "#333";
  } catch {
    resultEl.innerText = "Phép tính không hợp lệ!";
    resultEl.style.color = "red";
  }
}

// Mặc định hiển thị máy tính tiểu học khi tải trang
showPrimary();