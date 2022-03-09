function generator(matLen, gr, grEat, pr, ae, pa, ach, sk) {
    let matrix = [];
    for (let i = 0; i < matLen; i++) {
        matrix[i] = [];
        for (let j = 0; j < matLen; j++) {
            matrix[i][j] = 0;
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < ae; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    } for (let i = 0; i < pa; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 5;
        }
    } for (let i = 0; i < ach; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 6;
        }
    } for (let i = 0; i < sk; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 7;
        }
    }

    return matrix;
}

let side = 20;

let matrix = generator(15, 45, 10, 11, 10, 10, 10, 20);

let grassArr = []
let grassEaterArr = []
let predatorArr = []
let amenakerArr = []
let patArr = []
let averichArr = []
let sunkArr = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(3)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y)
                grassEaterArr.push(grE)
            } else if (matrix[y][x] == 3) {
                let grE = new Predator(x, y)
                predatorArr.push(grE)
            } else if (matrix[y][x] == 4) {
                let grE = new Amenaker(x, y)
                amenakerArr.push(grE)
            } else if (matrix[y][x] == 1) {
                let pa = new Pat(x, y)
                patArr.push(pa)
            } else if (matrix[y][x] == 6) {
                let grE = new Averich(x, y)
                averichArr.push(grE)
            } else if (matrix[y][x] == 7) {
                let grE = new Sunk(x, y)
                sunkArr.push(grE)
            }
        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green')
            } else if (matrix[y][x] == 0) {
                fill('#acacac')
            } else if (matrix[y][x] == 2) {
                fill('yellow')
            } else if (matrix[y][x] == 3) {
                fill('red')
            } else if (matrix[y][x] == 4) {
                fill('blue')
            } else if (matrix[y][x] == 5) {
                fill('#00F7FF')
            } else if (matrix[y][x] == 6) {
                fill('#DE1193')
            } else if (matrix[y][x] == 7) {
                fill('#09C0A8')
            }
            rect(x * side, y * side, side, side)
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul()
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].mul()
        predatorArr[i].eat()
    }
    for (let i in amenakerArr) {
        amenakerArr[i].mul()
        amenakerArr[i].eat()
    }
    for (let i in patArr) {
        patArr[i].mul()
        patArr[i].eat()
    } for (let i in averichArr) {
        averichArr[i].mul()
        averichArr[i].eat()
    } for (let i in sunkArr) {
        sunkArr[i].mul()
        sunkArr[i].eat()
    }
}



var clickCount = 0;
function draw2(evt) {
    clickCount++;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}



function draw2() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('yellow')
            } else if (matrix[y][x] == 2) {
                fill('red')
            } else if (matrix[y][x] == 4) {
                fill('yellow')
            } else if (matrix[y][x] == 6) {
                fill('yellow')
            } else if (matrix[y][x] == 0) {
                fill('#FFFFFF')
            } else if (matrix[y][x] == 3) {
                fill('#FFFFFF')
            } else if (matrix[y][x] == 5) {
                fill('red')
            } else if (matrix[y][x] == 7) {
                fill('#FFFFFF')
            }
            rect(x * side, y * side, side, side)
        }
    }
}



var p = document.getElementById("pElement");
p.addEventListener("click", draw2);

var clickCount = 0;
function draw4(evt) {
    clickCount++;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}
function draw4() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill('yellow')
            } else if (matrix[y][x] == 2) {
                fill('red')
            } else if (matrix[y][x] == 4) {
                fill('yellow')
            } else if (matrix[y][x] == 6) {
                fill('red')
            } else if (matrix[y][x] == 0) {
                fill('yellow')
            } else if (matrix[y][x] == 3) {
                fill('red')
            } else if (matrix[y][x] == 5) {
                fill('yellow')
            } else if (matrix[y][x] == 7) {
                fill('red')
            }
            rect(x * side, y * side, side, side)
        }
    }
}

var p = document.getElementById("pElement1");
p.addEventListener("click", draw4);


var statistics = {};
let a = 45;
let b = 10;
let c = 20;
let e = 10;
let d = 10;
let k = 10;
let z = 11;
setInterval(function () {
    statistics.grass = a++;
    statistics.grassEater = b++;
    statistics.sunk = c++;
    statistics.pat = e++;
    statistics.averich = d++;
    statistics.amenaker = k++;
    statistics.Predator = z++;


}, 1000)




var clickCount = 1;
function statis(evt) {
    clickCount++;
    console.log(evt);
    var str = "sammer" + clickCount;
    this.innerText = str;
}

function statis() {
    console.log(setInterval(function () {
        statistics.grass = a++;
        statistics.grassEater = b++;
        statistics.sunk = c++;
        statistics.pat = e++;
        statistics.averich = d++;
        statistics.amenaker = k++;
        statistics.Predator = z++;

    }, 1000));

    console.log(statistics);




}
var p = document.getElementById("pElement2");
p.addEventListener("click", statis);


function windowLoad() {
    console.log("winter");
}
window.onload = windowLoad;




// function mul() {
//     this.multiply++;
//     var emptyCells = this.multiply;
//     var newCell = random(emptyCells);

//     if (newCell && this.multiply >= 2) {
//         var newX = newCell[0];
//         var newY = newCell[1];
//         matrix[newY][newX] = 2;

//         var newGr = new GrassEater(newX, newY);
//         grassEaterArr.push(newGr);
//         this.multiply = 0;
//     }
//     this.multiply++;
//     var emptyCells = this.multiply;
//     var newCell = random(emptyCells);

//     if (newCell && this.multiply >= 20) {
//         var newX = newCell[0];
//         var newY = newCell[1];
//         matrix[newY][newX] = 4;

//         var newGr = new Amenaker(newX, newY);
//         amenakerArr.push(newGr);
//         this.multiply = 0;
//     }
// }

// var clickCount = 1;
// function mul(evt) {
//     clickCount++;
//     console.log(evt);
//     var str = "sammer" + clickCount;
//     this.innerText = str;
// }


// function mul() {

//     for (let y = 0; y < matrix.length; y++) {
//         for (let x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 1) {
//                 fill('#FFFFFF')
//             } else if (matrix[y][x] == 2) {
//                 fill('#FFFFFF')
//             } else if (matrix[y][x] == 4) {
//                 fill('#FFFFFF')
//             } else if (matrix[y][x] == 6) {
//                 fill('#FFFFFF')
//             } else if (matrix[y][x] == 0) {
//                 fill('#FFFFFF')
//             } else if (matrix[y][x] == 3) {
//                 fill('#FFFFFF')
//             } else if (matrix[y][x] == 5) {
//                 fill('#FFFFFF')
//             } else if (matrix[y][x] == 7) {
//                 fill('#FFFFFF')
//             }
//             rect(x * side, y * side, side, side)
//         }
//     }


// this.multiply++;
// var emptyCells = this.multiply
// var newCell = random(emptyCells);

// if (newCell && this.multiply >= 2) {
//     var newX = newCell[0];
//     var newY = newCell[1];
//     matrix[newY][newX] = 2;

//     var newGr = new GrassEater(newX, newY);
//     grassEaterArr.push(newGr);
//     this.multiply = 0;
// }

// this.multiply++;
// var emptyCells = this.multiply;
// var newCell = random(emptyCells);

// if (newCell && this.multiply >= 20) {
//     var newX = newCell[0];
//     var newY = newCell[1];
//     matrix[newY][newX] = 4;

//     var newGr = new Amenaker(newX, newY);
//     amenakerArr.push(newGr);
//     this.multiply = 0;
// }

// console.log("dan");

// }
// var p = document.getElementById("pElement6");
// p.addEventListener("click", mul);





