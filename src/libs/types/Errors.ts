export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 302,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "Something went wrong",
  CREATE_FAILED = "Create is failed",
  UPDATE_FAILED = "Update is failed",
  NO_MEMBER_NICK = "No member with that member nick",
  USER_NICK_PHONE = "You are inserting already used nick or phone",
  WRONG_PASSWORD = "Wrong password!",
  NOT_AUTHENTICATED = "You are not authenticated, please login first",
  NO_DATA_FOUND = "THERE IS NO DATA",
  BLOCKED_USER = "You have been blocked, contact restaurant!",
}

class Errors extends Error {
  public code: HttpCode;
  public message: Message;

  static standard = {
    code: HttpCode.INTERNAL_SERVER_ERROR,
    message: Message.SOMETHING_WENT_WRONG,
  };

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;
