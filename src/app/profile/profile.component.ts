import { Component, OnInit, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemberService } from '../services/member.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromApp from '../store/app.reducer';
import { AlertComponent } from '../shared/alert/alert.component';
import { Member } from '../models/Member';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective;
    states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Federated States of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

    model: Member;
    private userSub: Subscription;
    errMessage = 'An unexpected error occurred';
    regMessage = 'Profile updated!';
    needRegister: boolean;
    userRegEmail: any;
    isLoading: boolean;
  constructor(private memberService: MemberService,
    private store: Store<fromApp.AppState>,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
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
        this.isLoading = false;
      });

  }

  onUpdate() {
    this.model.PK='MEMBER_'+this.model.email;
    console.log(this.model);
    this.memberService.updateMember(this.model).subscribe(
      res => this.showAlert(this.regMessage),
      err => {this.showAlert(this.errMessage); this.needRegister=false;}
    );
  }

  onRegister() {
    this.model.PK='MEMBER_'+this.model.email;
    console.log(this.model);
    this.memberService.addNewMember(this.model).subscribe(
      res => {this.showAlert(this.regMessage)
              this.needRegister = false;
      },
      err => this.showAlert(this.errMessage),
    );
  }

  findByEmail(email: string) {
    this.memberService.findMemberByEmail(email).subscribe(res => {
      if(res==null) {
        this.needRegister = true;
        this.model.email = this.userRegEmail;
      }
      this.model = new Member(
        res.PK, res.SK, res.EMAIL,
        res.FIRSTNAME, res.LASTNAME, res.ADDRESSSTREET,
        res.CITY, res.ZIPCODE, res.STATE,
        res.COUNTRY, res.PHONE);
        console.log(res)
    }, (err) => {
      this.needRegister = true;
      this.model.email = this.userRegEmail;
    });
  }

  // getFormattedPhone() {
  //   let newPhone = this.model.PHONE | phonePipe:'US';
  //   return newPhone;
  // }

  showAlert(message: string) {

    const alertCmpFactory = this.componentFactoryResolver.
      resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;

    this.userSub = componentRef.instance.close.subscribe(() => {
      this.userSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
