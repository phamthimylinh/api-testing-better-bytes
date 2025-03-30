function constructVisualizerPayload() {
    var res = pm.response.json();

    var visualizerData = {
        access_Token: res.data.accessToken
    };

    return {response: visualizerData};
}

pm.visualizer.set('', constructVisualizerPayload());

// Lưu accessToken vào biến môi trường
pm.environment.set("token", pm.response.json().data.accessToken);

pm.test("Response status code is 201", function () {
  pm.response.to.have.status(201);
});

pm.test("Message returned is 'Login successful'", function () {
  var responseData = pm.response.json();
  pm.expect(responseData.message).to.equal("Login successful");
});
