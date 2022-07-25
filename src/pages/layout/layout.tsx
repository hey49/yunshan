import { IntlProvider } from 'react-intl';
import zhCN from '@/locale/zh-CN';
import enUS from '@/locale/en-US';
import React from 'react';
import Footer from './footer';
import ResponsiveAppBar from './header';

const BasicLayout = (props) => {
  // console.log(props); // routes component
  const messages = {
    'zh-CN': zhCN,
    'en-US': enUS,
  };
  const [intl, setIntl] = React.useState('zh-CN');
  const SwitchZhButton = (
    <div onClick={() => setIntl('en-US')} style={{ userSelect: 'none', cursor: 'pointer' }}>
      EN
    </div>
  );
  const SwitchEnButton = (
    <div onClick={() => setIntl('zh-CN')} style={{ userSelect: 'none', cursor: 'pointer' }}>
      中文
    </div>
  );

  return (
    <IntlProvider messages={messages[intl]} locale={intl}>
      <div>
        <ResponsiveAppBar switchButton={intl === 'zh-CN' ? SwitchZhButton : SwitchEnButton} />
      </div>
      <div>{props.children}</div>
      <div><Footer /></div>
    </IntlProvider>
  );
};

export default BasicLayout; // imported by umirc.ts
