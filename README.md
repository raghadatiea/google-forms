# Course Registration Form

## Overview

The Course Registration Form is a web-based application designed to provide users with a simple and intuitive interface for registering for programming courses.

The application is inspired by Google Forms and focuses on collecting user information through a structured form. It demonstrates the implementation of HTML form elements, CSS styling, and basic client-side functionality using JavaScript.

## Features

- User information collection, including email address, full name, and phone number.
- Optional age input with a defined range of 18 to 45 years.
- Course selection through a dropdown menu.
- Required field validation using HTML5 form attributes.
- Form reset functionality to clear entered information.
- Google Forms-inspired user interface.
- Font Awesome integration for interface icons.
- Separation of HTML, CSS, and JavaScript into dedicated files.

## Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Application structure and form elements |
| CSS3 | Layout, styling, and visual presentation |
| JavaScript | Client-side functionality |
| Font Awesome 6.5.0 | Icon integration |

## Project Structure

```text
course-registration-form/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Installation and Setup

### Prerequisites

- A modern web browser.
- Visual Studio Code or any preferred code editor.
- Git (optional, for repository cloning).

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd course-registration-form
   ```

3. Open the project in Visual Studio Code:

   ```bash
   code .
   ```

4. Open `index.html` in your browser or run the project using the Live Server extension.

## Form Specifications

| Field | Input Type | Validation |
|---|---|---|
| Email | Email | Required |
| Full Name | Text | Required |
| Phone Number | Text | Required |
| Age | Number | Optional, between 18 and 45 |
| Course | Select | Required |

## Application Workflow

1. The user opens the course registration form.
2. The user enters the required personal information.
3. The user optionally provides their age.
4. The user selects a programming course.
5. The user can clear the form using the reset button.

## Development Objectives

This project was developed to demonstrate practical knowledge of:

- Semantic HTML and form construction.
- HTML5 input types and validation attributes.
- CSS-based layout and interface styling.
- JavaScript integration in a web application.
- External library integration using Font Awesome.
- Separation of concerns through organized front-end files.

## Limitations

The current implementation is a front-end demonstration.

- Form data is not persisted in a database.
- No backend API is integrated.
- User registration is not processed or stored.
- The submission functionality requires additional JavaScript or backend implementation.

## Author

Developed as a practical exercise in front-end web development.

## License

This project is intended for educational and personal development purposes.
