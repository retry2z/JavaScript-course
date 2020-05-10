function songs(input) {
    class SongsPlaylist {
        constructor(playlist, songName, songLength) {
            this.playlist = playlist;
            this.songName = songName;
            this.songLength = songLength;
        }
    }

    const songs = [];
    const songsNumber = input.shift();
    const currentPlaylist = input.pop();

    for (let currentSong of input) {
        const songData = currentSong.split('_');
        const [playlist, songName, songLength] = songData;
        songs.push(new SongsPlaylist(playlist, songName, songLength));
    }

    if (currentPlaylist === 'all') {
        songs.forEach(x => {
            console.log(x.songName);
        });
    } else {
        const filtered = songs.filter(x => x.playlist === currentPlaylist);
        filtered.forEach(x => {
            console.log(x.songName);
        });
    }
}

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);