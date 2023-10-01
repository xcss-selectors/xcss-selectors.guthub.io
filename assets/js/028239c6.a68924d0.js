"use strict";(self.webpackChunkxcss_web=self.webpackChunkxcss_web||[]).push([[774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||g[d]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},s="Playwright",i={unversionedId:"test-framework-integration/Playwright",id:"test-framework-integration/Playwright",title:"Playwright",description:"Start using XCSS in your Playwright project in just a few simple steps.",source:"@site/docs/test-framework-integration/Playwright.md",sourceDirName:"test-framework-integration",slug:"/test-framework-integration/Playwright",permalink:"/docs/test-framework-integration/Playwright",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/test-framework-integration/Playwright.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test Framework Integration",permalink:"/docs/category/test-framework-integration"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Add extension method for IPage",id:"add-extension-method-for-ipage",level:2},{value:"Start using XCSS in your page object",id:"start-using-xcss-in-your-page-object",level:2}],p={toc:l},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"playwright"},"Playwright"),(0,a.kt)("p",null,"Start using XCSS in your Playwright project in just a few simple steps."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Install XcssSelectors package to your project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet add package XcssSelectors\n")),(0,a.kt)("h2",{id:"add-extension-method-for-ipage"},"Add extension method for IPage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"internal static class IPageExtensions\n{\n    public static ILocator LocatorXcss(this IPage page, string xcssSelector)\n    {\n        var xcss = XcssSelectors.XCSS.FromXcss(xcssSelector);\n        return page.Locator(xcss.Xpath);\n    }\n}\n")),(0,a.kt)("h2",{id:"start-using-xcss-in-your-page-object"},"Start using XCSS in your page object"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"internal class ContactsPage\n{\n    private readonly IPage _page;\n\n    public ContactsPage(IPage page)\n    {\n        _page = page;\n    }\n\n    public async void SendMessageTo(string contact)\n    {\n        string buttonXcss = $\"#contacts li[>span['${contact}']]>.send-button\";\n        await _page.LocatorXcss(buttonXcss).ClickAsync();\n    }\n}\n")))}g.isMDXComponent=!0}}]);