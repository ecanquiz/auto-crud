import{_ as s,v as a,b as n,R as o}from"./chunks/framework.a7c22432.js";const l="/vue-pwa/assets/cache-external-resources-00.3fcfa773.jpg",e="/vue-pwa/assets/cache-external-resources-01.73b05abd.jpg",d=JSON.parse('{"title":"Caché de Recursos Externos","description":"","frontmatter":{},"headers":[],"relativePath":"pwa-for-vite/cache-external-resources.md","filePath":"pwa-for-vite/cache-external-resources.md"}'),p={name:"pwa-for-vite/cache-external-resources.md"},t=o(`<h1 id="cache-de-recursos-externos" tabindex="-1">Caché de Recursos Externos <a class="header-anchor" href="#cache-de-recursos-externos" aria-label="Permalink to &quot;Caché de Recursos Externos&quot;">​</a></h1><p>Si usa algún CDN para descargar algunos recursos como fuentes y css, debe incluirlos en el precaché del <strong><em>service worker</em></strong>, y <a href="https://vite-pwa-org.netlify.app/workbox/generate-sw.html#cache-external-resources" target="_blank" rel="noreferrer">así su aplicación funcionará cuando esté fuera de línea</a>.</p><p>El siguiente ejemplo utilizará css de <a href="https://fonts.googleapis.com" target="_blank" rel="noreferrer">https://fonts.googleapis.com</a>.</p><p>En el archivo <code>index.html</code> debe configurar el enlace <code>css</code>, también <strong>DEBE</strong> incluir el atributo <code>crossorigin=&quot;anonymous&quot;</code> para los recursos externos (consulte <a href="https://developer.chrome.com/docs/workbox/caching-resources-during-runtime/#cross-origin-considerations" target="_blank" rel="noreferrer">Manejar Solicitudes de Terceros</a>):</p><p><code>📃./index.html</code></p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dns-prefetch</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://fonts.googleapis.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preconnect</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">crossorigin</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">anonymous</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://fonts.googleapis.com</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://fonts.googleapis.com/css?family=Audiowide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Audiowide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> sans-serif</span><span style="color:#89DDFF;">;}&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Ahora su sitio se lucirá así:</p><p><img src="`+l+`" alt="cache-external-resources"></p><p>Luego, en su archivo <code>vite.config.ts</code>, agregue el siguiente código:</p><p><code>📃./vite.config.ts</code></p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">VitePWA</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">workbox</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// omitted for brevity ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runtimeCaching</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">urlPattern</span><span style="color:#89DDFF;">:</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">^</span><span style="color:#C3E88D;">https:</span><span style="color:#A6ACCD;">\\/\\/</span><span style="color:#C3E88D;">fonts</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">googleapis</span><span style="color:#A6ACCD;">\\.</span><span style="color:#C3E88D;">com</span><span style="color:#A6ACCD;">\\/</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">*/</span><span style="color:#F78C6C;">i</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">handler</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">CacheFirst</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">cacheName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">google-fonts-cache</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">cacheableResponse</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#F07178;">statuses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// omitted for brevity ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="fuera-de-linea" tabindex="-1">Fuera de Línea <a class="header-anchor" href="#fuera-de-linea" aria-label="Permalink to &quot;Fuera de Línea&quot;">​</a></h2><p>Puede desconectarse cambiando la red a <code>Offline</code>. Si actualiza la página, obtendrá algo similar a esto:</p><p><img src="`+e+'" alt="cache-external-resources"></p>',14),r=[t];function c(D,y,F,i,C,u){return a(),n("div",null,r)}const h=s(p,[["render",c]]);export{d as __pageData,h as default};
