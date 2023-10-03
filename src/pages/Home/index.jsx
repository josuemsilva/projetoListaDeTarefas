import { useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase_Connection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/admin", { replace: true });
          toast.success("Bem vindo(a)!");
        })
        .catch((error) => {
          console.log(`Erro: ${error}`);
        });
    } else {
      toast.error("Preencha todos os campos!");
    }
  }

  return (
    <div className="home-container">
      <h1>Lista de Tarefas</h1>
      <span>Gerencia sua agenda de forma simples.</span>

      <form className="form" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="*****"
          value={password}
          onChange={(e) => setPaswword(e.target.value)}
        />
        <button type="submit">Acessar</button>
      </form>
      <Link className="button-link" to="/register">
        Não possui uma conta? Cadastre-se!
      </Link>
    </div>
  );
}
