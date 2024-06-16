const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.js");
const zod = require("zod");
const { Admin } = require("../db/index.js");

const router = Router();

const adminSignupSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(4),
});

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic

  // const username=req.body.username
  // const password=req.body.password

  const validationResult = adminSignupSchema.safeParse(req.body);

  const { username, password } = validationResult.data;

  Admin.findOne({
    username,
    password,
  }).then(function (value) {
    if (value) {
      res.status(403).json({
        msg: "Admin already exist",
      });
    } else {
      Admin.create({
        username,
        password,
      })
        .then((admin) => {
          res.status(201).json({
            msg: "Admin created Successfully",
            admin,
          });
        })
        .catch((err) => {
          res.status(500).json({
            msg: "Error creating admin",
            error: err.message,
          });
        });
    }
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
