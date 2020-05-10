function movies(input) {
    const movieDataBase = {};

    const movieName = (arr) => {
        let movieName = arr.replace(/addMovie\s*/, '');
        return {
            'name': movieName,
        }
    };

    const movieDirector = (arr) => {
        const [tmpName, tmpDirector] = arr
            .split(' directedBy ');

        return {
            'name': tmpName,
            'director': tmpDirector,
        }
    };

    const movieDate = (arr) => {
        const [tmpName, tmpDate] = arr
            .split(' onDate ');

        return {
            'name': tmpName,
            'date': tmpDate,
        }
    };

    const movieUpdater = (movieUpdate) => {
        const {name} = movieUpdate;
        if (!movieDataBase.hasOwnProperty(name)) {
            movieDataBase[name] = movieUpdate;
        } else {
            for (let keyEL in movieUpdate) {
                movieDataBase[name][keyEL] = movieUpdate[keyEL];
            }
        }
    };

    for (let commandLine of input) {
        if (commandLine.includes('addMovie')) {
            const newInformation = movieName(commandLine);
            movieUpdater(newInformation);
        }
        if (commandLine.includes('directedBy')) {
            const newInformation = movieDirector(commandLine);
            movieUpdater(newInformation);
        }
        if (commandLine.includes('onDate')) {
            const newInformation = movieDate(commandLine);
            movieUpdater(newInformation);
        }
    }


    for (let keyEL in movieDataBase) {
        const movie = movieDataBase[keyEL];

        if (movie.hasOwnProperty('name') && movie.hasOwnProperty('director') && movie.hasOwnProperty('date')) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);


