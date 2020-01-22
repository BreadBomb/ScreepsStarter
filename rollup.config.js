import typescript from "rollup-plugin-typescript";
import screeps from "rollup-plugin-screeps";
import clear from 'rollup-plugin-clear';

let cfg;
const dest = process.env.DEST;
if (!dest) {
    console.log("No destination specified - code will be compiled but not uploaded");
} else if ((cfg = require("./screeps.json")[dest]) == null) {
    throw new Error("Invalid upload destination");
}

export default {
    plugins: [
        clear({ targets: ["dist"] }),
        typescript(),
        screeps({config: cfg})
    ],
    input: 'src/main.ts',
    output: {
        file: 'dist/main.js',
        format: 'cjs',
        sourcemap: true,
    }
};
