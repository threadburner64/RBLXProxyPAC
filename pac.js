function FindProxyForURL(url, host) { 
    if (host == "www.roblox.com") {

       return "PROXY 127.0.0.7:1337";
    };
   return "DIRECT";
}
