const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');

const router = express.Router();

////param middleware
//router.param('id', tourController.checkID);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours) //added authcontroller for all protected routes
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(
    authController.protect,
    authController.restrictTo('admin'), //AUTHORIZATION
    tourController.deleteTour,
  );

module.exports = router;
