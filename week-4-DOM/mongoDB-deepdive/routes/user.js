const { Router } = require("express");
const router = Router();
const zod = require("zod");
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");

const userSignupSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(4),
});

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  const validationResult = userSignupSchema.safeParse(req.body);

  if (!validationResult.success) {
    res.status(400).json({
      msg: "Invalid request data",
      errors: validationResult.error.issues,
    });
    return;
  }

  const { username, password } = validationResult.data;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.status(403).json({
        msg: "User already exist",
      });
    } else {
      const User = await User.create({
        username,
        password,
      });

      res.status(201).json({
        msg: "User created Successfully",
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: "Error creating User",
      error: err.message,
    });
  }
});

router.get("/courses", async(req, res) => {
  // Implement listing all courses logic
  const allCourses=await Course.find({})
    res.json({
        allCourses
    })
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
