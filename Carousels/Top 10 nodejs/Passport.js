const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const app = express();

passport.use(new LocalStrategy(
    function (username, password, done) {
        // Here you would check the username and password against your database
        if (username === 'admin' && password === 'password') {
            return done(null, { id: 1, username: 'admin' });
        } else {
            return done(null, false);
        }
    }
));

app.use(passport.initialize());

app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login'
}));