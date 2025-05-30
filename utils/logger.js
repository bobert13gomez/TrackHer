const winston=require("winston")

exports.logger=winston.createLogger({
    format:winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports:[
        new winston.transports.Console()
    ]
})
