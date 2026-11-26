
import { Link, useNavigate } from "react-router";
import "../Login.css";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <main className="login-page">
      <div className="login-card">

        <Link to="/" className="login-logo">
          Find<span>IT</span>
        </Link>

        <p className="login-subtitle">
          CBTis 122 · Programación
        </p>

        <h1>Iniciar sesión</h1>

        <p className="login-description">
          Bienvenido de nuevo. Ingresa tus datos
          para explorar el panel de FindIT.
        </p>

        <form
          onSubmit={handleSubmit}
          className="login-form"
        >
          <label>
            Correo electrónico

            <input
              type="email"
              placeholder="alumno@ejemplo.com"
            />
          </label>

          <label>
            Contraseña

            <input
              type="password"
              placeholder="Ingresa tu contraseña"
            />
          </label>

          <button type="submit">
            Entrar al Dashboard →
          </button>
        </form>

        <Link to="/" className="login-back">
          ← Volver al inicio
        </Link>

      </div>
    </main>
  );
}

