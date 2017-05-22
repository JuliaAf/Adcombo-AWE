$(document).ready(function(){
	/*slider*/
	var slider = $('.speaker__slider').bxSlider({
		mode:"fade",
		auto: true,
		speed:1000,
		pause:2500,
		controls:true,
		infiniteLoop: true,
		autoStart: true,
		autoControls:true,
		onSlideAfter: function() {
			 slider.stopAuto();
			 slider.startAuto();
	 }
	});


/*toggle hint*/
 $(".scheme__hint-close").click(function(){
		if($(window).width()>991){
			$(".scheme__hint").fadeOut();
			}
	});
	$(".scheme__img").click(function(){
		 if($(window).width()>991){
			 $(".scheme__hint").fadeIn();
			 }
	 });


/*anchor scroll*/
	$(".nav").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr("href"),
					top = $(id).offset().top;
			$("body,html").animate({scrollTop: top}, 500);
			return false;
	});

});//ready
