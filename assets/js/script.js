import Mascota from "./Mascota.js";

const mascota = new Mascota("lolo", "piojos", 1, "juan", "chile", 545452);

const datosRecibidos = mascota.datosPropietario();
console.log(datosRecibidos);

mascota.enfermedad = "covid";

console.log(mascota.tipo);

console.log(mascota.enfermedad);

document.getElementById("add").addEventListener("click", (event) => {
  event.preventDefault();

  const valorPropietario = document.getElementById("propietario").value;
  const valorTelefono = document.getElementById("telefono").value;
  const valorDireccion = document.getElementById("direccion").value;
  const valorMascota = document.getElementById("nombreMascota").value;
  const valorEnfermedad = document.getElementById("enfermedad").value;
  const valorTipo = document.getElementById("tipo").value;

  let animal = null;
  if (valorTipo === "perro") {
    animal = new Mascota(
      valorMascota,
      valorEnfermedad,
      valorTipo,
      valorTelefono,
      valorDireccion,
      valorPropietario
    );
  } else if (valorTipo === "gato") {
    animal = new Mascota(
      valorMascota,
      valorEnfermedad,
      valorTipo,
      valorTelefono,
      valorDireccion,
      valorPropietario
    );
  } else if (valorTipo === "conejo") {
    animal = new Mascota(
      valorMascota,
      valorEnfermedad,
      valorTipo,
      valorTelefono,
      valorDireccion,
      valorPropietario
    );
  }

  document.getElementById("resultado").innerHTML = `
    <li>${animal.datosPropietario()} </li>
    <li>El tipo de animal es un: ${
      animal.tipo
    }, mientras que el nombre de la mascota es:${
    animal.nombre
  } y la enfermedad es: ${animal.enfermedad}</li>
    
    
    `;
});
