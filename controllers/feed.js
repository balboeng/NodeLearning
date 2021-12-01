exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [{ title: 'first post', content: 'werever' }]
    })
};

exports.createPost = (req, res, next) => {
    const { body: { title, content } } = req;
    res.status(201).json({
        message: 'Post created succesfully!',
        post: {
            id: new Date().toISOString(), title, content
        }
    })
};