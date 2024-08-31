import { Component } from '@angular/core';

@Component({
  selector: 'app-amazon-cart',
  templateUrl: './amazon-cart.component.html',
  styleUrls: ['./amazon-cart.component.css']
})
export class AmazonCartComponent {

  public carts:any=[
    {pname:'Pen',price:10,rating:4,isFreeDelivery:true},
    {pname:'Phone',price:50000,rating:2,isFreeDelivery:false},
    {pname:'Shirt',price:1600,rating:5,isFreeDelivery:true},
    {pname:'Laptop',price:75000,rating:3,isFreeDelivery:false},
    {pname:'Mouse',price:1200,rating:1,isFreeDelivery:true}
  ]
  public term=''
  public totalCarts=this.carts;
  public total:any=0
  public totalItems:number=0
  public namess:string=''
  public pricess:number=0
  public ratingss:number=0
  public isFreeDelivery: boolean = false;
  
  filter(){
    this.carts=this.totalCarts.filter((cart:any)=>cart.pname.includes(this.term))
  }
delete(i:number){
   this.carts.splice(i,1)
}
freeDelivery(){
  this.carts=this.carts.filter((cart:any)=>cart.isFreeDelivery===true)
}
lowToH(){
this.carts=this.carts.sort((a:any, b:any) => a.price - b.price)
}
highToL(){
  this.carts=this.carts.sort((a:any, b:any) => b.price - a.price)
}
ratingLh(){
  this.carts=this.carts.sort((a:any, b:any) => a.rating- b.rating)
}
ratingHl(){
  this.carts=this.carts.sort((a:any, b:any) => b.rating - a.rating)
}
discount(){
  this.carts=this.carts.map((cart:any)=>{
    cart.price=cart.price-(cart.price*0.5)
    return cart;
  })
}
deliveryCharge(){
  this.carts=this.carts.map((cart:any)=>{
    cart.price=cart.price+20
    return cart;
  })
}
totalPrice(){
  this.total=this.carts=this.carts.reduce((sum:any,cart:any)=>sum+cart.price,0)
  // console.log(this.total)
  // alert(this.total)
}
totalCartItems(){
this.totalItems=this.carts.length
}
addToCart() {
  if (this.namess && this.pricess >= 0 && this.ratingss >= 0) {
    this.carts.push({
      pname: this.namess,
      price: this.pricess,
      rating: this.ratingss,
      isFreeDelivery: this.isFreeDelivery
    });

    // Reset form values
    this.namess = '';
    this.pricess = 0;
    this.ratingss = 0;
    this.isFreeDelivery = false;
  } else {
    alert('Please fill in all fields correctly.');
  }
}
}
