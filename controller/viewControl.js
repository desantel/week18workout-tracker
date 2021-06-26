
const path = require('path');

function homePage(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
};

function exercisePage(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'exercise.html'));
};

function statsPage(req, res) {
    res.sendFile(path.join(__dirname, '../public', 'stats.html'));
};

module.exports = {
    homePage,
    exercisePage,
    statsPage
};