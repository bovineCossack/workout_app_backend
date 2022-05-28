const { insertUser, findUserByEmail } = require('../models/authModel');
const { successResponse, failResponse } = require('../tools/responseHelper');
const { hashPass, verifyHash, generateJwtToken } = require('../tools/verificationHelper');

async function register(req, res) {
    const { email, password } = req.body;
    const hashedPassword = hashPass(password);
    const insertResult = await insertUser(email, hashedPassword);

    return insertResult === false
        ? failResponse(res)
        : successResponse(res, 'User was created');
}
async function login(req, res) {
    const { email, password } = req.body;

    const findResults = await findUserByEmail(email);
    if (findResults === false) return failResponse(res);
    if (!findResults.length) return failResponse(res, 'Email or password entered is incorrect');

    const foundUserObj = findResults[0];

    if (!verifyHash(password, foundUserObj)) {
        return failResponse(res, 'Email or password entered is incorrect');
    }

    const token = generateJwtToken(foundUserObj);
    successResponse(res, token);
}

module.exports = {
    register,
    login,
};
