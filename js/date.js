function formatDate() {
    let today = new Date();
    let todayDat = { weekday: "short", month: "long", day: "numeric", year: "numeric" };
    let formatedDate = today.toLocaleDateString("en-US", todayDat);
    let datePar = formatedDate.replace(",", "").split(" ");
    let [weekday, month, day, year] = datePar;
    let finalDat = `${weekday.toUpperCase()}<br>${month} ${day} ${year}`;
    document.getElementById("dateShow").innerHTML = finalDat;
}

formatDate();