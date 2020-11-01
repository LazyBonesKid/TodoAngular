import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageStatus {

  constructor() {}



  
  menuStatus: boolean = false
  sortStatus: boolean = true 
  modalStatus: boolean = false 
  settValue: string = 'date'
  searchInput: string = ''

  getStatus(el: string) {
    if (el === 'menu') {
      return this.menuStatus
    } else
    if (el === 'sort') {
      return this.sortStatus
    } else 
    if (el === 'modal') {
      return this.modalStatus
    } else 
    if (el === 'sett') {
      return this.settValue
    } else 
    if (el === 'search') {
      return this.searchInput
    }
  }

  menuToggle() {
    this.menuStatus = !this.menuStatus 
  }

  sortToggle() {
    this.sortStatus = !this.sortStatus
  }

  modalToggle() {
    this.modalStatus = !this.modalStatus
  }

  settChange(event: any) {
    const target = event.target
    const currentLi = target.closest('li')
    const ul  = target.closest('ul')
    const liArray = [...ul.children]
    liArray.forEach(li => {
      const i = li.querySelector('i')
      if (li === currentLi) {
        const div = li.querySelector('div')
        const sett = div.getAttribute('id')
        this.settValue = sett
        i.classList.add('active')
      } else {
        i.classList.remove('active')
      }
    })
  }

}
