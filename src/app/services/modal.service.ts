import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visibile: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      visibile: false
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }


  isModalOpen(id: string): boolean {
    return !!this.modals.find(x => x.id === id)?.visibile;
  }

  toggleModal(id: string) {
    const modal = this.modals.find(x => x.id === id);
    if (modal) {
      modal.visibile = !modal.visibile;
    }
  }

}