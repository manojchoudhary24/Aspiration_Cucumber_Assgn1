package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pageObjects.Homepage;

public class Step {

	public WebDriver driver;
	public Homepage hp;
	
	
	@Given("^User Launch chrome browser$")
	public void user_Launch_Chrome_browser() {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+"//Drivers/chromedriver.exe");
		driver = new ChromeDriver();
		
		hp = new Homepage(driver);
	
		
	}

	@When("^User opens the URL \"([^\"]*)\"$")
	public void user_opens_the_URL(String url) throws Throwable {
		driver.get(url);
		driver.manage().window().maximize();
		
	
	}

	@When("^User clicks at Spend and Save link$")
	public void user_clicks_at_Spend_and_Save_link() throws Throwable {
		hp.clicklink();
		
	}
	
	@When("^User navigates to product page$")
	public void user_navigates_to_product_page() throws Throwable {
		String actitle=driver.getTitle();
		String exptitle="Cash Management Services - Investing & Retirement Planning | Aspiration";
		
		if(assertEquals(actitle, exptitle)){
		System.out.println("User navigates to Products Page");	
		}
	}


	@Then("^User see two card products - Aspiration and Aspiration Plus$")
	public void user_see_two_card_products_Aspiration_and_Aspiration_Plus() throws Throwable {
		
		if(hp.card1()){
			System.out.println("Aspiration Card is displayed");
			
		}
		else {
			System.out.println("Aspiration Card is Not displayed");
		}
		
		if(hp.card2()){
			System.out.println("AspirationPlus Card is displayed");
			
		}
		else {
			System.out.println("AspirationPlus Card is Not displayed");
		}
	}
	
	@Given("^User is at products page$")
	public void user_is_at_products_page() throws Throwable {
		System.out.println("User is at products page");
	}

	@When("^User clicks Get Aspiration$")
	public void user_clicks_Get_Aspiration() throws Throwable {
		hp.clickgetaspiration();
		System.out.println("User clicks at Ger Aspiration button");
		
	}

	@Then("^A modal containing an input field for an email address to sign up appears$")
	public void a_modal_containing_an_input_field_for_an_email_address_to_sign_up_appears() throws Throwable {

		String gettxt=hp.model1display();
		String exptxt="Get Started with Aspiration";
		
		if(assertEquals(gettxt,exptxt)){
			System.out.println("Aspiration Model opens");		
		} else {
			System.out.println("Aspiration Model does not open");	
		}
					
	}

	@Then("^User close the modal$")
	public void user_close_the_modal() throws Throwable {
		hp.closemodel();
	}

	@When("^User clicks at Get Aspiration Plus$")
	public void user_clicks_at_Get_Aspiration_Plus() throws Throwable {
		hp.clickgetaspirationplus();

		
	}

	@Then("^A modal with monthly and yearly plans appears$")
	public void a_modal_with_monthly_and_yearly_plans_appears() throws Throwable {
		String gettxt2=hp.model2display();
		String exptxt2="Choose your Aspiration Plus plan";
		
		if(assertEquals(gettxt2,exptxt2)){
			System.out.println("AspirationPlus Model opens");		
		} else {
			System.out.println("AspirationPlus Model does not opens");
		}
	}

	@Then("^Verify that yearly radio option is \\$(\\d+)\\.(\\d+) paid once yearly$")
	public void verify_that_yearly_radio_option_is_$_paid_once_yearly(int arg1, int arg2) throws Throwable {
		
		if(hp.yearlyradiobutton()){
			String btn1act=hp.btn1text();
			String btn1exp="$71.88 paid once yearly";
			
			if(assertEquals(btn1act,btn1exp)){
				System.out.println("Yearly radio option is $71.88 paid once yearly");
			}
			
			else {
				System.out.println("Yearly radio option is Not $71.88 paid once yearly");
			}
			
		}
		
		}
		
	

	@Then("^Verify that monthly radio option is \\$(\\d+)\\.(\\d+) paid monthly$")
	public void verify_that_monthly_radio_option_is_$_paid_monthly(int arg1, int arg2) throws Throwable {
		if(hp.monthlyradiobutton()){
			String btn2act=hp.btn2text();
			String btn2exp="$7.99 paid monthly";
			
			if(assertEquals(btn2act,btn2exp)){
				System.out.println("Monthly radio option is $7.99 paid monthly");	
			}
			
			else{
				System.out.println("Monthly radio option is Not $7.99 paid monthly");	
			}
			
		}
	
		
	}
	
	@Then("^close browser$")
	public void close_browser() throws Throwable {
		driver.close();
	} 

}
