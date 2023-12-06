// user model
module.exports = (mongoose) => {
    const User = mongoose.model(
      'User',
      mongoose.Schema(
        {
          admin: {type: Boolean, required: true},
          name: {type: String, required: true},
          jobTitle: {type: String, required: true},
          password: {type: String, required: true},
          performance: {type: String, required: false},
          married: {type: Boolean, required: false},
          age: {type: Number, required: true}
        }   
      )
    );
    return User;
};