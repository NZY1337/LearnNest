import { UsersService } from './user.services';
import { PostsService } from './post.service';
import { User as UserModel, Post as PostModel } from '../generated/prisma';
export declare class AppController {
    private readonly userService;
    private readonly postService;
    constructor(userService: UsersService, postService: PostsService);
    getPostById(id: string): Promise<PostModel | null>;
    getPublishedPosts(): Promise<PostModel[]>;
    getFilteredPosts(searchString: string): Promise<PostModel[]>;
    createDraft(postData: {
        title: string;
        content?: string;
        authorEmail: string;
    }): Promise<PostModel>;
    signupUser(userData: {
        name?: string;
        email: string;
    }): Promise<UserModel>;
    publishPost(id: string): Promise<PostModel>;
    deletePost(id: string): Promise<PostModel>;
}
