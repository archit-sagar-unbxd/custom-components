const products = {
	el: document.getElementById("searchResultsWrapper"),
	productType: "SEARCH",
	productAttributes: [
		"uniqueId",
		"variant_SKU",
		"imageUrl",
		"brand",
		"variant_SKU",
		"title",
		"price",
		"productUrl",
		"category2",
	],
	attributesMap: {
		brand: "brand",
		unxPrice: "price",
		unxTitle: "title",
		unxBadge: "category2",
		unxProductUrl: "productUrl",
		unxCollections: [
			"categoryPath1",
			"categoryPath2",
			"categoryPath1_fq",
			"categoryPath2_fq",
			"categoryPath",
			"category2",
		],
	},
	template: function template(
		product,
		idx,
		swatchUI,
		productViewType,
		products
	) {
		const { productItemClass } = products;
		var title = product.title;
		price = product.price;
		brand = product.brand;
		unxBadge = product.unxBadge;
		imageUrl = product.imageUrl;
		uniqueId = product.uniqueId;
		variant_SKU = product.variant_SKU;
		unxProductUrl = product.productUrl;
		var unxBadges = "";
		if (unxBadge === "New" || unxBadge === "Outlet" || unxBadge === "Sale") {
			unxBadges =
				'<span class="UNX-badges grid-product__tag grid-product__tag--custom">' +
				unxBadge +
				"</span>";
		}
		return [
			'<div class="UNX-product-item grid__item grid-product" id="' +
				uniqueId +
				'" data-id="' +
				uniqueId +
				'" unbxdattr="product" unbxdparam_sku="' +
				uniqueId +
				'" unbxdparam_prank="' +
				idx +
				'" unbxdparam_requestId="' +
				window.unbxdSearch.state.requestId +
				'" unbxdparam_variant ="' +
				variant_SKU +
				'">',
			'<div class="UNX-product-content grid-product__content">',
			'<div class="UNX-badge">' + unxBadges + "</div>",
			'<a href="' +
				unxProductUrl +
				'" class="UNX-product-link grid-product__link">',
			'<div class="UNX-product-image-mask grid-product__image-mask">',
			'<div class="UNX-images-block grid__image-ratio grid__image-ratio--square" >',
			'<img class="lazyautosizes lazyloaded" src="' +
				imageUrl +
				'" data-widths="[360, 540, 720, 900, 1080]" data-aspectratio="1.0" data-sizes="auto" alt="">',
			"</div>",
			'<div class="UNX-second-img grid-product__secondary-image small--hide">',
			'<img class="lazyautosizes lazyloaded" data-widths="[360, 540, 720, 1000]" data-aspectratio="1.0" data-sizes="auto" alt="" src="' +
				imageUrl +
				'">',
			"</div>",
			"</div>",
			'<div class="UNX-product-meta grid-product__meta">',
			'<div class="UNX-product-title grid-product__title grid-product__title--body">' +
				title +
				"</div>",
			'<div class="UNX-product-brand grid-product__vendor">' + brand + "</div>",
			'<div class="UNX-price-row grid-product__price">$' + price + "</div>",
			"</div>",
			"</a>",
			"</div>",
			"</div>",
		].join("");
	},
};

export default products;
