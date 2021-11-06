var all_list = false;

function all_li() {
    if (!all_list) {
        document.getElementById('all-list').style.display = 'block';
        document.getElementById('triangle').src="./Images/triangle-up.png";
        all_list = true;
    }
    else if (all_list) {
        document.getElementById('all-list').style.display = 'none';
        document.getElementById('triangle').src = "./Images/triangle.svg";
        all_list = false;
    }
}

document.getElementById('ls-all').addEventListener('click',on_list);
document.getElementById('ls-title').addEventListener('click',on_list);
document.getElementById('ls-tv').addEventListener('click',on_list);
document.getElementById('ls-celibs').addEventListener('click',on_list);
document.getElementById('ls-comp').addEventListener('click',on_list);
document.getElementById('ls-key').addEventListener('click',on_list);
document.getElementById('ls-adv').addEventListener('click',off_list);

function on_list() {
    document.getElementById("present-list").innerHTML = this.innerText;
    document.getElementById('all-list').style.display = 'none';
    document.getElementById('triangle').src = "./Images/triangle.svg";
    all_list = false;
}

function off_list () {
    document.getElementById('all-list').style.display = 'none';
}


// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=8d62f59fbe3f51c31b5be6beb8a37914


const API_KEY = 'api_key=8d62f59fbe3f51c31b5be6beb8a37914';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const main = document.getElementById('main-card');


/* -------------------------------   For fan's favorite ---------------------------- */ 
getMovies(API_URL);

function getMovies(url) {

    fetch(url).then(res => res.json()).then(data => {
        console.log (data.results);
        showMovies(data.results);
    })
}

function showMovies (data) {

    main.innerHTML = '';

    data.forEach(movie => {
        const {title,poster_path,vote_average} = movie;
        const movie1 = document.createElement('div');
        movie1.classList.add('movie');
        movie1.innerHTML = `

            <img src="${IMG_URL + poster_path}" class="card-width">
                <div class="card-imdb">
                    <img src="Images/icons8-star-filled-48.png" class="card-star"><p>${vote_average}</p>
                </div>
                <p class="name-card">${title}</p>
                <div class="watch-card"><img src="Images/icons8-plus-math-50.png" class="card-plus"><p class="card-para">WatchList</p></div>
                <div class="card-trailer">
                    <img src="Images/icons8-play-30.png" class="card-play">
                    <p>Trailer</p>
                </div>
        `
        main.appendChild (movie1);
    })
}

/* -----------------------For Featured Today -------------------------- */

const API_URL1 = BASE_URL + '/discover/movie?with_genres=18&primary_release_year=2014&' + API_KEY;

const main1 = document.getElementById('today-features');

getRelease(API_URL1);

function getRelease(url) {

    fetch(url).then(res=> res.json()).then(data=> {
        console.log (data.results);
        showRelease (data.results);
    })
}

function showRelease (data) {

    main1.innerHTML = '';

    data.forEach (movie=> {
        const {title,poster_path} = movie;
        const movie1 = document.createElement ('div');
        movie1.classList.add('movie');

        movie1.innerHTML = `

        <div class="today">
            <div class="today-mood">
                    <img src="${IMG_URL + poster_path}" alt="" class="today-img">
            </div>
            <p class="same-today">${title}</p>
        </div>
        `

        main1.appendChild (movie1);

    })
}





















/* -------------------------    Responsive button for What's Streaming ------------- */
// Get the container element
var btnContainer = document.getElementById("explore-stream");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("list-stream");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active1");
    current[0].className = current[0].className.replace(" active1", "");
    this.className += " active1";
  });
}


