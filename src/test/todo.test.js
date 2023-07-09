import {render, screen, waitFor} from '@testing-library/react'
import {jest} from '@jest/globals'
import '@testing-library/jest-dom'

import Todos from "../component/Todos"

describe('Todos', function () {
    it('should have add button', async function () {

        const mockData = [{
            completed: false,
            id: 200,
            title: 'test title',
            userId: 1,
        }]
        jest.spyOn(global, 'fetch').mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockData)
        })

        render(<Todos />)

        await waitFor(() => {
            const addBtn = screen.getByText('Add')
            expect(addBtn).toBeInTheDocument()
        })


    });
});