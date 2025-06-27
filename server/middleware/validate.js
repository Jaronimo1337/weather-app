const { query, validationResult } = require('express-validator');

const validateWeatherQuery = [
  query('city')
    .trim()
    .notEmpty()
    .withMessage('City name is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('City name must be between 1 and 50 characters')
    .matches(/^[a-zA-Z\s\-'\.]+$/)
    .withMessage('City name contains invalid characters')
    .escape(), 
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: errors.array()[0].msg
      });
    }
    next();
  }
];

module.exports = {
  validateWeatherQuery
};