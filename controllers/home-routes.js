const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("login");
});

router.get("/sign-up", (req, res) => {
  res.render("sign-up");
});

router.get("/single-video", (req, res) => {
  res.render("single-video");
});

router.get("/homepage", (req, res) => {
  res.render("homepage");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

router.get("/category/live", (req, res) => {
  res.render("category");
});

module.exports = router;

// Used from Jarod's branch for testing, will delete for merge w/ sandbox branch
