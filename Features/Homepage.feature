Feature: Homepage

Scenario: Verify user can navigate from the home page to our products page
	Given User Launch Chrome browser
	When User opens the URL "https://aspiration.com/"
	And User clicks at Spend and Save link
	And User navigates to product page
	And User see two card products - Aspiration and Aspiration Plus
	
Scenario: User clicks at Get Aspiration card
	Given User is at products page
	When User clicks Get Aspiration
	Then A modal containing an input field for an email address to sign up appears
	And User close the modal
	
Scenario:	User clicks at Get Aspiration Plus card
  Given User is at products page
	When User clicks at Get Aspiration Plus 
	Then A modal with monthly and yearly plans appears
	And Verify that yearly radio option is $71.88 paid once yearly
	And Verify that monthly radio option is $7.99 paid monthly
	And close browser