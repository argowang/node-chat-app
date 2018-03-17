const expect = require('expect');

var {generateMessage} = require('./message.js');

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
