//1. create 3 functions
// clock()
// setAttr()
//setText()

// function clock(){
//     //calculate angle
//     let d, h, m, s
//     d = new Date
    
//     // 60 seconds= 360 degrees, ie 1 second = 6 degrees.
//     // so each hour is 30 degrees apart
//     h = 30 * ((d.getHours() % 12 ) + d.getMinutes() / 60 )

//     // each minute is 6 degrees apart
//     m = 6 * d.getMinutes() 

//     //each second is 6 degrees apart
//     s = 6 * d.getSeconds()

//     // move hands
//     setAttr('h-hand', h)
//     setAttr('m-hand', m)
//     setAttr('s-hand', s)
//     setAttr('s-tail', s+180)

//     //display time
//     h = d.getHours()
//     m = d.getMinutes()
//     s = d.getSeconds()

//     if (h >= 12) {
//         setText ('suffix', 'PM')

//     } else {
//         setText('suffix', 'AM')
//     }

//     // h % 12 will give us 12-hour time format

//     if ( h != 12) {
//         h %= 12
//     }

//     setText('sec', s)
//     setText('min', m)
//     setText('hr', h)

//     // call every second
//     setTimeout(clock, 1000)

// }


// //3. set Attr() function will rotate the hands of the clock
// function setAttr(id, val){
//     let v = 'rotate(' + val + '+ 70, 70)'
//     document.getElementById(id).setAttribute('tranform', v)

// }


// // setText() function will display the time
// function setText(id, val){
//     if (val < 10) {
//         val = '0' + val
//     }
//     document.getElementById(id).innerHtml = val

// }

// //2. set window.onload to clock
// window.onload=clock

function clock(){
    //calculate angle
    var d, h, m, s;
    d = new Date;
    
    h = 30 * ((d.getHours() % 12) + d.getMinutes() / 60);
    m = 6 * d.getMinutes();
    s = 6 * d.getSeconds();
    
    //move hands
    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);
    
    //display time
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    if(h >= 12){
        setText('suffix', 'PM');
    }else{
        setText('suffix', 'AM');
    }
    
    if(h != 12){
        h %= 12;
    }
    
    setText('sec', s);
    setText('min', m);
    setText('hr', h);
    
    //call every second
    setTimeout(clock, 1000);
    
};

function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};

function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};

window.onload=clock;