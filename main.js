var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let animation;
function animated() {
    animation = requestAnimationFrame(animated);
    timer++;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    dino.draw();
    if(timer % 60 === 0){
        var cactus = new Cactus();
        cactuses.push(cactus);
    }
    cactuses.forEach((a, i, o) => {
        if(a.x < -a.width){
            o.splice(i,1);
        }
        colision(dino, a);
        a.x = a.x -2;
        a.draw()
    })
    if(jumping == true){
        dino.y = dino.y - 2;
        if(dino.y == 140){
            jumping=false;
        }
    } 
    if(jumping == false) {
        if(dino.y < 200){
            dino.y = dino.y + 2;
        }
    }
}

function colision(dino, cactus) {
    var difx = cactus.x - (dino.x + dino.width);
    var dify = cactus.y - (dino.y + dino.height);
    if(difx < 0 && dify <0 ){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        cancelAnimationFrame(animation);
    }
}

var timer = 0;
var cactuses = [];
animated();

var jumping = false;
document.addEventListener('keydown', function(e) {
    if(e.code === 'Space'){
        jumping = true;
    }
})