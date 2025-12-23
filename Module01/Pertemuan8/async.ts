export async function fetchData() {
    try {
        const fetchUsers = await fetch("https://jsonplaceholder.typicode.com/users");
        const res = await fetchUsers.json()
        console.log('res => ', res)
    }catch (err){
        console.log(err);
}
}


// fetchData()