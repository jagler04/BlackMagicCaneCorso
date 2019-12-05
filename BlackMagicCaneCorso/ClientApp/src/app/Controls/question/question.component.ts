import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  constructor() { }

  @Input()
  public questionText: string;
  @Input()
  public grouping: string;
  @Output()
  public answer: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
  }
  updateAnswer(val: string){
    this.answer.emit(val);
  }

}
