import path from "node:path";
import type { AstroIntegration } from "astro";

export default (): AstroIntegration => ({
  name: "update-config",
  hooks: {
    "astro:config:setup": (options) => {
      const { addWatchFile, logger } = options;
      addWatchFile(path.resolve("src/config/theme.yaml"));
      // logger.info("theme config is installed!");
    },
  },
});
