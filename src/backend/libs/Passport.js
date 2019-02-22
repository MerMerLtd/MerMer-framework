const path = require('path');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const FacebookTokenStrategy = require('passport-facebook-token');
const dvalue = require('dvalue');
const Bot = require(path.resolve(__dirname, 'Bot.js'));

class Passport extends Bot {
  constructor() {
    super();
    this.name = 'Passport';
  }

  init({ config, database, logger, i18n }) {
    return super.init({ config, database, logger, i18n })
    .then(() => {
      const facebookProcess = (accessToken, refreshToken, profile, done) => {
        if(!profile) {
          done(null, false);
          return;
        }
        const user = {
          type: 'facebook',
          accessToken: accessToken,
          refreshToken: refreshToken,
          condition: {
            'facebook.id': profile.id
          },
          profile: {
            username: profile.displayName,
            email: profile.emails[0].value,
            emails: profile.emails.map(function (v) { return v.value; }),
            photo: profile.photos[0].value,
            photos: profile.photos.map(function (v) { return v.value; }),
            allowmail: false,
            facebook: {
              id: profile.id,
              username: profile.displayName,
              emails: profile.emails,
              photos: profile.photos,
            }
          }
        };
      }

      passport.use(new FacebookStrategy({
        clientID: config.facebook.id,
        clientSecret: config.facebook.secret,
        callbackURL: "/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email']
      },facebookProcess));
      passport.use(new FacebookTokenStrategy({
          clientID: config.facebook.id,
          clientSecret: config.facebook.secret,
          profileFields: ['id', 'displayName', 'photos', 'email']
        },
        facebookProcess
      ));
      passport.serializeUser((user, done) => {
        done(null, user);
      });
      passport.deserializeUser((user, done) => {
        done(null, user);
      });
    });
  }

  start() {
    return super.start();
  }


}

module.exports = Passport;