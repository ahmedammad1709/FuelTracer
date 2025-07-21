function calculateAverage() {
    const distance = parseFloat(document.getElementById('distance').value);
    const fuel = parseFloat(document.getElementById('fuel').value);
    const result = document.getElementById('result');

    if (isNaN(distance) || isNaN(fuel) || distance <= 0 || fuel <= 0) {
        result.innerHTML = "Please enter valid positive numbers!";
        result.style.color = "red";
        return;
    }

    const average = (distance / fuel).toFixed(2);
    result.innerHTML = `Fuel Average : <strong>${average} km/l</strong>`;
    result.style.color = "#fff";
}
