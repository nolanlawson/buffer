if (process.env.OBJECT_IMPL) global.TYPED_ARRAY_SUPPORT = false
var B = require('../').Buffer
var test = require('tape')

test('indexOf 1', function (t) {
  var b = new B('abcdef', 'utf-8')
  t.equal(0, b.indexOf('a'))
  t.end()
})
