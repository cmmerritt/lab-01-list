const images = [
    {
      url:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/psycho_1960_linen_original_film_art_1200x.jpg?v=1593534654",
      title: "Psycho",
      description: "Psycho, Alfred Hitchcock, 1960",
      keyword: "psycho",
      year: 1960
    },
    {
      url:
        "https://m.media-amazon.com/images/M/MV5BMTlhNmVkZGUtNjdjOC00YWY3LTljZWQtMTY1YWFhNGYwNDQwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
      title: "Carrie",
      description: "Carrie, Brian DePalma, 1976",
      keyword: "carrie",
      year: 1976
    },
    {
      url:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/alien_1979_original_film_art_5000x.jpg?v=1607111293",
      title: "Alien",
      description: "Alien, Ridley Scott, 1979",
      keyword: "alien",
      year: 1979
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/I/412nmnEFLVL._AC_.jpg",
      title: "The Fly",
      description: "The Fly, David Cronenberg, 1986",
      keyword: "fly",
      year: 1986
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/I/61VVvaQJJvL._AC_SY741_.jpg",
      title: "Halloween",
      description: "Halloween, John Carpenter, 1978",
      keyword: "halloween",
      year: 1978
    },
    {
      url:
        "https://m.media-amazon.com/images/M/MV5BMjMzNjMyMjU2M15BMl5BanBnXkFtZTgwMzA3NjQ0MzE@._V1_.jpg",
      title: "A Girl Walks Home Alone at Night",
      description: "A Girl Walks Home Alone at Night, Ana Lily Amirpour, 2014",
      keyword: "girl-walks",
      year: 2014
    },
    {
      url:
        "https://images-na.ssl-images-amazon.com/images/I/61cwYyI-c0L._AC_SL1000_.jpg",
      title: "The Shining",
      description: "The Shining, Stanley Kubrick, 1980",
      keyword: "shining",
      year: 1980
    },
    {
      url:
        "https://m.media-amazon.com/images/M/MV5BMDUxM2IyYzgtMjU1ZS00Mzc4LWIwMmUtYzczMzM5ZWIzNGUxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      title: "Black Christmas",
      description:
        "Black Christmas, Bob Clark, 1974",
      keyword: "black-christmas",
      year: 1974
    },
    {
      url:
        "https://m.media-amazon.com/images/M/MV5BMTk0NzMzODc2NF5BMl5BanBnXkFtZTgwOTYzNTM1MzE@._V1_.jpg",
      title: "The Babadook",
      description: "The Babadook, Jennifer Kent, 2014",
      keyword: "babadook",
      year: 2014
    },
    {
      url: "https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg",
      title: "Tucker and Dale vs. Evil",
      description: "Tucker and Dale vs. Evil, Eli Craig, 2010",
      keyword: "tucker-dale",
      year: 2010
    },
    /* {
      url:
        "https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg",
      title: "Believe",
      description: "I believe in unicorns, do you?",
      keyword: "unicorn",
      horns: 1
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg",
      title: "Markhor",
      description:
        "These wild goats eat snakes, then secrete a foam that locals fight over for the antivenom properties -- how cool is that?",
      keyword: "markhor",
      horns: 2
    },
    {
      url: "http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi",
      title: "Baby markhor",
      description: "Even the babies are adorable",
      keyword: "markhor",
      horns: 2
    },
    {
      url:
        "https://cdn.modernfarmer.com/wp-content/uploads/2014/08/28476658_9c97f35096_o.jpg",
      title: "Mouflon",
      description: "Those horns though",
      keyword: "mouflon",
      horns: 2
    },
    {
      url: "https://cdn.modernfarmer.com/wp-content/uploads/2014/08/addax.jpg",
      title: "Addax",
      description:
        "This guy is basically extinct but survives well in captivity, so they're frequently found in zoos",
      keyword: "addax",
      horns: 2
    },
    {
      url:
        "https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg",
      title: "Baby mouflon",
      description: "The cuteness that is a baby mouflon asleep",
      keyword: "mouflon",
      horns: 2
    },
    {
      url:
        "https://cdn.modernfarmer.com/wp-content/uploads/2014/08/chameleon.jpg",
      title: "Happy Jackson's Chameleon",
      description: "These are really common in Hawaii",
      keyword: "chameleon",
      horns: 2
    },
    {
      url:
        "https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg",
      title: "Serious Jackson's Chameleon",
      description: "This one is very serious.",
      keyword: "chameleon",
      horns: 3
    },
    {
      url:
        "https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false",
      title: "Horned Lizard",
      description: "Fave food: ants",
      keyword: "lizard",
      horns: 100
    },
    {
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg",
      title: "Smaug",
      description: "Fan illustration of Smaug from 'The Hobbit'",
      keyword: "dragon",
      horns: 100
    } */
  ];
  
  export default images;