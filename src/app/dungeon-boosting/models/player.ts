export class Player {
  name: string;
  sessions: number;
  hidden: boolean;
  paused: boolean;

  constructor(name: string) {
    this.name = name;
    this.sessions = 0;
    this.hidden = false;
    this.paused = false;
  }

  addSession() {
    this.sessions++;
  }

  removeSession() {
    if (this.sessions > 0) {
      this.sessions--;
    }
  }

  toggleVisibility() {
    this.hidden = !this.hidden;
  }
}
