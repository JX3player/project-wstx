window.onload = function() {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    speed:1000,
    autoplay:3000,
    
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    // 如果需要前进后退按钮
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
   
  })        
  
	startMove();
  
}

var myTime=null;
var currLeft=0;

function startMove(){
	myTime=setInterval(goStep,20);
	$("#alliances1").mouseenter(function(){
		clearInterval(myTime);
	});
	$("#alliances1").mouseleave(function(){
		clearInterval(myTime);
		myTime = setInterval(goStep,20);
	});
}
function goStep(){
	currLeft=currLeft-2;
	if(currLeft<-5474){
		currLeft=0;
	}
	var a = currLeft+"px";
	console.log(a)
	$("#alliances1").css("left",a);
}	


	