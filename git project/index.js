const jsonfile = require('jsonfile');
const moment = require('moment');
const simplegit  = require

const FILE_PATH = './date.josn';


const DATE = moment().subtract(1, 'd').format();

const data = {
    date: DATE

}

jsonfile.writeFile(FILE_PATH, data );   

//git commit --date"""

simplegit().add([FILE_PATH]).commit (DATE, {'--date': DATE  }).push(); 