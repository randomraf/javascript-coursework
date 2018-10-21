'use strict';

function id() {
  return "UP000000";
}
function updateLeaderBoard(player_names,me) {
    let playerName=document.getElementById('playername').innerText;
    let ol=document.getElementById('top10');    //containing all player lists.
    ol.innerHTML='';

    let i=0;
    while (i<10 && i<player_names.length){
        let player=document.createElement('li');
        player.appendChild(document.createTextNode(player_names[i]));
        if (me==player_names[i])
            player.className="myself";
        ol.appendChild(player);
        i++;
    }
}

function mouseMoved(e) {

    // position of the pointer within the canvas
    pointer.x = (e.pageX - canvas.offsetLeft);
    pointer.y = (e.pageY - canvas.offsetTop);

    // position of the pointer relative to the centre of the canvas
    pointer.xOffset = pointer.x-halfWidth;
    pointer.yOffset = pointer.y-halfHeight;

    // TODO calulate angle and unit vector radius
    // based on mouse.xOffset and mouse.yOffset .
    pointer.radius =
        Math.min(
            Math.sqrt(
                Math.pow(pointer.xOffset,2) +
                Math.pow(pointer.yOffset,2)
            ),
            limitOfAcceleration
        ) / limitOfAcceleration * step;

    pointer.angle = Math.atan2(pointer.yOffset,pointer.xOffset).toFixed(3);

    //Getting Degrees From Angle
    let degrees=Math.round(pointer.angle*180/Math.PI);
    if (degrees<0)
      degrees= degrees + 360;
    pointer.degrees= degrees;
    redraw();
}

function updateStep(){
    step=parseInt(window.scalerange.value);
}