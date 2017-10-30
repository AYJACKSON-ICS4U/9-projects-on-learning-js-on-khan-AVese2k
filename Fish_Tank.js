background(89, 216, 255);

var drawFish = function(centerX,centerY,bodyLength,bodyHeight,bodyColor) {
    noStroke();
    fill(bodyColor);
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
    centerX-bodyLength/2-tailWidth, centerY-tailHeight,
    centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};

drawFish(140,81,96,55,color(162, 0, 255));
drawFish(293,196,96,55,color(162, 0, 255));
drawFish(214,305,96,55,color(162, 0, 255)); 
