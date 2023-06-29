import { useEffect, useRef } from "react";

const usePrevious = (value: Array<any>, initialValue: Array<any>) => {
    const ref = useRef(initialValue);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

export const useEffectDebugger = (
    dependencies: Array<any>,
    dependencyNames: Array<string> = [],
    tag?: string) => {
    const previousDeps = usePrevious(dependencies, []);

    const changedDeps = dependencies.reduce((accum: Array<any>, dependency: any, index: number) => {
        if (dependency !== previousDeps[index]) {
            const keyName = dependencyNames[index] || index;
            return {
                ...accum,
                [keyName]: {
                    before: previousDeps[index],
                    after: dependency
                }
            };
        }

        return accum;
    }, {});

    if (Object.keys(changedDeps).length) {
        console.log(`[${tag || "use-effect-debugger"}] `, changedDeps);
    }
};