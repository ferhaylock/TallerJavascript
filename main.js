
class Proyecto{
    
     constructor() {
         this.arrayProyectos = [];     
         this.Modif=null;    
     }
     guardar(){
        
        let proyecto = this.leerdatos();
        if(this.validarcampo(proyecto) == true){
            if(this.Modif == null){
                this.agregar(proyecto);
            }
            else{
                this.modificarr(this.Modif, proyecto);
            }
        }

        this.listatabla();
        document.getElementById('codigo').value=null;
        document.getElementById('nombre').value=null;
        document.getElementById('descrip').value=null;
        document.getElementById('fecha').value=null;
            
 }
 listatabla(){
     let tboby = document.getElementById('tboby')
     tboby.innerText='';
     for(let i=0;i < this.arrayProyectos.length;i++){
         let tr = tboby.insertRow();

         let td_codigo = tr.insertCell();
         let td_nombre = tr.insertCell();
         let td_descrip= tr.insertCell();
         let td_fecha = tr.insertCell();
         let td_tipo = tr.insertCell();
         let td_dato = tr.insertCell();

         td_codigo.innerText=this.arrayProyectos[i].codigo;
         td_nombre.innerText=this.arrayProyectos[i].nombre;
         td_descrip.innerText=this.arrayProyectos[i].descrip;
         td_fecha.innerText=this.arrayProyectos[i].fecha;
         td_tipo.innerText=this.arrayProyectos[i].radio;

         let editimg = document.createElement('img');
         editimg.src = 'img/editar.png';
         editimg.setAttribute("onclick","proyecto.modificar("+  JSON.stringify(this.arrayProyectos[i])+")");

         let borrarimg= document.createElement('img');
         borrarimg.src = 'img/boton-eliminar.png'
         borrarimg.setAttribute("onclick","proyecto.borrar("+ this.arrayProyectos[i].codigo+")");

         td_dato.appendChild(editimg);
         td_dato.appendChild(borrarimg);


     }
 }

 modificarr(codigo, proyectoo){
    if(confirm('Desea modificar este proyecto' + codigo)){
     for (let i = 0; i < this.arrayProyectos.length; i++) {
         if(this.arrayProyectos[i].codigo == codigo){
             this.arrayProyectos[i].nombre = proyectoo.nombre;
             this.arrayProyectos[i].descrip = proyectoo.descrip;
             this.arrayProyectos[i].fecha = proyectoo.fecha;
             this.arrayProyectos[i].radio = proyectoo.radio;
         }
     }
 }
}

 modificar(datos){
     this.Modif = datos.codigo;

   document.getElementById('codigo').value = datos.codigo;
   document.getElementById('nombre').value = datos.nombre;
   document.getElementById('descrip').value = datos.descrip;
   document.getElementById('fecha').value = datos.fecha;
   document.getElementsByName('tipo').value = datos.radio;
   
  document.getElementById('boton1').innerText = 'MODIFICAR';
 }
   borrar(codigo){
       if(confirm('Desea borrar este proyecto'+ codigo)){
        for(let i = 0;i< this.arrayProyectos.length;i++){
            if(this.arrayProyectos[i].codigo==codigo){
                this.arrayProyectos.splice(i, 1);
                tboby.deleteRow(i);
            }
       }
        
       }
  
   }
 leerdatos() {
     let proyecto = {}

     proyecto.codigo = document.getElementById('codigo').value;
     proyecto.nombre = document.getElementById('nombre').value;  
     proyecto.descrip= document.getElementById('descrip').value;
     proyecto.fecha = document.getElementById('fecha').value;
     proyecto.radio = document.querySelector('input[name=tipo]:checked').value; 
    
     return proyecto;

 }
    agregar(proyecto){
        this.arrayProyectos.push(proyecto);
             
}

validarcampo(proyecto){
    let ms ='';
if(proyecto.codigo == ''){
    ms += '-codigo del proyecto vacio \n'; 
}
if(proyecto.nombre == ''){
    ms += '-nombre del proyecto vacio \n'; 
}
if(proyecto.descrip == ''){
    ms += '-descripcion del proyecto vacio \n'; 
}
if(proyecto.fecha == ''){
    ms += '-fecha de inicio del proyecto vacio \n'; 
}

if(ms !=''){
    alert(ms);
    return false
}
return true
}

}

var proyecto = new Proyecto();
