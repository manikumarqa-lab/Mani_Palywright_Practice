Feature: Reading data from jsondata

    @Method1
    Scenario: Reading data from Feature File
        Given I have opened the ch browser
        Then I will refer data from featurefile "<Name>","<Email>","<Phone>","<Address>","<Country>"

        Examples:
            | Name    | Email           | Phone      | Address | Country |
            | hello   | 123@gmail.com   | 9848022338 | KKD     | India   |
            | hello1  | 3123@gmail.com  | 85858546   | KKD1    | India   |
            | hello42 | 11123@gmail.com | 12345679   | RJY     | India   |



    @Method1
    Scenario: Reading data from json file
        Given I have opened the ch browser
        Then I launch the app and test the data from json


