var xPositions = [200];
var yPositions = [50];

var rain = function() {
    background(204, 247, 255);

    for (var i = 0; i < xPositions.length; i++) {
        noStroke();
        fill(0, 200, 255);
        ellipse(xPositions[i], yPositions[i], 10, 10);
        yPositions[i] += 15;
        if (yPositions[i]>=400) {
            yPositions[i]=0;
        }
    }
    
};

mouseClicked = function() {
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    rain();
};
