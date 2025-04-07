const lodash = require('lodash')
// maven - java
// pip/pip3 - python
// NuGet - C#
// dotnet Program.cs
console.log(`hello ${process.env.NODE_ENV} ${process.env.GROUP_NAME} `)


// access Enviroment varaibles 
// process.env.{name of variables}


const arrayNumbers = [1,1,2,2,3,3,4,4,5,5,6];

const uniqNumbers = lodash.uniq(arrayNumbers);
console.log(uniqNumbers);

const setNumbers = Array.from(new Set(arrayNumbers));
console.log(setNumbers);

// while(true){
//     console.log(1)
// }