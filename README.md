# Petful (Backend)

This server is written with Node.js and Express.js

[Link to live site (client)](https://alex-aaron-petful.herokuapp.com/).

###Endpoints
https://alex-aaron-petful.herokuapp.com/api

A GET request to the /api/dog endpoint will return the first dog in the queue as a JSON object.

`{ "imageURL": "https://images.dog.ceo/breeds/pug/n02110958_15120.jpg", "imageDescription": "A sad pug who needs a hug", "name": "Doug", "sex": "Male", "age": 6, "breed": "Golden-Doodle", "story": "Owner doesn't want him" }`

A GET request made to /api/cat will return the first cat.
`{ imageURL: 'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', imageDescription: 'Orange bengal cat with black stripes lounging on concrete.', name: 'Fluffy', sex: 'Female', age: 2, breed: 'Bengal', story: 'Thrown on the street' }`

A DELETE request made to the same endpoints will delete the first dog/cat in the queue and add it to the back of the queue. The next dog/cat in the queue is returned as a JSON response.

<img src='https://images.pexels.com/photos/225406/pexels-photo-225406.jpeg?cs=srgb&dl=adorable-animal-animal-photography-225406.jpg&fm=jpg' width=500>
