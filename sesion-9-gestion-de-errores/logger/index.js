//creamos y requerimos winston en una carpeta logger, para tener todo mas organizado

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),// esto hace que se muetre por consola lo que hace este objeto
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),// solo muestra info, warn y error ya que estan por niveles abajo de el, osea warn y error son niveles menores a info por eso los muestra en combined.log
  ],
});

// la libreria "npm winston" (googlear) nos permite gestionar los logs de la manera mas profesional posible

module.exports = logger;