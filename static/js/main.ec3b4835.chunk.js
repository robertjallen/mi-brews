(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,n){e.exports=n(353)},151:function(e,t,n){},153:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(39),i=n.n(o),s=(n(151),n(11)),c=n(12),l=n(17),u=n(15),m=n(16),d=(n(153),n(41)),p=n(145),h=n.n(p),f="https://maps.googleapis.com/maps/api/js?v=3.exp&key=".concat("AIzaSyCzmnNpxUWrJ23VyI57iji2JPRrYwKxx64"),v=Object(d.withScriptjs)(Object(d.withGoogleMap)(function(e){return r.a.createElement(d.GoogleMap,{defaultZoom:7,zoom:e.zoom,defaultCenter:{lat:30.397,lng:-97.644},center:e.center,tabIndex:-1},e.markers&&e.markers.filter(function(e){return e.isVisible}).map(function(t,n,a){var o=e.venues.find(function(e){return e.id===t.id});return r.a.createElement(d.Marker,{key:n,position:{lat:t.lat,lng:t.lng},onClick:function(){return e.handleMarkerClick(t)},animation:1===a.length||t.isOpen?google.maps.Animation.BOUNCE:google.maps.Animation.DROP},t.isOpen&&o.bestPhoto&&r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("img",{className:"info-image",src:"".concat(o.bestPhoto.prefix,"100x100").concat(o.bestPhoto.suffix),alt:o.name}),r.a.createElement("div",{className:"info-div"},r.a.createElement("p",{className:"info-name"},o.name),r.a.createElement("a",{"aria-labelledby":"more info",className:"info-url",href:o.shortUrl,target:"_blank",rel:"noopener noreferrer"},"More Info"))))))}))})),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(v,Object.assign({},this.props,{isMarkerShown:!0,googleMapURL:f,loadingElement:r.a.createElement("div",{className:"loading-element"}),containerElement:r.a.createElement("div",{className:"map-container"}),mapElement:r.a.createElement("div",{className:"map-element"})}))}}]),t}(a.Component),b="L0ZK3VLIPIYJBRFHR2D421ZUPVBOEBUPMR5PQFKWDMT1UQJA";console.log(b),console.log("HH1FKHUKXA4LNKNEGZ0PKSO3OJTJHOQS04ZWVKN3LRSB3ENG");var k=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"baseURL",value:function(){return"https://api.foursquare.com/v2"}},{key:"auth",value:function(){var e={client_id:b,client_secret:"HH1FKHUKXA4LNKNEGZ0PKSO3OJTJHOQS04ZWVKN3LRSB3ENG",v:"20180323"};return Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&")}},{key:"urlBuilder",value:function(e){return e?Object.keys(e).map(function(t){return"".concat(t,"=").concat(e[t])}).join("&"):""}},{key:"headers",value:function(){return{Accept:"application/json"}}},{key:"simpleFetch",value:function(t,n,a){var r={method:n,headers:e.headers()};return fetch("".concat(e.baseURL()).concat(t).concat(e.auth(),"&").concat(e.urlBuilder(a)),r).then(function(e){return e.json()}).catch(function(e){window.alert("ERROR! "+e)})}}]),e}(),O=function(){function e(){Object(s.a)(this,e)}return Object(c.a)(e,null,[{key:"search",value:function(e){return k.simpleFetch("/venues/search?","GET",e)}},{key:"getVenueDetails",value:function(e){return k.simpleFetch("/venues/".concat(e,"?"),"GET")}},{key:"getVenuePhotos",value:function(e){return k.simpleFetch("/venues/".concat(e,"/photos?"),"GET")}}]),e}(),j=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{className:"listItem","aria-labelledby":this.props.name,role:"contentinfo",tabIndex:0,onClick:function(){return e.props.handleListItemClick(e.props)}},r.a.createElement("img",{src:this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix,alt:"venue"}),r.a.createElement("div",{className:"details"},r.a.createElement("p",{className:"details-name"},this.props.name),r.a.createElement("p",{className:"details-address"},this.props.location.formattedAddress[0]),r.a.createElement("p",{className:"details-address"},this.props.location.formattedAddress[1])))}}]),t}(a.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("ul",{className:"venuList"},this.props.venues&&this.props.venues.map(function(t,n){return r.a.createElement(j,Object.assign({key:n},t,{handleListItemClick:e.props.handleListItemClick}))}))}}]),t}(a.Component),w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).handleFilterVenues=function(){if(""!==e.state.query.trim()){var t=e.props.venues.filter(function(t){return t.name.toLowerCase().includes(e.state.query.toLowerCase())+t.location.formattedAddress[1].toLowerCase().includes(e.state.query.toLowerCase())});return console.log(t),t}return e.props.venues},e.handleChange=function(t){e.setState({query:t.target.value});var n=e.props.venues.map(function(n){var a=n.name.toLowerCase().includes(t.target.value.toLowerCase()),r=n.location.formattedAddress[1].toLowerCase().includes(t.target.value.toLowerCase()),o=e.props.markers.find(function(e){return e.id===n.id});return o.isVisible=!(!a&&!r),o});e.props.updateSuperState({markers:n})},e.state={query:"",venues:[]},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("input",{type:"search",id:"search",placeholder:"Search",onChange:this.handleChange,"aria-labelledby":"search",tabIndex:0}),r.a.createElement(E,Object.assign({},this.props,{venues:this.handleFilterVenues(),handleListItemClick:this.props.handleListItemClick})))}}]),t}(a.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"screen"},r.a.createElement("h1",null,"MI Brews"),r.a.createElement("p",null,"Metro Detroit Brewers")))}}]),t}(a.Component),C="L0ZK3VLIPIYJBRFHR2D421ZUPVBOEBUPMR5PQFKWDMT1UQJA",N="HH1FKHUKXA4LNKNEGZ0PKSO3OJTJHOQS04ZWVKN3LRSB3ENG",L=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).closeAllMarkers=function(){var t=e.state.markers.map(function(e){return e.isOpen=!1,e});e.setState({markers:Object.assign(e.state.markers,t)})},e.handleMarkerClick=function(t){e.closeAllMarkers(),t.isOpen=!0,e.setState({markers:Object.assign(e.state.markers,t)});var n=e.state.venues.find(function(e){return e.id===t.id});O.getVenueDetails(t.id).then(function(t){var a=Object.assign(n,t.response.venue);e.setState({venues:Object.assign(e.state.venues,a)})})},e.handleListItemClick=function(t){var n=e.state.markers.find(function(e){return e.id===t.id});e.handleMarkerClick(n),console.log(t)},e.searchVenues=function(t){fetch("https://api.foursquare.com/v2/venues/search?"+new URLSearchParams({client_id:C,client_secret:N,v:t,near:"Brighton, MI",radius:5e5,query:"brewery",limit:5})).then(function(e){if(!e.ok)throw Error(e.statusText);return e.json()}).then(function(t){console.log(t.response.venues);var n=t.response.venues,a=t.response.geocode.feature.geometry.center,r=n.map(function(e){return{lat:e.location.lat,lng:e.location.lng,isOpen:!1,isVisible:!0,id:e.id}});e.setState({venues:n,center:a,markers:r})}).catch(function(e){window.alert("ERROR! "+e)})},e.state={venues:[],markers:[],center:[],zoom:7,updateSuperState:function(t){e.setState(t)}},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.gm_authFailure=function(){window.alert("google maps error")},this.searchVenues(20180323)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null),r.a.createElement("div",{className:"main"},r.a.createElement(w,Object.assign({},this.state,{handleListItemClick:this.handleListItemClick})),r.a.createElement(g,Object.assign({},this.state,{handleMarkerClick:this.handleMarkerClick}))))}}]),t}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available; please refresh."),t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(L,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/mi-brews",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/mi-brews","/service-worker.js");S?(function(e,t){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):I(t,e)})}}()}},[[146,2,1]]]);
//# sourceMappingURL=main.ec3b4835.chunk.js.map