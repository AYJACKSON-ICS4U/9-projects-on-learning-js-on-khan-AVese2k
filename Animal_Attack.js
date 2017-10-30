var bodyX = 200;
var bodyY = 550;
var bodyW = 118;
var bodyH = 106;

draw = function() {
    background(207, 254, 255);
    //body
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, bodyH); // body?
    ellipse(bodyX, bodyY-70, bodyW/2, bodyH/2); // face?
    //eyes
    fill(0, 0, 0);
    ellipse(bodyX-15,bodyY-75,bodyW/10,bodyH/11);
    ellipse(bodyX + 15,bodyY-75,bodyW/10,bodyH/11);
    //antennas
    line(bodyX-15,bodyY-93,bodyX-30,bodyY-120);
    line(bodyX+15,bodyY-93,bodyX+30,bodyY-120);
    //legs
    line(bodyX-50,bodyY-30,bodyX-90,bodyY-45);
    line(bodyX-54,bodyY-20,bodyX-95,bodyY-30);
    line(bodyX-50,bodyY+30,bodyX-90,bodyY+45);
    line(bodyX-54,bodyY+20,bodyX-95,bodyY+30);
    line(bodyX+50,bodyY-30,bodyX+90,bodyY-45);
    line(bodyX+54,bodyY-20,bodyX+95,bodyY-30);
    line(bodyX+50,bodyY+30,bodyX+90,bodyY+45);
    line(bodyX+54,bodyY+20,bodyX+95,bodyY+30);
    //animation
    bodyY-=3;
};
