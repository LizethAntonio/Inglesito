import { Request, Response, NextFunction } from "express";

/**
 * Funcion que valida los roles de un usario para una determinada ruta
 * @param rolUser arreglo de roles permitidos. Si se envia ["*"] permitira el acceso a todos los roles
 */
