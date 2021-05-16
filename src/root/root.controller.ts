import { Get, Res, JsonController } from 'routing-controllers'
import { Response } from 'express'
import { RootService } from './root.service'
import { Logger } from '../logSystem'
import { IRootResult } from './root.interfaces'

const version = require('../../package.json').version
const appName = require('../../package.json').name

@JsonController()
export class RootController {

    private logger: Logger = new Logger()

    constructor(
        private rootService: RootService
    ) { }

    @Get('/')
    root(@Res() response: Response): IRootResult {
        this.logger.reqLog('Request at "/".')
        return {
            name: appName,
            version
        }
    }

}