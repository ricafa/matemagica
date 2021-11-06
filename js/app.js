const MAX_NUMBER = 5;
const MIN_NUMBER = 0;

window.addEventListener('load', (event) => {
    startIt();
});

function getRandomInt() {
    return Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
};

function startIt(){
    num1_1.value = 0;
    while(parseInt(num1_1.value)==0){
        num1_1.value = getRandomInt();
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
