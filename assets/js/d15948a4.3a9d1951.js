"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[8766],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50626:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"Data Preparation for Analytics",date:new Date("2022-03-01T00:00:00.000Z"),authors:["hooopo"],tags:["tidbcloud"]},s=void 0,c={permalink:"/blog/how-it-works",editUrl:"https://github.com/pingcap/ossinsight/edit/main/blog/how-it-works/index.md",source:"@site/blog/how-it-works/index.md",title:"Data Preparation for Analytics",description:"Data",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"tidbcloud",permalink:"/blog/tags/tidbcloud"}],readingTime:4.56,truncated:!0,authors:[{name:"hooopo",title:"Engineer of TiDB Community",url:"https://twitter.com/hooopo",imageURL:"https://github.com/hooopo.png",key:"hooopo"}],prevItem:{title:"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes",permalink:"/blog/try-it-yourself"}},u={authorsImageUrls:[void 0]},p=[{value:"Data",id:"data",children:[],level:2}],h={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"data"},"Data"),(0,i.kt)("p",null,"All the data we use here on this website sources from ",(0,i.kt)("a",{parentName:"p",href:"https://www.gharchive.org/"},"GH Archive"),", a non-profit project that records and archives all GitHub events data since 2011. The total data volume archived by GH Archive can be up to 4 billion rows. We download the ",(0,i.kt)("inlineCode",{parentName:"p"},"json file")," on GH Archive and convert it into csv format via Script, and finally load it into the TiDB cluster in parallel through ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/tidb-lightning-overview"},"TiDB-Lightning"),"."),(0,i.kt)("p",null,"In this section, we will explain step by step how we conduct this process. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Prepare the data in csv format for TiDB Lighting. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 gharchive_dev.github_events.000000000000.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000001.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000002.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000003.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000004.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000005.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000006.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000007.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000008.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000009.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000010.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000011.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000012.csv\n\u251c\u2500\u2500 gharchive_dev.github_events.000000000013.csv\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Configure the TiDB Lightning as follows.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'cat tidb-lightning.toml\n[mydumper.csv]\nseparator = \',\'\ndelimiter = \'"\'\nheader = true\nnot-null = false\nbackslash-escape = true\ntrim-last-separator = false\n\n[tikv-importer]\n backend = "local"\n sorted-kv-dir = "/kvdir/"\n\ndisk-quota = "1.5TiB"\n\n[mydumper]\ndata-source-dir = "/csv_dir/"\nstrict-format = false\nno-schema = true\n\n[tidb]\nhost = "xxx"\nport = 3306\nuser = "github_events"\npassword = "******"\n\n[lightning]\ncheck-requirements = false\nregion-concurrency = 32\nmeta-schema-name = "gharchive_meta"\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Load the data into the TiDB cluster. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nohup tidb-lightning -config ./tidb-lightning.toml > nohup.out\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Convert the unstructured ",(0,i.kt)("inlineCode",{parentName:"li"},"json file")," provided by GH Archive into structured data. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gharchive_dev> desc github_events;\n+--------------------+--------------+------+-----+---------+-------+\n| Field              | Type         | Null | Key | Default | Extra |\n+--------------------+--------------+------+-----+---------+-------+\n| id                 | bigint(20)   | YES  | MUL | <null>  |       |\n| type               | varchar(255) | YES  | MUL | <null>  |       |\n| created_at         | datetime     | YES  | MUL | <null>  |       |\n| repo_id            | bigint(20)   | YES  | MUL | <null>  |       |\n| repo_name          | varchar(255) | YES  | MUL | <null>  |       |\n| actor_id           | bigint(20)   | YES  | MUL | <null>  |       |\n| actor_login        | varchar(255) | YES  | MUL | <null>  |       |\n| actor_location     | varchar(255) | YES  |     | <null>  |       |\n| language           | varchar(255) | YES  | MUL | <null>  |       |\n| additions          | bigint(20)   | YES  | MUL | <null>  |       |\n| deletions          | bigint(20)   | YES  | MUL | <null>  |       |\n| action             | varchar(255) | YES  | MUL | <null>  |       |\n| number             | int(11)      | YES  |     | <null>  |       |\n| commit_id          | varchar(255) | YES  | MUL | <null>  |       |\n| comment_id         | bigint(20)   | YES  | MUL | <null>  |       |\n| org_login          | varchar(255) | YES  | MUL | <null>  |       |\n| org_id             | bigint(20)   | YES  | MUL | <null>  |       |\n| state              | varchar(255) | YES  |     | <null>  |       |\n| closed_at          | datetime     | YES  | MUL | <null>  |       |\n| comments           | int(11)      | YES  | MUL | <null>  |       |\n| pr_merged_at       | datetime     | YES  | MUL | <null>  |       |\n| pr_merged          | tinyint(1)   | YES  |     | <null>  |       |\n| pr_changed_files   | int(11)      | YES  | MUL | <null>  |       |\n| pr_review_comments | int(11)      | YES  | MUL | <null>  |       |\n| pr_or_issue_id     | bigint(20)   | YES  | MUL | <null>  |       |\n| event_day          | date         | YES  | MUL | <null>  |       |\n| event_month        | date         | YES  | MUL | <null>  |       |\n| author_association | varchar(255) | YES  |     | <null>  |       |\n| event_year         | int(11)      | YES  | MUL | <null>  |       |\n| push_size          | int(11)      | YES  |     | <null>  |       |\n| push_distinct_size | int(11)      | YES  |     | <null>  |       |\n+--------------------+--------------+------+-----+---------+-------+\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"With structured data at hand, we can start to make further analysis with TiDB Cloud. Execute SQL commands to generate analytical results. For example, you can execute SQL commands below to output the top 10 most starred JavaScript framework repos in 2021.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  SELECT js.name, count(*) as stars \n    FROM github_events \n         JOIN js_framework_repos js ON js.id = github_events.repo_id \n   WHERE type = 'WatchEvent' and event_year = 2021 \nGROUP BY 1 \nORDER BY 2 DESC\n   LIMIT 10;\n+-------------------+-------+\n| name              | stars |\n+-------------------+-------+\n| facebook/react    | 22830 |\n| sveltejs/svelte   | 18573 |\n| vuejs/vue         | 18015 |\n| angular/angular   | 11037 |\n| alpinejs/alpine   | 6993  |\n| preactjs/preact   | 2965  |\n| hotwired/stimulus | 1355  |\n| marko-js/marko    | 1006  |\n| neomjs/neo        | 826   |\n| tastejs/todomvc   | 813   |\n+-------------------+-------+\n")),(0,i.kt)("p",null,"We have analyzed all the GitHub projects regarding databases, JavaScripe frameworks, programming languages, web frameworks, and low-code development tools, and provided valuable insights in 2021, in real time, and custom insights. If the repository you care about is not included here, you're welcome to submit your PR ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hooopo/gharchive/tree/main/meta/repos"},"here"),". If you want to gain more insights into other areas, you can try TiDB Cloud by yourselves with this ",(0,i.kt)("a",{parentName:"p",href:"/blog/try-it-yourself/"},"10-minute tutorial"),". "),(0,i.kt)("p",null,"Below are the areas of GitHub projects we have analyzed. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"gharchive_dev> show tables;\n+-----------------------------+\n| Tables_in_gharchive_dev     |\n+-----------------------------+\n| cn_repos                    |\n| css_framework_repos         |\n| db_repos                    |\n| github_events               |\n| js_framework_repos          |\n| nocode_repos                |\n| programming_language_repos  |\n| static_site_generator_repos |\n| web_framework_repos         |\n+-----------------------------+\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("h3",{parentName:"div",id:"-details-in-how-oss-insight-works"},"\ud83c\udf1f Details in how OSS Insight works"),(0,i.kt)("p",{parentName:"div"},"Go to read ",(0,i.kt)("a",{parentName:"p",href:"/blog/try-it-yourself"},"Use TiDB Cloud to Analyze GitHub Events in 10 Minutes")," and use the ",(0,i.kt)("a",{parentName:"p",href:"https://tidbcloud.com/signup?utm_source=ossinsight&utm_medium=referral"},"Developer Tier")," ",(0,i.kt)("strong",{parentName:"p"},"free")," for 1 year."),(0,i.kt)("p",{parentName:"div"},"You can find the reason ",(0,i.kt)("a",{parentName:"p",href:"/blog/why-we-choose-tidb-to-support-oss-insight"},"Why We Choose TiDB to Support OSS Insight")," as well!"))))}d.isMDXComponent=!0}}]);