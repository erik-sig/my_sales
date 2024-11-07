import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';

export default class ErrorHandleMiddleware {
  public static handleError(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    if (error instanceof AppError) {
      return res.status(error.statusCode).json({
        type: 'error',
        message: error.message,
      });
    }

    return res.status(500).json({
      type: 'error',
      message: 'Internal server error',
    });
  }
}
