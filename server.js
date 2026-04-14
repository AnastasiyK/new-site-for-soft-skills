const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3002;
const DATA_FILE = path.join(__dirname, 'data.json');

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

app.post('/api/application', async (req, res) => {
    try {
        const newApplication = {
            id: Date.now(),
            timestamp: new Date().toISOString(),
            ...req.body
        };

    
        let applications = [];
        try {
            const data = await fs.readFile(DATA_FILE, 'utf-8');
            applications = JSON.parse(data);
        } catch (err) {
        }

        applications.push(newApplication);

        await fs.writeFile(DATA_FILE, JSON.stringify(applications, null, 2), 'utf-8');
        
        console.log('Новая заявка сохранена:', newApplication);
        res.json({ success: true, message: 'Заявка принята' });
        
    } catch (error) {
        console.error(' Ошибка:', error);
        res.status(500).json({ success: false, message: 'Ошибка сервера' });
    }
});

app.get('/api/applications', async (req, res) => {
    try {
        const data = await fs.readFile(DATA_FILE, 'utf-8');
        res.json(JSON.parse(data));
    } catch {
        res.json([]);
    }
});

app.listen(PORT, () => {
    console.log(` Сервер запущен: http://localhost:${PORT}`);
    console.log(` Заявки сохраняются в: ${DATA_FILE}`);
});