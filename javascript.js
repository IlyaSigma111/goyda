// Получаем элементы
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');
const changeRoleBtn = document.getElementById('change-role-btn');
const scheduleText = document.getElementById('schedule-text');

// Переключение меню
menuIcon.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
});

// Проверка роли
let isEditor = false; // Начально роль - посетитель

// Смена роли
changeRoleBtn.addEventListener('click', () => {
  isEditor = !isEditor;
  changeRoleBtn.innerText = isEditor ? 'Сменить роль на посетителя' : 'Сменить роль на редактора';
  scheduleText.readOnly = !isEditor;

  if (isEditor) {
    // Загрузка сохраненного расписания
    const savedSchedule = localStorage.getItem('schedule');
    if (savedSchedule) {
      scheduleText.value = savedSchedule;
    }
  }
});

// Сохранение изменений в расписании
scheduleText.addEventListener('input', () => {
  if (isEditor) {
    localStorage.setItem('schedule', scheduleText.value);
  }
});
