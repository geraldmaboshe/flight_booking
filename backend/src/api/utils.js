const { AuthenticationError }="apollo-server-core";
const parseAuthorizationHeader=(req) => {
    const header=req.headers.authorization;

    if (typeof header==='undefined'||header==='null') {
        return null;
    }

    const [, scheme, token]=(/(\w+) ([\w.-]+)/g).exec(header);

    return token;
};
module.exports=parseAuthorizationHeader;


const verifyToken=token => new Promise((resolve, reject) => {
    if (token!=='authorized') {
        const error=new Error('UNAUTHORIZED');
        error.code=401;
        reject(error);
    }
    resolve();
});
module.exports=verifyToken;