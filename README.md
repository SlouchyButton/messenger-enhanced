# Messenger Enhanced
## Unofficial Messenger app with few enhancements

This project mainly exists, because [Caprine](https://github.com/sindresorhus/caprine) is in semi-maintenance mode and I do not have experience with typescript, nor do I currently have time to figure out Caprine codebase. On the other hand I do use Messenger daily and for a long time I wanted something more polished. This is *NOT* a direct alternative to Caprine, since this project does not have and probably never will have privacy centric features of Caprine. I do not use those features and not really care for them, on the other hand I will try to make this project as polished as I can. There are few things (like notifications), that I want to fix and I would be very happy if this project could serve as a reference to solving those issues in Caprine.

Project uses dark mode styling from this project, with owner's approval: [jerry1100/messenger-dark-theme](https://github.com/jerry1100/messenger-dark-theme)

Icon is specifically this bad on purpose to play it safe in regards to trademark (since the logo is trademarked by Meta). Even tho the logo that is trademarked seems to be the old (blue-only logo), I want to play it safe. If you want to use official logo of Messenger app, there is a Wikimedia page with Messenger logo in svg that you can download, convert to png and replace the logo in images/ folder.

### Features
- Native notifications
- Automatic dark mode switching
    - App respects OS's dark mode setting
    - This is updated automatically without need of app restart
    - Manual theme switch is not *yet* implemented

### Compilation, build, running
`npm install`

`npm run start` - start Messenger enhanced

`npm run make` - create zip file with executable app (also creates folder with contents of the zip), use this to prepare executables for .desktop file

*Don't forget to modify the .desktop file if you are going to use it. You have to replace "[REPO LOCATION]" with location where you cloned this repository*
