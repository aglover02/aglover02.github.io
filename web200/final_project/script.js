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

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("orderForm");
    const pizzaList = document.getElementById("pizzaList");
    const summary = document.getElementById("orderSummary");
    let order;
  
    form.addEventListener("submit", e => {
      e.preventDefault();
      try {
        const cust = new Customer(
          document.getElementById("name").value,
          document.getElementById("address").value,
          document.getElementById("phone").value
        );
        order = new Order(cust);
        order.comments = document.getElementById("comments").value;
  
        const pizzaDivs = document.querySelectorAll(".pizza-item");
        if (pizzaDivs.length === 0) throw new Error("Please add at least one pizza.");
        pizzaDivs.forEach(div => {
          const size = div.dataset.size;
          const toppings = JSON.parse(div.dataset.toppings);
          order.addPizza(new Pizza(size, toppings));
        });
  
        updateSummary();
  
        // AJAX & JSON submit
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
          })
          .then(res => res.json())
          .then(data => {
            alert("Order received! ID: " + data.id);
            form.reset();
            pizzaList.innerHTML = "";
            summary.innerHTML = "";
          })
          .catch(err => alert("Submission error: " + err));
    
        } catch (err) {
          alert(err.message);
        }
      });
    
      document.getElementById("addPizza").addEventListener("click", () => {
        const size = document.getElementById("size").value;
        const toppings = Array.from(document.querySelectorAll("#toppings input:checked")).map(i => i.value);
        const div = document.createElement("div");
        div.className = "pizza-item";
        div.dataset.size = size;
        div.dataset.toppings = JSON.stringify(toppings);
        div.innerText = `${size.charAt(0).toUpperCase() + size.slice(1)} pizza with ${toppings.join(", ") || "no toppings"}`;
        pizzaList.appendChild(div);
        updateSummary();
      });
      
      function updateSummary() {
        if (!order) {
          order = new Order(new Customer("", "", ""));
          order.pizzas = Array.from(document.querySelectorAll(".pizza-item")).map(div =>
            new Pizza(div.dataset.size, JSON.parse(div.dataset.toppings))
          );
        }
        const calc = order.calculateTotal();
        summary.innerHTML = `
          <h2>Order Summary</h2>
          <p>Customer: ${order.customer.name}</p>
          <p>Pizzas: ${order.pizzas.length}</p>
          <p>Subtotal: $${calc.subtotal.toFixed(2)}</p>
          <p>Tax (10%): $${calc.tax.toFixed(2)}</p>
          <p>Total: $${calc.total.toFixed(2)}</p>
          <p>Comments: ${order.comments}</p>
        `;
      }
    });
  