var canvas = document.getElementById("canvas");
var scoreLabel = document.getElementById('score');
var score = 0;
var ctx = canvas.getContext('2d');
var dis = [[0, 0, 0, 0], [0, 0, 2, 0], [0, 0, 2, 0], [0, 0, 0, 0]];
var color = ["#EDE4DA", "#ECDFC7", "#F2B179", "#F59563", "#F57C5F", "#F65D3B", "#ECCE72", "#EDCC61", "#ECC750", "#ECC440", "#EC4D58"];

function display() {
    for (var j = 0; j < 4; j++) for (var i = 0; i < 4; i++) {
        if (dis[i][j] != 0) {
            ctx.fillStyle = color[Math.log2(dis[i][j])]; //color select
        }
        else {
            ctx.fillStyle = "#e6e6e6"; // if there is nothing in the blank
        }
        ctx.fillRect(i * 100 + 2, j * 100 + 2, 96, 96);

        if (dis[i][j] != 0) {
            ctx.font = "21px Arial";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.fillText(dis[i][j], i * 100 + 50, j * 100 + 60);
        }
    }
}

function right() {
    //var isMoved = false;
    for (var i = 0; i < 4; i++) {
        //get it
        var ar = [0, 0, 0, 0];
        var vr = [];
        for (var j = 0; j < 4; j++) {
            if (dis[j][i] != 0) vr.push(dis[j][i]);

            ar[j] = dis[j][i];
        }

        //reverse the vr
        var tr = [];
        for (var k = vr.length - 1; k >= 0; k--) {
            tr.push(vr[k]);
        }

        for (var k = 0; k < vr.length; k++) vr[k] = tr[k];

        // vr.length determines the total number of actual characters.
        // change the vr
        var l = vr.length;
        if (l > 1) {
            if (l == 2) { // l = 2 or l = 3 must move
                //isMoved = true;
                if (vr[0] == vr[1]) {
                    vr[0] = 2 * vr[0];
                    score += vr[0];
                    vr[1] = 0;
                }
            } else if (l == 3) {
                //isMoved = true;
                if (vr[0] == vr[1]) {
                    vr[0] = 2 * vr[0];
                    score += vr[0];
                    vr[1] = vr[2];
                    vr[2] = 0;
                } else if (vr[1] == vr[2]) {
                    vr[1] = 2 * vr[1];
                    score += vr[1];
                    vr[2] = 0;
                }
            } else {
                if (vr[0] == vr[1]) {
                    //isMoved = true;
                    if (vr[2] == vr[3]) {
                        vr[0] = 2 * vr[0];
                        score += vr[0];
                        vr[1] = 2 * vr[2];
                        score += vr[1];
                        vr[2] = 0;
                        vr[3] = 0;
                    }

                    else {
                        vr[0] = 2 * vr[0];
                        score += vr[0];
                        vr[1] = vr[2];
                        vr[2] = vr[3];
                        vr[3] = 0;
                    }

                } else if (vr[1] == vr[2]) {
                    //isMoved = true;
                    vr[1] = 2 * vr[2];
                    score += vr[1];
                    vr[2] = vr[3];
                    vr[3] = 0;
                } else if (vr[2] == vr[3]) {
                    //isMoved = true;
                    vr[2] = 2 * vr[2];
                    score += vr[2];
                    vr[3] = 0;
                }

            }
        }

        for (var k = 0; k < 4 - l; k++) vr.push(0);

        //reverse vr again;
        tr = [];
        for (var k = vr.length - 1; k >= 0; k--) {
            tr.push(vr[k]);
        }

        for (var k = 0; k < vr.length; k++) vr[k] = tr[k];

        for (var k = 0; k < 4; k++) dis[k][i] = vr[k];

    }
    //return isMoved

}
function down() {
    //var isMoved = false;
    for (var i = 0; i < 4; i++) {
        //get it
        var ar = [0, 0, 0, 0];
        var vr = [];
        for (var j = 0; j < 4; j++) {
            if (dis[i][j] != 0) vr.push(dis[i][j]);

            ar[j] = dis[i][j];
        }

        //reverse the vr
        var tr = [];
        for (var k = vr.length - 1; k >= 0; k--) {
            tr.push(vr[k]);
        }

        for (var k = 0; k < vr.length; k++) vr[k] = tr[k];

        // vr.length determines the total number of actual characters.
        // change the vr
        var l = vr.length;
        if (l > 1) {
            if (l == 2) {
                //isMoved = true;
                if (vr[0] == vr[1]) {
                    vr[0] = 2 * vr[0];
                    score += vr[0];
                    vr[1] = 0;
                }
            } else if (l == 3) {
                //isMoved = true;
                if (vr[0] == vr[1]) {
                    vr[0] = 2 * vr[0];
                    score += vr[0];
                    vr[1] = vr[2];
                    vr[2] = 0;
                } else if (vr[1] == vr[2]) {
                    vr[1] = 2 * vr[1];
                    score += vr[1];
                    vr[2] = 0;
                }
            } else {
                if (vr[0] == vr[1]) {
                    //isMoved = true;
                    if (vr[2] == vr[3]) {
                        vr[0] = 2 * vr[0];
                        score += vr[0];
                        vr[1] = 2 * vr[2];
                        score += vr[1];
                        vr[2] = 0;
                        vr[3] = 0;
                    }

                    else {
                        vr[0] = 2 * vr[0];
                        score += vr[0];
                        vr[1] = vr[2];
                        vr[2] = vr[3];
                        vr[3] = 0;
                    }

                } else if (vr[1] == vr[2]) {
                    //isMoved = true;
                    vr[1] = 2 * vr[2];
                    score += vr[1];
                    vr[2] = vr[3];
                    vr[3] = 0;
                } else if (vr[2] == vr[3]) {
                    //isMoved = true;
                    vr[2] = 2 * vr[2];
                    score += vr[2];
                    vr[3] = 0;
                }

            }
        }

        for (var k = 0; k < 4 - l; k++) vr.push(0);

        //reverse vr again;
        tr = [];
        for (var k = vr.length - 1; k >= 0; k--) {
            tr.push(vr[k]);
        }

        for (var k = 0; k < vr.length; k++) vr[k] = tr[k];

        for (var k = 0; k < 4; k++) dis[i][k] = vr[k];

    }
    //return isMoved
}

function up() {
    //var isMoved = false;
    for (var i = 0; i < 4; i++) {
        //get it
        var ar = [0, 0, 0, 0];
        var vr = [];
        for (var j = 0; j < 4; j++) {
            if (dis[i][j] != 0) vr.push(dis[i][j]);

            ar[j] = dis[i][j];
        }

        // vr.length determines the total number of actual characters.
        // change the vr
        var l = vr.length;
        if (l > 1) {
            if (l == 2) {
                //isMoved = true;
                if (vr[0] == vr[1]) {
                    vr[0] = 2 * vr[0];
                    score += vr[0];
                    vr[1] = 0;
                }
            } else if (l == 3) {
                //isMoved = true;
                if (vr[0] == vr[1]) {
                    vr[0] = 2 * vr[0];
                    score += vr[0];
                    vr[1] = vr[2];
                    vr[2] = 0;
                } else if (vr[1] == vr[2]) {
                    vr[1] = 2 * vr[1];
                    score += vr[1];
                    vr[2] = 0;
                }
            } else {
                if (vr[0] == vr[1]) {
                   // isMoved = true;
                    if (vr[2] == vr[3]) {
                        vr[0] = 2 * vr[0];
                        score += vr[0];
                        vr[1] = 2 * vr[2];
                        score += vr[1];
                        vr[2] = 0;
                        vr[3] = 0;
                    }

                    else {
                        vr[0] = 2 * vr[0];
                        score += vr[0];
                        vr[1] = vr[2];
                        vr[2] = vr[3];
                        vr[3] = 0;
                    }

                } else if (vr[1] == vr[2]) {
                    //isMoved = true;
                    vr[1] = 2 * vr[2];
                    score += vr[1];
                    vr[2] = vr[3];
                    vr[3] = 0;
                } else if (vr[2] == vr[3]) {
                    //isMoved = true;
                    vr[2] = 2 * vr[3];
                    score += vr[2];
                    vr[3] = 0;
                }

            }
        }

        for (var k = 0; k < 4 - l; k++) vr.push(0);

        for (var k = 0; k < 4; k++) dis[i][k] = vr[k];

    }
    //return isMoved
}

function left() {
    //var isMoved = false;
    for (var i = 0; i < 4; i++) {
        //get it
        var ar = [0, 0, 0, 0];
        var vr = [];
        for (var j = 0; j < 4; j++) {
            if (dis[j][i] != 0) vr.push(dis[j][i]);

            ar[j] = dis[j][i];
        }
        // vr.length determines the total number of actual characters.
        // change the vr
        var l = vr.length;
        if (l > 1) {
            if (l == 2) {
                //isMoved = true;
                if (vr[0] == vr[1]) {
                    vr[0] = 2 * vr[0];
                    score += vr[0];
                    vr[1] = 0;
                }
            } else if (l == 3) {
                //isMoved = true;
                if (vr[0] == vr[1]) {
                    vr[0] = 2 * vr[0];
                    score += vr[0];
                    vr[1] = vr[2];
                    vr[2] = 0;
                } else if (vr[1] == vr[2]) {
                    vr[1] = 2 * vr[1];
                    score += vr[1];
                    vr[2] = 0;
                }
            } else {
                if (vr[0] == vr[1]) {
                    //isMoved = true;
                    if (vr[2] == vr[3]) {
                        vr[0] = 2 * vr[0];
                        score += vr[0];
                        vr[1] = 2 * vr[2];
                        score += vr[1];
                        vr[2] = 0;
                        vr[3] = 0;
                    }

                    else {
                        vr[0] = 2 * vr[0];
                        score += vr[0];
                        vr[1] = vr[2];
                        vr[2] = vr[3];
                        vr[3] = 0;
                    }

                } else if (vr[1] == vr[2]) {
                    //isMoved = true;
                    vr[1] = 2 * vr[2];
                    score += vr[1];
                    vr[2] = vr[3];
                    vr[3] = 0;
                } else if (vr[2] == vr[3]) {
                    //isMoved = true;
                    vr[2] = 2 * vr[2];
                    score += vr[2];
                    vr[3] = 0;
                }

            }
        }

        for (var k = 0; k < 4 - l; k++) vr.push(0);

        for (var k = 0; k < 4; k++) dis[k][i] = vr[k];

    }
    //return isMoved
}
display();

var disable = 0;
function gameover() {
    ctx.font = "50px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!!", 200, 180);
    disable = 1;
    ctx.fillStyle = "green";
    ctx.textAlign = "center";
    ctx.font = "30px Arial";

    var count = 0;
    for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) {
        count += dis[i][j];
    }
    ctx.fillText("Your Score is " + count.toString(), 200, 220);
}
function win() {
    ctx.font = "50px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.fillText("You Win!!", 200, 180);
    disable = 1;
}

window.addEventListener('keydown',
function(e) {
    if (disable == 1) {
        return;
    }
    //var isMoved = false;
    key = e.keyCode;
    if (key == 37) {
        e.preventDefault();
        left();
    //    isMoved = left();
    }
    if (key == 38) {
        e.preventDefault();
        up();
    //    isMoved = up();
    }
    if (key == 39) {
        e.preventDefault();
        right();
    //    isMoved = right();
    }
    if (key == 40) {
        e.preventDefault();
        down();
    //    isMoved = down();
    }
    scoreLabel.innerHTML = 'Score : ' + score;
// judge win or game over
    var count = 0;
    for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) {
        if (dis[i][j] == 0) {
            count++;
        }
        else if (dis[i][j] == 2048) {
            win();
            return;
        }
    }
    if (count == 0) {
        gameover();
        return;
    }
    //else if (isMoved) {
    else {
        var n = Math.floor(Math.random() * 16);
        for (; n < 32; n++) {
            m = n % 16;
            if (dis[Math.floor(m / 4)][m % 4] == 0) {
                dis[Math.floor(m / 4)][m % 4] = 2;
                break;
            }
        }
    }
    //else {
    //    return;
    //}
    display();
});