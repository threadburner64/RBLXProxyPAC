function FindProxyForURL(url, host) { 
    if (host == "www.roblox.com") {
       var match = url.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
       if (match[5] == "/my/avatar") {
            return "PROXY 127.0.0.7:1337";
        };
    };
   return "DIRECT";
}
