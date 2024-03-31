// Task 1: Class about Movie(a and b)

class Movie {
    constructor(movie,studio,rating="PG")
    {
        this.title=movie;
        this.production=studio;
        this.rating=rating;
    }

}
var object=new Movie("Leo","RFKI",7);
console.log(object.title,object.production,object.rating);

// Task 1: returning a new array of only those movies in the input array with a rating of "PG"(c)

const movies= [
    {
        title: "Leo",
        rating: "PG"
    },
    {
        title: "Vivegam",
        rating: "PG13"
    },
    {
        title: "Master",
        rating: "PG13"
    },
    {
        title: "Beast",
        rating: "PG"
    },
    {
        title: "Viswasam",
        rating: "PG"
    }
]
let result=movies.filter((ele)=>ele.rating==="PG");
let res=result.forEach((ele)=>console.log("PG rated movies:",ele.title));

// Task 1: Class about Movie(d)

class Movie1{
    constructor(movie,studio,ratings)
    {
        this.movie=movie;
        this.studio=studio;
        this.rating=ratings;
    }
}
var obj1=new Movie1("Casino Royale","Eon Productions","PG13");
console.log(obj1.movie,obj1.studio,obj1.rating);

// Task 2: Circle - Class

class Circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(n){
        this.radius=n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color=c;
    }
    get toString(){
        return `"Circle[radius =${this.radius},color=${this.color}]"`
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2);
    }
    get circumference(){
        return 2*Math.PI*this.radius;
    }
}
let obj2=new Circle(1.0,"red");
console.log(obj2.radius);
console.log(obj2.color);
console.log(obj2.toString);
console.log(obj2.area);
console.log(obj2.circumference);

// Task 3: Class to hold the details of a person

class Person{
    constructor(name,age,gender,martialstatus,contact,email)
    {
        this.personname=name;
        this.personage=age;
        this.gender=gender;
        this.status=martialstatus;
        this.phone=contact;
        this.mail=email;
    }
} 
var obj= new Person("Vimal",28,"Male","Single",8220591940,"vimaladhithan007@gmail.com");
console.log(obj.personname,obj.personage,obj.gender,obj.status,obj.phone,obj.mail);

// Task 4: Class to calculate the Uber price

class Uber{
    constructor(km,price)
    {
        this.kilometer=km;
        this.price=price;
    }
    set Kilometer(n){
        this.Kilometer=n;
    }
    set Price(p){
        this.Price=p;
    }
    get total(){
        return this.kilometer*this.price;
    }

}
let fair=new Uber(5,100)
console.log(fair.total);