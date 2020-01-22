declare var global: any;

declare namespace NodeJS {
    interface Global {
        BreadOS: IBreadOS;
    }
}

declare var BreadOS: IBreadOS;

interface IBreadOS {
    test: string;
}
