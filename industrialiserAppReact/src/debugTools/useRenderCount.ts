import { useCallback, useEffect, useMemo, useRef } from "react";

const useRenderCount = (obj: unknown[]) => {
    const renderCount = useRef(0);

    useEffect(() => {
        renderCount.current++;
    }, obj);
    return renderCount.current
}
export default useRenderCount;