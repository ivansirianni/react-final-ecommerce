import { useState, useEffect } from "react";
import "../../index.css";

export default function Greeting() {
	const [person, setPerson] = useState("...");

	useEffect(() => {
		setPerson("Usuario"); //En el futuro esto debiera identificar al Usuario
	}, []);

	return (
		<>
			<div className="display-1--description">Hola {person}</div>
			<div className="display-1--subtitle">Odontología de Excelencia</div>
			<hr />
			<div className="display-1--subtitle">
				Seleccione el Menú "SERVICIOS" para ver las Cards.
			</div>
			<div className="display-1--subtitle">
				Seleccione el ícono "🛒" para ver el Carrito de Compras.
			</div>
			<hr />
			<div className="display-1--description">
				Brindamos soluciones integrales en estética dental, blanqueamiento,
				endodoncia, odontología general, ortodoncia y prótesis.
			</div>
			<div className="display-1--description">
				Nuestra principal misión es la prevención de las enfermedades orales, y
				darles un tratamiento duradero y conservador.
			</div>
			<div className="display-1--description">
				En Portas Esquivel & Asociados disponemos de todos los medios técnicos y
				humanos para corregir problemas de asimetría, separación de dientes,
				realizamos todos los tratamientos de estética dental más habituales.
			</div>
			<div className="display-1--description">
				En nuestra clínica desarrollamos todos los tratamientos necesarios para
				conservar la propia pieza dental, siempre que sea posible, ya que
				pretendemos dar la mejor solución a cada caso que se presenta para poder
				disfrutar de una masticación adecuada. Para ello contamos con un equipo
				especializado que aseguran una correcta fijación y poder devolver la
				función masticatoria.
			</div>
		</>
	);
}
