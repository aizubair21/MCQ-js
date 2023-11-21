//left side bar
const leftTabNav = document.querySelectorAll('.tab_item');
const leftTabContent = document.querySelectorAll('.tab_content');
const tna = document.getElementsByClassName('tab_item_active')[0];
const asideLeft = document.getElementById('aside_left');
const ffc_inp = document.getElementById('ffc_imp');
const ffc_btn = document.getElementById('ffC_btn');
// console.log(tna)



//left tab and navs
leftTabContent[4].style.display = 'block';
leftTabNav[4].classList.add('tab_item_active')
leftTabNav.forEach((lnav, lindex) => {
    // console.log(lindex);
    lnav.addEventListener('click', () => {
        leftTabNav.forEach((ln, li) => {
            ln.classList.remove('tab_item_active');
            leftTabContent[li].style.display = 'none';
        })

        lnav.classList.add('tab_item_active');
        leftTabContent[lindex].style.display = 'block';
    })
})

//close and open left aside 
function closeAside() {
    console.log("function triggered !");
    if (asideLeft.classList.contains('aside_left_hide')) {
        asideLeft.classList.remove('aside_left_hide');
        asideLeft.style.marginLeft = 0 + '%';
        asideLeft.style.transition = "all linear .3s";
    } else {
        asideLeft.classList.add('aside_left_hide');
        asideLeft.style.marginLeft = -100 + "%";
        asideLeft.style.transition = "all linear .3s";
    }
}

//triggered exam finished input to undiabled button
ffc_inp.addEventListener('input', e => {
    // console.log(e.target.checked);
    if (e.target.checked) {
        ffc_btn.removeAttribute('disabled', 'disabled');
    } else {
        ffc_btn.setAttribute('disabled', 'disabled');
    }
})