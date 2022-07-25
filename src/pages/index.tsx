/* eslint-disable max-len */
import { Carousel } from 'antd';
import React from 'react';
import Box from '@mui/material/Box';
import indexLogo from '../data/index/indexLogo.png';
import slide1 from './data/index/slide1.png';
import slide2 from './data/index/slide2.jpg';
import slide3 from './data/index/slide3.jpg';

const contentStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
};

const Index = () => (
  <>
    <div>
      <Carousel autoplay>
        <div>
          <img src={slide1} style={contentStyle} />
        </div>
        <div>
          <img src={slide2} style={contentStyle} />
        </div>
        <div>
          <img src={slide3} style={contentStyle} />
        </div>
      </Carousel>
    </div>
    <Box sx={{ margin: '20px', padding: { xs: '20px 100px', md: '20px 200px' } }}>
      <h2 style={{ textAlign: 'center', color: '#8da745' }}>我们是谁</h2>
      <p>
        云山保护（Cloud Mountain Conservation），全称大理白族自治州生物多样性保护与研究中心，于2015年6月在大理州民政局注册成立，是一个专注于抢救性地研究和保护中国西南地区生物多样性的民间公益组织。
        云山保护的创始人是一群志同道合的朋友，拥有着丰富的野生动物研究与保护经验，其中既有曾长期在国际保护组织从事濒危野生动植物保护的项目负责人，也有专业的兽类学家、鸟类学家，以及知名的野生动物摄影师和自然教育导师。
      </p>
      <h2 style={{ textAlign: 'center', color: '#8da745' }}>成立初衷</h2>
      <p>
        云南及其周边地区是全球生物多样性最富集的地区之一，仅云南省就有15种灵长类（约占中国灵长类的57%），960多种鸟类（约占中国鸟类的2/3）和18000多种高等植物(约占中国总数的60%)，其中很多为特有种和濒危种。但云南少数民族众多，很多地区经济发展水平仍十分落后，生存和发展严重依赖着对自然资源的损耗，尤其在人口扩张的压力下，野生动物丧失了大面积的栖息地，还有不少珍稀的野生动物死于盗猎者的枪口，种群数量急剧减少。人在进，动物在退，我们希望减缓甚至阻止人向自然侵入的步伐，留住野生动植物，也留住它们的家。
        <br />
        中国的西南山地是生物多样性最为丰富和独特的地区之一，在过去5年中，科学家在滇西北和藏东南先后发现了怒江金丝猴和白颊猕猴两种大型灵长类，说明我们对这一地区的生物多样性的调查还远远不够。与此同时，有更多物种在还没有被发现或者了解清楚之前就消失在人类的视野，中国的6种长臂猿其中有两种（白掌长臂猿和北白颊长臂猿）已经在野外功能性灭绝。这对于我们从事保护和科研的人而言既是挑战也是机遇，于是我们成立了云山保护，希望以保护长臂猿和其它灵长类旗舰物种为突破口，进而保护生物多样性最为丰富的西南森林生态系统，促进人与自然和谐共存。
      </p>
      <h2 style={{ textAlign: 'center', color: '#8da745' }}>我们的使命</h2>
      <p>通过系统的调查、专业的科学研究和科普教育，抢救性的研究和保护中国西南地区的生物多样性，同时促进当地社区的可持续发展。</p>
    </Box>
  </>
);

export default Index;
