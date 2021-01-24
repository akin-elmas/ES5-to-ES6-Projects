let githubForm = document.getElementById("github-form");
let nameInput = document.getElementById("githubname");
let clearLastUsers = document.getElementById("clear-last-users");
let lastUsers= document.getElementById("last-users");
let github = new Github();
let ui = new UI();


eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);

}

function getData(e){
    let username = nameInput.value.trim();

    if(username === ""){
        ui.showError("Kullanici bulunamadi");
    }
    else {
       

        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found"){
                ui.showError("Kullanici bulunamadi");
            }
            else {
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);
                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })
        .catch(err => ui.showError(err));
    }



    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched(){
    if(confirm("Emin misiniz ?")){
       Storage.clearAllSearchedUsersFromStorage();
       ui.clearAllSearchedFromUI();
    }
}
function getAllSearched(){
    let users = Storage.getSearchedUsersFromStorage();

    let result = "";
    users.forEach(user =>{
        

        result += `<li class="list-group-item">${user}</li>`;
    });
    lastUsers.innerHTML = result;
}