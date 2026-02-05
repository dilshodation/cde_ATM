
let pp = document.getElementById(`pp`)
let bt = document.getElementById(`bt`)
bt.onclick = function (){
    let  inp = document.getElementById(`inp`).value
    if(inp >=1000){
        pp.textContent = `bir ming som`
    }
    if(inp >= 2000){
        pp.textContent = `ikki ming som`
    }
     if(inp >= 3000){
        pp.textContent = `uch ming som`
    }
     if(inp >= 4000){
        pp.textContent = `to'rt ming som`
    }
     if(inp >= 5000){
        pp.textContent  = `besh ming som`
    }
    if(inp >= 6000){
        pp.textContent = `olti ming som`
    }
    if(inp >= 7000){
        pp.textContent = `yetti ming som`
    }
    if(inp >= 8000){
        pp.textContent = `sakkiz ming som`
    }
    if(inp >= 9000){
        pp.textContent= `to'qqiz ming som`
    }
    if(inp>= 10000){
        pp.textContent= `o'ng ming som`
    }
    if(inp < 1000 || inp > 10000){
        pp.textContent = `chegaradan chiqding`
    }
}

// console.log((inp.value == '')? 'X bush': 'Yes', 
//  (2 == 2 || 5 == 5)? "teng" : 'emas',
//  (2 == 2)?  pp.textContent = `bir ming som` : 'emas')

