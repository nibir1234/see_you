import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_models/message';
import { MembersService } from 'src/app/_services/members.service';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm;
  @Input() messages: Message[];
  // messages: Message[];
  @Input() username: string;
  messageContent: string;
  // loading = false;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    // this.loadMessages();
  }

  // loadMessages() {
  //   this.messageService.getMessageThread(this.username).subscribe(messages => {
  //     // console.log(messages)
  //     this.messages = messages;
  //     // console.log(this.messages)
  //   })
  //   // console.log(this.username)
  // }

  sendMessage() {
    // this.loading = true;
    // this.messageService.sendMessage(this.username, this.messageContent).then(() => {
    //   this.messageForm.reset();
    // }).finally(() => this.loading = false);
    this.messageService.sendMessage(this.username, this.messageContent).subscribe(message => {
      this.messages.push(message);
      this.messageForm.reset();
    })
  }

}
