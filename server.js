const express = require("express");
const path = require("path");

const app = express();
const PORT = 5502;

// Serve project files
app.use(express.static(__dirname));

// ================================
// ADMIN LOGIN
// ================================

app.get("/admin", (req, res) => {
    res.sendFile(
        path.join(__dirname, "admin", "login.html")
    );
});

app.get("/admin/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "admin", "login.html")
    );
});

// ================================
// ADMIN DASHBOARD
// ================================

app.get("/admin/dashboard", (req, res) => {
    res.sendFile(
        path.join(__dirname, "admin", "admin.html")
    );
});

// ================================
// START SERVER
// ================================

app.listen(PORT, () => {
    console.log(
        `RCB Hospital server running at http://127.0.0.1:${PORT}`
    );
});