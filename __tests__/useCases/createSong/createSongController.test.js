// Mocks
const RequestMock = require('../../../__mocks__/http/request.mock.js')
const ResponseMock = require('../../../__mocks__/http/response.mock.js')

// Models
const Song = require('../../../src/models/song.js')

// Controllers
const CreateSongController = require('../../../src/useCases/createSong/createSongController')

// UseCases
const CreateSongUseCase = require('../../../src/useCases/createSong/createSongUseCase.js')

describe('Test CreateSongController', () => {
  test('It should respond 200', async () => {
    const song = new Song('Supersonic', 'Oasis', 'Definitely Maybe', 284)

    const req = new RequestMock({
      body: {
        name: song.getName(),
        artist: song.getArtist(),
        album: song.getAlbum(),
        length: song.getLength()
      }
    })

    const res = new ResponseMock()

    const songRepositoryMock = {
      createSong: jest.fn().mockReturnValue(song)
    }

    const useCase = new CreateSongUseCase(songRepositoryMock)

    const controller = new CreateSongController(useCase)

    await controller.execute(req, res)

    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        name: song.getName(),
        artist: song.getArtist(),
        album: song.getAlbum(),
        length: song.getLength()
      })
    )

    expect(songRepositoryMock.createSong).toHaveBeenCalledTimes(1)
    expect(songRepositoryMock.createSong).toHaveBeenCalledWith(song)
  })
})
