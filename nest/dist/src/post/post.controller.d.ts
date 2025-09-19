import { PostsService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<{
        id: number;
        title: string;
        content: string | null;
        published: boolean | null;
        authorId: number | null;
    }>;
    findAll(skip?: number, take?: number): Promise<{
        id: number;
        title: string;
        content: string | null;
        published: boolean | null;
        authorId: number | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        title: string;
        content: string | null;
        published: boolean | null;
        authorId: number | null;
    } | null>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
        id: number;
        title: string;
        content: string | null;
        published: boolean | null;
        authorId: number | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        title: string;
        content: string | null;
        published: boolean | null;
        authorId: number | null;
    }>;
}
