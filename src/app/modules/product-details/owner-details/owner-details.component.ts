import {Component, Input, OnInit} from '@angular/core';
import {DatePipe, NgClass} from "@angular/common";
import {AdvertisementDto} from "../../../core/models/advertisment";
import {AccountService} from "../../../core/_services/account.service";
import {AccountDto} from "../../../core/models/account";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-owner-details',
  standalone: true,
  imports: [
    NgClass,
    DatePipe,
    RouterLink
  ],
  templateUrl: './owner-details.component.html',
  styleUrl: './owner-details.component.css'
})
export class OwnerDetailsComponent implements OnInit {
  @Input() details!: AdvertisementDto;
  @Input() owner!: AccountDto

  constructor(private accountService: AccountService) {
  }

  openTab = 4;

  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  ngOnInit(): void {

  }

}
