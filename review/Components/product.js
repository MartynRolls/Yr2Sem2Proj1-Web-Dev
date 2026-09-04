//Component codes
export const product = {

  //--------------------------------------------------
  //Data properties
  data: {},

  //--------------------------------------------------
  //Component User Interface (UI)
  renderUI() {
    //Show a different badge depending on the product's availability.
    let stockStatus = this.data.inStock
      ? '<span class="badge bg-success">In Stock</span>'
      : '<span class="badge bg-danger">Out of Stock</span>';

    //HTML view
    let ui = `
      <div class="card shadow-sm container my-2">
        <div class="card-header">
          <h4 class="mb-0">Product Details</h4>
        </div>
        <div class="card-body">
          <!-- Product Section -->
          <div class="card shadow-sm mb-5">
            <div class="row g-0">
              <!-- Product image column -->
              <div class="col-md-5">
                <img id="productImage" class="w-100 rounded-3" src=${this.data.image} alt="Product Image">
              </div>
              <!-- Product information column -->
              <div class="col-md-7">
                <div class="card-body">
                  <span class="badge bg-primary mb-2" id="productCategory">${this.data.category}</span>
                  <h2 id="productName">${this.data.name}</h2>
                  <h3 class="text-success mb-3" id="productPrice">${this.data.price}</h3>
                  <p id="productDescription">${this.data.description}</p>
                  <div class="mb-2"><strong>Status: </strong>${stockStatus}</div>
                  <div><strong>Stock Quantity: </strong><span id="stockQuantity">${this.data.stockQuantity}</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    //Return HTML view
    return ui;
  }
}
