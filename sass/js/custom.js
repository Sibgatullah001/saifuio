const qs = (str) => document.querySelector(str);

// Header Menu =====================
qs('.menu_btn').addEventListener('click', ()=>{
    qs('nav ul').classList.toggle('mobail_menu');
});

// play Video =====================
qs('.play_btn').addEventListener('click',()=>{
    qs('.play_popup').classList.add('active_popup');
    overlayAdd()
});
qs('.close_popup h3').addEventListener('click',()=>{
    qs('.play_popup').classList.remove('active_popup');
    overlayNone()
})

// Overlay ======================
qs('.overlay').addEventListener('click',()=>{
    qs('.play_popup').classList.remove('active_popup');
    overlayNone()
})
function overlayAdd(){
    qs('.overlay').style.visibility = 'visible';
    qs('.overlay').style.opacity = '1';
}
function overlayNone(){
    qs('.overlay').style.visibility = 'hidden';
    qs('.overlay').style.opacity = '0';
}