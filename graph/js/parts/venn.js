if(!_.venn){_.venn=1;(function($){var qT=function(a){function b(a){a.I(4294967295)}$.U.call(this);this.Fa("venn.intersections");this.oa=a;a={};$.Q(a,[["fill",0,8256],["stroke",0,8256],["hatchFill",0,8256],["labels",0,0],["markers",0,0]]);this.ca=new $.oy(this,a,$.hm);this.ca.sa("markersFactoryConstructor",$.ty);this.ca.sa("markersAfterInitCallback",$.vy);this.ca.sa("labelsFactoryConstructor",$.qy);this.ca.sa("labelsAfterInitCallback",function(a){$.L(a,this.ae,this)});a={};$.Q(a,[["fill",0,8192],["stroke",0,8192],["hatchFill",0,8192],
["labels",0,0],["markers",0,0]]);this.ya=new $.oy(this,a,$.Ao);this.ya.sa("labelsFactoryConstructor",$.qy);this.ya.sa("markersFactoryConstructor",$.ty);this.Da=new $.oy(this,a,$.Bo);this.Da.sa("labelsFactoryConstructor",$.qy);this.Da.sa("markersFactoryConstructor",$.ty);this.ya.sa("labelsAfterInitCallback",b);this.ya.sa("markersAfterInitCallback",b);this.Da.sa("labelsAfterInitCallback",b);this.Da.sa("markersAfterInitCallback",b)},Yfa=function(a,b){var c=0;var d=d||{};var e=d.pI||100;d=d.mta||1E-10;
var f=a(c),h=a(b),k=b-c;if(0<f*h)throw"Initial points must have opposite signs";if(0===f)return c;if(0===h)return b;for(h=0;h<e;++h){k/=2;var l=c+k,m=a(l);0<=m*f&&(c=l);if(Math.abs(k)<d||0===m)return l}return c+k},Zfa=function(a){for(var b=Array(a),c=0;c<a;++c)b[c]=0;return b},$fa=function(a,b){return(0,$.Wa)(Zfa(a),function(){return Zfa(b)})},rT=function(a,b){for(var c=0,d=0;d<a.length;++d)c+=a[d]*b[d];return c},sT=function(a){return Math.sqrt(rT(a,a))},aga=function(a,b){for(var c=0;c<b.length;++c)a[c]=
-1*b[c]},tT=function(a,b,c,d,e){for(var f=0;f<a.length;++f)a[f]=b*c[f]+d*e[f]},bga=function(a,b,c,d,e){function f(f,m,q){for(var u=0;16>u;++u)if(e=(f+m)/2,tT(d.x,1,c.x,e,b),l=d.Re=a(d.x,d.Tk),p=rT(d.Tk,b),l>h+r*e*k||l>=q)m=e;else{if(Math.abs(p)<=-t*k)return e;0<=p*(m-f)&&(m=f);f=e;q=l}return 0}var h=c.Re,k=rT(c.Tk,b),l=h,m=h,p=k,q=0;e=e||1;var r=r||1E-6;var t=t||.1;for(var u=0;10>u;++u){tT(d.x,1,c.x,e,b);l=d.Re=a(d.x,d.Tk);p=rT(d.Tk,b);if(l>h+r*e*k||u&&l>=m)return f(q,e,m);if(Math.abs(p)<=-t*k)break;
if(0<=p)return f(e,q,l);m=l;q=e;e*=2}return e},cga=function(a,b,c){var d={x:b.slice(),Re:0,Tk:b.slice()},e={x:b.slice(),Re:0,Tk:b.slice()},f=b.slice(),h=1;c=c||{};var k=c.pI||20*b.length;d.Re=a(d.x,d.Tk);b=d.Tk.slice();aga(b,d.Tk);for(var l=0;l<k;++l){h=bga(a,b,d,e,h);c.history&&c.history.push({x:d.x.slice(),Re:d.Re,Tk:d.Tk.slice(),alpha:h});if(h){tT(f,1,e.Tk,-1,d.Tk);tT(b,Math.max(0,rT(f,e.Tk)/rT(d.Tk,d.Tk)),b,-1,e.Tk);var m=d;d=e;e=m}else aga(b,d.Tk);if(1E-5>=sT(d.Tk))break}c.history&&c.history.push({x:d.x.slice(),
Re:d.Re,Tk:d.Tk.slice(),alpha:h});return d},dga=function(a,b,c){function d(a,b){return a.Re-b.Re}function e(a){for(var b=0;b<a.length;b++)w[v][b]=a[b];w[v].Re=a.Re}c=c||{};var f=c.pI||200*b.length,h=c.cta||1.05,k=c.ota||.001,l=c.P3||1E-6,m=c.P3||1E-5,p=void 0!==c.Kja?c.Kja:1,q=void 0!==c.rda?c.rda:2,r=void 0!==c.xja?c.xja:-.5,t=void 0!==c.fka?c.fka:.5,u,v=b.length,w=Array(v+1);w[0]=b;w[0].Re=a(b);for(var x=w[0].id=0;x<v;++x){var y=b.slice();y[x]=y[x]?y[x]*h:k;w[x+1]=y;w[x+1].Re=a(y);w[x+1].id=x+1}h=
b.slice();k=b.slice();y=b.slice();b=b.slice();for(var B=0;B<f;++B){w.sort(d);c.history&&(x=(0,$.Wa)(w,function(a){var b=a.slice();b.Re=a.Re;b.id=a.id;return b}),x.sort(function(a,b){return a.id-b.id}),c.history.push({x:w[0].slice(),Re:w[0].Re,kta:x}));for(x=u=0;x<v;++x)u=Math.max(u,Math.abs(w[0][x]-w[1][x]));if(Math.abs(w[0].Re-w[v].Re)<l&&u<m)break;for(x=0;x<v;++x){for(u=h[x]=0;u<v;++u)h[x]+=w[u][x];h[x]/=v}x=w[v];tT(k,1+p,h,-p,x);k.Re=a(k);if(k.Re<w[0].Re)tT(b,1+q,h,-q,x),b.Re=a(b),b.Re<k.Re?e(b):
e(k);else if(k.Re>=w[v-1].Re){if(u=!1,k.Re>x.Re?(tT(y,1+r,h,-r,x),y.Re=a(y),y.Re<x.Re?e(y):u=!0):(tT(y,1-r*p,h,r*p,x),y.Re=a(y),y.Re<k.Re?e(y):u=!0),u){if(1<=t)break;for(x=1;x<w.length;++x)tT(w[x],1-t,w[0],t,w[x]),w[x].Re=a(w[x])}}else e(k)}w.sort(d);return{Re:w[0].Re,x:w[0]}},wT=function(a,b){var c=ega(a),d=(0,$.Ze)(c,function(b){a:{for(var c=0;c<a.length;++c)if(uT(b,a[c])>a[c].Cb+1E-10){b=!1;break a}b=!0}return b}),e=0,f=0,h=[],k;if(1<d.length){var l=fga(d);for(k=0;k<d.length;++k){var m=d[k];m.angle=
Math.atan2(m.x-l.x,m.y-l.y)}d.sort(function(a,b){return b.angle-a.angle});l=d[d.length-1];for(k=0;k<d.length;++k){m=d[k];f+=(l.x+m.x)*(m.y-l.y);for(var p={x:(m.x+l.x)/2,y:(m.y+l.y)/2},q=null,r=0;r<m.jO.length;++r)if(-1<l.jO.indexOf(m.jO[r])){var t=a[m.jO[r]],u=Math.atan2(l.x-t.x,l.y-t.y),v=u-Math.atan2(m.x-t.x,m.y-t.y);0>v&&(v+=2*Math.PI);u-=v/2;u=uT(p,{x:t.x+t.Cb*Math.sin(u),y:t.y+t.Cb*Math.cos(u)});if(null===q||q.width>u)q={pn:t,width:u,di:m,dl:l}}null!==q&&(h.push(q),e+=vT(q.pn.Cb,q.width),l=m)}}else{l=
a[0];for(k=1;k<a.length;++k)a[k].Cb<l.Cb&&(l=a[k]);e=!1;for(k=0;k<a.length;++k)if(uT(a[k],l)>Math.abs(l.Cb-a[k].Cb)){e=!0;break}e?e=f=0:(e=l.Cb*l.Cb*Math.PI,h.push({pn:l,di:{x:l.x,y:l.y+l.Cb},dl:{x:l.x-1E-10,y:l.y+l.Cb},width:2*l.Cb}))}f/=2;b&&(b.pC=e+f,b.Msa=e,b.gta=f,b.oC=h,b.Wsa=d,b.Xsa=c);return e+f},ega=function(a){for(var b=[],c=0;c<a.length;++c)for(var d=c+1;d<a.length;++d)for(var e=gga(a[c],a[d]),f=0;f<e.length;++f){var h=e[f];h.jO=[c,d];b.push(h)}return b},hga=function(a,b){var c=Math.sqrt(a*
a-b*b);return b*c+a*a*Math.atan2(b,c)},vT=function(a,b){return hga(a,b-a)-hga(a,-a)},uT=function(a,b){return Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y))},iga=function(a,b,c){return c>=a+b?0:c<=Math.abs(a-b)?Math.PI*Math.min(a,b)*Math.min(a,b):vT(a,a-(c*c-b*b+a*a)/(2*c))+vT(b,b-(c*c-a*a+b*b)/(2*c))},gga=function(a,b){var c=uT(a,b),d=a.Cb,e=b.Cb;if(c>=d+e||c<=Math.abs(d-e))return[];var f=(d*d-e*e+c*c)/(2*c);e=Math.sqrt(d*d-f*f);d=a.x+f*(b.x-a.x)/c;f=a.y+f*(b.y-a.y)/c;var h=e/c*-(b.y-a.y);c=e/
c*-(b.x-a.x);return[{x:d+h,y:f-c},{x:d-h,y:f+c}]},fga=function(a){for(var b={x:0,y:0},c=0;c<a.length;++c)b.x+=a[c].x,b.y+=a[c].y;b.x/=a.length;b.y/=a.length;return b},lga=function(a){var b=b||{};b.pI=b.pI||500;var c=b.Vsa||jga;a=kga(a);var d=c(a);c=[];var e=[];for(f in d)d.hasOwnProperty(f)&&(c.push(d[f].x),c.push(d[f].y),e.push(f));b=dga(function(b){for(var c={},f=0;f<e.length;++f){var h=e[f];c[h]={x:b[2*f],y:b[2*f+1],Cb:d[h].Cb}}return xT(c,a)},c,b).x;for(c=0;c<e.length;++c){var f=e[c];d[f].x=b[2*
c];d[f].y=b[2*c+1]}return d},yT=function(a,b,c){return Math.min(a,b)*Math.min(a,b)*Math.PI<=c+1E-10?Math.abs(a-b):Yfa(function(d){return iga(a,b,d)-c},a+b)},kga=function(a){a=a.slice();var b=[],c={},d;for(d=0;d<a.length;++d){var e=a[d];if(1==e.ii.length)b.push(e.ii[0]);else if(2==e.ii.length){var f=e.ii[0];var h=e.ii[1];c[[f,h]]=!0;c[[h,f]]=!0}}for(d=0;d<b.length;++d)for(f=b[d],e=d+1;e<b.length;++e)h=b[e],[f,h]in c||a.push({ii:[f,h],size:0,JD:window.NaN});return a},mga=function(a,b,c){var d=$fa(b.length,
b.length),e=$fa(b.length,b.length);a=(0,$.Ze)(a,function(a){return 2==a.ii.length});(0,$.Wa)(a,function(a){var f=c[a.ii[0]],k=c[a.ii[1]],l=yT(Math.sqrt(b[f].size/Math.PI),Math.sqrt(b[k].size/Math.PI),a.size);d[f][k]=d[k][f]=l;l=0;a.size+1E-10>=Math.min(b[f].size,b[k].size)?l=1:1E-10>=a.size&&(l=-1);e[f][k]=e[k][f]=l});return{Yda:d,Fda:e}},jga=function(a,b){var c=nga(a);if(8<=a.length){var d=oga(a,b),e=xT(d,a),f=xT(c,a);e+1E-8<f&&(c=d)}return c},oga=function(a,b){function c(a,b){var c=l,d=0,e;for(e=
0;e<b.length;++e)b[e]=0;for(e=0;e<c.length;++e)for(var f=a[2*e],h=a[2*e+1],k=e+1;k<c.length;++k){var p=a[2*k],q=a[2*k+1],r=c[e][k],t=m[e][k],R=(p-f)*(p-f)+(q-h)*(q-h),T=Math.sqrt(R);R-=r*r;0<t&&T<=r||0>t&&T>=r||(d+=2*R*R,b[2*e]+=4*R*(f-p),b[2*e+1]+=4*R*(h-q),b[2*k]+=4*R*(p-f),b[2*k+1]+=4*R*(q-h))}return d}b=b||{};var d=b.ita||10,e=[],f={},h;for(h=0;h<a.length;++h){var k=a[h];1==k.ii.length&&(f[k.ii[0]]=e.length,e.push(k))}h=mga(a,e,f);var l=h.Yda,m=h.Fda,p=sT((0,$.Wa)(l,sT))/l.length;l=(0,$.Wa)(l,
function(a){return(0,$.Wa)(a,function(a){return a/p})});for(h=0;h<d;++h){f=[];for(k=0;k<2*l.length;k++)f.push(1/(k+1)*Math.abs(Math.sin(h)));f=cga(c,f,b);if(!q||f.Re<q.Re)var q=f}d=q.x;q={};for(h=0;h<e.length;++h)f=e[h],q[f.ii[0]]={x:d[2*h]*p,y:d[2*h+1]*p,Cb:Math.sqrt(f.size/Math.PI)};return q},nga=function(a){function b(a,b){return b.size-a.size}function c(a){return a.set in r}function d(a,b){e[b].x=a.x;e[b].y=a.y;r[b]=!0}for(var e={},f={},h,k=0;k<a.length;++k){var l=a[k];1==l.ii.length&&(h=l.ii[0],
e[h]={x:1E10,y:1E10,jta:e.length,size:l.size,Cb:Math.sqrt(l.size/Math.PI)},f[h]=[])}a=(0,$.Ze)(a,function(a){return 2==a.ii.length});for(k=0;k<a.length;++k){l=a[k];var m=$.n(l.weight)?l.weight:1,p=l.ii[0],q=l.ii[1];l.size+1E-10>=Math.min(e[p].size,e[q].size)&&(m=0);f[p].push({set:q,size:l.size,weight:m});f[q].push({set:p,size:l.size,weight:m})}l=[];for(h in f)if(f.hasOwnProperty(h)){for(k=m=0;k<f[h].length;++k)m+=f[h][k].size*f[h][k].weight;l.push({set:h,size:m})}l.sort(b);var r={};d({x:0,y:0},l[0].set);
for(k=1;k<l.length;++k){m=l[k].set;var t=(0,$.Ze)(f[m],c);h=e[m];t.sort(b);if(0===t.length)throw"ERROR: missing pairwise overlap information";p=[];for(q=0;q<t.length;++q){var u=e[t[q].set],v=yT(h.Cb,u.Cb,t[q].size);p.push({x:u.x+v,y:u.y});p.push({x:u.x-v,y:u.y});p.push({y:u.y+v,x:u.x});p.push({y:u.y-v,x:u.x});for(var w=q+1;w<t.length;++w){var x=e[t[w].set],y=yT(h.Cb,x.Cb,t[w].size);x=gga({x:u.x,y:u.y,Cb:v},{x:x.x,y:x.y,Cb:y});for(y=0;y<x.length;++y)p.push(x[y])}}h=1E50;t=p[0];for(q=0;q<p.length;++q)e[m].x=
p[q].x,e[m].y=p[q].y,u=xT(e,a),u<h&&(h=u,t=p[q]);d(t,m)}return e},xT=function(a,b){function c(b){return(0,$.Wa)(b,function(b){return a[b]})}for(var d=0,e=0;e<b.length;++e){var f=b[e];if(1!=f.ii.length){if(2==f.ii.length){var h=a[f.ii[0]];var k=a[f.ii[1]];h=iga(h.Cb,k.Cb,uT(h,k))}else h=wT(c(f.ii));d+=($.n(f.weight)?f.weight:1)*(h-f.size)*(h-f.size)}}return d},pga=function(a,b){a.sort(function(a,b){return b.Cb-a.Cb});var c;if(0<a.length){var d=a[0].x,e=a[0].y;for(c=0;c<a.length;++c)a[c].x-=d,a[c].y-=
e}if(1<a.length)for(c=Math.atan2(a[1].x,a[1].y)-b,d=Math.cos(c),e=Math.sin(c),c=0;c<a.length;++c){var f=a[c].x;var h=a[c].y;a[c].x=d*f-e*h;a[c].y=e*f+d*h}if(2<a.length){for(c=Math.atan2(a[2].x,a[2].y)-b;0>c;)c+=2*Math.PI;for(;c>2*Math.PI;)c-=2*Math.PI;if(c>Math.PI)for(d=a[1].y/(1E-10+a[1].x),c=0;c<a.length;++c)e=(a[c].x+d*a[c].y)/(1+d*d),a[c].x=2*e-a[c].x,a[c].y=2*e*d-a[c].y}},qga=function(a){function b(a){a.parent!==a&&(a.parent=b(a.parent));return a.parent}function c(a,c){b(a).parent=b(c)}a=(0,$.Wa)(a,
function(a){return a.parent=a});for(var d=0;d<a.length;++d)for(var e=d+1;e<a.length;++e)uT(a[d],a[e])+1E-10<a[d].Cb+a[e].Cb&&c(a[e],a[d]);e={};for(d=0;d<a.length;++d){var f=b(a[d]).parent.N5;f in e||(e[f]=[]);e[f].push(a[d])}(0,$.Wa)(a,function(a){delete a.parent});a=[];for(f in e)e.hasOwnProperty(f)&&a.push(e[f]);return a},zT=function(a){function b(b){var c=Math.max.apply(null,(0,$.Wa)(a,function(a){return a[b]+a.Cb})),e=Math.min.apply(null,(0,$.Wa)(a,function(a){return a[b]-a.Cb}));return{max:c,
min:e}}return{Qq:b("x"),pt:b("y")}},rga=function(a){function b(a,b,c){if(a){var e=a.Va;if(b)b=h.Qq.max-e.Qq.min+k;else{b=h.Qq.max-e.Qq.max;var f=(e.Qq.max-e.Qq.min)/2-(h.Qq.max-h.Qq.min)/2;0>f&&(b+=f)}c?c=h.pt.max-e.pt.min+k:(c=h.pt.max-e.pt.max,f=(e.pt.max-e.pt.min)/2-(h.pt.max-h.pt.min)/2,0>f&&(c+=f));for(e=0;e<a.length;++e)a[e].x+=b,a[e].y+=c,d.push(a[e])}}var c=Math.PI/2;null===c&&(c=Math.PI/2);var d=[];for(f in a)if(a.hasOwnProperty(f)){var e=a[f];d.push({x:e.x,y:e.y,Cb:e.Cb,N5:f})}var f=qga(d);
for(a=0;a<f.length;++a)pga(f[a],c),e=zT(f[a]),f[a].size=(e.Qq.max-e.Qq.min)*(e.pt.max-e.pt.min),f[a].Va=e;f.sort(function(a,b){return b.size-a.size});d=f[0];var h=d.Va,k=(h.Qq.max-h.Qq.min)/50;for(c=1;c<f.length;)b(f[c],!0,!1),b(f[c+1],!1,!0),b(f[c+2],!0,!0),c+=3,h=zT(d);c={};for(a=0;a<d.length;++a)c[d[a].N5]=d[a];return c},AT=function(a,b,c){var d=b[0].Cb-uT(b[0],a),e;for(e=1;e<b.length;++e){var f=b[e].Cb-uT(b[e],a);f<=d&&(d=f)}for(e=0;e<c.length;++e)f=uT(c[e],a)-c[e].Cb,f<=d&&(d=f);return d},sga=
function(a,b){var c=[],d;for(d=0;d<a.length;++d){var e=a[d];c.push({x:e.x,y:e.y});c.push({x:e.x+e.Cb/2,y:e.y});c.push({x:e.x-e.Cb/2,y:e.y});c.push({x:e.x,y:e.y+e.Cb/2});c.push({x:e.x,y:e.y-e.Cb/2})}e=c[0];var f=AT(c[0],a,b);for(d=1;d<c.length;++d){var h=AT(c[d],a,b);h>=f&&(e=c[d],f=h)}d=dga(function(c){return-1*AT({x:c[0],y:c[1]},a,b)},[e.x,e.y],{pI:500,P3:1E-10}).x;c={x:d[0],y:d[1]};e=!0;for(d=0;d<a.length;++d)if(uT(c,a[d])>a[d].Cb){e=!1;break}for(d=0;d<b.length;++d)if(uT(c,b[d])<b[d].Cb){e=!1;break}e||
(1==a.length?c={x:a[0].x,y:a[0].y}:(d={},wT(a,d),0===d.oC.length?c={x:0,y:-1E3,Xda:!0}:1==d.oC.length?c={x:d.oC[0].pn.x,y:d.oC[0].pn.y}:c=b.length?sga(a,[]):fga((0,$.Wa)(d.oC,function(a){return a.di}))));return c},BT=function(a,b){function c(a){a.I(4294967295)}$.Ex.call(this);this.Fa("venn");this.rd=null;this.data(a||null,b);this.b=[];this.Ea=this.fm=null;this.i={};this.j=this.D=null;this.state=new $.kx(this);this.f=null;$.uu(this,this,this.Cf,this.gg,null,this.Cf,null,this.Tj);var d={};$.Q(d,[["fill",
16896,1],["hatchFill",16896,1],["stroke",16896,1],["labels",0,0],["markers",0,0]]);this.ca=new $.oy(this,d,$.hm);this.ca.Fa(this.na);$.W(this,"normal",this.ca);this.ca.sa("labelsAfterInitCallback",$.uy);this.ca.sa("markersAfterInitCallback",$.vy);d={};$.Q(d,[["fill",16384,1],["hatchFill",16384,1],["stroke",16384,1],["labels",0,0],["markers",0,0]]);this.ya=new $.oy(this,d,$.Ao);$.W(this,"hovered",this.ya);this.Da=new $.oy(this,d,$.Bo);$.W(this,"selected",this.Da);this.ya.sa("markersAfterInitCallback",
c);this.Da.sa("markersAfterInitCallback",c);this.ca.sa("labelsFactoryConstructor",$.py);this.ya.sa("labelsFactoryConstructor",$.qy);this.Da.sa("labelsFactoryConstructor",$.qy);this.ca.sa("markersFactoryConstructor",$.sy);this.ya.sa("markersFactoryConstructor",$.ty);this.Da.sa("markersFactoryConstructor",$.ty);$.Q(this.ta,[["dataSeparator",4096,1]])},CT=function(a,b){if(!b||b.target!=a.$f()){var c=a.$().o("tooltip");c.Ic(!0);var d=a.Fc();b&&$.Qw(c,b.clientX,b.clientY,d)}},DT=function(a){if(a.J(16384))for(var b=
a.Ac(),c=0;c<a.b.length;c++){var d=a.b[c];b.select(d.JD);d=d.ii;var e=!1,f=a.Sa(),h=$.dm("fill",1,!1);if(1==d.length){var k=a.ac().mc(c);b.o("paletteFill",k);var l=d[0];a.i[l].fta=k;a.i[l].e5=h(a,$.hm,!0)}else{e=[];f={};for(h=0;h<d.length;h++)l=d[h],k=a.i[l],e.push(k.e5),f[l]=k.e5;b.o("parentColors",e);b.o("parentColorsMap",f);e=!0;f=a.hu().Sa()}d=b.get("normal");d=$.dp($.n(d)?d.hatchFill:void 0,b.get("hatchFill"),a.ue().mc(c));b.o("hatchFillPaletteFill",d);b.o("isIntersection",e);b.o("paletteMarkerType",
a.Hf().mc(c));b.o("tooltip",f)}},tga=function(a){if(a.length){for(var b,c=0;c<a.length;c++){var d=$.Xb(a[c]);b=b?$.Ll(b,d):d}return b||"black"}return"black"},ET=function(a,b,c){b=b.oC;if(b.length)if(1==b.length)b=b[0].pn,a.moveTo(b.x+b.Cb+c.left,b.y+c.top).arcTo(b.Cb,b.Cb,0,360);else if(1<b.length){a.moveTo(b[0].dl.x+c.left,b[0].dl.y+c.top);for(var d=0;d<b.length;++d){var e=b[d];a.Af(e.di.x+c.left,e.di.y+c.top,e.pn.Cb,e.pn.Cb,e.width>e.pn.Cb,!0)}a.close()}},uga=function(a,b,c){var d=c.o("marker");
if(d&&!c.o("isMissing")){var e=!!c.o("isIntersection"),f=e?a.hu():a,h=a.Pa().Eb();b=$.fm(b);var k=!!(b&$.Ao);b=!!(b&$.Bo);var l=c.get("normal");l=$.n(l)?l.marker:void 0;var m=c.get("hovered");m=$.n(m)?m.marker:void 0;var p=c.get("selected");p=$.n(p)?p.marker:void 0;var q=$.dp(l,c.get("marker"),{});m=$.dp(m,c.get("hoverMarker"));l=$.dp(p,c.get("selectMarker"));b?$.Uc(q,l||{}):k&&$.Uc(q,m||{});p=q;m=b?l:k?m:q;f=b?f.selected().Eb():k?f.kb().Eb():f.Pa().Eb();l=b?a.selected().Eb():k?a.kb().Eb():a.Pa().Eb();
q=m&&$.n(m.enabled)?m.enabled:null;var r=f.enabled(),t=!1;null===q?null===r?t=h.enabled():t=r:t=q;t?(h=a.Pa().Eb().F(),k=b?a.selected().Eb().F():k?a.kb().Eb().F():{},a=e?a.hu().Pa().Eb().F():{},b=e?f.F():{},$.Uc(h,k,a,b,p),q=h,$.n(q.type)||(q.type=f.La()||l.La()||c.o("paletteMarkerType")),$.n(q.fill)||(a=c.o("paletteFill"),e&&(c=c.o("parentColors"),a=tga(c),a.opacity=1),q.fill=f.Rm()||l.Rm()||a),d.Fi(),d.enabled(!0),$.iy(d,f),d.sd(q,m)):($.iy(d,f),d.enabled(!1));d.W()}},vga=function(a,b){return new BT(a,
b)};$.H(qT,$.U);$.Kq(qT,["fill","stroke","hatchFill","labels","markers"],"normal");$.g=qT.prototype;$.g.pa=$.U.prototype.pa|274496;$.g.Pa=function(a){return $.n(a)?(this.ca.N(a),this):this.ca};$.g.kb=function(a){return $.n(a)?(this.ya.N(a),this):this.ya};$.g.selected=function(a){return $.n(a)?(this.Da.N(a),this):this.Da};$.g.ae=function(){this.va(4096)};$.g.nI=function(){this.Pa().labels().I(4294967295);this.kb().labels().I(4294967295);this.selected().labels().I(4294967295)};$.g.Kn=function(){this.va(262144)};
$.g.Sa=function(a){if(!this.fb){this.fb=new $.yw(0);var b=this.oa.Sa();$.W(this,"tooltip",this.fb);this.fb.parent(b);this.fb.xa(this.oa)}return $.n(a)?(this.fb.N(a),this):this.fb};$.g.Hg=function(){$.W(this,"normal",this.ca);$.W(this,"hovered",this.ya);$.W(this,"selected",this.Da)};$.g.F=function(){var a=qT.u.F.call(this);a.normal=this.ca.F();a.hovered=this.ya.F();a.selected=this.Da.F();a.tooltip=this.Sa().F();return a};
$.g.U=function(a,b){qT.u.U.call(this,a,b);this.ca.fa(!!b,a);this.ca.fa(!!b,a.normal);this.ya.fa(!!b,a.hovered);this.Da.fa(!!b,a.selected);this.Sa().fa(!!b,a.tooltip)};$.g.R=function(){$.ud(this.ca,this.ya,this.Da,this.fb);qT.u.R.call(this);this.fb=this.Da=this.ya=this.ca=null};var FT=qT.prototype;FT.normal=FT.Pa;FT.hovered=FT.kb;FT.selected=FT.selected;FT.tooltip=FT.Sa;$.H(BT,$.Ex);$.Kq(BT,["fill","stroke","hatchFill","labels","markers"],"normal");$.g=BT.prototype;$.g.pa=$.Ex.prototype.pa;$.g.ra=$.Ex.prototype.ra|61440;$.g.Pa=function(a){return $.n(a)?(this.ca.N(a),this):this.ca};$.g.kb=function(a){return $.n(a)?(this.ya.N(a),this):this.ya};$.g.selected=function(a){return $.n(a)?(this.Da.N(a),this):this.Da};$.g.La=function(){return"venn"};$.g.Te=function(){return[this]};$.g.yk=function(){return!1};$.g.ht=function(){return!0};
$.g.ll=function(a){var b=this.$();this.fm.Fm(a,b.o("shapes"))};var GT={};$.vq(GT,0,"dataSeparator",$.Dq);$.S(BT,GT);$.g=BT.prototype;$.g.eh=function(){return!0};$.g.$=function(){return this.rd||(this.rd=this.ka.$())};
$.g.qc=function(a,b,c,d,e,f,h){f=this.$().o("isIntersection")?this.hu():this;e=0==b?this.ca:1==b?this.ya:this.Da;f=0==b?f.Pa():1==b?f.kb():f.selected();if(h)return e.g(a);h=c.get(0==b?"normal":1==b?"hovered":"selected");a=$.dp($.n(h)?h[a]:void 0,c.get($.im(b,a)),f.md(a),e.md(a),f.uf(a),e.uf(a));$.n(a)&&(a=d(a));return a};$.g.Ah=function(){return this.$().o("hatchFillPaletteFill")||$.ac("diagonal-brick")};$.g.Wi=function(){var a=this.$(),b=this.Ah();return{index:a.la(),sourceHatchFill:b,iterator:a}};
$.g.He=function(a){var b=this.$();a=a||b.o("paletteFill")||this.g("color")||"blue";a={index:b.la(),sourceColor:a,iterator:b};b.o("isIntersection")&&(a.parentColors=b.o("parentColors"),a.parentColorsMap=b.o("parentColorsMap"));return a};$.g.ac=function(a){if($.J(a,$.Ps))return this.Ec($.Ps,a),this;if($.J(a,$.Ms))return this.Ec($.Ms,a),this;$.C(a)&&"range"==a.type?this.Ec($.Ps):($.C(a)||null==this.Ea)&&this.Ec($.Ms);return $.n(a)?(this.Ea.N(a),this):this.Ea};
$.g.Ec=function(a,b){if($.J(this.Ea,a))b&&this.Ea.N(b);else{var c=!!this.Ea;$.pd(this.Ea);this.Ea=new a;$.W(this,"palette",this.Ea);b&&this.Ea.N(b);$.L(this.Ea,this.Jf,this);c&&this.B(528,1)}};$.g.ue=function(a){this.ed||(this.ed=new $.Ns,$.W(this,"hatchFillPalette",this.ed),$.L(this.ed,this.Jf,this));return $.n(a)?(this.ed.N(a),this):this.ed};$.g.Hf=function(a){this.Ie||(this.Ie=new $.Os,$.W(this,"markerPalette",this.Ie),$.L(this.Ie,this.Jf,this));return $.n(a)?(this.Ie.N(a),this):this.Ie};
$.g.Jf=function(a){$.X(a,2)&&this.B(528,1)};$.g.ae=function(a){$.X(a,1)&&this.B(8192,1)};$.g.Kn=function(a){$.X(a,1)&&this.B(33280,65)};
$.g.Kl=function(a,b){var c=[];if(this.zj())return c;this.nb();DT(this);for(var d=this.$().reset(),e;d.advance();)if(!d.o("isMissing")){e=d.la();var f=d.get("legendItem")||{},h=null;$.E(b)&&(h=this.Fc(),h.b=this.$d(e),h=b.call(h,h));$.z(h)||(h=String($.n(d.get("name"))?d.get("name"):d.get("x")));var k=$.dm("fill",1,!1),l=$.dm("stroke",2,!1),m=$.dm("hatchFill",3,!1);if(d.o("isIntersection")){var p=d.o("parentColors");p=tga(p)}h={enabled:!0,meta:{pointIndex:e,pointValue:d.get("value"),series:this},iconType:this.Pa().Eb().enabled()?
d.o("paletteMarkerType"):"square",text:h,iconStroke:d.get("stroke")||l(this,$.hm,!0),iconFill:d.get("fill")||p||k(this,$.hm,!0),iconHatchFill:d.get("hatchFill")||m(this,$.hm,!0)};$.Uc(h,f);h.sourceUid=$.oa(this);h.sourceKey=e;c.push(h)}return c};$.g.Js=function(){return!0};$.g.wr=function(a,b){var c=a.Ii();if(!a||null!=c||(0,window.isNaN)(c))if(c=$.xo(b.domTarget))c.X=this};$.g.uq=function(a,b){var c=a.Ii();if(!a||null!=c||(0,window.isNaN)(c))if(c=$.xo(b.domTarget))c.X=this};
$.g.tq=function(a,b){var c=a.Ii();if(!a||null!=c||(0,window.isNaN)(c))if(c=$.xo(b.domTarget))c.X=this};$.g.data=function(a,b){if($.n(a)){if(a){var c=a.title||a.caption;c&&this.title(c);a.rows&&(a=a.rows)}this.Rf!==a&&(this.Rf=a,$.pd(this.Xc),$.J(a,$.Gr)?this.ka=this.Xc=a.Si():$.J(a,$.Qr)?this.ka=this.Xc=a.Wd():this.ka=(this.Xc=new $.Qr($.A(a)||$.z(a)?a:null,b)).Wd(),$.L(this.ka,this.cd,this),this.B(4356,1));return this}return this.ka};$.g.cd=function(){this.B(4352,1)};
$.g.Ac=function(){return this.rd=this.ka.$()};$.g.Rda=function(a,b){return a.ii.length-b.ii.length};$.g.hu=function(a){this.f||(this.f=new qT(this),this.f.Hg(),$.L(this.f,this.Gga,this));return $.n(a)?(this.f.N(a),this):this.f};$.g.Gga=function(a){var b=0;$.X(a,4096)&&(b|=8192);$.X(a,262144)&&(b|=32768);$.X(a,8192)&&(b|=16384);$.X(a,64)&&(b|=512);this.B(b,1)};$.g.hg=function(a){a=$.Y.prototype.hg.call(this,a);var b=$.xo(a.domTarget);a.pointIndex=$.N(b.index);return a};
$.g.Tg=function(a){var b;"pointIndex"in a?b=a.pointIndex:"labelIndex"in a?b=a.labelIndex:"markerIndex"in a&&(b=a.markerIndex);b=$.N(b);a.pointIndex=b;var c=a.type;switch(c){case "mouseout":c="pointmouseout";break;case "mouseover":c="pointmouseover";break;case "mousemove":c="pointmousemove";break;case "mousedown":c="pointmousedown";break;case "mouseup":c="pointmouseup";break;case "click":c="pointclick";break;case "dblclick":c="pointdblclick";break;default:return null}var d=this.data().$();d.select(b)||
d.reset();return{type:c,actualTarget:a.target,iterator:d,sliceIndex:b,pointIndex:b,target:this,originalEvent:a,point:this.$d(b)}};$.g.$d=function(a){return new $.JA(this,a)};$.g.Zi=function(a,b){if(!this.enabled())return this;if($.A(a)){for(var c=$.ux(this.state,$.Ao),d=0;d<c.length;d++)$.Aa(a,c[d])||this.state.Sh($.Ao,c[d]);$.sx(this.state,a);$.n(b)&&CT(this,b)}else $.ea(a)&&(this.Kd(),$.sx(this.state,a),$.n(b)&&CT(this,b));return this};$.g.Xk=function(){this.enabled()&&this.state.Hh($.Ao)};
$.g.Uj=function(a){$.n(a)?this.Zi(a):this.Xk();return this};$.g.Kd=function(a){var b;(b=$.ox(this.state,$.Ao))||(b=!!(this.state.ek()&$.Ao));if(b&&this.enabled()){var c;$.n(a)?c=a:c=this.state.Dc==$.hm?window.NaN:void 0;this.state.Sh($.Ao,c)}};$.g.mk=function(a,b){var c=this.$();this.fm.Fm(a,c.o("shapes"));this.je(a,c);uga(this,a,c);return b};$.g.sm=$.ia;$.g.nq=$.ia;$.g.Tl=function(a){return this.Yc().hoverMode(a)};$.g.fj=function(a){return this.Yc().selectionMode(a)};
$.g.Gi=function(a,b){var c=!(b&&b.shiftKey);$.A(a)?(b||this.he(),this.state.Hh($.Bo,a,c?$.Ao:void 0)):$.ea(a)&&this.state.Hh($.Bo,a,c?$.Ao:void 0);CT(this,b);return this};$.g.Eu=function(){this.enabled()&&this.state.Hh($.Bo)};$.g.select=function(a){if(!this.enabled())return this;$.n(a)?this.Gi(a):this.Eu();return this};$.g.he=function(a){if(this.enabled()){var b;$.n(a)?b=a:b=this.state.Dc==$.hm?window.NaN:void 0;this.state.Sh($.Bo,b)}};$.g.pr=function(a){return $.px(this.state,a)};
$.g.Fc=function(a){var b=this.$();if(!this.ke||a)this.ke=new $.Hw;this.ke.kg(b).Ji([this.$d(b.la()),this]);var c=b.la();a=0;for(var d=$.ux(this.state,$.Bo),e=0;e<d.length;e++)b.select(d[e]),a+=b.get("value");b.select(c);c=b.get("x");d=$.n(b.get("name"))?b.get("name"):c;b={x:{value:c,type:"string"},value:{value:b.get("value"),type:"number"},index:{value:b.la(),type:"number"},chart:{value:this,type:""},name:{value:d,type:"string"},isIntersection:{value:!!b.o("isIntersection"),type:"string"},selectedPointsSum:{value:a,
type:"number"}};return $.rv(this.ke,b)};$.g.IJ=function(a){this.$().o("tooltip").NP(a.clientX,a.clientY)};
$.g.nb=function(){if(this.J(4096)&&!this.zj()){this.B(16384);for(var a=this.Ac(),b={},c=[],d,e;a.advance();)if(d=a.get("x"),e=a.la(),$.A(d))1==d.length&&(b[String(d[0])]=d),c[e]=d;else{d=String(d);var f=this.g("dataSeparator");f=d.split(f);1==f.length&&(b[d]=d);c[e]=f}for(e=0;e<c.length;e++)if((d=c[e])&&1<d.length)for(f=0;f<d.length;f++)if(!(d[f]in b)){a.select(e);a.o("isMissing",!0);break}this.b.length=0;this.i={};this.j=null;a=this.Ac();for(b=this.g("dataSeparator");a.advance();)a.o("isMissing")||
(c=a.get("x"),e=Number(a.get("value")),d=a.la(),e={size:e,JD:d},$.A(c)?(e.ii=c,1==c.length&&(this.i[c.join(b)]=e)):(c=String(c),d=c.split(b),e.ii=d,1==d.length&&(this.i[c]=e)),this.b.push(e));$.Ra(this.b,this.Rda);DT(this);a=lga(this.b);this.j=rga(a);this.I(4096)}};
$.g.Oh=function(a){this.nb();var b;this.fm||(this.fm=new $.aB(this,[$.tH,$.uH,$.wH],!0),$.WA(this.fm,this.Ma));if(0<a.width&&0<a.height){if(this.J(4)){this.fm.sv();var c=this.j;var d=a.width,e=a.height;var f=[];var h=[];for(var k in c)c.hasOwnProperty(k)&&(h.push(k),f.push(c[k]));k=zT(f);c=k.Qq;k=k.pt;var l=Math.min(e/(k.max-k.min),d/(c.max-c.min));d=(d-(c.max-c.min)*l)/2;var m=(e-(k.max-k.min)*l)/2;e={};for(var p=0;p<f.length;++p){var q=f[p];e[h[p]]={Cb:l*q.Cb,x:d+(q.x-c.min)*l,y:m+(q.y-k.min)*l}}f=
this.b;h=[];c={};k=[];for(var r in e)k.push(r),c[r]=[];for(r=0;r<k.length;r++)for(l=e[k[r]],d=r+1;d<k.length;++d)m=e[k[d]],p=uT(l,m),p+m.Cb<=l.Cb+1E-10?c[k[d]].push(k[r]):p+l.Cb<=m.Cb+1E-10&&c[k[r]].push(k[d]);for(r=0;r<f.length;++r){k=f[r].ii;d={};m={};l=f[r].JD;for(p=0;p<k.length;++p){d[k[p]]=!0;q=c[k[p]];for(var t=0;t<q.length;++t)m[q[t]]=!0}p=[];q=[];for(b in e)b in d?p.push(e[b]):b in m||q.push(e[b]);d=sga(p,q);h[l]=d;d.Xda&&0<f[r].size&&$.kl(22,null,[String(k)])}this.D=h;for(b=0;b<this.b.length;b++){c=
this.b[b];f=c.JD;h=this.$();h.select(f);c=c.ii;h=[];if(1==c.length)r=c[0],h.push(e[r]);else for(k=0;k<c.length;k++)r=c[k],h.push(e[r]);c={};wT(h,c);f=this.fm.dd(this.pr(f));h=f.hatchFill;r=f.stroke;ET(f.fill,c,a);ET(h,c,a);ET(r,c,a)}this.B(40960);this.I(16384)}if(this.J(8192)){e=this.Pa().labels();e.clear();e.O(this.Ma);for(b=0;b<this.b.length;b++)c=this.b[b],f=c.JD,h=this.$(),h.select(f),c=this.D[f],r=this.Fc(!0),c={value:{x:a.left+c.x,y:a.top+c.y}},c=e.add(r,c,f),h.o("label",c),this.je($.px(this.state,
f),h);e.W();this.hu().nI();this.I(8192)}if(this.J(32768)){e=this.Pa().Eb();$.V(e);e.O(this.Ma);e.clear();for(b=0;b<this.b.length;b++)c=this.b[b],f=c.JD,h=this.$(),h.select(f),c=this.D[f],c={value:{x:a.left+c.x+.5,y:a.top+c.y+.5}},c=e.add(c,f),h.o("marker",c),uga(this,$.px(this.state,f),h);e.da(!1);e.W();a=this.hu();a.Pa().Eb().I(4294967295);a.kb().Eb().I(4294967295);a.selected().Eb().I(4294967295);this.I(32768)}if(this.J(16384)){DT(this);for(h=this.Ac();h.advance();)this.fm.Fm(this.pr(h.la()),h.o("shapes"));
this.I(16384)}}};
$.g.je=function(a,b){var c=b.o("label");if(c&&!b.o("isMissing")){var d=b.o("isIntersection")?this.hu():this;a=$.fm(a);var e=!!(a&$.Ao),f=!!(a&$.Bo),h=b.get("normal");h=$.n(h)?h.label:void 0;var k=b.get("hovered");k=$.n(k)?k.label:void 0;var l=b.get("selected");l=$.n(l)?l.label:void 0;h=$.dp(h,b.get("label"),null);k=$.dp(k,b.get("hoverLabel"),null);l=$.dp(l,b.get("selectLabel"),null);l=f?l:e?k:null;k=f?d.selected().labels():e?d.kb().labels():null;var m=d.Pa().labels(),p=f?this.selected().labels():e?
this.kb().labels():null,q=this.Pa().labels(),r=f?d.selected().labels().na:e?d.kb().labels().na:null;d=d.Pa().labels().na;e=f?this.selected().labels().na:e?this.kb().labels().na:null;f=this.Pa().labels().na;var t=l&&$.n(l.enabled)?l.enabled:null,u=h&&$.n(h.enabled)?h.enabled:null,v=k&&null!==k.enabled()?k.enabled():null,w=m&&null!==m.enabled()?m.enabled():null,x=p?p.enabled():null,y=q.enabled(),B=!1;null===t?null===u?null===v?null===w?null===x?B=y:B=x:B=w:B=v:B=u:B=t;B?(c.Fi(),c.enabled(!0),c.state("labelOwnSettings",
c.Oa,0),c.state("pointState",l,1),c.state("pointNormal",h,2),c.state("intersectionsState",k,3),c.state("intersectionsNormal",m,4),c.state("chartState",p,5),c.state("chartNormal",q,6),c.state("intersectionsStateTheme",r,7),c.state("chartStateTheme",e,8),c.state("auto",c.Ld,9),c.state("intersectionsNormalTheme",d||null,10),c.state("chartNormalTheme",f||null,11)):c.enabled(!1);c.W()}};$.g.dD=function(){return["x"]};$.g.eD=function(a){return a.get("x")};
$.g.cD=function(a){a=a.get("name");return $.z(a)?a:null};$.g.zj=function(){return!this.$().Jb()};$.g.F=function(){var a=BT.u.F.call(this);$.Xq(this,GT,a,"Venn");a.data=this.data().F();a.normal=this.Pa().F();a.hovered=this.kb().F();a.selected=this.selected().F();a.palette=this.ac().F();a.hatchFillPalette=this.ue().F();a.markerPalette=this.Hf().F();a.intersections=this.hu().F();return{chart:a}};
$.g.U=function(a,b){BT.u.U.call(this,a,b);$.Pq(this,GT,a,b);this.data(a.data);this.ca.fa(!!b,a);this.ca.fa(!!b,a.normal);this.ya.fa(!!b,a.hovered);this.Da.fa(!!b,a.selected);this.ac().fa(!!b,a.palette);this.Hf().fa(!!b,a.markerPalette);this.ue().fa(!!b,a.hatchFillPalette);this.hu().fa(!!b,a.intersections)};
$.g.R=function(){$.ud(this.ca,this.ya,this.Da,this.Ea,this.ed,this.Ie,this.fm,this.f,this.Xc,this.ka);this.Xc=this.f=this.fm=this.Ie=this.ed=this.Ea=this.Da=this.ya=this.ca=null;delete this.ka;this.rd=null;BT.u.R.call(this)};var HT=BT.prototype;HT.data=HT.data;HT.getType=HT.La;HT.intersections=HT.hu;HT.normal=HT.Pa;HT.hovered=HT.kb;HT.selected=HT.selected;HT.palette=HT.ac;HT.hatchFillPalette=HT.ue;HT.markerPalette=HT.Hf;HT.hover=HT.Uj;HT.unhover=HT.Kd;HT.select=HT.select;HT.unselect=HT.he;$.Xp.venn=vga;$.F("anychart.venn",vga);}).call(this,$)}