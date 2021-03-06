// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Expired CC', function() {
  this.timeout(100000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Expired CC', async function() {
    await driver.get("https://dev-cesphn.cs115.force.com/apex/membershiprenewal")
    await driver.sleep(4000)
    await driver.findElement(By.id("memberNumber")).sendKeys("201097")
    await driver.findElement(By.id("memberEmail")).sendKeys("developer+selenium@vertic.com.au")
    await driver.wait(until.elementLocated(By.id("cardNumber")), 35000)
    await driver.findElement(By.id("cardNumber")).sendKeys("4444 3333 2222 1111")
    await driver.findElement(By.id("customerName")).sendKeys("selenium")
    {
      const dropdown = await driver.findElement(By.id("Expiry Month"))
      await dropdown.findElement(By.css("*[value='01']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("Expiry Year"))
      await dropdown.findElement(By.css("*[value='2019']")).click()
    }
    await driver.findElement(By.id("CVN")).sendKeys("123")
    await driver.sleep(4000)
    await driver.findElement(By.css(".rsform-submit-button")).click()
    await driver.wait(until.elementLocated(By.css(".toast-error")), 60000)
  })
})
