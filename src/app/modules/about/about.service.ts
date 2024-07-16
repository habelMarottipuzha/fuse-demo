import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { about } from "app/dummy/about";
import { GetAboutDto } from "app/modal/about/get-about.dto";
import { UrlService } from "app/shared/url.service";
import { Observable, of } from "rxjs";

@Injectable()
export class AboutService {

    constructor(private _httpClient: HttpClient) { }
    /**
      * Get About
      */
    getAboutOrgById(orgId: number): Observable<GetAboutDto> {
        return of(about);
        // return this._httpClient.get<GetAboutDto>(UrlService.getOrganizationById(orgId))
    }
}