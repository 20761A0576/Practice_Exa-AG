const posts = [
    {
        "id": 1,
        "title": "Introduction to React",
        "content": "React is a JavaScript library for building user interfaces.",
        "author": "John Doe",
        "category": "React",
        "tags": ["react", "javascript"],
        "createdAt": "2024-01-05",
        "comments": [
            {
                "id": 1,
                "user": "Alex",
                "comment": "Great introduction!",
                "date": "2024-01-06"
            }
        ]
    },
    {
        "id": 2,
        "title": "Understanding useState Hook",
        "content": "useState allows functional components to manage state.",
        "author": "Jane Smith",
        "category": "Hooks",
        "tags": ["react", "useState"],
        "createdAt": "2024-01-10",
        "comments": [
            {
                "id": 1,
                "user": "Tom",
                "comment": "Very helpful explanation.",
                "date": "2024-01-11"
            },
            {
                "id": 2,
                "user": "Emma",
                "comment": "Easy to understand 👍",
                "date": "2024-01-12"
            }
        ]
    },
    {
        "id": 3,
        "title": "Styled Components Basics",
        "content": "Styled-components let you write CSS inside JavaScript.",
        "author": "Alex Brown",
        "category": "Styling",
        "tags": ["styled-components", "css"],
        "createdAt": "2024-01-15",
        "comments": []
    },
    {
        "id": 4,
        "title": "Context API Explained",
        "content": "Context API helps avoid prop drilling in React.",
        "author": "Chris",
        "category": "State Management",
        "tags": ["context", "react"],
        "createdAt": "2024-02-05",
        "comments": [
            {
                "id": 1,
                "user": "Mike",
                "comment": "Very helpful article!",
                "date": "2024-02-06"
            },
            {
                "id": 2,
                "user": "Sara",
                "comment": "Clear explanation 👍",
                "date": "2024-02-07"
            }
        ]
    },
    {
        "id": 5,
        "title": "React Router v6 Guide",
        "content": "React Router v6 simplifies routing with Routes and element props.",
        "author": "Admin",
        "category": "Routing",
        "tags": ["react-router", "navigation"],
        "createdAt": "2024-02-10",
        "comments": [
            {
                "id": 1,
                "user": "Daniel",
                "comment": "This cleared my confusion.",
                "date": "2024-02-11"
            }
        ]
    }
]

export default posts;