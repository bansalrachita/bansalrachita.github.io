(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=(a(73),a(7)),o=a.n(i),l=a(141),s=[{Engineer:["Web","Full Stack Software"]},{Painter:["Sane","Versatile"]},{Violinist:["Amateur","Young"]},{"Open Source":["contributor","Evangelist"]}],c=[["React","Redux","Node","Git","BlueprintJS","GraphQL","AWS","Google Maps","MongoDB","REST"],["MS SQL-Server","T-SQL","JScript"],["Progress4GL","UNIX"]],u=["Java","Sprint Security","MySQL","HTML","CSS","Node","Neo4j","Python","MongoDB"],d=["Data Structures","Algorithms"],m=["https://medium.com/@rachitabansal","https://github.com/bansalrachita","https://twitter.com/BansalRachita","https://www.npmjs.com/~rachita","https://dribbble.com/racb"],p=[{value:"https://github.com/bansalrachita/react-vr",key:"react-vr",text:"Trying out React VR library."},{value:"https://github.com/bansalrachita/scss-basics",key:"scss-basics",text:"Learning SCSS"},{value:"https://github.com/bansalrachita/material-ui-pagination-react",key:"material-ui-pagination",text:"React Pagination component with Material-UI"},{value:"https://github.com/bansalrachita/react-todosAppt",key:"react-todo-app",text:"Learning React with a small Todo App"},{value:"https://github.com/bansalrachita/Ilead",key:"Leader board",text:"Web app using Java Spring Security and Hibernate"},{value:"https://github.com/bansalrachita/VaccineDistributionProblem",key:"Vaccine distribution System",text:"Java Swing Application"},{value:"https://github.com/bansalrachita/query-string-params",key:" query-string-params",text:"URL string to object / list of objects"},{value:"https://github.com/bansalrachita/react-routes",key:"react-router-app",text:"Learning React Router"}],h=[{value:"https://github.com/bansalrachita/Enron-SocialNetworkAnalytics/blob/master/README.md",key:"Enron Dataset Mining"},{value:"https://github.com/bansalrachita/Yelp-Friends-Recommendation/blob/master/README.md",key:"Yelp Distributed Recommendation System"},{value:"https://github.com/bansalrachita/JobTrackingSystem/blob/master/README.md",key:"MEAN Stack Web Application"},{value:"https://github.com/cloudaddy/cloudaddys-project/blob/master/README.md",key:"Cloudaddy - a Cloud app simulation at scale"}],f=(a(74),a(51),a(146),function(e){var t=e.adjective,a=e.text;return r.a.createElement("h5",null,t," ",a)}),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).componentDidMount=function(){setInterval(function(){a.setState({count:a.state.count+1})},5e3)},a.componentDidUpdate=function(e,t){1===t.count&&a.setState({count:0})},a.state={subTitle:null,subTitles:s,count:0},a}return o()(t,e),t.prototype.render=function(){var e=this.state,t=e.subTitles,a=e.count;return r.a.createElement(n.Fragment,null,t.map(function(e,t){return r.a.createElement(f,{key:t,text:"Open Source"===Object.keys(e)[0]?e[Object.keys(e)[0]][a]:Object.keys(e)[0],adjective:"Open Source"===Object.keys(e)[0]?Object.keys(e)[0]:e[Object.keys(e)[0]][a]})}))},t}(n.Component),v=function(e){var t=e.summary;return r.a.createElement("div",{className:"summary"},r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))},b=function(e){return e.badges.map(function(e,t){return r.a.createElement("span",{key:e+"-"+t,className:"badges"},e)})},y=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props.badges;return r.a.createElement("div",null,r.a.createElement(b,{badges:e}))},t}(n.Component),E=function(e){var t=e.work;return r.a.createElement("div",{className:"work"},r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("h3",null,"Federated Wireless Inc."),"@Federated Wireless, I've been developing a Spectrum Access Controller web application in React, Redux and Node.js. I implemented a testing framework to back the web application testing using Mocha, Chai, Karma, Selenium & integrated it with Jenkins CI pipeline.",r.a.createElement("p",null,"We have a micro-services architecture and I contributed to it by designing a server-less GraphQL micro-service architecture using Node.js and MongoDB hosted on AWS Cloud, and building scalable, secure and lightweight APIs on top of it to represent large amounts of data in the application."),r.a.createElement(y,{badges:c[0]}),r.a.createElement("hr",null),r.a.createElement("h3",null,"Boston Children's Hospital"),r.a.createElement("p",null,"I Interned at BCH during 2015 and was migrating from Sybase to SQL Server & JScript application for keeping Biobank data. I worked on data modeling, design and development of user interface, SQL scripts & stored procedure in T-SQL."),r.a.createElement(y,{badges:c[1]}),r.a.createElement("hr",null),r.a.createElement("h3",null,"Infosys Ltd."),r.a.createElement("p",null,"During my time @Infosys, I developed data extraction scripts for data migration in GBs and Implemented performance tuning and multithreading to minimize execution time of scripts running on the UNIX server."),r.a.createElement(y,{badges:c[2]}))},w=function(){return r.a.createElement("div",{className:"education"},r.a.createElement("h1",null,"Education"),r.a.createElement("h3",null,"M.S. in Information Systems, Northeastern University"),r.a.createElement("p",null,"@Northeastern, I got the opportunity to work on various technologies and with people from different backgrounds. Here are links to more interesting projects I did-",h.map(function(e,t){return r.a.createElement(l.Link,{to:e.value,key:t},e.key+", ")})),r.a.createElement(y,{badges:u}),r.a.createElement("hr",null),r.a.createElement("h3",null,"B. Tech in Electrical & Electronics Engineering, GGSIP University"),r.a.createElement("p",null,"During this time, I learned about Object Oriented design and worked on my coding skills along with mastering on data structures and Algorithms."),r.a.createElement(y,{badges:d}))},k=function(e){function t(t){var a;return(a=e.call(this,t)||this).scrollDown1=function(){a.scrollArrow1Ref.current.scrollIntoView({behavior:"smooth",block:"start"})},a.scrollDown2=function(){a.scrollArrow2Ref.current.scrollIntoView({behavior:"smooth",block:"start"})},a.scrollDown3=function(){a.scrollArrow3Ref.current.scrollIntoView({behavior:"smooth",block:"start"})},a.scrollArrow1Ref=r.a.createRef(),a.scrollArrow2Ref=r.a.createRef(),a.scrollArrow3Ref=r.a.createRef(),a.state={undergradBadges:d},a}return o()(t,e),t.prototype.render=function(){var e=this.props.data;console.log(this.props);var t=e.url.edges[0].node.publicURL,a=e.thumbNail.edges[0].node.publicURL,i=e.logos.edges,o=e.allMarkdownRemark.edges[1].node,s=e.allMarkdownRemark.edges[0].node,c=e.allMarkdownRemark.edges[2].node;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"parallax"},r.a.createElement("div",null,r.a.createElement("div",{className:"folder-top"},r.a.createElement("div",null,r.a.createElement("img",{alt:"logo",className:"thumbnail-big",src:a})),r.a.createElement("div",{className:"folder-top-text"},r.a.createElement("div",{className:"sub-titles"},r.a.createElement("h3",null,"Rachita Bansal"),r.a.createElement("div",{className:"title"},r.a.createElement(g,null))),r.a.createElement("div",{className:"thumbnail-small"},i.map(function(e,t){var a=e.node;return r.a.createElement("a",{key:t,className:"link",href:m[t]},r.a.createElement("img",{key:t,className:"logo-img",border:"0",alt:"medium",src:a.publicURL,width:"30",height:"30"}))})))),r.a.createElement("div",{className:"folder-right"},r.a.createElement(v,{summary:o}),r.a.createElement("img",{ref:this.scrollArrow1Ref,onClick:this.scrollDown1,className:"arrow-img-1",src:t,width:"70px",height:"70px"})),r.a.createElement("div",{className:"folder-right"},r.a.createElement(E,{work:s}),r.a.createElement("img",{ref:this.scrollArrow2Ref,onClick:this.scrollDown2,className:"arrow-img-2",src:t,width:"70px",height:"70px"})))),r.a.createElement("div",{className:"parallax"},r.a.createElement("div",{className:"folder-right"},r.a.createElement(w,{education:c}),r.a.createElement("img",{ref:this.scrollArrow3Ref,onClick:this.scrollDown3,className:"arrow-img-1",src:t,width:"70px",height:"70px"}))),r.a.createElement("div",{className:"parallax"},r.a.createElement("div",null,r.a.createElement("div",{className:"folder-right"},r.a.createElement("div",{className:"links"},r.a.createElement("h1",null,"More interesting links below"),r.a.createElement("ul",null,p.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(l.Link,{to:e.value},e.key)," - ",e.text)})))))))},t}(n.Component);a.d(t,"query",function(){return S});var S="3722301979";t.default=function(e){var t=e.data;return t?r.a.createElement(k,{data:t}):null}},140:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(143)),i=n(a(144)),o=n(a(7)),l=n(a(52)),s=n(a(53)),c=n(a(4)),u=n(a(0)),d=a(22),m=a(141);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:c.default.string,activeStyle:c.default.object},f=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,m.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,m.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,l=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,f=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),g=p(a);return u.default.createElement(d.Link,(0,i.default)({to:g,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,m.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),v(a,{state:c,replace:h})),!0}},f))},t}(u.default.Component);f.propTypes=(0,i.default)({},h,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var g=f;t.default=g;var v=function(e,t){window.___navigate(p(e),t)};t.navigate=v;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(140),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(142),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=a(48);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(e,t,a){var n;e.exports=(n=a(145))&&n.default||n},143:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},144:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},145:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(68),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},146:function(e,t,a){var n=a(25),r=a(33);a(147)("keys",function(){return function(e){return r(n(e))}})},147:function(e,t,a){var n=a(11),r=a(16),i=a(24);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",o)}}}]);
//# sourceMappingURL=component---src-pages-index-js-5b9897d70e69eea3aa6f.js.map