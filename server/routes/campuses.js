
const express = require('express');
const router = new express.Router();
module.exports = router;   // this is key ****

router.get('/', (req, res) => res.send('you got the campuses route'))

// return all campuses



// return a single campus by id



// PENDING find a student who belongs to a campus



//  delte a campus
