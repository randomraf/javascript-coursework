'use strict';

function id() {
  return "UP000000";
}
function updateLeaderBoard(player_names,me) {
    let playerName=document.getElementById('playername').innerText;
    let ol=document.getElementById('top10');    //containing all player lists.
    ol.innerHTML='';

  for (let i = 0; i < 10 && i < playerNames.length; i++) {
        let player = document.createElement("li");
        player.appendChild(document.createTextNode(playerNames[i]));
        if (me == playerNames[i]) //
        player.className = "myself";
        list.appendChild(player);
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
////#####################///
let myTime;
function init() {
  myTime=setInterval(function (){
      updateLeaderBoard(playerNames)
  }, 1000);
  document.getElementById('nick').addEventListener('input',nickChanged);
}

////######################////
function leaders(result_length) {
    let lists = document.getElementById("top10").getElementsByTagName('li');
    let result = [];
    for (let i = 0; i < ((result_length < lists.length) ? result_length : lists.length); i++) {
        result.push(lists[i].textContent);
    }
    return result;
}


let playerInput=0;
let colorIndex=0;
function drawUserPos(){
    const x = halfWidth;
    const y = halfHeight;
    context.beginPath();
    context.arc(x, y,step, 0, 2 * Math.PI, false);
    context.fillStyle = colours[colorIndex];
    context.strokeStyle = colours[colorIndex]; //so that the circle is one color
    context.fill();
    context.stroke();
}

function drawPointerPos(){
    const x = pointer.x;
    const y = pointer.y;
    context.beginPath();
    context.arc(x, y,pointer.radius/step*50, 0, 2 * Math.PI, false);
    context.strokeStyle='black';
    context.stroke();
}
