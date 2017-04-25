// Precios
var pgrad= 750;
var pinv= 1000;
var pinv_viaje= 1360;
var pkid= 710;
var ptravel= 3600;

function onLoad(){
  toggle('none', "results");
  toggle('none', "travelop");
}

function travelop(){
  toggle('block',"travelop");
}

function calcular(){
     var grad = document.getElementById("grad").value;
     var inv  = document.getElementById("inv").value;
     var kid  = document.getElementById("kid").value;

    //Variables para Totales
     var Tgrad = grad * pgrad;
     var Tinv;
     var Tkid = kid * pkid;
     var Ttravel=0;

     //Calculo de Viaje
    if(document.getElementById("travel").checked){
      Ttravel = 3600;
    }

    // Calculo de Invitados
    if(document.getElementById("inv_travel").checked){
        if(inv<10){
          Tinv= inv*pinv_viaje;
          Ttravel= 3600 - (inv*360);
        }else{
          Tinv= ((inv-10)*pinv)+13600;
          Ttravel=0;
        }

    }else {
      Tinv= (inv * pinv);
    }
    //Calculo de Graduados
    document.getElementById("Tgrad").innerHTML= "$ "+ Tgrad;
    //Total de Viaje
    document.getElementById("Ttravel").innerHTML= "$ "+ Ttravel;
    //Total de Invitado
    document.getElementById("Tinv").innerHTML= "$ "+ Tinv;
    //Calculo de Niños
    document.getElementById("Tkid").innerHTML= "$ "+ Tkid;
    //Calculo del total
    document.getElementById("total").innerHTML ="$"+( Tgrad+Tinv+Tkid+Ttravel );

    toggle('block',"results");

}
function toggle(displayState, classname){
    var elements = document.getElementsByClassName(classname)
    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = displayState;
    }
}
