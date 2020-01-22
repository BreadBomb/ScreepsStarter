export const loop = () => {
    global.BreadOS = {test: "lol"};
    console.log(BreadOS.test);

    const horse = f(Horse);
    const bee = f(Bee);

    console.log(JSON.stringify(horse));

    bee.fly();
};

class Animal {
    name: string;
}

class Horse extends Animal {
    run() {

    }
}

class Bee extends Animal {
    fly() {

    }
}

function f<T extends Animal>(instance: new () => T): T {
    const i = new instance();
    i.name = "Honigblüte";
    return i;
}
