       



        // const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger')
		const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
		const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
		const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul a');

		const header = document.querySelector('.header.container');
		 hamburger .addEventListener('click',() => {
		 	hamburger.classlist.toggle('active');
		 	mobile_menu.classlist.toggle('active');
		 });
		 document.addEventListener('scroll',()=>{
		 	var scroll__position =window.scrollY;
		 	if (scroll__position > 250) {
		 		header.style.backgroundColor = "#29323c";
		 	}else{
		 		header.style.backgroundColor = "transparent";
		 	}
		 });
menu_iteam.forEach((item=>){
	item.addEventListener('click,' ()=> {
hamburger.classlist.toggle('active');
		 	mobile_menu.classlist.toggle('active');
	});
	});
