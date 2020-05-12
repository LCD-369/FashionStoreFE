import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import { map } from 'rxjs/operators';
import * as ShoppingListActions from '../cart/store/cart.actions';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../models/product';
import { Member } from '../models/Member';
import { MemberService } from '../services/member.service';
declare var paypal;

@Component({
  selector: 'app-payme',
  templateUrl: './payme.component.html',
  styleUrls: ['./payme.component.scss']
})
export class PaymeComponent implements OnInit {
  states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
  countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  items: Observable<{ cartItems: Product[] }>;
  private userSub: Subscription;
  element: Product[];
  model: Member;
  paidFor = false;
  ShippingAdd: any;
  userRegEmail: any;
  totalSale: any;

  constructor(private router: Router, private memberService: MemberService, private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.model = new Member(
      '', 'MEMBER', 'johndoe@email.com',
      'John', 'Doe', '1234 Cherry Road',
      'Falls Church', '22042', 'Virginia',
      'United States', '(111) 111-1111'
    );

    this.userSub = this.store.select('auth').pipe(map(authState => authState.user))
      .subscribe(user => {
        this.userRegEmail = user.email;
        this.findByEmail(user.email);
      });

    this.items = this.store.select('cartItems');
    this.items.forEach(element => {
      this.element = element.cartItems;
    });

    paypal.Buttons({
      createOrder: (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: "Product(s) details",
              amount: {
                currency_code: 'USD',
                value: 25.25
              }
            }
          ]
        });
      },
      onApprove: async (data, actions) => {
        const order = await actions.order.capture();
        this.paidFor = true;
        console.log(order);
      },
      onError: err => {
        console.log(err);
      }
    }).render(this.paypalElement.nativeElement);

    this.calculateTotalSale();
    console.log(this.totalSale);
  }

  findByEmail(email: string) {
    this.memberService.findMemberByEmail(email).subscribe(res =>
      this.model = new Member(
        res.PK, res.SK, res.EMAIL,
        res.FIRSTNAME, res.LASTNAME, res.ADDRESSSTREET,
        res.CITY, res.ZIPCODE, res.STATE,
        res.COUNTRY, res.PHONE));
  }

  calculateTotalSale() {
    this.element.forEach(prod => {
      let temp = this.ConvertStringToNumber(prod.PRICE);
      this.totalSale += temp;
    });
  }

  ConvertStringToNumber(input: string) {

    if (!input) return NaN;

    if (input.trim().length==0) {
        return NaN;
    }
    return parseFloat(input);
  }

  // clearCart() {
  //   this.items.forEach(element => {
  //     var i = element.cartItems.findIndex.length;
  //     var c = 0;
  //     while (c < i) {
  //       this.store.dispatch(new ShoppingListActions.RemoveProduct(c));
  //     }
  //   });
  // }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
