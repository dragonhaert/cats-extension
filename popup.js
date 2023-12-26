const loadNew = async () => {
    console.log('click!')
    document.querySelector('img').src = await fetch('https://api.thecatapi.com/v1/images/search')
        .then((res) => res.json())
        .then((obj) => { return obj[0].url })
}

document.addEventListener('DOMContentLoaded', function () {
    loadNew()
});

