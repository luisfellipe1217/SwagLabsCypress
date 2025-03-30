# Cypress Automation - Saucedemo  

This project uses Cypress for test automation on the [SauceDemo](https://www.saucedemo.com/) website, including login validation and purchase flows. Reporting is generated using Allure Reports, and test execution is integrated with GitHub Actions, with reports saved as artifacts in the pipeline.  

## 📌 Technologies Used  
- [Cypress](https://www.cypress.io/)  
- [Allure Reports](https://docs.qameta.io/allure/)  
- [GitHub Actions](https://github.com/features/actions)  

## 📂 Project Structure  
```
├── cypress/  
│   ├── e2e/  
│   │   ├── login/  
|   |   |  ├── login.cy.js    
│   │   ├── shopping/  
│   │   |  ├── shopping.cy.js  
│   ├── support/  
│   ├── fixtures/   
├── .github/  
│   ├── workflows/  
│   │   ├── swagLabsValidation.yml  
├── cypress.config.js  
├── package.json  
├── README.md  
```  

## 🚀 Setup and Execution  
### 1️⃣ Prerequisites  
- Node.js installed (version 14 or higher)  
- Allure Commandline  
- Install project dependencies:  
  ```sh  
  npm install  
  npm install -g allure-commandline  
  ```  

### 2️⃣ Running Tests Locally  
- To run tests in interactive mode:  
  ```sh  
  npx cypress open  
  ```  
- To run tests in headless mode and generate reports:  
  ```sh  
  npx cypress run  
  ```  

### 3️⃣ Generating and Viewing Allure Reports  
- After test execution, generate the report:  
  ```sh  
  allure generate allure-results --clean -o allure-report  
  ```  
- To open the report in the browser:  
  ```sh  
  allure open  
  ```  

## 🔄 GitHub Actions Integration  
The project is configured to run automatically via GitHub Actions when pushing to the repository. The pipeline workflow is defined in `.github/workflows/swagLabsValidation.yml `.  

### 🛠 Pipeline Configuration  
1. Installs project dependencies.  
2. Runs Cypress tests in headless mode.  
3. Generates Allure reports.  
4. Saves reports as artifacts in GitHub Actions.  

## 📌 Contact  
If you have any questions or suggestions, feel free to open an issue in the repository!  

---  
📢 **Keep your environment updated to ensure the best experience with Cypress and Allure Reports!** 🚀
