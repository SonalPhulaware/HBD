


let flyBaloon;
$(document).ready(function(){
    $("button").on("click",function(){
        const action_text = $("button").text();
        
        if(action_text == "Lights On")
        {
              
            $(".fade-in").show();
            $("button").hide();
            setTimeout(() => {

                $("button").text("Play Music").show();
            }, 5000);

        }
        if(action_text == "Play Music")
        {
            const audio = new Audio("music/happy-birthday.mp3");
            audio.loop=true;
            audio.play();
            $("button").hide();
            setTimeout(() => {
                $("button").text("Fly Baloons").show();
            }, 1000);

        }
        if(action_text == "Fly Baloons")
        {
            $("button").hide();
            setTimeout(() => {
                $("button").text("Lets Decorate").show();
            }, 3000);
             flyBaloon = setInterval(() => {
                $("#baloons").show().animate({top:'-1px',opacity: "toggle"},4000); 
            }, 1000);
            
            //clearInterval(flyBaloon);
            
           


        }
        if(action_text == "Lets Decorate")
        {
            $("button").hide();
            setTimeout(() => {
                $("button").text("Delicious Cake").show();
            }, 1000);
            $("#baloons").show().animate({top:'-1px',opacity: "toggle"},4000); 
            $("#decorate").html("<img src='images/birthday.webp' id='decorate'>");

            
        }
        if(action_text == "Delicious Cake")
        {
            $("button").hide();
            setTimeout(() => {
                $("button").text("Happy Birthday").show()
            }, 1000); 
            $("#cake").show().fadeUp(4000);;
        }
        
        if(action_text == "Happy Birthday")
        {
            $("button").hide();
            setTimeout(() => {
                $("button").text("The Message").show();
            }, 35000); 
            $("#pics-up").show();
            // $("#pics-down").show();
            
        }
        if(action_text == "The Message")
        {
            type1();
        
            $("button").hide()
            setTimeout(() => {
                type2();
            }, 15000);
            $("#message-col3").show();
            setTimeout(() => {
                $("#heart-img").show().fadeUp(4000);
            }, 25000);
        }

    });

});

var i=0;
function type1()
{
    
    var message =  "🌺 Many many happy return of the day.Stay happy, stay beautiful. I am looking forward to many more years of friendship and birthdays with you! 🌺";
        if(i<message.length)
        {  
                document.getElementById("message1").innerHTML+=message.charAt(i);
                i++;
                setTimeout(type1, 100);
        }
}
var j=0;
function type2()
{
    
    var message =  "🌺 Every step of the way you were there for me. Through thick and thin I will always be there for you! 🌺";
        if(j<message.length)
        {  
                document.getElementById("message2").innerHTML+=message.charAt(j);
                j++;
                setTimeout(type2, 100);
        }
}