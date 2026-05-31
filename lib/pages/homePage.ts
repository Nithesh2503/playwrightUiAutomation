import { Locator, Page } from "@playwright/test";
import testData from "../testData//testData.json";

export class HomePage {
  readonly searchBox: Locator;
  readonly page: Page;
  readonly searchIcon: Locator;
  readonly products: Locator;
  readonly ApplyfilterBtn: Locator;
  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator("#twotabsearchtextbox");
    this.searchIcon = page.locator("#nav-search-submit-button");
    this.products = page
      .locator('div[class="a-section" ] [data-cy="title-recipe"]')
      .filter({ hasText: testData.products });
    this.ApplyfilterBtn = page.locator(
      `[aria-label*="Apply the filter ${testData.products} to"]`,
    );
  }

  searchProduct = async (): Promise<void> => {
    await this.searchBox.fill(testData.products);
    await this.searchIcon.click();
    await this.products.nth(1).waitFor({state:'visible'})
    await this.ApplyfilterBtn.click();
  };
}
