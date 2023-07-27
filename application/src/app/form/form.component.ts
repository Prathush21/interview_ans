// form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  isImageValid: boolean = true;
  isImageDirty: boolean = false;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      profileImage: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.valid && this.isImageValid) {
      console.log('Form data:', this.userForm.value);
    } else {
      console.log('Form data is invalid.');
    }
  }

  onFileUpload(event: any) {
    const file = event.files[0];
    this.isImageDirty = true;

    if (file && file.size > 5000000) {
      this.isImageValid = false;
      this.userForm.patchValue({ profileImage: null });
    } else {
      this.isImageValid = true;
      this.userForm.patchValue({ profileImage: file });
    }
  }
}
