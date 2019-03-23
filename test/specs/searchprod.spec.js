import ShirtProdListPage from '../pageobjects/shirtprodlist.page'

describe("Search a product", () => {

	it("Search for a dress keyword", () => {
	   ShirtProdListPage.open();
	   ShirtProdListPage.enterSearchTerm();
	});

	it("verify search terms", () => {
		ShirtProdListPage.fetchSearchResult();
	});
});