const Validator = require('../index');

const schema = {
    username: value => Validator.string(value).required().min(3).max(30).alphanum(),
    email: value => Validator.string(value).required().email(),
    password: value => Validator.string(value).required().min(8).max(30).pattern(/^[a-zA-Z0-9]{3,30}$/, 'Password must be 3-30 alphanumeric characters.')
};

const data = {
    username: 'us',
    email: 'user@ex@ample.com',
    password: 'pa'
};

const errors = Validator.validate(schema, data);

if (Object.keys(errors).length > 0) {
    console.error('Validation errors:', errors);
} else {
    console.log('Validation successful!');
}