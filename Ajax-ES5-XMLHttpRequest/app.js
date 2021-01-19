class Request{

    constructor(){
        this.xhr = new XMLHttpRequest();

    }

    // get Request

    get(url,callback){
        this.xhr.open("GET",url); // bağlantı aç.
        

        this.xhr.onload = function(){
            if(this.status ===200){
                callback(null,this.responseText); // istek bitti. hata durumunda callbacke 2 parametre gonderiyoruz ilki mesaj burada basarili oldugu icin null gonderdik
            }else {
                callback("Hata olustu",null); // istek olumsuz hata mesaji yollandi, null ise donecek deger yok..
            }
        }
        this.xhr.send();    

    }

    post(url,data,callback){
        this.xhr.open("POST",url);

        this.xhr.setRequestHeader("Content-type","application/json"); 
        this.xhr.onload = () =>  {
            if(this.xhr.status === 201){
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Herhangi bir hata olustu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    put(url,data,callback){
        this.xhr.open("PUT",url);

        this.xhr.setRequestHeader("Content-type","application/json"); 
        this.xhr.onload = () =>  {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Herhangi bir hata olustu", null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }

    delete(url,callback){
        this.xhr.open("DELETE",url); // bağlantı aç.
        

        this.xhr.onload = function(){
            if(this.status ===200){
                callback(null,this.responseText); // istek bitti. hata durumunda callbacke 2 parametre gonderiyoruz ilki mesaj burada basarili oldugu icin null gonderdik
            }else {
                callback("Hata olustu",null); // istek olumsuz hata mesaji yollandi, null ise donecek deger yok..
            }
        }
        this.xhr.send();    

    }
}

let request = new Request();

const albums =request.get("https://jsonplaceholder.typicode.com/albums",function(err,response){
    if (err ===null) { // ilk deger err = nullsa basarili...
        //basarili
        console.log(response);
    }else {
        //hata
        console.log(err);
    }
});

console.log(albums);

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function(err,response){
    if (err === null){
        console.log(response);
    }else {
        console.log(err);
    }
});

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:122,title:"Thriller"},function(err,response){
    if (err === null){
        console.log(response);
    }else {
        console.log(err);
    }
});

request.delete("https://jsonplaceholder.typicode.com/albums/10",function(err,response){
    if (err ===null) { // ilk deger err = nullsa basarili...
        //basarili
        console.log(response);
    }else {
        //hata
        console.log(err);
    }
});