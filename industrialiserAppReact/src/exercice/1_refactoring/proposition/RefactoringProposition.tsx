import useRenderCount from "../../../debugTools/useRenderCount";
import ClickerCount from "./ClickerCount";
import SearchText from "./SearchText";

const RefactoringProposition = () => {
    const countRender = useRenderCount();
    return (
        <div>
            <h1> Basics </h1>
            <p>Count render : {countRender}</p>
            <SearchText />
            <ClickerCount />
        </div>
    )
}

export default RefactoringProposition;
