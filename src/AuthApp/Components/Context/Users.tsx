export type User = {
    id: string;
    username: string;
    email: string;
    mobile: string;
    gender: string;
    password: string;
};

export const dummyUsers: User[] = [
    {
      id: "1",
      username: "John Doe",
      email: "john@example.com",
      mobile: "1234567890",
      gender: "Male",
      password: "password123",
    },
    {
      id: "2",
      username: "Jane Smith",
      email: "jane@example.com",
      mobile: "9876543210",
      gender: "Female",
      password: "securepass",
    },
    {
      id: "3",
      username: "Alex Johnson",
      email: "alex@example.com",
      mobile: "5556667777",
      gender: "None",
      password: "mypassword",
    },
  ];
  