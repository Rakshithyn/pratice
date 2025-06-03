const jsonfile = require('jsonfile');
const moment = require('moment');
const simplegit  = require("simple-git")
const random = require("random")

const FILE_PATH = './date.josn';

 const makeCommit = n => { 

    if(n === 0)simplegit().push();
    const x = random.int(0,54);
    const y = random.int(0,6);
    const DATE = moment().subtract(1, "y").add(1,"d").add(X, "w").add(y,"d").format();

const data = {
    date: DATE

     

}
   console.log(DATE);

             jsonfile.writeFile(FILE_PATH, data );

             simplegit().add([FILE_PATH]).commit (DATE, {'--date': DATE }, makeCommit.bind(this,--n) ); 
 };

makeCommit(100);

const DATE = moment().subtract(1, 'd').format();
//const DATE = moment().date();
// const DATE = moment().format();
// const data = {
//     date: DATE

// }

// jsonfile.writeFile(FILE_PATH, data );   

// //git commit --date"""

//  simplegit().add([FILE_PATH]).commit (DATE, {'--date': DATE  }).push(); 

 makeCommit(100);
 111111111111111
 222222222222222
 3333