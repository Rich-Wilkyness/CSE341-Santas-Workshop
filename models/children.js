// children model
module.exports = (mongoose) => {
    const Children = mongoose.model(
      'Children',
      mongoose.Schema(
        {
          name: {type: String, required: true},
          naughty: {type: Boolean, required: true},
          gift: {type: String, required: false}
        }   
      )
    );
    return Children;
};