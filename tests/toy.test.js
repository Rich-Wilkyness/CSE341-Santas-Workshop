
const mockingoose = require('mockingoose');
const db = require('../models/index');
const model = db.toys;

describe('test mongoose Toy model', () => {
    it('should return the doc with findById', () => {
      const _doc = {
        _id: '507f191e810c19729de860ea',
        name: 'Socks',
        price: 500,
      };
  
      mockingoose(model).toReturn(_doc, 'findOne');
  
      return model.findById({ _id: '507f191e810c19729de860ea' }).then(doc => {
        expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
      });
    });
  });

  // This works, but what am I even testing? That the schema has those values? This isn't hooked up to the controller at all.