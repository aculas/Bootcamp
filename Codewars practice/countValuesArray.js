const counts = [
  "900,google.com",
  "60,mail.yahoo.com",
  "10,mobile.sports.yahoo.com",
  "40,sports.yahoo.com",
  "300,yahoo.com",
  "10,stackoverflow.com",
  "20,overflow.com",
  "5,com.com",
  "2,en.wikipedia.org",
  "1,m.wikipedia.org",
  "1,mobile.sports",
  "1,google.co.uk",
];
// WIP
// function countArray(counts) {
//   let totals = {};
//   for (let i = 0; i < counts.length; i++) {
//     console.log(counts[i]);
//   }
// }

/*  The find() method returns the first element in the provided array 
that satisfies the provided testing function. 
If no values satisfy the testing function, undefined is returned.
*/

function calculateClicksByDomain(counts) {
  let results = {};
  // The forEach() method executes a provided function once for each array element.
  counts.forEach(function (part) {
    const parts = part.split(",");
    const clicks = parseInt(parts[0], 10);
    const domain = parts[1];
    const domain_parts = domain.split(".");
    getDomains(domain_parts).forEach(function (domain) {
      const prev = results[domain] || 0;

      results[domain] = prev + clicks;
    });
  });

  console.log(results);
}

function getDomains(domainParts) {
  let subdomains = [];

  domainParts.reverse();

  while (domainParts.length) {
    let current = domainParts.shift();

    if (subdomains.length) {
      const last = subdomains[subdomains.length - 1];
      subdomains.push(`${current}.${last}`);
    } else {
      subdomains.push(current);
    }
  }
  return subdomains;
}

calculateClicksByDomain(counts);
