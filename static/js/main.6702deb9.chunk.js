(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(59)},43:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),l=a.n(s),i=(a(38),a(39),a(40),a(43),a(13)),c=a(14),m=a(16),o=a(15),d=a(17),u=a(6),h=a(60),p=a(61),E=a(62),g=a(63),f=a(64),w=a(65),b=a(72),y=a(66),v=a(9),x="3bd16f97558395ca4a0e1ae091554a77",k="https://api.openweathermap.org/data/2.5/",N="https://bharathkumar281.github.io/weather-app",j={"01d":N+"/assets/images/clearSky.svg","01n":N+"/assets/images/clearSkyNight.svg","02d":N+"/assets/images/fewClouds.svg","02n":N+"/assets/images/fewCloudsNight.svg","03d":N+"/assets/images/scatteredClouds.svg","03n":N+"/assets/images/scatteredClouds.svg","04d":N+"/assets/images/brokenClouds.svg","04n":N+"/assets/images/brokenClouds.svg","09d":N+"/assets/images/showerRain.svg","09n":N+"/assets/images/showerRain.svg","10d":N+"/assets/images/rain.svg","10n":N+"/assets/images/rainNight.svg","11d":N+"/assets/images/thunderstorm.svg","11n":N+"/assets/images/thunderstorm.svg","13d":N+"/assets/images/snow.svg","13n":N+"/assets/images/snow.svg","50d":N+"/assets/images/mist.svg","50n":N+"/assets/images/mist.svg",humidity:N+"/assets/images/humidity.svg",pressure:N+"/assets/images/pressure.svg",wind:N+"/assets/images/wind.svg",temperature:N+"/assets/images/thermometer.svg"},F=function(){return r.a.createElement(v.Fade,{in:!0},r.a.createElement(h.a,{fluid:!0},r.a.createElement(p.a,{className:"justify-content-center text-center"},r.a.createElement(E.a,{xs:12,md:8,lg:6},r.a.createElement(v.Stagger,{in:!0},r.a.createElement(v.Fade,null,r.a.createElement(g.a,{onSubmit:function(e){return function(e){window.location="weather-app/#/weather/"+document.getElementById("city").value,e.preventDefault()}(e)}},r.a.createElement(f.a,{size:"lg"},r.a.createElement(w.a,{placeholder:"Enter Location",id:"city"}),r.a.createElement(b.a,{addonType:"append"},r.a.createElement(y.a,{type:"submit"}," Go "))))),r.a.createElement(v.Fade,null,r.a.createElement("hr",null)," ",r.a.createElement("h5",null,"or")," ",r.a.createElement("hr",null)),r.a.createElement(v.Fade,null,r.a.createElement(y.a,{onClick:function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){console.log(e),window.location="weather-app/#/"+"weather/".concat(e.coords.latitude,"/").concat(e.coords.longitude)},function(e){return alert(e.message)})},block:!0,size:"lg"},"Use Current Location")))))))},C=a(12),O=a(67),S=a(68),W=a(69),D=a(70),A=a(71),I=a(18),P=a(31),T=a.n(P),_=function(e){var t="chart"+e.index;return Object(n.useEffect)(function(){var a=document.getElementById(t);new T.a(a,{type:"line",data:{labels:e.labels,datasets:[{data:e.data,backgroundColor:"rgba(186, 0, 105, 0.2)",borderColor:"rgba(186, 0, 105, 1)",borderWidth:3,label:"weather in "+e.units}]},options:{scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"rgba(186, 0, 105, 1)",fontStyle:"bold",fontSize:12},gridLines:{color:"rgba(186, 0, 105, 0.2)",linewidth:1}}],xAxes:[{gridLines:{color:"rgba(255, 255, 255, 0)",linewidth:1},ticks:{beginAtZero:!0,fontColor:"rgba(186, 0, 105, 1)",fontSize:12,fontStyle:"bold"}}]},legend:{labels:{fontColor:"rgba(186, 0, 105, 1)",fontStyle:"bold"}},elements:{line:{tension:0}}}})}),r.a.createElement("canvas",{id:t})},z=function(e){var t=e.index,a=function(t){return t.reduce(function(e,t){return e+t},0)/e.data.temp.length},n=a(e.data.temp),s=a(e.data.humidity),l=a(e.data.pressure),i=a(e.data.wind);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"heading"+t},r.a.createElement("a",{className:"d-block header-link","data-toggle":"collapse",href:"#collapse"+t,"aria-expanded":"false","aria-controls":"collapse"+t},r.a.createElement(h.a,{fluid:!0},r.a.createElement(v.Fade,{in:!0},r.a.createElement(O.a,{className:"shadow mt-2"},r.a.createElement(S.a,null,r.a.createElement(p.a,{className:"align-items-center"},r.a.createElement(E.a,{sm:3,lg:2,xl:1,className:"d-none d-sm-block"},r.a.createElement("img",{src:j.temperature,alt:"temperature",className:"img-fluid"})),r.a.createElement(E.a,{xs:12,sm:9},r.a.createElement("h3",null,n.toFixed(2)," ",e.units),r.a.createElement("h6",null,e.date_txt))))))))),r.a.createElement("div",{id:"collapse"+t,className:"collapse ","aria-labelledby":"heading"+t,"data-parent":"#accordion"},r.a.createElement(h.a,{fluid:!0},r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:12,lg:6},r.a.createElement(O.a,{className:"shadow mt-2 h-100"},r.a.createElement(S.a,{className:"row align-items-center"},r.a.createElement(_,{index:t,data:e.data.temp,labels:e.data.times,units:e.units})))),r.a.createElement(E.a,{xs:12,lg:6,className:"mt-3 mt-lg-0 d-none d-md-block"},r.a.createElement(p.a,null,e.data.descriptions.map(function(t,a){return r.a.createElement(E.a,{xs:12,md:6,key:a}," ",e.renderData(j[e.data.icons[a]],t,e.data.times[a],"")," ")})))),r.a.createElement(p.a,{className:"mt-3 mb-3"},r.a.createElement(E.a,{xs:12,sm:6,md:4}," ",e.renderData(j.humidity,"Humidity",s.toFixed(2),"%")),r.a.createElement(E.a,{xs:12,sm:6,md:4}," ",e.renderData(j.pressure,"Pressure",l.toFixed(2),"hPA")," "),r.a.createElement(E.a,{xs:12,sm:6,md:4}," ",e.renderData(j.wind,"Wind Speed",i.toFixed(2),"m/s")," ")))))},B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={forecast:null,weather:null,city:e.city,lat:e.lat,lon:e.lon},a.fetchWeather=a.fetchWeather.bind(Object(C.a)(Object(C.a)(a))),a.updateWeather=a.updateWeather.bind(Object(C.a)(Object(C.a)(a))),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.city?"q=".concat(this.state.city):"lat=".concat(this.state.lat,"&lon=").concat(this.state.lon);this.fetchWeather(e)}},{key:"fetchWeather",value:function(e){var t=this;fetch(k+"forecast?".concat(e,"&appid=").concat(x,"&units=metric")).then(function(e){if(e.ok)return e;throw new Error("city not found !")}).then(function(e){return e.json()}).then(function(a){fetch(k+"weather?".concat(e,"&appid=").concat(x,"&units=metric")).then(function(e){if(e.ok)return e;throw new Error("city not found !")}).then(function(e){return e.json()}).then(function(e){t.updateWeather(e,a)}).catch(function(e){throw e})}).catch(function(e){alert(e.message),window.location="weather-app/#/home"})}},{key:"updateWeather",value:function(e,t){var a={},n={month:"short",day:"2-digit",weekday:"short"},r={hour12:!0,hour:"numeric",minute:"numeric"};t.list.forEach(function(e){var t=new Intl.DateTimeFormat("en-US",n).format(new Date(e.dt_txt)),s=new Intl.DateTimeFormat("en-US",r).format(new Date(e.dt_txt));a[t]?(a[t].times.push(s),a[t].temp.push(e.main.temp),a[t].humidity.push(e.main.humidity),a[t].pressure.push(e.main.pressure),a[t].wind.push(e.wind.speed),a[t].descriptions.push(e.weather[0].description),a[t].icons.push(e.weather[0].icon)):a[t]={times:[s],temp:[e.main.temp],humidity:[e.main.humidity],pressure:[e.main.pressure],wind:[e.wind.speed],descriptions:[e.weather[0].description],icons:[e.weather[0].icon]}}),this.setState({forecast:a,city:t.city.name,weather:{humidity:e.main.humidity.toFixed(2),pressure:e.main.pressure.toFixed(2),wind:e.wind.speed.toFixed(2),temp:e.main.temp.toFixed(2),icon:e.weather[0].icon,description:e.weather[0].description}})}},{key:"render",value:function(){if(this.state.forecast){var e=[],t=0,a=String.fromCharCode(176)+"C",n=new Intl.DateTimeFormat("en-US",{hour12:!0,hour:"numeric",minute:"numeric"}).format(Date.now()),s=function(e,t,a,n){return r.a.createElement(O.a,{className:"shadow mt-2"},r.a.createElement(S.a,null,r.a.createElement(p.a,{className:"align-items-center"},r.a.createElement(E.a,{xs:4},r.a.createElement("img",{src:e,className:"w-100 img-fluid",alt:t})),r.a.createElement(E.a,{xs:8,className:"text-center"},r.a.createElement("h4",null,a," ",r.a.createElement("span",{className:"h6"},n)),r.a.createElement("p",null,t)))))};for(var l in this.state.forecast)0!==t&&e.push(r.a.createElement(z,{key:t,units:a,date_txt:l,data:this.state.forecast[l],index:t,renderData:s})),t++;return r.a.createElement(h.a,{fluid:!0},r.a.createElement(p.a,{className:"justify-content-center"},r.a.createElement(E.a,{xs:12,xl:11},r.a.createElement(v.Fade,{in:!0},r.a.createElement(h.a,{fluid:!0},r.a.createElement(W.a,{className:"shadow"},r.a.createElement(D.a,{active:!0},r.a.createElement(I.b,{to:"/home"},r.a.createElement("h4",null,"Home"))),r.a.createElement(D.a,null,r.a.createElement("h4",null,"Weather"))),r.a.createElement(O.a,{className:"shadow"},r.a.createElement(S.a,null,r.a.createElement(p.a,{className:"align-items-center"},r.a.createElement(E.a,{sm:3,lg:2,xl:1,className:"d-none d-sm-block"},r.a.createElement("img",{src:j.temperature,alt:"temperature",className:"img-fluid"})),r.a.createElement(E.a,{xs:12,sm:9},r.a.createElement("h1",null,this.state.city),r.a.createElement("h3",null,this.state.weather.temp+" "+a),r.a.createElement("h6",null,"Now"))))),r.a.createElement(p.a,null,r.a.createElement(E.a,{xs:12,sm:6,lg:3}," ",s(j[this.state.weather.icon],this.state.weather.description,n,"")," "),r.a.createElement(E.a,{xs:12,sm:6,lg:3}," ",s(j.humidity,"Humidty",this.state.weather.humidity,"%")," "),r.a.createElement(E.a,{xs:12,sm:6,lg:3}," ",s(j.pressure,"Pressure",this.state.weather.pressure,"hPA")," "),r.a.createElement(E.a,{xs:12,sm:6,lg:3}," ",s(j.wind,"Wind Speed",this.state.weather.wind,"m/s")," ")))),r.a.createElement("div",{id:"accordion"},e),r.a.createElement(h.a,{fluid:!0},r.a.createElement(O.a,{className:"shadow mt-3"},r.a.createElement(S.a,null,r.a.createElement("h5",null,"copyrights \xa9 2020"),r.a.createElement("p",null,"Icons made by",r.a.createElement("a",{target:"_blank",href:"https://www.flaticon.com/authors/freepik",title:"Freepik",rel:"noopener noreferrer"},"Freepik"),"from",r.a.createElement("a",{target:"_blank",href:"https://www.flaticon.com/",title:"Flaticon",rel:"noopener noreferrer"},"www.flaticon.com"))))))))}return r.a.createElement(h.a,null,r.a.createElement(A.a,{color:"primary"}))}}]),t}(n.Component),L=function(){return r.a.createElement(v.FadeTransform,{in:!0,transformProps:{enterTransform:"translateY(20px)"}},r.a.createElement("header",{className:"pt-5 pb-5"},r.a.createElement(h.a,{fluid:!0,className:"text-center"},r.a.createElement("h1",{className:"display-3"},"Mausam"),r.a.createElement("p",{className:"lead"},"your weather buddy..."))))},U=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mb-5"},r.a.createElement(L,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/home",component:F}),r.a.createElement(u.b,{exact:!0,path:"/weather/:latitude/:longitude",component:function(e){var t=e.match;return r.a.createElement(B,{lat:t.params.latitude,lon:t.params.longitude})}}),r.a.createElement(u.b,{path:"/weather/:city",component:function(e){var t=e.match;return r.a.createElement(B,{city:t.params.city})}}),r.a.createElement(u.a,{to:"/home"})))}}]),t}(n.Component),H=(a(58),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(I.a,{basename:"weather-app/#/"},r.a.createElement("div",{className:"App"},r.a.createElement(U,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,1,2]]]);
//# sourceMappingURL=main.6702deb9.chunk.js.map