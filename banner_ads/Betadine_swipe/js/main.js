// JavaScript Document
function fnInit()
{
	var frameWidth = 480, frameHeight = 280, numCols = 1, numRows = 80;
	var steppedEase = new SteppedEase(numCols-1);
	

	var tl = new TimelineMax({repeat:0});
	
	for(var i=0;i<numRows;i++){

		tl.add( TweenMax.fromTo('#betadineLogo', 0.05, { backgroundPosition:'0 -'+(frameHeight*i )+'px'}, { backgroundPosition: '-'+(frameWidth*(numCols-1) )+'px - '+(frameHeight*i )+'px', ease:steppedEase} ));
}

}