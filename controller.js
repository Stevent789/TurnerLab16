var app = angular.module('redditMod');

app.controller('redditController', function($scope, $http, redditFactory){

   redditFactory.setReddit().then(function(){
   var temp = redditFactory.getReddit();

   temp.forEach(function(post, i){
     if(!post.data.post_hint){
       temp.splice(i, 1);
     }
   })

   $scope.obj = temp;
   console.log($scope.obj[0]);
 });

});


app.directive('reddit', function() {

  return {
    restrict: 'E',
    replace: false,
    templateUrl: 'reddit.html'
  }

})


// if(response.data.data.children.post_hint === 'image') {
//   redditObject = response.data.data.children;
// };
