import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { LoadingService } from './loading.service';
import { of } from 'rxjs';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequests = 0;

  constructor(private loadingService: LoadingService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this.totalRequests++;
    this.loadingService.setLoading(true);
    return next.handle(request).pipe(
      tap(res => {
        if (res instanceof HttpResponse) {
          this.decreaseRequests();
        }
      }),
      catchError(err => {
        this.decreaseRequests();
        throw err;
      })
    );
  }

  private decreaseRequests() {
    this.totalRequests--;
    if (this.totalRequests === 0) {
      this.loadingService.setLoading(false);
    }
  }
}