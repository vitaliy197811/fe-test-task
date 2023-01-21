import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const User = createParamDecorator(
  (field: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request.user, 'user')
    if (!request.user) {
      return null;
    }

    if (field) {
      return request.user[field];
    }

    return request.user;
  },
);

