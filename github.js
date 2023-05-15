//search users
clientID = '978a10535e91265061cb'
clientSecret = '947f064df36c0f99759ca68d90597f0f479156d3'
search = 'alaaMohammad'
const URL = `https://api.github.com/search/users?q=${search}&client_id=${clientID}&client_secret=${clientSecret}`
console.log(URL);
fetch(URL, { 
                 headers: {
                      'Accept' : 'application/vnd.github.v3+json'
                  }})
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
            console.log(data)
                    const root = document.querySelector('#root');
                    root.innerHTML = ` 
                      <a href=${data.items[0].url}>Name: ${data.items[0].login}</a>
                     <p>Followers : ${data.followers}</p>`
                })
		.catch( error => console.error(error));
       