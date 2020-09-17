import { master, production, release } from "./config/release.config";
import prettier from "./config/prettier.config";

const releaseMaster = master;
const releaseProduction = production;

export { prettier, release, releaseMaster, releaseProduction };
