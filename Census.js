// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Census', function() {
  this.timeout(30000)
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
    await driver.get("https://eishealth--dev--c.cs115.visual.force.com/apex/Census")
    await driver.sleep(4000)
    await driver.findElement(By.id("BusinessName *")).sendKeys("Selenium")
    await driver.findElement(By.css(".c-google-address-autocomplete > #address")).sendKeys("ggd")
    await driver.findElement(By.id("Suburb*")).sendKeys("mel")
    await driver.findElement(By.id("State*")).sendKeys("NT")
    await driver.findElement(By.id("Postcode*")).sendKeys("123355677899")
    await driver.findElement(By.css(".ng-invalid > ng-transclude .row:nth-child(2)")).click()
    await driver.findElement(By.id("BusinessEmail*")).sendKeys("developer+selenium@vertic.com.au")
    await driver.findElement(By.id("Street*")).click()
    await driver.findElement(By.id("Street*")).sendKeys("ggd")
    await driver.findElement(By.id("BusinessPhone*")).sendKeys("1237329204")
    await driver.findElement(By.css(".wizard-btn")).click()
    await driver.sleep(3000)
    await driver.findElement(By.id("Disability Access*")).click()
    {
      const dropdown = await driver.findElement(By.id("DisabilityAccess*"))
      await dropdown.findElement(By.xpath("//option[. = 'Braille Signage']")).click()
    }
    await driver.findElement(By.id("PublicTransport*")).click()
    {
      const dropdown = await driver.findElement(By.id("PublicTransport*"))
      await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click()
    }
    await driver.findElement(By.id("ClinicalSoftware*")).click()
    {
      const dropdown = await driver.findElement(By.id("ClinicalSoftware*"))
      await dropdown.findElement(By.xpath("//option[. = 'Dental 4 Windows']")).click()
    }
    await driver.findElement(By.id("PharmacySoftware*")).click()
    {
      const dropdown = await driver.findElement(By.id("PharmacySoftware*"))
      await dropdown.findElement(By.xpath("//option[. = 'MyPractice']")).click()
    }
    await driver.findElement(By.id("SecureMessagingSolution*")).click()
    {
      const dropdown = await driver.findElement(By.id("SecureMessagingSolution*"))
      await dropdown.findElement(By.xpath("//option[. = 'MD Exhange']")).click()
    }
    await driver.findElement(By.id("ElectronicPrescriptionSoftware*")).click()
    {
      const dropdown = await driver.findElement(By.id("ElectronicPrescriptionSoftware*"))
      await dropdown.findElement(By.xpath("//option[. = 'eRX']")).click()
    }
    await driver.findElement(By.id("HealthProviderIdentifierOrganisation*")).click()
    await driver.findElement(By.id("HealthProviderIdentifierOrganisation*")).sendKeys("selenium1")
    await driver.sleep(3000)
    await driver.findElement(By.css(".wizard-btn-next")).click()
    await driver.findElement(By.id("CorporatePractice*")).click()
    {
      const dropdown = await driver.findElement(By.id("CorporatePractice*"))
      await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click()
    }
    await driver.findElement(By.id("PIPsClaimed*")).click()
    {
      const dropdown = await driver.findElement(By.id("PIPsClaimed*"))
      await dropdown.findElement(By.xpath("//option[. = 'Aged Care Access Initiative']")).click()
    }
    await driver.findElement(By.id("PIPsIncentiveLevel*")).click()
    {
      const dropdown = await driver.findElement(By.id("PIPsIncentiveLevel*"))
      await dropdown.findElement(By.xpath("//option[. = 'Asthma']")).click()
    }
    await driver.findElement(By.id("SIPsClaimed*")).click()
    {
      const dropdown = await driver.findElement(By.id("SIPsClaimed*"))
      await dropdown.findElement(By.xpath("//option[. = 'Cervical Screening']")).click()
    }
    await driver.findElement(By.id("RecallPatientsforHealthAssessments*")).click()
    {
      const dropdown = await driver.findElement(By.id("RecallPatientsforHealthAssessments*"))
      await dropdown.findElement(By.xpath("//option[. = 'No']")).click()
    }
    await driver.findElement(By.id("Provide Training for Nursing Students*")).click()
    {
      const dropdown = await driver.findElement(By.id("Provide Training for Nursing Students*"))
      await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click()
    }
    await driver.findElement(By.id("Provide Training for GP Registrars*")).click()
    {
      const dropdown = await driver.findElement(By.id("Provide Training for GP Registrars*"))
      await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click()
    }
    await driver.findElement(By.id("Training for Medical Students*")).click()
    {
      const dropdown = await driver.findElement(By.id("Training for Medical Students*"))
      await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click()
    }
    await driver.findElement(By.id("Recall or Reminder System*")).click()
    {
      const dropdown = await driver.findElement(By.id("Recall or Reminder System*"))
      await dropdown.findElement(By.xpath("//option[. = 'Breast Cancer Screening']")).click()
    }
    await driver.findElement(By.id("Bulk Billing Options for Customers*")).click()
    {
      const dropdown = await driver.findElement(By.id("Bulk Billing Options for Customers*"))
      await dropdown.findElement(By.xpath("//option[. = 'No']")).click()
    }
    await driver.findElement(By.id("Preferred Pathology Provider*")).click()
    {
      const dropdown = await driver.findElement(By.id("Preferred Pathology Provider*"))
      await dropdown.findElement(By.xpath("//option[. = 'Laverty']")).click()
    }
    await driver.findElement(By.id("Allied Health Services*")).click()
    {
      const dropdown = await driver.findElement(By.id("Allied Health Services*"))
      await dropdown.findElement(By.xpath("//option[. = 'Acupuncture']")).click()
    }
    await driver.findElement(By.id("Mammogram Referrals*")).click()
    {
      const dropdown = await driver.findElement(By.id("Mammogram Referrals*"))
      await dropdown.findElement(By.xpath("//option[. = 'Campsie Health Centre']")).click()
    }
    await driver.findElement(By.id("Track ATSI Status*")).click()
    {
      const dropdown = await driver.findElement(By.id("Track ATSI Status*"))
      await dropdown.findElement(By.xpath("//option[. = 'Yes']")).click()
    }
    await driver.sleep(3000)
    await driver.findElement(By.css(".wizard-btn-next")).click()
    await driver.findElement(By.id("QIP Accreditation*")).click()
    {
      const dropdown = await driver.findElement(By.id("QIP Accreditation*"))
      await dropdown.findElement(By.xpath("//option[. = 'No']")).click()
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
