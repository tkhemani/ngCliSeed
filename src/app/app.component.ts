import { Component, ApplicationRef } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {MdInput} from '@angular2-material/input';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdToolbar} from '@angular2-material/toolbar';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs/tabs';

//import * as _ from 'lodash';

declare var _:any;
 
@Component({
    moduleId: module.id,
    selector: 'hat-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [MD_TABS_DIRECTIVES, MdInput, MD_BUTTON_DIRECTIVES, MD_CARD_DIRECTIVES, MdRadioGroup, MdIcon, MdToolbar,
        MdRadioButton],
    providers: [MdRadioDispatcher, MdIconRegistry]
})

export class AppComponent {

    //hang
    movie1Entered = false;
    movie2Entered = false;
    cardLocal = {
        valueEntered: "hell",
        optionUsed: false
    };


    challengeAddMoreState = false;
    //heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    //testitem = { name: "test", cards: [1,2] };
    otherPlayerName = null;
    gameStarted = false;
    e1 = null;
    challengeState = false;
    myTurn = false;
    item:FirebaseObjectObservable<any>;
    cardOptions = [
        {value: "1", selected: false},
        {value: "2", selected: false},
        {value: "3", selected: false},
        {value: "4", selected: false},
        {value: "5", selected: false},
        {value: "6", selected: false},
        {value: "7", selected: false},
        {value: "8", selected: false},
        {value: "9", selected: false},
        {value: "10", selected: false},
        {value: "J", selected: false},
        {value: "Q", selected: false},
        {value: "K", selected: false}
    ]
    // af = null;
    root = null;
    playerName = "";
    // player = null;
    //localCopy = {}
    localCopy = {
        "hang": {
            "movie1string": "X",
            "isMovie1success": false,
            "isMovie2success": false,
            "isMovie1GameOver": false,
            "isMovie2GameOver": false,
            "movie2string": "X",
            "movie1": ["X"],
            "movie1state": ["X"],
            "movie2state": ["X"],
            "score1": 0,
            "movie2": ["X"],
            "score2": 0
        },
        "cardCache": [],
        "whoPassed": "",
        "winnerName": "",
        resetState: false,
        "p1": ["X"],
        "p2": ["X"],
        "turnCards": ["X"],
        "playAs": "",
        "whoseTurn": "p1",
        "cardOptions": this.cardOptions
    };
    //"hang" : [{"p1": {"word": "", "score": ""}}, {"p2": {"word": "", "score": ""}}]
    //localCopy = {};
el = null;
//     ngOnInit() {
//     this.el = this.element.nativeElement;
//     console.log(this.el);
//   }
  
//   ngDoCheck() {
// this.changeDetected = true;
//   }
    constructor(af:AngularFire, public ar:ApplicationRef ) {
        
        //console.clear();
        //this.af = af;
        
//this.element.nativeElement // <- your direct element reference 

        this.root = af.database.object('/root');
var that = this;
        this.root.subscribe(function(data) {
            if(data.p1 && data.p1.length > 1) data.p1 = data.p1.map(n => n.value).sort().map(function(n) {return {value:n, selected: false}});
                        if(data.p2 && data.p2.length > 1) data.p2 = data.p2.map(n => n.value).sort().map(function(n) {return {value:n, selected: false}});

            that.localCopy = data;
            that.processHangmanData();
            if (!that.localCopy.p1) {
                that.localCopy.p1 = []
            }
            if (!that.localCopy.p2) {
                that.localCopy.p2 = []
            }
            that.myTurn = (that.localCopy.whoseTurn == that.playerName);
            //that.localCopy.turnCards =
            if (that.myTurn && that.localCopy.turnCards.length > 1) {
                //  that.localCopy.turnCards.shift();
                if (that.localCopy.turnCards.length > 1) {
                    that.challengeState = true;
                    that.localCopy.turnCards.shift();
                }
                if (that.localCopy.whoPassed != that.localCopy.whoseTurn) {
                    that.challengeState = true;
                }
                //if(that.localCopy.cardCache.length > 1)
            }

//             if (that.localCopy.cardCache && that.localCopy.cardCache.length > 0){
//                    that.challengeState = true;                   
//             }
that.dummyFunction(); // to refresh the screen
        });
        //this.item = af.database.object('/root/item');
        //this.item.remove();
        //this.startGame()
        //this.ngDoCheck();
    }

dummyCard () {
    console.log(this);
}
    dummyFunction() {  
this.ar.tick() 
//     setTimeout(function(){ 
//  var temp = Object.assign({}, this.localCopy);
//         this.localCopy = Object.assign({}, temp);
//      }, 4000);
        
//         var temp = Object.assign({}, this.localCopy);
//         this.localCopy = Object.assign({}, temp);
//         console.log(this);
//         if(this.localCopy.cardCache){
//         this.localCopy.cardCache = this.localCopy.cardCache.slice();           
//         }
//         this.challengeState = this.challengeState;
    }

    setPlayer(playerName) {
        this.playerName = playerName;
    }

    startGame() {


        if (this.playerName == "") {
            this.playerName = "p1";
        }
        this.gameStarted = true;
        if (this.playerName == "p1") {
            //  this.resetGame()
            this.otherPlayerName = "p2";
//             this.localCopy[this.playerName] = [{value: "5", selected: false}, {
//                 value: "6",
//                 selected: false
//             }, {value: "7", selected: false}, {value: "8", selected: false}];

var dataSet = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
this.localCopy[this.playerName] = [];
this.localCopy[this.otherPlayerName] = [];
var that = this;
dataSet.forEach(function(n) {
    var randomNo = Math.floor(Math.random() * 2) +1;
if(randomNo == 1 && that.localCopy[that.playerName].length < 26) {
    that.localCopy[that.playerName].push({value: n, selected: false})
} else if(randomNo == 2 && that.localCopy[that.otherPlayerName].length < 26) {
    that.localCopy[that.otherPlayerName].push({value: n, selected: false})
} else {
    if(that.localCopy[that.playerName].length < 26) {
         that.localCopy[that.playerName].push({value: n, selected: false})   
    } else {
           that.localCopy[that.otherPlayerName].push({value: n, selected: false}) 
    }
}
})

if(this.localCopy[this.playerName].length < 26) {
    this.localCopy[this.playerName] 
}
        } else {
            this.otherPlayerName = "p1";
            //this.localCopy[this.playerName] = [{value: "J", selected: false}, {value: "K", selected: false}, {value: "1", selected: false}, {value: "2", selected: false}, {value: "2", selected: false}];

        }
        this.syncDB();
        // this.testitem = { name: playerName, cards: [10,9,8,10] };
        //this.player = this.af.database.object('/root/' + playerName.toLowerCase());
        //this.player.set([10,9,8,10]);
    }

    processHangmanData() {
        if (!this.localCopy.hang.movie1) {
            this.localCopy.hang.movie1 = ["X"];
        }
        if (!this.localCopy.hang.movie2) {
            this.localCopy.hang.movie2 = ["X"];
        }

        this.localCopy.hang.isMovie1GameOver = this.localCopy.hang.isMovie1GameOver;
        this.localCopy.hang.isMovie2GameOver = this.localCopy.hang.isMovie2GameOver;


        if (this.localCopy.hang.movie1.length > 1) {
            this.movie1Entered = true;
        }


        if (this.localCopy.hang.movie2.length > 1) {
            this.movie2Entered = true;
        }

    }

    resetGame() {
        this.localCopy = {
            "hang": {
                "isMovie1GameOver": false,
                "isMovie2GameOver": false,
                "isMovie1success": false,
                "isMovie2success": false,
                "movie1string": "X",
                "movie2string": "X",
                "movie1": ["X"],
                "score1": 0,
                "movie1state": ["X"],
                "movie2state": ["X"],
                "movie2": ["X"],
                "score2": 0
            },
            cardCache: [],
            whoPassed: "",
            "winnerName": "",
            "resetState": true,
            "p1": ["X"],
            "p2": ["X"],
            "turnCards": ["X"],
            "playAs": "",
            "whoseTurn": "p1",
            "cardOptions": this.cardOptions
        };
        this.syncDB();
        this.gameStarted = false;
        this.challengeState = false;
    }

    cardOptionClicked(card) {
        if (this.myTurn && !this.challengeState) {
            if (!this.challengeAddMoreState) {
                if (!card.selected) {
                    this.localCopy.playAs = card.value;
                    this.localCopy.cardOptions.forEach(n => n.selected = false);
                    card.selected = true;
                } else {
                    // if (index > -1) {
                    this.localCopy.playAs = null;
                    //}
                    card.selected = false;
                }
            }
        }
    }

    executeChance() {
        this.localCopy.resetState = false;
        this.localCopy.whoseTurn == "p1" ? this.localCopy.whoseTurn = "p2" : this.localCopy.whoseTurn = "p1";

        this.localCopy[this.playerName] = this.localCopy[this.playerName].filter(n => n.selected == false)
        this.syncDB();
    }

    cardForChallengeClicked(card) {
        console.log(card);
    }

    challengeAddMore() {
        // add current turnCards to cache
        this.gameOverCheck();
        if (!this.localCopy.cardCache) {
            this.localCopy.cardCache = [];
        }
        this.localCopy.cardCache = this.localCopy.cardCache.concat(this.localCopy.turnCards);
        this.localCopy.turnCards = ["X"];
        this.challengeState = false;
        this.challengeAddMoreState = true
    }

    challengePass() {
        // the opponent can now add more cards OR close the round
        //I can only pass or challenge from next time
        this.gameOverCheck()
        this.challengeState = false;
        this.localCopy.whoPassed = this.playerName;
        if (!this.localCopy.cardCache) {
            this.localCopy.cardCache = []
        }
        this.localCopy.cardCache = this.localCopy.cardCache.concat(this.localCopy.turnCards);
        this.localCopy.turnCards = ["X"];
        this.localCopy.whoseTurn = this.otherPlayerName;
        this.syncDB();
    }

    roundComplete() {
        //discard the cache and reset the whoPassed
        this.localCopy.whoPassed = "";
        this.localCopy.cardCache = [];
        this.challengeState = false;
        this.challengeAddMoreState = false;
        this.localCopy.turnCards = ["X"];
        this.localCopy.whoseTurn = this.playerName;
        this.syncDB();

    }

    gameOverCheck() {
        if (this.localCopy[this.otherPlayerName].length == 0) {
            //other player won
            this.localCopy.winnerName = this.otherPlayerName;
            this.syncDB();
            return true;
        } else {
            return false;
        }
    }

    challengeYes() {
        var fraud = false;
        var that = this;

        this.localCopy.turnCards.forEach(n => {
            if (!fraud) {
                if (n != that.localCopy.playAs) {
                    fraud = true;
                }
            }
        });

        if (!fraud) {
            //no fraud
            if (!this.gameOverCheck()) {
                if (this.localCopy.whoPassed != "") {  // if round is old ie whoPassed is not empty
                    this.localCopy.cardCache.forEach(function (n) {
                        that.localCopy[that.playerName].push({value: n, selected: false});
                    })
                }

                this.localCopy.turnCards.forEach(function (n) {
                    that.localCopy[that.playerName].push({value: n, selected: false});
                })
                this.localCopy.whoseTurn = this.otherPlayerName;


            }

        } else {
           // if (this.localCopy.whoPassed != "" || this.challengeAddMoreState) {  // if round is old ie whoPassed is not empty
                if(this.localCopy.cardCache){
                 this.localCopy.cardCache.forEach(function (n) {
                    that.localCopy[that.otherPlayerName].push({value: n, selected: false});
                })   
                }
           // }

            that.localCopy.turnCards.forEach(function (n) {
                that.localCopy[that.otherPlayerName].push({value: n, selected: false});
            })
            this.localCopy.whoseTurn = this.playerName;
        }
        this.localCopy.whoPassed = "";
        this.localCopy.turnCards = ["X"];
        this.challengeState = false;
        this.localCopy.cardCache = [];
        this.challengeAddMoreState = false;

        this.syncDB();
    }

    syncDB() {
        this.root.set(this.localCopy);
    }

    cardClicked(card) {

        if (this.myTurn && !this.challengeState) {
            if (!card.selected) {
                this.localCopy.turnCards.push(card.value);
                card.selected = true;
            } else {
                // if (index > -1) {
                this.localCopy.turnCards.splice(this.localCopy.turnCards.indexOf(card.value), 1);
                //}
                card.selected = false;
            }

if (this.myTurn && this.localCopy.cardCache && this.localCopy.cardCache.length > 0) {
this.challengeAddMoreState = true;  
}   


            if (this.challengeAddMoreState) {
                this.localCopy.cardOptions.forEach(n => {
                    if (n.value != this.localCopy.playAs) {
                        n.selected = false
                    } else {
                        n.selected = true
                    }
                });
            }
        }
    }

    save(newName:string) {
        this.item.set({name: newName});
    }

    update(newSize:string) {
        this.item.update({size: newSize});
    }

    delete() {
        this.item.remove();
    }


    resetHangman() {
        this.movie1Entered = false;
        this.movie2Entered = false;
        this.localCopy.hang.movie1string = "";
        this.localCopy.hang.movie2string = "";
        this.resetGame();
    }

    checkHangGameOver(movie) {

        //check if won
        var falseCount = 0;
        this.localCopy.hang[movie].forEach(function (m:any) {
            if (m.show == false) {
                falseCount += 1;
            }
        })
        if (falseCount == 0) {
            this.localCopy.hang.isMovie1success = true;
            this.localCopy.hang.score1 += 1
            this.localCopy.hang.isMovie1GameOver = true;
        }

        if (!this.localCopy.hang.isMovie1success) {
            //check lost
            var optionsUsedCount = 0;
            var that = this;
            this.localCopy.hang.movie1state.forEach(function (n:any) {

                if (n.optionUsed == false) {
                    that.localCopy.hang.isMovie1success = false;
                } else {
                    optionsUsedCount += 1
                }
            })

            //check game over
            if (optionsUsedCount == 7) {
                this.localCopy.hang.isMovie1GameOver = true;
                this.localCopy.hang.score1 -= 1
            }
        }
        this.syncDB();
    }

    option1Clicked(card) {
        console.log(card);
        var n = card.valueEntered.toUpperCase();
        if (n == "A" || n == "E" || n == "I" || n == "O" || n == "U") {
            card.valueEntered = "";
            card.optionUsed = false;
        } else if (this.localCopy.hang.movie1string.indexOf(n) != -1) {
            //show the letter in movie
            this.localCopy.hang.movie1.forEach(function (m:any) {
                if (m.value == n) {
                    m.show = true;
                }
            })

            card.valueEntered = "";
            card.optionUsed = false;
        } else {
            card.valueEntered = n;
            card.optionUsed = true;
        }

        this.checkHangGameOver("movie1");
    }

    startHangman1(value) {
        this.localCopy.hang.isMovie1success = false;
        this.localCopy.hang.isMovie1GameOver = false;

        this.localCopy.hang.movie1string = value.toUpperCase();
        var movie1 = [];
        //var that = this;
        //that.localCopy.hang.movie1 = [];
        value.toUpperCase().split('').forEach(function (n) {
            if (n == "A" || n == "E" || n == "I" || n == "O" || n == "U" || n == " ") {
                movie1.push({"value": n, "show": true});
                //that.localCopy.hang.movie1.push(n);
                //that.localCopy.hang.movie1.push({"value":n, "show":true});
                //console.log(n);
            } else {
                //console.log(n);
                movie1.push({"value": n, "show": false});
                //that.localCopy.hang.movie1.push({"value":n, "show":false});
            }
        })
        this.localCopy.hang.movie1 = movie1;
        this.movie1Entered = true;
        var movie1state = []
        "hangman".toUpperCase().split('').forEach(function (n) {
            movie1state.push({"placeHolder": n, "optionUsed": false, "valueEntered": ""});

        })
        this.localCopy.hang.movie1state = movie1state;

        this.syncDB();
    }


    //2nd player hangman
    checkHangGameOver2(movie) {

        //check if won
        var falseCount = 0;
        this.localCopy.hang[movie].forEach(function (m:any) {
            if (m.show == false) {
                falseCount += 1;
            }
        })
        if (falseCount == 0) {
            this.localCopy.hang.isMovie2success = true;
            this.localCopy.hang.score2 += 1
            this.localCopy.hang.isMovie2GameOver = true;
        }

        if (!this.localCopy.hang.isMovie2success) {
            //check lost
            var optionsUsedCount = 0;
            var that = this;
            this.localCopy.hang.movie2state.forEach(function (n:any) {

                if (n.optionUsed == false) {
                    that.localCopy.hang.isMovie2success = false;
                } else {
                    optionsUsedCount += 1
                }
            })

            //check game over
            if (optionsUsedCount == 7) {
                this.localCopy.hang.isMovie2GameOver = true;
                this.localCopy.hang.score2 -= 1
            }
        }
        this.syncDB();
    }

    option2Clicked(card) {
        console.log(card);
        var n = card.valueEntered.toUpperCase();
        if (n == "A" || n == "E" || n == "I" || n == "O" || n == "U") {
            card.valueEntered = "";
            card.optionUsed = false;
        } else if (this.localCopy.hang.movie2string.indexOf(n) != -1) {
            //show the letter in movie
            this.localCopy.hang.movie2.forEach(function (m:any) {
                if (m.value == n) {
                    m.show = true;
                }
            })

            card.valueEntered = "";
            card.optionUsed = false;
        } else {
            card.valueEntered = n;
            card.optionUsed = true;
        }

        this.checkHangGameOver2("movie2");
    }

    startHangman2(value) {
        this.localCopy.hang.isMovie2success = false;
        this.localCopy.hang.isMovie2GameOver = false;

        this.localCopy.hang.movie2string = value.toUpperCase();
        var movie2 = [];
        //var that = this;
        //that.localCopy.hang.movie1 = [];
        value.toUpperCase().split('').forEach(function (n) {
            if (n == "A" || n == "E" || n == "I" || n == "O" || n == "U" || n == " ") {
                movie2.push({"value": n, "show": true});
                //that.localCopy.hang.movie1.push(n);
                //that.localCopy.hang.movie1.push({"value":n, "show":true});
                console.log(n);
            } else {
                console.log(n);
                movie2.push({"value": n, "show": false});
                //that.localCopy.hang.movie1.push({"value":n, "show":false});
            }
        })
        this.localCopy.hang.movie2 = movie2;
        this.movie2Entered = true;
        var movie2state = []
        "hangman".toUpperCase().split('').forEach(function (n) {
            movie2state.push({"placeHolder": n, "optionUsed": false, "valueEntered": ""});

        })
        this.localCopy.hang.movie2state = movie2state;

        this.syncDB();
    }

}
