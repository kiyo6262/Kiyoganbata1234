function dayluck(){
    var array = new Array("大吉","中吉","小吉","凶");
    var number1 = Math.random();
    var number2 = number1 * 4;
    var number = Math.floor(number2);
    var lucky = array[number];

    var object = document.getElementById("luck");
    object.innerText = lucky;
}