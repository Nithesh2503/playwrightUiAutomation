import { test as baseTest, Page } from "@playwright/test";

type Pages = {
  navigate: Page;
};
export const customeTest = baseTest.extend<Pages>({
  navigate: async ({ page },use) => {
    await page.goto(process.env.URL!);
    await use(page);
  },
});


export {expect} from '@playwright/test'