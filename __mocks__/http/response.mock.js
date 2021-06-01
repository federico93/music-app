class ResponseMock {
  constructor () {
    this.status = jest.fn().mockReturnValue(this)
    this.json = jest.fn().mockReturnValue(this)
  }
}

module.exports = ResponseMock
