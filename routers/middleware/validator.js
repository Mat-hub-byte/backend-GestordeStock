const { check, validationResult } = require("express-validator");

// Validación para crear un stock
const validateStock = [
  check("name").notEmpty().withMessage("Name is required"),
  check("price").isNumeric().withMessage("Price must be a number"),
  check("description").notEmpty().withMessage("Description is required"),
  check("category").isInt().withMessage("Category must be an integer"),
  check("amount").isInt().withMessage("Amount must be an integer"),
  check("image").notEmpty().withMessage("Image is required"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateStock;
