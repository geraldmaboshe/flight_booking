//protecting route

exports.protect = async (ctx, next) => {
  let token;
  //check if there is a token
  if (
    ctx.get('authorization') &&
    ctx.get('authorization').startsWith('Bearer')
  ) {
    token = ctx.get('authorization').split(' ')[1];
  }
  //return aunauthorized if no token is found
  if (!token) {
    return (ctx.status = 401);
  }
  return next(); //go to next middle ware
};
