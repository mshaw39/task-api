import { body, param } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';

export const validateTask = [
  body('title')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Title is required')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be at least 3 and at most 100 characters'),

  body('completed')
    .optional()
    .isBoolean()
    .withMessage('Completed must be true or false'),

  checkValidationResults
];

export const validateTaskId = [
  param('id')
    .isInt()
    .withMessage('ID must be a a number'),
    

  checkValidationResults
];
