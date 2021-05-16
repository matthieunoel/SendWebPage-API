const fs = require('fs')
import { Logger } from '../logSystem'

export class RootService {

    private logger: Logger = new Logger()

    public static async checkFolders() {

        try {
            fs.mkdirSync('./log/')
        } catch (error) {
            if (error.code !== 'EEXIST') {
                throw error
            }
        }

    }

}