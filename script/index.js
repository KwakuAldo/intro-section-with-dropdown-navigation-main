const featureBtn = document.getElementById('dropDown-btn')
const companyBtn = document.getElementById('dropDown-btn2')
const featureList = document.getElementById('feature-li')
const companyList = document.getElementById('company-li')
// const arrowImg = document.getElementById('drop-down')


function toggleMenu(anchor, listElement) {
    const img = anchor.querySelector('img')
    // const currentSrc = img.getAttribute('src');
    // const nextSrc = currentSrc === newSrc ? anchor.dataset.originalSrc : newSrc;
    // img.setAttribute('src', nextSrc);
    if (img.src.includes('icon-arrow-down.svg')) {
        img.src = 'images/icon-arrow-up.svg';
    } else {
        img.src = 'images/icon-arrow-down.svg';
    }
    listElement.classList.toggle('hidden')
}

featureBtn.addEventListener('click', function() {
    toggleMenu(featureBtn, featureList)
})

companyBtn.addEventListener('click', function () {
    toggleMenu(companyBtn, companyList);
});

// featureBtn.addEventListener('click', () => {
//     featureList.classList.toggle('hidden')
//     let src = arrowImg.src;
//     if (src.includes('icon-arrow-down.svg')) {
//         arrowImg.src = 'images/icon-arrow-up.svg';
//     } else {
//         arrowImg.src = 'images/icon-arrow-down.svg';
//     }
//     console.log("btn clicked")
// })
