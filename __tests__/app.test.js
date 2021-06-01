process.env.APP_PORT = 3001
process.env.NODE_ENV = 'test'

const request = require('supertest')
const app = require('./../src/app.js')

describe('Test app.js', () => {
  test('It should response 200 to GET method', async () => {
    const response = await request(app).get('/')

    expect(response.statusCode).toBe(200)
  })

  test('It should respond 200 to POST at /songs', async () => {
    const response = await request(app)
      .post('/songs')
      .send({
        name: 'Supersonic',
        artist: 'Oasis',
        album: 'Definitely Maybe',
        length: 284
      })

    expect(response.statusCode).toBe(200)

    expect(response.body.name).toBe('Supersonic')
    expect(response.body.artist).toBe('Oasis')
    expect(response.body.album).toBe('Definitely Maybe')
    expect(response.body.length).toBe(284)
  })
})
