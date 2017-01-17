var PATH = "https://github.com/Ziyang-Jin/Ziyang-Jin.github.io/blob/master/";
var PIGHEAD_SRC = PATH + "pig-head.png";
var HOLE_SRC = PATH + "hole.png";
var aPigHeads = [];
var iScore = 0;
var iTime = 60;
var flipFlop = true;
for(var i = 0; i < 9; i++) {
	var index = i + 1;
    var pigHead = document.getElementById("pig-head"+index);
    aPigHeads.push(pigHead);
}

aPigHeads.forEach(function(pigHead) {
	pigHead.onclick = function() {
    	if(pigHead.src === PIGHEAD_SRC) {
	        pigHead.src = HOLE_SRC;
	        iScore++;
	        var oScore = document.getElementById("score-board-points");
	        oScore.innerHTML = iScore;
	    } else {
	    	pigHead.src = PIGHEAD_SRC;
	    }
    };
});

var fnStartGame = function () {
	var iRandomNumber = Math.floor(Math.random() * 10);
	if(aPigHeads[iRandomNumber]) {
	    if(aPigHeads[iRandomNumber].src === HOLE_SRC) {
            aPigHeads[iRandomNumber].src = PIGHEAD_SRC;
	    } else {
	    	aPigHeads[iRandomNumber].src = HOLE_SRC;
	    }
    }
    flipFlop = !flipFlop;
    if(flipFlop) {
	    iTime--;
    }
	var oTimer = document.getElementById("timer-number");
	oTimer.innerHTML = iTime;
	if(iTime === 0) {
		clearInterval(interval);
	}
}

var interval = setInterval(fnStartGame, 500);
