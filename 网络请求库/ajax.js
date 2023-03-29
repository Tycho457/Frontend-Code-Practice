$.ajax({
    url: '/api/data',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      console.log(data);
    },
    error: function (xhr, status, error) {
      console.error(error);
    }
  });
  