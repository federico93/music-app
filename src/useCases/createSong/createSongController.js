// Mappers
const SongMapper = require('../../mappers/songMapper.js')

class CreateSongController {
  constructor (useCase) {
    this.useCase = useCase
  }

  execute (req, res) {
    const { name, artist, album, length } = req.body

    const requestDTO = {
      name: name,
      artist: artist,
      album: album,
      length: length
    }

    const song = this.useCase.execute(requestDTO)

    // res.status(200).json({
    //   name: song.getName(),
    //   artist: song.getArtist(),
    //   album: song.getAlbum(),
    //   length: song.getLength()
    // })
    res.status(200).json(SongMapper.toDTO(song))
  }
}

module.exports = CreateSongController
