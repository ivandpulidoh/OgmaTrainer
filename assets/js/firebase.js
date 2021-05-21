var config = {
    apiKey: "AIzaSyBRs846iyIj93HigIZNbXP5wd4vFjbk7TE",
    authDomain: "ecommerce-1e538.firebaseapp.com",
    databaseURL: "https://ecommerce-1e538-default-rtdb.firebaseio.com",
    projectId: "ecommerce-1e538",
    storageBucket: "ecommerce-1e538.appspot.com",
    messagingSenderId: "983938932323",
    appId: "1:983938932323:web:6e4f9c8471209d0376a256",
    measurementId: "G-0NQQ2NMHBR"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  firebase.analytics();


  let db = firebase.firestore();

  const SaveMachine = (maquina) =>{     

      db.collection("maquinas").add({
        maquina
        })
      .then((docRef) => {
        MJSOK();
      })
      .catch((error) => {
        MJSERROR();
      });

  }


  const MJSOK =()=>{
    Swal.fire(
        'Existoso!!',
        'Datos guardados correctamente',
        'success'         
      )
  }

  const MJSERROR =()=>{
    Swal.fire(
        'ops!!',
        'los datos no fueron guardados',
        'error'
      )
  }


  $("#btn_save").on('click',()=>{
    let nombre = $("#nombreM").val();
    let fabricante = $("#fabricanteM").val();
    let esNueva = $("#esNuevaM").val();
    let cantidad = $("#cantidadM").val();
    let descripcion = $("#descripcionM").val();
    let img = $("#linkImgM").val();    

    console.log(nombre,fabricante,esNueva);
    const machine ={
      nombre,
      fabricante,
      esNueva,
      cantidad,
      descripcion,
      img
    }

    SaveMachine(machine);
  })
  

  //llenar la lista desplegable

  var selected_item = document.getElementById('catalogo-maquinas');//Se llama el selected
  selected_item.innerHTML = '';
  selected_item.innerHTML += `
          <option value="0" selected>Seleccione</option>
          ` //Agrego un option por default
  db.collection("maquinas").onSnapshot((querySnapshot) => { //Se llaman los datos
          querySnapshot.forEach((doc) => {                    
          $("#catalogo-maquinas").find("option[value='"+`${doc.id}`+"']").remove();                    
          selected_item.innerHTML += `
          <option value="${doc.id}">${doc.data().maquina.nombre}</option> . 
          ` //Aquí agrego los options de acuerdo a la base de datos.          
          console.log(`${doc.data().maquina.nombre}`);
      });
      console.log('catalogo agregado correctamente');
  });
