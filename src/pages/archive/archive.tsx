import React from 'react';
import {
  Tabs, Row, Col, Divider, Carousel, Descriptions, Typography, Button
} from 'antd';
import { SoundOutlined, PauseOutlined } from '@ant-design/icons';
import data from './data';

const { TabPane } = Tabs;

const descItemStyle = {
  color: '#8da745',
};

const { Item } = Descriptions;
const { Text, Title } = Typography;
const Archive = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  const callback = (key) => {
    data[selected].audio.pause();
    console.log(key);
    setSelected(parseInt(key));
    setIsPlaying(false);
  }
  return(
  <Tabs onChange={callback} type="card" centered style={{ margin: '20px' }}>
    {data.map((item, index) => (
      <TabPane tab={item.name} key={index}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            type="primary"
            style={{ marginTop: 10 }}
            onClick={() => {
              isPlaying ? item.audio.pause() : item.audio.play();
              setIsPlaying(!isPlaying);
            }}
            icon={isPlaying ? <PauseOutlined /> : <SoundOutlined />}
          />
          <div style={{
            minWidth: '400px', width: '400px', height: '500px', backgroundColor: 'lightGrey', margin: '10px',
          }}
          >
            <Carousel autoplay>
              <div>
                <img src={item.images[0]} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <img src={item.images[1]} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
              </div>
            </Carousel>
          </div>
          <div style={{
            minWidth: '400px', width: '400px', backgroundColor: 'lightGrey', margin: '10px',
          }}
          >
            <Descriptions title={item.name} column={1}>
              <Item label={<div style={descItemStyle}>学名</div>}>
                <i>{item.latin}</i>
              </Item>
              <Item label={<div style={descItemStyle}>分类</div>}>
                <Text>{item.classification.family}</Text>
                <Text>科_</Text>
                <Text>{item.classification.genus}</Text>
                <Text>属</Text>
              </Item>
              <Item label={<div style={descItemStyle}>体型</div>}>
                <p>{`体重：${item.body.weight}kg`}</p>
                <p>{`体长：${item.body.height}cm`}</p>
              </Item>
              <Item label={<div style={descItemStyle}>IUCN等级</div>}>
                {item.IUCN}
              </Item>
              <Item label={<div style={descItemStyle}>中国保护级别</div>}>
                {item.chineseLevel}
              </Item>
              <Item label={<div style={descItemStyle}>分布</div>}>
                {item.distribution}
              </Item>
              <Item label={<div style={descItemStyle}>数量</div>}>
                {item.amount}
              </Item>
              <Item label={<div style={descItemStyle}>特征</div>}>
                {item.feature}
              </Item>
            </Descriptions>
          </div>
        </div>
      </TabPane>
    ))}
  </Tabs>
)};

export default Archive;
