import 'reflect-metadata'
import { createExpressServer } from 'routing-controllers'
import { RootController } from './root/root.controller'
import { RootService } from './root/root.service'
const express = require('express')

const app = createExpressServer({
    cors: true,
    controllers: [RootController]
})

app.use('/static', express.static('src/static'))

RootService.checkFolders()

app.listen(5000, '127.0.0.1')