(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{11:function(e,n,t){},111:function(e,n,t){},113:function(e,n,t){},114:function(e,n,t){},134:function(e,n,t){},138:function(e,n,t){},139:function(e,n,t){},141:function(e,n,t){"use strict";t.r(n);var s=t(1),a=t.n(s),c=t(55),r=t.n(c),i=t(4),o=t(6),l=t.n(o),u=t(9),d=t(14),m=t.n(d),j=t(3),v=(t(111),function(e){return["porygon-z","ho-oh","jangmo-o","hakamo-o"].includes(e)?e:"farfetchd"===e||"sirfetchd"===e?e.slice(0,8)+"'"+e.slice(8):"mr-mime"===e||"mr-rime"===e?e.slice(0,2)+". "+e.slice(3):null===e||void 0===e?void 0:e.split("-")[0]}),p=function(e){return e<10?"#00".concat(e):e<100?"#0".concat(e):"#".concat(e)},b=function(e){return e.map((function(e){return e.type.name}))},f=(t(47),t(0)),x=function(e){var n=e.typesArray,t=e.isLarge;return Object(f.jsx)("div",{className:t?"type-container-large":"type-container-small",children:null===n||void 0===n?void 0:n.map((function(e){return Object(f.jsx)("div",{className:t?"types-card-large ".concat(e):"types-card-small ".concat(e),children:e},e)}))})},h=function(e){var n,t,s,a=e.pokemonItem,c=Object(j.f)(),r=null===(n=a.sprites)||void 0===n||null===(t=n.other)||void 0===t||null===(s=t["official-artwork"])||void 0===s?void 0:s.front_default,i=v(a.name),o=b(a.types);return Object(f.jsxs)("div",{className:"pokemonCardContainer",onClick:function(){return c("/".concat(a.name))},children:[r&&Object(f.jsx)("img",{className:"pokemonImage",alt:a.name,src:r}),Object(f.jsxs)("div",{className:"copyContainer",children:[Object(f.jsx)("div",{className:"pokemonId",children:p(a.id)}),Object(f.jsx)("div",{className:"pokemonName",children:i}),Object(f.jsx)("div",{className:"cardTypeContainer",children:Object(f.jsx)(x,{isLarge:!1,typesArray:o})})]})]},a.name)},O=(t(113),t(114),function(){return Object(f.jsx)("div",{className:"pokeball-div"})}),k=t(57),N=t.n(k),g=t(56),w=t.n(g),y=(t(134),new m.a),C=function(){var e=Object(s.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(j.f)();Object(s.useEffect)((function(){var e=function(){var e=Object(u.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.getPokemonsList({limit:898,offset:0});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(function(){var n=Object(u.a)(l.a.mark((function n(){var t,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,s=t.results,a(s);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]);var r=Object(s.useState)(""),o=Object(i.a)(r,2),d=o[0],m=o[1],v=Object(s.useState)(""),p=Object(i.a)(v,2),b=p[0],x=p[1],h=t.map((function(e){return e.name})),O=function(e){var n=e.target.value;if(""!==n){var t=h.filter((function(e){return e.toLowerCase().includes(n.toLowerCase())}));x(t)}else x("");m(n)};return Object(f.jsxs)("div",{className:"search-container",children:[Object(f.jsxs)("div",{className:"search-input-container",children:[Object(f.jsx)("input",{type:"search",value:d,onChange:O,className:"search-input",onClick:O}),Object(f.jsx)("button",{className:"button-result",onClick:function(){return c("/".concat(d.toLowerCase()))},children:Object(f.jsx)(N.a,{})})]}),Object(f.jsx)("div",{className:"pokemon-list",children:b&&b.length>0?Object(f.jsx)(w.a,{className:"pokedexResultsDiv",onOutsideClick:function(){x("")},children:null===b||void 0===b?void 0:b.map((function(e){return Object(f.jsxs)("div",{className:"jimmy",onClick:function(){m(e.charAt(0).toUpperCase()+e.slice(1)),x("")},children:[" ",Object(f.jsx)("p",{className:"jim",children:e})]})}))}):null})]})},P=new m.a,_=function(){var e=Object(u.a)(l.a.mark((function e(n){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getPokemonByName(n.name);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),S=function(){var e=Object(s.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],c=Object(s.useState)(!1),r=Object(i.a)(c,2),o=r[0],d=r[1],m=Object(s.useState)(12),j=Object(i.a)(m,2),v=j[0],p=j[1],b=function(){var e=Object(u.a)(l.a.mark((function e(){var n,t,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,P.getPokemonsList({limit:898,offset:0});case 3:for(n=e.sent,t=[],s=1;s<13;s+=1)t.push(n.results[Math.floor(898*Math.random())]);return e.next=8,Promise.all(t.map(_));case 8:c=e.sent,a(c),d(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(l.a.mark((function e(){var n,t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,P.getPokemonsList({limit:12,offset:0});case 3:if(!(null===(n=e.sent)||void 0===n?void 0:n.results)){e.next=10;break}return e.next=7,Promise.all(null===(t=n.results)||void 0===t?void 0:t.map(_));case 7:s=e.sent,a(s),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(l.a.mark((function e(){var n,t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,P.getPokemonsList({limit:898,offset:0});case 3:if(!(null===(n=e.sent)||void 0===n?void 0:n.results)){e.next=10;break}return e.next=7,Promise.all(null===(t=n.results)||void 0===t?void 0:t.map(_));case 7:s=e.sent,a(s),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(l.a.mark((function e(){var n,t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.getPokemonsList({limit:v,offset:0});case 2:if(!(null===(n=e.sent)||void 0===n?void 0:n.results)){e.next=8;break}return e.next=6,Promise.all(null===(t=n.results)||void 0===t?void 0:t.map(_));case 6:s=e.sent,a(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(s.useEffect)((function(){x()}),[]),o)return Object(f.jsx)(O,{});var g=function(){var e=Object(u.a)(l.a.mark((function e(n){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=[],"numberAsc"!==n.target.value){e.next=6;break}return d(!0),e.next=5,t.sort((function(e,n){return e.id<n.id?-1:e.id>n.id?1:0}));case 5:s=e.sent;case 6:if("numberDesc"!==n.target.value){e.next=11;break}return d(!0),e.next=10,t.sort((function(e,n){return e.id<n.id?1:e.id>n.id?-1:0}));case 10:s=e.sent;case 11:if("nameAsc"!==n.target.value){e.next=16;break}return d(!0),e.next=15,t.sort((function(e,n){return e.name<n.name?-1:e.name>n.name?1:0}));case 15:s=e.sent;case 16:if("nameDesc"!==n.target.value){e.next=21;break}return d(!0),e.next=20,t.sort((function(e,n){return e.name<n.name?1:e.name>n.name?-1:0}));case 20:s=e.sent;case 21:d(!1),a(s);case 23:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"pokedexContainer",children:[Object(f.jsx)("div",{className:"titleContainer",children:Object(f.jsx)("h1",{className:"titleH1",children:"Pok\xe9dex"})}),Object(f.jsx)(C,{pokemonItem:t}),Object(f.jsxs)("div",{className:"filtersContainer",children:[Object(f.jsx)("button",{className:"randomizer",type:"button",alt:"Surprise me!",onClick:b,children:"Surprise Me!"}),Object(f.jsx)("div",{className:"selectWrapper",children:Object(f.jsxs)("select",{id:"sortOrder",onChange:g,children:[Object(f.jsx)("option",{value:"noSort",children:"Sort results by..."}),Object(f.jsx)("option",{value:"numberAsc",children:"Lowest Number (First)"}),Object(f.jsx)("option",{value:"numberDesc",children:"Highest Number (First)"}),Object(f.jsx)("option",{value:"nameAsc",children:"A-Z"}),Object(f.jsx)("option",{value:"nameDesc",children:"Z-A"})]})})]}),Object(f.jsx)("div",{className:"pokedexResultsContainer",children:null===t||void 0===t?void 0:t.map((function(e){return Object(f.jsx)(h,{pokemonItem:e},e.name)}))}),Object(f.jsxs)("div",{className:"load-more-button-container",children:[Object(f.jsx)("button",{className:"load-more-button",onClick:function(){N(p(v+12))},children:"Load More Pok\xe9mon"}),Object(f.jsx)("button",{className:"load-all-button",onClick:function(){k()},children:"Load All Pok\xe9mon"})]})]})},A=(t(11),function(e){var n=e.pokemonItem,t=v(n.name),s=p(n.id);return Object(f.jsxs)("div",{className:"pokemon-name-heading",children:[Object(f.jsx)("span",{className:"pokemon-name",children:t}),Object(f.jsx)("span",{className:"pokemon-id",children:s})]})}),I=function(e){var n,t,s=e.pokemonItem,a=Object(j.f)(),c=v(null===s||void 0===s||null===(n=s.prevPokemon)||void 0===n?void 0:n.name),r=v(null===s||void 0===s||null===(t=s.nextPokemon)||void 0===t?void 0:t.name),i=p(s.prevPokemon.id),o=p(s.nextPokemon.id);return Object(f.jsx)("section",{className:" pagination section pokedex-pokemon-header",children:Object(f.jsxs)("div",{className:"pokedex-pokemon-pagination",children:[Object(f.jsx)("div",{className:"previous",onClick:function(){return a("/".concat(s.prevPokemon.name))},children:Object(f.jsxs)("div",{className:"left",children:[Object(f.jsx)("span",{className:"icon icon_arrow_sm_left"}),Object(f.jsx)("span",{className:"pokemon-number",children:i}),Object(f.jsx)("span",{className:"pokemon-name",children:c})]})}),Object(f.jsx)("div",{className:"next",onClick:function(){return a("/".concat(s.nextPokemon.name))},children:Object(f.jsxs)("div",{className:"right",children:[Object(f.jsx)("span",{className:"icon icon_arrow_sm_right"}),Object(f.jsx)("span",{className:"pokemon-name",children:r}),Object(f.jsx)("span",{className:"pokemon-number",children:o})]})})]})})},B=function(e){var n=e.numOfBarsColored,t=e.statName,s=n,a=t,c=Array.from(new Array(15)).map((function(e,n){var t=n<s?"#30a7d7":"white";return Object(f.jsx)("li",{className:"stat-li",style:{backgroundColor:t}})}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("ul",{className:"bar-ul",children:c}),a]})},L=function(e){for(var n=e.pokemonItem.stats,t=[],s=0;s<n.length;s++){var a=n[s].base_stat;t.push(Math.round(a/17))}var c=n.map((function(e){var n=e.stat.name.charAt(0)+e.stat.name.slice(1,8).replace("-"," ")+e.stat.name.charAt(8)+e.stat.name.slice(9);return Object(f.jsx)("span",{className:"stats-span",children:n})}));return Object(f.jsx)("div",{className:"stats-wrapper",children:Object(f.jsxs)("div",{className:"stats-div",children:[Object(f.jsx)("h3",{className:"stats-header",children:"Stats"}),Object(f.jsx)("div",{className:"stats-container",children:Object(f.jsx)("ul",{className:"stat-ul-parent",children:t.map((function(e,n){return Object(f.jsx)("div",{className:"stat-ul-div",children:Object(f.jsx)(B,{numOfBarsColored:e,statName:c[n]})})}))})})]})})},M=function(e){var n=e.src,t=e.name;return Object(f.jsx)("div",{className:"image-div",children:n&&Object(f.jsx)("img",{className:"pokemon-image",height:400,width:400,alt:t,src:n})})},E=t(59),F=t.n(E),D=t(60),G=t.n(D),T=function(e){var n,t=e.pokemonItem,s=t.height,a=t.weight,c=t.category.replace("Pok\xe9mon",""),r=null===(n=t.abilities)||void 0===n?void 0:n.map((function(e){var n=e.ability;return Object(f.jsx)("span",{className:"info-value",id:"info-abilities",children:null===n||void 0===n?void 0:n.name.replaceAll("-"," ")})})),i=function(e){return(e/10).toFixed(1)};return Object(f.jsxs)("div",{className:"info-div",height:200,width:400,children:[Object(f.jsx)("div",{className:"info-ul-div1",children:Object(f.jsxs)("ul",{className:"info-ul1",children:[Object(f.jsxs)("li",{className:"info-li",children:[Object(f.jsx)("span",{className:"info-label",children:"Height"}),Object(f.jsxs)("span",{className:"info-value",children:[i(s)," m"]})]}),Object(f.jsxs)("li",{className:"info-li",children:[Object(f.jsx)("span",{className:"info-label",children:"Weight"}),Object(f.jsxs)("span",{className:"info-value",children:[i(a)," kg"]})]}),Object(f.jsxs)("li",{className:"info-li",children:[Object(f.jsx)("span",{className:"info-label",children:"Gender"}),t.canBeMale?Object(f.jsxs)("span",{className:"info-value",children:["    ",Object(f.jsx)(F.a,{className:"malePokemon"})]}):null,t.canBeFemale?Object(f.jsxs)("span",{className:"info-value",children:["    ",Object(f.jsx)(G.a,{className:"femalePokemon"})]}):null,t.unknown?Object(f.jsx)("span",{className:"info-value",children:"Unknown"}):null]})]})}),Object(f.jsx)("div",{className:"info-ul-div2",children:Object(f.jsxs)("ul",{className:"info-ul2",children:[Object(f.jsxs)("li",{className:"info-li",children:[Object(f.jsx)("span",{className:"info-label",children:"Category"}),Object(f.jsx)("span",{className:"info-value",children:c})]}),Object(f.jsxs)("li",{className:"info-li",children:[Object(f.jsx)("span",{className:"info-label",children:"Abilities"}),r]})]})})]})},H=function(e){var n,t=e.pokemonItem,s=b(t.types),a=Object(j.f)(),c=null===t||void 0===t||null===(n=t.evoListItems)||void 0===n?void 0:n.map((function(e){var n,t;return Object(f.jsxs)("div",{className:"evolution-pokemon-div",onClick:function(){return a("/".concat(e.name))},children:[Object(f.jsx)("img",{className:"evolution-img",height:200,width:200,src:null===(n=e.sprites)||void 0===n||null===(t=n.other["official-artwork"])||void 0===t?void 0:t.front_default}),Object(f.jsxs)("span",{className:"evolution-span-1",children:[Object(f.jsx)("h3",{className:"evolution-h3-1",children:v(e.name)}),Object(f.jsx)("h3",{className:"evolution-h3-2",children:p(e.id)})]}),Object(f.jsx)(x,{typesArray:s,isLarge:!1})]})}));return Object(f.jsxs)("div",{className:"evolution-wrapper",children:[Object(f.jsx)("span",{className:"evolution-span-2",children:Object(f.jsx)("h2",{className:"evolution-h2",children:"Evolutions"})}),t.evoListItems.length<=1?Object(f.jsx)("p",{className:"evolution-no-evolution",children:"This Pok\xe9mon does not evolve"}):null,Object(f.jsx)("div",{className:"evolution-content-div",children:c})]})},R=t(30),V=t.n(R),W=function(e){var n=e.blue,t=e.red,a=Object(s.useState)(!0),c=Object(i.a)(a,2),r=c[0],o=c[1];return Object(f.jsxs)("div",{className:"Test",children:[Object(f.jsx)("div",{children:Object(f.jsxs)("p",{className:"versions-p",children:[r?n:t," "]})}),Object(f.jsxs)("div",{children:["Versions:"," ",Object(f.jsx)("span",{className:"version-span",children:Object(f.jsx)(V.a,{className:"version-blue",onClick:function(){return o(!0)},children:"Blue"})}),Object(f.jsx)("span",{className:"version-span",children:Object(f.jsx)(V.a,{className:"version-red",onClick:function(){return o(!1)},children:"Red"})})]})]})},z=t(10),J=function(e){var n=e.damageStuff1,t=e.damageStuff2,s=n.double_damage_from.map((function(e){return e.name})),a=null===t||void 0===t?void 0:t.double_damage_from.map((function(e){return e.name})),c=s.concat(a),r=Object(z.a)(new Set(c));return Object(f.jsxs)("div",{className:"weakness-card",children:[Object(f.jsx)("h3",{children:"Weaknesses"}),Object(f.jsx)(x,{typesArray:r})]})},U=function(){var e=Object(j.f)();return Object(f.jsx)("div",{className:"explore-div",children:Object(f.jsx)("a",{className:"explore-link",onClick:function(){return e("/")},children:"Explore More Pok\xe9mon"})})},Z=new m.a,q=function(){var e,n,t,a,c,r,o,d,m,v=Object(j.g)().name,p=Object(s.useState)(),h=Object(i.a)(p,2),k=h[0],N=h[1],g=Object(s.useState)(!1),w=Object(i.a)(g,2),y=w[0],C=w[1],P=function(){var e=Object(u.a)(l.a.mark((function e(n){var t,s,a,c,r,i,o,d,m,j,v,p,b,f,x,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,Z.getPokemonByName(n);case 3:return s=e.sent,e.next=6,Z.getPokemonSpeciesByName(n);case 6:return s.spec=e.sent,e.next=9,fetch(s.species.url);case 9:return a=e.sent,e.next=12,a.json();case 12:return c=e.sent,s.category=null===c||void 0===c||null===(t=c.genera[7])||void 0===t?void 0:t.genus,e.next=16,fetch(s.types[0].type.url);case 16:return r=e.sent,e.next=19,r.json();case 19:if(i=e.sent,s.damageStuff1=i.damage_relations,!(s.types.length>0)){e.next=35;break}return e.prev=22,e.next=25,fetch(s.types[1].type.url);case 25:return o=e.sent,e.next=28,o.json();case 28:d=e.sent,s.damageStuff2=d.damage_relations,e.next=35;break;case 32:e.prev=32,e.t0=e.catch(22),console.log(e.t0);case 35:return m=s.spec.evolution_chain.url,e.next=38,fetch(m);case 38:return j=e.sent,e.next=41,j.json();case 41:for(v=e.sent,p=[],b=v.chain;b;)p.push(b.species.name),b=b.evolves_to[0];return e.next=47,Promise.all(p.map(function(){var e=Object(u.a)(l.a.mark((function e(n){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.getPokemonByName(n);case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 47:return f=e.sent,s.evoListItems=f,e.next=51,Z.getPokemonByName(1===s.id?898:s.id-1);case 51:return s.prevPokemon=e.sent,e.next=54,Z.getPokemonByName(898===s.id?1:s.id+1);case 54:return s.nextPokemon=e.sent,e.next=57,Z.getGenderByName("male");case 57:return x=e.sent,e.next=60,Z.getGenderByName("female");case 60:h=e.sent,s.canBeMale=void 0!==(null===x||void 0===x?void 0:x.pokemon_species_details.find((function(e){var n;return(null===e||void 0===e||null===(n=e.pokemon_species)||void 0===n?void 0:n.name)===s.name}))),s.canBeFemale=void 0!==(null===h||void 0===h?void 0:h.pokemon_species_details.find((function(e){var n;return(null===e||void 0===e||null===(n=e.pokemon_species)||void 0===n?void 0:n.name)===s.name}))),s.unknown=!s.canBeMale&&!s.canBeFemale,N(s),C(!1);case 66:case"end":return e.stop()}}),e,null,[[22,32]])})));return function(n){return e.apply(this,arguments)}}();if(Object(s.useEffect)((function(){v&&P(v)}),[v]),y)return Object(f.jsx)(O,{});if(!k)return null;var _=null===k||void 0===k||null===(e=k.spec)||void 0===e||null===(n=e.flavor_text_entries)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.flavor_text,S=null===k||void 0===k||null===(a=k.spec)||void 0===a||null===(c=a.flavor_text_entries)||void 0===c||null===(r=c[3])||void 0===r?void 0:r.flavor_text,B=null===k||void 0===k?void 0:k.damageStuff1,E=null===k||void 0===k?void 0:k.damageStuff2,F=b(k.types);return Object(f.jsxs)("div",{className:"pokemon-page",children:[Object(f.jsx)(I,{pokemonItem:k}),Object(f.jsxs)("div",{className:"pokemon-container",children:[Object(f.jsx)(A,{pokemonItem:k}),Object(f.jsxs)("div",{className:"main-contents",children:[Object(f.jsxs)("div",{className:"row3",pokemonItem:k,children:[Object(f.jsx)(M,{src:null===(o=k.sprites)||void 0===o||null===(d=o.other)||void 0===d||null===(m=d["official-artwork"])||void 0===m?void 0:m.front_default}),Object(f.jsx)(W,{blue:_,red:S}),Object(f.jsx)(T,{pokemonItem:k}),Object(f.jsx)(x,{typesArray:F,isLarge:!0}),Object(f.jsx)(J,{damageStuff1:B,damageStuff2:E})]}),Object(f.jsx)(L,{pokemonItem:k})]}),Object(f.jsx)(H,{pokemonItem:k})]}),Object(f.jsx)(U,{})]})},K=(t(138),function(){return Object(f.jsx)("nav",{className:"main",children:Object(f.jsxs)("div",{className:"content-wrapper",children:[Object(f.jsx)("div",{className:"nav-div",id:"home-tab",children:Object(f.jsx)("a",{className:"nav-link",children:Object(f.jsx)("div",{children:"Home"})})}),Object(f.jsx)("div",{className:"nav-div",id:"pokedex-tab",children:Object(f.jsx)("a",{className:"nav-link",children:Object(f.jsx)("div",{children:"Pok\xe9dex"})})}),Object(f.jsx)("div",{className:"nav-div",id:"games-tab",children:Object(f.jsx)("a",{className:"nav-link",href:"https://www.pokemon.com/uk/pokemon-video-games/",children:Object(f.jsx)("div",{children:"Video Games & Apps"})})}),Object(f.jsx)("div",{className:"nav-div",id:"trading-tab",children:Object(f.jsx)("a",{className:"nav-link",href:"https://www.pokemon.com/uk/pokemon-tcg/",children:Object(f.jsx)("div",{children:"Trading Card Game"})})}),Object(f.jsx)("div",{className:"nav-div",id:"tv-tab",children:Object(f.jsx)("a",{className:"nav-link",href:"https://www.pokemon.com/uk/pokemon-episodes/",children:Object(f.jsx)("div",{children:"Pok\xe9mon TV"})})}),Object(f.jsx)("div",{className:"nav-div",id:"play-tab",children:Object(f.jsx)("a",{className:"nav-link",href:"https://www.pokemon.com/uk/play-pokemon/",children:Object(f.jsx)("div",{children:"Play! Pok\xe9mon Events"})})}),Object(f.jsx)("div",{className:"nav-div",id:"news-tab",children:Object(f.jsx)("a",{className:"nav-link",href:"https://www.pokemon.com/uk/pokemon-news/",children:Object(f.jsx)("div",{children:"News"})})})]})})}),Q=t(12),X=(t(139),function(){return Object(f.jsxs)("div",{className:"appContentContainer",children:[Object(f.jsx)(K,{}),Object(f.jsx)("div",{className:"appRoutesContainer",children:Object(f.jsx)(Q.a,{children:Object(f.jsxs)(j.c,{children:[Object(f.jsx)(j.a,{path:"/",element:Object(f.jsx)(S,{})}),Object(f.jsx)(j.a,{path:"/:name",element:Object(f.jsx)(q,{})})]})})})]})});r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(X,{})}),document.getElementById("root"))},47:function(e,n,t){},85:function(e,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.9ad70386.chunk.js.map