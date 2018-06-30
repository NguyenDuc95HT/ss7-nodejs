'use strict';
import {encryptController} from '../controllers/index';
//import encryptController from "../controllers/encrypt";

module.exports = (app) => {

    app.route('/encrypt')
        .post(encryptController.createHash);

    app.route('/encrypt')
        .get(encryptController.load);
    app.route('/check')
        .post(encryptController.checkHash);
};
