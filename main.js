//var oneliner = require('oneliner')
 

var filesystem = require('fs')
var path = require('path')

var filepath = path.join(__dirname, 'simpleupload.html') 

console.log(filepath)

filesystem.readFile(filepath, function (err, data) {
  if (err) throw err
  console.log(data.toString())
})

return

var oneline = oneliner(`Hey !
  This is my text file
  with a lot of blabla and some code:
    function t(a, b) {
      return a + b;
    }`)
 
console.log(oneline)
// Hey ! This is my text file with a lot of blabla and some code: function t(a, b) { return a + b; }