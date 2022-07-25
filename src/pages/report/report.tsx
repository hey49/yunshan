import { flexbox } from '@mui/system';
import { Slider, Affix } from 'antd';
import React from 'react';
import data from './data';

const style = {
  display: 'inline-block',
  height: 500,
  marginLeft: 70,
  width: 200,
  position: 'fixed',
};

const marks = {};
data.forEach((item, index) => {
  marks[index] = {
    style: { marginTop: '-7px' },
    label:
  <div
    style={{
      color: item.isAnnual ? '#8da745' : 'black',
      fontWeight: item.isAnnual ? 'bold' : 'normal',
    }}
  >
    {item.name}

  </div>,
  };
});

const Report = () => {
  const [selected, setSelected] = React.useState(0);
  const Reports = data.map((item) => (
    <div style={{ width: '50%' }}>
      <a href={item.href}>
        <img src={item.src} style={{ width: '100%' }}/>
      </a>
    </div>
  ));
  return (
    <div>
      <div style={style}>
        <Slider
          vertical
          marks={marks}
          step={1}
          max={data.length - 1}
          tooltipVisible={false}
          dots
          reverse
          onChange={(value) => setSelected(value)}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>{Reports[selected]}</div>
    </div>
  );
};

export default Report;
