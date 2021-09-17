Feature: Homepage

Scenario: Verify user can view the products and prices by navigating from the home page

	Given User Launch Chrome browser
	When User opens the URL "https://aspiration.com/"
	And User clicks at Spend and Save link
	And User navigates to product page
	Then User see two card products - Aspiration and Aspiration Plus
	And User clicks Get Aspiration
	Then A modal containing an input field for an email address to sign up appears
	And User close the modal
	Then User clicks at Get Aspiration Plus 
	And A modal with monthly and yearly plans appears
	Then Verify that yearly radio option is $71.88 paid once yearly
	And Verify that monthly radio option is $7.99 paid monthly
	And close browser