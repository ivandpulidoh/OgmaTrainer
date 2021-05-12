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

