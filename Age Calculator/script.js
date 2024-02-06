let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result =  document.getElementById("result");


function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d,m,y;
    y = y2 - y1;

    if(m2>=m1){
        m = m2 - m1;
    }
    else{
        y--;
        m = 12 + m2 - m1;
    }

    if(d2>=d1){
        d = d2 - d1;
    }
    else{
        m--;
        d = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m<0){
        m = 11;
        y--;
    }

    result.innerHTML = `You are <span>${y}</span> years, <span>${m}</span> months and <span>${d}</span> days old`;
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}