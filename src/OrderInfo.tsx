import { useState } from "react"

function OrderInfo(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setshipping] = useState("Delivery");


    function NameChange(event:any){
        setName(event.target.value);
    }

    function QuantityChange(event:any){
        setQuantity(event.target.value);
    }

    function CommentChange(event:any){
        setComment(event.target.value);
    }

    function PaymentChange(event:any){
        setPayment(event.target.value);
    }

    function ShippingChange(event:any){
        setshipping(event.target.value);
    }


    return (
        <div className="order">
            <h1>Order Item</h1>
            <input value={name} onChange={NameChange} placeholder="Enter Item"/>
            <p>Item Ordered: {name}</p>

            <input value={quantity} onChange={QuantityChange} type = "number" min="1"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={CommentChange} placeholder="Enter Delivery Instructions"/>
            <p>Comment: {comment}</p>

            <select value={payment} onChange={PaymentChange}>
                <option value ="">Select Payment Method</option>
                <option value ="Visa">Visa</option>
                <option value ="Mastercard">Mastercard</option>
                <option value ="GiftCard">GiftCard</option>
            </select>
            <p>Payment Method: {payment}</p>


            
            <label>
            <input type="radio" value="Delivery"  checked={shipping === "Delivery"} onChange={ShippingChange}/>
                Delivery
            </label>
            <br/>
            <label>
                <input type="radio" value="Pick Up"  checked={shipping === "Pick Up"} onChange={ShippingChange}/>
                Pick Up
            </label>
            <p>Shipping Method: {shipping}</p>
        </div>
    );


}

export default OrderInfo