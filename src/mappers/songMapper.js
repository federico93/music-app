module.exports = {
  toDTO (song) {
    return {
      name: song.getName(),
      artist: song.getArtist(),
      album: song.getAlbum(),
      length: song.getLength()
    }
  }
}
