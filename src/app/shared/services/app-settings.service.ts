import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  private fileUrl = './assets/app-settings.json';

  constructor(private http: HttpClient) { }

  getSettings(): Observable<any> {
    const settingsJson = localStorage.getItem('appSettings');

    if (settingsJson == null) {
      return this.getSettingsFromFile();
    }

    const result = JSON.parse(settingsJson);
    if (result == null) {
      return this.getSettingsFromFile();
    }

    return of(result);
  }

  getSettingsFromFile(): Observable<any> {
    return this.http.get<any>(this.fileUrl).pipe(concatMap((config) => {
      localStorage.setItem('appSettings', JSON.stringify(config));
      return of(config);
    }), catchError(this.handleError));
  }

  private handleError(err: any): Observable<any> {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return of({Source: 'Default'});
  }
}
