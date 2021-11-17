let longset = ''; 
longest = "thisisalongstring";
console.log(longest);

fetch('https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Albert_Einstein/daily/2015100100/2015103100')
    .then(response => {
        console.log(response.json());
    })
