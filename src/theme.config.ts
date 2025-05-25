export const themeConfig: ThemeConfig = {
  // 站点
  site: {
    // 站点地址
    url: "https://blog.liks.space",
    // 站点标题
    title: "Liks' Blog",
    // 站长名，用于 meta 信息
    author: "Liks",
    // 站点介绍，用于 meta 信息
    description: "Liks 的博客",
    // 站点 Favicon
    // 本地文件或网页链接
    // recommended formats: svg, png or ico？
    favicon: "/icon/favicon.svg", // or https://example.com/favicon.svg
  },
  // 基本设置
  global: {
    // 头像
    // 本地文件或网页链接
    // recommended formats: svg, png or ico？
    avatar: "avatar.jpg", // or https://example.com/favicon.svg
    // RSS
    rss: true,
    // 多语言支持
    i18n: true,
  },
  // 导航栏
  nav: [
    {
      name: "归档",
      url: "/archives",
    },
    {
      name: "分类",
      url: "/categories",
    },
    {
      name: "标签",
      url: "/tags",
    },
    {
      name: "关于",
      url: "/about",
    },
  ],
  // 页脚
  footer: {
    // 版权
    copyright: {
      // 建站时间
      // 例如 2024 - 2025，默认为今年
      time: "2024 - 2025",
      // 版权所有者
      // 默认为站点标题
      owner: "Liks",
    },
    // 备案
    beian: {
      // ICP 备案号，例如京ICP备12345678号
      // icp: "京 ICP 备 12345678 号",
      // 公安备案号
      // police: "京公网安备 11010102000001 号",
      // 公安备案链接
      // 默认为 https://beian.mps.gov.cn
      // policeLink: "https://beian.mps.gov.cn/webcode=?",
    },
  },
  // 首页
  index: {
    // 社交媒体
    social: [
      {
        name: "BiliBili",
        enable: false,
      },
      {
        name: "Email",
        enable: true,
        url: "mailto:freybling@outlook.com",
      },
      {
        name: "Facebook",
        enable: false,
      },
      {
        name: "GitHub",
        enable: true,
        url: "https://github.com/Liksone",
      },
      {
        name: "Instagram",
        enable: false,
      },
      {
        name: "QQ",
        enable: false,
      },
      {
        name: "Telegram",
        enable: false,
      },
      {
        name: "Twitter/X",
        enable: false,
      },
      {
        name: "YouTube",
        enable: false,
      },
      {
        name: "微博",
        enable: false,
      },
      {
        name: "小红书",
        enable: false,
      },
      {
        name: "知乎",
        enable: false,
      },
    ],
  },
  // 文章页
  post: {
    // 版权许可
    copyright: {
      // CC 许可
      CCLicense: {
        BY: true,
        NC: true,
        SA: true,
        ND: false,
      },
      // 许可链接
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans",
    },
  },
  // 赞助
  sponsor: {
    enable: true,
    // 支付宝二维码
    alipay: {
      enable: false,
      // 本地文件或网页链接
      image: "",
      // Relative to the /src/images/ directory
    },
    // 微信二维码
    wechat: {
      enable: true,
      // 本地文件或网页链接
      image: "wechatpay.png",
    },
    // 赞助名单
    list: true,
  },
  // comment: {
  //   // enable comment system
  //   enabled: true, // true, false
  //   // waline comment system
  //   // https://waline.js.org/en/
  //   waline: {
  //     // server url
  //     serverURL: "https://retypeset-comment.radishzz.cc",
  //     // emoji url
  //     emoji: [
  //       "https://unpkg.com/@waline/emojis@1.2.0/tw-emoji",
  //       // 'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
  //       // more emojis: https://waline.js.org/en/guide/features/emoji.html
  //     ],
  //     // gif search
  //     search: false, // true, false
  //     // image uploader
  //     // bug: unable to hide image uploader icon
  //     imageUploader: false, // true, false
  //   },
  // },
  tools: {
    // Umami
    umami: {
      enable: false,
      src: "",
      // 例如 https://cloud.umami.is
      websiteID: "",
      // 例如 520af332-bfb7-4e7c-9386-5f273ee3d697
    },
  },
};

interface ThemeConfig {
  site: {
    url: string;
    title: string;
    author: string;
    description: string;
    favicon: string;
  };
  global: {
    avatar: string;
    rss: boolean;
    i18n: boolean;
  };
  nav: { name: string; url: string }[];
  footer: {
    copyright: {
      time?: string;
      owner?: string;
    };
    beian: {
      icp?: string;
      police?: string;
      policeLink?: string;
    };
  };
  index: {
    social: {
      name: string;
      enable: boolean;
      url?: string;
    }[];
  };
  post: {
    copyright: {
      CCLicense: {
        BY: boolean;
        NC: boolean;
        SA: boolean;
        ND: boolean;
      };
      url: string;
    };
  };
  sponsor: {
    enable: boolean;
    alipay: {
      enable: boolean;
      image: string;
    };
    wechat: {
      enable: boolean;
      image: string;
    };
    list: boolean;
  };
  tools: {
    umami: {
      enable: boolean;
      src: string;
      websiteID: string;
    };
  };
}
