var actSearchTerm = "dress";

export default class Page {

   get searchBox() { return $('#search_query_top'); }
   get submitSearch() { return $("//button[@name='submit_search']"); }
   get searchResultTitle() { return $('.lighter'); }
   get searchCount() { return $$('ul.product_list li div.product-container'); }
   get totItemsListed() {return $('.top-pagination-content .product-count'); }

	open(path) {
		browser.url('http://www.automationpractice.com')
	}

	enterSearchTerm(){
		console.log("This is the search keyword "+ actSearchTerm);
		this.searchBox.setValue(actSearchTerm);
		this.submitSearch.click();
	}

	fetchSearchResult(){
		const expSearchText = this.searchResultTitle.getText();
		const totItemsCount = this.totItemsListed.getText();

		expect(this.searchCount.length).to.be.equal(7);
		assert.include(expSearchText.toLowerCase(), actSearchTerm, "Result contains Dress keyword");
	}



}