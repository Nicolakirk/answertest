describe("Login Functionality", () => {
  beforeEach(() => {
    // Visit the login page before each test
    cy.visit("https://www.saucedemo.com");
  });

  it("should display the login form", () => {
    // Check if the login form exists
    cy.get("form").should("exist");
  });

  it("should allow users to input their credentials and login successfully", () => {
    // Enter username and password
    cy.get('input[name="user-name"]').type("standard_user");
    cy.get('input[name="password"]').type("secret_sauce");

    // Submit the form
    cy.get("form").submit();

    // Check if login is successful
    cy.url().should("include", "/inventory"); // Ensure URL has changed to products
    cy.contains("Products").should("exist"); // Check for products
  });

  it("should display an error message for invalid credentials", () => {
    // Enter invalid username and password
    cy.get('input[name="user-name"]').type("invalid_username");
    cy.get('input[name="password"]').type("invalid_password");

    // Submit the form
    cy.get("form").submit();

    // Check if error message is displayed
    cy.contains(
      " Username and password do not match any user in this service"
    ).should("exist");
  });

  it("should display appropriate validation messages for two  empty fields", () => {
    // Submit the form without entering any credentials
    cy.get("form").submit();

    // Check if validation messages are displayed
    cy.contains("Username is required").should("exist");
    // cy.contains("Password is required").should("exist");
  });
  it("should display appropriate validation message no password entered", () => {
    // Submit the form without entering a  password
    cy.get('input[name="user-name"]').type("standard_user");
    // cy.get('input[name="password"]').type("");
    // Submit the form
    cy.get("form").submit();
    // Check if validation message forno  password are displayed
    cy.contains("Password is required").should("exist");
  });
  it("should display appropriate validation message when no username entered", () => {
    // Submit the form without entering a  username
    cy.get('input[name="password"]').type("secret_sauce");
    // cy.get('input[name="password"]').type("");
    // Submit the form
    cy.get("form").submit();
    // Check if validation message forno  password are displayed
    cy.contains("Username is required").should("exist");
  });
  it("should display an error message for a locked out user", () => {
    // Enter invalid username and password
    cy.get('input[name="user-name"]').type("locked_out_user");
    cy.get('input[name="password"]').type("secret_sauce");

    // Submit the form
    cy.get("form").submit();

    // Check if error message is displayed
    cy.contains("Sorry, this user has been locked out.").should("exist");
  });

  it("should open the products for a problem_user", () => {
    // Enter username and password
    cy.get('input[name="user-name"]').type("problem_user");
    cy.get('input[name="password"]').type("secret_sauce");

    // Submit the form
    cy.get("form").submit();

    // Check if login is successful
    cy.url().should("include", "/inventory"); // Ensure URL has changed to products
    cy.contains("Products").should("exist"); // Check for products
  });


  it("should open the products for a performance_glitch_user", () => {
    // Enter username and password
    cy.get('input[name="user-name"]').type("performance_glitch_user");
    cy.get('input[name="password"]').type("secret_sauce");

    // Submit the form
    cy.get("form").submit();

    // Check if login is successful
    cy.url().should("include", "/inventory"); // Ensure URL has changed to products
    cy.contains("Products").should("exist"); // Check for products
  });

  it("should open the products for the error_user", () => {
    // Enter username and password
    cy.get('input[name="user-name"]').type("error_user");
    cy.get('input[name="password"]').type("secret_sauce");

    // Submit the form
    cy.get("form").submit();

    // Check if login is successful
    cy.url().should("include", "/inventory"); // Ensure URL has changed to products
    cy.contains("Products").should("exist"); // Check for products
  });

  it("should open the products for the visual_user", () => {
    // Enter username and password
    cy.get('input[name="user-name"]').type("visual_user");
    cy.get('input[name="password"]').type("secret_sauce");

    // Submit the form
    cy.get("form").submit();

    // Check if login is successful
    cy.url().should("include", "/inventory"); // Ensure URL has changed to products
    cy.contains("Products").should("exist"); // Check for products
  });
});
