import { DefaultConfigOptions } from "@formkit/vue";
// import { generateClasses } from "@formkit/themes";
import "@formkit/themes/genesis";
import { genesisIcons } from "@formkit/icons";

const config: DefaultConfigOptions = {
  icons: {
    ...genesisIcons,
  },
  // config: generateClasses(classes)
};

export default config;
