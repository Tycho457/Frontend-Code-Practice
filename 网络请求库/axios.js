fetch('/api/data')
.then(function (response) {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
})
.then(function (data) {
  console.log(data);
})
.catch(function (error) {
  console.error(error);
});
