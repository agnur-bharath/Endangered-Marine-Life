import { Component } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  previewUrl: any;
  endangeredMessage: string;
  isEndangered: boolean;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.previewUrl = reader.result;
        this.isEndangered = Math.random() < 0.5;
        this.endangeredMessage = this.isEndangered ? 'This species is endangered!' : 'This species is not endangered.';
        setTimeout(() => {
          this.endangeredMessage = null;
        }, 5000);
      };
    }
  }
}
