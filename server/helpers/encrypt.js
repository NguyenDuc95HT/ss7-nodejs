'use strict';
import {encryptController} from '../controllers/index';
let encryptArr = [

];

let bcrypt = require('bcrypt');
const saltRounds = 5;
let salt = bcrypt.genSaltSync(saltRounds);

export default class EncryptHelper {
    executeEncrypt = (text) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(text, salt, function (err, hash) {
                    if (err) {
                        reject(err);
                    } else {
                        encryptArr.push(hash);
                        console.log(encryptArr);
                        resolve({
                            data: hash
                        });
                    }
                });
            });
        })
    };

    checkEncrypt = (text) => {
        return new Promise((resolve, reject) => {
            try {
                for (let i = 0; i < encryptArr.length; i++) {
                    if (encryptController.isExistText(text, encryptArr[i]) === true) {
                        resolve({
                            data: 'OK'
                        });
                        break;
                    } else {
                    }
                }
                reject({
                    error: 'not OK'
                });

            }  catch (e) {
            reject(e);
        }
        });
    };

    isExistText = async (text, hash) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(text, hash, function (err, res) {
                if (res === true) {
                    resolve({
                        hasHash: true
                    });
                } else {
                    reject({
                        hasHash: false
                    });
                }
            });
        });
    };
}
