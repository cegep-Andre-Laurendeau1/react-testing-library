import {render, screen} from "@testing-library/react";
import TodoFooter from "./TodoFooter";
import {BrowserRouter} from "react-router-dom";

const WrappingComponent = ({numberOfIncompleteTasks}) => {
    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}

describe("todofooter tests", () => {

    it('should render the correct amount of incomplete tasks', async () => {
            render(<WrappingComponent numberOfIncompleteTasks={5}/>);
            const paragraphElement = screen.getByText(/5 tasks left/i);
            expect(paragraphElement).toBeVisible();
        }
    );

    it('render the singular version', async () => {
            render(<WrappingComponent numberOfIncompleteTasks={1}/>);
            const paragraphElement = screen.getByText(/1 task left/i);
            expect(paragraphElement).toBeVisible();
            expect(paragraphElement).toBeTruthy();
            expect(paragraphElement).toContainHTML("p")
            expect(paragraphElement.textContent).toBe('1 task left')
        }
    );

})