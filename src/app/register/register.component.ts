import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EpsService } from '../service/eps.service'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    addressForm = this.fb.group({
	internalCode: [null, Validators.required],
	firstName: [null, Validators.required],
	secondName: [null, Validators.required],
	lastName: [null, Validators.required],
	mothersLastName: [null, Validators.required],

	identification: [null, Validators.required],
	expeditionDate: [null, Validators.required],
	expedition: [null, Validators.required],
	tipo: [null, Validators.required],

	civilState: [null, Validators.required],
	sexo: [null, Validators.required],

	correo: [null, Validators.required],
	correo1: [null, Validators.required],
	correo2: [null, Validators.required],

	birthDate: [null, Validators.required]
    });

    hasUnitNumber = false;

    constructor(private fb: FormBuilder) {}

    onSubmit(): void {
	console.log(this.addressForm);
	EpsService.getEps();
    }
}
