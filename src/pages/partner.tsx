import partner from './data/partner.jpg';

const Partner = () => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <img
      src={partner}
      style={{
        width: '80%', height: '100%', margin: 'auto',
      }}
    />
  </div>
);

export default Partner;
