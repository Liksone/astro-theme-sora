import fs from "node:fs";
import path from "node:path";
import yaml from "yaml";

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
      owner: string;
      time: string;
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

// Read config
const file = path.resolve("src/config/theme.yaml");
export const themeConfig: ThemeConfig = yaml.parse(
  fs.readFileSync(file, "utf8"),
);
// import { config } from "./config/theme";
// export const themeConfig: ThemeConfig = config;

// Init images of config
// function copy(srcDir: string, desDir: string, name: string) {
//   const srcFile = path.join(srcDir, name);
//   const desFile = path.join(desDir, name);
//   fs.copyFileSync(srcFile, desFile);
// }
// copy("src/config/", "public/", themeConfig.site.favicon);
// copy("src/config/", "src/images", themeConfig.global.avatar);
// themeConfig.sponsor.alipay.enabled &&
//   copy("src/config/", "src/images", themeConfig.sponsor.alipay.image as string);
// themeConfig.sponsor.wechat.enabled &&
//   copy("src/config/", "src/images", themeConfig.sponsor.wechat.image as string);
