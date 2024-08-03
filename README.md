# valid-correct
An npm package of form validation library with built-in error handling and correction suggestions.

## Features

- Simple and intuitive API.
- Supports various validation rules (required, min, max, pattern, etc.).
- Provides detailed error messages and correction suggestions.
- Custom validation functions.

Install the package using npm:

```bash
npm install valid-correct
```

## Usage

### Importing the Library

To use **valid-correct** in your project, first import the `Validator` class:

```javascript
const Validator = require('valid-correct');
```

### Defining a Schema

To define validation rules for your data, create a schema using **valid-correct**. A schema is an object where each key represents a field to be validated, and the value is a function that applies validation rules to that field.

Here’s an example of defining a schema for a user registration form:

```javascript
const schema = {
    username: value => Validator.string(value)
        .required()
        .min(3)
        .max(30)
        .alphanum(),
    email: value => Validator.string(value)
        .required()
        .email(),
    password: value => Validator.string(value)
        .required()
        .min(8)
        .max(30)
        .pattern(/^[a-zA-Z0-9]{3,30}$/, 'Password must be 3-30 alphanumeric characters.')
};

// Data to validate
const data = {
    username: 'us',
    email: 'user@ex@ample.com',
    password: 'pa'
};

// Perform validation
const errors = Validator.validate(schema, data);

// Check for errors
if (Object.keys(errors).length > 0) {
    console.error('Validation errors:', errors);
} else {
    console.log('Validation successful!');
}
```

### Example of Validation Errors

When validation fails, **valid-correct** provides detailed error messages and correction suggestions to help users fix their input. The errors object returned by the `Validator.validate` method includes information about each validation issue.

Here’s an example showing what the validation errors might look like when the data does not meet the schema requirements:

```json
{
    "username": [
        {
            "message": "Minimum length is 3 characters.",
            "correction": "Please enter at least 3 characters. Current length is 2."
        }
    ],
    "email": [
        {
            "message": "Invalid email format.",
            "correction": "Please enter a valid email address (e.g., user@example.com)."
        }
    ],
    "password": [
        {
            "message": "Minimum length is 8 characters.",
            "correction": "Please enter at least 8 characters. Current length is 2."
        }
    ]
}
```

### Options

**valid-correct** provides several validation options to customize the validation rules according to your needs. Here’s a breakdown of the available validation methods:

- **`required()`**: Ensures that the field is not empty.
- **`min(length)`**: Sets the minimum length for the field. The field must be at least `length` characters long.
- **`max(length)`**: Sets the maximum length for the field. The field must be no longer than `length` characters.
- **`pattern(regex, message)`**: Validates the field against a regular expression. You can provide a custom error message if the value does not match the pattern.
- **`alphanum()`**: Ensures the field contains only alphanumeric characters (letters and numbers).
- **`email()`**: Validates the field as a valid email address format.
- **`custom(fn, message)`**: Allows custom validation functions. The function `fn` should return `true` if the value is valid or an error message if it is not.

#### Examples

1. **`required()`**

    Ensures that the field is not empty:

    ```javascript
    const schema = {
        username: value => Validator.string(value).required()
    };
    ```

2. **`min(length)`**

    Ensures the field is at least `length` characters long:

    ```javascript
    const schema = {
        password: value => Validator.string(value).min(8)
    };
    ```

3. **`max(length)`**

    Ensures the field does not exceed `length` characters:

    ```javascript
    const schema = {
        username: value => Validator.string(value).max(30)
    };
    ```

4. **`pattern(regex, message)`**

    Validates the field against a regex pattern:

    ```javascript
    const schema = {
        password: value => Validator.string(value).pattern(/^[a-zA-Z0-9]{8,}$/, 'Password must be at least 8 alphanumeric characters.')
    };
    ```

5. **`alphanum()`**

    Ensures the field contains only alphanumeric characters:

    ```javascript
    const schema = {
        username: value => Validator.string(value).alphanum()
    };
    ```

6. **`email()`**

    Validates the field as a valid email format:

    ```javascript
    const schema = {
        email: value => Validator.string(value).email()
    };
    ```

7. **`custom(fn, message)`**

    Allows for custom validation logic:

    ```javascript
    const schema = {
        customField: value => Validator.string(value)
            .custom(val => val !== 'invalid', 'Custom validation failed.')
    };
    ```

These options provide flexibility in defining validation rules for different scenarios and ensure that your data meets specific requirements.

## Contributing

We welcome contributions to **valid-correct**! To contribute to the project, follow these steps:

1. **Fork the Repository**

    Click the "Fork" button on the top-right corner of the [valid-correct GitHub repository](https://github.com/geek-prateek/valid-correct) to create your own copy of the repository.

2. **Clone Your Fork**

    Clone your forked repository to your local machine:

    ```bash
    $ git clone https://github.com/geek-prateek/valid-correct.git
    $ cd valid-correct
    ```

3. **Create a New Branch**

    Create a new branch for your feature or fix:

    ```bash
    $ git checkout -b my-new-feature
    ```

4. **Make Your Changes**

    Make your changes to the code or documentation. Be sure to test your changes and ensure they work as expected.

5. **Commit Your Changes**

    Add and commit your changes with a descriptive commit message:

    ```bash
    $ git add .
    $ git commit -m 'Add new feature or fix description'
    ```

6. **Push to Your Branch**

    Push your changes to your forked repository:

    ```bash
    $ git push origin my-new-feature
    ```

7. **Submit a Pull Request**

    Go to the [valid-correct GitHub repository](https://github.com/geek-prateek/valid-correct) and open a pull request. Provide a clear description of the changes you made and any relevant details.

8. **Discuss and Review**

    Engage with the maintainers and other contributors to discuss and review your pull request. Address any feedback or requested changes.

We appreciate your contributions and look forward to collaborating with you!

## Additional Information

- **Issue Tracking**: If you find a bug or have a feature request, please open an issue on the [GitHub Issues page](https://github.com/geek-prateek/valid-correct/issues).
- **Code of Conduct**: Please adhere to the [Code of Conduct](https://github.com/geek-prateek/valid-correct/blob/main/CODE_OF_CONDUCT.md) when contributing to the project.

Thank you for helping improve **valid-correct**!
