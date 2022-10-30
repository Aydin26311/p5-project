function preload(){

}
function setup(){
    canvas=createCanvas(650,500);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    } 
    function draw(){
        circle(45, 45, 70);
        circle(600, 45, 70);
        circle(45, 450, 70);
        circle(600, 450, 70);
        rect(80, 30, 485, 40);
        rect(80, 435, 485, 40);
        rect(30, 80, 30, 335);
        rect(585, 80, 30, 335);
        image(video,130,80,400,350);
        
    }
    function take_snapshot(){
        save("mypicto.png");
    }

    