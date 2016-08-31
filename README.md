LOCAL DEV SETUP 
* change to dev database in code: this.root = af.database.object('/root/dev');
* install nodeJS
* npm install -g angular-cli
* npm install
* ng serve

--- 

LOCAL HOSTING
* Use this to host on IIS on a windows box: xcopy C:\temp\hat\dist C:\inetpub\wwwroot /s /e
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

DB
* Database Dashboard: https://console.firebase.google.com/project/project-7548713803590560188/database/data 

---

UPCOMING GLOBAL FEATURES
- [ ] Change tabs to sidebar for better mobile UX (currently mobile landscape mode shows max 2 tabs)
- [ ] Rename the repo and site to something gamey
- [ ] Create alias for the site using some free alias svc
- [ ] Service Workers (courtesy of ng cli) for offline support 
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
- [ ] Add option to use bluetooth in offline scenarios
- [ ] Allow single player offline/online play using presaved movies for hangman and randomizer for play against computer in SPS and rummy 
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
- [ ] Instant rewards are fun, so give points for each successful catch and/or bluff
- [ ] Allow for smaller games with a subset of the deck like say8 cards each ie 16 total cards comprising of just 1 to 4 of the deck or even random 16 cards from the deck...let the user decide
--- 

UPCOMING SPS FEATURES
- [ ] hand icons instead of text
- [ ] when someone wins show inline instead of text below
- [ ] Allow players to configure a games of stay 5, so after someone gets 5, record it in scoreboard (So after 1st win, set T: 0/5, H: 0/3 to T: 1/0, H: 0/0 ) and reset score to 0 and show banner that T won this game. 

--- 

MORE GAME IDEAS

- POKER
- Indian Poker (Teen Patti)
- Karran
- Yahtzee: http://boardgamegeek.com/boardgame/2243/yahtzee
- Bridge
- Blackjack
- UNO
- Go Fish
- Spades/Bridge (decide how many hands you can win and then color and then win 'em. High card in each round wins. Color trumps all)
- some puzzle game with players challenging each other or pull Qs from open source rest endpoint and play in real time with with first to answer as winner
- googlefeud etc. game try to embed

ISSUES
