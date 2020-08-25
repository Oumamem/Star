const nodemailer = require('nodemailer');
fs = require('fs');
const file = fs.createReadStream('C:/Users/oumaymam/Documents/GF028512.txt');

module.exports = {

    send: (code, date) => { 
        console.log("here: ",code , date)
    
        //const file = fs.createReadStream('C:/Users/oumayma/Documents/20012020');
        var smtpTransport = nodemailer.createTransport({
            host: '172.16.0.13',
            port: 25,
            secure: false,
            auth: {
                user: 'oumaymam',
                pass: 'starstar'
             }
        });
        const message = {
            from: 'no-reply@star.test.tn', // Sender address
            to: 'test_star@outlook.com, oumamem@gmail.com, arbim66@gmail.com',         // List of recipients
            subject: 'test mailsender', // Subject line
            text: 'No reply to this message with attachement', // Plain text body
            
            attachement: [
                {
                    filename: 'filetest',
                    //filePath: 'C:/Users/oumaymam/Documents/GF028512.txt', 
                    
                    //content: fs.createReadStream('C:/Users/oumaymam/Documents/GF028512.txt')          
                }
            ],
            
        };
       /*  smtpTransport.sendMail(message, function(err, info) {
            if (err) {
            console.log("sendmail error: ", err)
            } else {
            console.log("sendmail done: ", info);
            }
        });  */
        smtpTransport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
            }
        });
    }, 
    bar() { console.log('bar') },
    baz() { foo(); bar() }
    
    
}






