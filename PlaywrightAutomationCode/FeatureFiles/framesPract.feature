Feature: Verify the Frames feature

#Background: background exe


@Method1
Scenario: To verify the Frames in the page
Given I have opened the browser for frames
Then I launched the vision site
Then I performed actions on frames
Then I will close the browser1

@Method1
Scenario: To verify the Frames in the page
Given I have opened the firefox browser
Then I launched the vision site
Then I performed actions on frames
Then I will close the browser1

@Method1
Scenario: To verify the Frames in the page
Given I have opened the webkit browser
Then I launched the vision site
Then I performed actions on frames
Then I will close the browser12

@Method1
Scenario: To verify the Frames in the page
Given I have opened the headless browser
Then I launched the vision site
Then I performed actions on frames
Then I will close the browser12

