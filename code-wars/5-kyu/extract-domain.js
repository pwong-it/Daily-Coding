// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


function domainName(url) {
  if (url.includes("www")) {
    return url.match(/\.([\w\-]+)\./)[1]
  } else if (url.includes("http")) {
    return url.match(/\/\/([\w\-]+)\./)[1]
  } else {
    return url.match(/([\w\-]+)\./)[1]
  }
}

console.log(domainName("http://google.com"))
console.log(domainName("http://google.co.jp"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))
console.log(domainName("tqo781l7h9y0ltmurfh.net/"))
console.log(domainName("http://www.cu4emkuz-qw5.fr/img/"))



// Best solution
function domainName(url) {
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

// They essentially deleted the prefixes then created an array separated by '.' and then just returning the first index of the array.