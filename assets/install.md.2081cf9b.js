import{_ as s,o as a,c as e,S as n}from"./chunks/framework.233e4693.js";const y=JSON.parse('{"title":"Empezar","description":"","frontmatter":{},"headers":[],"relativePath":"install.md","filePath":"install.md"}'),l={name:"install.md"},o=n(`<h1 id="empezar" tabindex="-1">Empezar <a class="header-anchor" href="#empezar" aria-label="Permalink to &quot;Empezar&quot;">​</a></h1><h2 id="instalacion" tabindex="-1">Instalación <a class="header-anchor" href="#instalacion" aria-label="Permalink to &quot;Instalación&quot;">​</a></h2><p><a href="https://github.com/ecanquiz/node-auto-crudx" target="_blank" rel="noreferrer">https://github.com/ecanquiz/node-auto-crudx</a></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">This</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">was</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">created</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">with</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Node</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TypeScript.</span></span>
<span class="line"><span style="color:#FFCB6B;">Run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#FFCB6B;">Run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tsc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--watch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Open</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">another</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">terminal</span></span>
<span class="line"><span style="color:#FFCB6B;">Run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nodemon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dist/app.js</span></span>
<span class="line"><span style="color:#FFCB6B;">The</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">generated</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">code</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">will</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">be</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">written</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./output</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">folder</span></span></code></pre></div><h2 id="estructura-de-carpetas" tabindex="-1">Estructura de carpetas <a class="header-anchor" href="#estructura-de-carpetas" aria-label="Permalink to &quot;Estructura de carpetas&quot;">​</a></h2><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── core/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">└── stack/</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── core/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── stack/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   ├── my-backend/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   └── my-frontend/</span></span></code></pre></div><div class="language-txt"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">src/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── config/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── core/</span></span>
<span class="line"><span style="color:#A6ACCD;">├── stack/</span></span>
<span class="line"><span style="color:#A6ACCD;">|   ├── my-backend/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   ├── templates/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   |   ├── foo</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   |   ├── bar</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   |   └── baz</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   ├──process.ts</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   └──renderings.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">|   ├── my-frontend/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   ├── templates/</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   |   ├── foo</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   |   └── bar</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   ├──process.ts</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">|   |   └──renderings.ts</span></span></code></pre></div><h2 id="configuracion" tabindex="-1">Configuración <a class="header-anchor" href="#configuracion" aria-label="Permalink to &quot;Configuración&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Para poner en marcha <strong>Auto-CRUDx</strong> debe tener un archivo <code>.env</code> correctamente configurado en la raiz del proyecto.</p></div><h2 id="archivo-env" tabindex="-1">Archivo <code>.env</code> <a class="header-anchor" href="#archivo-env" aria-label="Permalink to &quot;Archivo \`.env\`&quot;">​</a></h2><p>En la raíz de su proyecto <strong>Auto-CRUDx</strong> habrá un archivo <code>.env.example</code> como el siguiente.</p><p>📃<code>.env.example</code></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">DB_DATABASE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">db_name</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_HOST</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_PASSWORD</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">12345678</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_PORT</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">5432</span></span>
<span class="line"><span style="color:#A6ACCD;">DB_USER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">postgres</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">PATH_USER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">/home/username</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_BACKEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">backend-folder-name</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_BACKEND_ROOT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">app</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_FRONTEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">frontend-folder-name</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_FRONTEND_ROOT</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">src</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH_MODULE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">User</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_SCHEMA</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">public</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">users</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_TABLE_MASTER_IS_HELPER</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">FALSE</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_EXCLUDE_FIELDS</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">created_at,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">updated_at,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">deleted_at</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_GENERATE</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">TRUE</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_STACK_BACKEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">demo-backend</span></span>
<span class="line"><span style="color:#A6ACCD;">CRUD_STACK_FRONTEND</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">demo-frontend</span></span></code></pre></div><p>Copie y pegue en la raiz del proyecto este archivo <code>.env.example</code> como base para crear su archivo de configuración <code>.env</code>.</p><h2 id="descripcion-de-variables-de-entorno" tabindex="-1">Descripción de Variables de Entorno <a class="header-anchor" href="#descripcion-de-variables-de-entorno" aria-label="Permalink to &quot;Descripción de Variables de Entorno&quot;">​</a></h2><ul><li><strong><code>DB_DATABASE</code>:</strong> Nombre de la base de datos.</li><li><strong><code>DB_HOST</code></strong>: IP de la máquina anfitriona donde se hospeda el proyecto.</li><li><strong><code>DB_PASSWORD</code></strong>: <em>Password</em> de la base de datos.</li><li><strong><code>DB_PORT</code></strong> : Puerto por donde escucha la base de datos.</li><li><strong><code>DB_USER</code></strong>: Usuario de la base de datos.</li></ul><hr><ul><li><strong><code>PATH_USER</code></strong>: Ruta del usuario en la máquina anfitriona. Ejemplo: <code>/home/johndoe</code>.</li><li><strong><code>PATH_BACKEND</code></strong>: Carpeta(s) donde está alojado el <code>scaffold</code> de su <em>backend</em>. Ejemplo: <code>/dev-env/my-backend-proyect</code>.</li><li><strong><code>PATH_BACKEND_ROOT</code></strong>: Nombre de la carpeta, dentro del <code>PATH_BACKEND</code>, donde se escribirá el correspondiente código generado.</li><li><strong><code>PATH_FRONTEND</code></strong>: Carpeta(s) donde está alojado el <code>scaffold</code> de su <em>frontend</em>. Ejemplo: <code>/dev-env/my-frontend-proyect</code>.</li><li><strong><code>PATH_FRONTEND_ROOT</code></strong>: Nombre de la carpeta, dentro del <code>PATH_FRONTEND</code>, donde se escribirá el correspondiente código generado.</li><li><strong><code>PATH_MODULE</code></strong>: Si está usando estructura modular, puede suministrar el nombre del módulo.</li></ul><hr><ul><li><strong><code>CRUD_SCHEMA</code></strong>: Nombre del esquema de la base de datos donde se encuetra la tabla en cuestión.</li><li><strong><code>CRUD_TABLE_MASTER</code></strong>: Nombre de la tabla que se le generará el CRUD.</li><li><strong><code>CRUD_TABLE_MASTER_IS_HELPER</code></strong>: Indica si se trata de una simple tabla para llenar una lista desplegable (elemento select html).</li><li><strong><code>CRUD_EXCLUDE_FIELDS</code></strong>: Campos que contiene la respectiva tabla que desea sean excluidos del CRUD.</li><li><strong><code>CRUD_GENERATE</code></strong>: Indica si desea generar el CRUD o <em>debuggear</em> el <em>dataJSON</em> proveniente de la base de datos que alimenta el CRUD.</li><li><strong><code>CRUD_STACK_BACKEND</code></strong>: Nombre de la carpeta de su pila para su <em>backend</em>.</li><li><strong><code>CRUD_STACK_FRONTEND</code></strong>: Nombre de la carpeta de su pila para su <em>frontend</em>.</li></ul><h2 id="usar-variables-de-entorno" tabindex="-1">Usar Variables de Entorno <a class="header-anchor" href="#usar-variables-de-entorno" aria-label="Permalink to &quot;Usar Variables de Entorno&quot;">​</a></h2><p>API de core/config</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">crud</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;">    </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">moduleName</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathBackend</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathFrontend</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathModule</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">pathUser</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@config/index</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">crud</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@config/index</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><ul><li><strong><code>crud.schema</code>:</strong> Nombre del esquema de la base de datos donde se encuetra la tabla en cuestión.</li><li><strong><code>crud.tableMaster</code>:</strong> Nombre de la tabla que se le generará el CRUD.</li><li><strong><code>crud.tableMasterIsHelper</code>:</strong> Indica si se trata de una simple tabla para llenar una lista desplegable (elemento select html).</li><li><strong><code>crud.excludeFields</code>:</strong> Campos que contiene la respectiva tabla que desea sean excluidos del CRUD.</li><li><strong><code>crud.generate</code>:</strong> Indica si desea generar el CRUD o <em>debuggear</em> el <em>dataJSON</em> proveniente de la base de datos que alimenta el CRUD.</li><li><strong><code>crud.stackBackend</code>:</strong> Nombre de la carpeta de su pila para su <em>backend</em>.</li><li><strong><code>crud.stackFrontend</code>:</strong> Nombre de la carpeta de su pila para su <em>frontend</em>.</li></ul><hr><ul><li><strong><code>pathUser</code>:</strong> Ruta del usuario en la máquina anfitriona. Ejemplo: <code>/home/johndoe</code>.</li><li><strong><code>moduleName</code>:</strong> Nombre del módulo.</li><li><strong><code>pathModule</code>:</strong> Ruta del módulo.</li><li><strong><code>pathBackend</code>:</strong> Carpeta(s) donde está alojado el <code>scaffold</code> de su <em>backend</em>. Ejemplo: <code>/dev-env/my-backend-proyect/app</code>.</li><li><strong><code>pathFrontend</code>:</strong> Carpeta(s) donde está alojado el <code>scaffold</code> de su <em>fronten</em>. Ejemplo: <code>/dev-env/my-fronten-proyect/src</code>.</li></ul>`,28),p=[o];function t(c,r,d,i,C,D){return a(),e("div",null,p)}const g=s(l,[["render",t]]);export{y as __pageData,g as default};
