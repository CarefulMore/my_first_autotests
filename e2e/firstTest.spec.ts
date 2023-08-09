import { test, expect } from "@playwright/test";

test("basic test", async ({ page }) => {
  await page.goto("https://bcs.ru/am/");
  await page.getByRole("heading", { name: "Заполните заявку для получения консультации" }).click();
  await page.getByText("Дождитесь звонкаи получите консультациюфинансового эксперта").click();
  await page.screenshot({path: 'screenshot.png'})
});
