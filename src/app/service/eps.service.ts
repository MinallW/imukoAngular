import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

constructor(
    private http: HttpClient,
    private messageService: MessageService
) { }

private epsUrl = 'eps';  // URL to web api

private log(message: string) {
    this.messageService.add(`epsService: ${message}`);
}

getEps(): Observable<Eps[]> {
    return this.http.get<Eps[]>(this.epsUrl)
	.pipe(
	    tap(_ => this.log('fetched eps')),
	    catchError(this.handleError<Eps[]>('getEps', []))
	);
}

private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

	// TODO: send the error to remote logging infrastructure
	console.error(error); // log to console instead

	// TODO: better job of transforming error for user consumption
	this.log(`${operation} failed: ${error.message}`);

	// Let the app keep running by returning an empty result.
	return of(result as T);
    };
};
