const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Joe",
                    last: "Montana"
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
    get: jest.fn().mockResolvedValue(mockResponse)
}