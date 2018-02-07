console.log('Starting app.js');

const fs=require('fs');
const os=require('os');
const yargs=require('yargs');
const notes=require('./notes.js');
var user=os.userInfo();
const _=require('lodash');

const argv=yargs.argv;
//var command=process.argv[2];
//Instead of the process.argv, we can use yargs to grab the command.
var command =argv._[0];
console.log('Command: ',command);
console.log('Process ',process.argv);
console.log('Yargs ',argv);
if(command==='add'){
    //console.log('Adding new note');
    notes.addNote(argv.title,argv.body);
}
else if(command==='list')
    {
        //console.log('Listing all notes');
        notes.getAll();
    }
else if(command==='read')
    {
        notes.getNote(argv.title);
        //console.log('fetching note');
    }
else if(command ==='remove')
    {
        notes.removeNote(argv.title);
        //console.log('removing note');
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