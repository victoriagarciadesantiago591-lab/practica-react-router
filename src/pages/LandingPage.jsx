import { Link } from "react-router";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="findit-home">
      <header className="fi-header">
        <Link to="/" className="fi-logo" aria-label="FindIT, inicio">
          Find<span>IT</span>
        </Link>

        <nav className="fi-nav" aria-label="Navegación principal">
          <Link to="/quienes-somos">Quiénes somos</Link>
          <Link to="/login" className="fi-nav-login">Iniciar sesión</Link>
        </nav>
      </header>

      <main className="fi-main">
        <section className="fi-welcome" aria-labelledby="fi-title">
          <p className="fi-school">CBTis 122 · Programación</p>
          <h1 id="fi-title">
            Bienvenido a <strong>Find<span>IT</span></strong>
          </h1>
          <p className="fi-intro">
            Explora el proyecto de nuestro equipo y entra al panel
            para ver FindIT en acción.
          </p>
          <Link to="/login" className="fi-button">
            Entrar a FindIT <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="fi-access" aria-labelledby="fi-demo-title">
  <h2 id="fi-demo-title">¿Cómo pruebo FindIT?</h2>

  <p className="text-lg leading-relaxed text-slate-100">
    Selecciona <strong>Entrar a FindIT</strong> y después
    pulsa <strong>Entrar al Dashboard</strong> en el formulario.
  </p>

  <p className="leading-relaxed text-slate-300">
    Esta versión es una demostración escolar. Puedes dejar vacíos
    los campos de correo y contraseña para explorar el panel.
  </p>
</section>
      </main>

      <footer className="fi-footer">
        <span>FindIT · CBTis 122</span>
        <nav aria-label="Información del proyecto">
          <Link to="/terminos">Términos</Link>
          <Link to="/condiciones">Condiciones</Link>
        </nav>
      </footer>
    </div>
  );
}