class Github{
    constructor(){
        this.url = "https://api.github.com/users/";
    }
    async getGithubData(username){
        let responseUser = await fetch(this.url + username); // response obj resolve ettiginde degiskende olucak
        let responseRepo = await fetch(this.url + username + "/repos");

        let userData = await responseUser.json(); // promise donucegi icin await yazdik.  response objesinden json verisini aldik.. response jsonda promise doner bunu beklemek icin await keywordu kullanildi
        let repoData = await responseRepo.json();

        return {
            user:userData,
            repo:repoData
        }
    }
}


/*
return ile gelen degerleri obje olarak donduk.

*/