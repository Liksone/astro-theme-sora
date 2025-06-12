export const themeConfig: ThemeConfig = {
  site: {
    url: "https://blog.liks.space",
    title: "Sora",
    author: "Liks",
    description: "A blog theme built with Astro",
    favicon: "/images/favicon.ico",
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
      icp: {
        enabled: false,
        number: "京 ICP 备 12345678 号",
      },
      police: {
        enabled: false,
        number: "京公网安备 12345678901234 号",
        url: "https://beian.mps.gov.cn/webcode=?",
      },
    },
  },
  index: {
    social: [
      {
        name: "BiliBili",
        enabled: false,
      },
      {
        name: "Email",
        enabled: true,
        url: "mailto:example@xxx.com",
      },
      {
        name: "Facebook",
        enabled: false,
      },
      {
        name: "GitHub",
        enabled: true,
        url: "https://github.com/Liksone",
      },
      {
        name: "Instagram",
        enabled: false,
      },
      {
        name: "QQ",
        enabled: false,
      },
      {
        name: "Telegram",
        enabled: false,
      },
      {
        name: "Twitter/X",
        enabled: false,
      },
      {
        name: "YouTube",
        enabled: false,
      },
      {
        name: "微博",
        enabled: false,
      },
      {
        name: "小红书",
        enabled: false,
      },
      {
        name: "知乎",
        enabled: false,
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
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0",
    },
  },
  sponsor: {
    enabled: true,
    alipay: {
      enabled: true,
      image: "alipay.png",
    },
    wechat: {
      enabled: false,
    },
    list: true,
  },
  comment: {
    enabled: false,
    artalk: {
      enabled: false,
      server: "https://artalk.example.com",
      site: "Sora",
    },
  },
  tools: {
    umami: {
      enabled: false,
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
      icp: {
        enabled: boolean;
        number?: string;
      };
      police: {
        enabled: boolean;
        number?: string;
        url?: string;
      };
    };
  };
  index: {
    social: {
      name: string;
      enabled: boolean;
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
    enabled: boolean;
    alipay: {
      enabled: boolean;
      image?: string;
    };
    wechat: {
      enabled: boolean;
      image?: string;
    };
    list: boolean;
  };
  comment: {
    enabled: boolean;
    artalk: {
      enabled: boolean;
      server?: string;
      site?: string;
    };
  };
  tools: {
    umami: {
      enabled: boolean;
      src: string;
      websiteID: string;
    };
  };
}
