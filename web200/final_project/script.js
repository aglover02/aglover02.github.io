class Customer {
    constructor(name, address, phone) {
      this.name = name;
      this.address = address;
      this.phone = phone;
    }
  }
  
  class Pizza {
    constructor(size, toppings) {
      this.size = size;
      this.toppings = toppings;
    }
  }
  
  class Order {
    constructor(customer) {
      this.customer = customer;
      this.pizzas = [];
      this.comments = "";
    }
  
    addPizza(pizza) {
      this.pizzas.push(pizza);
    }
  
    calculateTotal() {
      const basePrices = { small: 8, medium: 10, large: 12 };
      const toppingPrices = { small: 1, medium: 1.5, large: 2 };
      let subtotal = this.pizzas.reduce((sum, p) => {
        return sum + basePrices[p.size] + p.toppings.length * toppingPrices[p.size];
      }, 0);
      const tax = subtotal * 0.10;
      return { subtotal, tax, total: subtotal + tax };
    }
  }