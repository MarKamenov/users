export class LoadUsersList {
  static readonly type = '[Users] Load Users';
}

export class LoadUser {
  static readonly type = '[Users] Load User';
  public constructor(public id: string) { }
}