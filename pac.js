function FindProxyForURL(url, host) { 
  
    if (host == "www.roblox.com") {
       var p = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);

       if (p[5] === "/my/avatar") {
            return "PROXY 127.0.0.7:1337";
        };
    };
   return "DIRECT";
}
