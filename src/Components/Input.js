export const Input = () => {
  return (
    <div>
      <h3 className="form-input-header">Login/Signup</h3>
      <input
        type="input"
        class="form-input"
        placeholder="john.doe@email.com"
        name="name"
        id="email"
        required
      />
    </div>
  );
};
