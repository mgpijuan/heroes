import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  // Variable que podemos cargar en componente message
  messages: string[] = [];

  // Métodos que voy a usar en componentes
  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}