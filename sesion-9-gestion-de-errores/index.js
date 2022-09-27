const logger = require('./logger');

logger.info("Hola esto es un mensaje informativo");
logger.warn("Esto es un mensaje de advertencia");
logger.error("Este es un mensaje de error");
logger.debug("Esto es un mensaje de debug");
//esto es lo que se ejecuta y guardamos en otro archivo
// la libreria "npm winston" (googlear) nos permite gestionar los logs de la manera mas profesional posible