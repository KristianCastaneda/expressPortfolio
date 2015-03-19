/*
    Filename: expressPortfolio
    Author's Name: Kristian Castaneda
    Website Name: Personal Portfolio Website (ExpressJS Version)
    File Description: This website is the personal portfolio website (Assignment) restructured to use ExpressJS and NodeJS
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Homepage' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

module.exports = router;
