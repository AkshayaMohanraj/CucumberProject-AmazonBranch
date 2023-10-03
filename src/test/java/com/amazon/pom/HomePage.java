package com.amazon.pom;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {

	public WebDriver driver;
	@FindBy(id = "nav-logo")
	private WebElement amazonLogo;

//	@FindBy(xpath = "//span[contains(text(),'Hello')]")
	@FindBy(id = "nav-link-accountList-nav-line-1")
	private WebElement signIn;

	@FindBy(xpath = "(//span[@class='nav-action-inner'] )[1]")//span[@class='nav-action-inner'] )[1])
	private WebElement signInBtn;

	@FindBy(id = "twotabsearchtextbox")
	private WebElement searchFeild;

	@FindBy(xpath = "//input[@value='Go']")
	private WebElement submitBtn;

	@FindBy(className = "(//span[@class='nav-line-1 nav-progressive-content'])[2]")
	private WebElement userName_header;

	public WebElement getUserName_header() {
		return userName_header;
	}

	public HomePage(WebDriver ldriver) {
		this.driver = ldriver;
		PageFactory.initElements(driver, this);
	}

	public WebElement getAmazonLogo() {
		return amazonLogo;
	}

	public WebElement getSignIn() {
		return signIn;
	}

	public WebElement getSignInBtn() {
		return signInBtn;
	}

	public WebElement getSearchFeild() {
		return searchFeild;
	}

	public WebElement getSubmitBtn() {
		return submitBtn;
	}

}
