const handleCategory = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    //console.log(data.data);

    const tabContainer = document.getElementById('tab-container');
    data.data.forEach(categores => {

        

        const div = document.createElement('div');

        
        div.innerHTML= `
            <a onclick="handleloadNews('${categores.category_id}')" class="btn mx-2 w-24">${categores.category}</a>
        `;
        tabContainer.appendChild(div);
    });
}


const handleloadNews = async(categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await res.json();
    console.log(data.data);

    const cardContainer = document.getElementById('card-container');

        const showImage = document.getElementById('img-container');
        if(data.data.length === 0){
            showImage.classList.remove('hidden');
        }
        else{
            showImage.classList.add('hidden');
        }

        cardContainer.innerHTML="";

        data.data?.forEach((news) => {
        const card = document.createElement('div');
        card.innerHTML= `
        <div class="card w-72 h-96 bg-base-100 shadow-xl mt-10">
        <figure><img class="w-72 h-40 relative" src="${news?.thumbnail}" alt="Shoes" /></figure>
        <p class="flex justify-end">${news.others.posted_date}</p>
        <div class="p-5 ">
        <h2 class="card-title">${news.title}</h2>
        <p class=""></p>
        <p></p>
        <div class="flex flex-row items-center my-5">
        <div class="w-14 ">
            <img class="rounded-full h-14 " src="${news.authors[0].profile_picture}" alt="">
          </div>
          <div class="mx-5 flex flex-row gap-2 items-center">
            <div><h2>${news.authors[0].profile_name}</h2></div>
            <div><h5 class="text-xs">${news.authors[0].verified ? `<img src="../images/blue-badge.png">`: '' }</h5></div>
          </div>
        </div>
        <p class="">${news.others.views} views</p>
        
        </div>
        </div>
       `;
       cardContainer.appendChild(card);
    })
};


handleCategory();
handleloadNews(1000);



/* <p>${news.others.posted_date}</p> */