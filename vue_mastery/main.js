var app = new Vue({
  el: '#app',
  data: {
    brand: "Vue Mastery",
    product: 'Socks',
    selectedVariant: 0,
    details: ["80% cotton", "20% polyester"],
    variants: [
      {
        variantID: 2234,
        variantColor: "green",
        variantImage: "./images/green-socks.jpg",
        variantQuantity: 10,
        variantSale: true
      },
      {
        variantID: 2235,
        variantColor: "blue",
        variantImage: "./images/blue-socks.jpg",
        variantQuantity: 0,
        variantSale: false
      }
    ],
    sizes: ["tiny", "small", "medium", "big", "massive"],
    cart: 0
  },
  methods: {
    addToCart: function () {
      this.cart += 1
    },
    removeFromCart: function () {
      if ( this.cart > 0 ) {
        this.cart -= 1
      }
    },
    updateProduct: function (index) {
      this.selectedVariant = index
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSale() {
      return this.variants[this.selectedVariant].variantSale
    }
  }
})