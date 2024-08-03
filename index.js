const StringValidator = require('./rules/string');

class Validator {
    static string(value) {
        return new StringValidator(value);
    }

    static validate(schema, data) {
        const errors = {};
        for (const field in schema) {
            const validator = schema[field](data[field]);
            if (!validator.isValid()) {
                errors[field] = validator.getErrors();
            }
        }
        return errors;
    }
}

module.exports = Validator;