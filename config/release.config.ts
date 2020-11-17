import { Options } from "semantic-release";
import { readFileSync } from "fs";
import dateFormat from "dateformat";
import { join } from "path";

const template = readFileSync(
  join(__dirname, "helpers", "default-template.hbs")
).toString();
const commitTemplate = readFileSync(
  join(__dirname, "helpers", "commit-template.hbs")
).toString();

const options: Options = {
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          major: {
            include: [":boom:"],
          },
          minor: {
            include: [":sparkles:"],
          },
          patch: {
            include: [
              ":bug:",
              ":ambulance:",
              ":lock:",
              ":recycle:",
              ":lipstick:",
              ":alien:",
              ":package:",
            ],
          },
        },
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: {
            datetime: (format = "UTC:yyyy-mm-dd") =>
              dateFormat(new Date(), format),
          },
          issueResolution: {
            template: "{baseUrl}/{owner}/{repo}/issues/{ref}",
            baseUrl: "https://github.com",
            source: "github.com",
          },
        },
      },
    ],
    "@semantic-release/github",
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: !!process.env.NPM_TOKEN,
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        message: ":bookmark: Release v${nextRelease.version} [skip ci]",
      },
    ],
  ],
};

export const master: Options = {
  ...options,
  branches: ["master"],
};
export const production: Options = {
  ...options,
  branches: ["production"],
};
export const release = (branches: string | string[]) =>
  ({ ...options, branches } as Options);
