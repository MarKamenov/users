import { User } from "../../types";

export class LoadUsersList {
  static readonly type = '[Users] Load Users';
}
export class LoadUser {
  static readonly type = '[Users] Load User';
  public constructor(public id: string) { }
}

export class PatchUser {
  public static readonly type = '[Users] Update User';

  public constructor(public user: User) { }
}

export class DeleteUser {
  public static readonly type = '[Users] Delete User';

  public constructor(public id: string) { }
}

export class CreateUser {
  public static readonly type = '[Users] Create User';

  public constructor(public user: User) { }
}

