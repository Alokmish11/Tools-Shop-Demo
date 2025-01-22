# Tools-Shop-Demo
# 🚀 Test Automation and Manual Testing for Practice Software Testing Website

This repository demonstrates both manual and automated test approaches for a practice software testing website. Automated tests are implemented using [Cypress](https://www.cypress.io/) with the **Page Object Model (POM)** design pattern, while manual testing procedures are documented to ensure comprehensive coverage.

---

## ✨ Features

- **🖐 Manual Testing**: Step-by-step test cases for manual validation.
- **⚡ Cypress Framework**: A powerful JavaScript-based end-to-end testing framework for automation.
- **📄 Page Object Model (POM)**: Enhances maintainability and reusability by separating page-specific actions and elements.
- **✅ Comprehensive Test Cases**: Covers essential functionalities of the practice website.
- **🔧 Easy Configuration**: Simple setup and execution of automated test cases.

---

## 🛠 Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 🚀 Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/yourusername/test-automation-cypress-pom.git
   cd test-automation-cypress-pom
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run Automated Tests**:

   - To open the Cypress Test Runner:
     ```bash
     npx cypress open
     ```
   - To run tests in headless mode:
     ```bash
     npx cypress run
     ```

---

## 📂 Project Structure

```plaintext
.
├── cypress
│   ├── e2e
│   │   ├── pages          # Page Object files
│   │   ├── tests          # Automated test files
│   │   └── utils          # Utility functions (optional)
│   ├── fixtures           # Test data
│   ├── support
│   │   ├── commands.js    # Custom Cypress commands
│   │   └── e2e.js         # Test configuration and hooks
├── manual-tests           # Manual test case documents
├── cypress.config.js      # Cypress configuration file
├── package.json           # Project dependencies
└── README.md              # Project documentation
```

---

## 🖊 Manual Testing

- **Test Case Documentation**: Manual test cases are available in the `manual-tests` directory. Each document includes test steps, expected results, and additional notes for validation.
- **Test Scenarios**: Ensure key functionalities are verified through manual exploration and validation.

---

## 🖊 Writing Automated Tests

- **Page Object Model**: Define page elements and actions in the `pages` directory.
- **Test Cases**: Write test scripts in the `tests` directory, utilizing the page objects.

### Example:

```javascript
// pages/LoginPage.js
class LoginPage {
  visit() {
    cy.visit('/login');
  }

  enterUsername(username) {
    cy.get('#username').type(username);
  }

  enterPassword(password) {
    cy.get('#password').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default new LoginPage();
```

```javascript
// tests/login.spec.js
import LoginPage from '../pages/LoginPage';

describe('Login Test Suite', () => {
  it('should login successfully with valid credentials', () => {
    LoginPage.visit();
    LoginPage.enterUsername('testuser');
    LoginPage.enterPassword('password123');
    LoginPage.submit();

    cy.url().should('include', '/dashboard');
  });
});
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests to enhance the framework or add manual test cases.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgments

- [Cypress Documentation](https://docs.cypress.io/)
- Inspiration from various online resources and testing communities.

---

### 🎉 Happy Testing! 🚀


