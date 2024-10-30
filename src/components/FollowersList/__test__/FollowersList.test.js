import {render, screen} from "@testing-library/react";
import FollowersList from "../FollowersList";
import {BrowserRouter} from "react-router-dom";

const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe('tests de followers', () => {

    it('find 1 follower card', async () => {
            render(<MockFollowersList />);
            const followerDivElement = await screen.findByTestId("follower-item-0")
            screen.debug()
            expect(followerDivElement).toBeInTheDocument();
        }
    );

    // it('find all follower card', async () => {
    //         render(<MockFollowersList />);
    //         const followerDivElements = await screen.findAllByTestId(/follower-item-/i)
    //         expect(followerDivElements.length).toBe(5);
    //     }
    // );
});