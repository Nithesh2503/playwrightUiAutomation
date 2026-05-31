import { test as baseTest, Page } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

type Pages = {
  navigate: Page;
  homepage:HomePage
};
export const customeTest = baseTest.extend<Pages>({
  navigate: async ({ page },use) => {
    await page.goto(process.env.URL!);
    await use(page);
  },
  homepage: async ({page},use)=>{
    let home=new HomePage(page);
    await use(home)
  }
});


export {expect} from '@playwright/test'