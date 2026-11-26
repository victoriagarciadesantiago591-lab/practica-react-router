import { Link } from "react-router";

export default function Condiciones() {
  return (
    <main className="findit-tarjeta">
      <h1 className="text-4xl font-bold">Condiciones del servicio</h1>
      <p className="mt-5 text-lg text-slate-700">
        FindIT está en fase de prototipo. En esta versión puedes explorar
        las pantallas y entrar al panel de demostración. El formulario
        permite el acceso sin verificar una cuenta.
      </p>
      <Link to="/" className="mt-8 inline-block text-indigo-700 hover:underline">
        ← Volver al inicio
      </Link>
    </main>
  );
}