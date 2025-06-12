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
        enable: false,
        number: "京 ICP 备 12345678 号",
      },
      police: {
        enable: false,
        number: "京公网安备 12345678901234 号",
        url: "https://beian.mps.gov.cn/webcode=?",
      },
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
        url: "mailto:example@xxx.com",
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
      url: "https://creativecommons.org/licenses/by-nc-sa/4.0",
    },
  },
  sponsor: {
    enable: true,
    alipay: {
      enable: true,
      image: "alipay.png",
    },
    wechat: {
      enable: false,
    },
    list: true,
  },
  comment: {
    enable: false,
    artalk: {
      enable: false,
      server: "https://artalk.example.com",
      site: "Sora",
    },
  },
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
      icp: {
        enable: boolean;
        number?: string;
      };
      police: {
        enable: boolean;
        number?: string;
        url?: string;
      };
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
      image?: string;
    };
    wechat: {
      enable: boolean;
      image?: string;
    };
    list: boolean;
  };
  comment: {
    enable: boolean;
    artalk: {
      enable: boolean;
      server?: string;
      site?: string;
    };
  };
  tools: {
    umami: {
      enable: boolean;
      src: string;
      websiteID: string;
    };
  };
}
