const http = new EasyHttp

// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err)) 

const data = {
  name : 'Ali',
  username: "ali.ali",
  email : 'ali@ali.com'
}


http.post('https://jsonplaceholder.typicode.com/users', data)
.then(data => console.log(data))
.catch(err => console.log(err)) 
