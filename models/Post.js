const { model, Schema } = require('mongoose');

const postSchema = new Schema({
  body: {
    type: String,
    required: [true, 'Please add some text for the post']
  },
  username: String,
  createdAt: {
    type: String,
    default: new Date().toISOString()
  },
  comments: [
    {
      body: String,
      username: String,
      createdAt: {
        type: String,
        default: new Date().toISOString()
      }
    }
  ],
  likes: [
    {
      username: String,
      createdAt: {
        type: String,
        default: new Date().toISOString()
      }
    }
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

module.exports = model('Post', postSchema);