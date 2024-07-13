export class UrlService {

    public static fileUpload(type: string) {
        return `${this._baseUrl()}/file?type=${type}`;
    }

    public static getPost(orgId: number) {
        return `${this._baseUrl()}/posts?orgId=${orgId}`;
    }

    public static createPost() {
        return `${this._baseUrl()}/posts`;
    }

    private static _baseUrl(): string {
        return 'http://ec2-54-242-152-107.compute-1.amazonaws.com:8500'
    }
}