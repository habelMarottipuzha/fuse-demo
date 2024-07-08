import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UrlService } from '../url.service';

export enum ImageStatus {
  STARTED = 'STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR',
  NO_IMG = 'NO_IMG',
}

export interface UploadHelper {
  progress?: number | null;
  status?: ImageStatus;
  uploadedFiles?: string[];
}

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  public imageUploadHelper$ = new BehaviorSubject<UploadHelper>({});

  constructor(private http: HttpClient) {
  }


  upload(images: File[], type: string) {
    const fd = new FormData();

    for (const image of images) {
      fd.append('image', image, image.name);
    }

    this.http.post(
      `${UrlService.fileUpload(type)}`,
      fd,
      { reportProgress: true, observe: 'events' }
    )
      .subscribe({
        next: (event) => {
          this._handleUpload(event);
        },
        error: (x) => console.log(x),
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
          uploadedFiles: event?.body?.result || []
        });
        break;

      default:
        break;
    }
  }

}
