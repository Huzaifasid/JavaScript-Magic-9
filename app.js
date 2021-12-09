// Question 1

var itemsArray = [
    { name: "juice", price: "50", quantity: "3" },
    { name: "cookie", price: "30", quantity: "9" },
    { name: "shirt", price: "880", quantity: "1" },
    { name: "pen", price: "100", quantity: "2" }


];
console.log("Juice " + itemsArray[0].price);
console.log("Cookie " + itemsArray[1].price);
console.log("Shirt " + itemsArray[2].price);
console.log("Pen " + itemsArray[3].price);
console.log(+itemsArray[0].price + +itemsArray[1].price + +itemsArray[2].price + +itemsArray[3].price);


// Question 2

var obj = {
    name: "Huzaifa",
    email: "siddiquihuzaifa68@gmail.com",
    password: 1234567,
    age: 19,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}
var check1 = "age" in obj
var check2 = "country" in obj
var check3 = "firstName" in obj
var check4 = "lastName" in obj

console.log("age " + check1);
console.log("country " + check2);
console.log("firstName " + check3);
console.log("lastName " + check4);


// Question 3

function Obj(name, age, section) {
    this.name = name,
        this.age = age,
        this.section = section

}
var student1 = new Obj("Huzaifa", 19, "Morning (TTS)");
var student2 = new Obj("Talha", 21, "Morning (MTWTFS)");
console.log(student1);
console.log(student2);


// Question 4
var mytable = document.getElementById("myTable");
var Name = prompt("Enter Name").toUpperCase();
var gender = prompt("Enter Gender");
var address = prompt("Enter Address");
var education = prompt("Enter Education");
var profession = prompt("Enter Proffession");
function Constructor() {
    this.Name = Name,
        this.gender = gender,
        this.address = address,
        this.education = education,
        this.profession = profession

}
var std = new Constructor(Name, gender, address, education, profession);
var tr = `<tr>
<td>${std.Name}</td>
<td>
<input type="radio" name="Gender" value="male">
<label for="css">Male</label><br>
<input type="radio" name="Gender" value="female">
<label for="javascript">Female</label>
</td>
<td>${std.address}</td>
<td>
<select>
 <option value="education">${std.education}</option>
 <option value="profession">${std.profession}</option>
    </select>
</td>
</tr>`
mytable.innerHTML += tr
localStorage.lastname = Name;
var myStorage = window.localStorage;
console.log(myStorage);