import { IDropdownItem } from '../../../../components/Dropdown/Dropdown.type';
import {
    DiAndroid,
    DiAngularSimple,
    DiAppcelerator,
    DiAptana,
    DiAsterisk,
    DiAtlassian,
    DiAtom,
    DiAws,
    DiBackbone,
    DiBingSmall,
    DiBintray,
    DiBitbucket,
    DiBootstrap,
    DiBower,
    DiBrackets,
    DiBugsense,
    DiCelluloid,
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
    DiNodejs,
    DiNpm,
    DiOpenshift,
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
    DiYeoman,
    DiYii,
    DiZend
} from 'react-icons/di';
import { BsExplicitFill, BsFiletypeSql } from "react-icons/bs";
import { SiFlask, SiTypescript, SiKotlin, SiLua, SiMicrosoftazure } from "react-icons/si";
import { TbCircleLetterC, TbHexagonLetterC, TbSquareLetterR, TbLetterM } from "react-icons/tb";
import { LuFileJson2 } from "react-icons/lu";

export const technologyIcons: IDropdownItem[] = [
    {
        value: "Android",
        Icon: DiAndroid,
        color: "#a4c639",
        name: "Android"
    },
    {
        value: "Angular",
        Icon: DiAngularSimple,
        color: "#dd1b16",
        name: "Angular"
    },
    {
        value: "Appcelerator",
        Icon: DiAppcelerator,
        color: "#5c79a3",
        name: "Appcelerator"
    },
    {
        value: "Aptana",
        Icon: DiAptana,
        color: "#4e9a05",
        name: "Aptana"
    },
    {
        value: "Asterisk",
        Icon: DiAsterisk,
        color: "#ffce4a",
        name: "Asterisk"
    },
    {
        value: "Atlassian",
        Icon: DiAtlassian,
        color: "#003366",
        name: "Atlassian"
    },
    {
        value: "Atom",
        Icon: DiAtom,
        color: "#66595C",
        name: "Atom"
    },
    {
        value: "AWS",
        Icon: DiAws,
        color: "#FF9900",
        name: "AWS"
    },
    {
        value: "Azure",
        Icon: SiMicrosoftazure,
        color: "#0082CB",
        name: "Azure"
    },
    {
        value: "Backbone",
        Icon: DiBackbone,
        color: "#0071b5",
        name: "Backbone"
    },
    {
        value: "Bing",
        Icon: DiBingSmall,
        color: "#ffb900",
        name: "Bing"
    },
    {
        value: "Bintray",
        Icon: DiBintray,
        color: "#3e8ef7",
        name: "Bintray"
    },
    {
        value: "Bitbucket",
        Icon: DiBitbucket,
        color: "#205081",
        name: "Bitbucket"
    },
    {
        value: "Bootstrap",
        Icon: DiBootstrap,
        color: "#563d7c",
        name: "Bootstrap"
    },
    {
        value: "Bower",
        Icon: DiBower,
        color: "#ffcc2f",
        name: "Bower"
    },
    {
        value: "Brackets",
        Icon: DiBrackets,
        color: "#2e2e2e",
        name: "Brackets"
    },
    {
        value: "Bugsense",
        Icon: DiBugsense,
        color: "#1cbbb4",
        name: "Bugsense"
    },
    {
        value: "C",
        Icon: TbCircleLetterC,
        color: "#A0B1C3",
        name: "C"
    },
    {
        value: "C++",
        Icon: TbHexagonLetterC,
        color: "#6192C8",
        name: "C++"
    },
    {
        value: "C#",
        Icon: TbHexagonLetterC,
        color: "#934B8F",
        name: "C#"
    },
    {
        value: "Celluloid",
        Icon: DiCelluloid,
        color: "#b09b5a",
        name: "Celluloid"
    },
    {
        value: "Cisco",
        Icon: DiCisco,
        color: "#1ba0d7",
        name: "Cisco"
    },
    {
        value: "Clojure Alt",
        Icon: DiClojureAlt,
        color: "#db5855",
        name: "Clojure Alt"
    },
    {
        value: "Clojure",
        Icon: DiClojure,
        color: "#db5855",
        name: "Clojure"
    },
    {
        value: "Cloud9",
        Icon: DiCloud9,
        color: "#1abc9c",
        name: "Cloud9"
    },
    {
        value: "Coda",
        Icon: DiCoda,
        color: "#44b3e5",
        name: "Coda"
    },
    {
        value: "Code Badge",
        Icon: DiCodeBadge,
        color: "#f44b25",
        name: "Code Badge"
    },
    {
        value: "Code",
        Icon: DiCode,
        color: "#000000",
        name: "Code"
    },
    {
        value: "Codeigniter",
        Icon: DiCodeigniter,
        color: "#dd4814",
        name: "Codeigniter"
    },
    {
        value: "Codepen",
        Icon: DiCodepen,
        color: "#000000",
        name: "Codepen"
    },
    {
        value: "Codrops",
        Icon: DiCodrops,
        color: "#000000",
        name: "Codrops"
    },
    {
        value: "Coffeescript",
        Icon: DiCoffeescript,
        color: "#244776",
        name: "Coffeescript"
    },
    {
        value: "Compass",
        Icon: DiCompass,
        color: "#8c8c8c",
        name: "Compass"
    },
    {
        value: "Composer",
        Icon: DiComposer,
        color: "#885630",
        name: "Composer"
    },
    {
        value: "Creative Commons Badge",
        Icon: DiCreativecommonsBadge,
        color: "#efb913",
        name: "Creative Commons Badge"
    },
    {
        value: "Creative Commons",
        Icon: DiCreativecommons,
        color: "#efb913",
        name: "Creative Commons"
    },
    {
        value: "CSS3",
        Icon: DiCss3,
        color: "#254bdd",
        name: "CSS3"
    },
    {
        value: "CSS Tricks",
        Icon: DiCssTricks,
        color: "#1e72b3",
        name: "CSS Tricks"
    },
    {
        value: "CSS3 Full",
        Icon: DiCss3Full,
        color: "#254bdd",
        name: "CSS3 Full"
    },
    {
        value: "CSSDeck",
        Icon: DiCssdeck,
        color: "#219fce",
        name: "CSSDeck"
    },
    {
        value: "Dart",
        Icon: DiDart,
        color: "#0175c2",
        name: "Dart"
    },
    {
        value: "Database",
        Icon: DiDatabase,
        color: "#c0c0c0",
        name: "Database"
    },
    {
        value: "Debian",
        Icon: DiDebian,
        color: "#d70a53",
        name: "Debian"
    },
    {
        value: "DigitalOcean",
        Icon: DiDigitalOcean,
        color: "#008bcf",
        name: "DigitalOcean"
    },
    {
        value: "Django",
        Icon: DiDjango,
        color: "#092e20",
        name: "Django"
    },
    {
        value: "Dlang",
        Icon: DiDlang,
        color: "#008aff",
        name: "Dlang"
    },
    {
        value: "Docker",
        Icon: DiDocker,
        color: "#1488C6",
        name: "Docker"
    },
    {
        value: "Doctrine",
        Icon: DiDoctrine,
        color: "#753a30",
        name: "Doctrine"
    },
    {
        value: "Dojo",
        Icon: DiDojo,
        color: "#01a8fe",
        name: "Dojo"
    },
    {
        value: "Dotnet",
        Icon: DiDotnet,
        color: "#5c2d91",
        name: "Dotnet"
    },
    {
        value: "Dreamweaver",
        Icon: DiDreamweaver,
        color: "#ca4246",
        name: "Dreamweaver"
    },
    {
        value: "Dropbox",
        Icon: DiDropbox,
        color: "#007ee5",
        name: "Dropbox"
    },
    {
        value: "Drupal",
        Icon: DiDrupal,
        color: "#0077c0",
        name: "Drupal"
    },
    {
        value: "Eclipse",
        Icon: DiEclipse,
        color: "#2c2255",
        name: "Eclipse"
    },
    {
        value: "Ember",
        Icon: DiEmber,
        color: "#f23819",
        name: "Ember"
    },
    {
        value: "Envato",
        Icon: DiEnvato,
        color: "#82b541",
        name: "Envato"
    },
    {
        value: "Erlang",
        Icon: DiErlang,
        color: "#a90533",
        name: "Erlang"
    },
    {
        value: "Express",
        Icon: BsExplicitFill,
        color: "#313131",
        name: "Express"
    },
    {
        value: "Extjs",
        Icon: DiExtjs,
        color: "#87baf3",
        name: "Extjs"
    },
    {
        value: "Firebase",
        Icon: DiFirebase,
        color: "#ffcb2b",
        name: "Firebase"
    },
    {
        value: "Firefox",
        Icon: DiFirefox,
        color: "#e66000",
        name: "Firefox"
    },
    {
        value: "Flask",
        Icon: SiFlask,
        color: "#346D9D",
        name: "Flask"
    },
    {
        value: "F#",
        Icon: DiFsharp,
        color: "#378bba",
        name: "F#"
    },
    {
        value: "Ghost",
        Icon: DiGhost,
        color: "#212425",
        name: "Ghost"
    },
    {
        value: "Git Branch",
        Icon: DiGitBranch,
        color: "#f34f29",
        name: "Git Branch"
    },
    {
        value: "Git Commit",
        Icon: DiGitCommit,
        color: "#f34f29",
        name: "Git Commit"
    },
    {
        value: "Git Compare",
        Icon: DiGitCompare,
        color: "#f34f29",
        name: "Git Compare"
    },
    {
        value: "Git Merge",
        Icon: DiGitMerge,
        color: "#f34f29",
        name: "Git Merge"
    },
    {
        value: "Git Pull Request",
        Icon: DiGitPullRequest,
        color: "#f34f29",
        name: "Git Pull Request"
    },
    {
        value: "Git",
        Icon: DiGit,
        color: "#f34f29",
        name: "Git"
    },
    {
        value: "GitHub Alt",
        Icon: DiGithubAlt,
        color: "#181717",
        name: "GitHub Alt"
    },
    {
        value: "GitHub Badge",
        Icon: DiGithubBadge,
        color: "#181717",
        name: "GitHub Badge"
    },
    {
        value: "GitHub Full",
        Icon: DiGithubFull,
        color: "#181717",
        name: "GitHub Full"
    },
    {
        value: "GitHub",
        Icon: DiGithub,
        color: "#181717",
        name: "GitHub"
    },
    {
        value: "GNU",
        Icon: DiGnu,
        color: "#a42e2b",
        name: "GNU"
    },
    {
        value: "Go",
        Icon: DiGo,
        color: "#00acd7",
        name: "Go"
    },
    {
        value: "Google Analytics",
        Icon: DiGoogleAnalytics,
        color: "#d64826",
        name: "Google Analytics"
    },
    {
        value: "Google Cloud Platform",
        Icon: DiGoogleCloudPlatform,
        color: "#4285f4",
        name: "Google Cloud Platform"
    },
    {
        value: "Grails",
        Icon: DiGrails,
        color: "#3e2e1e",
        name: "Grails"
    },
    {
        value: "Groovy",
        Icon: DiGroovy,
        color: "#4298b8",
        name: "Groovy"
    },
    {
        value: "Grunt",
        Icon: DiGrunt,
        color: "#fba919",
        name: "Grunt"
    },
    {
        value: "Gulp",
        Icon: DiGulp,
        color: "#db4446",
        name: "Gulp"
    },
    {
        value: "Hacker News",
        Icon: DiHackernews,
        color: "#ff6600",
        name: "Hacker News"
    },
    {
        value: "Haskell",
        Icon: DiHaskell,
        color: "#5e5086",
        name: "Haskell"
    },
    {
        value: "Heroku",
        Icon: DiHeroku,
        color: "#79589f",
        name: "Heroku"
    },
    {
        value: "HTML5 3D Effects",
        Icon: DiHtml53DEffects,
        color: "#e34c26",
        name: "HTML5 3D Effects"
    },
    {
        value: "HTML5 Connectivity",
        Icon: DiHtml5Connectivity,
        color: "#e34c26",
        name: "HTML5 Connectivity"
    },
    {
        value: "HTML5 Device Access",
        Icon: DiHtml5DeviceAccess,
        color: "#e34c26",
        name: "HTML5 Device Access"
    },
    {
        value: "HTML5 Multimedia",
        Icon: DiHtml5Multimedia,
        color: "#e34c26",
        name: "HTML5 Multimedia"
    },
    {
        value: "HTML5",
        Icon: DiHtml5,
        color: "#e34c26",
        name: "HTML5"
    },
    {
        value: "Internet Explorer",
        Icon: DiIe,
        color: "#1c87c9",
        name: "Internet Explorer"
    },
    {
        value: "Illustrator",
        Icon: DiIllustrator,
        color: "#f79500",
        name: "Illustrator"
    },
    {
        value: "Intellij",
        Icon: DiIntellij,
        color: "#000000",
        name: "Intellij"
    },
    {
        value: "Ionic",
        Icon: DiIonic,
        color: "#4a8eff",
        name: "Ionic"
    },
    {
        value: "Java",
        Icon: DiJava,
        color: "#e94e31",
        name: "Java"
    },
    {
        value: "Javascript 1",
        Icon: DiJavascript1,
        color: "#f1e05a",
        name: "Javascript 1"
    },
    {
        value: "Javascript",
        Icon: DiJavascript,
        color: "#f1e05a",
        name: "Javascript"
    },
    {
        value: "Jekyll",
        Icon: DiJekyllSmall,
        color: "#9b785e",
        name: "Jekyll"
    },
    {
        value: "Jenkins",
        Icon: DiJenkins,
        color: "#d24939",
        name: "Jenkins"
    },
    {
        value: "Jira",
        Icon: DiJira,
        color: "#0052cc",
        name: "Jira"
    },
    {
        value: "Joomla",
        Icon: DiJoomla,
        color: "#f44321",
        name: "Joomla"
    },
    {
        value: "jQuery Logo",
        Icon: DiJqueryLogo,
        color: "#0868ac",
        name: "jQuery Logo"
    },
    {
        value: "jQuery UI Logo",
        Icon: DiJqueryUiLogo,
        color: "#0868ac",
        name: "jQuery UI Logo"
    },
    {
        value: "JS Badge",
        Icon: DiJsBadge,
        color: "#f1e05a",
        name: "JS Badge"
    },
    {
        value: "Komodo",
        Icon: DiKomodo,
        color: "#194fa7",
        name: "Komodo"
    },
    {
        value: "Kotlin",
        Icon: SiKotlin,
        color: "#6671D6",
        name: "Kotlin"
    },
    {
        value: "Kraken.js Badge",
        Icon: DiKrakenjsBadge,
        color: "#82b414",
        name: "Kraken.js Badge"
    },
    {
        value: "Kraken.js",
        Icon: DiKrakenjs,
        color: "#82b414",
        name: "Kraken.js"
    },
    {
        value: "Laravel",
        Icon: DiLaravel,
        color: "#f55247",
        name: "Laravel"
    },
    {
        value: "LESS",
        Icon: DiLess,
        color: "#1d365d",
        name: "LESS"
    },
    {
        value: "Linux",
        Icon: DiLinux,
        color: "#000000",
        name: "Linux"
    },
    {
        value: "Lua",
        Icon: SiLua,
        color: "#000079",
        name: "Lua"
    },
    {
        value: "Magento",
        Icon: DiMagento,
        color: "#ee672f",
        name: "Magento"
    },
    {
        value: "Mailchimp",
        Icon: DiMailchimp,
        color: "#258dcd",
        name: "Mailchimp"
    },
    {
        value: "Markdown",
        Icon: DiMarkdown,
        color: "#083fa1",
        name: "Markdown"
    },
    {
        value: "Materialize CSS",
        Icon: DiMaterializecss,
        color: "#ee6e73",
        name: "Materialize CSS"
    },
    {
        value: "Matlab",
        Icon: TbLetterM,
        color: "#C5570F",
        name: "Matlab"
    },
    {
        value: "Meteor",
        Icon: DiMeteor,
        color: "#de4f4f",
        name: "Meteor"
    },
    {
        value: "Meteor Full",
        Icon: DiMeteorfull,
        color: "#de4f4f",
        name: "Meteor Full"
    },
    {
        value: "Modernizr",
        Icon: DiModernizr,
        color: "#f6a41f",
        name: "Modernizr"
    },
    {
        value: "MongoDB",
        Icon: DiMongodb,
        color: "#4db33d",
        name: "MongoDB"
    },
    {
        value: "Mootools Badge",
        Icon: DiMootoolsBadge,
        color: "#ea8c0d",
        name: "Mootools Badge"
    },
    {
        value: "Mootools",
        Icon: DiMootools,
        color: "#ea8c0d",
        name: "Mootools"
    },
    {
        value: "Mozilla",
        Icon: DiMozilla,
        color: "#000000",
        name: "Mozilla"
    },
    {
        value: "MSQL Server",
        Icon: DiMsqlServer,
        color: "#CC2927",
        name: "MSQL Server"
    },
    {
        value: "MySQL",
        Icon: DiMysql,
        color: "#00758f",
        name: "MySQL"
    },
    {
        value: "Nancy",
        Icon: DiNancy,
        color: "#df2494",
        name: "Nancy"
    },
    {
        value: "Netbeans",
        Icon: DiNetbeans,
        color: "#1b6ac6",
        name: "Netbeans"
    },
    {
        value: "Net Magazine",
        Icon: DiNetmagazine,
        color: "#e54028",
        name: "Net Magazine"
    },
    {
        value: "Nginx",
        Icon: DiNginx,
        color: "#009639",
        name: "Nginx"
    },
    {
        value: "Node.js",
        Icon: DiNodejs,
        color: "#3c873a",
        name: "Node.js"
    },
    {
        value: "NoSQL",
        Icon: LuFileJson2,
        color: "#076DEA",
        name: "NoSQL"
    },
    {
        value: "npm",
        Icon: DiNpm,
        color: "#CB3837",
        name: "npm"
    },
    {
        value: "OpenShift",
        Icon: DiOpenshift,
        color: "#ff3c00",
        name: "OpenShift"
    },
    {
        value: "Opera",
        Icon: DiOpera,
        color: "#CC0F16",
        name: "Opera"
    },
    {
        value: "Perl",
        Icon: DiPerl,
        color: "#0298c3",
        name: "Perl"
    },
    {
        value: "Phonegap",
        Icon: DiPhonegap,
        color: "#2c4e8c",
        name: "Phonegap"
    },
    {
        value: "Photoshop",
        Icon: DiPhotoshop,
        color: "#001d34",
        name: "Photoshop"
    },
    {
        value: "PHP",
        Icon: DiPhp,
        color: "#6181b6",
        name: "PHP"
    },
    {
        value: "PostgreSQL",
        Icon: DiPostgresql,
        color: "#31648c",
        name: "PostgreSQL"
    },
    {
        value: "Prolog",
        Icon: DiProlog,
        color: "#74283c",
        name: "Prolog"
    },
    {
        value: "Python",
        Icon: DiPython,
        color: "#3572A5",
        name: "Python"
    },
    {
        value: "R",
        Icon: TbSquareLetterR,
        color: "#1C60B0",
        name: "R"
    },
    {
        value: "Rackspace",
        Icon: DiRackspace,
        color: "#1e2e38",
        name: "Rackspace"
    },
    {
        value: "Raphael",
        Icon: DiRaphael,
        color: "#cddc39",
        name: "Raphael"
    },
    {
        value: "Raspberry Pi",
        Icon: DiRasberryPi,
        color: "#c51a4a",
        name: "Raspberry Pi"
    },
    {
        value: "React",
        Icon: DiReact,
        color: "#00d8ff",
        name: "React"
    },
    {
        value: "Red Hat",
        Icon: DiRedhat,
        color: "#cc0000",
        name: "Red Hat"
    },
    {
        value: "Redis",
        Icon: DiRedis,
        color: "#dc382d",
        name: "Redis"
    },
    {
        value: "RequireJS",
        Icon: DiRequirejs,
        color: "#df2029",
        name: "RequireJS"
    },
    {
        value: "Responsive",
        Icon: DiResponsive,
        color: "#43ace0",
        name: "Responsive"
    },
    {
        value: "Ruby on Rails",
        Icon: DiRor,
        color: "#CC0000",
        name: "Ruby on Rails"
    },
    {
        value: "Ruby Rough",
        Icon: DiRubyRough,
        color: "#CC342D",
        name: "Ruby Rough"
    },
    {
        value: "Ruby",
        Icon: DiRuby,
        color: "#CC342D",
        name: "Ruby"
    },
    {
        value: "Rust",
        Icon: DiRust,
        color: "#000000",
        name: "Rust"
    },
    {
        value: "Safari",
        Icon: DiSafari,
        color: "#000000",
        name: "Safari"
    },
    {
        value: "Sass",
        Icon: DiSass,
        color: "#CF649A",
        name: "Sass"
    },
    {
        value: "Scala",
        Icon: DiScala,
        color: "#dc322f",
        name: "Scala"
    },
    {
        value: "Scriptcs",
        Icon: DiScriptcs,
        color: "#1d4956",
        name: "Scriptcs"
    },
    {
        value: "Scrum",
        Icon: DiScrum,
        color: "#4ea408",
        name: "Scrum"
    },
    {
        value: "Sencha Touch",
        Icon: DiSenchatouch,
        color: "#82b541",
        name: "Sencha Touch"
    },
    {
        value: "Sizzle.js",
        Icon: DiSizzlejs,
        color: "#b91400",
        name: "Sizzle.js"
    },
    {
        value: "Smashing Magazine",
        Icon: DiSmashingMagazine,
        color: "#e53b2c",
        name: "Smashing Magazine"
    },
    {
        value: "Snap.svg",
        Icon: DiSnapSvg,
        color: "#ff0a0a",
        name: "Snap.svg"
    },
    {
        value: "Spark",
        Icon: DiSpark,
        color: "#f26d00",
        name: "Spark"
    },
    {
        value: "SQL",
        Icon: BsFiletypeSql,
        color: "#227EC4",
        name: "SQL"
    },
    {
        value: "SQLite",
        Icon: DiSqllite,
        color: "#003b57",
        name: "SQLite"
    },
    {
        value: "Stack Overflow",
        Icon: DiStackoverflow,
        color: "#f48024",
        name: "Stack Overflow"
    },
    {
        value: "Streamline",
        Icon: DiStreamline,
        color: "#4488c6",
        name: "Streamline"
    },
    {
        value: "Stylus",
        Icon: DiStylus,
        color: "#333333",
        name: "Stylus"
    },
    {
        value: "Sublime",
        Icon: DiSublime,
        color: "#fbd000",
        name: "Sublime"
    },
    {
        value: "Swift",
        Icon: DiSwift,
        color: "#ffac45",
        name: "Swift"
    },
    {
        value: "Symfony Badge",
        Icon: DiSymfonyBadge,
        color: "#000000",
        name: "Symfony Badge"
    },
    {
        value: "Symfony",
        Icon: DiSymfony,
        color: "#000000",
        name: "Symfony"
    },
    {
        value: "TechCrunch",
        Icon: DiTechcrunch,
        color: "#0a3463",
        name: "TechCrunch"
    },
    {
        value: "Terminal Badge",
        Icon: DiTerminalBadge,
        color: "#000000",
        name: "Terminal Badge"
    },
    {
        value: "Terminal",
        Icon: DiTerminal,
        color: "#000000",
        name: "Terminal"
    },
    {
        value: "Travis",
        Icon: DiTravis,
        color: "#3eaaaf",
        name: "Travis"
    },
    {
        value: "Trello",
        Icon: DiTrello,
        color: "#0079bf",
        name: "Trello"
    },
    {
        value: "TypeScript",
        Icon: SiTypescript,
        color: "#3178C6",
        name: "TypeScript"
    },
    {
        value: "TYPO3",
        Icon: DiTypo3,
        color: "#ff8700",
        name: "TYPO3"
    },
    {
        value: "Ubuntu",
        Icon: DiUbuntu,
        color: "#e95420",
        name: "Ubuntu"
    },
    {
        value: "UIKit",
        Icon: DiUikit,
        color: "#2396f3",
        name: "UIKit"
    },
    {
        value: "Unity",
        Icon: DiUnitySmall,
        color: "#000000",
        name: "Unity"
    },
    {
        value: "Vim",
        Icon: DiVim,
        color: "#019733",
        name: "Vim"
    },
    {
        value: "Visual Studio",
        Icon: DiVisualstudio,
        color: "#5d2b90",
        name: "Visual Studio"
    },
    {
        value: "W3C",
        Icon: DiW3C,
        color: "#005A9C",
        name: "W3C"
    },
    {
        value: "Web Platform",
        Icon: DiWebplatform,
        color: "#4c6fff",
        name: "Web Platform"
    },
    {
        value: "Windows",
        Icon: DiWindows,
        color: "#00bcf2",
        name: "Windows"
    },
    {
        value: "WordPress",
        Icon: DiWordpress,
        color: "#21759b",
        name: "WordPress"
    },
    {
        value: "Yeoman",
        Icon: DiYeoman,
        color: "#f6a71d",
        name: "Yeoman"
    },
    {
        value: "Yii",
        Icon: DiYii,
        color: "#d94126",
        name: "Yii"
    },
    {
        value: "Zend",
        Icon: DiZend,
        color: "#0679EA",
        name: "Zend"
    }
];
