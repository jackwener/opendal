"use strict";(self.webpackChunkopendal_website=self.webpackChunkopendal_website||[]).push([[2652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"OpenDAL Internal: Data Reading",date:new Date("2023-08-15T00:00:00.000Z"),slug:"how-opendal-read-data",tags:["internal"],description:"The first article will discuss OpenDAL's most commonly used data reading function. I will start from the outermost interface and then gradually unfold according to the calling sequence of OpenDAL.",authors:[{name:"Xuanwo",url:"https://github.com/Xuanwo",image_url:"https://github.com/Xuanwo.png"}]},o=void 0,l={permalink:"/blog/how-opendal-read-data",editUrl:"https://github.com/apache/incubator-opendal/tree/main/website/blog/2023-08-15-how-opendal-read-data/index.md",source:"@site/blog/2023-08-15-how-opendal-read-data/index.md",title:"OpenDAL Internal: Data Reading",description:"The first article will discuss OpenDAL's most commonly used data reading function. I will start from the outermost interface and then gradually unfold according to the calling sequence of OpenDAL.",date:"2023-08-15T00:00:00.000Z",formattedDate:"August 15, 2023",tags:[{label:"internal",permalink:"/blog/tags/internal"}],readingTime:7.96,hasTruncateMarker:!1,authors:[{name:"Xuanwo",url:"https://github.com/Xuanwo",image_url:"https://github.com/Xuanwo.png",imageURL:"https://github.com/Xuanwo.png"}],frontMatter:{title:"OpenDAL Internal: Data Reading",date:"2023-08-15T00:00:00.000Z",slug:"how-opendal-read-data",tags:["internal"],description:"The first article will discuss OpenDAL's most commonly used data reading function. I will start from the outermost interface and then gradually unfold according to the calling sequence of OpenDAL.",authors:[{name:"Xuanwo",url:"https://github.com/Xuanwo",image_url:"https://github.com/Xuanwo.png",imageURL:"https://github.com/Xuanwo.png"}]},prevItem:{title:"OwO #1: The v0.40 Release",permalink:"/blog/owo-1"},nextItem:{title:"Apache OpenDAL(Incubating): Access Data Freely",permalink:"/blog/opendal-access-data-freely"}},s={authorsImageUrls:[void 0]},p=[{value:"Overall Framework",id:"overall-framework",level:2},{value:"Operator",id:"operator",level:2},{value:"Layers",id:"layers",level:2},{value:"Services",id:"services",level:2},{value:"Service fs",id:"service-fs",level:3},{value:"Services s3",id:"services-s3",level:3},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(c,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As the OpenDAL community continues to grow, new abstractions are constantly being added, which has brought some burdens to new contributors participating in development. Many maintainers hope to have a deeper understanding of OpenDAL's internal implementation. At the same time, OpenDAL's core design has not changed significantly for a long time, making it possible to write a series on internal implementation. I believe now is the time to write a series of articles on OpenDAL's internal implementation, to explain from the maintainer's perspective how OpenDAL is designed, implemented, and how it can be expanded. With the impending release of OpenDAL v0.40, I hope this series of articles will better help the community understand the past, master the present, and shape the future."),(0,i.kt)("p",null,"The first article will discuss OpenDAL's most commonly used data reading function. I will start from the outermost interface and then gradually unfold according to the calling sequence of OpenDAL. Let's get started!"),(0,i.kt)("h2",{id:"overall-framework"},"Overall Framework"),(0,i.kt)("p",null,"Before starting to introduce the specific OpenDAL interface, let's first get familiar with the OpenDAL project."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-opendal"},"OpenDAL")," is an Apache Incubator project aimed at helping users access data from various storage services in a unified, convenient, and efficient way. Its project ",(0,i.kt)("a",{parentName:"p",href:"https://opendal.apache.org/docs/vision"},"vision"),' is "free access to data":'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Free from services: Any service can be accessed freely through native interfaces"),(0,i.kt)("li",{parentName:"ul"},"Free from implementations: No matter how the underlying implementation is, it can be called in a unified way"),(0,i.kt)("li",{parentName:"ul"},"Free to integrate: Able to freely integrate with various services and languages"),(0,i.kt)("li",{parentName:"ul"},"Free to zero cost: Users don't have to pay for features they don't use")),(0,i.kt)("p",null,"On this philosophical foundation, OpenDAL Rust Core can be mainly divided into the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operator: The outer interface exposed to users"),(0,i.kt)("li",{parentName:"ul"},"Layers: Specific implementation of different middleware"),(0,i.kt)("li",{parentName:"ul"},"Services: Specific implementation of different services")),(0,i.kt)("p",null,"From a macroscopic perspective, OpenDAL's data reading call stack would look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3085).Z,width:"1238",height:"968"})),(0,i.kt)("p",null,"All Layers and Services have implemented a unified Accessor interface, erasing all type information when building the Operator. For the Operator, regardless of what services are used or how many middleware are added, all call logic is consistent. This design splits OpenDAL's API into Public API and Raw API, where the Public API is directly exposed to users, providing convenient top-level interfaces, and Raw API is provided to OpenDAL internal developers, maintaining a unified internal interface and providing some convenient implementation."),(0,i.kt)("h2",{id:"operator"},"Operator"),(0,i.kt)("p",null,"OpenDAL's Operator API will adhere to a consistent calling paradigm as much as possible, reducing users' learning and usage costs. For example, OpenDAL offers the following APIs for ",(0,i.kt)("inlineCode",{parentName:"p"},"read"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"op.read(path)"),": Reads the entire content of the specified file"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"op.reader(path)"),": Creates a Reader for streaming reading"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"op.read_with(path).range(1..1024)"),": Reads file content using specified parameters, such as range"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"op.reader_with(path).range(1..1024)"),": Creates a Reader for streaming reading with specified parameters")),(0,i.kt)("p",null,"It's not hard to see that ",(0,i.kt)("inlineCode",{parentName:"p"},"read")," is more like syntactic sugar, allowing users to quickly read files without considering various traits like ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncRead"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"reader")," provides more flexibility, implementing widely-used community traits like ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncSeek"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncRead"),", allowing more flexible data reading. ",(0,i.kt)("inlineCode",{parentName:"p"},"read_with")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"reader_with")," assist users in specifying various parameters in a more natural way through Future Builder functions."),(0,i.kt)("p",null,"The internal logic of the Operator would look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4840).Z,width:"1628",height:"1006"})),(0,i.kt)("p",null,"Its main job is to encapsulate the interface for the user:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Completing the construction of ",(0,i.kt)("inlineCode",{parentName:"li"},"OpRead"),": the args for read operation."),(0,i.kt)("li",{parentName:"ul"},"Calling the ",(0,i.kt)("inlineCode",{parentName:"li"},"read")," function provided by ",(0,i.kt)("inlineCode",{parentName:"li"},"Accessor")),(0,i.kt)("li",{parentName:"ul"},"Wrapping the returned value as ",(0,i.kt)("inlineCode",{parentName:"li"},"Reader")," and implementing interfaces like ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncSeek"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"AsyncRead"),", etc., based on ",(0,i.kt)("inlineCode",{parentName:"li"},"Reader"))),(0,i.kt)("h2",{id:"layers"},"Layers"),(0,i.kt)("p",null,"A little secret here is that OpenDAL will automatically apply some Layers to the Service to implement some internal logic. As of the completion of this article, OpenDAL's automatically added Layers include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ErrorContextLayer"),": Injects context information, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"scheme"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"path"),", etc., into all returned errors of Operation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CompleteLayer"),": Adds necessary capabilities to services, such as adding seek support to s3"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TypeEraseLayer"),": Implements type erasure, uniformly erasing associated types in ",(0,i.kt)("inlineCode",{parentName:"li"},"Accessor"),", so users don't need to carry generic parameters when using it")),(0,i.kt)("p",null,"Here, ",(0,i.kt)("inlineCode",{parentName:"p"},"ErrorContextLayer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeEraseLayer")," are relatively simple and won't be elaborated on. The focus is on ",(0,i.kt)("inlineCode",{parentName:"p"},"CompleteLayer"),", aimed at adding ",(0,i.kt)("inlineCode",{parentName:"p"},"seek")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," support to OpenDAL's returned ",(0,i.kt)("inlineCode",{parentName:"p"},"Reader")," in a zero-cost way, so users don't have to re-implement it. OpenDAL initially returned ",(0,i.kt)("inlineCode",{parentName:"p"},"Reader")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"SeekableReader")," through different function calls in early versions, but the actual user feedback was not very good; almost all users were using ",(0,i.kt)("inlineCode",{parentName:"p"},"SeekableReader"),". Therefore, OpenDAL subsequently added seek support as the first priority to the internal ",(0,i.kt)("inlineCode",{parentName:"p"},"Read")," trait during the refactor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub trait Read: Unpin + Send + Sync {\n    /// Read bytes asynchronously.\n    fn poll_read(&mut self, cx: &mut Context<'_>, buf: &mut [u8]) -> Poll<Result<usize>>;\n\n    /// Seek asynchronously.\n    ///\n    /// Returns `Unsupported` error if underlying reader doesn't support seek.\n    fn poll_seek(&mut self, cx: &mut Context<'_>, pos: io::SeekFrom) -> Poll<Result<u64>>;\n\n    /// Stream [`Bytes`] from underlying reader.\n    ///\n    /// Returns `Unsupported` error if underlying reader doesn't support stream.\n    ///\n    /// This API exists for avoiding bytes copying inside async runtime.\n    /// Users can poll bytes from underlying reader and decide when to\n    /// read/consume them.\n    fn poll_next(&mut self, cx: &mut Context<'_>) -> Poll<Option<Result<Bytes>>>;\n}\n")),(0,i.kt)("p",null,"To implement a service's reading capability in OpenDAL, one needs to implement this trait, which is an internal interface and will not be directly exposed to users. Among them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"poll_read")," is the most basic requirement; all services must implement this interface."),(0,i.kt)("li",{parentName:"ul"},"When the service natively supports ",(0,i.kt)("inlineCode",{parentName:"li"},"seek"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"poll_seek")," can be implemented, and OpenDAL will correctly dispatch, such as local fs;"),(0,i.kt)("li",{parentName:"ul"},"When the service natively supports ",(0,i.kt)("inlineCode",{parentName:"li"},"next"),", meaning it returns streaming Bytes, ",(0,i.kt)("inlineCode",{parentName:"li"},"poll_next")," can be implemented, like HTTP-based services, where the underlying layer is a TCP Stream, and hyper will encapsulate it as a bytes stream.")),(0,i.kt)("p",null,"Through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Read")," trait, OpenDAL ensures that all services can expose their native support capabilities as much as possible, thereby achieving efficient reading for different services."),(0,i.kt)("p",null,"Based on this trait, OpenDAL will complete according to the capabilities supported by each service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Both seek/next are supported: Direct return"),(0,i.kt)("li",{parentName:"ul"},"No support for next: Encapsulate using ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamableReader")," to simulate next support"),(0,i.kt)("li",{parentName:"ul"},"No support for seek: Encapsulate using ",(0,i.kt)("inlineCode",{parentName:"li"},"ByRangeSeekableReader")," to simulate seek support"),(0,i.kt)("li",{parentName:"ul"},"Neither seek/next supported: Encapsulate using both methods")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"ByRangeSeekableReader")," mainly utilizes the service's ability to support range read, dropping the current reader when the user seeks and initiating a new request at the specified location.")),(0,i.kt)("p",null,"OpenDAL exposes a unified Reader implementation through ",(0,i.kt)("inlineCode",{parentName:"p"},"CompleteLayer"),", so users don't have to worry about whether the underlying service supports seek; OpenDAL will always choose the optimal way to initiate the request."),(0,i.kt)("h2",{id:"services"},"Services"),(0,i.kt)("p",null,"After the completion of the Layers, it's time to call the specific implementation of the Service. Here, the most common services ",(0,i.kt)("inlineCode",{parentName:"p"},"fs")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"s3")," are used as examples to explain how data is read."),(0,i.kt)("h3",{id:"service-fs"},"Service fs"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tokio::fs::File")," implements ",(0,i.kt)("inlineCode",{parentName:"p"},"tokio::AsyncRead")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tokio::AsyncSeek"),". Using ",(0,i.kt)("inlineCode",{parentName:"p"},"async_compat::Compat"),", we have transformed it into ",(0,i.kt)("inlineCode",{parentName:"p"},"futures::AsyncRead")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"futures::AsyncSeek"),". Based on this, we provide a built-in function ",(0,i.kt)("inlineCode",{parentName:"p"},"oio::into_read_from_file")," to transform it into a type that implements ",(0,i.kt)("inlineCode",{parentName:"p"},"oio::Read"),"."),(0,i.kt)("p",null,"There's nothing particularly complex in the implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"oio::into_read_from_file"),"; read and seek are mostly calling the functions provided by the incoming File type. The tricky part is about the correct handling of seek and range: seeking to the right side of the range is allowed, and this will not cause an error, and reading will only return empty, but seeking to the left side of the range is illegal, and the Reader must return ",(0,i.kt)("inlineCode",{parentName:"p"},"InvalidInput")," for proper upper-level handling."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Interesting history: there was ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-opendal/issues/2717"},"an issue")," in the initial implementation of this part, discovered during fuzz testing.")),(0,i.kt)("h3",{id:"services-s3"},"Services s3"),(0,i.kt)("p",null,"S3 is an HTTP-based service, and opendal provides a lot of HTTP-based wrappers to help developers reuse logic; they only need to build a request and return a well-constructed Body. OpenDAL Raw API encapsulates a set of reqwest-based interfaces, and the HTTP GET interface returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Response<IncomingAsyncBody>"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"/// IncomingAsyncBody carries the content returned by remote servers.\npub struct IncomingAsyncBody {\n    /// # TODO\n    ///\n    /// hyper returns `impl Stream<Item = crate::Result<Bytes>>` but we can't\n    /// write the types in stable. So we will box here.\n    ///\n    /// After [TAIT](https://rust-lang.github.io/rfcs/2515-type_alias_impl_trait.html)\n    /// has been stable, we can change `IncomingAsyncBody` into `IncomingAsyncBody<S>`.\n    inner: oio::Streamer,\n    size: Option<u64>,\n    consumed: u64,\n    chunk: Option<Bytes>,\n}\n")),(0,i.kt)("p",null,"The stream contained in this body is the bytes stream returned by reqwest, and opendal implements content length checks and read support on this basis."),(0,i.kt)("p",null,"Here's an extra note about a small pitfall with reqwest/hyper: reqwest and hyper do not check the returned content length, so an illegal server may return a data volume that does not match the expected content length instead of an error, leading to unexpected data behavior. OpenDAL specifically added checks here, returning ",(0,i.kt)("inlineCode",{parentName:"p"},"ContentIncomplete")," when data is insufficient and ",(0,i.kt)("inlineCode",{parentName:"p"},"ContentTruncated")," when data exceeds expectations, avoiding users receiving illegal data."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"This article introduces from top to bottom how OpenDAL implements data reading:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Operator is responsible for exposing user-friendly interfaces"),(0,i.kt)("li",{parentName:"ul"},"Layers are responsible for completing the capabilities of the services"),(0,i.kt)("li",{parentName:"ul"},"Services are responsible for the specific implementation of different services")),(0,i.kt)("p",null,"Throughout the entire chain, OpenDAL adheres as much as possible to the principle of zero cost, prioritizing the use of native service capabilities, then considering simulation through other methods, and finally returning unsupported errors. Through this three-tier design, users don't need to understand the details of the underlying service, nor do they need to integrate different service SDKs to easily call ",(0,i.kt)("inlineCode",{parentName:"p"},"op.read(path)")," to access data in any storage service."),(0,i.kt)("p",null,"This is: How ",(0,i.kt)("strong",{parentName:"p"},"OpenDAL")," read data freely!"))}u.isMDXComponent=!0},3085:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1-0b02956a3da2b4329eab11ea4779711c.png"},4840:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2-3b83ca1ebfbdd77770566a80131846bd.png"}}]);