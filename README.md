# Contact Form (API)

This is a simple contact form application built with HTML, JavaScript, and Node.js. The application allows users to submit their name, email, and message, which are then sent via email using Nodemailer.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Modules](#modules)
- [Usage](#usage)
- [License](#license)

## Features

- Simple contact form with validation.
- Sends emails using Nodemailer.
- Uses Express for the backend server.
- CORS support for cross-origin requests.

## Technologies Used

- HTML
- JavaScript
- Node.js
- Express
- Nodemailer
- CORS
- dotenv

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AmirAliAbbasi/ContactMe-Api.git
   cd ContactMe-Api
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then, run:
   ```bash
   npm init -y
   npm install
   ```

3. **Create a `.env` file**:
   Create a `.env` file in the root directory and add the following:
   ```plaintext
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-email-password
   ```

4. **Run the server**:
   ```bash
   node server.js
   ```
   The server will start on `http://localhost:3000`.

5. **Open `index.html` in a web browser** to test the form.

## Modules

### 1. Express
- **Description**: A web framework for Node.js that simplifies the server setup.
- **Usage**: Used to handle HTTP requests and responses.

### 2. Nodemailer
- **Description**: A module for Node.js applications to send emails.
- **Usage**: Configured to send emails through an SMTP server.

### 3. Body-parser
- **Description**: Middleware to parse incoming request bodies.
- **Usage**: Used to parse JSON and URL-encoded data.

### 4. CORS
- **Description**: A package to enable Cross-Origin Resource Sharing.
- **Usage**: Allows your API to be called from a different domain.

### 5. dotenv
- **Description**: A zero-dependency module that loads environment variables from a `.env` file.
- **Usage**: Used to manage sensitive information like email credentials.

### 6. Debug
- **Description**: A small debugging utility for Node.js.
- **Usage**: Helps with logging messages in different parts of the application.

## Usage

1. Fill out the form with your name, email, and message.
2. Click the "Submit" button.
3. If successful, you will see an alert saying "Your message has been sent successfully!".
4. Check the recipient's email inbox or (spam folder) for the message.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
