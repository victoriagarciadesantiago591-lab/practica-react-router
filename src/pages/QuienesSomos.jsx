import { Link } from "react-router";

export default function QuienesSomos() {
  return (
    <main className="findit-tarjeta">
      <p className="font-semibold text-indigo-700">FindIT</p>
      <h1 className="mt-2 text-4xl font-bold">Quiénes somos</h1>

      <p className="mt-5 text-lg text-slate-700">
        Somos estudiantes de Programación del CBTis 122 y formamos
        el equipo de FindIT. Desarrollamos este proyecto como parte
        de nuestra formación en aplicaciones web.
      </p>

      <Link
        to="/"
        className="mt-8 inline-block font-semibold text-indigo-700 hover:underline"
      >
        ← Volver al inicio
      </Link>
    </main>
  );
}