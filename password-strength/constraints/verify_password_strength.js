const zxcvbn = require('zxcvbn');

module.exports = password => {
    const score = zxcvbn(password).score;
    if (score  < 2) {
        return Promise.reject({
            message: 'The password is so weak',
            score
        });
    }
    return Promise.resolve({
        message: 'The password strength is good',
        score
    });
};