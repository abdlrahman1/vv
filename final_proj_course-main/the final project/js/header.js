function toogle()
{
	document.querySelector('.navbar').classList.toggle('navbar--open');
	if (document.getElementById('black').style.display == "block"){
		document.getElementById('black').style.display = "none";
	} else {
			document.getElementById('black').style.display = "block";
		}
		
}


	function signup()
	{
		document.getElementById('form2').style.display="none";
		document.getElementById('form1').style.display="block";
		
	}
	
function login()
{
	document.getElementById('form1').style.display="none";
	document.getElementById('form2').style.display="block";
}
	
	
	
	

function show()
{
	document.getElementById('logo-center').style.display="none";
	document.getElementById('hide-register-login').style.display="none";
	document.getElementById('text-search').style.display="inline-block";
	document.getElementById('icon-search').style.display="none";
	document.getElementById('close-search').style.display="inline-block";
	document.getElementById('hide-login').style.display="none";
}
function closesearch()
{
	document.getElementById('logo-center').style.display="inline-block";
	document.getElementById('text-search').style.display="none";
	document.getElementById('icon-search').style.display="inline-block";
	document.getElementById('close-search').style.display="none";
	document.getElementById('hide-register-login').style.display="inline-block";
	document.getElementById('hide-login').style.display="inline-block";
	

}
const scrollBtn = document.querySelector('.scroll-btn') ;
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = 'block' ;
    }
    else {
        scrollBtn.style.display = 'none' ;
    }
})
scrollBtn.addEventListener('click' , () => {
    window.scroll({
        top: 0 ,
        behavior: "smooth"
    })
})
