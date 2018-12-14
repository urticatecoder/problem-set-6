/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  const canvas = document.getElementById('canvas1');
  const context = canvas.getContext('2d')
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = "48px sans-serif";
  context.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let height = Number(prompt("Height: "));
  let width = Number(prompt("Width: "));
  let x = Number(prompt("X"));
  let y = Number(prompt("Y"));
  const canvas = document.getElementById('canvas2');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  if(height<1){
    alert("Your height is too small.")
  }else if (width<1){
    alert("Your width is too small.")
  }else if (x<5){
    alert("Your x-coordinate is too small.")
  }else if (y<5){
    alert("Your y-coordinate is too small.")
  }else if(height>canvas.height-y || width>canvas.width-x){
    alert("The rectangle will not fit on the canvas.")
  }else if(height/1!=height || width/1!=width || x/1!=x || y/1!=y){
    alert("Please enter a number.")
  }else{
    context.strokeStyle="black";
    context.rect(x, y, width, height);
    context.stroke();
  }

}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  const canvas = document.getElementById('canvas3');
  const context = canvas.getContext('2d');
  context.clearRect(0, 0, canvas.width, canvas.height);
  let color = prompt("Color: ")
  if(color == "black" || color=="blue" || color=="green" || color=="orange" || color=="purple" || color== "red" || color=="yellow"){
    context.fillStyle = color;
    context.fillRect(10, 10, 100, 50);
  }else{
    alert(color + " is not a supported color.")
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  let sides = [Number(prompt("Side 1: ")), Number(prompt("Side 2: ")), Number(prompt("Side 3: "))];
  sides.sort(function(a, b){return a-b});
  const canvas = document.getElementById("canvas4");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  if((sides[0]**2) + (sides[1]**2) != (sides[2]**2)){
    alert("That is not a valid right triangle.")
  }else if(sides[0]/1!=sides[0] || sides[1]/1!=sides[1] || sides[2]/1!=sides[2]){
    alert("One of your inputs is not a number.")
  }else if(sides[0]+10>canvas.height || sides[1]+10>canvas.width){
    alert("The triangle will not fit on the canvas.")
  }else{
    context.beginPath();
    context.moveTo(10, 10);
    context.lineTo(10, 10+sides[0]);
    context.lineTo(10+sides[1], 10+sides[0]);
    context.closePath();
    context.lineWidth = 1;
    context.stroke();
  }
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  const canvas = document.getElementById("canvas5");
  const context = canvas.getContext("2d");
  let radius = Number(prompt("Radius:"));
  context.clearRect(0, 0, canvas.width, canvas.height);
  if(radius*2+10 > canvas.width || radius*2+10 > canvas.height){
    alert("The smiley face will not fit on the canvas.");
  }else if(radius<5){
    alert("The radius is too small");
  }else{
    context.beginPath();
    context.arc(radius+10, radius+10, radius, 0, 2*Math.PI);
    context.moveTo((radius*.3)+10+(.1*radius), (radius*.6)+10);
    context.arc(radius*.3+10, radius*.6+10, radius*.1, 0, 2*Math.PI);
    context.moveTo((radius*1.6)+10+(.1*radius), (radius*.6)+30);
    context.arc(radius*1.6+10, radius*.6+30, radius*.1, 0, 2*Math.PI);
    context.moveTo(radius+10+radius*.7, radius+20);
    context.arc(radius+10, radius+20, radius*.7, 0, 1*Math.PI);
    context.stroke();
  }
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  const canvas=document.getElementById("canvas6");
  const context=canvas.getContext("2d");
  let outerRad=prompt("Outer Radius:");
  let innerRad=prompt("Inner Radius:");
  context.clearRect(0, 0, canvas.width, canvas.height);
  outerRad = Number(outerRad);
  innerRad = Number(innerRad);
  if(innerRad >= outerRad){
    alert("Your outer radius must be greater than your inner radius.")
  }else if(isNaN(outerRad)==true || isNaN(innerRad)==true){
    alert("One of your inputs is not a number.")
  }else{
    context.beginPath();
    context.moveTo(125, 125 - outerRad);
    let i = 0;
    let rotationAngle = 0 * Math.PI;
    while (i < 5) {
      context.lineTo(Math.cos(1.3 * Math.PI - rotationAngle) * innerRad + 125, Math.sin(1.3 * Math.PI - rotationAngle) * innerRad + 125);
      context.lineTo(Math.cos(1.1 * Math.PI - rotationAngle) * outerRad + 125, Math.sin(1.1 * Math.PI - rotationAngle) * outerRad + 125);
      rotationAngle+=0.4 * Math.PI;
      i++;
    }
    context.closePath();
    context.stroke();
    lineWidth = 1;
  }

}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign(){
  const canvas = document.getElementById("canvas7");
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  //I used SOH-CAH-TOA to find the values of each point ahead of time.
  context.moveTo(66,10);
  context.lineTo(146,10);
  context.lineTo(202,66);
  context.lineTo(202,146);
  context.lineTo(146,202);
  context.lineTo(66,202);
  context.lineTo(10,146);
  context.lineTo(10,66);
  context.closePath();
  context.fillStyle ="red";
  context.fill();
  context.font = "65px sans-serif";
  context.fillStyle = "white";
  context.fillText("STOP", 19, 130);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  const canvas = document.getElementById("canvas8");
  const context = canvas.getContext("2d");
  let blockLength = prompt("Length:");
  blockLength = Number(blockLength);
  let x = 10;
  let y = canvas.height - 10;
  for(let i = 0; i<5; i++){
    context.strokeStyle="black";
    context.strokeRect(x, y, blockLength, blockLength);
    x += blockLength;
  }
  x = 10;
  y -= blocklength;
  for(i=0; i<4; i++){
    context.strokeStyle="black";
    context.strokeRect(x+(.5*blockLength), y, blockLength, blockLength)
    x+= blockLength;
  }
  for(i=0; i<3; i++){
    context.strokeStyle
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {

}
