import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-maau-custom',
  templateUrl: './test-element.component.html',
  styleUrls: ['./test-element.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestElementComponent implements OnInit {

  @Input() label = 'Maau-Custom';
  @Input() isHighlighted = false;
  @Input() highlightColor = '#80FF00';
  @Input() backgroundColor = 'rgb(71, 227, 184)';

  @Output() highlightStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  setHighlighted() {
    this.isHighlighted = !this.isHighlighted;
    this.highlightStatus.emit(this.isHighlighted);
  }

}
