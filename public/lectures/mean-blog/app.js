angular
    .module('BlogApp', [])
    .controller('BlogController', blogController);

function blogController($scope) {
    $scope.blogPosts = [
        {title: 'my new party', body: 'none of your business'},
        {title: 'my daughters bd', body: 'wow she turned 11'}
    ];
    $scope.createPost = createPost;
    $scope.deletePost = deletePost;
    $scope.deleteAll = deleteAll;
    $scope.selectPost = selectPost;
    $scope.updatePost = updatePost;
    $scope.post = {};

    function updatePost(post) {
        $scope.blogPosts[$scope.indexPost].title = post.title;
        $scope.blogPosts[$scope.indexPost].body = post.body;

    }
    function selectPost(post) {
        $scope.indexPost = $scope.blogPosts.indexOf(post);
        console.log($scope.indexPost);
        $scope.post.title = post.title;
        $scope.post.body = post.title;

    }
    function deleteAll() {
        $scope.blogPosts = []
    }
    function createPost (post) {
        var newPost = {
            title: post.title,
            body: post.body
        };
        $scope.blogPosts.push(newPost);
    }

    function deletePost (post) {
        console.log(post);
        var indexPost = $scope.blogPosts.indexOf(post);
        $scope.blogPosts.splice(indexPost, 1);

    }
}