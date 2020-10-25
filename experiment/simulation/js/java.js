var images_arr = [ 0, 0 , 0 , 0 , 0 ,0 ,0];
var reset = 1;
var speed = 0;
  
function check(){

    var instruction = document.getElementById('instructions');
    var instruct='';
    if( reset == 1 ) instruct = 'Step 1: Switch ON the power supply.';
    else if(images_arr[0] != 1 || images_arr[1]*images_arr[2]*images_arr[3]*images_arr[4]*images_arr[5]==0) instruct = 'Step 2: Place all the equipments.';
    else if(images_arr[6]==0) instruct = 'Step 4: Connect all equipments using wires.';
    else instruct = 'Step 5: Turn ON the TNP switch and note down the readings for different input values.';
    instruction.innerHTML = instruct;
}

function Canvas(id=6){
    const canvas = document.getElementById("myCanvas")
    const context = canvas.getContext("2d")
if (reset ==1) 
document.querySelector('#b_reset').style.backgroundColor = "green";
else
document.querySelector('#b_reset').style.backgroundColor = "red";  
  
  if(reset) context.clearRect(0, 0, canvas.width, canvas.height);
  else {  
    let sum = images_arr.reduce( (a,b)=>{
        return a+b;
    });
    if( !(sum< 6 && id==6) && id!=-1)
     images_arr[id] = 1;
     
    const img0 = new Image()
    img0.addEventListener('load', function() {
        if(images_arr[0]==1)
         context.drawImage(img0, 20, 13,20,40);   
    });
    /*Switch*/ 
    img0.src = "https://drive.google.com/uc?export=view&id=14U2SsIRp_bNrWjNCwBqggC6DkIw7WYnM"
    
    const img1= new Image()
    img1.addEventListener('load', function() {
        if(images_arr[1]==1)
        context.drawImage(img1, 100, 2,30,30);
    });
   /*CT1*/ 
    img1.src = "https://drive.google.com/uc?export=view&id=1HQKSigdLS7R9hRnK-BpIDYFAS5rXvwo6"
    
    const img2= new Image()
    img2.addEventListener('load', function() {
        if(images_arr[2]==1)
         context.drawImage(img2, 150, 43,30,30);   
    });
    img2.src="https://drive.google.com/uc?export=view&id=1HQKSigdLS7R9hRnK-BpIDYFAS5rXvwo6"
  
    const img3= new Image()
    img3.addEventListener('load', function() {
        if(images_arr[3]==1)
         context.drawImage(img3, 135, 110,100,55);   
    });
    /*Wattmeter*/
    img3.src="https://drive.google.com/uc?export=view&id=179GU5jmkbadjTJtj231iGUPneoQqNcgj"
  
    const img4= new Image()
    img4.addEventListener('load', function() {
        if(images_arr[4]==1)
         context.drawImage(img4, 30, 95,60,30);   
    });
    img4.src="https://drive.google.com/uc?export=view&id=1CB8NLiuxeqm0cFN6ovHQC5_qAs4Pc7S5"
    
    
    const img5= new Image()
    img5.addEventListener('load', function() {
        if(images_arr[5]==1)
         context.drawImage(img5, 230, 15,40,40);   
    });
    /*load*/
    img5.src="https://drive.google.com/uc?export=view&id=1ihYJbOJ0q9QgzGvkHoX2GyT7TpfJZqbG"
    
  
    if( images_arr[6] == 1 ){
    context.strokeStyle = '#cc0606';
    context.lineWidth=1;
    context.beginPath();
    context.moveTo(0,22);
    context.lineTo(20,22);
    context.moveTo(40,22);
    context.lineTo(235,22);
    context.stroke();
    
  
    context.beginPath();
    context.moveTo(0,36);
    context.lineTo(20,36);
    context.moveTo(40,36);
    context.lineTo(235,36);
    context.strokeStyle ='#FFFF00';
    context.stroke();

    
    context.beginPath();
    context.moveTo(0,48);
    context.lineTo(20,48);
    context.moveTo(40,48);
    context.lineTo(235,48);
    context.strokeStyle ='#0000FF';
    context.stroke();
    
    context.strokeStyle = '#000';
    context.beginPath();  
    context.moveTo(108,22);
    context.lineTo(108,95);
    context.moveTo(108,95);
    context.lineTo(200,95);
    context.moveTo(200,95);
    context.lineTo(200,115);
    context.stroke();  
    
  
    
    context.moveTo(120,22);
    context.lineTo(120,80);
    context.moveTo(120,80);
    context.lineTo(212,80);
    context.moveTo(212,80);
    context.lineTo(212,115);
    context.stroke(); 
           
    context.moveTo(60,48);
    context.lineTo(60,95);
    context.stroke();
    
    context.moveTo(54,36);
    context.lineTo(54,135);
    context.stroke();
    
    context.moveTo(48,22);
    context.lineTo(48,145);
    context.stroke();
     
    context.moveTo(48,145);
    context.lineTo(135,145);
    context.stroke();
    
    context.moveTo(65,120);
    context.lineTo(135,120);
    context.stroke();
    
    context.moveTo(54,135);
    context.lineTo(135,135);
    context.stroke();
      
      
    context.moveTo(160,48);
    context.lineTo(160,140);
    context.stroke();
    context.moveTo(170,48);
    context.lineTo(170,140);
    context.stroke();
    context.closePath();
    
    
    }
  
   }
   check();  
    };

var images_arr = [ 0, 0 , 0 , 0 , 0 ,0 ,0];
var reset = 1;
function redraw_canvas(id){
    if(images_arr[id]!=1 && reset!=1) Canvas(id);
}
function reset_canvas() {
    reset = 1 - reset;
    if(reset){ 
        for(let i=0;i<=6;i++) images_arr[i] = 0;
        document.getElementById("b_reset").value="Enable Power"; 
    }
    else  document.getElementById("b_reset").value="Disable Power"; 
    if (reset ==1) 
       document.querySelector('#b_reset').style.backgroundColor = "green";
    Canvas();
}


function redraw(){
  
    var x =[0,0,0,0,0];
    x[0] = document.querySelector('input[name="i1"]:checked').value;
    x[1] = document.querySelector('input[name="i2"]:checked').value;
    x[2] = document.querySelector('input[name="i3"]:checked').value;
    x[3] = document.querySelector('input[name="i4"]:checked').value;
    x[4] = document.querySelector('input[name="i5"]:checked').value;
  
    var code = 0;
    var power = [8,4,2,1]
    for(let i=0;i<4;i++)
     code = code*1 + x[i+1]*power[i];
    
    console.log(code);
  
    var code_arr = [62,125,31,62,31,62,15,31,31,62,15,31,15,31,7,15]; 
  
    if(x[0] == 1){
       for(let i =0;i<=15;i++)
        if(code == i) speed = code_arr[i];
    }

    draw(speed);
}
  function draw(speed)
{     
  

  var  canvas = document.getElementById("canvas2");
  var  context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width, canvas.height);
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2 + 40;
  var radius = canvas.height/2 + 20;

  context.beginPath();
  context.arc(centerX, centerY, radius, Math.PI*0.10, Math.PI*-1.1, true);

  var gradience = context.createRadialGradient(centerX, centerY, radius-radius/2, centerX, centerY, radius-radius/8);
   gradience.addColorStop(0, '#ffffff');
   gradience.addColorStop(1, '#0A1F44');

   context.fillStyle = gradience;
   context.fill();
   context.closePath();
   context.restore();

context.beginPath();
context.strokeStyle = 'crimson';
context.translate(centerX,centerY);
var increment = 5;
context.font="15px Helvetica";
for (var i=-18; i<=18; i++)
{
angle = Math.PI/30*i;
sineAngle = Math.sin(angle);
cosAngle = -Math.cos(angle);

if (i % 5 == 0) {
context.lineWidth = 8;
iPointX = sineAngle *(radius -radius/4);
iPointY = cosAngle *(radius -radius/4);
oPointX = sineAngle *(radius -radius/7);
oPointY = cosAngle *(radius -radius/7);

wPointX = sineAngle *(radius -radius/2.5);
wPointY = cosAngle *(radius -radius/2.5);
context.fillText((i+18)*increment,wPointX-13,wPointY+4);
}
else
{
context.lineWidth = 2; 			
iPointX = sineAngle *(radius -radius/5.5);
iPointY = cosAngle *(radius -radius/5.5);
oPointX = sineAngle *(radius -radius/7);
oPointY = cosAngle *(radius -radius/7);
}
context.beginPath();
context.moveTo(iPointX,iPointY);
context.lineTo(oPointX,oPointY);
context.stroke();
context.closePath();
}
var numOfSegments = speed/increment;
numOfSegments = numOfSegments -18;
angle = Math.PI/30*numOfSegments;
sineAngle = Math.sin(angle);
cosAngle = -Math.cos(angle);
pointX = sineAngle *(3/4*radius);
pointY = cosAngle *(3/4*radius);

context.beginPath();
context.strokeStyle = '#000000';
context.arc(0, 0, 19, 0, 2*Math.PI, true);
context.fill();
    context.closePath();

context.beginPath();    	
context.lineWidth=6;
context.moveTo(0,0);
    context.lineTo(pointX,pointY);
    context.stroke();
    context.closePath();
    context.restore();
    context.translate(-centerX,-centerY);

document.getElementById("demo").innerHTML = speed;    
}