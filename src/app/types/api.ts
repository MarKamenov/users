interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

// Interface for the "support" object (used in both responses)
interface Support {
    url: string;
    text: string;
}

// Interface for the single user response
interface SingleUserResponse {
    data: User;
    support: Support;
}

// Interface for the list of users response (paginated)
interface ListUsersResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support: Support;
}

type UserListType = Omit<ListUsersResponse, 'support'>
type UserType = Omit<SingleUserResponse, 'support'>

export type { User, UserType, UserListType, Support, SingleUserResponse, ListUsersResponse };