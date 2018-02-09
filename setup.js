const { exec } = require('child_process');
const settings = require('./settings');
const readline = require('readline');
const path = require('path');

let s_copy = settings;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// hacky approach to a cli setup ¯\_(ツ)_/¯
console.log('Please enter data to set up your TMS instance.\nPress enter to skip a question and use the preset.\n');
rl.question('Enter a username: (' + settings.user.name + ') ', (input) => {
    if (input != '') {
        s_copy.user.name = input;
        console.log('Username changed to: ' + input + '\n');
    } else {
        console.log('Username: ' + settings.user.name);
    }
    var mLabPreset = settings.testDB; 
    if (settings.user.mLab != null){
        mLabPreset = settings.user.mLab;
    }
    rl.question('Enter a MongoDB socket: (' + mLabPreset + ') ', (input) => {
        if (input != '') {
            s_copy.user.mLab = input;
            console.log('MongoDB socket changed to: ' + input + '\n');
        } else {
            if (settings.user.mLab == null) {
                console.log('MongoDB socket: ' + settings.testDB + '\n');
            } else {
                console.log('MongoDB socket: ' + settings.user.mLab + '\n');
            }
        }
        require('fs').writeFileSync('./settings.json', JSON.stringify(s_copy), 'utf8');
        console.log('Your Settings were saved.');
        rl.question('How do you want to run the app?\n\n\t-e\trun electron app\n\t-b\trun app in browser\n\nYour choice: ', (input) => {
            switch (input) {
                case '-e':
                    console.log('\nRunning app in electron. Please wait.\n');
                    exec('npm run electron');
                    break;
                case '-b':
                    console.log('\nRunning app in browser.\nGo to localhost:' + settings.app.port + ' to use it.\n');
                    exec('npm run browser');
                    break;
                default:
                    console.log('\nYou selected an invalid option. Please rerun the setup process.\n');
                    break;
            }
            rl.close();
        });
    });
});
