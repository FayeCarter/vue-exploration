Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image" alt="socks">
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="!inStock">Out of Stock</p>
        <p v-show="onSale">Sale</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div v-for="(variant, index) in variants" 
          :key="variant.variantID">
          <div class="color-box"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)" 
          ></div>
          <p>{{ variant.variantColor }}</p>
        </div>
        <div>
          <p>Available sizes</p>
          <ul>
            <li v-for="size in sizes">{{ size }}</li>
          </ul>
        </div>
        <div>Shipping {{ shipping }}</div>

        <button v-on:click="addToCart" 
        :disabled="!inStock" 
        :class="{ disabledButton: !inStock}">Add to Cart</button>
        <button v-on:click="removeFromCart">Remove Item</button>
      </div>
    </div>
  `,  
  data() {
    return {
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
    }
  },  
  methods: {
    addToCart: function () {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].variantID)
    },
    removeFromCart: function () {
      this.$emit("remove-from-cart", this.variants[this.selectedVariant].variantID)
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
    },
    shipping() {
      if (this.premium) {
        return "Free"
      } else {
        return 2.99
      }
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(item) {
      this.cart.push(item)
    },
    removeItem(item) {
      for(var i = this.cart.length - 1; i >= 0; i--) {
        if (this.cart[i] === item) {
          this.cart.splice(i, 1);
        }
      }
    }
  }
})