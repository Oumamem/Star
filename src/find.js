const express = require('express');

const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const app = express();
const fs = require('fs');
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
module.exports = {
     
   
     getDirectories:(path)=>  {

               /*fs.readdir('C:/Users/oumaymam/Documents/'+path, function (err, items) {
                    console.log(items)  
                    callback(null, items)            
                    for (var i=0; i<items.length; i++) {
                    let codeExtract= items[i].substr(2,6);
                    console.log("code:"+codeExtract);
                    }
                    return(items)
                }); */
                
                   return (fs.readdirSync('C:/Users/oumaymam/Documents/'+path));
                
            }
            }

        