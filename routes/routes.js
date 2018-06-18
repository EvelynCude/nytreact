const router = require("express").Router();
const articlesController = require("../controllers/articlesController");
const path = require("path");

router.route("/api/articles")
    .get(articlesController.findAll)
    .post(articlesController.create);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});