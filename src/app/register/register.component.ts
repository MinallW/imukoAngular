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

    constructor(
	private fb: FormBuilder,
	private epsService: EpsService
    ) {}

    onSubmit(): void {
	const json = {

	    codigo_interno: this.addressForm.value.internalCode,
	    primer_nombre: this.addressForm.value.firstName,
	    segundo_nombre: this.addressForm.value.secondName,
	    primer_apellido: this.addressForm.value.lastName,
	    segundo_apellido: this.addressForm.value.mothersLastName,
	    identificacion: {
		numero: this.addressForm.value.identification,
		fecha_expedicion: this.addressForm.value.expeditionDate,
		lugar_expedicion: this.addressForm.value.expedition,
		tipo: this.addressForm.value.tipo
	    },
	    estado_civil: this.addressForm.value.civilState,
	    sexo: this.addressForm.value.sexo,
	    correo_electronico: {
		correo: this.addressForm.value.correo,
		correo1: this.addressForm.value.correo1,
		correo2: this.addressForm.value.correo2
	    },
	    fecha_nacimiento: this.addressForm.value.birthDate

	}

	console.log(json.codigo_interno);

	this.epsService.addPersons(json)
	    .subscribe((response: any) => {
		console.log(response)
	    })
    }
}
