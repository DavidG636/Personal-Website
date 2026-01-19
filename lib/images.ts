export const IMAGES = {
  profile: "/images/profile.jpg",
  logos: {
    logo: "/images/logo.png",
    linkedIn: "/images/linkedIn.png",
    github: "/images/gitPhotoLink.png",
    otherAccount: "/images/otherAccountProfilePic.png",
    moreInfo: "/images/moreInfo.png",
    web: "/images/web.png",
    file: "/images/file.png",
  },
  backgrounds: {
    looseleaf: "/images/backgrounds/looseleaf.jpg",
  },
  projects: {
    paragraphUtilities: "/images/paragraphUtilitiesThumb.PNG",
    leapYear: "/images/leapYearThumb.PNG",
    helloName: "/images/helloNameThumb.PNG",
    primalityChecker: "/images/primalityCheckerThumb.PNG",
    todayIWill: "/images/todayIWillThumb.PNG",
    projectAutomation: "/images/projectAutomationThumb.png",
    computerMode: "/images/computerModeThumb.png",
    moodMail: "/images/moodMailThumb.PNG",
    case: "/images/caseThumb.PNG",
    lowercase: "/images/lowercaseThumb.PNG",
    paceStemCamp: "/images/paceSeidenbergStemCamp2017Thumb.PNG",
    deprecated: "/images/paragraphUtilitiesDepreceatedThumb.PNG",
  },
  schools: {
    hstat: "/images/yellowjacket.PNG",
    pace: "/images/pace.png",
  },
  utilities: {
    printer: "/images/printerPic.png",
    paragraphInfoGif: "/images/paragraphInfoGif.gif",
    caseGif: "/images/caseGif.gif",
    eraser: "/images/Eraser.png",
  },
} as const;

export type ImageMap = typeof IMAGES;

export default IMAGES;
