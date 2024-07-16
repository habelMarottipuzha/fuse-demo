import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UrlService } from '../url.service';
import { Url } from 'app/modal/post/create-post.dto';

export enum ImageStatus {
  STARTED = 'STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR',
  NO_IMG = 'NO_IMG',
}

export enum FileUploadType {
  IMAGE = 'image'
}

export interface UploadHelper {
  progress?: number | null;
  status?: ImageStatus;
  uploadedFiles?: Url[];
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public imageUploadHelper$ = new BehaviorSubject<UploadHelper>({});

  constructor(private _http: HttpClient) { }

  upload(images: File[], type: FileUploadType) {
    const fd = new FormData();

    for (const image of images) {
      fd.append('file', image, image.name);
    }

    this._http.post(
      `${UrlService.fileUpload()}`,
      fd,
      {
        reportProgress: true, observe: 'events'
      }
    )
      .subscribe({
        next: (event) => {
          this._handleUpload(event);
        },
        error: (x) => this.imageUploadHelper$.error({ err: "ddd" }),
      })
  }


  private _handleUpload(event: any) {
    const value = this.imageUploadHelper$.value
    const progress = event.total ? Number(((event.loaded / event.total) * 100).toFixed(2)) : null;

    switch (event.type) {
      /**
      * Send
      */
      case HttpEventType.Sent:
        this.imageUploadHelper$.next({
          ...value,
          progress: null,
          status: ImageStatus.STARTED,
          uploadedFiles: []
        });
        break;


      /**
       * In  progress
       */
      case HttpEventType.UploadProgress:
        this.imageUploadHelper$.next({
          ...value,
          progress,
          status: ImageStatus.IN_PROGRESS
        });
        break;

      /**
       * Completed
       */
      case HttpEventType.Response:
        this.imageUploadHelper$.next({
          ...value,
          progress,
          status: ImageStatus.COMPLETED,
          uploadedFiles: event?.body ? [event?.body] : []  /** @todo change needed */
        });
        break;

      default:
        break;
    }
  }

}
