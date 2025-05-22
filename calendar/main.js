function createCalendar(year, month) {
  const calendar = document.getElementById("calendar");
  calendar.innerHTML = ""; 

  // タイトル（月表示）
  const title = document.createElement("div");
  title.id = "month-title";
  title.textContent = `${year}年${month}月`;
  calendar.appendChild(title);

  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];

  // 曜日のヘッダー
  const weekdaysRow = document.createElement("div");
  weekdaysRow.className = "weekdays";
  weekdays.forEach(day => {
    const div = document.createElement("div");
    div.textContent = day;
    weekdaysRow.appendChild(div);
  });
  calendar.appendChild(weekdaysRow);

  // 日付
  const daysGrid = document.createElement("div");
  daysGrid.className = "days";

  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();

  // 空欄
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("div");
    empty.className = "empty";
    daysGrid.appendChild(empty);
  }

  // 日付マス
  for (let date = 1; date <= lastDate; date++) {
    const cell = document.createElement("div");
    cell.textContent = date;

    const dayOfWeek = new Date(year, month - 1, date).getDay();
    if (dayOfWeek === 0) cell.classList.add("sunday");
    if (dayOfWeek === 6) cell.classList.add("saturday");

    daysGrid.appendChild(cell);
  }

  calendar.appendChild(daysGrid); 
}

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
createCalendar(year, month);


