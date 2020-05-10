class ChristmasMovies {
    constructor() {
        this.movieCollection = [];
        this.watched = {};
        this.actors = [];
    }

    buyMovie(movieName, actors) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        let uniqueActors = new Set(actors);

        if (movie === undefined) {
            this.movieCollection.push({ name: movieName, actors: [...uniqueActors] });
            let output = [];
            [...uniqueActors].map(actor => output.push(actor));
            return `You just got ${movieName} to your collection in which ${output.join(', ')} are taking part!`;
        } else {
            throw new Error(`You already own ${movieName} in your collection!`);
        }
    }

    discardMovie(movieName) {
        let filtered = this.movieCollection.filter(x => x.name === movieName)

        if (filtered.length === 0) {
            throw new Error(`${movieName} is not at your collection!`);
        }
        let index = this.movieCollection.findIndex(m => m.name === movieName);
        this.movieCollection.splice(index, 1);
        let { name, _ } = filtered[0];
        if (this.watched.hasOwnProperty(name)) {
            delete this.watched[name];
            return `You just threw away ${name}!`;
        } else {
            throw new Error(`${movieName} is not watched!`);
        }

    }

    watchMovie(movieName) {
        let movie = this.movieCollection.find(m => movieName === m.name);
        if (movie) {
            if (!this.watched.hasOwnProperty(movie.name)) {
                this.watched[movie.name] = 1;
            } else {
                this.watched[movie.name]++;
            }
        } else {
            throw new Error('No such movie in your collection!');
        }
    }

    favouriteMovie() {
        let favourite = Object.entries(this.watched).sort((a, b) => b[1] - a[1]);
        if (favourite.length > 0) {
            return `Your favourite movie is ${favourite[0][0]} and you have watched it ${favourite[0][1]} times!`;
        } else {
            throw new Error('You have not watched a movie yet this year!');
        }
    }

    mostStarredActor() {
        let mostStarred = {};
        if (this.movieCollection.length > 0) {
            this.movieCollection.forEach(el => {
                let { _, actors } = el;
                actors.forEach(actor => {
                    if (mostStarred.hasOwnProperty(actor)) {
                        mostStarred[actor]++;
                    } else {
                        mostStarred[actor] = 1;
                    }
                })
            });
            let theActor = Object.entries(mostStarred).sort((a, b) => b[1] - a[1]);
            return `The most starred actor is ${theActor[0][0]} and starred in ${theActor[0][1]} movies!`;
        } else {
            throw new Error('You have not watched a movie yet this year!')
        }
    }
}

module.exports = ChristmasMovies;


const ChristmasMovies = require('./02. Christmas Movies_Resources');
const assert = require('chai').assert;

describe("Tests …", function () {

    let actual;
    let expected;
    beforeEach(() => {
        actual;
        expected;
    });

    describe("Check with valid params", function () {
        it("functionality test", function () {
            let christmas = new ChristmasMovies();
            actual = christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
            expected = 'You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!';
            assert.equal(actual, expected);

            actual = christmas.buyMovie('Home Alone 2', ['Macaulay Culkin']);
            expected = 'You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!';
            assert.equal(actual, expected);

            actual = christmas.buyMovie('Last Christmas', ['Emilia Clarke', 'Henry Golding']);
            expected = 'You just got Last Christmas to your collection in which Emilia Clarke, Henry Golding are taking part!';
            assert.equal(actual, expected);

            actual = christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Pharrell Williams']);
            expected = 'You just got The Grinch to your collection in which Benedict Cumberbatch, Pharrell Williams are taking part!';
            assert.equal(actual, expected);

            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('The Grinch');
            christmas.watchMovie('Last Christmas');
            christmas.watchMovie('Home Alone 2');
            christmas.watchMovie('Last Christmas');

            actual = christmas.discardMovie('The Grinch');
            expected = 'You just threw away The Grinch!';
            assert.equal(actual, expected);

            actual = christmas.favouriteMovie();
            expected = 'Your favourite movie is Home Alone and you have watched it 3 times!';
            assert.equal(actual, expected);

            actual = christmas.mostStarredActor();
            expected = 'The most starred actor is Macaulay Culkin and starred in 2 movies!';
            assert.equal(actual, expected);
        });
    });

    describe('Check with invalid params', function () {
        it("functionality test", function () {
            let christmas = new ChristmasMovies();

            assert.deepEqual(christmas.movieCollection, []);
            assert.deepEqual(christmas.watched, {});
            assert.deepEqual(christmas.actors, []);

            christmas.buyMovie('asd', ['Macaulay Culkin']);
            actual = () => christmas.buyMovie('asd', ['Macaulay Culkin']);
            expected = 'You already own asd in your collection!';
            assert.throws(actual, expected);

            actual = () => christmas.discardMovie('asds');
            expected = 'asds is not at your collection!';
            assert.throws(actual, expected);

            actual = () => christmas.watchMovie('Home Alone');
            expected = 'No such movie in your collection!';
            assert.throws(actual, expected);

            christmas.watchMovie('asd');
            actual = christmas.watched;
            expected = { asd: 1 };
            assert.deepEqual(actual, expected);

            christmas.watchMovie('asd');
            actual = christmas.watched;
            expected = { asd: 2 };
            assert.deepEqual(actual, expected);

            christmas.discardMovie('asd')
            actual = () => christmas.favouriteMovie();
            expected = 'You have not watched a movie yet this year!';
            assert.throws(actual, expected);

            actual = () => christmas.mostStarredActor();
            expected = 'You have not watched a movie yet this year!';
            assert.throws(actual, expected);
        });
    });
});


