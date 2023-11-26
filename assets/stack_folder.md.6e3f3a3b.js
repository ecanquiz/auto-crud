import{_ as s,o as a,c as n,S as e}from"./chunks/framework.233e4693.js";const A=JSON.parse('{"title":"Carpeta stack","description":"","frontmatter":{},"headers":[],"relativePath":"stack/folder.md","filePath":"stack/folder.md"}'),l={name:"stack/folder.md"},o=e(`<h1 id="carpeta-stack" tabindex="-1">Carpeta <code>stack</code> <a class="header-anchor" href="#carpeta-stack" aria-label="Permalink to &quot;Carpeta \`stack\`&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">Advertencia</p><p>La actual versión del paquete <code>autocrudx-tools</code> está diseñada para crear <code>stacks</code> orientadas a micro-servicios. No obstante, funciona perfectamente igual al tratar con un <code>stack</code> <strong>MVC</strong>.</p><p>Solo tiene que realizar algunos ajustes en el archivo <code>.env</code>. Suponga un proyecto <strong><em>Laravel MVC</em></strong>.</p><p>En vez de hacer esto:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_BACKEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">my-backend</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_BACKEND_ROOT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_FRONTEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">my-frontend</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_FRONTEND_ROOT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">src</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span></code></pre></div><p>Haga lo siguiente:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_BACKEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">my-mvc</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_BACKEND_ROOT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_FRONTEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">my-mvc</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_FRONTEND_ROOT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">resources</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span></code></pre></div></div><hr><p>La carpeta <code>stack</code> es el espacio indicado para construir específicamente todo lo relacionado con sus propios CRUDs.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">├── stack/</span></span>
<span class="line"><span style="color:#A6ACCD;">└── app.ts</span></span></code></pre></div><p>Con el propósito de mantener un mejor orden, está separa principalmente en dos carpetas.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── stack/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   ├── my-backend/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   └── my-frontend/</span></span>
<span class="line"><span style="color:#A6ACCD;">└── app.ts</span></span></code></pre></div><p>Tenga en cuenta que también puede ir creando más de un <code>stack</code>, si así lo desea.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── stack/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   ├── backend-laravel/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   ├── backend-nest/</span></span>
<span class="line"><span style="color:#A6ACCD;">|   ├── frontend-react/</span></span>
<span class="line"><span style="color:#A6ACCD;">|   └── frontend-vue/</span></span>
<span class="line"><span style="color:#A6ACCD;">└── app.ts</span></span></code></pre></div><p>Asegúrese de especificar en la <a href="./../env-config.html">configuración</a> cuáles usar en su respectivo momento.</p><p>📃<code>.env</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_BACKEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">backend-folder-name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_FRONTEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">frontend-folder-name</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># omitted for brevity ...</span></span></code></pre></div><p>Veamos que contienen cada uno de ellos.</p><h2 id="stack-my-backend" tabindex="-1"><code>stack/my-backend/</code> <a class="header-anchor" href="#stack-my-backend" aria-label="Permalink to &quot;\`stack/my-backend/\`&quot;">​</a></h2><p>La carpeta <code>stack/my-backend/</code> posee una sub-carpeta llamada <a href="./templates.html"><code>templates/</code></a> con <code>N</code> archivos de plantillas más un archivo llamado <a href="./process.html"><code>process.ts</code></a> y otro llamado <a href="./renderings.html"><code>renderings.ts</code></a>.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── stack/</span></span>
<span class="line"><span style="color:#A6ACCD;">|   ├── my-backend/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   ├── templates/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   |   ├── foo</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   |   ├── bar</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   |   └── baz</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   ├── process.ts</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   └── renderings.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">|   └── my-frontend/</span></span>
<span class="line"><span style="color:#A6ACCD;">└── app.ts</span></span></code></pre></div><h2 id="stack-my-frontend" tabindex="-1"><code>stack/my-frontend/</code> <a class="header-anchor" href="#stack-my-frontend" aria-label="Permalink to &quot;\`stack/my-frontend/\`&quot;">​</a></h2><p>La carpeta <code>stack/my-frontend/</code> tambien posee una sub-carpeta llamada <a href="./templates.html"><code>templates/</code></a> con <code>N</code> archivos de plantillas más un archivo llamado <a href="./process.html"><code>process.ts</code></a> y otro llamado <a href="./renderings.html"><code>renderings.ts</code></a>.</p><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── stack/</span></span>
<span class="line"><span style="color:#A6ACCD;">|   ├── my-backend/</span></span>
<span class="line"><span style="color:#A6ACCD;">|   └── my-frontend/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|       ├── templates/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|       |   ├── foo</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|       |   └── bar</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|       ├── process.ts</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|       └── renderings.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">└── app.ts</span></span></code></pre></div><hr><h2 id="clonclusion" tabindex="-1">Clonclusión <a class="header-anchor" href="#clonclusion" aria-label="Permalink to &quot;Clonclusión&quot;">​</a></h2><p>Tome en cuenta que tanto la carpeta <code>stack/my-backend/</code> como la carpeta <code>stack/my-frontend/</code> poseen respectivamente la misma estructura.</p>`,22),p=[o];function t(c,i,r,d,h,C){return a(),n("div",null,p)}const m=s(l,[["render",t]]);export{A as __pageData,m as default};
