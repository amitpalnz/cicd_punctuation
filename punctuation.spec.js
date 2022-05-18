const punctuation = require("./punctuation.js");

describe("punctuation filter",()=>{

  it("returns 'hello world' when 'hello%world'", ()=>{
  const expected = "hello world";
  const actual =punctuation("hello%world");
  expect(actual).toStrictEqual(expected);
  })

  it("returns ' helloworld' when '!helloworld'", ()=>{
    const expected = ' helloworld';
  const actual =punctuation('!helloworld');
  expect(actual).toStrictEqual(expected);
  })

  it("returns ' hello world ' when ';hello?world!'", ()=>{
    const expected = ' hello world ';
  const actual =punctuation(';hello?world!');
  expect(actual).toStrictEqual(expected);
  })

  it("returns 'hello world' when 'hello;world'", ()=>{
  const expected = 'hello world';
  const actual =punctuation('hello;world');
  expect(actual).toStrictEqual(expected);
  })

  it("returns 'helloworld ' when 'helloworld?'", ()=>{
    const expected = 'helloworld ';
  const actual =punctuation('helloworld?');
  expect(actual).toStrictEqual(expected);
  })

  it("returns 'he lloworld ' when 'he?lloworld?'", ()=>{
    const expected = 'he lloworld ';
  const actual =punctuation('he?lloworld?');
  expect(actual).toStrictEqual(expected);
  })

})