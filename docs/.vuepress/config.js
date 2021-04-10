module.exports = {
  base: '/',
  title: '深入理解 TypeScript',
  description: 'TypeScript Deep Dive 中文版',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  plugins: [
    // '@vuepress/pwa',
    '@vuepress/back-to-top',
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-106861408-1', // UA-00000000-0
      },
    ],
    // require('./plugins/toc'),
  ],
  // theme: [],
  themeConfig: {
    repo: 'Jesonhu/typescript-book-chinese',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑此页',
    sidebarDepth: 4, // 0 禁用内容标题生成的菜单
    smoothScroll: true,
    activeHeaderLinks: false,
    lastUpdated: '上次更新',
    // algolia: {
    //   apiKey: 'fd0efd57c48824ceb1bcfa9690dba5b0',
    //   indexName: 'jkchao_typescript'
    // },
    nav: [],
    sidebar: [
      {
        title: '写在前面',
        collapsable: false,
        children: ['/'],
      },
      {
        title: 'TypeScript 项目',
        collapsable: false,
        children: [
          '/project/compilationContext',
          '/project/declarationspaces',
          '/project/modules',
          '/project/namespaces',
          '/project/dynamicImportExpressions',
        ],
      },
      {
        title: 'TypeScript 类型系统',
        collapsable: false,
        children: [
          '/typings/overview',
          '/typings/migrating',
          '/typings/types',
          '/typings/ambient',
          '/typings/interfaces',
          '/typings/enums',
          '/typings/lib',
          '/typings/functions',
          '/typings/callable',
          '/typings/typeAssertion',
          '/typings/freshness',
          '/typings/typeGuard',
          '/typings/literals',
          '/typings/readonly',
          '/typings/generices',
          '/typings/typeInference',
          '/typings/typeCompatibility',
          '/typings/neverType',
          '/typings/discrominatedUnion',
          '/typings/indexSignatures',
          '/typings/movingTypes',
          '/typings/exceptionsHanding',
          '/typings/mixins',
          '/typings/thisType',
        ],
      },
      {
        title: 'JSX',
        collapsable: false,
        children: ['/jsx/support', '/jsx/reactJSX', '/jsx/nonReactJSX'],
      },
      {
        title: 'TypeScript 错误提示',
        collapsable: false,
        children: ['/error/interpreting', '/error/common'],
      },
      {
        title: 'TIPs',
        collapsable: false,
        children: [
          '/tips/stringBasedEmuns',
          '/tips/nominalTyping',
          '/tips/statefulFunctions',
          '/tips/bind',
          '/tips/curry',
          '/tips/typeInstantiation',
          '/tips/lazyObjectLiteralInitialization',
          '/tips/classAreUseful',
          '/tips/avoidExportDefault',
          '/tips/limitPropertySetters',
          '/tips/createArrays',
          '/tips/outFileCaution',
          '/tips/staticConstructors',
          '/tips/singletonPatern',
          '/tips/functionParameters',
          '/tips/truthy',
          '/tips/buildToggles',
          '/tips/typesafeEventEmitter',
          '/tips/metadata',
          '/tips/covarianceAndContravariance',
          '/tips/infer',
        ],
      },
      {
        title: 'TypeScript 编译原理',
        collapsable: false,
        children: [
          '/compiler/overview',
          '/compiler/program',
          '/compiler/ast',
          '/compiler/scanner',
          '/compiler/parser',
          '/compiler/binder',
          '/compiler/checker',
          '/compiler/emitter',
        ],
      },
      {
        title: 'TypeScript FAQs',
        collapsable: false,
        children: [
          './faqs/common-bug-not-bugs',
          './faqs/common-feature-request',
          './faqs/type-system-behavior',
          './faqs/function',
          './faqs/class',
          './faqs/generics',
          './faqs/modules',
          './faqs/enums',
          './faqs/type-guards',
          './faqs/jsx-and-react',
          './faqs/thing-that-dont-work',
          './faqs/commandline-behavior',
          './faqs/tsconfig-behavior',
        ],
      },
      {
        title: 'TypeScript 更新',
        collapsable: false,
        children: ['/new/typescript-3.8', '/new/typescript-3.7'],
      },
      // {
      //   title: 'TypeScript 更新',
      //   collapsable: false,
      //   children: ['/new/typescript-3.7']
      // }
    ],
  },
  markdown: {
    toc: {
      transformLink(link) {
        // manipulate the headings as you like here.
        console.log('link', link)
        return '---' + link
      },
    },
  },
}
