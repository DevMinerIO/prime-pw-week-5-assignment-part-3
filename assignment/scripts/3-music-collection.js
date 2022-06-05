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
}
addToCollection("test", "MINER", 1991);
console.log(collection);
addToCollection("test2", "MEEEEEE", 1000);
addToCollection("Three", "YOUUUUU", 2090);
addToCollection("Everybody", "Back Street Boys", 2000);
addToCollection("Bye Bye Bye", "InSync", 2002);
addToCollection("Oops I did it again", "Britney Spears", 1999);
console.log(collection);
