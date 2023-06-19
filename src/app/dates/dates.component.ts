import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss'],
})
export class DatesComponent implements OnInit {
  // Dates
  date1?: Date;
  date2?: Date;

  // Res
  years!: number | '-';
  months!: number | '-';
  days!: number | '-';
  hours!: number | '-';
  minutes!: number | '-';
  seconds!: number | '-';

  // INIT
  ngOnInit(): void {
    this.updefinedRes();
  }

  // Reset res
  updefinedRes(): void {
    this.years = '-';
    this.months = '-';
    this.days = '-';
    this.hours = '-';
    this.minutes = '-';
    this.seconds = '-';
  }

  // Update the res
  updateRes(): void {
    // Can't calculate
    if (!this.date1 || !this.date2) return this.updefinedRes();

    // Calculate
    const diff = Math.abs(this.date2.getTime() - this.date1.getTime());

    this.years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    this.months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    this.days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
  }
}
