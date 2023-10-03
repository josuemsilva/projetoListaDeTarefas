import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase_Connection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPaswword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    if (email !== "" && password !== "") {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/admin", { replace: true }))
        .catch(() => toast.error("Erro ao cadastrar"));
    } else {
      toast.error("Preencha todos os campos!");
    }
  }

  return (
    <div className="home-container">
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta!</span>

      <form className="form" onSubmit={handleRegister}>
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
        <button type="submit">Cadastrar</button>
      </form>
      <Link className="button-link" to="/">
        Já possui uma conta? Faça Login!
      </Link>
    </div>
  );
}
