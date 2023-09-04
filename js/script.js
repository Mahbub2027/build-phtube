const handleCategory = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    //console.log(data.data);

    const tabContainer = document.getElementById('tab-container');
    data.data.forEach(categores => {
        const div = document.createElement('div');
        div.innerHTML= `
            <a onclick="handleloadNews('${categores.category_id}')" class="btn mx-5 w-24">${categores.category}</a>
        `;
        tabContainer.appendChild(div);
    });
}


const handleloadNews = async(categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json();
    console.log(data.data);

    const cardContainer = document.getElementById('card-container');

        cardContainer.innerHTML="";

        data.data?.forEach((news) => {
        const card = document.createElement('div');
        card.innerHTML= `
        <div class="card w-64 h-96 bg-base-100 shadow-xl mt-10">
        <figure><img class="w-60 h-60" src="${news?.thumbnail}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${news.title}</h2>
        <p class=""></p>
        <p></p>
        <div class="flex flex-row items-center">
        <div class="w-14 ">
            <img class="rounded-full h-14" src="${news.authors[0].profile_picture}" alt="">
          </div>
          <div class="mx-2">
            <h2>${news.authors[0].profile_name}</h2>
            <h5 class="text-xs"></h5>
          </div>
        </div>
        <p class="">views: ${news.others.views}</p>
        <p>${news.others.posted_date}</p>
        </div>
        </div>
       `;
       cardContainer.appendChild(card);
    })
};


handleCategory();