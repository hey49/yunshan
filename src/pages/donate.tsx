import donate from './data/donate.jpg';

const Donate = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img
      src={donate}
      style={{
        width: '80%', height: '100%', margin: 'auto',
      }}
    />
  </div>
);

export default Donate;