import { test, expect } from '@playwright/test';

test.describe('Conduit Portal - Quality Assurance Scenarios', () => {

    test.beforeEach(async ({ page }) => {
        // Navigating to the Conduit production demo site
        await page.goto('https://demo.learnwebdriverio.com/');
    });

    test('should load the home page and display global feed', async ({ page }) => {
        // Verify the application title
        await expect(page).toHaveTitle(/Conduit/);
        
        // Check if the navigation bar is visible
        const navBar = page.locator('.navbar');
        await expect(navBar).toBeVisible();

        // Verify that the global feed is displayed by default
        const globalFeed = page.locator('text=Global Feed');
        await expect(globalFeed).toBeVisible();
    });

    test('should show error message on failed login', async ({ page }) => {
        // Click on the Sign in button in the header
        await page.getByRole('link', { name: 'Sign in' }).click();

        // Fill the login form with invalid credentials
        await page.getByPlaceholder('Email').fill('qa_test_user@example.com');
        await page.getByPlaceholder('Password').fill('InvalidPassword123');
        
        // Use a more robust locator for the submit button
        // We look for a button that contains the text "Sign in"
        const signInButton = page.locator('button:has-text("Sign in")');
        await signInButton.click();

        // Validate the error message appears
        // Some versions use .error-messages, others use specific alert classes
        const errorMessage = page.locator('.error-messages li');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).not.toBeEmpty();
    });

    test('should verify the tag cloud is visible on the sidebar', async ({ page }) => {
        // The sidebar contains popular tags, common in dashboard-like apps
        const tagSidebar = page.locator('.sidebar');
        await expect(tagSidebar).toBeVisible();
        await expect(tagSidebar).toContainText('Popular Tags');
    });
});