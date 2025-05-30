import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'autogenerated',
      dirName: 'docs',
    },
  ],
  enDocs: [
    {
      type: 'link',
      href: '/docs/learning_resources',
      label: '返回中文文档 ↗️',
    },
    {
      type: 'autogenerated',
      dirName: 'en',
    },
  ],
  contests: [
    {
      type: 'autogenerated',
      dirName: 'contests',
    },
  ],
};

export default sidebars;