// awaited
type FetchedUser = {
    name: String ,
    age: Number,
    school: String 
}

const FUserNow = async() : Promise<FetchedUser[]> => {
    const data = await fetch("www")
                 .then(res=> {
                    return res.json();
                 }).catch(e=> {
                    if(e instanceof Error)
                    {
                        console.log(e.message); 
                    }
                 })
    return data;
}


type RypeofAw = Awaited<ReturnType< typeof FUserNow>>;

FUserNow().then(res=> {
       console.log(res.forEach((e)=> {
     
       }))
}).catch(er=> {

})
