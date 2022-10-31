import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-editor',
  templateUrl: './brand-editor.component.html',
  styleUrls: ['./brand-editor.component.scss'],
})
export class BrandEditorComponent implements OnInit {
  @Input() brand?: any;
  @Input() typeOfEditor?: 'ADD' | 'UPDATE' = 'ADD';

  notification: string = '';
  brandForm: FormGroup;

  constructor(
    private brandService: BrandService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.brandForm = this.fb.group({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      logo: new FormControl('', Validators.required),
      description: new FormControl(''),
    });
  }

  ngOnInit(): void {
    if (this.typeOfEditor === 'UPDATE') {
      let patchValue = {
        ...this.brand,
        name: this.brand.name,
        description: this.brand.description,
      };
      this.brandForm.patchValue(patchValue);
    }
  }

  onSubmit(): void {
    let formValue = this.brandForm.value as Brand;
    if (this.brandForm.valid) {
      if (this.typeOfEditor === 'ADD') {
        // fetch api CREATE
        setTimeout(() => {
          this.brandService.createBrand(formValue).subscribe((resp) => {
            this.brandForm.reset();
          });
        }, 1000);
      }
      if (this.typeOfEditor === 'UPDATE') {
        // fetch api UPDATE
        setTimeout(() => {
          this.brandService.updateBrand(formValue).subscribe((resp) => {
            this.router.navigate(['/']);
          });
        }, 1000);
      }
    }
  }
}
