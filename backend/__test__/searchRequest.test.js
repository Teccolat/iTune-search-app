import supertest from 'supertest'
import app from '../app'


describe('Testing search endpoint', function() {
   test("Response header should contain JSON", async() =>{
      const term = 'tizita'; // Set the term
      const media = 'movie'; // Set the media type
      const response = await supertest(app).get("/search")
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
   })
})