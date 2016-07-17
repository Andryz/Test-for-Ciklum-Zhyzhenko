(function() {
	
  /*var look_css = document.getElementById('look_css');
	var looked = document.getElementsByClassName('looked');*/
	var shop = document.getElementsByClassName('shop');
	var dropdown = document.getElementsByClassName('dropdown');
	var under_dropdown = document.getElementsByClassName('under_dropdown');

      /*dropdown[0].hover = function(){
			if(dropdown[0].height()>  under_dropdown[0].height()){
		   	   dropdown[0].style.height = under_dropdown[0].height();
			} 
		};
*/
		
	

	
})();


$('.shop').on('click', function(e){
$('.dropdown').slideToggle();
});

$('.products').on('click', function(e){
$('.products_dropdown').slideToggle();
});

$(document).ready(function() {
	var dropdown = $('.dropdown');
	var under_dropdown = $('.under_dropdown');
	var windows_dropdown = $('.windows_dropdown');
	var security_dropdown = $('.security_dropdown');
	var devices_dropdown = $('.devices_dropdown');
	var biz_dropdown = $('.biz_dropdown');
	var specialists_dropdown = $('.specialists_dropdown');
	var education_dropdown = $('.education_dropdown');
	var products_dropdown = $('.products_dropdown');

	$('.office').hover(function(){
		if (under_dropdown.height() > dropdown.height()){
			$('.dropdown').css({"height":under_dropdown.height()});
		} else if (dropdown.height() > under_dropdown.height()){
			$('.under_dropdown').css({"height":dropdown.height()});
		}else{
			$('.dropdown').css({"height":"182px"});
		}
	});

	$('.windows').hover(function(){
		if (windows_dropdown.height() > dropdown.height()){
			$('.dropdown').css({"height":windows_dropdown.height()});
		} else if (dropdown.height() > windows_dropdown.height()){
			$('.windows_dropdown').css({"height":dropdown.height()});
		}else{
			$('.dropdown').css({"height":"182px"});
		}
	});

	$('.security').hover(function(){
		if (security_dropdown.height() > products_dropdown.height()){
			$('.products_dropdown').css({"height":security_dropdown.height()});
		} else if (products_dropdown.height() > security_dropdown.height()){
			$('.security_dropdown').css({"height":products_dropdown.height()});
		}else{
			$('.products_dropdown').css({"height":"290px"});
		}
	});

	$('.devices').hover(function(){
		if (devices_dropdown.height() > products_dropdown.height()){
			$('.products_dropdown').css({"height":devices_dropdown.height()});
		} else if (products_dropdown.height() > devices_dropdown.height()){
			$('.devices_dropdown').css({"height":products_dropdown.height()});
		}else{
			$('.products_dropdown').css({"height":"290px"});
		}
	});

	$('.biz').hover(function(){
		if (biz_dropdown.height() > products_dropdown.height()){
			$('.products_dropdown').css({"height":biz_dropdown.height()});
		} else if (products_dropdown.height() > biz_dropdown.height()){
			$('.biz_dropdown').css({"height":products_dropdown.height()});
		}else{
			$('.products_dropdown').css({"height":"290px"});
		}
	});

	$('.specialists').hover(function(){
		if (specialists_dropdown.height() > products_dropdown.height()){
			$('.products_dropdown').css({"height":specialists_dropdown.height()});
		} else if (products_dropdown.height() > specialists_dropdown.height()){
			$('.specialists_dropdown').css({"height":products_dropdown.height()});
		}else{
			$('.products_dropdown').css({"height":"290px"});
		}
	});

	$('.education').hover(function(){
		if (education_dropdown.height() > products_dropdown.height()){
			$('.products_dropdown').css({"height":education_dropdown.height()});
		} else if (products_dropdown.height() > education_dropdown.height()){
			$('.education_dropdown').css({"height":products_dropdown.height()});
		}else{
			$('.products_dropdown').css({"height":"290px"});
		}
	});

	$('#signup').on('keypress', function(e){
		$('.label_signup').css({'opacity': 0 });
	});

	$('#signup_email').on('keypress', function(e){
		$('.label_signup_email').css({'opacity': 0 });
	});

	$('#signup_password').on('keypress', function(e){
		$('.label_signup_password').css({'opacity': 0 });
	});

	




	
	
});