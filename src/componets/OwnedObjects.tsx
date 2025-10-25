import { useSuiClientQuery } from '@mysten/dapp-kit';

export function OwnedObjects({ address }: { address: string }) {
  const { data } = useSuiClientQuery('getOwnedObjects', { owner: address });

  if (!data) return <div>Loading objects...</div>;

  return (
    <ul>
      {data.data.map((obj) => (
        <li key={obj.data?.objectId}>
          <a
            href={`https://suiexplorer.com/object/${obj.data?.objectId}?network=devnet`}
            target="_blank"
            rel="noreferrer"
          >
            {obj.data?.objectId}
          </a>
        </li>
      ))}
    </ul>
  );
}
