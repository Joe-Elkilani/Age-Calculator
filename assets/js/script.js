const dateInp = document.getElementById("dateInp");
const submitBtn = document.getElementById("submitBtn");
const yearsSpan = document.getElementById("years");
const monthsSpan = document.getElementById("month");
const weeksSpan = document.getElementById("week");
const daysSpan = document.getElementById("day");
const alertBox = document.getElementById("alertBox");

submitBtn.addEventListener("click", function () {
    const birthDate = new Date(dateInp.value);
    const now = new Date();

    if (!dateInp.value || isNaN(birthDate.getTime()) || birthDate > now) {
        showAlert("Please enter a valid birth date.");
        return;
    }

    const diffTime = now - birthDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(diffDays / 7);

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    yearsSpan.textContent = years;
    monthsSpan.textContent = months;
    weeksSpan.textContent = weeks;
    daysSpan.textContent = days;
    dateInp.value == "";
});
function showAlert(message) {
    alertBox.textContent = "‼ " + message + " ‼";
    alertBox.classList.remove("hidden");
    setTimeout(() => {
        alertBox.classList.add("hidden");
    }, 5000);
}