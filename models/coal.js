// coal model
module.exports = (mongoose) => {
    const Coal = mongoose.model(
      'Coal',
      mongoose.Schema(
        {
          coalInv: {type: Number, required: true},
          naughtyTotal: {type: Number, required: true}
        }   
      )
    );
    return Coal;
};