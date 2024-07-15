export class UrlService {

    public static fileUpload() {
        return `${this._baseUrl()}/files/upload`;
    }

    public static getPost(orgId: number) {
        return `${this._baseUrl()}/v1/posts?orgId=${orgId}`;
    }

    public static createPost() {
        return `${this._baseUrl()}/v1/posts`;
    }

    private static _baseUrl(): string {
        return 'http://ec2-54-242-152-107.compute-1.amazonaws.com:8500/api'
    }
}