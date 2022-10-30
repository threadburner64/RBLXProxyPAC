function FindProxyForURL(url, host) { 
    if (host == "roblox.com") {
        return "PROXY 4.5.6.7:8080; PROXY 7.8.9.10:8080"; 
    }
   return "DIRECT"
}
