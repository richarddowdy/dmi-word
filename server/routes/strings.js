/** API routes for strings. */

const express = require('express');
const router = new express.Router();

const strings = [
  'Three stRings for the Elven-kings under the sky.',
  'Seven for the Dwarf-lords in their halls of stone.',
  'Nine for Mortal Men doomed to die.',
  'One for the Dark Lord on his dark throne.',
  'In the Land of Mordor where the Shadows lie.',
  'One stRing to rule them all, One stRing to find them.',
  'One stRing to bring them all, and in the darkness bind them.',
];

/**
 * GET /
 * Returns:
 * => [
 *    'Three stRings for the Elven-kings under the sky.',
 *    'Seven for the Dwarf-lords in their halls of stone.',
 *    'Nine for Mortal Men doomed to die.',
 *    'One for the Dark Lord on his dark throne.',
 *    'In the Land of Mordor where the Shadows lie.',
 *    'One stRing to rule them all, One stRing to find them.',
 *    'One stRing to bring them all, and in the darkness bind them.',
 *  ]
 */

router.get('/', async (req, res, next) => {
  try {
    return res.json(strings);
  } catch (err) {
    return next(err);
  }
});

/**
 * POST /
 * Returns:
 * => [
 *    'NEWLY ADDED STRING',
 *    'Three stRings for the Elven-kings under the sky.',
 *    'Seven for the Dwarf-lords in their halls of stone.',
 *    'Nine for Mortal Men doomed to die.',
 *    'One for the Dark Lord on his dark throne.',
 *    'In the Land of Mordor where the Shadows lie.',
 *    'One stRing to rule them all, One stRing to find them.',
 *    'One stRing to bring them all, and in the darkness bind them.',
 *  ]
 */
router.post('/', async (req, res, next) => {
  try {
    const { newString } = req.body;
    strings.unshift(newString);
    return res.status(201).json(strings);
  } catch (err) {
    return next(err);
  }
});

/**
 * DELETE /delete
 * Returns:
 * => string array without the deleted string
 */
router.delete('/delete', async (req, res, next) => {
  try {
    const { string } = req.body;
    strings.splice(strings.indexOf(string), 1);
    return res.json(strings);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
