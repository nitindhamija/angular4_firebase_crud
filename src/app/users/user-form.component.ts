import {Component,OnInit,Input} from '@angular/core';
import {FormBuilder, FormGroup,Validators,NgForm} from '@angular/forms';
import {BasicValidators} from '../shared/basicValidators';
import {CanDeactivate,Router,ActivatedRoute,Params} from '@angular/router';
import {UserService} from './user.service';
import {User} from './user';
import 'rxjs/add/operator/switchMap';
@Component({
templateUrl:'./user-form.component.html',
providers:[UserService]
})

export class UserFormComponent implements OnInit,CanDeactivate<UserFormComponent> {
  userForm:FormGroup;
title:string;
submitted:boolean=false;
@Input() user:User;
  constructor(fb:FormBuilder,private _router:Router,private _userSerice:UserService,private _activatedRoute:ActivatedRoute){
    this.userForm=fb.group({name:['',Validators.required],
      email:['',BasicValidators.email],
    phone:['',Validators.required],
  address:fb.group({
    street:['',Validators.required],
    suite:[],
    city:['',Validators.required],
    zipcode:['',Validators.required]
  })
});
this.userForm.valueChanges
     .subscribe(data => this.onValueChanged(data));
this.user=new User();
   //this.onValueChanged();
  }

  formErrors = {
   'name': '',
   'email': '',
   'phone':'',
   'address':{
   'street':'',
   'city':'',
   'zipcode':''
 }
 };

 validationMessages = {
   'name': {
     'required':      'Name is required.',
     'minlength':     'Name must be at least 4 characters long.',
     'maxlength':     'Name cannot be more than 24 characters long.',
     'forbiddenName': 'Someone named "Bob" cannot be a hero.',

   },
   'email': {
     'required': 'email is required.',
     'email':'Incorrect email entered'
   },
   'phone': {
     'required': 'phone is required.',

   },
   'address':{
     'street': {
     'required': 'street is required.',

   },
   'city': {
     'required': 'city is required.',

   },
   'zipcode': {
     'required': 'zipcode is required.',

   }
}
 };

 onValueChanged(data?: any) {
  // console.log('in on valiue ca')
    if (!this.userForm) { return; }
    const form = this.userForm;
//console.log(form);
    for (const field in this.formErrors) {
      // clear previous error message (if any)
    //  console.log(field);
if(field=='address'){
    for (const field in this.formErrors.address) {
        this.formErrors.address[field] = '';
        const control = form.get('address.'+field);
//  console.log(field);
//  console.log(control.valid);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages.address[field];
          //console.log(messages+ '---'+control.errors)
          for (const key in control.errors) {
            //    console.log(key);
            this.formErrors.address[field] += messages[key] + ' ';
          //    console.log(messages[key]);
      }
}
}
}else{
      this.formErrors[field] = '';
      const control = form.get(field);
// console.log(control.touched);
// console.log(control.valid);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
      //  console.log(messages+ '---'+control.errors)
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        //    console.log(this.formErrors)
        }
      }
    }
    }
  }

  canDeactivate(target:UserFormComponent){

    if(target.userForm.dirty){

    return confirm('You have unsaved changes. Are you sure you want to navigate away?');

}
return true;
  }
  save(){
    var result;
    this.userForm.markAsPristine();
    console.log(this.userForm.get('address.street').value);
    //this.user.address.street=this.userForm.get('address.street').value;
    if(this.user.$key)
    result=this._userSerice.updateUser(this.user);
    else
    this._userSerice.addUser(this.userForm.value);
      this._router.navigate(['users']);
this.submitted=true;
  }

  ngOnInit(){
    console.log('nitin '+ this._router.url);

if(this._router.url!='/users/new'){
    var key ;
        this._activatedRoute.params.switchMap((params:Params)=>(key=params['key'])).subscribe((key)=>(key=(+key)));
console.log('nitin'+key);
        this.title = key ? "Edit User" : "New User";

        if (!key)
			return;

        this._userSerice.getUser(key).valueChanges()
			.subscribe(
                // user => this.user = user,
                // response => {
                //     if (response.status == 404) {
                //         this._router.navigate(['not-found']);
                //     }
              //  }
              );
//this.userForm.patchValue({street: this.user.address.street});
console.log(this.user);
    }
}
}
