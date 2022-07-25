import React from 'react';
import { Timeline } from 'antd';
import data from './data';

const style = {
  width: '50px',
  height: '50px',
  backgroundColor: '#f39800',
  fontSize: '12px',
  borderRadius: '50%',
  textAlign: 'center',
  lineHeight: '50px',
  color: 'white',
};

const TimeLine = () => (
  <>
    <div style={{ color: '#8da745', textAlign: 'center', fontSize: '50px', marginTop: '20px' }}>
      <strong>云山大事记</strong>
    </div>
    <div style={{ width: '60%', margin: 'auto', marginTop: '50px' }}>
      <Timeline mode="alternate" reverse>
        {data.map((item) => (
          <Timeline.Item dot={<div style={style}>{item.time}</div>}>
            <div style={{ margin: '20px' }}>{item.text}</div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  </>
);

export default TimeLine;
