const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.js");
const zod = require("zod");
const { Admin, Course } = require("../db/index.js");

const router = Router();

const adminSignupSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(4),
});

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  const validationResult = adminSignupSchema.safeParse(req.body);

  if (!validationResult.success) {
    res.status(400).json({
      msg: "Invalid request data",
      errors: validationResult.error.issues,
    });
    return;
  }

  const { username, password } = validationResult.data;

  try {
    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      res.status(403).json({
        msg: "Admin already exist",
      });
    } else {
      const admin = await Admin.create({
        username,
        password,
      });

      res.status(201).json({
        msg: "Admin created Successfully"
      });
    }
  } catch (err) {
    res.status(500).json({
      msg: "Error creating admin",
      error: err.message,
    });
  }
});
router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  const title=req.body.title
  const description=req.body.description
  const imageLink=req.body.imageLink
  const price=req.body.price

  Course.create({
    title,
    description,
    imageLink,
    price
  })
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
