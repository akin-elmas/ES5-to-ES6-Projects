let form  = document.getElementById("film-form");
let titleElement = document.querySelector("#title");
let directorElement = document.querySelector("#director");
let urlElement = document.querySelector("#url");
let cardBody = document.querySelectorAll(".card-body")[1];
let clear = document.getElementById("clear-films");


// uı obj start
let ui = new UI();

// create storage obj
let storage = new Storage();
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){

    // get to inputs data
    let title = titleElement.value;
    let director = directorElement.value;
    let url = urlElement.value;

    if(title === "" || director === "" || url === ""){
       ui.displayMessages("Tüm alanları doldurun.","danger");
    }
    else {
        let newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessages("Film eklendi.","success");
    }


    ui.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}

function deleteFilm(e){
   if (e.target.id === "delete-film") {
       ui.deleteFilmFromUI(e.target);
       storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

       ui.displayMessages("Silme işlemi başarılı.", "success");
   }
}

function clearAllFilms(){
    ui.clearAllFilmsFromUI();
    storage.clearAllFilmsFromStorage();
}

