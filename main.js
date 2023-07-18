var y;
var x; 
function getRandomInt() {
    return Math.floor(Math.random() * 6)
}


function randomQuote() {
    
    x = getRandomInt();
    if (y==x) {
        if (x==5) {
            x-=1;
        }
        else{
            x+=1;
        }
    }
    switch (x) {
        case 0:
            document.getElementById("demo").innerHTML=`<p class="fs-2">"You miss 100% of the shots you don't take."</p>
            <span class="fs-2">--Wayne Gretzy</span>` 
            break;
        case 1 :
            document.getElementById("demo").innerHTML=`<p class="fs-2">"In three words I can sum up everything I've learned about life: it goes on."</p>
            <span class="fs-2">--Robert Frost</span>` 
            break;   
        case 2 : 
        document.getElementById("demo").innerHTML=`<p class="fs-2">"If you tell the truth, you don't have to remember anything."</p>
        <span class="fs-2">--Mark Twain</span>` 
        break;
        case 3 :
            document.getElementById("demo").innerHTML=`<p class="fs-2">"YI've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."</p>
            <span class="fs-2">--Maya Angelou</span>` 
            break;
        case 4: 
            document.getElementById("demo").innerHTML=`<p class="fs-2">"A friend is someone who knows all about you and still loves you."</p>
            <span class="fs-2">--Elbert Hubbard</span>` 
        break;
        case 5 :
            document.getElementById("demo").innerHTML=`<p class="fs-2">"To live is the rarest thing in the world. Most people exist, that is all."</p>
            <span class="fs-2">--Oscar Wilde</span>` 
        break;
    }
    console.log(x);
    

    y = x ;
}


