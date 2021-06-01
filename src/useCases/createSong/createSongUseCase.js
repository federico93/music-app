// Models
const Song = require('../../models/song.js')

class CreateSongUseCase {
  constructor (songRepository) {
    this.songRepository = songRepository
  }

  execute (requestDTO) {
    const { name, artist, album, length } = requestDTO

    const song = new Song(name, artist, album, length)

    return this.songRepository.createSong(song)
  }
}

module.exports = CreateSongUseCase
