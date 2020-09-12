const args = process.argv.slice(2)
const str = args.slice(0);

const format = require('./formatting.js')
const help = require('./help');
const textHelp = args.toString()


// texts(textHelp)

var helpMe = textHelp.search('--help')
if(helpMe > -1){
    return help();
}
else{
    return format(textHelp)
}