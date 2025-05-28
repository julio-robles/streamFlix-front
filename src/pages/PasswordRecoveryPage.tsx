import React, { useState } from 'react';

const PasswordRecoveryPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recovering password for', email);
  };

  return (
    <div className="password-recovery-page">
      <h1>Recover Password</h1>
      <form onSubmit={handlePasswordRecovery}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Recover Password</button>
      </form>
    </div>
  );
};

export default PasswordRecoveryPage;
