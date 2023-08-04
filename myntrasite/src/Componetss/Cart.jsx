import React, { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../Componetss/CSS Files/Cart.css"

const Cart = () => {
  const [finalprice, setFinalPrice] = useState(0);
  const [userCart, setUserCart] = useState([]);
  const router = useNavigate();

  // console.log(userCart, "- userCart");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          setUserCart(allUsers[i].cart);
          break;
        }
      }
    } else {
     alert("Please login to watch all cart products.");
      router("/login");
    }
  }, []);

  useEffect(() => {
    if (userCart.length) {
        var totalprice = 0;
        for (var i = 0; i < userCart.length; i++) {
            totalprice += parseInt(userCart[i].price);
        }
        setFinalPrice(totalprice)
    }
}, [userCart])


useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current-user"))
    if (user) {
        if (user?.role == "Seller") {
            alert("Access granted only to Buyer.")
            router('/')
        }
    } else {
        alert("You are not a Logged in user.")
        router('/practicelogin')
    }
}, [])


  function checkout(){
    const user = JSON.parse(localStorage.getItem("Current-user"));
    if (user?.email) {
      const allUsers = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == user.email &&
          allUsers[i].password == user.password
        ) {
          allUsers[i].cart=[];
          break;
        }
      }
      localStorage.setItem("Users",JSON.stringify(allUsers))
    }
    setFinalPrice([]);  
    setUserCart([]);
   alert("Your products will be delivered soon. Thankyou for shopping!")
  }
  return (
    <div id="screen">
    
      <div id="cartbody">
        <div id="cartleft">
            <div id="adcart">
                <div>
                    <p>Deliver to: <b>Meghali Kamble,410209</b></p>
                    <p>Mansarovar, Navi Mumbai</p>
                </div>
                <div>
                    <button>CHANGE ADDRESS</button>
                </div>
            </div>
            <div id="offcart">
                <p><b>Available Offers</b></p>
                <p>10% Instant Discount on ICICI Bank Credit and Debit Cards on a min spend of Rs.3,500. TCA</p>
                <select>
                    <option>Show More</option>
                    <option>Show More</option>
                </select>
            </div>
            <div id="itemscart">
                <div>
                <input type="checkbox"/> 
                <lable><b>1/1 ITEMS SELECTED</b></lable>
                </div>
                <div>
                    <span>REMOVE</span>
                    <span>MOVE TO WISHLIST</span>
                </div>
            </div>
            <div id="productcart">
                <div>
                    <img src='https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/23456722/2023/5/29/95cbbecd-2db3-4822-b4d6-4006d262ebf71685344915764WomenWhitenBlueIndigoPrintWorkCottonKurtawithTrousersWithDup1.jpg'/>        </div>
                <div>
                    <div>
                        <p><b>Karawal Fab</b></p>
                        <p>Ethnic motif Pleated Anarakali Pure Cotton Kurta & Trouser.. </p>
                        <p>Sold by : Shiv Shakti Fashion</p>
                    </div>
                    <div>
                        <span><b>Size : M</b></span>
                        <span><b>Qty : 1</b></span>
                    </div>
                    <div>
                        <p><b>Rs. 1,499 </b>  </p>
                        <p><b>30 days </b>return available</p>
                        <p>Delivery by <b>8 June 2023</b></p>
                    </div>
                </div>
            </div>
            <div id="wishcart">
                <span><b>Add More From Wishlist</b></span>
            </div>
        </div>
        <div id="rightcart">
            <div id="coupon">
                <p>COUPON</p>
                <div>
                    <p><b>Apply Coupons</b></p>
                    <button>APPLY</button>
                </div>
            </div>
            <div id="supportcart">
                <div>
                    <p>SUPPORT TRANSFORMATIVE WORK IN INDIA</p>
                </div>
                <div>
                    <input type="checkbox"/>
                    <label><b>Support Us</b></label>
                </div>
                <div>
                    <p>Rs.10</p>
                    <p>Rs.50</p>
                    <p>Rs.100</p>
                </div>
                <div>
                    <p>Know More</p>
                </div>
            </div>
            <div id="pricecart">
                <p>PRICE DETAILS(1 item)</p>
                <div>
                <div>
                    <p>Total MRP</p>
                    <p>Coupon Discount</p>
                    <p>Convenience fee</p>
                </div>
                <div>
                    <p>Rs.10,500</p>
                    <p>Apply Coupon</p>
                    <p>Rs.10</p>
                </div>
            </div>
            </div>
            <div id="amtcart">
                <div>Total Amount</div>
                <div>Rs.10,510</div>
            </div>
            <div id="butcart">
                <button>PLACE ORDER</button>
            </div>
        </div>
      </div>
      <div id="bottom"></div>
    </div>
  )
}

export default Cart