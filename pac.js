
function URLPath(href) {
    var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return match && {

        pathname: match[5],

    }
}


function FindProxyForURL(url, host) { 

    if (host == "www.roblox.com") {
       var UrlPath = URLPath(url)


       if (UrlPath.pathname == "/my/avatar") {return "PROXY 127.0.0.7:1337" }
    };
   return "DIRECT";
}
