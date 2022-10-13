//@input Component.Camera cam
//@input Component.ScreenTransform car
//@input Asset.Material carmat
//@input float xspeed = 0.2
//@input float yspeed = 0.2


var horzbound = 0.65;
var vertbound = 0.91;
var Xspeed = script.xspeed;
var Yspeed = script.yspeed;
var xpos;
var ypos;
function turnOn(){
  var aspect = script.cam.aspect;
  print(aspect);
    if(aspect < 0.5)
    {
        horzbound = 0.68;
        vertbound = 0.94;
    }
    if(aspect > 1)
    {
        horzbound = 0.87;
        vertbound = 0.88;
    }
    setRandomPosition();
}
    script.createEvent("TurnOnEvent").bind(turnOn);
    
    function onUpdate(eventData)
{
    moveCar(eventData);
}
    script.createEvent("UpdateEvent").bind(onUpdate);

    function moveCar(eventData)
{
    xpos += Xspeed * eventData.getDeltaTime();
    ypos += Yspeed * eventData.getDeltaTime();
    if(xpos >=horzbound || xpos <= -horzbound)
    {
        Xspeed *= -1;
        
    }
    if(ypos >=vertbound || ypos <= -vertbound )
    {
        Yspeed *=-1; 
    }
    script.car.anchors.setCenter(new vec2(xpos,ypos));
}


function setRandomPosition()
{
    var randomX = Math.random() > 0.5 ? 0 : 1 ;
    var randomY = Math.random() > 0.5 ? 0 : 1 ;
    if(randomX == 1 )
    {
        Xspeed *= -1;
        
    }
    if(randomY == 1 )
    {
        Yspeed *= -1;
    }    
    xpos = -horzbound + Math.random() * horzbound;
    ypos = -vertbound + Math.random() * vertbound;
    script.car.anchors.setCenter(new vec2(xpos,ypos));
}
    

