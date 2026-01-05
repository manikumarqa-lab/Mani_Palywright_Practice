Feature: Open TestAutomation Practice site

@Method1
Scenario: To open TestAUtomation site and fill couple of Fields
Given I opened the browser
Then I launch TestAutomation1 site
Then I fill fields in upper section
#I will close the browser
@Method1
Scenario: To open TestAutomation and fill fields in bottom section
Given I opened the browser
Then I launch TestAutomation1 site
Then I fill bottom fields in that page
#I will close the browser
@Method1
Scenario: To select country from dropdown
Given I opened the browser
Then I launch TestAutomation1 site
Then I select Country Doropdown
Then I will take screen shot
#I will close the browser