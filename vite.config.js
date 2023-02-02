import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
<<<<<<< HEAD
        product: resolve(__dirname, "src/product_pages/index.html"
        ),
        
=======
        product: resolve(__dirname, "src/product_pages/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
>>>>>>> dd07c7fe39dd11682059a2f9f4590edd475d9e0f
      },
    },
  },
});
