const express = require('express');
const router = new express.Router();

const strings = [
  'This is an array of strings.',
  'Silly, silly strings',
  'One Ring to rule them all',
];

router.get('/', async (req, res, next) => {
  try {
    return res.json(strings);
  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { newString } = req.body;
    strings.unshift(newString);
    return res.json(strings);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
