// Function type Expression

function greating(str: string ,fn: (s: string) => string) {
  return fn(str);
}


function Hi(s: string){
   console.log(s.toUpperCase());
   return s.toUpperCase();
}

greating("Hello mrwilbroad",Hi);