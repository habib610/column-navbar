const navBtn = document.querySelector('.navbar_btn');
const navbarLinks = document.querySelector('.navbar_links');

navBtn.addEventListener('click', function(){
    let value = navbarLinks.classList.contains('navbar_collapse');

    if(value){
        navbarLinks.classList.remove('navbar_collapse');
        navBtn.classList.remove('change');
    }
    
    else{
        navbarLinks.classList.add('navbar_collapse');
        navBtn.classList.add('change');
    }
})