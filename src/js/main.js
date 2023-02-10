import { loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
<<<<<<< HEAD
import ProductListing from "./ProductList.mjs";

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductListing("tents", dataSource, element);

console.log(listing);
listing.init()
=======
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const element = document.querySelector(".product-list");
const listing = new ProductList("Tents", dataSource, element);

<<<<<<< HEAD
listing.init();
>>>>>>> dd07c7fe39dd11682059a2f9f4590edd475d9e0f
=======
listing.init();
>>>>>>> 7088e1a35ba14f3c72a519169e8e4653cae57800
