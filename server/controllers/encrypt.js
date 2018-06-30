'use strict';
import {encryptHelper} from '../helpers/index'
export default class encryptController {
    createHash = async (req,res) => {
        try {
            const data = await encryptHelper.executeEncrypt(req.body.text);
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e);
        }
    };
    checkHash = async (req,res) => {
        try {
            const data = await encryptHelper.checkEncrypt(req.body.text);
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e);
        }
    };

    load = (req,res) => {
        console.log('on get');

    };

    isExistText = async (text, hash) => {
        try {
            console.log('here');
            let check = await encryptHelper.isExistText(text, hash);
            console.log(check.hasHash);
            return check.hasHash;
        } catch (e) {
            return false;
        }
    }
}