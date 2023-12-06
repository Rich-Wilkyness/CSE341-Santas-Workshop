// toys model
module.exports = (mongoose) => {
    const Toy = mongoose.model(
      'Toy',
      mongoose.Schema(
        {
          name: {type: String, required: true},
          price: {type: Number, required: true}
        }   
      )
    );
    return Toy;
};