var resultado;
var ax,ay;
var x,y;
var mitadWidth,mitadHeight
function setup() 
{
  createCanvas(windowWidth, windowHeight);
  mitadWidth=windowWidth/2
  mitadHeight=windowHeight/2
}

function draw() 
{
	ADDA(0,0,windowWidth,windowHeight)
	ADDA(mitadWidth,0,mitadWidth,windowHeight)
	ADDA(windowWidth,0,0,windowHeight)
	ADDA(0,mitadHeight,windowWidth,mitadHeight)
  noLoop()
}

function ADDA(x1, y1, x2, y2) 
{
  let dx=x2-x1
  let dy=y2-y1

  let x=x1
  let y= y1

  let i = 0

  let limite

  if(Math.abs(dx)>Math.abs(dy))
    limite=Math.abs(dx)
  else
    limite=Math.abs(dy)

  let xi=dx/limite
  let yi=dy/limite
 
  while(i < limite){
		point(x,y)
		x += xi
		y += yi 

		i++
	}


}