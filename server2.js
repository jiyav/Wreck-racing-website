const express = require("express");
const path = require("path");
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/static/views/home2.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "home2.html"));
});

app.get("/static/views/contact.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "contact.html"));
});
app.get("/static/views/gallery.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "gallery.html"));
});

app.get("/static/views/leadership.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "leadership.html"));
});
app.get("/static/views/projects.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "views", "projects.html"));
});

app.get("/*", (req, res) => {
    //sends path back to GET requests from fetch API
    //so all incoming path's will be given the content of index.html
    //fetch API is client-side routing when client requests an https file from the server
    //for security reasons, we cannot upload our own files to the server for clients to select
    //bc this is a security issue
    res.sendFile(path.resolve(__dirname, "frontend", "index2.html"));
});

app.listen(process.env.PORT || 3001, () => console.log("Server running..."));

