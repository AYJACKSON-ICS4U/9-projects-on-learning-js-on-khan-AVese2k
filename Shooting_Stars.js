var xPos1 = 380;//position of first shooting star on x-axis
var yPos1 = 40;//position of first shooting star on 7-axis
var xPos2 = -10;//position of second shooting star on x-axis
var yPos2 = 50;//position of second shooting star on x-axis

draw = function() {
    noStroke();//turn of outlines of shapes
    background(29, 40, 115);
    fill(255, 255, 255);
    triangle(xPos1,yPos1-5,xPos1,yPos1 + 7,xPos1 + 20,yPos1-20);//trail of first shooting star
    ellipse(xPos1, yPos1, 10, 10);//first shooting star
    triangle(xPos2,yPos2+6,xPos2,yPos2 -5,xPos2 - 25,yPos2-20);//trail of second shooting star
    ellipse(xPos2, yPos2, 10, 10);//second shooting star
    xPos1-=2;//first shooting star moves left 2 pixels
    yPos1+=2;//first shooting star moves down 2 pixels
    xPos2+=4;//second shooting star moves right 4 pixels
    yPos2+=2;//second shooting star moves down 2 pixels
    fill(101, 153, 11);
    rect(-1,340,2000,80);//ground
};
