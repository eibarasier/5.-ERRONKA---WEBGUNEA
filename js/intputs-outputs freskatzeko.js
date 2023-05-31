//Tiempo de refresco
msFreskatzeko=2000;
//Zenbat aldiz galdetu diot PLCri
var nKontsultaKopurua = 0;

//ALDAGAIAK
var bBotoia1;
var bBotoia2;
var bBotoia3;
var bBotoia4;
var bBotoia5;
var bBotoia6;
var bBotoia7;
var bBotoia8;
var bBotoia9;
var bBotoia10;
var bBotoia11;
var bBotoia12;

//IRTEERAK
var bIrteera1;
var bIrteera2;
var bIrteera3;
var bIrteera4;
var bIrteera5;
var bIrteera6;
var bIrteera7;

//TNEPORIZADOREAK

var tTempjoana;
var tTempetorria;


//BOTOIA
var etengailuaOFF_seta = document.createElement("img");
etengailuaOFF_seta.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_seta = document.createElement("img");
etengailuaON_seta.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_rearme = document.createElement("img");
etengailuaOFF_rearme.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_rearme = document.createElement("img");
etengailuaON_rearme.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_pausa = document.createElement("img");
etengailuaOFF_pausa.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_pausa = document.createElement("img");
etengailuaON_pausa.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_martxa = document.createElement("img");
etengailuaOFF_martxa.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_martxa = document.createElement("img");
etengailuaON_martxa.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_p1 = document.createElement("img");
etengailuaOFF_p1.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_p1 = document.createElement("img");
etengailuaON_p1.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_p2 = document.createElement("img");
etengailuaOFF_p2.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_p2 = document.createElement("img");
etengailuaON_p2.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_p3 = document.createElement("img");
etengailuaOFF_p3.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_p3 = document.createElement("img");
etengailuaON_p3.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_p4 = document.createElement("img");
etengailuaOFF_p4.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_p4 = document.createElement("img");
etengailuaON_p4.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_p5 = document.createElement("img");
etengailuaOFF_p5.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_p5 = document.createElement("img");
etengailuaON_p5.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_p6 = document.createElement("img");
etengailuaOFF_p6.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_p6 = document.createElement("img");
etengailuaON_p6.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_p7 = document.createElement("img");
etengailuaOFF_p7.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_p7 = document.createElement("img");
etengailuaON_p7.setAttribute("src","./img/etengailuaON.JPG");

var etengailuaOFF_p8 = document.createElement("img");
etengailuaOFF_p8.setAttribute("src","./img/etengailuaOFF.JPG");
var etengailuaON_p8 = document.createElement("img");
etengailuaON_p8.setAttribute("src","./img/etengailuaON.JPG");

//Irteerantzako irudiak 

var motor5vOFF_MX1 = document.createElement("img");
motor5vOFF_MX1.setAttribute("src","./img/motor5vOFF.PNG");
var motor5vON_MX1 = document.createElement("img");
motor5vON_MX1.setAttribute("src","./img/motor5vON.PNG");

var motor5vOFF_MX2 = document.createElement("img");
motor5vOFF_MX2.setAttribute("src","./img/motor5vOFF.PNG");
var motor5vON_MX2 = document.createElement("img");
motor5vON_MX2.setAttribute("src","./img/motor5vON.PNG");

var motor5vOFF_MY1 = document.createElement("img");
motor5vOFF_MY1.setAttribute("src","./img/motor5vOFF.PNG");
var motor5vON_MY1 = document.createElement("img");
motor5vON_MY1.setAttribute("src","./img/motor5vON.PNG");

var motor5vOFF_MY2 = document.createElement("img");
motor5vOFF_MY2.setAttribute("src","./img/motor5vOFF.PNG");
var motor5vON_MY2 = document.createElement("img");
motor5vON_MY2.setAttribute("src","./img/motor5vON.PNG");

var motor5vOFF_MZ1 = document.createElement("img");
motor5vOFF_MZ1.setAttribute("src","./img/motor5vOFF.PNG");
var motor5vON_MZ1 = document.createElement("img");
motor5vON_MZ1.setAttribute("src","./img/motor5vON.PNG");

var motor5vOFF_MZ2 = document.createElement("img");
motor5vOFF_MZ2.setAttribute("src","./img/motor5vOFF.PNG");
var motor5vON_MZ2 = document.createElement("img");
motor5vON_MZ2.setAttribute("src","./img/motor5vON.PNG");

var EIOFF = document.createElement("img");
EIOFF.setAttribute("src","./img/EIOFF.PNG");
var EION = document.createElement("img");
EION.setAttribute("src","./img/EION.PNG");


//BOTOIA sakatzen dudanean, SUBMIT sakatuko banu bezala egin behar da 
etengailuaOFF_seta.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form1");
   var balioa = document.querySelector("#form1 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_seta.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form1");
   var balioa = document.querySelector("#form1 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_rearme.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form2");
   var balioa = document.querySelector("#form2 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_rearme.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form2");
   var balioa = document.querySelector("#form2 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_pausa.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form3");
   var balioa = document.querySelector("#form3 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_pausa.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form3");
   var balioa = document.querySelector("#form3 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_martxa.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form4");
   var balioa = document.querySelector("#form4 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_martxa.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form4");
   var balioa = document.querySelector("#form4 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_p1.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form5");
   var balioa = document.querySelector("#form5 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_p1.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form5");
   var balioa = document.querySelector("#form5 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_p2.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form6");
   var balioa = document.querySelector("#form6 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_p2.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form6");
   var balioa = document.querySelector("#form6 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_p3.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form7");
   var balioa = document.querySelector("#form7 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_p3.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form7");
   var balioa = document.querySelector("#form7 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_p4.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form8");
   var balioa = document.querySelector("#form8 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_p4.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form8");
   var balioa = document.querySelector("#form8 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_p5.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form9");
   var balioa = document.querySelector("#form9 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_p5.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form9");
   var balioa = document.querySelector("#form9 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_p6.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form10");
   var balioa = document.querySelector("#form10 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_p6.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form10");
   var balioa = document.querySelector("#form10 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_p7.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form11");
   var balioa = document.querySelector("#form11 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_p7.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form11");
   var balioa = document.querySelector("#form11 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

etengailuaOFF_p8.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form12");
   var balioa = document.querySelector("#form12 input");
   balioa.setAttribute("value","1");
   formularioa.submit();
} );

etengailuaON_p8.addEventListener( "click", e => {
   var formularioa = document.querySelector("#form12");
   var balioa = document.querySelector("#form12 input");
   balioa.setAttribute("value","0");
   formularioa.submit();
} );

//Cuando cargue la página, que se vaya refrescando ...
window.addEventListener('load', (event) => {
   console.log("AddEventListener atalean sartzen naiz");
   eskatuDatuakPLCri();   
   nTimer = setInterval(function(){
       eskatuDatuakPLCri();
   },msFreskatzeko);
});  

function eskatuDatuakPLCri(){
   console.log("eskatuDatuakPLCri atalean sartzen naiz");
   fetch("API.html")
   .then((response) => response.json())
   .then((json) => {
    //JSON Mezua osorik ikusteko
   console.log(json);
   //JSON mezu horretatik datuak hartu behar ditut
   jsonMezuarenDatuakHartu(json);
   //Hartutako datuak HTML orrialdean margotu
   datuakSartuOrrialdean();        
   }).catch((error) => {
        //Erroren bat badago, catch atal honetara ailegatuko gara
       console.log("CATCH atalean sartzen ari naiz: hona hemen gertatu den errorea: ");
       console.log(error);
       //<p id="pJSON-error"></p> HTML elementuan errorea azalduko da:
       document.getElementById("pJSON-error").innerHTML="Errorea gertatu da PLCtik irteerak irakurtzean. Ikusi garatzailearentzako kontsolan"
   }).finally(() => {
        //Finally atala erabiltzen da exekutatzen den kode bat jartzeko, bai errore bat gertatu bada, bai dena ondo joan bada
        //<p id="pPLCriEskaerak"></p> HTML elementuan PLCri eskaera kopurua agertuko da
        console.log("FINALLY atalean sartzen ari naiz");
        nKontsultaKopurua+=1;
        document.getElementById("spanPLCriEskaerak").innerText = nKontsultaKopurua;
   }); 
}

function jsonMezuarenDatuakHartu( jsonObj ){     
   console.log("jsonMezuarenDatuakHartu atalean sartzen naiz");
   bBotoia1 = jsonObj['SETAREN_EGOERA']=="1"?true:false;
   bBotoia2 = jsonObj['REARMEAREN_EGOERA']=="1"?true:false;
   bBotoia3 = jsonObj['PAUSAREN_EGOERA']=="1"?true:false;
   bBotoia4 = jsonObj['MARTXAREN_EGOERA']=="1"?true:false;
   bBotoia5 = jsonObj['P1_EGOERA']=="1"?true:false;
   bBotoia6 = jsonObj['P2_EGOERA']=="1"?true:false;
   bBotoia7 = jsonObj['P3_EGOERA']=="1"?true:false;
   bBotoia8 = jsonObj['P4_EGOERA']=="1"?true:false;
   bBotoia9 = jsonObj['P5_EGOERA']=="1"?true:false;
   bBotoia10 = jsonObj['P6_EGOERA']=="1"?true:false;
   bBotoia11 = jsonObj['P7_EGOERA']=="1"?true:false;
   bBotoia12 = jsonObj['P8_EGOERA']=="1"?true:false;
   
   bIrteera1 = jsonObj['MX+_EGOERA']=="1"?true:false; 
   bIrteera2 = jsonObj['MX-_EGOERA']=="1"?true:false; 
   bIrteera3 = jsonObj['MY+_EGOERA']=="1"?true:false; 
   bIrteera4 = jsonObj['MY-_EGOERA']=="1"?true:false; 
   bIrteera5 = jsonObj['MZ+_EGOERA']=="1"?true:false; 
   bIrteera6 = jsonObj['MZ-_EGOERA']=="1"?true:false; 
   bIrteera7 = jsonObj['EI_EGOERA']=="1"?true:false; 

   tTempjoana = jsonObj['TENPORIZADOREAREN_EGOERA_JOANA']; 
   tTempetorria = jsonObj['TENPORIZADOREAREN_EGOERA_ETORRIA'];    
}

function datuakSartuOrrialdean(){ 
  console.log("datuakSartuOrrialdean atalean sartzen naiz"); 
  document.getElementById("tdtenporizadorea1").innerHTML = tTempjoana;
  document.getElementById("tdtenporizadorea2").innerHTML = tTempetorria;
   //SETA
   pSETA = document.getElementById("pSETA");
   if (bBotoia1){
    pSETA.children[0].remove();
    pSETA.append(etengailuaON_seta);
 } else {   
    pSETA.children[0].remove();
    pSETA.append(etengailuaOFF_seta);
    }
   //REARMEA
   pREARME = document.getElementById("pREARME");
   if (bBotoia2){
    pREARME.children[0].remove();
    pREARME.append(etengailuaON_rearme);
 } else {   
    pREARME.children[0].remove();
    pREARME.append(etengailuaOFF_rearme);
    }
   //PAUSA
   pPAUSA = document.getElementById("pPAUSA");
   if (bBotoia3){
    pPAUSA.children[0].remove();
    pPAUSA.append(etengailuaON_pausa);
 } else {   
    pPAUSA.children[0].remove();
    pPAUSA.append(etengailuaOFF_pausa);
    }
   //MARTXA
   pMARTXA = document.getElementById("pMARTXA");
   if (bBotoia4){
    pMARTXA.children[0].remove();
    pMARTXA.append(etengailuaON_martxa);
 } else {   
    pMARTXA.children[0].remove();
    pMARTXA.append(etengailuaOFF_martxa);
    }
   //P1
   pPultsagailu1 = document.getElementById("pPultsagailu1");
   if (bBotoia5){
    pPultsagailu1.children[0].remove();
    pPultsagailu1.append(etengailuaON_p1);
 } else {   
    pPultsagailu1.children[0].remove();
    pPultsagailu1.append(etengailuaOFF_p1);
    }
   //P2
   pPultsagailu2 = document.getElementById("pPultsagailu2");
   if (bBotoia6){
    pPultsagailu2.children[0].remove();
    pPultsagailu2.append(etengailuaON_p2);
 } else {   
    pPultsagailu2.children[0].remove();
    pPultsagailu2.append(etengailuaOFF_p2);
    }
   //P3
   pPultsagailu3 = document.getElementById("pPultsagailu3");
   if (bBotoia7){
    pPultsagailu3.children[0].remove();
    pPultsagailu3.append(etengailuaON_p3);
 } else {   
   pPultsagailu3.children[0].remove();
   pPultsagailu3.append(etengailuaOFF_p3);
   }
   //P4
   pPultsagailu4 = document.getElementById("pPultsagailu4");
   if (bBotoia8){
    pPultsagailu4.children[0].remove();
    pPultsagailu4.append(etengailuaON_p4);
 } else {   
   pPultsagailu4.children[0].remove();
   pPultsagailu4.append(etengailuaOFF_p4);
   }
   //P5
   pPultsagailu5 = document.getElementById("pPultsagailu5");
   if (bBotoia9){
    pPultsagailu5.children[0].remove();
    pPultsagailu5.append(etengailuaON_p5);
 } else {   
   pPultsagailu5.children[0].remove();
   pPultsagailu5.append(etengailuaOFF_p5);
   }
   //P6
   pPultsagailu6 = document.getElementById("pPultsagailu6");
   if (bBotoia10){
    pPultsagailu6.children[0].remove();
    pPultsagailu6.append(etengailuaON_p6);
 } else {   
   pPultsagailu6.children[0].remove();
   pPultsagailu6.append(etengailuaOFF_p6);
   }
   //P7
   pPultsagailu7 = document.getElementById("pPultsagailu7");
   if (bBotoia11){
    pPultsagailu7.children[0].remove();
    pPultsagailu7.append(etengailuaON_p7);
 } else {   
   pPultsagailu7.children[0].remove();
   pPultsagailu7.append(etengailuaOFF_p7);
   }
   //P8
   pPultsagailu8 = document.getElementById("pPultsagailu8");
   if (bBotoia12){
    pPultsagailu8.children[0].remove();
    pPultsagailu8.append(etengailuaON_p8);
 } else {   
   pPultsagailu8.children[0].remove();
   pPultsagailu8.append(etengailuaOFF_p8);
   }
 // Irteerak

   tdMX1 = document.querySelector("#tdMX1");

  if (bIrteera1){
   tdMX1.children[0].remove();
   tdMX1.append(motor5vON_MX1);
  }else{
   tdMX1.children[0].remove();
   tdMX1.append(motor5vOFF_MX1);
  }

  tdMX2 = document.querySelector("#tdMX2");

  if (bIrteera2){
   tdMX2.children[0].remove();
   tdMX2.append(motor5vON_MX2);
  }else{
   tdMX2.children[0].remove();
   tdMX2.append(motor5vOFF_MX2);
  }

  tdMY1 = document.querySelector("#tdMY1");

  if (bIrteera3){
   tdMY1.children[0].remove();
   tdMY1.append(motor5vON_MY1);
  }else{
   tdMY1.children[0].remove();
   tdMY1.append(motor5vOFF_MY1);
  }

  tdMY2 = document.querySelector("#tdMY2");

  if (bIrteera4){
   tdMY2.children[0].remove();
   tdMY2.append(motor5vON_MY2);
  }else{
   tdMY2.children[0].remove();
   tdMY2.append(motor5vOFF_MY2);
  }

  tdMZ1 = document.querySelector("#tdMZ1");

  if (bIrteera5){
   tdMZ1.children[0].remove();
   tdMZ1.append(motor5vON_MZ1);
  }else{
   tdMZ1.children[0].remove();
   tdMZ1.append(motor5vOFF_MZ1);
  }

  tdMZ2 = document.querySelector("#tdMZ2");

  if (bIrteera6){
   tdMZ2.children[0].remove();
   tdMZ2.append(motor5vON_MZ2);
  }else{
   tdMZ2.children[0].remove();
   tdMZ2.append(motor5vOFF_MZ2);
  }

  tdEI = document.querySelector("#tdEI");

  if (bIrteera7){
   tdEI.children[0].remove();
   tdEI.append(EION);
  }else{
   tdEI.children[0].remove();
   tdEI.append(EIOFF);
  }
}
