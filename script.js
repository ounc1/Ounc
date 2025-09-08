// إضافة السنة تلقائياً في الفوتر
document.getElementById("year").textContent = new Date().getFullYear();

// تحديث وقت آخر تحديث
function updateTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString("ar-EG", {
    hour: "2-digit",
    minute: "2-digit"
  });
  document.getElementById("lastUpdated").textContent = formattedTime;
}
updateTime();

// أسعار الذهب (بيانات وهمية للتجربة)
const prices = [
  { karat: "عيار 24", price: 22.50 },
  { karat: "عيار 22", price: 20.70 },
  { karat: "عيار 21", price: 19.80 },
  { karat: "عيار 18", price: 15.10 }
];

// تعبئة الجدول بالأسعار
function loadPrices() {
  const tbody = document.getElementById("pricesBody");
  tbody.innerHTML = ""; // مسح القديم
  prices.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.karat}</td>
      <td>${item.price.toFixed(2)}</td>
    `;
    tbody.appendChild(row);
  });
}
loadPrices();

// تبديل الوضع الليلي
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "الوضع النهاري"
    : "الوضع الليلي";
});