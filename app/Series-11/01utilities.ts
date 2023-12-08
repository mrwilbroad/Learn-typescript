type Socks = Record<string , Number>

const score : Socks = {
    "Math" : 90
}

type Post = Array<{
    userId : String,
    id: String,
    title: String,
    body: String
}>


const FetchPost = async(): Promise<Post> => {
      const data = await fetch("https://jsonplaceholder.typicod.com/posts/2")
                          .then(res=> {
                            return res.json();
                          }).catch(e=> {
                            return e instanceof Error ? e.message : null;
                          })
    return data;
}


FetchPost().then(res=> {
    console.log(res);
}).catch(er=> {
    console.log(er);
})