function simulateSensorData() {
    const sensors = [
        { name: "درجة الحرارة", value: (20 + Math.random() * 10).toFixed(1) + "°C" },
        { name: "الرطوبة", value: (40 + Math.random() * 20).toFixed(1) + "%" },
        { name: "غاز", value: Math.random() > 0.8 ? "تم الكشف عن غاز!" : "لا يوجد غاز" }
    ];
    return sensors[Math.floor(Math.random() * sensors.length)];
}

function displayNotification(sensorData) {
    const notificationsDiv = document.getElementById('notifications');
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = ${sensorData.name}: ${sensorData.value};
    notificationsDiv.prepend(notification);

    setTimeout(() => {
        notification.remove();
    }, 10000);
}

setInterval(() => {
    const data = simulateSensorData();
    document.getElementById("sensorData").textContent = ${data.name}: ${data.value};
    displayNotification(data);
}, 3000);
