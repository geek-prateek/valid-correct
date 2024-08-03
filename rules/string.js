class StringValidator {
    constructor(value) {
        this.value = value;
        this.errors = [];
    }

    required() {
        if (!this.value || this.value.trim() === '') {
            this.errors.push({
                message: 'This field is required.',
                correction: 'Please enter a value.'
            });
        }
        return this;
    }

    min(length) {
        if (this.value.length < length) {
            this.errors.push({
                message: `Minimum length is ${length} characters.`,
                correction: `Please enter at least ${length} characters. Current length is ${this.value.length}.`
            });
        }
        return this;
    }

    max(length) {
        if (this.value.length > length) {
            this.errors.push({
                message: `Maximum length is ${length} characters.`,
                correction: `Please enter no more than ${length} characters. Current length is ${this.value.length}.`
            });
        }
        return this;
    }

    pattern(regex, message) {
        if (!regex.test(this.value)) {
            this.errors.push({
                message: message || 'Invalid format.',
                correction: 'Please follow the correct format.'
            });
        }
        return this;
    }

    alphanum() {
        const regex = /^[a-zA-Z0-9]+$/;
        if (!regex.test(this.value)) {
            this.errors.push({
                message: 'Only alphanumeric characters are allowed.',
                correction: 'Please use only letters and numbers.'
            });
        }
        return this;
    }

    email() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(this.value)) {
            this.errors.push({
                message: 'Invalid email format.',
                correction: 'Please enter a valid email address (e.g., user@example.com).'
            });
        }
        return this;
    }

    custom(fn, message) {
        const result = fn(this.value);
        if (result !== true) {
            this.errors.push({
                message: message || 'Validation failed.',
                correction: result || 'Please correct the value.'
            });
        }
        return this;
    }

    getErrors() {
        return this.errors;
    }

    isValid() {
        return this.errors.length === 0;
    }
}

module.exports = StringValidator;
