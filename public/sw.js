const mainCache = "v0.2";

const self = this;

const isImageOrFont = (req) => {
  const imageExtensions = [".png", ".jpg", ".svg", ".gif", ".ico"];
  const reqExtension = req.slice(req.length - 4, req.length).toLowerCase();
  const isImage = imageExtensions.includes(reqExtension);
  return isImage || req.toLowerCase().indexOf("fonts") >= 0;
};

self.addEventListener("install", (e) => {
  console.log("INSTALL");
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  console.log("ACTIVATE");
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  //   console.log("FROM CACHE");
  const fetcher = () =>
    caches.match(e.request).then((cacheRes) => {
      const fetchResp = fetch(e.request).then((fetchRes) => {
        if (isImageOrFont(e.request.url)) {
          caches
            .open(mainCache)
            .then((cache) => cache.put(e.request.url, fetchRes.clone()));
        }
        return fetchRes.clone();
      });
      return cacheRes || fetchResp;
    });
  e.respondWith(fetcher());
});
