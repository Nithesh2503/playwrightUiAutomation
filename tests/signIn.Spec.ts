import test from "@playwright/test";
import testData from "../lib/testData/testData.json";

test.use({ storageState: "auth.json" });
test(`SignIn Amazon`, async ({ page }) => {
  console.log(testData.products, process.env.URL);
  await page.goto(process.env.URL!);

  await page.waitForEvent("domcontentloaded");

  console.log(await page.title(), " tilte");
  const signInBtn = page.locator('[id="nav-link-accountList"] a');
  await signInBtn.click();
  const userNameInput = page.locator("#ap_email_login");
  console.log();
  userNameInput.fill(process.env.user!);
  console.log(process.env.user);
  const continueBtn = page.locator("#continue");
  await continueBtn.click();
  const pwdInput = page.locator("#ap_password");
  await pwdInput.fill(process.env.pwd!);
  const submitSignInBtn = page.locator("#signInSubmit");
  await submitSignInBtn.click();
  // await page.context().storageState({path:'auth.json'})
  await page.pause();
});
