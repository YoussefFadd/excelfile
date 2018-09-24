import { CheckoutActions } from './../../../checkout/actions/checkout.actions';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, ChangeDetectionStrategy, Inject, PLATFORM_ID } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
  @Input() products;
  // @Input() paginationData;
  page: number;
  queryParams: any;
  screenwidth;
  isMobile;
  appConfig = environment.config;
  currency = environment.config.currency_symbol;
  constructor(
    private store: Store<AppState>,
    private checkoutActions: CheckoutActions,
    private router: ActivatedRoute,
    private routernomal: Router,
    @Inject(PLATFORM_ID) private platformId: any) {
    this.router.queryParams
      .subscribe(params => {
        this.queryParams = params
      });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenwidth = window.innerWidth;
    }
    this.calculateInnerWidth();
  }
  calculateInnerWidth() {
    if (this.screenwidth <= 1000) {
      this.isMobile = this.screenwidth;
    }
  }

  // pageChanged(event: any): void {
  //   this.page = event.page;
  //   const urlTree = this.routernomal.createUrlTree([], {
  //     queryParams: { page: this.page },
  //     queryParamsHandling: 'merge',
  //     preserveFragment: true
  //   });
  //   this.routernomal.navigateByUrl(urlTree);
  // }
}
