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
        <p class="flex justify-end "></p>

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
  

        //const inputSeconds = ${news.others.posted_date}; // Example input: 3665 seconds

    // Step 2: Calculate hours, minutes, and seconds
    //const hours = Math.floor(inputSeconds / 3600);
    //const minutes = Math.floor((inputSeconds % 3600) / 60);
    //const seconds = inputSeconds % 60;

    // Step 3: Format the result as a string
    //const formattedTime = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    // Output the result
    //console.log(formattedTime);



   /*  const handleload = (categoryId) => {
      fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
      .then((res) => res.json())
      .then((data) =>{
        const timeInSeconds = data.data?.others?.posted_date;

        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const formattedTime = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        } 
      )
 */
      /* function formatTime(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const sec = seconds % 60;
        return `${hours} hours ${minutes} min${sec} sec`;
      }
        const inputSeconds = `${data.data.others?.posted_date}`; 
        const formattedTime = formatTime(inputSeconds);
        //console.log(formattedTime);
    } */
  
    /* function formatTime(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const sec = seconds % 60;
      return `${hours} hours ${minutes} min${sec} sec`;
    }
      const inputSeconds = `${data.data.others?.posted_date}`; 
      const formattedTime = formatTime(inputSeconds);
      console.log(formattedTime); */


   /*  // Step 1: Make an HTTP GET request to the API
      const apiUrl = 'https://openapi.programming-hero.com/api/videos/category/'; // Replace with your API URL
      fetch(apiUrl)
      .then((response) => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
        }
      return response.json();
        })
      .then((data) => {
        const timeInSeconds = data.data?.others?.posted_date;

        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const formattedTime = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
        //console.log(formattedTime);
  }) */
        /* .catch((error) => {
         console.error('Error:', error);
  }
  ); */




    // Math.floor(news.others.posted_date / 3600 )



 /* // Step 1: Get the input number (time in seconds)
    const inputSeconds = news.others.posted_date; // Example input: 3665 seconds

    // Step 2: Calculate hours, minutes, and seconds
    const hours = Math.floor(inputSeconds / 3600);
    const minutes = Math.floor((inputSeconds % 3600) / 60);
    const seconds = inputSeconds % 60;

    // Step 3: Format the result as a string
    const formattedTime = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    // Output the result
    console.log(formattedTime); // Output: 1 hours, 1 minutes, 5 seconds
 */

  ///For time
      /* const seconds = news.data.posted_date;
       function convertSecondsToHoursMinutesSeconds(seconds) {
           const hours = Math.floor(seconds / 3600);
           const remainingSeconds = seconds % 3600;
           const minutes = Math.floor(remainingSeconds / 60);
           const remainingSecondsAfterMinutes = remainingSeconds % 60;
         
           return {
             hours,
             minutes,
             seconds: remainingSecondsAfterMinutes,
           };
         }
         //const totalSeconds = news.data.posted_date; 
         const timeObject = convertSecondsToHoursMinutesSeconds(totalSeconds);
         
         console.log(`${timeObject.hours} hours, ${timeObject.minutes} minutes, ${timeObject.seconds} seconds`);
 */


    //function sortByView(){
/*     const sortdatahandle = async(categoryId) =>{
      const sortData = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
      const sortView = await sortData.json();
      //console.log(sortView.data);

      const sortDataView = document.getElementById('sort-by-view');
      sortView.others?.views.sort((a,b) => {
          return a.others.views - b.others.views;
        });
        sortView.others?.views.forEach((e) =>{
          console.log(`${sortView.others.views}`);
        })
    } */
//}
