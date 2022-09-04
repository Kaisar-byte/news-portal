
const loadNewsCatagory = () => {
    // const fetchUrl = `https://openapi.programming-hero.com/api/news/categories`;
    const fetchUrl = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(fetchUrl)
        .then(res => res.json())
        // .then(data => displayCatagory(data))
        .then(data => displayCatagory(data.data.news_category))
}

const displayCatagory = category => {
    const catagoryContainer = document.getElementById('navbarNav');
    category.forEach(category => {
        console.log(category.category_name);
        const catDiv = document.createElement('div');
        catDiv.classList.add('navbar-nav', 'px-2', 'border', 'border-warning', 'rounded-bottom', 'mx-1');
        catDiv.innerHTML = `
        <a class="nav-item nav-link" href="#">${category.category_name}</a>
        `;
        catagoryContainer.appendChild(catDiv)
    });

}


loadNewsCatagory()
