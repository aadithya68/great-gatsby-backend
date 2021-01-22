const https = require('https');

exports.getMovieResults = (req, res, next) => {
  console.log(req.params);
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=f09ccb01b683433136ae9d3960f25954&query=' + req.params.movieName;
    https.get(url, (resp) => {
      let data = '';

      // A chunk of data has been received.
      resp.on('data', (chunk) => {
        data += chunk;
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        console.log(JSON.parse(data));
        res.status(200).json({
          posts: data
        });
      });
    });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in db
  res.status(201).json({
    message: 'Post created successfully!',
    post: { id: new Date().toISOString(), title: title, content: content }
  });
};
