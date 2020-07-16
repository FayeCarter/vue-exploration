var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './images/socks.jpg',
    inventory: 10,
    onSale: true,
    details: ["80% cotton", "20% polyester"],
    variants: [
      {
        variantID: 2234,
        variantColor: "green"
      },
      {
        variantID: 2235,
        variantColor: "blue"
      }
    ],
    sizes: ["tiny", "small", "medium", "big", "massive"],
    cart: 0
  }
})