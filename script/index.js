document.addEventListener('DOMContentLoaded', function() {
    const featureBtn = document.getElementById('dropDown-btn')
    const companyBtn = document.getElementById('dropDown-btn2')
    const featureList = document.getElementById('feature-li')
    const companyList = document.getElementById('company-li')
    const menuBtn = document.getElementById('hamburger-menu')
    const nav = document.getElementById('navbar')
    const closeMenu = document.getElementById('close-menu')

    //Hamburger menu open
    menuBtn.addEventListener('click', function () {
        nav.classList.toggle('hidden')

        //overlay visibility
        document.getElementById('overlay').classList.toggle('hidden')
    })

    //Hamburger menu close
    closeMenu.addEventListener('click', function () {
        nav.classList.add('hidden')

        //overlay visibility
        document.getElementById('overlay').classList.add('hidden')
    })

    // toggle submenu element
    function toggleMenu(anchor, listElement) {
        const img = anchor.querySelector('img')
        if (img.src.includes('icon-arrow-down.svg')) {
            img.src = 'images/icon-arrow-up.svg';
        } else {
            img.src = 'images/icon-arrow-down.svg';
        }
        listElement.classList.toggle('hidden')
    }

    function hideMenus() {
        if (!featureList.classList.contains('hidden')) {
            const featureBtnImg = featureBtn.querySelector('img')
            featureBtnImg.src = 'images/icon-arrow-down.svg';
            featureList.classList.add('hidden')
        }
        if (!companyList.classList.contains('hidden')) {
            const companyBtnImg = companyBtn.querySelector('img')
            companyBtnImg.src = 'images/icon-arrow-down.svg';
            companyList.classList.add('hidden')
        }
    }

    featureBtn.addEventListener('click', function () {
        toggleMenu(featureBtn, featureList)
        if (!companyList.classList.contains('hidden')) {
            const companyBtnImg = companyBtn.querySelector('img')
            companyBtnImg.src = 'images/icon-arrow-down.svg';
            companyList.classList.add('hidden')
            hideMenus()
        }
    })

    companyBtn.addEventListener('click', function () {
        toggleMenu(companyBtn, companyList);
        if (!featureList.classList.contains('hidden')) {
            const featureBtnImg = featureBtn.querySelector('img')
            featureBtnImg.src = 'images/icon-arrow-down.svg';
            featureList.classList.add('hidden')
            hideMenus()
        }
    });

    document.body.addEventListener('click', function (event) {
        if (!event.target.closest('#dropDown-btn')
            && !event.target.closest('feature-li')
            && !event.target.closest('#dropDown-btn2') && !event.target.closest('company-li')) {
            hideMenus()
        }
    })

    // Switch between hero images depending on screen width //
    window.addEventListener('resize', function () {
        const isMobile = window.innerWidth < 768;
        if (isMobile) {
            document.getElementById('hero-img').src = 'images/image-hero-mobile.png';
        } else {
            document.getElementById('hero-img').src = 'images/image-hero-desktop.png';
        }
    })





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
    3
})