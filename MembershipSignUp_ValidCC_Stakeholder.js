// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Valid CC (Stakeholder)', function() {
  this.timeout(50000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Valid CC (Stakeholder)', async function() {
    await driver.get("https://dev-cesphn.cs115.force.com/apex/MembershipSignUp")
    {
      const dropdown = await driver.findElement(By.id("type"))
      await dropdown.findElement(By.css("*[value='Stakeholder']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("product"))
      await dropdown.findElement(By.css("*[label='Default Product']")).click()
    }
    await driver.findElement(By.id("membershipPostcode")).sendKeys("123355677899")
    await driver.findElement(By.id("firstName")).sendKeys("Selenium")
    await driver.findElement(By.id("lastName")).sendKeys("Test")
    {
      const dropdown = await driver.findElement(By.id("gender"))
      await dropdown.findElement(By.css("*[value='Male']")).click()
    }
    await driver.findElement(By.css(".ng-scope > .form-control")).sendKeys("Selenium")
    await driver.findElement(By.id("mobilePhone")).sendKeys("1237329204")
    await driver.findElement(By.css(".c-google-address-autocomplete > #address")).sendKeys("ggd")
    await driver.findElement(By.id("mailingStreet")).sendKeys("ggd")
    await driver.findElement(By.id("mailingCity")).sendKeys("mel")
    await driver.findElement(By.id("mailingState")).sendKeys("NT")
    await driver.findElement(By.id("mailingPostalCode")).sendKeys("123355677899")
    //await driver.findElement(By.css(".c-MembershipSignUp")).click()
    await driver.findElement(By.id("email")).sendKeys("developer+selenium@vertic.com.au")
    await driver.findElement(By.id("cardNumber")).sendKeys("4444333322221111")
    await driver.findElement(By.id("customerName")).sendKeys("Selenium")
    {
      const dropdown = await driver.findElement(By.id("Expiry Month"))
      await dropdown.findElement(By.css("*[value='06']")).click()
    }
    {
      const dropdown = await driver.findElement(By.id("Expiry Year"))
      await dropdown.findElement(By.css("*[value='2032']")).click()
    }
    await driver.findElement(By.id("CVN")).sendKeys("123")
    await driver.sleep(5000)
    await driver.findElement(By.css(".rsform-submit-button")).click()
    await driver.wait(until.elementLocated(By.css(".toast-success")), 35000)
  })
})
