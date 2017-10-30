var books = [
    {
        title: "The Giver",
        author: "Lois Lowry",
        stars: 4
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        stars: 5
    }
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);
fill(173, 117, 33);
rect(0, 259, width, 10);

for(var i = 0; i < books.length; i++) {
    fill(214, 255, 219);
    rect(i*120+10, 20, 105, 100);
    fill(0, 0, 0);
    textSize(12);
    text(books[i].title, i*120+14, 29, 70, 100);
    textSize(10);
    text(books[i].author, i*120+14, 59, 70, 100);
    for (var j = 0; j < books[i].stars; j++) {
        image(getImage("cute/Star"), (13 + j * 20) + (i*120), 90, 20, 30);
    }
}
