function weatherUpdate(){
    var w = new XMLHttpRequest();
    w.onload = function (){
         var data = JSON.parse(this.responseText);
         //array//
         var all = data.list;
         for(var i=0;i<all.length;i++){
             var t = `<div class="box-weather">
                    <h4>${all[i].dt_txt}</h4>
                    <h2>${all[i].main.temp}<sup>o</sup>C</h2>
                    <p>${all[i].weather[0].description}</p>
                    <img src="https://openweathermap.org/img/wn/${all[i].weather[0].icon}@2x.png"/>
                </div>` ;
             //chen cu len moi//
             document.getElementById("forecast").innerHTML +=t;
         }
    }
    var url = "https://api.openweathermap.org/data/2.5/forecast?q=Hanoi,vietnam&appid=09a71427c59d38d6a34f89b47d75975c&units=metric";
    w.open("get",url,true);
    w.send();
}
weatherUpdate();