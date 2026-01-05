Feature: Windows Handling using herokuapp and demoqa site

@Method1
Scenario: Clicking new window in demoqa app
Given I have opened the browser1
Then I Lauch the demoqa site
Then I will click on new window button
#Then I will get the new window title
#And I will close the browser1

@Method1
Scenario: Multiple tabs opened and getting title from herokuapp
Given I have opened the browser1
Then I will launch the herokuapp
Then I will switch between tabs and get the title
#And I will close the browser1

@Method1
Scenario: Multiple tabs opening manually and verifying on loops
Given I have opened the browser1
Then I will launch the 10 tabs
Then I will verify switch between tabs and get the title
#And I will close the browser1




    