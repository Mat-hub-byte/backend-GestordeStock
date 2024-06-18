const { check, validationResult } = require("express-validator");

/**
 * Middleware de validación para la creación de un stock.
 * @typedef {Array} validateStock
 * @property {Function} - Middleware para validar el campo 'name'.
 * @property {Function} - Middleware para validar el campo 'price'.
 * @property {Function} - Middleware para validar el campo 'description'.
 * @property {Function} - Middleware para validar el campo 'category'.
 * @property {Function} - Middleware para validar el campo 'amount'.
 * @property {Function} - Middleware para validar el campo 'image'.
 * @property {Function} - Middleware final para verificar si hay errores de validación.
 */
const validateStock = [
  check("name").notEmpty().withMessage("El nombre es requerido"),
  check("price").isNumeric().withMessage("El precio debe ser un número"),
  check("description").notEmpty().withMessage("La descripcion es requerida"),
  check("category").isInt().withMessage("La categoria debe ser un numero entero"),
  check("amount").isInt().withMessage("La cantidad debe ser un numero entero"),
  check("image").notEmpty().withMessage("La imagen es requerida"),
  // Middleware final para verificar si hay errores de validación
  (req, res, next) => {
    // Recoge los errores de validación en la request
    const errors = validationResult(req);
    // Si hay errores, responde con un estado 400 y un JSON con los errores
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Si no hay errores, pasa al siguiente middleware o controlador
    next();
  },
];

module.exports = validateStock;
