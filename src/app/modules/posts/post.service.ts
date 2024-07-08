import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UrlService } from "../../shared/url.service";
import { Observable, of } from "rxjs";
import { posts } from "app/dummy/post";
import { CreatePostDto } from "app/modal/post/create-post.dto";

@Injectable()
export class PostService {

    constructor(private _httpService: HttpClient) { }

    public getPost(orgId: number): Observable<Object> {
        return of(posts)
        // return this._httpService.get(UrlService.getPost(orgId));
    }

    public createPost(payload: CreatePostDto): Observable<Object> {
        // return of(posts)
        return this._httpService.post(UrlService.createPost(), payload);
    }
}