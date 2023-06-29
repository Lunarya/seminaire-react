
import { fireEvent, render, screen } from '@testing-library/react'
import TestPokemon from '../TestPokemon'
import { beforeEach, vi } from "vitest"

global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([{
            "id": 1,
            "name": "Bulbasaur",
            "type": [
                "Grass",
                "Poison"
            ],
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "special_attack": 65,
            "special_defense": 65,
            "speed": 45
        },
        {
            "id": 2,
            "name": "Ivysaur",
            "type": [
                "Grass",
                "Poison"
            ],
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "special_attack": 80,
            "special_defense": 80,
            "speed": 60
        }]),
    }),
) as jest.Mock;

beforeEach(() => {
    (fetch as jest.Mock).mockClear();
});

describe('Custom Hook component Test', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });
    it('Component render with no props', () => {
        render(<TestPokemon />)
        expect(screen.getByText(/Pokemon/i)).toBeInTheDocument()
    })

    it('Component should display pokemon', async () => {
        render(<TestPokemon />)
        const divElement = await screen.findByText(/Bulbasaur/i)
        expect(divElement).toBeInTheDocument()
        const ivysaurElement = await screen.findByText(/Ivysaur/i)
        expect(ivysaurElement).toBeInTheDocument()

    })

    it('Component should hide pokemon that not match input', async () => {
        render(<TestPokemon />)
        screen.debug()
        const input = screen.getByTestId("filterField") as HTMLInputElement
        expect(input.value).toBe("")
        fireEvent.change(input, { target: { value: "Bulb" } })
        expect(input.value).toBe("Bulb")
        setTimeout(async () => {

            const bulbasaurElement = await screen.findByText(/Bulbasaur/i)
            expect(bulbasaurElement).toBeInTheDocument()
            const ivysaurElement = await screen.findByText(/Ivysaur/i)
            expect(ivysaurElement).toBeNull()
        }, 1000);
    })
})
