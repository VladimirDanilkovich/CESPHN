// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Census', function() {
  this.timeout(60000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Census', async function() {
    await driver.get("https://dev-cesphn.cs115.force.com/apex/Census")
    await driver.sleep(4000)
    await driver.findElement(By.id("Business Name")).sendKeys("Selenium")
    await driver.findElement(By.css(".c-google-address-autocomplete > #address")).sendKeys("ggd")
    await driver.findElement(By.id("Suburb")).sendKeys("mel")
    await driver.findElement(By.id("State")).sendKeys("NT")
    await driver.findElement(By.id("Postcode")).sendKeys("123355677899")
    await driver.findElement(By.css(".ng-invalid > ng-transclude .row:nth-child(2)")).click()
    await driver.findElement(By.id("Business Email")).sendKeys("developer+selenium@vertic.com.au")
    await driver.findElement(By.id("Street")).click()
    await driver.findElement(By.id("Street")).sendKeys("ggd")
    await driver.findElement(By.id("Business Phone")).sendKeys("1237329204")
    await driver.findElement(By.css(".wizard-btn")).click()
    await driver.sleep(3000)
    await driver.findElement(By.id("Disability Access")).click()
    {
      const dropdown = await driver.findElement(By.id("Disability Access"))
      await dropdown.findElement(By.css("*[value='Braille Signage']")).click()
    }
    await driver.findElement(By.id("Public Transport")).click()
    {
      const dropdown = await driver.findElement(By.id("Public Transport"))
      await dropdown.findElement(By.css("*[value='Yes']")).click()
    }
    await driver.findElement(By.id("Clinical Software")).click()
    {
      const dropdown = await driver.findElement(By.id("Clinical Software"))
      await dropdown.findElement(By.css("*[value='Dental 4 Windows']")).click()
    }
    await driver.findElement(By.id("Pharmacy Software")).click()
    {
      const dropdown = await driver.findElement(By.id("Pharmacy Software"))
      await dropdown.findElement(By.css("*[value='MyPractice']")).click()
    }
    await driver.findElement(By.id("Secure Messaging Solution")).click()
    {
      const dropdown = await driver.findElement(By.id("Secure Messaging Solution"))
      await dropdown.findElement(By.css("*[value='MD Exhange']")).click()
    }
    await driver.findElement(By.id("Electronic Prescription Software")).click()
    {
      const dropdown = await driver.findElement(By.id("Electronic Prescription Software"))
      await dropdown.findElement(By.css("*[value='eRX']")).click()
    }
    await driver.findElement(By.id("Health Provider Identifier Organisation")).click()
    await driver.findElement(By.id("Health Provider Identifier Organisation")).sendKeys("selenium1")
    await driver.sleep(3000)
    await driver.findElement(By.css(".wizard-btn-next")).click()
    await driver.findElement(By.id("Corporate Practice")).click()
    {
      const dropdown = await driver.findElement(By.id("Corporate Practice"))
      await dropdown.findElement(By.css("*[value='Yes']")).click()
    }
    await driver.findElement(By.id("PIPs Claimed")).click()
    {
      const dropdown = await driver.findElement(By.id("PIPs Claimed"))
      await dropdown.findElement(By.css("*[value='Aged Care Access Initiative']")).click()
    }
    await driver.findElement(By.id("PIPs Incentive Level")).click()
    {
      const dropdown = await driver.findElement(By.id("PIPs Incentive Level"))
      await dropdown.findElement(By.css("*[value='Asthma']")).click()
    }
    await driver.findElement(By.id("SIPs Claimed")).click()
    {
      const dropdown = await driver.findElement(By.id("SIPs Claimed"))
      await dropdown.findElement(By.css("*[value='Cervical Screening']")).click()
    }
    await driver.findElement(By.id("Recall Patients for Health Assessments")).click()
    {
      const dropdown = await driver.findElement(By.id("Recall Patients for Health Assessments"))
      await dropdown.findElement(By.css("*[value='No']")).click()
    }
    await driver.findElement(By.id("Provide Training for Nursing Students")).click()
    {
      const dropdown = await driver.findElement(By.id("Provide Training for Nursing Students"))
      await dropdown.findElement(By.css("*[value='Yes']")).click()
    }
    await driver.findElement(By.id("Provide Training for GP Registrars")).click()
    {
      const dropdown = await driver.findElement(By.id("Provide Training for GP Registrars"))
      await dropdown.findElement(By.css("*[value='Yes']")).click()
    }
    await driver.findElement(By.id("Training for Medical Students")).click()
    {
      const dropdown = await driver.findElement(By.id("Training for Medical Students"))
      await dropdown.findElement(By.css("*[value='Yes']")).click()
    }
    await driver.findElement(By.id("Recall or Reminder System")).click()
    {
      const dropdown = await driver.findElement(By.id("Recall or Reminder System"))
      await dropdown.findElement(By.css("*[value='Breast Cancer Screening']")).click()
    }
    await driver.findElement(By.id("Bulk Billing Options for Customers")).click()
    {
      const dropdown = await driver.findElement(By.id("Bulk Billing Options for Customers"))
      await dropdown.findElement(By.css("*[value='No']")).click()
    }
    await driver.findElement(By.id("Preferred Pathology Provider")).click()
    {
      const dropdown = await driver.findElement(By.id("Preferred Pathology Provider"))
      await dropdown.findElement(By.css("*[value='Laverty']")).click()
    }
    await driver.findElement(By.id("Allied Health Services")).click()
    {
      const dropdown = await driver.findElement(By.id("Allied Health Services"))
      await dropdown.findElement(By.css("*[value='Acupuncture']")).click()
    }
    await driver.findElement(By.id("Mammogram Referrals")).click()
    {
      const dropdown = await driver.findElement(By.id("Mammogram Referrals"))
      await dropdown.findElement(By.css("*[value='Campsie Health Centre']")).click()
    }
    await driver.findElement(By.id("Track ATSI Status")).click()
    {
      const dropdown = await driver.findElement(By.id("Track ATSI Status"))
      await dropdown.findElement(By.css("*[value='Yes']")).click()
    }
    await driver.sleep(3000)
    await driver.findElement(By.css(".wizard-btn-next")).click()
    await driver.findElement(By.id("QIP Accreditation")).click()
    {
      const dropdown = await driver.findElement(By.id("QIP Accreditation"))
      await dropdown.findElement(By.css("*[value='No']")).click()
    }
    await driver.findElement(By.css(".input-group > #QIPAccreditationExpiryDate")).click()
    await driver.findElement(By.css(".input-group > #QIPAccreditationExpiryDate")).sendKeys("25/11/2025")
    await driver.findElement(By.css(".wizard-btn-submit")).click()
    await driver.sleep(5000)
    {
      const elements = await driver.findElements(By.xpath("//fieldset"))
      assert(!elements.length)
    }
  })
})
