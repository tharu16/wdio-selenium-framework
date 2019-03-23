import Page from './page'
var actTitle;

class ShirtProdListPage extends Page {

    
	get titleEle() { return $('//li[3]/a[@title="T-shirts"]'); }
	get prodEle() { return $("//ul[contains(@class, 'product_list')]/li/div[@class='product-container']/div[@class='left-block']"); }
	get prodTitle() { return $("//h5[@itemprop='name']/a"); }
	get prodTitleDetailView() { return $("//div[contains(@class,'pb-center-column')]/h1"); } 
	get addCartBtn() { return $("//p[@id='add_to_cart']/button"); }
	get cartEle() {return $("//div[@class='shopping_cart']/a/span[contains(@class, 'ajax_cart_quantity')]"); }
	get continueShoppingBtn() { return $("//div[@class='button-container']/span/span"); }
	
	
    open(){
    	super.open()
    	browser.pause(2000);
    }

	waitForLandingPageload(){
		if(!this.titleEle.isDisplayed()){
			this.titleEle.waitForDisplayed(2000);
		}
	}

	clickOnShirtTitle(){
		this.titleEle.click();
	}

	selectAProduct(){
	
    	if(!this.prodEle.isDisplayed()){
			this.prodEle.waitForDisplayed(2000);
		}
		actTitle = this.prodTitle.getText();
		this.prodEle.click();
	}

	verifySelectedProduct(){
            const expTitle = this.prodTitleDetailView.getText();
			expect(expTitle).to.equal(actTitle);
	}

	clickAddToCart(){
		this.addCartBtn.click();
		browser.pause(2000);
		this.continueShoppingBtn.click();
	}

	fetchCartTotal(){
		const cartTotal = this.cartEle.getText();
		console.log("TOTAL NO OF CART IS "+cartTotal);
		assert(cartTotal, "1");
	}
}

export default new ShirtProdListPage()