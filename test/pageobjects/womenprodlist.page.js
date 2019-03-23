import Page from './page'

class WomenProdListPage extends Page {

	get titleWomenEle() { return $("//li[1]/a[@title='Women']"); }
	get sortElement() { return $("#selectProductSort"); }

	open(){
    	super.open()
    	browser.pause(2000);
    }
    
    clickOnWomenTitle(){
		this.titleWomenEle.click();
	}

    waitForSortEle(){
		if(!this.sortElement.isDisplayed()){
			this.sortElement.waitForDisplayed(2000);
		}
	}

	fetchSortOptions(){
		this.sortElement.click();
    	console.log(this.sortElement.getValue()); // returns "someValue0"
    	this.sortElement.selectByIndex(4);
    	console.log(this.sortElement.getValue()); // returns "someValue4"
		//console.log("LIST OF SORT OPTIONS ARE "+getOptions);
	}
}

export default new WomenProdListPage()