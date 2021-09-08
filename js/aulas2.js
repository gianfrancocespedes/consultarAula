const btn_group = document.querySelectorAll(".btn-piso");
const pisos = document.querySelectorAll(".piso");
const btn_aula = document.querySelector(".aulas-alumno>button");
const aulas = document.querySelectorAll(".contenedor-aulas");
const aulasAlumno = ["311", "310", "211", "110", "311n", "112n"];

const piso = document.querySelector(".section-aulas");
// console.log(btn_group);
// console.log(pisos);
// console.log(btn_aula);
// console.log(aulas);
btn_group.forEach((cadaLi, i) => {
  btn_group[i].addEventListener("click", () => {
    // console.log("click");
    btn_group.forEach((cadaLi, i) => {
      btn_group[i].classList.remove("activo-btn");
      pisos[i].classList.remove("activo-piso");
    });

    btn_group[i].classList.add("activo-btn");
    pisos[i].classList.add("activo-piso");
  });
});
btn_aula.addEventListener("click", () => {
  if (!btn_aula.classList.contains("activo-btn-aula")) {
    // console.log("click aula");
    //   buscarAula();
    aulas.forEach((aula) => {
      aula.childNodes.forEach((salon) => {
        //   console.log(salon.innerText);
        buscarAula(salon, aulasAlumno);
      });
    });
    btn_aula.classList.add("activo-btn-aula");
  } else {
    btn_aula.classList.remove("activo-btn-aula");
    aulas.forEach((aula) => {
      aula.childNodes.forEach((salon) => {
        //   console.log(salon.innerText);
        limpiarAula(salon, aulasAlumno);
      });
    });
  }
});
const buscarAula = (aula, aulasAlumno) => {
  aulasAlumno.forEach((aulaAlumno) => {
    if (aula.innerText == aulaAlumno) {
      // console.log(aula.innerText);
      // console.log("obtenido");
      aula.classList.add("activo-btn-aula");
    }
  });
};
const limpiarAula = (aula, aulasAlumno) => {
  aulasAlumno.forEach((aulaAlumno) => {
    if (aula.innerText == aulaAlumno) {
      // console.log(aula.innerText);
      // console.log("obtenido");
      aula.classList.remove("activo-btn-aula");
    }
  });
};
// modal
// if (document.getElementById("btnModal")) {
//   var modal = document.getElementById("tvesModal");
//   var btnModal = document.getElementById("btnModal");
//   var span = document.getElementsByClassName("close")[0];
//   var body = document.getElementsByTagName("body")[0];

//   btnModal.onclick = function () {
//     modal.style.display = "block";

//     body.style.position = "static";
//     body.style.height = "100%";
//     body.style.overflow = "hidden";
//   };

//   span.onclick = function () {
//     modal.style.display = "none";

//     body.style.position = "inherit";
//     body.style.height = "auto";
//     body.style.overflow = "visible";
//   };

//   window.onclick = function (event) {
//     if (event.target == modal) {
//       modal.style.display = "none";

//       body.style.position = "inherit";
//       body.style.height = "auto";
//       body.style.overflow = "visible";
//     }
//   };
// }
aulas.forEach((aula) => {
  aula.childNodes.forEach((salon) => {
    salon.addEventListener("click", () => {
      // console.log(salon.innerText);
      const filtrado = aulasInfo.filter(
        (aula) => aula.nombre == salon.innerText
      );
      // console.log(filtrado[0].cursos);
      generarModal(salon.innerText, filtrado[0].cursos);
    });
  });
});

const generarModal = (nombreSalon, cursos) => {
  const div = document.createElement("div");
  const divContent = document.createElement("div");
  const btnDelete = document.createElement("span");
  const divContentCursos = document.createElement("div");
  btnDelete.classList.add("close");
  btnDelete.innerHTML = "x";
  btnDelete.addEventListener("click", () => {
    div.remove();
  });
  divContent.classList.add("modal-content");
  div.classList.add("modalContainer");
  const p = document.createElement("p");
  p.innerHTML = `Salon : ${nombreSalon}`;
  divContent.appendChild(btnDelete);

  divContent.appendChild(p);
  cursos.map((curso) => {
    const pCurso = document.createElement("p");
    pCurso.innerHTML = `${curso.curso} ${curso.dia} ${curso.horario}`;
    divContentCursos.appendChild(pCurso);
  });
  // console.log(div);
  divContent.appendChild(divContentCursos);
  div.appendChild(divContent);

  piso.appendChild(div);
};
