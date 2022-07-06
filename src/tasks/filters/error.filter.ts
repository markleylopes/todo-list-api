import {
  Catch,
  HttpStatus,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

const prismaErrorCodes = {
  P2025: {
    statusCode: HttpStatus.NOT_FOUND,
    message: 'Não enconrado',
  },
};

const getEcceptiontionBody = (exception, defaultError) => {
  return prismaErrorCodes[exception.code] || defaultError;
};

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: { code } | unknown, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const defaultResponse = {
      statusCode: httpStatus,
      message: 'Internal server error',
    };

    const responseBody = getEcceptiontionBody(exception, defaultResponse);

    httpAdapter.reply(ctx.getResponse(), responseBody, responseBody.statusCode);
  }
}
