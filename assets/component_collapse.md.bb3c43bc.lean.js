import{f as c,g as r,c as D,a,w as l,b as s,d as o,e as d,r as n,o as y}from"./app.a8252e1c.js";const i=s("h1",{id:"collapse-\u6298\u53E0\u9762\u677F",tabindex:"-1"},[o("Collapse \u6298\u53E0\u9762\u677F "),s("a",{class:"header-anchor",href:"#collapse-\u6298\u53E0\u9762\u677F","aria-hidden":"true"},"#")],-1),E=s("h2",{id:"\u57FA\u7840\u4F7F\u7528",tabindex:"-1"},[o("\u57FA\u7840\u4F7F\u7528 "),s("a",{class:"header-anchor",href:"#\u57FA\u7840\u4F7F\u7528","aria-hidden":"true"},"#")],-1),C=s("div",null,"\u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B",-1),A=s("div",null,"\u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B",-1),h=d(`<div class="language-vue"><button class="copy"></button><span class="lang">vue</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-collapse</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">collapseVal</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-collapse-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u4E00\u81F4\u6027 Consistency</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-collapse-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a-collapse-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u53CD\u9988 Feedback</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">\u4E0E\u73B0\u5B9E\u751F\u6D3B\u4E00\u81F4\uFF1A\u4E0E\u73B0\u5B9E\u751F\u6D3B\u7684\u6D41\u7A0B\u3001\u903B\u8F91\u4FDD\u6301\u4E00\u81F4\uFF0C\u9075\u5FAA\u7528\u6237\u4E60\u60EF\u7684\u8BED\u8A00\u548C\u6982\u5FF5\uFF1B</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-collapse-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a-collapse</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="collapse-\u5C5E\u6027" tabindex="-1">collapse \u5C5E\u6027 <a class="header-anchor" href="#collapse-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>modelValue / v-model</td><td>array</td><td>-</td><td>-</td><td>\u7ED1\u5B9A\u503C</td></tr></tbody></table><h2 id="collapse-item-\u5C5E\u6027" tabindex="-1">collapse-item \u5C5E\u6027 <a class="header-anchor" href="#collapse-item-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>name</td><td>string/number</td><td>-</td><td>-</td><td>\u7ED1\u5B9A\u503C</td></tr><tr><td>title</td><td>string</td><td>-</td><td>false</td><td>\u6807\u9898</td></tr></tbody></table>`,5),v=JSON.parse('{"title":"Collapse \u6298\u53E0\u9762\u677F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528","link":"#\u57FA\u7840\u4F7F\u7528","children":[]},{"level":2,"title":"collapse \u5C5E\u6027","slug":"collapse-\u5C5E\u6027","link":"#collapse-\u5C5E\u6027","children":[]},{"level":2,"title":"collapse-item \u5C5E\u6027","slug":"collapse-item-\u5C5E\u6027","link":"#collapse-item-\u5C5E\u6027","children":[]}],"relativePath":"component/collapse.md"}'),B={name:"component/collapse.md"},b=c({...B,setup(m){const u=r(["1"]);return(_,t)=>{const e=n("a-collapse-item"),p=n("a-collapse");return y(),D("div",null,[i,E,a(p,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=F=>u.value=F)},{default:l(()=>[a(e,{title:"\u4E00\u81F4\u6027 Consistency",name:"1"},{default:l(()=>[C]),_:1}),a(e,{title:"\u53CD\u9988 Feedback",name:"2"},{default:l(()=>[A]),_:1})]),_:1},8,["modelValue"]),h])}}});export{v as __pageData,b as default};
