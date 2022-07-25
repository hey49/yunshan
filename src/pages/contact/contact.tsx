import React from 'react';
import { Divider } from 'antd';
import {
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
} from '@ant-design/icons';
import data from './data';
import logo from '../data/index/indexLogo.png';

const logoStyle = {
  width: '50px',
  margin: 'auto',
};

const qrStyle = {
  width: '200px',
};

const Contact = () => (
  <div style={{
    display: 'flex', flexDirection: 'column', width: '60%', margin: 'auto',
  }}
  >
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <img src={logo} style={{ width: '300px' }} />
    </div>
    <Divider style={{ color: '#8da745' }}>联系方式</Divider>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridRowGap: '10px' }}>
      <div style={{ textAlign: 'center', color: '#8da745' }}>
        <HomeOutlined />
        {' '}
        地址：
      </div>
      <div>云南省大理古城苍坪街56号床单厂艺术区C-2-2</div>
      <div style={{ textAlign: 'center', color: '#8da745' }}>
        <PhoneOutlined />
        {' '}
        电话：
      </div>
      <div>0872-2504186</div>
      <div style={{ textAlign: 'center', color: '#8da745' }}>
        <MailOutlined />
        {' '}
        邮箱：
      </div>
      <a href="mailto:info@cloudmountain.cn">info@cloudmountain.cn</a>
    </div>
    <Divider style={{ color: '#8da745' }}>关注我们</Divider>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gridRowGap: '10px' }}>
      <img src={data[0].wechat} style={logoStyle}></img>
      <img src={data[0].wechat_qr} style={qrStyle}></img>
      <img src={data[0].weibo} style={logoStyle}></img>
      <img src={data[0].weibo_qr} style={qrStyle}></img>
      <img src={data[0].tiktok} style={logoStyle}></img>
      <img src={data[0].tiktok_qr} style={qrStyle}></img>
      <img src={data[0].kuaishou} style={logoStyle}></img>
      <img src={data[0].kuaishou_qr} style={qrStyle}></img>
      <img src={data[0].bilibili} style={logoStyle}></img>
      <img src={data[0].bilibili_qr} style={qrStyle}></img>
    </div>
  </div>

);

export default Contact;
