const searchParams = location.search; 

const params = new URLSearchParams(searchParams);

const id = params.get("id"); 

const mode = document.getElementById("mode");

if (localStorage.getItem("theme") != null) {
   const themeData = localStorage.getItem("theme");
}
let containerDetails = {};

(async function () {
   const options = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ebf3aecf80mshdd01b60418a6cb4p1ee575jsn21a7d1d1ec4e',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	},
   }; 
   

   const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);

   const responseData = await api.json();

   containerDetails = responseData;
   displayData();

   console.log(responseData);
})();

function displayData() {
   const detailsBox = `
   
   <div class="col-md-4">
   <figure>
      <img src="${containerDetails.thumbnail}" class="w-100" alt="details image" />
   </figure>
</div>
<div class="col-md-8">

   <div>
      <nav aria-label="breadcrumb">
         <div class="breadcrumb" class="text-light">
            <li class="breadcrumb-item text-info" aria-current="page">${containerDetails.title}</li>
         </div>
      </nav>

      <h1>${containerDetails.title}</h1>

      <h3>About ${containerDetails.title}</h3>
      <p>${containerDetails.description}</p>

      
   </div>
</div>

   `;

   document.getElementById("detailsData").innerHTML = detailsBox;

   const backgroundImage = containerDetails.thumbnail.replace("thumbnail", "background");

   document.body.style.cssText = `
   background-image:url('${backgroundImage}') ;
   background-size:cover;
   background-position:center; `;
}

document.querySelector(".fa-brands").addEventListener('click', function () {
    location.href = "./index.html";
 });











