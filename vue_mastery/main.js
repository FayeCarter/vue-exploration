var app = new Vue({
  el: '#app',
  data: {
    brand: "Vue Mastery",
    product: 'Socks',
    image: './images/blue-socks.jpg',
    inventory: 10,
    onSale: true,
    inStock: false,
    details: ["80% cotton", "20% polyester"],
    variants: [
      {
        variantID: 2234,
        variantColor: "green",
        variantImage: "./images/green-socks.jpg"
      },
      {
        variantID: 2235,
        variantColor: "blue",
        variantImage: "./images/blue-socks.jpg"
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
    updateProduct: function (variantImage) {
      this.image = variantImage
    }
  },
  computed: {
    title() {
      return this.brand + " " + this.product
    }
  }
})