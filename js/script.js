




 let cards=[
    

    {
    
    img:"https://tse1.mm.bing.net/th/id/OIP.0zybVFWqpRicddgwRzakAAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    iconoubicacion:"fa-solid fa-location-pin",
    lugar:"La Punta cana",
    sector:"La altagracia",
    tipo:"playa"
},

    {
    
    img:"https://tse1.mm.bing.net/th/id/OIP.FY72H6eJV7M3V85w9TBZ5QHaFN?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    iconoubicacion:"fa-solid fa-location-pin",
    lugar:"Bahia de las Aguilas",
    sector:"Pedernales",
    tipo:"playa"
},

    {
    
    img:"https://tse2.mm.bing.net/th/id/OIP.KRB7lWXsVSxfkMpXY9eyQQHaE6?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    iconoubicacion:"fa-solid fa-location-pin",
    lugar:"Samana",
    sector:"Samana",
    tipo:"Montañas"
},



    {
    
    img:"https://tse2.mm.bing.net/th/id/OIP.cJmdCAGkJYe45BsXccxxoQHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    iconoubicacion:"fa-solid fa-location-pin",
    lugar:"Puerto Plata",
    sector:"Puerto Plata",
    tipo:"playa"
},


    {
    
    img:"https://tse3.mm.bing.net/th/id/OIP.h2u-lQrMYXtJFGDLQ7-eFAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    iconoubicacion:"fa-solid fa-location-pin",
    lugar:"Jarabacoa",
    sector:"La Vega",
    tipo:"Montaña"
},


    {
    
    img:"https://th.bing.com/th/id/OIP.d6CKRG75_CaJQcuA8XVtMgHaE7?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    iconoubicacion:"fa-solid fa-location-pin",
    lugar:"Santo Domingo",
    sector:"Distrito Nacional",
    tipo:"Cultura"
},



]



function datoscardsgrid(){



let contenedor=document.getElementById("contenedor-grid-destinos");




cards.forEach(dt => {
    

contenedor.innerHTML+=`

<div class="cards-grid">

<img src="${dt.img}">

<div class="cd">

<div class="cards-grid-contain">
<i class="${dt.iconoubicacion}"></i>

<div class="ubicacionflex">
<strong>${dt.lugar}</strong>
<p>${dt.sector}</p>
</div>
</div>

<div class="tipocard">

<span>${dt.tipo}</span>

</div>

</div>


</div>
`


});




}


datoscardsgrid()





 function filtrarlayas(){

let contenedor=document.getElementById("contenedor-grid-destinos");
let filtrarplayastbon=document.getElementById("filtrarplayastbon")


filtrarplayastbon.addEventListener("click",()=>{
    contenedor.innerHTML="";
let filtrar=cards.filter((e)=>e.tipo =="playa")


filtrar.forEach((dt)=>{

contenedor.innerHTML+=`

<div class="cards-grid">

<img src="${dt.img}">

<div class="cd">

<div class="cards-grid-contain">
<i class="${dt.iconoubicacion}"></i>

<div class="ubicacionflex">
<strong>${dt.lugar}</strong>
<p>${dt.sector}</p>
</div>
</div>

<div class="tipocard">
<span>${dt.tipo}</span>

</div>
</div>

</div>
`

})

})





}


filtrarlayas();



function filtrarmontañas(){
let contenedor=document.getElementById("contenedor-grid-destinos");

let btonfiltrarmontañas=document.getElementById("filtrarMontañas");

const FiltrarMontañas=cards.filter((M)=>M.tipo=="Montañas")
btonfiltrarmontañas.addEventListener("click",()=>{
contenedor.innerHTML="";
FiltrarMontañas.forEach((dt)=>{
 contenedor.innerHTML+=`
<div class="cards-grid">
<img src="${dt.img}">
<div class="cd">
<div class="cards-grid-contain">
<i class="${dt.iconoubicacion}"></i>
<div class="ubicacionflex">
<strong>${dt.lugar}</strong>
<p>${dt.sector}</p>
</div>
</div>

<div class="tipocard">

<span>${dt.tipo}</span>

</div>

</div>


</div>
`


})

})















}

filtrarmontañas()


function cargartodos(){


let Filtrarbton=document.getElementById("Filtrarbton");
Filtrarbton.addEventListener("click", ()=>{
let contenedor=document.getElementById("contenedor-grid-destinos");
contenedor.innerHTML="";
cards.forEach(dt => {



    contenedor.innerHTML+=`
<div class="cards-grid">
<img src="${dt.img}">
<div class="cd">
<div class="cards-grid-contain">
<i class="${dt.iconoubicacion}"></i>
<div class="ubicacionflex">
<strong>${dt.lugar}</strong>
<p>${dt.sector}</p>
</div>
</div>
<div class="tipocard">
<span>${dt.tipo}</span>
</div>
</div>
</div>
`


});



    



})





}

cargartodos()





function buscardestno(){



let buscar=document.getElementById("btonbuscardestino")

buscar.addEventListener("input",()=>{

let dato=buscar.value.toLowerCase();
let mostrar=cards.filter((e)=>{


return e.sector.toLowerCase().includes(dato) ||  e.lugar
.toLowerCase().includes(dato)  ;

})


let contenedor=document.getElementById("contenedor-grid-destinos");
contenedor.innerHTML="";




mostrar.forEach(dt=>{


contenedor.innerHTML+=`
<div class="cards-grid">
<img src="${dt.img}">
<div class="cd">
<div class="cards-grid-contain">
<i class="${dt.iconoubicacion}"></i>
<div class="ubicacionflex">
<strong>${dt.lugar}</strong>
<p>${dt.sector}</p>
</div>
</div>
<div class="tipocard">
<span>${dt.tipo}</span>
</div>
</div>
</div>
`




})


})







}

buscardestno()