async function incompleteTodos(incompleteTodos) {
    const promise = await fetch("https://jsplaceholder.typicode.com/todos")
    
    const result = await promise.json()

    const incompleteTodos = result.filter(elem => !elem.completed.slice(0,6));

    console.log(incompleteTodos)
}
postsByUser(4);