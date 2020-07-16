var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './images/blue-socks.jpg',
    inventory: 10,
    onSale: true,
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
    updateProduct: function (variantImage) {
      this.image = variantImage
    }
  }
})