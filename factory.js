var app = angular.module('redditMod');


app.factory('redditFactory', function($http){
  // var

  var redditObject = [];

  function setReddit(){

  var promise = $http({
    method: 'GET',
    url: "http://www.reddit.com/r/BabyCorgis.json",
  }).then(function(response) {
    console.log(response.data);
    redditObject = response.data.data.children;
  });
  return promise;
};


    function getReddit(){

    return redditObject;
      // redditObject.push(obj);
    //   if(response.data.data.children.post_hint === 'image') {
    //     redditObject.push(response.data.data.children);
    //
    //   console.log(redditObject);
    // };
    console.log(redditObject);
  }

    return {
    setReddit: setReddit,
    getReddit: getReddit
    }

  });
