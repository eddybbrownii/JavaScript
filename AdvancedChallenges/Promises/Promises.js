// Youtube watchlist
    // "The Async Await Episode I Promised"
        //Fireship
    // Async Await JavaScript ES7
        // Techsith
    // Async JS Crash Course - Callbacks, Promises, Async Awail
        // Travsery Media
        
// find all posts by a  given user

async function postsByUser(userID) {
    const promise = await fetch("https://jsplaceholder.typicode.com/posts")
    
    const result = await promise.json()

    const posts = result.filter(element => element.userID === userID)

    console.log(posts)
}
postsByUser(4);