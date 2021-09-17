package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Homepage {
	
	public WebDriver ldriver;
	
	public Homepage(WebDriver rdriver){
		
		ldriver=rdriver;
		PageFactory.initElements(rdriver, this);
	}
	
	@FindBy(xpath="//*[@id='__next']/div/header/ul[1]/li[1]/a")
	@CacheLookup
	WebElement linktxt;
	
	@FindBy(xpath="//*[@id='content-area']/div/spend-save-plans/div/div/div[1]")
	@CacheLookup
	WebElement aspirationcard;
	
	@FindBy(xpath="//*[@id='content-area']/div/spend-save-plans/div/div/div[2]")
	@CacheLookup
	WebElement aspirationpluscard;
	
	@FindBy(xpath="//*[@id='content-area']/div/spend-save-plans/div/div/div[1]/div[2]/button")
	@CacheLookup
	WebElement GetAspirationbtn;
	
	@FindBy(xpath="//*[@id='content-area']/div/spend-save-plans/div/div/div[2]/div[2]/button")
	@CacheLookup
	WebElement GetAspirationplusbtn;
	
	@FindBy(xpath="/html/body/div[1]/div/div/div/button")
	@CacheLookup
	WebElement closeModel1;
	
	@FindBy(xpath="/html/body/div[1]/div/div/div/div[2]/div[1]/h3")
	@CacheLookup
	WebElement btn1;
	
	@FindBy(xpath="/html/body/div[1]/div/div/div/div[2]/div[1]/p")
	@CacheLookup
	WebElement btn1act;
	
	@FindBy(xpath="/html/body/div[1]/div/div/div/div[2]/div[2]/h3")
	@CacheLookup
	WebElement btn2;
	
	@FindBy(xpath="/html/body/div[1]/div/div/div/div[2]/div[2]/p")
	@CacheLookup
	WebElement btn2act;
	
	@FindBy(xpath="//h3[contains(text(),'Get Started with Aspiration')]")
	@CacheLookup
	WebElement model1text;
	
	@FindBy(xpath="//p[contains(text(),'Choose your Aspiration Plus plan')]")
	@CacheLookup
	WebElement model2text;
	
	
	
	
   public void clicklink(){
		linktxt.click();
	}
	
	public boolean card1(){
		aspirationcard.isDisplayed();
		return true;
	}
	
	public boolean card2(){
		aspirationpluscard.isDisplayed();
		return true;
	}
	
	public void clickgetaspiration(){
		GetAspirationbtn.click();
	}
	
	public void clickgetaspirationplus(){
		GetAspirationplusbtn.click();
	}
	
	public void closemodel(){
		closeModel1.click();
	}
	
	
	public boolean yearlyradiobutton(){
		btn1.isDisplayed();
		return true;
	}
	
	
	public String btn1text(){
		return btn1act.getText();
	}
	
	
	public boolean monthlyradiobutton(){
		btn2.isDisplayed();
		return true;
	}
	
	public String btn2text(){
		return btn2act.getText();
	}
	
	public String model1display(){
		return model1text.getText();
	}
	
	public String model2display(){
		return model2text.getText();
	}
	
}



