const lodash = require('lodash')
// maven - java
// pip/pip3 - python
// NuGet - C#
console.log('hello world')


const arrayNumbers = [1,1,2,2,3,3,4,4,5,5,6];

const uniqNumbers = lodash.uniq(arrayNumbers);
console.log(uniqNumbers);

const setNumbers = Array.from(new Set(arrayNumbers));
console.log(setNumbers);