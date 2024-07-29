import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UrlService } from 'app/shared/url.service';
import { member } from 'app/dummy/member';
import { PageableResponse } from 'app/modal/pagable-response.dto';
import { GetMemberDto } from 'app/modal/member/get-member.dto';
import { MemberType } from 'app/modal/member/member-enum';

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    private _members: BehaviorSubject<PageableResponse<GetMemberDto> | null> = new BehaviorSubject(null);

    constructor(private _httpClient: HttpClient) { }

    /**
     * Getter for contact
     */
    get members$(): Observable<PageableResponse<GetMemberDto>> {
        return this._members.asObservable();
    }

    /**
     * Get Members
     */
    getMembers(query: { type: MemberType, [key: string]: any }): Observable<PageableResponse<GetMemberDto>> {
        const queryP = new URLSearchParams({
            type: query.type,
            sort: JSON.stringify([{
                direction: 'asc',
                property: 'displayName'
            }])
        });

        const url = `${UrlService.getMembers()}?${queryP}`
        // Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
        return this._httpClient.get<PageableResponse<GetMemberDto>>(url).pipe(
            tap((res) => {
                const sortedResponse = {
                    ...res,
                    content: res.content.sort((a, b) => a.displayName.localeCompare(b.displayName))
                }
                this._members.next(sortedResponse);
            })
        );
    }

    getMemberById(id: number): Observable<GetMemberDto> {
        // return of(member.content[0]);
        return this._httpClient.get<GetMemberDto>(UrlService.getMemberById(id));
    }

    getMemberParentId(id: number): Observable<PageableResponse<GetMemberDto>> {
        // return of(member.content[0]);
        return this._httpClient.get<PageableResponse<GetMemberDto>>(UrlService.getMemberParentId(id));
    }

    /**
     * Search contacts with given query
     *
     * @param query
     */
    searchContacts(query: string): Observable<PageableResponse<GetMemberDto>> {
        /**
         * @todo remove use api insead
         */
        const memberList: PageableResponse<GetMemberDto> = {
            ...member,
            content: member.content.filter(x => x.displayName
                .includes(query))
                .sort((a, b) => a.displayName.localeCompare(b.displayName)) as GetMemberDto[]
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
