import { test, expect } from "@playwright/test";

import testData from "../lib/testData/testData.json";

test(`search ${testData.products} product`, async ({ page }) => {
  console.log(testData.products, process.env.URL);

  await page.goto(process.env.URL!);

  const searchBox = page.locator("#twotabsearchtextbox");
  await searchBox.fill(testData.products);
  const searchIcon = page.locator("#nav-search-submit-button");
  await searchIcon.click();
  await page.waitForEvent("domcontentloaded");

  const products = page
    .locator('div[class="a-section" ] [data-cy="title-recipe"]')
    .filter({ hasText: testData.products });
  console.log(await products.allInnerTexts());
  //
  //   validate all products are samsung one
  for (const text of await products.allTextContents()) {
    expect(text.toLowerCase()).toContain(testData.products.toLowerCase());
  }
  const otherPhones = page
    .locator('div[class="a-section" ] [data-cy="title-recipe"]')
    .filter({ hasNotText: testData.products });

  console.log(await otherPhones.allInnerTexts());
});




