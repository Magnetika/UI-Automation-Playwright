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
        // Click on the Sign in button
        await page.locator('text=Sign in').click();

        // Fill the login form with invalid credentials
        await page.locator('input[type="email"]').fill('qa_test_user@example.com');
        await page.locator('input[type="password"]').fill('InvalidPassword123');
        
        // Submit the form
        await page.locator('button[type="submit"]').click();

        // Validate the error message appears
        const errorMessage = page.locator('.error-messages');
        await expect(errorMessage).toContainText('Invalid email or password');
    });

    test('should verify the tag cloud is visible on the sidebar', async ({ page }) => {
        // The sidebar contains popular tags, common in dashboard-like apps
        const tagSidebar = page.locator('.sidebar');
        await expect(tagSidebar).toBeVisible();
        await expect(tagSidebar).toContainText('Popular Tags');
    });
});