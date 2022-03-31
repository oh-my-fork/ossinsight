"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4669],{12571:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return C},default:function(){return R},frontMatter:function(){return T},metadata:function(){return w},toc:function(){return N}});var o=r(87462),a=r(63366),s=r(67294),n=r(3905),i=r(20407),u=r(67855),p=r(6971),c=r(73686),l=r(91262),m=r(87155),d=r(29359),h=r(85350),b={};function f(e){var t=e.type,r=e.percent,o=void 0!==r&&r,a=(0,p.WV)("rt-osdb-contributors-by-repo-group",b,!1),n=a.data,i=a.loading;return(0,c.pF)("rt-osdb-contributors-by-repo-group",s.createElement(l.Z,null,(function(){var e;return s.createElement(k,{data:null!=(e=null==n?void 0:n.data)?e:[],loading:i,size:24,type:t,percent:o})})),a)}var g=[10,100,1/0],y=["Developers with no more than 10 PRs","Developers with no more than 100 PRs","Developers with more than 100 PRs"];function k(e){var t=e.data,r=e.type,o=e.percent,a=e.loading,n=e.size,i=(0,h.Z)().isDarkTheme,p=function(e){return(0,s.useMemo)((function(){return e.reduce((function(e,t){e[t.repo_group_name]||(e[t.repo_group_name]={contributors:[],totalPrs:0});var r=e[t.repo_group_name];return r.totalPrs+=t.prs,r.contributors.push({contributor:t.contributor,prs:t.prs}),e}),{})}),[e])}(t),c=function(e,t,r){return(0,s.useMemo)((function(){return Object.entries(e).map((function(e){for(var o,a=e[0],s=e[1],n=g.map((function(){return 0})),i=0,p=(0,u.Z)(s.contributors);!(o=p()).done;)for(var c=o.value.prs,l=0;l<g.length;l++)if(c<g[l]){var m="prs"===t?c:1;n[l]+=m,i+=m;break}return[a,i].concat(n.map((function(e){return r?e/i:e})))})).sort((function(e,t){return t[1]-e[1]}))}),[e,t])}(p,r,o),l=(0,s.useMemo)((function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{show:!0},xAxis:{type:"value",position:"top",name:r,axisLabel:{formatter:o?function(e){return 100*e+"%"}:function(e){return e+" "+r}},max:o?1:void 0},yAxis:{type:"category",data:c.map((function(e){return e[0]})),inverse:!0},series:g.map((function(e,t){return{type:"bar",name:y[t],data:c.map((function(e){return e[t+2]})),stack:"total",emphasis:{focus:"series"},label:o||t!==g.length-1?void 0:{show:!0,position:"right",formatter:function(e){return""+c[e.dataIndex][1]}},tooltip:{valueFormatter:function(e){return o?(100*e).toFixed(1)+"%":e}}}}))}}),[g,c,r]),b=(0,s.useMemo)((function(){return a?400:c.length*(1.5*n)}),[n,a,c]),f=(0,s.useMemo)((function(){var e,t;return{devicePixelRatio:null!=(e=null==(t=window)?void 0:t.devicePixelRatio)?e:1,renderer:"canvas",height:b,width:"auto",locale:"en"}}),[b]);return s.createElement(m.Z,{showLoading:a,echarts:d,option:l,notMerge:!1,lazyUpdate:!0,theme:i?"dark":"vintage",style:{height:b,marginBottom:16,borderRadius:"var(--ifm-global-radius)",overflow:"hidden"},opts:f})}var v=["components"],T={title:"Why TiDB is Better",sidebar_class_name:"unlisted"},C=void 0,w={unversionedId:"database/how-about-tidb",id:"database/how-about-tidb",title:"Why TiDB is Better",description:"const tidbGroup = [41986369, 48833910, 53311716]",source:"@site/docs/database/how-about-tidb.mdx",sourceDirName:"database",slug:"/database/how-about-tidb",permalink:"/_/database/how-about-tidb",editUrl:"https://github.com/pingcap/ossinsight/edit/main/docs/database/how-about-tidb.mdx",tags:[],version:"current",frontMatter:{title:"Why TiDB is Better",sidebar_class_name:"unlisted"},sidebar:"tutorialSidebar",previous:{title:"Custom Insights",permalink:"/_/database/history"},next:{title:"JavaScript Framework",permalink:"/_/js-framework/"}},x=[41986369,48833910,53311716],N=[{value:"\u2753 What is tidb",id:"-what-is-tidb",children:[{value:"\u2139\ufe0f  Learn more about TiDB",id:"\u2139\ufe0f--learn-more-about-tidb",children:[],level:4}],level:2},{value:"\ud83d\udc40 Comparison",id:"-comparison",children:[{value:"The most starred OSDB repos since 2011 (updated 1 hour ago)",id:"the-most-starred-osdb-repos-since-2011-updated-1-hour-ago",children:[],level:3},{value:"Company of stargazers",id:"company-of-stargazers",children:[],level:3},{value:"Countries/Regions of stargazers",id:"countriesregions-of-stargazers",children:[],level:3},{value:"Issues",id:"issues",children:[],level:3},{value:"Average time cost from open issue to close",id:"average-time-cost-from-open-issue-to-close",children:[],level:3},{value:"Average time cost from open issue to first response",id:"average-time-cost-from-open-issue-to-first-response",children:[],level:3},{value:"Countries/Regions of Issue Openers",id:"countriesregions-of-issue-openers",children:[],level:3},{value:"Pull Requests",id:"pull-requests",children:[],level:3},{value:"Company of PR Creators about TiDB",id:"company-of-pr-creators-about-tidb",children:[],level:3},{value:"Countries/Regions of PR Creators",id:"countriesregions-of-pr-creators",children:[],level:3},{value:"Heat Map of Commits Time about PRs",id:"heat-map-of-commits-time-about-prs",children:[],level:3},{value:"Average time cost from open pull request to close it",id:"average-time-cost-from-open-pull-request-to-close-it",children:[],level:3},{value:"Contributors",id:"contributors",children:[{value:"The percentage of different types of contributors in total contributors",id:"the-percentage-of-different-types-of-contributors-in-total-contributors",children:[],level:4},{value:"The percentage of the sum of PRs submitted by different types of contributors in total PRs",id:"the-percentage-of-the-sum-of-prs-submitted-by-different-types-of-contributors-in-total-prs",children:[],level:4}],level:3}],level:2}],I={toc:N};function R(e){var t=e.components,r=(0,a.Z)(e,v);return(0,n.kt)("wrapper",(0,o.Z)({},I,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-what-is-tidb"},"\u2753 What is tidb"),(0,n.kt)("p",null,"TiDB is an open source distributed HTAP database compatible with the MySQL protocol"),(0,n.kt)("p",null,"Here is a video explaining what TiDB is. You can also check ",(0,n.kt)("a",{parentName:"p",href:"https://docs.pingcap.com/tidb/stable/overview"},"TiDB documents")," for more information."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/R7F7vPnaoTY",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,n.kt)("h4",{id:"\u2139\ufe0f--learn-more-about-tidb"},"\u2139\ufe0f  Learn more about TiDB"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Source Code: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/pingcap/tidb"},"https://github.com/pingcap/tidb")),(0,n.kt)("li",{parentName:"ul"},"Official Website: ",(0,n.kt)("a",{parentName:"li",href:"https://en.pingcap.com"},"https://en.pingcap.com")),(0,n.kt)("li",{parentName:"ul"},"Docs: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.pingcap.com"},"https://docs.pingcap.com"))),(0,n.kt)("h2",{id:"-comparison"},"\ud83d\udc40 Comparison"),(0,n.kt)("h3",{id:"the-most-starred-osdb-repos-since-2011-updated-1-hour-ago"},"The most starred OSDB repos since 2011 (updated 1 hour ago)"),(0,n.kt)("p",null,"The number of stars is often thought of as a measure of whether a github repository is popular or not. We sort all database repositories from github by the total number of historical stars since 2011."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rt-osdb-ranking-by-stars\n")),(0,n.kt)(i.h,{chart:"barchart",category:"rt-osdb-ranking-by-stars",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"num",seriesName:"Stars",categoryType:!1,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"company-of-stargazers"},"Company of stargazers"),(0,n.kt)("p",null,"The pie charts describe the major companies of stargazers for each project."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"stars-top-50-company\n")),(0,n.kt)(i.h,{chart:"piechart",category:"stars-top-50-company",formatSql:!1,categoryIndex:"company_name",valueIndex:"stargazers",categoryType:"owner",seriesName:"Stargazers",repoId:x,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"countriesregions-of-stargazers"},"Countries/Regions of stargazers"),(0,n.kt)("p",null,"This map will show you which country or region does stargazers come from. They make an issue to report the problem, or request a new feature."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"issue-creators-map\n")),(0,n.kt)(i.h,{chart:"worldmapchart",category:"stars-map",formatSql:!1,categoryIndex:"country_or_area",valueIndex:"count",seriesName:"stargazers",effect:!1,size:56,repoId:x,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"issues"},"Issues"),(0,n.kt)("p",null,"Total number of issues, issue submitters, issues comments, and issue commenters since 2011."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rt-osdb-ranking-by-issues\n")),(0,n.kt)(i.h,{chart:"barchart",category:"rt-osdb-ranking-by-issues",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"num",seriesName:"Issues",categoryType:!1,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"average-time-cost-from-open-issue-to-close"},"Average time cost from open issue to close"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rt-osdb-ranking-by-average-issue-open-to-close\n")),(0,n.kt)(i.h,{chart:"barchart",category:"rt-osdb-ranking-by-average-issue-open-to-close",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"days",seriesName:"Days",categoryType:!1,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"average-time-cost-from-open-issue-to-first-response"},"Average time cost from open issue to first response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rt-osdb-ranking-by-average-issue-open-to-first-responed\n")),(0,n.kt)(i.h,{chart:"barchart",category:"rt-osdb-ranking-by-average-issue-open-to-first-responed",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"days",seriesName:"Days",categoryType:!1,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"countriesregions-of-issue-openers"},"Countries/Regions of Issue Openers"),(0,n.kt)("p",null,"This map will show you which country or region does issue creators come from. They make an issue to report the problem, or request a new feature."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"issue-creators-map\n")),(0,n.kt)(i.h,{chart:"worldmapchart",category:"issue-creators-map",formatSql:!1,categoryIndex:"country_or_area",valueIndex:"count",seriesName:"Issue openers",effect:!1,size:56,repoId:x,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"pull-requests"},"Pull Requests"),(0,n.kt)("p",null,"Total number of pull requests (PRs), PR creators, PR reviews, and PR reviewers since 2011."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rt-osdb-ranking-by-prs\n")),(0,n.kt)(i.h,{chart:"barchart",category:"rt-osdb-ranking-by-prs",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"num",seriesName:"PRs",categoryType:!1,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"company-of-pr-creators-about-tidb"},"Company of PR Creators about TiDB"),(0,n.kt)("p",null,"The pie charts describe the major companies of PR creators for each project."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pull-request-creators-top-50-company\n")),(0,n.kt)(i.h,{chart:"piechart",category:"pull-request-creators-top-50-company",formatSql:!1,categoryIndex:"company_name",valueIndex:"code_contributors",categoryType:"owner",seriesName:"Contributors",repoId:x,mdxType:"CommonChart"}),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"If you want to learn company distribution about other repository, please visit: ",(0,n.kt)("a",{parentName:"p",href:"https://ossinsight.io/compare"},"https://ossinsight.io/compare"),"."))),(0,n.kt)("h3",{id:"countriesregions-of-pr-creators"},"Countries/Regions of PR Creators"),(0,n.kt)("p",null,"This map shows you where the PR creators come from and which countries or regions like the project the best."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"pull-request-creators-map\n")),(0,n.kt)(i.h,{chart:"worldmapchart",category:"pull-request-creators-map",formatSql:!1,categoryIndex:"country_or_area",valueIndex:"count",seriesName:"PR creators",effect:!1,size:56,repoId:x,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"heat-map-of-commits-time-about-prs"},"Heat Map of Commits Time about PRs"),(0,n.kt)("p",null,"The Heat Maps of Commits Time display the number of push events occurring at a particular point of time. The Y-axis represents seven days a week, and the X-axis represents 24 hours a day according to the Universal Time Coordinated (UTC). The lighter color in this heat map indicates that less push events occur at a particular point of time. On the contrary, the darker color indicates more push events occurring."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"heatmap\n")),(0,n.kt)(i.h,{chart:"heatmapchart",category:"commits-time-distribution",xIndex:"hour",yIndex:"dayofweek",valueIndex:"pushes",formatSql:!1,repoId:x,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"average-time-cost-from-open-pull-request-to-close-it"},"Average time cost from open pull request to close it"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rt-osdb-ranking-by-average-pr-open-to-merge\n")),(0,n.kt)(i.h,{chart:"barchart",category:"rt-osdb-ranking-by-average-pr-open-to-merge",n:20,formatSql:!1,categoryIndex:"repo_group_name",valueIndex:"days",seriesName:"Days",categoryType:!1,mdxType:"CommonChart"}),(0,n.kt)("h3",{id:"contributors"},"Contributors"),(0,n.kt)("p",null,"The total number of contributors since 2011 about each repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"rt-osdb-ranking-by-contributors\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"by Contributors")),(0,n.kt)("h4",{id:"the-percentage-of-different-types-of-contributors-in-total-contributors"},"The percentage of different types of contributors in total contributors"),(0,n.kt)("p",null,"*All contributors are classified according to the total number of PRs submitted by themselves into <= 10,<= 100,> 100."),(0,n.kt)(f,{type:"contributors",percent:!0,mdxType:"ContributorsCharts"}),(0,n.kt)(f,{type:"contributors",mdxType:"ContributorsCharts"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"by PRs")),(0,n.kt)("h4",{id:"the-percentage-of-the-sum-of-prs-submitted-by-different-types-of-contributors-in-total-prs"},"The percentage of the sum of PRs submitted by different types of contributors in total PRs"),(0,n.kt)("p",null,"*All contributors are classified according to the total number of PRs submitted by themselves into <= 10,<= 100,> 100."),(0,n.kt)(f,{type:"prs",percent:!0,mdxType:"ContributorsCharts"}),(0,n.kt)(f,{type:"prs",mdxType:"ContributorsCharts"}))}R.isMDXComponent=!0}}]);