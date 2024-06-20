const express = require('express')
const fs = require('fs')
const app = express()
// const port = process.env.PORT || 3001

const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true}))
app.use(bodyparser.json())


//Itune search API
app.get(`/search`, (req, res) => {
    const term = req.query.term;// Get the term from the URL
    const media = req.query.media;// Get the media type from the URL
 
    // Run a fetch request to the iTunes API using the term and media type specified by the user
    fetch(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=30`)
       .then(result => result.json())// Change the result into json format
       .then (response => {
          // Send the response if the request was successful
          res.send({
             message: 'Search was successful',
             response
          })
       })
       .catch(error => {
          // If there is an error then catch the error and send the error message
          res.send({
             message: 'There seems to be an error'
          })
       })
 })

module.exports=app