const router = require("express").Router();

const homeRoutes = require("./home-routes.js");

router.use("/", homeRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;

// Used from Jarod's branch for testing, will delete for merge w/ sandbox branch
