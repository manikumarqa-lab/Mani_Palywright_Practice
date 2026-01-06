Feature: API Automation Testing
    @Method
    Scenario: To verify Post Data
        Given I post the data via POST call
        """ 
        {        
        "name":"1",
        "job":"day"        
        } 
        """
        Then I will verify the status code as 201
       # Then I will verify the data in the response
       