let initialUrl =
  "jdbc:mysql://test_user:ouupppssss@localhost:3306/sakila?profileSQL=true";
let url = new URL(initialUrl);
let pathName = "";
if (
  !initialUrl.startsWith("http") &&
  !initialUrl.startsWith("https") &&
  initialUrl.includes("//")
) {
  const x = initialUrl.indexOf("//");
  pathName = initialUrl.substring(0, x - 1);
  const subUrl = initialUrl.substring(x, initialUrl.length);
  initialUrl = "http:" + subUrl;
  url = new URL(initialUrl);
} else {
  pathName = url.protocol;
}

//scheme://[username:password@]domain[:port]/path?query_string#fragment_id
if (pathName.length > 0) console.log("scheme: " + pathName);
if (url.username.length > 0) console.log("username: " + url.username);
if (url.password.length > 0) console.log("password: " + url.password);
if (url.hostname.length > 0) console.log("domain: " + url.hostname);
if (url.port.length > 0) console.log("port: " + url.port);
if (url.pathname.length > 0) console.log("path: " + url.pathname);
if (url.search.length > 0) console.log("query_string: " + url.search);
if (url.hash.length > 0) console.log("fragment_id: " + url.hash);
