(self.webpackChunkweb_docs=self.webpackChunkweb_docs||[]).push([[742],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>p,kt:()=>v});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=o,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||a;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8979:e=>{const n={repoOwnerName:"hms-networks",repoName:"sc-java-maven-starter-project",title:"Solution Center Java Starter Project",description:"Kick off Java development on the Ewon Flexy with the HMS Networks Solution Center Java Starter Project.",meta:"Homepage for the HMS Networks MU Americas Solution Center Java Starter Project.",configFileName:"ExampleConfigurationFile.json",applicationJarFileName:"sc-java-maven-starter-project-X.Y.Z-full.jar",commonDocRepoTargetBranchOrTag:"v1.0.0"};e.exports={...n,repoUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName,repoArchiveUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName+"/archive/refs/heads/main.zip",repoLatestReleaseUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName+"/releases/latest",repoNewIssueUrl:"https://github.com/"+n.repoOwnerName+"/"+n.repoName+"/issues/new",commonDocsRepoUrl:"https://raw.githubusercontent.com/hms-networks/sc-ewon-flexy-common-docs/"+n.commonDocRepoTargetBranchOrTag+"/"}},899:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(7462),o=t(7294),a=t(3905),i=t(8979),s=t.n(i);t(4267),t(4058),t(7285);const l={id:"libraries-and-dependencies",title:"Libraries and Dependencies",sidebar_label:"Libraries and Dependencies"},d=void 0,p={unversionedId:"developer/libraries-and-dependencies",id:"developer/libraries-and-dependencies",title:"Libraries and Dependencies",description:"Libraries and Dependencies",source:"@site/docs/08-developer/02-LIBRARIES_DEPENDENCIES.mdx",sourceDirName:"08-developer",slug:"/developer/libraries-and-dependencies",permalink:"/sc-java-maven-starter-project/docs/developer/libraries-and-dependencies",draft:!1,editUrl:"https://github.com/hms-networks/sc-java-maven-starter-project/docs/08-developer/02-LIBRARIES_DEPENDENCIES.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"libraries-and-dependencies",title:"Libraries and Dependencies",sidebar_label:"Libraries and Dependencies"},sidebar:"defaultSidebar",previous:{title:"Development Environment Information",permalink:"/sc-java-maven-starter-project/docs/developer/development-environment"},next:{title:"Maven Lifecycles",permalink:"/sc-java-maven-starter-project/docs/developer/maven-lifecycles"}},c={},u=[{value:"Libraries and Dependencies",id:"libraries-and-dependencies",level:2},{value:"Adding Libraries and Dependencies",id:"adding-libraries-and-dependencies",level:3},{value:"Ewon ETK",id:"ewon-etk",level:3},{value:"Solution Center Repository",id:"solution-center-repository",level:3}],m={toc:u},v="wrapper";function h(e){let{components:n,...t}=e;return(0,a.kt)(v,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"libraries-and-dependencies"},"Libraries and Dependencies"),(0,a.kt)(o.Fragment,null,"This ",s().title," itself does not require any libraries or dependencies. For your convenience though, the Ewon ETK is already included as a dependency."),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"adding-libraries-and-dependencies"},"Adding Libraries and Dependencies"),(0,a.kt)("p",null,"As required, you can include additional libraries or dependencies using the Maven build system. To\ninclude a new library or dependency, add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"<dependency></dependency>")," block in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"<dependencies></dependencies>")," section of your ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml"),". For example,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependencies>\n  ...\n  <dependency>\n    <groupId>commons-lang</groupId>\n    <artifactId>commons-lang</artifactId>\n    <version>2.6</version>\n  </dependency>\n  ...\n</dependencies>\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Additional libraries or dependencies must support Java 1.4, as this is the version of Java supported\nby the Ewon JTK.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Adding dependencies may introduce warnings or errors during the Maven build process which are unable\nto be addressed in this project. These warnings and errors can typically be ignored."),(0,a.kt)("p",{parentName:"admonition"},"If you encounter Javadoc generation errors, please refer to\nthe ",(0,a.kt)("a",{parentName:"p",href:"/sc-java-maven-starter-project/docs/help/troubleshooting#3-javadoc-errors-during-build-after-updating-the-pom-file"},"Javadoc Errors During Build After Updating the POM File"),"\nsection of the ",(0,a.kt)("a",{parentName:"p",href:"/sc-java-maven-starter-project/docs/help/troubleshooting"},"Troubleshooting")," page.")),(0,a.kt)("h3",{id:"ewon-etk"},"Ewon ETK"),(0,a.kt)("p",null,"If you removed the Ewon ETK dependency, or otherwise need to re-add it, you can include it by adding\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"<dependency></dependency>")," block in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<dependencies></dependencies>")," section of\nyour ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependencies>\n  ...\n  <dependency>\n    <groupId>com.hms_networks.americas.sc.mvnlibs</groupId>\n    <artifactId>ewon-etk</artifactId>\n    <version>1.4.4</version>\n    <scope>provided</scope>\n  </dependency>\n  ...\n</dependencies>\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The scope must be set to 'provided' for the Ewon ETK. This indicates that the library is\nprovided by the system and does not need to be included in the packaged JAR file.")),(0,a.kt)("h3",{id:"solution-center-repository"},"Solution Center Repository"),(0,a.kt)("p",null,"The Ewon ETK and HMS Americas Solution Center libraries are available via the solution center\nrepository. For your convenience though, the solution center repository is already included."),(0,a.kt)("p",null,"If you removed the solution center repository, or otherwise need to re-add it, you can include it by\nadding the following ",(0,a.kt)("inlineCode",{parentName:"p"},"<repository></repository>")," block in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<repositories></repositories>"),"\nsection of your ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n<repositories>\n  ...\n  \x3c!-- HMS Networks, MU Americas Solution Center Maven Repo --\x3e\n  <repository>\n    <id>sc-java-maven-repo</id>\n    <name>HMS Networks, MU Americas Solution Center Maven Repo</name>\n    <url>https://github.com/hms-networks/sc-java-maven-repo/raw/main/</url>\n  </repository>\n  ...\n</repositories>\n")))}h.isMDXComponent=!0},7285:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>p});var r=t(7462),o=t(7294),a=t(3905),i=t(8979),s=t.n(i);const l={toc:[{value:"Installing a Suitable Ewon Firmware Version",id:"installing-a-suitable-ewon-firmware-version",level:4}]},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Fragment,null,"The ",s().title," requires a minimum Ewon firmware version of 14.6 or higher. Older firmware versions may be incompatible and are not supported."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"installing-a-suitable-ewon-firmware-version"},"Installing a Suitable Ewon Firmware Version"),(0,a.kt)("p",null,"If you do not have a suitable Ewon firmware version installed on your system, you may download and\ninstall one from the ",(0,a.kt)("a",{parentName:"p",href:"https://www.ewon.biz/technical-support/pages/firmware"},"Ewon Support webpage"),"."),(0,a.kt)("p",null,"Follow the instructions provided on the Ewon Support webpage for your specific Ewon device to\ninstall the firmware."))}p.isMDXComponent=!0},4267:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>p});var r=t(7462),o=t(7294),a=t(3905),i=t(8979),s=t.n(i);const l={toc:[{value:"Installing a Suitable JDK",id:"installing-a-suitable-jdk",level:4}]},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Fragment,null,"The ",s().title," has been designed to work with the latest versions of Java, and has been tested successfully with Java 16+. Older versions of Java may be compatible, but have not been tested and are not supported."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"During the Maven ",(0,a.kt)("a",{parentName:"p",href:"#package-lifecycle"},"package lifecycle"),", an Ewon-compatible JDK will be\nautomatically downloaded and used to compile the resulting source code. This allows for better\ncross-platform developer support, compilation consistency, and enables the use of modern Java and\nMaven environments on the host by isolating source code compilation.")),(0,a.kt)("h4",{id:"installing-a-suitable-jdk"},"Installing a Suitable JDK"),(0,a.kt)("p",null,"If you do not have a suitable JDK installed on your system, follow the vendor instructions to\ndownload and install one from the following sources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/corretto/"},"Amazon Corretto (recommended)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://bell-sw.com/pages/downloads/"},"BellSoft Liberica")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://adoptopenjdk.net/"},"AdoptOpenJDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.azul.com/downloads/zulu-community/"},"Azul Zulu")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openjdk.java.net/"},"OpenJDK"))),(0,a.kt)("admonition",{title:"Recommended JDK",type:"tip"},(0,a.kt)(o.Fragment,null,"If you are unsure which JDK to use, we recommend using the Amazon Corretto JDK. It is free, open source, tested successfully, and is the default JDK used by the ",s().title,"\xa0 CI/CD pipelines.")))}p.isMDXComponent=!0},4058:(e,n,t)=>{"use strict";t.d(n,{ZP:()=>p});var r=t(7462),o=t(7294),a=t(3905),i=t(8979),s=t.n(i);const l={toc:[{value:"Installing a Suitable Maven Version",id:"installing-a-suitable-maven-version",level:4}]},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o.Fragment,null,"The ",s().title," has been designed to work with the latest versions of Maven, and has been tested successfully with Maven 3.6.3+. Older versions of Maven may be compatible, but have not been tested and are not supported."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"installing-a-suitable-maven-version"},"Installing a Suitable Maven Version"),(0,a.kt)("p",null,"Many IDEs and build tools include Maven, and may be used to build the {ScDocusaurusConfig.title}\nwithout installing Maven directly."),(0,a.kt)("p",null,"If you do not have a suitable Maven version installed on your system, or would prefer to use Maven\nmanually, follow the vendor instructions to download and install one from\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://maven.apache.org/download.cgi"},"Apache Maven webpage"),"."))}p.isMDXComponent=!0}}]);