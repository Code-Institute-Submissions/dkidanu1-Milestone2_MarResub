var quotes = new Array();

    quotes[0] = "Green Park was a Gem the views and the experience were unmatched";
    quotes[1] = "My family and I live in Nairobi, and were looking for an exciting weekend getaway, and that is exactly what we found at Green Park, would definetely recommend";
    quotes[2] = "I was on my gap year travelling East Africa, I came across Green Park and it was a diamond in the rough, fantastic experience";
    quotes[3] = "Love the convenience of getting to Green Park and the variety of activities, staff is also very helpful";
    quotes[4] = "I would live there if I could! the tranquility and action are balanced very well";
(quotes);
var counter = 0;

function loop() {
    if (counter > 4) counter = 0;
    ("quote: ", quotes[counter]);
    const testimonal = document.getElementById('textslide');
    testimonal.innerText = '"' +  quotes[counter] + '"';
    counter++;
    (counter);
    setTimeout(loop, 5000);
}
loop();