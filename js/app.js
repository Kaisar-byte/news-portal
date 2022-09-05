
const loadNewsCatagory = () => {
    const fetchUrl = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(fetchUrl)
        .then(res => res.json())
        .then(data => displayCatagory(data.data.news_category))
}

const displayCatagory = (category) => {
    const catagoryContainer = document.getElementById('nav');
    const noNews = document.getElementById('no-data-found');
    category.forEach(category => {
        const catDiv = document.createElement('li');
        catDiv.classList.add('nav-item');
        catDiv.innerHTML = `
        <li onclick="loadNews('${category.category_id}')" class="nav-item">
            <a class="nav-link" href="#">${category.category_name}</a>
        </li>
        `;
        catagoryContainer.appendChild(catDiv)

    });

}

const loadNews = (category_id) => {
    // console.log(category_id)
    const fetchUrl = `https://openapi.programming-hero.com/api/news/category/${category_id}`;

    fetch(fetchUrl)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}


const displayNews = news => {
    const newsContainer = document.getElementById('card');
    newsContainer.innerHTML = ``;
    news.forEach(news => {
        console.log(news)
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `
        <div class="card mt-3 mx-auto">
        <div class="row justify-content-between">
            <div class="col-md-4">
                <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.details.slice(0, 300).concat('...')}</p>
                </div>
                <div class="row mt-4">
                    <div class="col d-flex flex-row gap-2">
                        <img src="${news.author.img}" class="img-fluid rounded-circle" style="width: 50px; height: 50px" alt="">
                        <div class="d-flex flex-column gap-1>
                            <h2 class="fs-4">${news.author.name}</h2>
                            <p>${news.author.published_date.slice(0, 10)}</p>
                        </div>
                    </div>
                    <div class="col d-flex flex-row gap-2 justify-content-center align-items-center">
                        <p><i class="fa-regular fa-eye"></i></p>
                        <p>${news.total_view}</p>
                    </div>
                    <div class="col d-flex justify-content-center">
                        <button class="border-0 bg-white" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
    `;
        newsContainer.appendChild(newsDiv)
    });

}

loadNewsCatagory()


const toggleSpinner = () => {
    const spinner = document.getElementById('spinner')
}