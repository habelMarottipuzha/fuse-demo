import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Contact } from './member.type';
import { UrlService } from 'app/shared/url.service';
import { member } from 'app/dummy/member';
import { PageableResponse } from 'app/modal/pagable-response.dto';
import { GetMemberDto } from 'app/modal/member/get-member.dto';

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    private _members: BehaviorSubject<PageableResponse<GetMemberDto> | null> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient) {
    }

    /**
     * Getter for contact
     */
    get members$(): Observable<PageableResponse<GetMemberDto>> {
        return this._members.asObservable();
    }

    /**
     * Get Members
     */
    getMembers(): Observable<PageableResponse<GetMemberDto>> {
        // const memberList: PageableResponse<GetMemberDto> = {
        //     ...member,
        //     content: member.content.sort((a, b) => a.displayName.localeCompare(b.displayName))
        // }
        // return of(memberList)
        //     .pipe(tap((res: PageableResponse<GetMemberDto>) => this._members.next(res)));
        return this._httpClient.get<PageableResponse<GetMemberDto>>(UrlService.getMembers()).pipe(
            tap((contacts) => {
                this._members.next(contacts);
            })
        );
    }

    /**
     * Search contacts with given query
     *
     * @param query
     */
    searchContacts(query: string): Observable<PageableResponse<GetMemberDto>> {
        const memberList: PageableResponse<GetMemberDto> = {
            ...member,
            content: member.content.filter(x=> x.displayName.includes(query))
        }
        return of(memberList)
            .pipe(tap((res: PageableResponse<GetMemberDto>) => this._members.next(res)));
        // return this._httpClient.get<PageableResponse<GetMemberDto>>('api/apps/contacts/search', {
        //     params: { query }
        // }).pipe(
        //     tap((contacts) => {
        //         this._members.next(contacts);
        //     })
        // );
    }
}
