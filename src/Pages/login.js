import "./style.scss";
import { Button, Input } from "../Components";

export function Login() {
  return (
    <div className="center background-color">
      <main className="form-container">
        <div className="brand-logo">
          <img className="logo-image" src="/logo192.png" alt="logo" />
          <h1>OneProfile</h1>
        </div>
        <div className="login-content">
          <Input />
          <div>
            <Button />
          </div>
        </div>
      </main>
    </div>
  );
}
