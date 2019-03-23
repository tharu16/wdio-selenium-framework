import ShirtProdListPage from '../pageobjects/shirtprodlist.page'
import WomenProdListPage from '../pageobjects/womenprodlist.page'

describe("Verify product sorting", () => {

	it("Navigate to Womens page", () => {
		ShirtProdListPage.open();
		ShirtProdListPage.waitForLandingPageload();
		WomenProdListPage.clickOnWomenTitle();
	});

	it("Check if sort option is visible", () => {
		WomenProdListPage.waitForSortEle();
		WomenProdListPage.fetchSortOptions();
	});
});