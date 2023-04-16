(async function(){
    const response= await fetch("./movies.json")
    const movies= await response.json();
 
    // const rating=document.getElementById("rating")
    const inputElem=document.getElementById("searchInput");
    const btnELem=document.getElementById("searchBtn")
    const listELem=document.getElementById("recipe-list")
    const detailsElem=document.getElementById("recipeDetailsContainer")






    function displyMovieDetails(movie){
        detailsElem.innerHTML=`
        <h2 class="title">${movie.title}</h2>
        <img src="${movie.image}" alt="${movie.title}">

        <ul> ${movie.releaseDate.map(function(releaseDate){
            return "<li>"+releaseDate+"</li>" 
        })}.join("")}</ul>
        <h3>Instructions</h3>
        <div>${movies.instructions}</div>
        `;
    }
    
      
    









    // function displySearchResult(result){
    //     listELem.innerHTML="";
    //      result.forEach(function (movie){
    //         const li=document.createElement("li")
    //        li.innerHTML=movie.title;
    //        listELem.appendChild(li);
    //      })
    function displySearchResult(result){
        listELem.innerHTML="";
        result.forEach(function (movie){
            const li=document.createElement("li");
            const listItem=`
                <div class="title">${movie.title}</div>
                <div class="description">${movie.description}</div>
                <img src="${movie.image}" alt="${movie.image}">
            `;
            li.innerHTML=listItem;
            li.addEventListener("click",function(){
                displyMovieDetails(movie);
            });
            listELem.appendChild(li);
        });
    }
    
    
    

    function search(){
        const selectedGenre = document.getElementById("searchInput").value;
      
        const selectedRating=document.getElementById("searchRating").value;
        let selectedYear=document.getElementById("realeasyear").value;
        
    let query = selectedGenre.toLowerCase();
    if(selectedGenre==="all"){query=0};
    let queryRating = parseInt(selectedRating);
    if (selectedRating === "None") {
        queryRating = 0; // Use the assignment operator to set the query rating to zero
    }

   
// console.log(queryRating);
    const result = movies.filter(function(movie){
        
        if (query === 0) {
           
            return movie.genre;
           
        } 
        else if (queryRating === 0) {
            return movie.genre.toLowerCase().includes(query);
        } 
        else {
            return movie.genre.toLowerCase().includes(query) && movie.rating <= queryRating;
        }
        // && movie.rating<=queryRating;
// is line ko enable kerne sy  rating wala chlae ga




        // movie.rating<=queryRating;
    });
    displySearchResult(result);
    //   movie.genre.toLowerCase().includes(query)||
    // movie.genre.toLowerCase().includes(query)&& 

    //     const query=inputElem.value;
    //     const result=movies.filter(function (movies){
    //         return movies.genre.toLowerCase().includes(query);
           
            

    //     });
     
    // console.log(result);
    }
    
 btnELem.addEventListener("click",search)
    })();
    // const filteredMovies = movies.filter(function(movie){
    //     return movie.title.toLowerCase().includes(query) && movie.rating >= minRating;
    //   });
      