const expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message.js');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    // store response
    // assert from match
    // assert text match
    // assert createdAt is a number
    var test_from = 'lyra';
    var test_text = 'lalala';
    var res = generateMessage(test_from, test_text);

    expect(res.from).toBe(test_from);
    expect(res.text).toBe(test_text);
    expect(res.createdAt).toBeA('number');
  });
});


describe('generateLocationMessage', ()=> {
  it('should generate correct location object', () => {
      var test_from = 'Admin';
      var latitude = 1;
      var longitude = 1;

      var res = generateLocationMessage(test_from, latitude, longitude);

      expect(res.from).toBe(test_from);
      expect(res.url).toBe('https://www.google.com/maps?q=1,1') ;
      expect(res.createdAt).toBeA('number');
  });
});
