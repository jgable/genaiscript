import{_ as f}from"./VClick-ODGzLFD-.js";import{d as g,G as v,o as c,b as _,e,f as S,i as h,h as $,c as y,k as i,l as u,q as k,s as P,B as p}from"../modules/vue-DbbOcb5G.js";import{u as w,f as x}from"./context-BEd7nzgN.js";import"../index-Bt6DStDT.js";import"../modules/shiki-DLUXL2qD.js";function d(t){return t.startsWith("/")?"/genaiscript/slides/msr-eng-may2024/"+t.slice(1):t}function C(t,n=!1,o="cover"){const s=t&&(t[0]==="#"||t.startsWith("rgb")),r={background:s?t:void 0,color:t&&!s?"white":void 0,backgroundImage:s?void 0:t?n?`linear-gradient(#0005, #0008), url(${d(t)})`:`url("${d(t)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:o};return r.background||delete r.background,r}const z={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},B=g({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(t){const n=t,o=v(()=>C(n.image,!1,n.backgroundSize));return(s,r)=>(c(),_("div",z,[e("div",{class:h(["slidev-layout default",n.class])},[S(s.$slots,"default")],2),e("div",{class:"w-full h-full",style:$(o.value)},null,4)]))}}),R={__name:"vision.md__slidev_2",setup(t){const{$slidev:n,$nav:o,$clicksContext:s,$clicks:r,$page:b,$renderContext:L,$frontmatter:m}=w();return s.setup(),(A,l)=>{const a=f;return c(),y(B,k(P(p(x)(p(m),1))),{default:i(()=>[l[2]||(l[2]=e("h1",null,"Prompts are programs",-1)),l[3]||(l[3]=e("h2",null,null,-1)),l[4]||(l[4]=e("h3",null,"Scripting languages have had enormous impact",-1)),l[5]||(l[5]=e("ul",null,[e("li",null,"csh, bash, Perl, JavaScript, Python, etc.")],-1)),u(a,null,{default:i(()=>l[0]||(l[0]=[e("h3",null,"GenAIScript, a LLM-first script",-1),e("ul",null,[e("li",null,"JavaScript"),e("li",null,"genai runtime (PDF decoders, …)"),e("li",null,"context size handling"),e("li",null,"structured output parsing"),e("li",null,"tools…")],-1)])),_:1}),u(a,null,{default:i(()=>l[1]||(l[1]=[e("p",null," ",-1),e("h3",null,"Goal: A new era of LLM-powered scripts",-1)])),_:1})]),_:1},16)}}};export{R as default};
