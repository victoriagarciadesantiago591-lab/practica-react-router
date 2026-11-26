import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="findit-tarjeta">
      <p className="font-semibold text-indigo-700">Error 404</p>
      <h1 className="mt-2 text-4xl font-bold">Página no encontrada</h1>
      <p className="mt-5 text-lg text-slate-700">
        Esta dirección no existe en FindIT. Puedes volver al inicio
        para continuar.
      </p>
      <Link to="/" className="mt-8 inline-block text-indigo-700 hover:underline">
        ← Volver al inicio
      </Link>
    </main>
  );
}