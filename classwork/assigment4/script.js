//item variables
let item1 = "Banana 🍌"
let item2 = "mango🥭 "
let item3 = "pineapple 🍍"
let item4 = "oranges 🍊"
//display item variables in html
let iTem1 = document.getElementById("i1")
iTem1.innerHTML = item1
let iTem2 = document.getElementById("i2")
iTem2.innerHTML = item2
let iTem3 = document.getElementById("i3")
iTem3.innerHTML = item3
let iTem4 = document.getElementById("i4")
iTem4.innerHTML = item4
//price variables
let price1 = 170
let price2 = 200
let price3 = 117
let price4 = 80

//display price variables in html
let PRICE1 = document.getElementById("p1")
PRICE1.innerHTML = price1
let PRICE2 = document.getElementById("p2")
PRICE2.innerHTML = price2
let PRICE3 = document.getElementById("p3")
PRICE3.innerHTML = price3
let PRICE4 = document.getElementById("p4")
PRICE4.innerHTML = price4
//total
let total = "Total"
let tOtal = price1 + price2 + price3 + price4
//display total
let TOTAL1 = document.getElementById("tT")
TOTAL1.innerHTML = total
let TOTAL2 = document.getElementById("TOTAL")
TOTAL2.innerHTML = tOtal
//vat
let vAt="VAT"
let V=(price1*0.1)+(price2*0.1)+(price3*0.1)+(price4*0.1)

//display vat
let vAt1 =document.getElementById("VAT")
vAt1.innerHTML=vAt
let V1= document.getElementById("vat")
V1.innerHTML=V
//PAID
let paid="PAID"
let paID=2000
//display paid
let pAID=document.getElementById("PAID")
pAID.innerHTML=paid
let paID1=document.getElementById("paid")
paID1.innerHTML=paID
//change
let change="CHANGE"
let change1=paID - tOtal
//display change
let cHange=document.getElementById("CHANGE")
cHange.innerHTML=change
let cHangE=document.getElementById("change")
cHangE.innerHTML=change1
//SERVED BY
let servedby="SERVED BY👩‍🦰: "
let servedBY="MARY MWIKALI '\n' Thankyou"
//display served by
let ServedBy=document.getElementById("sB")
ServedBy.innerHTML=servedby
let servedBY1=document.getElementById("sB1")
servedBY1.innerHTML=servedBY












