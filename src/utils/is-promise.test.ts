import isPromise from './is-promise';

describe('isPromise', () => {
  it('should return true if a Promise is provided', () => {
    const promise = new Promise((resolve) => resolve(true));

    const payload = {
      promise,
    };

    chai.expect(isPromise(payload));
  });

  it(`should return false if something that
      is not a Promise is provided`, () => {
    const badPayload1 = { hello: 'world' };
    const badPayload2 = ['hello', 'world'];
    const badPayload3 = 'hello world';
    const badPayload4 = 'hello world';

    chai.expect(!isPromise({ promise: badPayload1 }));
    chai.expect(!isPromise({ promise: badPayload2 }));
    chai.expect(!isPromise({ promise: badPayload3 }));
    chai.expect(!isPromise({ promise: badPayload4 }));
  });
});
