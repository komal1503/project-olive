
//----for setting  the end date, say 1 JAN ,2022 00:00:00 
var endDate=new Date("January 1, 2022 00:00:00").getTime();

//to update countdown every second 

var myfun= setInterval(function(){

    var now= new Date().getTime();
    var timeleft =endDate-now;
    var days = Math.floor(timeleft/(1000*60*60*24));
    var hours = Math.floor ((timeleft%(1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor ((timeleft%(1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    //--displaying countdown to webpage 
    document.getElementById("days").innerHTML=days+"d:"
    document.getElementById("hours").innerHTML = hours  
    document.getElementById("mins").innerHTML = ":"+minutes + ":" 
    document.getElementById("secs").innerHTML = seconds 

    //after countdown is over 
    if(timeleft<0){
        clearInterval(myfun);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "Lets Start!! Hurray ";
    }
},1000);