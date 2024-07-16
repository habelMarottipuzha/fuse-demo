export class UrlService {

    public static fileUpload() {
        return `${this._baseUrl()}/v1/files/upload`;
    }

    public static getMembers() {
        return `${this._baseUrl()}/v1/members`;
    }

    public static createMember() {
        return `${this._baseUrl()}/v1/members`;
    }

    public static getMemberById(id: number) {
        return `${this._baseUrl()}/v1/members/${id}`;
    }

    public static getPost(orgId: number) {
        return `${this._baseUrl()}/v1/posts?orgId=${orgId}`;
    }

    public static createPost() {
        return `${this._baseUrl()}/v1/posts`;
    }


    private static _baseUrl(): string {
        return 'https://socio01.line.pm/api'
    }

}