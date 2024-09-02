(() => {

    interface Xmen {
        name: string;
        realName: string;
        mutanPower(id:number):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public age: number;
        public name: string;
        public realName: string;

        //El constructor se puso
        constructor(age: number, name: string, realName: string) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }

        mutanPower(id:number) {
            return this.name + ' ' + this.realName;
        }
    }
})()