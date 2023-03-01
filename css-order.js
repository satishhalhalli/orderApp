let Add = document.getElementById("add");
let Form = document.getElementById("myform");


Form.addEventListener("submit", AddItem);
async function AddItem(e) {
  try {
    e.preventDefault();
    let Price = document.getElementById("price").value;
    let Table = document.getElementById("table").value;
    let Dish = document.getElementById("dish").value;
    let payload = { Price: Price, Dish: Dish, Table: Table };
    let Stringpayload = JSON.stringify(payload);
   let x = await axios
      .post(
        "https://crudcrud.com/api/3441f95f27f44b6a908d2e7fb5fdf78a/Order",
        payload
      )
      alert("Order Added Successfully");
      location.reload()
      

  }
 
    catch(err) {
      console.log(err);
    };
}

async function showOnPage() {
  try {
    let y = await axios
    .get("https://crudcrud.com/api/3441f95f27f44b6a908d2e7fb5fdf78a/Order")
    
      let Data = y.data; //array of objects
      for (var i = 0; i < Data.length; i++) {
        let id = Data[i]._id;
        let table = Data[i].Table;
        let dish = Data[i].Dish;
        let price = Data[i].Price;
        let ol = document.getElementById(table);
        let li = document.createElement("li");
       // let payload = JSON.stringify({ Dish: dish, Price: price });
       let payload = `${dish.toUpperCase()} - ${price}$`
        li.appendChild(document.createTextNode(payload));
        let deletebutton = document.createElement("button");
        deletebutton.setAttribute("type", "button");
        deletebutton.setAttribute("id", id);
        deletebutton.appendChild(document.createTextNode("Remove"));
        deletebutton.addEventListener("click", deleteOrder);
        function deleteOrder() {
            axios.delete(`https://crudcrud.com/api/3441f95f27f44b6a908d2e7fb5fdf78a/Order/${this.id}`)
         // alert("order deleted");
          //location.reload()
          let item = document.getElementById(this.id).parentElement.parentElement
          item.removeChild(document.getElementById(this.id).parentElement)

          
          
        
        }
        li.appendChild(deletebutton);
        ol.appendChild(li);
      }
    ;

  }
  catch (err){
    console.log(err)
  }
  
};



showOnPage();

