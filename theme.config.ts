export const themeConfig: ThemeConfig = {
  site: {
    url: "https://blog.liks.space",
    title: "Liks' Blog",
    author: "Liks",
    description: "Liks 的博客",
    favicon: "/icon/favicon.svg", // or https://example.com/favicon.svg
  },
  global: {
    avatar: "avatar.jpg",
    rss: true,
    i18n: true,
  },
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
  footer: {
    copyright: {
      time: "2024 - 2025",
      owner: "Liks",
    },
    beian: {
      // icp: "京 ICP 备 12345678 号",
      // police: "京公网安备 11010102000001 号",
      // policeLink: "https://beian.mps.gov.cn/webcode=?",
    },
  },
  index: {
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
  post: {
    copyright: {
      CCLicense: {
        BY: true,
        NC: true,
        SA: true,
        ND: false,
      },
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans",
    },
  },
  sponsor: {
    enable: true,
    alipay: {
      enable: false,
      image: "",
    },
    wechat: {
      enable: true,
      image: "wechatpay.png",
    },
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
    umami: {
      enable: false,
      src: "",
      websiteID: "",
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
      time: string;
      owner: string;
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
