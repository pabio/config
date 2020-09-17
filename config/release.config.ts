import { Options } from "semantic-release";
import { readFileSync } from "fs";

const options: Options = {
  branches: ["production"],
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          major: {
            include: [":bento:", ":recycle:"],
          },
          minor: {
            include: [":bento:", ":recycle:"],
          },
          patch: {
            include: [":bug:", ":ambulance:", ":lock:"],
          },
        },
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: {
            datetime: function (format = "UTC:yyyy-mm-dd") {
              return dateFormat(new Date(), format);
            },
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
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      { message: ":bookmark: v${nextRelease.version} [skip ci]" },
    ],
  ],
};

export default options;
