module.exports = password => {
    if (password.length < 6) {
        return Promise.reject({
            message: 'The password is to short'
        });
    }
    return Promise.resolve('The password length is valid');
};