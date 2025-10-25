import { OwnedObjects } from './components/OwnedObjects';

return (
  <div>
    <div>Connected to: {account.address}</div>
    <OwnedObjects address={account.address} />
  </div>
);
