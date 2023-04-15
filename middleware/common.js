module.exports.decode_google_jwt_token = async function (token) {
    return new Promise((resolve, reject) => {
        const { OAuth2Client } = require("google-auth-library");
        const client = new OAuth2Client(process.env.google_client_id);
        const ticket = null;
        client.verifyIdToken({
            idToken: token,
            audience: process.env.google_client_id
        }).then(token => {
            resolve(token.getPayload());
        }).catch(error => {
            reject(error);
        });
    });
}