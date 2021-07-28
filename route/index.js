const usersRouter = require("./users");
const reviewsRouter = require("./reviews");

function router(app) {
  app.use("/api/users", usersRouter);

  app.use("/api/reviews", reviewsRouter);

  app.use("/", (req, res) => {
    res.json({ message: "success" });
  });
}

module.exports = router;
