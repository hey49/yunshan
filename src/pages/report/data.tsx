import r2017ac from '../data/reports/r2017ac.jpeg';
import r2018se2 from '../data/reports/r2018se2.jpg';
import r2018se3 from '../data/reports/r2018se3.jpg';
import r2018se4 from '../data/reports/r2018se4.jpg';
import r2018ac from '../data/reports/r2018ac.jpeg';
import r2019se1 from '../data/reports/r2019se1.jpg';
import r2019se2 from '../data/reports/r2019se2.jpg';
import r2019se3 from '../data/reports/r2019se3.jpg';
import r2019se4 from '../data/reports/r2019se4.jpg';
import r2019ac from '../data/reports/r2019ac.jpeg';
import r2020se1 from '../data/reports/r2020se1.png';
import r2020se2 from '../data/reports/r2020se2.jpg';
import r2020se3 from '../data/reports/r2020se3.jpeg';
import r2020se4 from '../data/reports/r2020se4.jpeg';
import r2020ac from '../data/reports/r2020ac.png';
import r2017a from '../data/reports/r2017a.pdf';
import r2018a from '../data/reports/r2018a.pdf';
import r2019a from '../data/reports/r2019a.pdf';
import r2020a from '../data/reports/r2020a.pdf';

const data = [
  {
    isAnnual: true,
    name: '2017年',
    sm: '2017',
    src: r2017ac,
    href: r2017a,
    down: '云山保护2017年年报.pdf',
    category: [
      '卷首语',
      '2017大事记',
      '物种研究',
      '保护行动',
      '链接公众',
      '媒体传播',
      '机构与成长',
      '财务报告',
      '致谢',
    ],
  },
  {
    isAnnual: false,
    name: '2018年-第二季度',
    sm: '2018-2',
    src: r2018se2,
    href: r2018se2,
    down: '云山保护2018第二季度季报.jpg',
    category: [
      '长臂猿种群保护与管理国际研讨会',
      '科研检测',
      '保山高黎贡白眉长臂猿保护实施方案',
      '六一宣传活动',
      '时间线记事',
    ],
  },
  {
    isAnnual: false,
    name: '2018年-第三季度',
    sm: '2018-3',
    src: r2018se3,
    href: r2018se3,
    down: '云山保护2018第三季度季报.jpg',
    category: ['反盗猎宣传', '生物多样性嘉年华', '99公益日', '时间线记事'],
  },
  {
    isAnnual: false,
    name: '2018年-第四季度',
    sm: '2018-4',
    src: r2018se4,
    href: r2018se4,
    down: '云山保护2018第四季度季报.jpg',
    category: [
      '劲草生物多样性嘉年华大理大学站',
      '板厂基地第一任站长任职',
      '长臂猿日主题科普游园活动',
      '腾冲长臂猿种群大调查',
      '“认识家乡的长臂猿"科普进校园活动',
      '云山记事',
    ],
  },
  {
    isAnnual: true,
    name: '2018年',
    sm: '2018',
    src: r2018ac,
    href: r2018a,
    down: '云山保护2018年年报.pdf',
    category: [
      '卷首语',
      '2018年云山保护大事记',
      '保护和科研行动',
      '板厂保护与科研基地',
      '保护科普宣传',
      '传播与筹款',
      '机构与成长',
      '财务披露',
      '致谢',
    ],
  },
  {
    isAnnual: false,
    name: '2019年-第一季度',
    sm: '2019-1',
    src: r2019se1,
    href: r2019se1,
    down: '云山保护2019第一季度季报.jpg',
    category: [
      '云端护猿基地三方共建共管协议签订',
      '保山昌宁县绿孔雀物种考察',
      '西双版纳野象谷和易武保护区考察',
      '“认识家乡的长臂猿"宣传活动',
      '遗传多样性研究外业工作',
      '云山记事',
    ],
  },
  {
    isAnnual: false,
    name: '2019年-第二季度',
    sm: '2019-2',
    src: r2019se2,
    href: r2019se2,
    down: '云山保护2019第二季度季报.jpg',
    category: [
      '云端护猿基地',
      '哀牢山、无量山科普进校园活动',
      '盈江长臂猿群体调研',
      '西黑冠长臂猿小使者选拔与培训',
      '云山保护成立四周年啦',
      '筹款活动',
      '云山记事',
    ],
  },
  {
    isAnnual: false,
    name: '2019年-第三季度',
    sm: '2019-3',
    src: r2019se3,
    href: r2019se3,
    down: '云山保护2019第三季度季报.jpg',
    category: [
      '云端护猿基地',
      '长臂猿栖息地野外工作与社区工作',
      '自然科考营期',
      '2019年国际长臂猿日系列活动',
      '宣传保护工作',
      '筹款、交流与收获',
      '暑期实习生、研修生和志愿者的精彩付出',
      '云山记事',
    ],
  },
  {
    isAnnual: false,
    name: '2019年-第四季度',
    sm: '2019-4',
    src: r2019se4,
    href: r2019se4,
    down: '云山保护2019第四季度季报.jpg',
    category: [
      '板厂片区猿口大调查',
      '长臂猿栖息地社区调查',
      '盈江苏典长臂猿栖息地调查',
      '2019年国际长臂猿日系列活动',
      '空缺调查',
      '云山记事',
    ],
  },
  {
    isAnnual: true,
    name: '2019年',
    sm: '2019',
    src: r2019ac,
    href: r2019a,
    down: '云山保护2019年年报.pdf',
    category: [
      '卷首语',
      '云山的2020',
      '我们的保护工作',
      '传播与筹款工作',
      '财务披露',
      '2019大事记',
      '致谢',
    ],
  },
  {
    isAnnual: false,
    name: '2020年-第一季度',
    sm: '2020-1',
    src: r2020se1,
    href: r2020se1,
    down: '云山保护2020第一季度季报.png',
    category: [
      '云端护猿基地',
      '云山未来讨论会',
      '长臂猿栖息地社区调查',
      '空缺调查',
      '2019年报出炉',
      '云山记事',
    ],
  },
  {
    isAnnual: false,
    name: '2020年-第二季度',
    sm: '2020-2',
    src: r2020se2,
    href: r2020se2,
    down: '云山保护2020第二季度季报.png',
    category: [
      '《天行情歌》首发',
      '云山保护五周年啦',
      '云端护猿基地',
      '苏典乡土自然教育考察',
      '《德宏高黎贡白眉长臂猿保护合作框架协议》',
      '云山记事',
    ],
  },
  {
    isAnnual: false,
    name: '2020年-第三季度',
    sm: '2020-3',
    src: r2020se3,
    href: r2020se3,
    down: '云山保护2020第三季度季报.jpeg',
    category: [
      '99公益日筹款',
      '暑期实习生高质量完成工作',
      '社区保护行动',
      '云端护猿基地第三季度工作',
      '保护联动：红外相机检测培训',
      '和视频博主"Alex绝对是个妞儿"梦幻联动',
      '长臂猿种群调查',
      '长臂猿空缺调查',
    ],
  },
  {
    isAnnual: false,
    name: '2020年-第四季度',
    sm: '2020-4',
    src: r2020se4,
    href: r2020se4,
    down: '云山保护2020第四季度季报.jpeg',
    category: [
      '11月西黑冠长臂猿大调查',
      '1024国际长臂猿日',
      '社区自然教育',
      '板厂三方共建共管总结交流会',
      '月捐上线',
    ],
  },
  {
    isAnnual: true,
    name: '2020年',
    sm: '2020',
    src: r2020ac,
    href: r2020a,
    down: '云山保护2020年年报.pdf',
    category: [
      '机构大事记',
      '机构开通月捐',
      '暂别高黎贡山，暂别云山，我的2020年',
      '长臂猿保护的力量感',
      '自然教育，和小孩一起玩家乡',
      '社区工作，重新思考人的位置',
      '空缺调查，聆听山林 确保我们不曾留下可能的遗憾',
      '传播，云山核心的价值观实践',
      '实习生和志愿者说',
    ],
  },
];

export default data;
