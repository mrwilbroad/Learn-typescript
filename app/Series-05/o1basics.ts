const message = "Heloow";

// this will bring Error as expression is not callable
// message()

// Type for Tooling
// typescript help to prevent us from making mistake during writing code
// so typescript take tooling seriouslyand goes beyond completion a and errros as you typ


// function that return Promise
async function SetName(name:String) : Promise<string> {
    return `Name is :${name.toUpperCase()}`
}