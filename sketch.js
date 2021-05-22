var stevejobs,stevejobsimg,apple,appleimg,block1,block2,block3,block4;


function preload(){
    stevejobsimg = loadImage("jobs-removebg-preview.png");
    appleimg = loadImage("apple-removebg-preview.png");
    
    }

function setup(){
    createCanvas(1000,600);
stevejobs = createSprite(900,535,10,20);
apple = createSprite(50,100,10,20);
block1  = createSprite(550,435,500,20);
block2 = createSprite(450,225,400,20);
block3 = createSprite(500,300,600,30);
block4 = createSprite(200,400,300,20);
edges = createEdgeSprites()
block1.velocityX=2;
block2.velocityX=-3;
block3.velocityX =-5;
block4.velocityX = 4;
}





function draw(){
    
    background("yellow");
    stevejobs.addImage(stevejobsimg);
    apple.addImage(appleimg);
    stevejobs.scale=0.4;
    apple.scale = 0.2;
    
    
    block1.bounceOff(edges);
    block2.bounceOff(edges);
    block3.bounceOff(edges);
    block4.bounceOff(edges);
    if (keyDown(UP_ARROW)){
        stevejobs.y = stevejobs.y-10;
    }
    if(stevejobs.isTouching(block4)||stevejobs.isTouching(block3)||stevejobs.isTouching(block2)||stevejobs.isTouching(block1)){
        stevejobs.x = 900;
        stevejobs.y = 535;
    }

    drawSprites();

}