console.log('Starting app.js');

const fs=require('fs');
const os=require('os');
const notes=require('./notes.js');
var user=os.userInfo();
const _=require('lodash');

var command=process.argv[2];
console.log('Command: ',command);
console.log(process.argv);
if(command==='add'){
    console.log('Adding new note');
}
else if(command==='list')
    {
        console.log('Listing all notes');
    }
else if(command==='read')
    {
        console.log('fetching note');
    }
else if(command ==='remove')
    {
        console.log('removing note');
    }
else
    {
        console.log('Command not recognised');
    }
/*var filteredArray=_.uniq(['Andrew',1,'Andrew',1,2,3,4]);
console.log(filteredArray);*/
//console.log(user);
/*fs.appendFile('greetings.txt',`Hello ${user.username}! You are ${notes.age}`,function(err){
    if(err)
        {
            console.log('Unable to write file');
        }
});*/
//console.log(notes.add(5,-1));