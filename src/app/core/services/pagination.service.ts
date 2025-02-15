import { computed, inject, Injectable, signal } from '@angular/core';
import { PaginationState } from '../../types/pagination';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private readonly state = signal<PaginationState>({
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 0
  });
  private readonly router = inject(Router)
  public currentPage = computed(() => this.state().currentPage);
  public itemsPerPage = computed(() => this.state().itemsPerPage);
  public totalPages = computed(() => this.state().totalPages);

  constructor() {
    // Initialize from URL params
    const params = new URLSearchParams(window.location.search);
    const page = Number(params.get('page')) || 1;
    const perPage = Number(params.get('per_page')) || 10;

    this.updateState({ currentPage: page, itemsPerPage: perPage, totalPages: 0 });
  }

  public updateState(newState: Partial<PaginationState>) {
    this.state.update(state => ({ ...state, ...newState }));
    this.updateURL();
  }

  private updateURL() {
    const { currentPage, itemsPerPage } = this.state();
    this.router.navigate([], {
      queryParams: { page: currentPage, per_page: itemsPerPage },
      queryParamsHandling: 'merge'
    });
  }

  public setPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.updateState({ currentPage: page });
    }
  }

  public setItemsPerPage(items: number) {
    this.updateState({ currentPage: 1, itemsPerPage: items });
  }

  public setTotalPages(total: number) {
    this.updateState({ totalPages: total });
  }

  public nextPage() {
    if (this.currentPage() < this.totalPages()) {
      this.setPage(this.currentPage() + 1);
    }
  }

  public previousPage() {
    if (this.currentPage() > 1) {
      this.setPage(this.currentPage() - 1);
    }
  }
}

