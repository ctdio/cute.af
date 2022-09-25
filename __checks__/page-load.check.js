const { chromium } = require('playwright')

async function run() {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  // If available, we set the target URL to a preview deployment
  // URL provided by the ENVIRONMENT_URL created by Vercel.
  // Otherwise, we use the Production URL.
  const targetUrl = process.env.ENVIRONMENT_URL || 'https://cute.af'

  // We visit the page. This waits for the "load" event by default.
  const response = await page.goto(targetUrl)

  // If the page doesn't return a successful response code, we fail the check
  if (response.status() > 399) {
    throw new Error(`Failed with response code ${response.status()}`)
  }

  // We snap a screenshot.
  await page.screenshot({ path: 'screenshot.jpg' })

  // We close the page and browser.
  // This is needed for collecting accurate web vitals.
  await page.close()
  await browser.close()
}

run()
