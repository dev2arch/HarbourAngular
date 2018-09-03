import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 modal;
  img
  modalImg
  captionText
  imagesakaar = [
    {
      src: '../../assets/images/tech18akar/tech18akar1.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar2.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar3.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar4.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar5.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar6.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar7.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar8.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar9.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar10.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar11.jpg'
    },
    {
      src: '../../assets/images/tech18akar/tech18akar12.jpg'
    },
  ]
  imageskharag = [
    {
      src: '../../assets/images/tech18kharag/tech18kharag1.jpg'
    },
    {
      src: '../../assets/images/tech18kharag/tech18kharag2.jpg'
    },
    {
      src: '../../assets/images/tech18kharag/tech18kharag3.jpg'
    },
    {
      src: '../../assets/images/tech18kharag/tech18kharag4.jpg'
    }
  ]
  constructor() { }

  ngOnInit() {
    this.modal = document.getElementById('myModal');
    this.img = document.getElementById('myImg');
    this.modalImg = document.getElementById('img01');
    // this.captionText = document.getElementById('caption');
  }
   onClick(src) {
    console.log(src)
     this.modal.style.display = 'block';
       this.modalImg.src = src;
      // this.captionText.innerHTML = event.alt;
   }
   onClose() {
     this.modal.style.display = "none";
   }

}
