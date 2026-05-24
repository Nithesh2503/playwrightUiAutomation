import { test, expect } from "@playwright/test";
import testData from "../lib/testData/testData.json";

test.use({ storageState: "auth.json" });
test("Add to WishList", async ({ page }) => {
  await page.goto("https://www.amazon.in/");

  const todayDeals = page.getByRole("link", { name: testData.productType });

  await todayDeals.click();
  await page.waitForEvent("domcontentloaded");

  const samsungProduct = page.getByRole("link", {
    name: testData.sku,
    exact: true,
  });
  await samsungProduct.click();

  const wishListMainButton = page.locator("#wishListMainButton");
  await wishListMainButton.click();
  const viewWishListBtm = page.getByRole("link", { name: "View Your List" });
  await viewWishListBtm.click();
  
  await expect(page.locator('#g-items li[data-id]')).toHaveCount(1)

  
});
