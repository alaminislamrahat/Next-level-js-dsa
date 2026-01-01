const posts = [
    { id: 1, userId: 101, title: "My name" },
    { id: 2, userId: 102, title: "My role" },
    { id: 3, userId: 103, title: "My post" },
    { id: 4, userId: 104, title: "My garden" },
    { id: 5, userId: 105, title: "My ball" },
]



const postByUserId = posts.reduce((table, post) => {
    const { userId } = post;

    if (!table[userId]) {
        table[userId] = [];
    }
    table[userId].push(post);
    return table;

   
}, {})
 console.log(postByUserId)