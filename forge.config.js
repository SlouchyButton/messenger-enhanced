module.exports = {
  packagerConfig: {
    icon: 'images/logo'
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
    /*{
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },*/
  ],
};
