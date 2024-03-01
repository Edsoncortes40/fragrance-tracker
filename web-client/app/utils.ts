export interface Frag {
    Brand?: string,
    Description?: string,
    Gender?: string,
    Id?: string,
    ImageUrl?: string,
    Name: string,
    Reviews: Review[],
}

export interface Review{
    UserName: string,
    ImageUrl: string,
    Rating: number,
    Review?: string,
}

export interface UserInfo{
    admin: 0,
    email: string,
    photoUrl: string, 
    uid: string,
}