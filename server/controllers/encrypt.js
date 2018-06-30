'use strict';
import {encryptHelper} from '../helpers/index'
let encryptArr = [];
export default class encryptController {
    createHash = async (req, res) => {
        try {
            const data = await encryptHelper.executeEncrypt(req.body.text);
            encryptArr.push(data.hash);
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json(e);
        }
    };
    checkHash = async (req, res) => {
        let isExistText = false;
        if (encryptArr.length > 0) {
            for (let i = 0; i < encryptArr.length; i++) {
                try {
                    isExistText = await encryptHelper.isExistText(req.body.text, encryptArr[i]);
                    if (isExistText) {
                        break;
                    }
                } catch (e) {
                }
            }
            if (isExistText) {
                res.status(200).json({
                    success: 'OK'
                });
            } else {
                res.status(400).json({
                    error: 'not OK'
                });
            }
        } else {
            res.status(400).json(e);
        }
    };
    load = (req, res) => {
        console.log('on get');
    };
}
