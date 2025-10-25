import React from 'react';
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';
import './App.css';

function ConnectedAccount() {
  const account = useCurrentAccount();

  if (!account) return null;

  return <div className="connected">Connected to: {account.address}</div>;
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sui Wallet Connection Demo</h1>
        <ConnectButton />
      </header>

      <ConnectedAccount />
    </div>
  );
}


