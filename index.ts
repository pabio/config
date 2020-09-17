import { master, production } from "./config/release.config";
import prettier from "./config/prettier.config";

const releaseMaster = master;
const releaseProduction = production;

export { prettier, releaseMaster, releaseProduction };
