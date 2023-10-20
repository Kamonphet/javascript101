// Javascript

// prompt() = input()
// parseInt() = int()
// let Name = prompt('กรอกชื่อ : ')
// console.log('Hello ',Name)
// alert('Hello Phet') 

console.log('Hello Phet')

let name = 'Phet';
console.log('สวัสดี ',name)
name = 'Flim'
console.log(name)

let fname = 'kamonphet'
let lname = 'siri'
console.log(fname,lname)
let number = (4+2*2/2*2+4+1-5+19)+91
console.log(number)

var x =20
{
    var x = 100
    let y = 15
}

console.log(x)

// lottery()
function lottery(){
    let lot = prompt('กรอกเลขที่ต้องการซื้อ : ')
    m=Math.floor(Math.random()*10) //*10 เพื่อทำให้เป็นเลขจำนวนเต็ม 100= 0-99 floor ทำให้ปัดเศษ
    document.getElementById('play').innerHTML='คุณซื้อเลข '+lot
    if (lot == m) {
        document.getElementById('result').innerHTML='ยินดีด้วยคุณถูกรางวัล'
    }else{
        document.getElementById('result').innerHTML='เลขที่ถูกคือ '+m
        
    }
}

console.log(1==1)
console.log(2==2)
console.log(1==='1')
console.log(1==8)
console.log(1!=1)
console.log(10>5)
console.log(1<1)
console.log(1<=1)
console.log(15>=1)


// age()
function age(){
    let age=prompt('กรุณากรอกอายุ : ')
    if (age==13) {
        document.getElementById('content').innerHTML='อะเปิดดู '+"<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?si=dYPz3gktGw6EGUid\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>"
    }else if (age==15){
        document.getElementById('content').innerHTML='เอาคลิปนี้ไป !!!'
    }
    else {
        document.getElementById('content').innerHTML='ไปโตก่อนนะะ'
    }
}


// kumnongrade()
function kumnongrade(){
    let score=parseInt(prompt("กรุณาใส่คะแนน"))
    document.getElementById('grade').innerHTML='คะแนนคุณได้ : '+score
    if (score >=80) {
        document.getElementById('kanan').innerHTML='คุณได้เกรด A'
    }else if (score >=70) {
        document.getElementById('kanan').innerHTML='คุณได้เกรด B'
    }else if (score >=60) {
        document.getElementById('kanan').innerHTML='คุณได้เกรด C'
    }else if (score >=50) {
        document.getElementById('kanan').innerHTML='คุณได้เกรด D'
    }else{
        document.getElementById('kanan').innerHTML='คุณได้เกรด F'
    }
}
//for(start;condition;step)
for(let count=1;count<=5;count++){
    console.log('Hello world'+count)
}

// arharn()
function arharn(){
    let qrt = parseInt(prompt('ใส่จำนวนสินค้า: '))
    let sum = 0
    for(var i =1; i <= qrt; i++){
        let item_price = parseInt(prompt('ราคาสินค้าชิ้นที่ '+i))
        document.getElementById('raka-list').innerHTML += 'รายการสินค้าชิ้นที่ '+i + ' : ' +item_price + ' บาท'+'<br>'
        sum+=item_price
    }
    document.getElementById('ka-arharn').innerHTML = 'ค่าอาหารรวมคือ: '+sum +' บาท'
}


// hua_koi()
function hua_koi(){
    let round = parseInt(prompt('จำนวนรอบที่ต้องการเล่น: '))
    for(var i =1; i <=round; i++){
        var answer = prompt('Head = H or trai= T ?')        
        var random_answer = ''

        if (answer == 'H'){
            answer = 'Head'
        }else if(answer == 'T'){
            answer = 'Trail'
        }else{
            alert('Try again!')
            break
        }

        if(Math.floor(Math.random() *10<=4)){
            random_answer = 'Head'
        }else{
            random_answer='Trail'
        }

        document.getElementById('game-list').innerHTML+='<li>ทายครั้งที่ '+i+ ' คือ '+answer +' ผลครั้งที่ '+i+ ' คือ '+random_answer +'</li><br>'

        if(answer == random_answer){
            alert('You Win!')
        }else{
            alert('Lost!')
        }
    }
}
// while(condition) อันตราย
// while(prompt("please enter 'Exit' ") != 'Exit'){
//     document.getElementById('Exit').innerHTML += 'ไม่ได้พิมพ์ "Exit"'+'<br>'
// }

// function สร้างขึ้นมาเพื่อให้มันทำงานนั้นงานเดียว
// function myFunction(parameter) {}
// myFunction(argument)

// toCelsius()
function toCelsius(input){
    let value = (input-32)*5/9
    return'อุณหภูมิ  = '+value.toFixed(2)+' °C'
}

// toFarenheit()
function toFarenheit(input){
    let value = (input*9/5)+32
    return 'อุณหภูมิ  = '+value.toFixed(2) + ' °F'
}

// display('temperature',toFarenheit(10))
function display(value){
    // document.getElementById(elementId).innerHTML = value 
    alert(value)
}

// alert(sayHello('Phet'))
function sayHello(user_name){
    // ส่งค่าข้อมูลกลับไป
    return 'Hello' + user_name
}

// event 