import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { BookingsService } from './bookings.service';
import { Booking } from './bookings.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  constructor(private bookingsService: BookingsService) {}

  ngOnInit() {
    this.loadedBookings = this.bookingsService.bookings;
  }

  onCancelBooking(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    // cancel booking with offerId
  }
}
