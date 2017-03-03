module.exports = function (app) {
    app.get('/hello/:name', sayHello);
    app.get('/lectures/todo', readAllTodos);

    var todos = [
        {title: 'milk', note: 'organic'},
        {title: 'kids', note: 'school'}
    ];

    function readAllTodos(req, res){
        res.send(todos);
    }

    function sayHello(req, res) {
        var name = req.params.name;
        var age = req.query.age;
        res.send('goodbey world: ' + name + ' age:' + age);
    }


};