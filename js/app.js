
const loadNewsCatagory = () => {
    const fetchUrl = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(fetchUrl)
        .then(res => res.json())
        // .then(data => displayCatagory(data))
        .then(data => displayCatagory(data.data.news_category))
}

const displayCatagory = (category) => {
    const catagoryContainer = document.getElementById('nav');
    category.forEach(category => {
        // console.log(category)
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

// const getNews = () => {

// }


// loadNewsCatagory()

const loadNews = (category_id) => {
    // console.log(category_id)
    const fetchUrl = `https://openapi.programming-hero.com/api/news/category/${category_id}`;

    fetch(fetchUrl)
        .then(res => res.json())
        .then(data => displayNews(data.data))
}


const displayNews = news => {
    const newsContainer = document.getElementById('card');
    newsContainer.innerHTML = ``
    news.forEach(news => {
        console.log(news)
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('row');
        newsDiv.innerHTML = `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <p class="card-text">${news.details}</p>
                        <div class="d-flex flex-row gap-2" style="width: 3rem; height: 3rem">
                            <img src="${news.author.img}" class="card-img-bottom rounded-circle border-none" alt="...">
                            <div>
                                <h5 class="fs-6 w-100">${news.author.name}</h5>
                                <p></p>
                            </div>
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

// loadNews()