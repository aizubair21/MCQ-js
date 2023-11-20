//left side bar
const leftTabNav = document.querySelectorAll('.tab_item');
const leftTabContent = document.querySelectorAll('.tab_content');
const tna = document.getElementsByClassName('tab_item_active')[0];
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