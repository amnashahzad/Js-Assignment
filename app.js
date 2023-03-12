alert("Assalam-o-alikum!")

alert("Error! Please enter a valid password.")

alert("Welcome to JS Land...\nHappy Coding!")

alert("Welcome to JS Land...")
alert("Happy Coding!")

console.log("Hello...I can run JS through my web browser's console")

var username

var myName = ("Amna")

var message = ("Hello World")
alert(message)

var name = ("Amna")
var age = ("11 years old")
var certification = ("Certified Mobile Application Development")
alert(name)
alert(age)
alert(certification)

var a = ("PIZZA")
alert("PIZZA\nPIZZ\nPIZ\nPI\nP")

var email = ("example@example.com")
alert("My email address is " + email)

var book = ("A smarter way to learn JavaScript")
alert("I am trying to learn from the Book " + book)

document.write("Yah! I can write HTML content through JavaScript", "<br>")

var pattern = ("▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬")
alert(pattern)
document.write(pattern)

var age = (11)
alert("I am " + age + " years old")

var track = (14)
alert("You have visited this site " + track + " times.")

var birthYear = (2011)
document.write("<br><br>" + "My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number")

var name = ("John Doe").bold()
var product = ("T-Shirts(s)").bold()
var quantity = ("5").bold()
document.write("<br>" + name + " ordered " + quantity + " " + product + " on XYZ Clothing store" + "<br><br>")

var a, b, c;

var a, b, c, d, e;

var heading = ("Rules for naming JS variables" + "<br>").bold()
document.write(heading)
document.write("<br>" + "Variable names can only contain, numbers, $ and _. For example $my_1stVariable")
document.write("<br>" + "Variables must begin with a letter, $, or _. For example $name, _name or name")
document.write("<br>" + "Variable names are case sensitive")
document.write("<br>" + "Variable names should not be JS keywords" + "<br><br>")

var num1 = 3
var num2 = 5
document.write("Sum of " + num1 + " and " + num2 + " is " + (num1 + num2))

var num1 = 3
var num2 = 5
document.write("<br>" + "Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2))
document.write("<br>" + "Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2))
document.write("<br>" + "Division of " + num1 + " and " + num2 + " is " + (num1 / num2))
document.write("<br>" + "Modulus of " + num1 + " and " + num2 + " is " + (num1 % num2))

var number
document.write("<br>" + "<br>" + "Value after variable declaration is " + number)
number = 5
document.write("<br>" + "Initial value: " + number)
document.write("<br>" + "Value after increment is: " + ++number)
var number1 = number + 7
document.write("<br>" + "Value after addition is: " + number1)
document.write("<br>" + "Value after decrement is: " + --number1)
document.write("<br>" + "The remainder is: " + number1 % 3)

var cost = 600
var ticket = 5
document.write("<br>" + "The cost to buy " + ticket + " tickets to a movie is " + cost * ticket + "PKR")

var i
document.write("<br>" + "<br>" + "Table of 4" + "<br>")
for (i = 1; i <= 10; i++) {
    document.write("21 x" + i + "=" + 21 * i + "<br>")
}

var celsius = 25
document.write("<br>" + celsius + "°C is " + ((celsius * 9 / 5) + 32) + "°F")
var fahrenheit = 70
document.write("<br>" + fahrenheit + "°F is " + (fahrenheit - 32) * 5 / 9 + "°C")

document.write("<br>" + "<br>" + "Shopping Cart" + "<br>")
var pi1 = 650, pi2 = 100, oi1 = 3, oi2 = 7, sc = 100
document.write("<br>" + "Price of item 1 is " + pi1)
document.write("<br>" + "Ordered quantity of item 1 is " + oi1)
document.write("<br>" + "Price of item 2 is " + pi2)
document.write("<br>" + "Ordered quantity of item 2 is " + oi2)
document.write("<br>" + "Shiping charges " + sc)
document.write("<br>" + "<br>" + "Total cost of your order is " + ((pi1 * oi1) + (pi2 * oi2) + sc))

document.write("<br>" + "<br>" + "Marks Sheet" + "<br>")
var marksobtained = 804
var totalmarks = 980
document.write("<br>" + "Total marks " + totalmarks)
document.write("<br>" + "Marks obtained " + marksobtained)
document.write("<br>" + "Percentage: " + (marksobtained / totalmarks * 100) + "%")

document.write("<br>" + "<br>" + "Currency in PKR" + "<br>")
var dollar = 10, saudiriyal = 25
document.write("<br>" + "Total currency in PKR:" + ((dollar * 104.80) + (saudiriyal * 28)))

var integer = 9
document.write("<br>" + "<br>" + (((integer + 5) * 10) / 2))

document.write("<br>" + "<br>" + "Age Calculator" + "<br>")
var currentyear = 2020, birthyear = 2001
document.write("<br>" + "Current year: " + currentyear)
document.write("<br>" + "Birth year: " + birthyear)
document.write("<br>" + "Your age is: " + (currentyear - birthYear))

document.write("<br>" + "<br>" + "The Geometrizer" + "<br>")
var radius = 20
document.write("<br>" + "Radius of cicle is:" + radius)
document.write("<br>" + "The circumference is:" + (2 * 3.1415926535897932 * radius))
document.write("<br>" + "The area is:" + (3.1415926535897932 * radius * radius))

document.write("<br>" + "<br>" + "The Lifetime Supply Calculator" + "<br>")
var snack = ("chocolate chip")
var age = 19, maxage = 80, perday = 3
document.write("<br>" + "Favourite Snack: " + snack)
document.write("<br>" + "Current age: " + age)
document.write("<br>" + "Estimated Maximum Age: " + maxage)
document.write("<br>" + "Amount of snack per day: " + perday)
document.write("<br>" + "You will need " + ((maxage - age) * perday) + " " + snack + " to last you until the ripe old age of " + maxage)

var a = 10
document.write("<br>" + "<br>" + "Result:" + "<br>")
document.write("<br>" + "The value of a is: " + a)
document.write("<br>" + "<br>" + "------------------------------" + "<br>")
document.write("<br>" + "The value of ++a is: " + (++a))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of a++ is: " + (a++))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of --a is: " + (--a))
document.write("<br>" + "Now the value of a is: " + a)
document.write("<br>" + "<br>" + "The value of a-- is: " + (a--))
document.write("<br>" + "Now the value of a is: " + a)

var a = 2, b = 1
var result = --a - --b + ++b + b--
document.write("<br>" + "<br>" + "a is: " + a)
document.write("<br>" + "b is: " + b)
document.write("<br>" + "result is: " + result)

var name1 = prompt("What is your name?")
document.write("<br>" + "<br>" + "Assalam-o-alikum " + name1 + "!" + "<br>")

var tabnum = +prompt("Enter a number: ")
if (tabnum) {
    document.write("<br>" + "Table of " + tabnum + " is:-")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + tabnum + "x" + i + "=" + (tabnum * i));
    }
}
else {
    document.write("<br>" + "Table of 22 is:-")
    for (var i = 1; i <= 10; i++) {
        document.write("<br>" + "22x" + i + "=" + (22 * i));
    }
}
document.write("<br><br>")