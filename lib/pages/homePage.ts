import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly searchBox: Locator;
  readonly page: Page;
  readonly searchIcon: Locator;
  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.locator("#twotabsearchtextbox");
    this.searchIcon = page.locator("#nav-search-submit-button");
  }
}
