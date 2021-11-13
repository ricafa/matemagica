  
var nivel      = 1;
var max_number = 5; //numero maximo de diferença entre os números.
var min_number = 0;

window.addEventListener('load', (event) => {
    startIt();
});

function getRandomInt() {
    return Math.floor(Math.random() * (max_number - min_number + 1)) + min_number;
};

function startIt(){
    if(nivel ==1){     
        window.max_number = 5;
        window.min_number = 0;   
    }
    else if (nivel == 2){
        window.max_number = 10;
        window.min_number = 5;
    }
    num1_1.value = 0;
    while(parseInt(num1_1.value)==0){
        num1_1.value = getRandomInt();
    }
    while(parseInt(num2_1.value)<min_number){
        num2_1.value = getRandomInt();
    }
    num2_1.value = '';
    tot_1 .value = parseInt(num1_1.value)+getRandomInt();
    $("#mytext").focus();
}
bt_ok.addEventListener('click', (event) => {
    if (parseInt(num1_1.value)+parseInt(num2_1.value) == parseInt(tot_1.value)){
        Swal.fire({
            title: 'PARABÉNS!',
            html: 'RESPOSTA CERTA',
            icon: 'success',
            confirmButtonText: 'PRÓXIMA!',
        }).then((result) => {
            if (result.isConfirmed) {
                startIt();
            } else if (result.isDenied) {
                //
            }
        });
    }
    else{
        Swal.fire({
            title: 'TENTE NOVAMENTE',
            html: 'RESPOSTA ERRADA',
            icon: 'error',
        });
    }
});

/*
//the second enter, submit the submited form. keep calling the same thing, 
//when it must click on confirm button at the alert message
document.addEventListener('keypress', function(e){
    if(e.which == 13){
      bt_ok.click();
    }
  }, false);
*/
