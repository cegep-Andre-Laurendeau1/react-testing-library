import {render, screen, fireEvent} from "@testing-library/react";
import Todo from "./Todo";
import {BrowserRouter} from "react-router-dom";

const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

const addTasks = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i})
    tasks.forEach(task => {
        fireEvent.change(inputElement, {target: {value: task}})
        fireEvent.click(buttonElement);
    })
}

describe('Todo', () => {

    it('test input adds to list', async () => {
        render(<MockTodo/>);
        addTasks(["Go Grocery Shopping"])
        const divElement = screen.getByText(/Go Grocery Shopping/i)
        expect(divElement).toBeInTheDocument();
    });

    it('test input adds more to list', async () => {
        render(<MockTodo/>);
        addTasks(["Go Grocery Shopping", "Wash my hands"])
        const divElement = screen.getAllByTestId("task-container")
        expect(divElement.length).toBe(2);
    });

    it('task should not have completed when initially rendered', async () => {
        render(<MockTodo/>);
        addTasks(["Go Grocery Shopping"])
        const divElement = screen.getByText(/go grocery shopping/i)
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it('task should completed class when clicked', async () => {
        render(<MockTodo/>);
        addTasks(["Go Grocery Shopping"])
        const divElement = screen.getByText(/go grocery shopping/i)
        fireEvent.click(divElement)
        expect(divElement).toHaveClass("todo-item-active");
    });

});
