!function(){function a(){for(var a=[],n=0;t>n;n++){var e=.7*Math.random(),o=e+(1-e)*Math.random(),i=new Pair(d.$multiply(e,Math.random())).connect(d.$multiply(o,Math.random()));i.moveBy(0,d.y*n),a.push(i)}return a}window.demoDescription="";var n={a1:"#ff2d5d",a2:"#42dc8e",a3:"#2e43eb",a4:"#ffe359",b1:"#96bfed",b2:"#f5ead6",b3:"#f1f3f7",b4:"#e2e6ef"},e=new CanvasSpace("demo",n.b4).display(),o=new Form(e.ctx),t=10,d=e.size.$divide(1,t),i=a(),r=a();e.add({animate:function(a,n,e){for(var t=0;t<i.length;t++){{r[t].$subtract(i[t]),r[t].p1.$subtract(i[t].p1)}o.line(i[t])}},onMouseAction:function(a,n,e,o){}}),e.bindMouse(),e.play()}();