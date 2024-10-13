const express = require('express');
const path = require('path');
const app = express();

// เสิร์ฟไฟล์ static ทุกไฟล์จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, 'public')));

// เส้นทางเริ่มต้น: เสิร์ฟ index.html เมื่อเข้าถึง root
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// เปิดเซิร์ฟเวอร์ที่พอร์ต 3000
app.listen(3000, function() {
    console.log('แอปตัวอย่างกำลังฟังที่พอร์ต 3000!');
});
