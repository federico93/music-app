class Song {
  constructor (name, artist, album, length) {
    this.name = name
    this.artist = artist
    this.album = album
    this.length = length
  }

  getName () {
    return this.name
  }

  getArtist () {
    return this.artist
  }

  getAlbum () {
    return this.album
  }

  getLength () {
    return this.length
  }
}

module.exports = Song
