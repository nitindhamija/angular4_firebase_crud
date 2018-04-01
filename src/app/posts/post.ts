export class Comment {
    name: string;
    body: string;
}

export class Post {

    $key:string;
    title: string;
    body: string;
    comment = new Comment();
}
