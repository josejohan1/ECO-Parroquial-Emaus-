// Configuración de Firebase para la app ECO.
// Mientras esto diga "null", la app funciona sola en cada teléfono, sin inicio de sesión.
// Cuando termines la GUIA-FIREBASE, reemplaza null por los datos de tu proyecto, por ejemplo:
//
// window.ECO_FIREBASE = {
//   apiKey: "AIza...",
//   authDomain: "tu-proyecto.firebaseapp.com",
//   projectId: "tu-proyecto",
//   storageBucket: "tu-proyecto.appspot.com",
//   messagingSenderId: "123456789",
//   appId: "1:123456789:web:abc123"
// };
//
// Estos datos no son secretos. Quien protege la información son las reglas de seguridad (firestore.rules).
window.ECO_FIREBASE = {
  apiKey: "AIzaSyB83whDOYLuX_-CiIgGTMCNhzGPxwmXSyA",
  authDomain: "eco-emaus-fd0a3.firebaseapp.com",
  projectId: "eco-emaus-fd0a3",
  storageBucket: "eco-emaus-fd0a3.firebasestorage.app",
  messagingSenderId: "756686660050",
  appId: "1:756686660050:web:0fec51a722af2ca93ce80b"
};

// Calendario de la parroquia (Google Calendar público, solo lectura).
// Cuando termines la GUIA-CALENDARIO-PARROQUIA, pega aquí tu llave, por ejemplo:
// window.ECO_GCAL = { apiKey: "AIza..." };
// El calendario ya está puesto (office.admin@stmichaelnetcong.org). La llave no da acceso a nada privado.
window.ECO_GCAL = { apiKey: "AIzaSyB3rKzB1kmw0ZMAp4SI26iKAVZwqZDWNGg" };
