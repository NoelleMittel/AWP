const { green, red } = require('chalk');
const { Post } = require('./server/db/indexDB');
const db = require('./server/db/database');

// --------------- BlogPosts seed data --------------->
const seededBlogPosts = [
  {
    bookTitle: 'We Hunt the Flame',
    author: ' Hafsah Faizal',
    coverPageImage: '/images/WeHuntTheFlame.png',
    reviewOfLastPage:
      'MAJOR cliffhanger. I need to see how the characters got to this point!',
    dateStarted: 2019 - 5 - 18,
    dateCompleted: 2019 - 6 - 03,
    endRating: 9,
  },
  {
    bookTitle: 'Game of Thrones',
    author: 'George R.R. Martin',
    coverPageImage: '/images/GOT.png',
    reviewOfLastPage:
      "Full of suspense. Clear the author fleshed out characters within the plot due to their complicated relationship even in the end. Guessing it's a cliffhanger. ",
    dateStarted: 1997 - 12 - 30,
    dateCompleted: 1998 - 2 - 17,
    endRating: 9,
  },
  {
    bookTitle: 'Realm Breaker',
    author: 'Victoria Aveyard',
    coverPageImage: '/images/RealmBreaker.png',
    reviewOfLastPage:
      'Gorgeous imagery. Could imagine there was some intense falling action from where it is left off.',
    dateStarted: 2022 - 5 - 23,
    dateCompleted: 2022 - 06 - 10,
    endRating: 8,
  },
  {
    bookTitle: 'Dune',
    author: 'Frank Herbert',
    coverPageImage: '/images/Dune.png',
    reviewOfLastPage:
      "The main character seems to have succeeded in what his goal was, but there's a heaviness that proves the next book will have much more revealed.",
    dateStarted: 1987 - 9 - 19,
    dateCompleted: 1987 - 11 - 10,
    endRating: 6,
  },
  {
    bookTitle: 'An Enchantment of Ravens',
    author: 'Margaret Rogerson',
    coverPageImage: '/images/EnchantmentOfRavens.png',
    reviewOfLastPage:
      'The dust has settled on whatever incredible conflict there was. The last few lines make me think this is a standalone. The prose is very lush.',
    dateStarted: 2018 - 11 - 14,
    dateCompleted: 2018 - 12 - 27,
    endRating: 9,
  },
  {
    bookTitle: 'Lord of the Rings: The Fellowship of the Ring',
    author: 'J. R. R. Tolkien',
    coverPageImage: '/images/LOTR.png',
    reviewOfLastPage:
      'Sam is reckless, I can already tell from his lack of selfworth, but he also has a sort of importance to him. Not sure if he is the main character the story focuses on.',
    dateStarted: 1954 - 7 - 10,
    dateCompleted: 1954 - 9 - 30,
    endRating: 7,
  },
  {
    bookTitle: 'Sorcery of Thorns',
    author: 'Margaret Rogerson',
    coverPageImage: '/images/SorceryOfThorns.png',
    reviewOfLastPage:
      "Has a magic system I want to learn more about! The resolved conflict has taken a toll on the main character, but it seems like life is back to 'normal'.",
    dateStarted: 2020 - 6 - 10,
    dateCompleted: 2020 - 6 - 17,
    endRating: 7,
  },
];

// --------------------- seed function --------------------->
const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      seededBlogPosts.map((post) => {
        return Post.create(post);
      })
    );
  } catch (err) {
    console.log(red(err));
  }
};

// --------------------- export --------------------->
module.exports = seed;
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green('Seeding success!'));
      db.close();
    })
    .catch((err) => {
      console.error(red('Oh noes! Something went wrong!'));
      console.error(err);
      db.close();
    });
}
