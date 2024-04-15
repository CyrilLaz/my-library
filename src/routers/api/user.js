const session = require("express-session");
const { localPassport } = require("../../middlewares/passport");
const { User } = require("../../models/User");

const router = require("express").Router();

router.use(session({ secret: "SECRET" }));
router.use(localPassport.initialize());
router.use(localPassport.session());

router.get("/login", (req, res) => {
  console.log("render страница с формой входа / регистрации");
});

router.get(
  "/me",
  (req, res, next) => {
    if (!req.isAuthenticated()) {
      console.log("не авторизован");
      return res.redirect("/api/user/login");
    }
    next();
  },
  (req, res) => {
    console.log(req.user);
  }
);

router.post(
  "/login",
  localPassport.authenticate("local", { failureRedirect: "/api/user/login" }),
  (req, res) => {
    // получение данных для входа
    console.log(req.user);
    res.end();
  }
);

router.post("/signup", async (req, res) => {
  // регистрация нового usr
  const { username, password } = req.body;
  try {
    const newUser = await User.createNewUser(username, password);
    return res.json(newUser);
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

module.exports.userRouter = router;
