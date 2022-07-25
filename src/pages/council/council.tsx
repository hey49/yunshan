import React from 'react';
import { Avatar, Image } from 'antd';
import data from './data';

const Council = () => (
  <div style={{ width: '60%', margin: 'auto', marginTop: '20px' }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gridRowGap: '20px',
      gridColumnGap: '100px',
    }}
    >
      {data.map((item) => (
        <div style={{ height: '200px' }}>
          <Avatar src={<Image src={item.avatar} />} style={{ width: '64px', height: '64px' }} />
          <div>{item.position}</div>
          <div style={{ color: '#8da745' }}>
            <strong>{item.name}</strong>
          </div>
          <div>{item.desc}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Council;
