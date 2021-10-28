const express = require('express');
const { Place, validateSpace } = require('../models/place');

const router = express.Router();
const auth = require('../middleware/auth');
const getUserDetails = require('../middleware/getUserDetails');

router.post('/', auth, async (req, res) => {
  try {
    const { error } = validateSpace(req.body);
    if (error) res.status(400).send(error.details[0].message);
    const place = new Place(req.body);
    place.user = req.user._id;
    await place.save();
    res.send(place);
  } catch (error) {
    res.send('An error occured');
  }
});

router.get('/', getUserDetails, async (req, res) => {
  try {
    const { myPlaces } = req.query;
    const query = {};
    if (req.user && myPlaces) {
      query.user = req.user._id;
    }
    const places = await Place.find(query);
    res.send(places);
  } catch (error) {
    res.send('An error occured');
  }
});

router.delete('/', getUserDetails, async (req, res) => {
  try {
    if (!req.body.id) return res.status(400).send('Id is required');
    const place = await Place.findById(req.body.id);

    switch (true) {
      case !place:
        res.status(400).send('Place not found');
        break;
      case !place.user.equals(req.user._id):
        res.status(403).send('access denied');
        break;
      case !!place._id:
        place.delete();
        res.send('Space deleted');
        break;
      default:
        console.log('default');
    }
  } catch (error) {
    res.send('An error occured');
  }
});

module.exports = router;
