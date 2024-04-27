module.exports = {
  packagerConfig: {
    appBundleId: "io.github.messenger-enhanced",
    asar: true,
    icon: 'images/io.github.messenger-enhanced.svg',
    appCategoryType: 'public.app-category.social-networking',
  },
  rebuildConfig: {},
  makers: [
    /*{
      name: '@electron-forge/maker-squirrel',
      config: {},
    },*/
    {
      name: '@electron-forge/maker-zip',
      platforms: [/*'darwin',*/ 'linux'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          productName: "Messenger Enhanced",
          icon: "./images/io.github.messenger-enhanced.svg",
          categories: ["Network"],
        }
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        options: {
          productName: "Messenger Enhanced",
          icon: "./images/io.github.messenger-enhanced.svg",
          categories: ["Network"],
        }
      },
    },
    {
      name: 'electron-forge-maker-appimage',
      config: {
        options: {
          productName: "Messenger Enhanced",
          icon: "./images/io.github.messenger-enhanced.svg",
          categories: ["Network"],
        }
      },
    },
    {
      name: 'electron-forge-maker-pacman',
      config: {},
    },
  ],
};
