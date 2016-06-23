LOCAL DEV SETUP 
* change to dev database in code: this.root = af.database.object('/root/dev');
* install nodeJS
* npm install -g angular-cli
* npm install
* ng serve

--- 

LOCAL HOSTING
* xcopy C:\temp\hat\dist C:\inetpub\wwwroot /s /e
* Next Browse http://<machine name>/index.html

--- 

FEATURES
* Uses Firebase Real Time DB 
* Build with Angular 2
* Material Design goodness

--- 

HOSTING
* change dev database to prod: this.root = af.database.object('/root');
* make sure there are no uncommited changes
* delete the dist directory 
* Deploy to gh-pages using this command: ng github-pages:deploy --message "Deploying to github pages"
* You may cache your github credentials using this to prevent from prompt every time you push/deploy code: https://discventionstech.wordpress.com/2016/06/17/cache-github-credentials-in-git/
* Visit http://tkhemani.github.io/ngCliSeed (old url: http://hatplay.firebaseapp.com) for live use

--- 

UPCOMING GLOBAL FEATURES
- [ ] CHROME/ANDROID NOTIFICATIONS WHEN ACTIONS ARE REQUIRED FROM PLAYER
- [ ] start game only when both player are in the session
- [x] deploy to gh pages
- [ ] puppy like md-toolbar at top
- [x] name dropdown
- [x] Minify, uglify and gzip build code (using ng cli)
- [ ] player count in session
- [x] Cloud deploy on Firebase
- [ ] Encryption
- [ ] offline template compiler for faster initial load

--- 

UPCOMING HANGMAN FEATURES
- [x] Show ans. if wrong
- [x] * for space
- [x] On Screen Keyboard for entering text toggleable by radio. Should have vovels highlighted and also options user enters
- [ ] don't allow same option to be entered again 
- [x] Notification or Color indicator when action required like for giving movie
- [ ] Chat
- [ ] Refresh should not refresh Bluff and vice versa
- [x] don't subs 1 for wrong guess
- [x] give more points for less options used
- [ ] points can be redeemed for options in case player is out of options for a game
- [ ] Optionally Presist changes to DB for ever so as to never reset game

--- 

UPCOMING BLUFF FEATURES
- [ ] game should persist across mobile and desktop...

--- 

ISSUES
