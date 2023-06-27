import { useCallback, useState } from 'react';
// import { technologies } from '$company/(pages)/find/profile/profile.data';
import {
    DiAndroid,
    DiAngularSimple,
    DiAppcelerator,
    DiApple,
    DiAppstore,
    DiAptana,
    DiAsterisk,
    DiAtlassian,
    DiAtom,
    DiAws,
    DiBackbone,
    DiBingSmall,
    DiBintray,
    DiBitbucket,
    DiBlackberry,
    DiBootstrap,
    DiBower,
    DiBrackets,
    DiBugsense,
    DiCelluloid,
    DiChrome,
    DiCisco,
    DiClojureAlt,
    DiClojure,
    DiCloud9,
    DiCoda,
    DiCodeBadge,
    DiCode,
    DiCodeigniter,
    DiCodepen,
    DiCodrops,
    DiCoffeescript,
    DiCompass,
    DiComposer,
    DiCreativecommonsBadge,
    DiCreativecommons,
    DiCssTricks,
    DiCss3Full,
    DiCss3,
    DiCssdeck,
    DiDart,
    DiDatabase,
    DiDebian,
    DiDigitalOcean,
    DiDjango,
    DiDlang,
    DiDocker,
    DiDoctrine,
    DiDojo,
    DiDotnet,
    DiDreamweaver,
    DiDropbox,
    DiDrupal,
    DiEclipse,
    DiEmber,
    DiEnvato,
    DiErlang,
    DiExtjs,
    DiFirebase,
    DiFirefox,
    DiFsharp,
    DiGhostSmall,
    DiGhost,
    DiGitBranch,
    DiGitCommit,
    DiGitCompare,
    DiGitMerge,
    DiGitPullRequest,
    DiGit,
    DiGithubAlt,
    DiGithubBadge,
    DiGithubFull,
    DiGithub,
    DiGnu,
    DiGo,
    DiGoogleAnalytics,
    DiGoogleDrive,
    DiGoogleCloudPlatform,
    DiGrails,
    DiGroovy,
    DiGrunt,
    DiGulp,
    DiHackernews,
    DiHaskell,
    DiHeroku,
    DiHtml53DEffects,
    DiHtml5Connectivity,
    DiHtml5DeviceAccess,
    DiHtml5Multimedia,
    DiHtml5,
    DiIe,
    DiIllustrator,
    DiIntellij,
    DiIonic,
    DiJava,
    DiJavascript1,
    DiJavascript,
    DiJekyllSmall,
    DiJenkins,
    DiJira,
    DiJoomla,
    DiJqueryLogo,
    DiJqueryUiLogo,
    DiJsBadge,
    DiKomodo,
    DiKrakenjsBadge,
    DiKrakenjs,
    DiLaravel,
    DiLess,
    DiLinux,
    DiMagento,
    DiMailchimp,
    DiMarkdown,
    DiMaterializecss,
    DiMeteor,
    DiMeteorfull,
    DiMitlicence,
    DiModernizr,
    DiMongodb,
    DiMootoolsBadge,
    DiMootools,
    DiMozilla,
    DiMsqlServer,
    DiMysql,
    DiNancy,
    DiNetbeans,
    DiNetmagazine,
    DiNginx,
    DiNodejsSmall,
    DiNodejs,
    DiNpm,
    DiOnedrive,
    DiOpenshift,
    DiOpensource,
    DiOpera,
    DiPerl,
    DiPhonegap,
    DiPhotoshop,
    DiPhp,
    DiPostgresql,
    DiProlog,
    DiPython,
    DiRackspace,
    DiRaphael,
    DiRasberryPi,
    DiReact,
    DiRedhat,
    DiRedis,
    DiRequirejs,
    DiResponsive,
    DiRor,
    DiRubyRough,
    DiRuby,
    DiRust,
    DiSafari,
    DiSass,
    DiScala,
    DiScriptcs,
    DiScrum,
    DiSenchatouch,
    DiSizzlejs,
    DiSmashingMagazine,
    DiSnapSvg,
    DiSpark,
    DiSqllite,
    DiStackoverflow,
    DiStreamline,
    DiStylus,
    DiSublime,
    DiSwift,
    DiSymfonyBadge,
    DiSymfony,
    DiTechcrunch,
    DiTerminalBadge,
    DiTerminal,
    DiTravis,
    DiTrello,
    DiTypo3,
    DiUbuntu,
    DiUikit,
    DiUnitySmall,
    DiVim,
    DiVisualstudio,
    DiW3C,
    DiWebplatform,
    DiWindows,
    DiWordpress,
    DiYahooSmall,
    DiYahoo,
    DiYeoman,
    DiYii,
    DiZend
} from 'react-icons/di';
const technologyIcons = {
    "Android": { Icon: DiAndroid, color: "#a4c639", name: "Android" },
    "Angular": { Icon: DiAngularSimple, color: "#dd1b16", name: "Angular" },
    "Appcelerator": { Icon: DiAppcelerator, color: "#5c79a3", name: "Appcelerator" },
    "Apple": { Icon: DiApple, color: "#999999", name: "Apple" },
    "Appstore": { Icon: DiAppstore, color: "#000000", name: "Appstore" },
    "Aptana": { Icon: DiAptana, color: "#4e9a05", name: "Aptana" },
    "Asterisk": { Icon: DiAsterisk, color: "#ffce4a", name: "Asterisk" },
    "Atlassian": { Icon: DiAtlassian, color: "#003366", name: "Atlassian" },
    "Atom": { Icon: DiAtom, color: "#66595C", name: "Atom" },
    "AWS": { Icon: DiAws, color: "#FF9900", name: "AWS" },
    "Backbone": { Icon: DiBackbone, color: "#0071b5", name: "Backbone" },
    "Bing": { Icon: DiBingSmall, color: "#ffb900", name: "Bing" },
    "Bintray": { Icon: DiBintray, color: "#3e8ef7", name: "Bintray" },
    "Bitbucket": { Icon: DiBitbucket, color: "#205081", name: "Bitbucket" },
    "Blackberry": { Icon: DiBlackberry, color: "#000000", name: "Blackberry" },
    "Bootstrap": { Icon: DiBootstrap, color: "#563d7c", name: "Bootstrap" },
    "Bower": { Icon: DiBower, color: "#ffcc2f", name: "Bower" },
    "Brackets": { Icon: DiBrackets, color: "#2e2e2e", name: "Brackets" },
    "Bugsense": { Icon: DiBugsense, color: "#1cbbb4", name: "Bugsense" },
    "Celluloid": { Icon: DiCelluloid, color: "#b09b5a", name: "Celluloid" },
    "Chrome": { Icon: DiChrome, color: "#4285f4", name: "Chrome" },
    "Cisco": { Icon: DiCisco, color: "#1ba0d7", name: "Cisco" },
    "Clojure Alt": { Icon: DiClojureAlt, color: "#db5855", name: "Clojure Alt" },
    "Clojure": { Icon: DiClojure, color: "#db5855", name: "Clojure" },
    "Cloud9": { Icon: DiCloud9, color: "#1abc9c", name: "Cloud9" },
    "Coda": { Icon: DiCoda, color: "#44b3e5", name: "Coda" },
    "Code Badge": { Icon: DiCodeBadge, color: "#f44b25", name: "Code Badge" },
    "Code": { Icon: DiCode, color: "#000000", name: "Code" },
    "Codeigniter": { Icon: DiCodeigniter, color: "#dd4814", name: "Codeigniter" },
    "Codepen": { Icon: DiCodepen, color: "#000000", name: "Codepen" },
    "Codrops": { Icon: DiCodrops, color: "#000000", name: "Codrops" },
    "Coffeescript": { Icon: DiCoffeescript, color: "#244776", name: "Coffeescript" },
    "Compass": { Icon: DiCompass, color: "#8c8c8c", name: "Compass" },
    "Composer": { Icon: DiComposer, color: "#885630", name: "Composer" },
    "Creative Commons Badge": { Icon: DiCreativecommonsBadge, color: "#efb913", name: "Creative Commons Badge" },
    "Creative Commons": { Icon: DiCreativecommons, color: "#efb913", name: "Creative Commons" },
    "CSS Tricks": { Icon: DiCssTricks, color: "#1e72b3", name: "CSS Tricks" },
    "CSS3 Full": { Icon: DiCss3Full, color: "#254bdd", name: "CSS3 Full" },
    "CSS3": { Icon: DiCss3, color: "#254bdd", name: "CSS3" },
    "CSSDeck": { Icon: DiCssdeck, color: "#219fce", name: "CSSDeck" },
    "Dart": { Icon: DiDart, color: "#0175c2", name: "Dart" },
    "Database": { Icon: DiDatabase, color: "#c0c0c0", name: "Database" },
    "Debian": { Icon: DiDebian, color: "#d70a53", name: "Debian" },
    "DigitalOcean": { Icon: DiDigitalOcean, color: "#008bcf", name: "DigitalOcean" },
    "Django": { Icon: DiDjango, color: "#092e20", name: "Django" },
    "Dlang": { Icon: DiDlang, color: "#008aff", name: "Dlang" },
    "Docker": { Icon: DiDocker, color: "#1488C6", name: "Docker" },
    "Doctrine": { Icon: DiDoctrine, color: "#753a30", name: "Doctrine" },
    "Dojo": { Icon: DiDojo, color: "#01a8fe", name: "Dojo" },
    "Dotnet": { Icon: DiDotnet, color: "#5c2d91", name: "Dotnet" },
    "Dreamweaver": { Icon: DiDreamweaver, color: "#ca4246", name: "Dreamweaver" },
    "Dropbox": { Icon: DiDropbox, color: "#007ee5", name: "Dropbox" },
    "Drupal": { Icon: DiDrupal, color: "#0077c0", name: "Drupal" },
    "Eclipse": { Icon: DiEclipse, color: "#2c2255", name: "Eclipse" },
    "Ember": { Icon: DiEmber, color: "#f23819", name: "Ember" },
    "Envato": { Icon: DiEnvato, color: "#82b541", name: "Envato" },
    "Erlang": { Icon: DiErlang, color: "#a90533", name: "Erlang" },
    "Extjs": { Icon: DiExtjs, color: "#87baf3", name: "Extjs" },
    "Firebase": { Icon: DiFirebase, color: "#ffcb2b", name: "Firebase" },
    "Firefox": { Icon: DiFirefox, color: "#e66000", name: "Firefox" },
    "F#": { Icon: DiFsharp, color: "#378bba", name: "F#" },
    "Ghost Small": { Icon: DiGhostSmall, color: "#212425", name: "Ghost Small" },
    "Ghost": { Icon: DiGhost, color: "#212425", name: "Ghost" },
    "Git Branch": { Icon: DiGitBranch, color: "#f34f29", name: "Git Branch" },
    "Git Commit": { Icon: DiGitCommit, color: "#f34f29", name: "Git Commit" },
    "Git Compare": { Icon: DiGitCompare, color: "#f34f29", name: "Git Compare" },
    "Git Merge": { Icon: DiGitMerge, color: "#f34f29", name: "Git Merge" },
    "Git Pull Request": { Icon: DiGitPullRequest, color: "#f34f29", name: "Git Pull Request" },
    "Git": { Icon: DiGit, color: "#f34f29", name: "Git" },
    "GitHub Alt": { Icon: DiGithubAlt, color: "#181717", name: "GitHub Alt" },
    "GitHub Badge": { Icon: DiGithubBadge, color: "#181717", name: "GitHub Badge" },
    "GitHub Full": { Icon: DiGithubFull, color: "#181717", name: "GitHub Full" },
    "GitHub": { Icon: DiGithub, color: "#181717", name: "GitHub" },
    "GNU": { Icon: DiGnu, color: "#a42e2b", name: "GNU" },
    "Go": { Icon: DiGo, color: "#00acd7", name: "Go" },
    "Google Analytics": { Icon: DiGoogleAnalytics, color: "#d64826", name: "Google Analytics" },
    "Google Drive": { Icon: DiGoogleDrive, color: "#3cba54", name: "Google Drive" },
    "Google Cloud Platform": { Icon: DiGoogleCloudPlatform, color: "#4285f4", name: "Google Cloud Platform" },
    "Grails": { Icon: DiGrails, color: "#3e2e1e", name: "Grails" },
    "Groovy": { Icon: DiGroovy, color: "#4298b8", name: "Groovy" },
    "Grunt": { Icon: DiGrunt, color: "#fba919", name: "Grunt" },
    "Gulp": { Icon: DiGulp, color: "#db4446", name: "Gulp" },
    "Hacker News": { Icon: DiHackernews, color: "#ff6600", name: "Hacker News" },
    "Haskell": { Icon: DiHaskell, color: "#5e5086", name: "Haskell" },
    "Heroku": { Icon: DiHeroku, color: "#79589f", name: "Heroku" },
    "HTML5 3D Effects": { Icon: DiHtml53DEffects, color: "#e34c26", name: "HTML5 3D Effects" },
    "HTML5 Connectivity": { Icon: DiHtml5Connectivity, color: "#e34c26", name: "HTML5 Connectivity" },
    "HTML5 Device Access": { Icon: DiHtml5DeviceAccess, color: "#e34c26", name: "HTML5 Device Access" },
    "HTML5 Multimedia": { Icon: DiHtml5Multimedia, color: "#e34c26", name: "HTML5 Multimedia" },
    "HTML5": { Icon: DiHtml5, color: "#e34c26", name: "HTML5" },
    "Internet Explorer": { Icon: DiIe, color: "#1c87c9", name: "Internet Explorer" },
    "Illustrator": { Icon: DiIllustrator, color: "#f79500", name: "Illustrator" },
    "Intellij": { Icon: DiIntellij, color: "#000000", name: "Intellij" },
    "Ionic": { Icon: DiIonic, color: "#4a8eff", name: "Ionic" },
    "Java": { Icon: DiJava, color: "#e94e31", name: "Java" },
    "Javascript 1": { Icon: DiJavascript1, color: "#f1e05a", name: "Javascript 1" },
    "Javascript": { Icon: DiJavascript, color: "#f1e05a", name: "Javascript" },
    "Jekyll Small": { Icon: DiJekyllSmall, color: "#9b785e", name: "Jekyll Small" },
    "Jenkins": { Icon: DiJenkins, color: "#d24939", name: "Jenkins" },
    "Jira": { Icon: DiJira, color: "#0052cc", name: "Jira" },
    "Joomla": { Icon: DiJoomla, color: "#f44321", name: "Joomla" },
    "jQuery Logo": { Icon: DiJqueryLogo, color: "#0868ac", name: "jQuery Logo" },
    "jQuery UI Logo": { Icon: DiJqueryUiLogo, color: "#0868ac", name: "jQuery UI Logo" },
    "JS Badge": { Icon: DiJsBadge, color: "#f1e05a", name: "JS Badge" },
    "Komodo": { Icon: DiKomodo, color: "#194fa7", name: "Komodo" },
    "Kraken.js Badge": { Icon: DiKrakenjsBadge, color: "#82b414", name: "Kraken.js Badge" },
    "Kraken.js": { Icon: DiKrakenjs, color: "#82b414", name: "Kraken.js" },
    "Laravel": { Icon: DiLaravel, color: "#f55247", name: "Laravel" },
    "LESS": { Icon: DiLess, color: "#1d365d", name: "LESS" },
    "Linux": { Icon: DiLinux, color: "#000000", name: "Linux" },
    "Magento": { Icon: DiMagento, color: "#ee672f", name: "Magento" },
    "Mailchimp": { Icon: DiMailchimp, color: "#258dcd", name: "Mailchimp" },
    "Markdown": { Icon: DiMarkdown, color: "#083fa1", name: "Markdown" },
    "Materialize CSS": { Icon: DiMaterializecss, color: "#ee6e73", name: "Materialize CSS" },
    "Meteor": { Icon: DiMeteor, color: "#de4f4f", name: "Meteor" },
    "Meteor Full": { Icon: DiMeteorfull, color: "#de4f4f", name: "Meteor Full" },
    "MIT License": { Icon: DiMitlicence, color: "#e94e31", name: "MIT License" },
    "Modernizr": { Icon: DiModernizr, color: "#f6a41f", name: "Modernizr" },
    "MongoDB": { Icon: DiMongodb, color: "#4db33d", name: "MongoDB" },
    "Mootools Badge": { Icon: DiMootoolsBadge, color: "#ea8c0d", name: "Mootools Badge" },
    "Mootools": { Icon: DiMootools, color: "#ea8c0d", name: "Mootools" },
    "Mozilla": { Icon: DiMozilla, color: "#000000", name: "Mozilla" },
    "MSQL Server": { Icon: DiMsqlServer, color: "#CC2927", name: "MSQL Server" },
    "MySQL": { Icon: DiMysql, color: "#00758f", name: "MySQL" },
    "Nancy": { Icon: DiNancy, color: "#df2494", name: "Nancy" },
    "Netbeans": { Icon: DiNetbeans, color: "#1b6ac6", name: "Netbeans" },
    "Net Magazine": { Icon: DiNetmagazine, color: "#e54028", name: "Net Magazine" },
    "Nginx": { Icon: DiNginx, color: "#009639", name: "Nginx" },
    "Node.js Small": { Icon: DiNodejsSmall, color: "#3c873a", name: "Node.js Small" },
    "Node.js": { Icon: DiNodejs, color: "#3c873a", name: "Node.js" },
    "npm": { Icon: DiNpm, color: "#CB3837", name: "npm" },
    "OneDrive": { Icon: DiOnedrive, color: "#094ab2", name: "OneDrive" },
    "OpenShift": { Icon: DiOpenshift, color: "#ff3c00", name: "OpenShift" },
    "Open Source": { Icon: DiOpensource, color: "#bd3d31", name: "Open Source" },
    "Opera": { Icon: DiOpera, color: "#CC0F16", name: "Opera" },
    "Perl": { Icon: DiPerl, color: "#0298c3", name: "Perl" },
    "PhoneGap": { Icon: DiPhonegap, color: "#2c4e8c", name: "PhoneGap" },
    "Photoshop": { Icon: DiPhotoshop, color: "#001d34", name: "Photoshop" },
    "PHP": { Icon: DiPhp, color: "#6181b6", name: "PHP" },
    "PostgreSQL": { Icon: DiPostgresql, color: "#31648c", name: "PostgreSQL" },
    "Prolog": { Icon: DiProlog, color: "#74283c", name: "Prolog" },
    "Python": { Icon: DiPython, color: "#3572A5", name: "Python" },
    "Rackspace": { Icon: DiRackspace, color: "#1e2e38", name: "Rackspace" },
    "Raphael": { Icon: DiRaphael, color: "#cddc39", name: "Raphael" },
    "Raspberry Pi": { Icon: DiRasberryPi, color: "#c51a4a", name: "Raspberry Pi" },
    "React": { Icon: DiReact, color: "#00d8ff", name: "React" },
    "Red Hat": { Icon: DiRedhat, color: "#cc0000", name: "Red Hat" },
    "Redis": { Icon: DiRedis, color: "#dc382d", name: "Redis" },
    "RequireJS": { Icon: DiRequirejs, color: "#df2029", name: "RequireJS" },
    "Responsive": { Icon: DiResponsive, color: "#43ace0", name: "Responsive" },
    "Ruby on Rails": { Icon: DiRor, color: "#CC0000", name: "Ruby on Rails" },
    "Ruby Rough": { Icon: DiRubyRough, color: "#CC342D", name: "Ruby Rough" },
    "Ruby": { Icon: DiRuby, color: "#CC342D", name: "Ruby" },
    "Rust": { Icon: DiRust, color: "#000000", name: "Rust" },
    "Safari": { Icon: DiSafari, color: "#000000", name: "Safari" },
    "Sass": { Icon: DiSass, color: "#c69", name: "Sass" },
    "Scala": { Icon: DiScala, color: "#dc322f", name: "Scala" },
    "Scriptcs": { Icon: DiScriptcs, color: "#1d4956", name: "Scriptcs" },
    "Scrum": { Icon: DiScrum, color: "#4ea408", name: "Scrum" },
    "Sencha Touch": { Icon: DiSenchatouch, color: "#82b541", name: "Sencha Touch" },
    "Sizzle.js": { Icon: DiSizzlejs, color: "#b91400", name: "Sizzle.js" },
    "Smashing Magazine": { Icon: DiSmashingMagazine, color: "#e53b2c", name: "Smashing Magazine" },
    "Snap.svg": { Icon: DiSnapSvg, color: "#ff0a0a", name: "Snap.svg" },
    "Spark": { Icon: DiSpark, color: "#f26d00", name: "Spark" },
    "SQLite": { Icon: DiSqllite, color: "#003b57", name: "SQLite" },
    "Stack Overflow": { Icon: DiStackoverflow, color: "#f48024", name: "Stack Overflow" },
    "Streamline": { Icon: DiStreamline, color: "#4488c6", name: "Streamline" },
    "Stylus": { Icon: DiStylus, color: "#333333", name: "Stylus" },
    "Sublime": { Icon: DiSublime, color: "#fbd000", name: "Sublime" },
    "Swift": { Icon: DiSwift, color: "#ffac45", name: "Swift" },
    "Symfony Badge": { Icon: DiSymfonyBadge, color: "#000000", name: "Symfony Badge" },
    "Symfony": { Icon: DiSymfony, color: "#000000", name: "Symfony" },
    "TechCrunch": { Icon: DiTechcrunch, color: "#0a3463", name: "TechCrunch" },
    "Terminal Badge": { Icon: DiTerminalBadge, color: "#000000", name: "Terminal Badge" },
    "Terminal": { Icon: DiTerminal, color: "#000000", name: "Terminal" },
    "Travis": { Icon: DiTravis, color: "#3eaaaf", name: "Travis" },
    "Trello": { Icon: DiTrello, color: "#0079bf", name: "Trello" },
    "TYPO3": { Icon: DiTypo3, color: "#ff8700", name: "TYPO3" },
    "Ubuntu": { Icon: DiUbuntu, color: "#e95420", name: "Ubuntu" },
    "UIKit": { Icon: DiUikit, color: "#2396f3", name: "UIKit" },
    "Unity Small": { Icon: DiUnitySmall, color: "#000000", name: "Unity Small" },
    "Vim": { Icon: DiVim, color: "#019733", name: "Vim" },
    "Visual Studio": { Icon: DiVisualstudio, color: "#5d2b90", name: "Visual Studio" },
    "W3C": { Icon: DiW3C, color: "#005A9C", name: "W3C" },
    "Web Platform": { Icon: DiWebplatform, color: "#4c6fff", name: "Web Platform" },
    "Windows": { Icon: DiWindows, color: "#00bcf2", name: "Windows" },
    "WordPress": { Icon: DiWordpress, color: "#21759b", name: "WordPress" },
    "Yahoo Small": { Icon: DiYahooSmall, color: "#720e9e", name: "Yahoo Small" },
    "Yahoo": { Icon: DiYahoo, color: "#720e9e", name: "Yahoo" },
    "Yeoman": { Icon: DiYeoman, color: "#f6a71d", name: "Yeoman" },
    "Yii": { Icon: DiYii, color: "#d94126", name: "Yii" },
    "Zend": { Icon: DiZend, color: "#0679EA", name: "Zend" }
};



const technologies = Object.keys(technologyIcons);

export const useSelectedTechnologies = () => {

    const [valueFilter, setValueFilter] = useState<string>('');
    const [selectedTechnologies, setSelectedTechnologies] = useState<Record<string, null>>({});

    const selectOne = (name: string) => () => {
        setValueFilter('');
        setSelectedTechnologies({ ...selectedTechnologies, [name]: null });
    };

    const removeOne = (name: string) => () => {
        setValueFilter('');
        const newSelectedTechnologies = { ...selectedTechnologies };
        delete newSelectedTechnologies[name];
        setSelectedTechnologies(newSelectedTechnologies);
    };

    const selectActive = useCallback(() => {
        console.log(Object.keys(selectedTechnologies))
        return Object.keys(selectedTechnologies)
            .map((technology) => technologyIcons[technology as keyof typeof technologyIcons]);
    }, [selectedTechnologies]);

    const selectStackIcons = useCallback(() => {
        const values = valueFilter.toLowerCase().split(/\s/g);
        return technologies
            .filter((technology) => values.reduce((prev, value) => prev && technology.toLowerCase().includes(value), true))
            .splice(0, 4)
            .map((technology) => technologyIcons[technology as keyof typeof technologyIcons]);
    }, [valueFilter]);

    return { selectActive, selectOne, removeOne, selectStackIcons, valueFilter, setValueFilter };
};

