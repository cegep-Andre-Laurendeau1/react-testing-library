import { vi } from 'vitest';

const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Tom",
                    last: "Brady"
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/39.jpg"
                },
                login:  {
                    username: "the goat"
                }

            }

        ]

    }
}

export default {
    get: vi.fn().mockResolvedValue(mockResponse)
}