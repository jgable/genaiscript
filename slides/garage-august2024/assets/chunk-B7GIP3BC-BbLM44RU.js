import{i as t,B as f,m as d}from"./chunk-TZBO7MLI-lmPz-AU5.js";import{a as o}from"./Mermaid.vue_vue_type_script_setup_true_lang-DxYGHiMV.js";function p(e){var r={options:{directed:e.isDirected(),multigraph:e.isMultigraph(),compound:e.isCompound()},nodes:u(e),edges:s(e)};return t(e.graph())||(r.value=f(e.graph())),r}o(p,"write");function u(e){return d(e.nodes(),function(r){var a=e.node(r),n=e.parent(r),i={v:r};return t(a)||(i.value=a),t(n)||(i.parent=n),i})}o(u,"writeNodes");function s(e){return d(e.edges(),function(r){var a=e.edge(r),n={v:r.v,w:r.w};return t(r.name)||(n.name=r.name),t(a)||(n.value=a),n})}o(s,"writeEdges");export{p as w};
