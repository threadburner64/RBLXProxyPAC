function split_url(_url) {
  var url = _url.split( '//' );
  if (url[0] === "http:" || url[0] === "https:") {
    var protocol = url[0] + "//";
    var host = url[1].split( '/' )[0];
    url = protocol + host;
    var path = _url.split(url)[1];
    return {
      protocol: protocol,
      host: host,
      path: path
    };
  }
}
function FindProxyForURL(url, host) { 

    if (host == "www.roblox.com") {
       var match = split_url(url)

       return "PROXY 127.0.0.7:1337";
    };
   return "DIRECT";
}
