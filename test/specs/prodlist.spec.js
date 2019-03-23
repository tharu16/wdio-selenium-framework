import ShirtProdListPage from '../pageobjects/shirtprodlist.page'

describe('Practice multiple selector options', () => {
	
	it('Navigate to t-shirts page', () => {
		ShirtProdListPage.open();
		ShirtProdListPage.waitForLandingPageload();
		ShirtProdListPage.clickOnShirtTitle();
	});

	it('Select the product', () => {
		ShirtProdListPage.selectAProduct();
	});

	it('Add the product to cart', () => {
		ShirtProdListPage.verifySelectedProduct();
		ShirtProdListPage.clickAddToCart();
	});

	it('Verify if product is successfully added to cart', () => {
		ShirtProdListPage.fetchCartTotal();
	});


});