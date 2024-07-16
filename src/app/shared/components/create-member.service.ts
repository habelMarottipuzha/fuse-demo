import { Injectable } from "@angular/core";
import { CreateMemberDto } from "app/modal/member/create-member.dto";
import { UrlService } from "../url.service";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class CreateMemberService {

    constructor(private _httpService: HttpClient) { }

    public getMemberById(id: number): Observable<any> {
        return this._httpService.get(UrlService.getMemberById(id));
    }

    public createMember(payload: CreateMemberDto): Observable<Object> {
        return this._httpService.post(UrlService.createMember(), payload);
    }
}  