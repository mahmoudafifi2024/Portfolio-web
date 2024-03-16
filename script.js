// scroll sections active link
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    let offset = sec.offsettop - 150;
    let height = sec.offsetheight;
    let id = sec.getAttribute(`id`);

    if(top>= offset && top < offset + height){
        navlinks.forEach(links => {
            links.classlists.remove('active');
            document.querySelector('header nav a[href*='+id+']').classList.add('active');
        })
    }
    // sticky navbar
    Headers.classList.toggle('sticky',window.screenY > 100)
}