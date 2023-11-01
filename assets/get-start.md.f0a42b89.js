import{_ as e,o as a,c as o,S as r}from"./chunks/framework.233e4693.js";const t="/auto-crudx/assets/get-start-1.418f4a55.mp4",s="/auto-crudx/assets/get-start-2.b71fc00a.mp4",n="/auto-crudx/assets/get-start-3.22afe944.mp4",q=JSON.parse('{"title":"Comenzar","description":"","frontmatter":{},"headers":[],"relativePath":"get-start.md","filePath":"get-start.md"}'),i={name:"get-start.md"},l=r('<h1 id="comenzar" tabindex="-1">Comenzar <a class="header-anchor" href="#comenzar" aria-label="Permalink to &quot;Comenzar&quot;">​</a></h1><h2 id="¿-que-es-un-crud" tabindex="-1">¿ Qué es un CRUD ? <a class="header-anchor" href="#¿-que-es-un-crud" aria-label="Permalink to &quot;¿ Qué es un CRUD ?&quot;">​</a></h2><p>En informática, <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" target="_blank" rel="noreferrer">CRUD</a> es el acrónimo de <em>&quot;Crear&quot;</em>, <em>&quot;Leer&quot;</em>, <em>&quot;Actualizar&quot;</em> y <em>&quot;Borrar&quot;</em>, (del original en inglés, <em>Create, Read, Update and Delete</em>), que se usa para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software.</p><div class="info custom-block"><p class="custom-block-title">Ejemplos</p><p>Los siguientes ejemplos de CRUDs fueron creados a travéz de la herramienta <em><strong>Auto-CRUDx</strong></em>. Y su <strong><em>stack</em></strong>, tanto del <em>backend</em> como del <em>frontend</em>, fue desarrollada con <a href="https://laravel.com/" target="_blank" rel="noreferrer">Laravel</a> y <a href="https://vuejs.org/" target="_blank" rel="noreferrer">Vue</a> respectivamente.</p></div><h2 id="_1°-crud-basico-ejemplo" tabindex="-1">1° CRUD Básico (ejemplo) <a class="header-anchor" href="#_1°-crud-basico-ejemplo" aria-label="Permalink to &quot;1° CRUD Básico (ejemplo)&quot;">​</a></h2><p>El siguiente video muestra ejemplos de CRUDs para tablas simples que generalmente se usan para llenar listas desplegable como elementos <code>select</code> de HTML.</p><video controls><source src="'+t+'"></video><h2 id="_2°-crud-intermedio-ejemplo" tabindex="-1">2° CRUD Intermedio (ejemplo) <a class="header-anchor" href="#_2°-crud-intermedio-ejemplo" aria-label="Permalink to &quot;2° CRUD Intermedio (ejemplo)&quot;">​</a></h2><p>Los CRUDs intermedios son aquellos un poco más elaborados, los cuales generalmente tratan sobre un formulario que contiene varios campos de distintos tipos. Como el que muestra el siguiente video.</p><video controls><source src="'+s+'"></video><h2 id="_3°-crud-avanzado-ejemplo" tabindex="-1">3° CRUD Avanzado (ejemplo) <a class="header-anchor" href="#_3°-crud-avanzado-ejemplo" aria-label="Permalink to &quot;3° CRUD Avanzado (ejemplo)&quot;">​</a></h2><p>Los CRUDs avanzados son los más complejos, porque generalmente están constituidos por múltiples formularios. Específicamente, un formulario para una tabla maestra y <strong><em>N</em></strong> formularios para <strong><em>N</em></strong> tablas detalles. Como el que muestra el siguiente video.</p><video controls><source src="'+n+'"></video><div class="tip custom-block"><p class="custom-block-title">Información</p><p>Usted puede consultar el código generado, tanto del <a href="https://github.com/CaribesTIC/laravuel-api/tree/main/Modules/Meeting" target="_blank" rel="noreferrer">Backend</a> como del <a href="https://github.com/CaribesTIC/laravuel-spa/tree/main/src/modules/Meeting" target="_blank" rel="noreferrer">Frontend</a>, de ejemplos anteriores.</p></div><h2 id="¿-por-que-auto-crudx" tabindex="-1">¿ Por qué Auto-CRUDx ? <a class="header-anchor" href="#¿-por-que-auto-crudx" aria-label="Permalink to &quot;¿ Por qué Auto-CRUDx ?&quot;">​</a></h2><p>Las funciones básicas en bases de datos o la capa de persistencia en un software son tareas repetitivas que se hacen regularmente cuando de desarrollo de software se trata. Por lo que, una vez definida una estructura estandar, para los típicos CRUDs, es útil una herramienta que los genere automáticamente.</p><h2 id="¿-que-es-auto-crudx" tabindex="-1">¿ Qué es Auto-CRUDx ? <a class="header-anchor" href="#¿-que-es-auto-crudx" aria-label="Permalink to &quot;¿ Qué es Auto-CRUDx ?&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">Importante</p><p><a href="https://github.com/ecanquiz/node-auto-crudx" target="_blank" rel="noreferrer">Auto-CRUDx</a> brinda las herramientas para ayudarlo a crear su propio Generador de CRUDs Automático (según su propio <strong><em>stack</em></strong> de desarrollp y arquitectura particular). Por lo tanto, usted mismo debe diseñar sus plantillas según su criterio.</p></div><div class="warning custom-block"><p class="custom-block-title">Advertencia</p><p><em><strong>Auto-CRUDx</strong></em> no es un Generador de CRUDs por si mismo, más bien, es una herramienta que le facilitará a usted la construcción de su <strong>Generador de CRUDs</strong>. En otras palabras, <em><strong>Auto-CRUDx</strong></em> le ayudará a construir el suyo propio.</p><p><em><strong>Auto-CRUDx</strong></em> tampoco es una herramienta para construir <em>Scaffolds</em>. Por lo tanto, no genera <em>Layout</em>, <em>Sign In</em>, <em>Sign Up</em>, <em>Password Recovery</em>, etc.</p></div><h2 id="requisitos" tabindex="-1">Requisitos <a class="header-anchor" href="#requisitos" aria-label="Permalink to &quot;Requisitos&quot;">​</a></h2><p>Auto-CRUDx está desarrollada en <a href="https://nodejs.org/" target="_blank" rel="noreferrer">Node</a>, por lo que es importante tener conocimientos mínimos del mismo y tenerlo instalado en su maquina.</p><p>Además, usa como dependencia las Plantillas de JavaScript Integradas <a href="https://www.npmjs.com/package/ejs" target="_blank" rel="noreferrer">EJS</a>. Por lo que también es fundamental leer la respectiva <a href="https://ejs.co/" target="_blank" rel="noreferrer">documentación</a>.</p><div class="warning custom-block"><p class="custom-block-title">Advertencia</p><p>La actual versión del <strong>Auto-CRUx</strong>, solo se alimenta de la información proveniente del diseño de sus tablas creadas en su bases de datos <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">PostgreSQL</a>. Por lo que debe tener previamente instalado PostgreSQL en su máquina, así como también haber construido sus correspondientes tablas en dicha base de datos.</p></div>',23),u=[l];function d(c,m,p,h,g,b){return a(),o("div",null,u)}const _=e(i,[["render",d]]);export{q as __pageData,_ as default};
