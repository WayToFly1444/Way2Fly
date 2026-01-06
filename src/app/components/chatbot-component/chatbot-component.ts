import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chatbot-component',
  imports: [
    CommonModule,
    NgbTooltipModule,
    NgbModule,
    FormsModule
  ],
  templateUrl: './chatbot-component.html',
  styleUrl: './chatbot-component.css',
})
export class ChatbotComponent {
  isOpen: boolean = false;
  userInput = '';
  messages: { text: string, type: 'user' | 'bot' }[] = [];
  suggestedQuestions = [
    'Last booking status?',
    'Dubai Visa Process?',
    'Can I get a refund?'
  ];
 sendMessage() {
    if (!this.userInput.trim()) return;
    this.messages.push({ text: this.userInput, type: 'user' });
    this.userInput = '';
    this.botReply('Thanks! We will check your request.');
  }

  selectQuestion(question: string) {
    this.userInput = question;
    this.sendMessage();
  }

  botReply(text: string) {
    setTimeout(() => {
      this.messages.push({ text, type: 'bot' });
    }, 800);
  }

 toggleChat() {
    this.isOpen = true;
  }

closeChat() {
  this.isOpen = false;
}

}
