class StudentK {

    public studentname: string;


    public constructor(name : string ,public age : number) {
        this.studentname = name;
        this.age = age;
    }


    public get Data () {
        return `Student : Name : ${this.studentname} \n Age: ${this.age}`;
    }


    public set newData (name: string) {
        this.studentname = name;
    }


}


const meme = new StudentK("AMran Roja", 9000);
console.log(meme.Data);