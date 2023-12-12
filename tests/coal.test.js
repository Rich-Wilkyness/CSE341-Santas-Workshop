const mockingoose = require('mockingoose');
const db = require('../models/index');
const model = db.coal;

describe('test mongoose Coal model', () => {
    it('should return the doc with findById', () => {
      const _doc = {
        _id: '507f191e810c19729de860ea',
        coalInv: 3,
        naughtyTotal: 505,
      };
  
      mockingoose(model).toReturn(_doc, 'findOne');
  
      return model.findById({ _id: '507f191e810c19729de860ea' }).then(doc => {
        const formatted_doc = JSON.parse(JSON.stringify(doc));
        expect(formatted_doc).toMatchObject(_doc);
      });
    });
  });