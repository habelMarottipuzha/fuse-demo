export class UrlService {

    private static _BASE = 'https://socio01.line.pm/api';

    /**
     * FILE
     */

    public static fileUpload() {
        return `${this._BASE}/v1/files/upload`;
    }

    /**
     * ORGANIZATION
     */

    public static getOrganizationById(orgId: number) {
        return `${this._BASE}/v1/organisations/profile/${orgId}`
    }

    /** 
     * MEMBER
     */
    public static getMembers() {
        return `${this._BASE}/v1/members`;
    }

    public static createMember() {
        return `${this._BASE}/v1/members`;
    }

    public static getMemberById(id: number) {
        return `${this._BASE}/v1/members/${id}`;
    }

    public static getMemberParentId(parentId: number) {
        return `${this._BASE}/v1/members?parentId=${parentId}`;
    }

    /**
     * POST
     */
    public static getPost(orgId: number) {
        return `${this._BASE}/v1/posts?orgId=${orgId}`;
    }

    public static createPost() {
        return `${this._BASE}/v1/posts`;
    }

}