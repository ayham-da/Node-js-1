const args = process.argv.slice(2)
const str = args.slice(0);
function format(x){
const arr =[]

for(x of str[0].split(' ')){
    if(x.length > 1){
        const text = x.slice(1)
            
        arr.push(x[0].toUpperCase() + text.toLowerCase())
    
        // arr.push(x.toLowerCase())
    
    
    }
}


console.log(arr.join(' '))
}
// function sant(text){
//     let text = str.split("");
//    console.log(text)

//  }

//  sant()
module.exports = format;