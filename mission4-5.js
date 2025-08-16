function dayluck(){
    var array = new Array("大吉","中吉","小吉","凶");
    var number1 = Math.random();
    let lucky
    
    if(number1<0.3){
        lucky = array[3];
    }else if(number1<0.6){
        lucky = array[2];
    }else if(number1<0.9){
        lucky = array[1]
    }else{
        lucky = array[0]
    }

    var object = document.getElementById("luck");
    object.innerText = lucky;
    let imgPath = "";
    if (lucky === "大吉") {
        imgPath = "daikiti.jpg";
    } else if (lucky === "中吉") {
        imgPath = "tyuukiti.jpg";
    } else if (lucky === "小吉") {
        imgPath = "syoukiti.jpg";
    } else if (lucky === "凶") {
        imgPath = "kyou.jpg";
    }
     // 画像を表示
    document.getElementById("luckImage").src = imgPath;
}