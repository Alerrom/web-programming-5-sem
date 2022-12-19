function getRandomInt(limit) {
    let res = Math.floor(Math.random() * limit);

    if (res === 0) {
        res = 1
    }

    return res;
}

function setLoadCatImageButtonOnClickHandler() {
    let getCatImgBtn = document.getElementById('load_cat_image_btn');

    getCatImgBtn.addEventListener('click', event => loadCatImg());
}

function clearCatImgSection() {
    let catImg = document.getElementById('cat_image');

    catImg.innerHTML = ''
}

function showError(catImg) {
    catImg.innerHTML += `
            <div class="catImgItem">
                Что-то пошло не так :/
            </div>
        `;
}

async function loadCatImg() {
    clearCatImgSection()

    let loadingSection = document.getElementById('loading');

    let catImageSection = document.getElementById('cat_image');
    let randomNumber = getRandomInt(5);
    let response;
    let catImg;

    loadingSection.innerHTML += `
    <div class="loading"></div>
    `;
    
    
    let httpsUrl = `https://yesno.wtf/api?force=`;
    if (randomNumber === 1) {
        httpsUrl += `yes`;
    } else if (randomNumber === 2) {
        httpsUrl += "no";
    } else if (randomNumber === 3) {
        httpsUrl += "maybe";
    } else {
        httpsUrl = `https://yesno.wtf/abracadabra`
    }

    try {
        response = await fetch(httpsUrl);
        catImg = await response.json();
    } catch (error) {
        showError(catImageSection);
    }

    loadingSection.innerHTML = '';

    
    if (response.status >= 400 || catImg.length === 0) {
        showError(catImageSection);
        throw new Error('Что-то пошло не так :/');
    } else {
        var imageClass = document.querySelector("#cat_image");
        imageClass.innerHTML = `<img id="cat_image_ex" class="img_book" src="${catImg.image}">`
    }
}