import TicketList from './TicketList';
export default function Tickes() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickes</h2>
          <p>
            <small>Currently open tickets.</small>
          </p>
        </div>
      </nav>
      <TicketList />
    </main>
  );
}
