console.log('***** Music Collection *****')
//3 parameter construtor
//  function album (title, artist, yearPublished) {
//      this.title = title;
//      this.artist = artist;
//      this.yearPublished = yearPublished;
//  }

 // empty array
let collection = [];

//using this. did not work when pointing at the parameters?
function addToCollection(addTitle, addArtist, addYearPublished) {
    let album = {
        title: addTitle,
        artist: addArtist,
        yearPublished: addYearPublished
    };
    collection.push(album);
    return console.log(collection);
}
addToCollection("test", "MINER", 1991);
addToCollection("test2", "MEEEEEE", 1000);
addToCollection("Three", "YOUUUUU", 2090);
addToCollection("Everybody", "Back Street Boys", 2000);
addToCollection("Bye Bye Bye", "InSync", 2002);
addToCollection("Oops I did it again", "Britney Spears", 1999);

//Am I able to see the .title, .artist, and .yearPublished because they are in the array im looking at? They were made as...
//local variables in my "addToCollection" function.
function showCollection(array) {
    console.log("Number of items in the array:" , array.length);
    for( let i = 0; i < array.length; i++) {
        console.log(array[i].title, "by" , array[i].artist + ", published in" , array[i].yearPublished);
    }
}
showCollection(collection);

function findByArtist(artist) {
    let matchingArtist = [];
    for(let i = 0; i < collection.length; i++) {
        if(collection[i].artist.toLowerCase() === artist.toLowerCase()) {
            matchingArtist.push(collection[i]);
        }
    }
    if(matchingArtist.length === 0) {
        console.log("There are no matching results for:", artist , "as seen below!");
        console.log(matchingArtist);
    } else {
        console.log("Here are your matching results for:" , artist + "!");
        console.log(matchingArtist);
    }
}

//testing matching artist function
addToCollection("MATCHING TITLE TEST", "MINER", 2022);
//matching none
findByArtist("find None");
//multiple matching
findByArtist("miner");
//matches single
findByArtist("INSYNC");

