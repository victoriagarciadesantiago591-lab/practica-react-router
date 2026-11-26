import { Link } from "react-router";

export default function Terminos() {
  return (
    <main className="findit-tarjeta">
      <h1 className="text-4xl font-bold">Términos de uso</h1>
      <p className="mt-5 text-lg text-slate-700">
        FindIT es un proyecto escolar del CBTis 122. Al utilizarlo,
        te pedimos respetar la privacidad de tus compañeros y evitar
        compartir datos personales de otras personas.
      </p>
      <Link to="/" className="mt-8 inline-block text-indigo-700 hover:underline">
        ← Volver al inicio
      </Link>
    </main>
  );
}