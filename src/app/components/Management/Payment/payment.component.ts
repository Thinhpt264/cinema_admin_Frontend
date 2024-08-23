import { MessageService } from 'primeng/api';
import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from 'src/app/models/payment.model';
import { PaymentService } from 'src/app/services/payment.service';



@Component({
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {

  constructor(
    private paymentService: PaymentService,
    private messageService: MessageService,
    private router: Router
    ) {}
  payments: Payment[];
  ngOnInit(): void {
    this.paymentService.findAll().then(
      res => {
        this.payments = res as Payment[];
      }
    );
  }
}
