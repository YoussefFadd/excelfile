import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-mobile-sort-filter-list',
  templateUrl: './mobile-sort-filter-list.component.html',
  styleUrls: ['./mobile-sort-filter-list.component.scss']
})
export class MobileSortFilterListComponent implements OnInit {
  modalRef: BsModalRef;
  sortItems = ['First', 'Second', 'Third'];
  config = {
    animated: true,
    class: 'sort-filter'
  };
  constructor(private modalService: BsModalService) {}

  ngOnInit() {}

  openModal(sortModal: TemplateRef<any>) {
    this.modalRef = this.modalService.show(sortModal, this.config);
  }
}
