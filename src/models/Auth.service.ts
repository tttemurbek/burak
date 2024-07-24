import { AUTH_TIMER } from "../libs/types/config";
import Errors, { HttpCode, Message } from "../libs/types/Errors";
import { Member } from "../libs/types/member";
import jwt from "jsonwebtoken";

class AuthService {
  private readonly secretToken;

  constructor() {
    this.secretToken = process.env.SECRET_TOKEN as string;
  }

  public async createToken(paylaod: Member) {
    return new Promise((resolve, reject) => {
      const duration = `${AUTH_TIMER}h`;
      jwt.sign(
        paylaod, // nimani tokenga aylantirishimiz
        process.env.SECRET_TOKEN as string,
        {
          expiresIn: duration, //object ichida option qismi
        },
        (err, token) => {
          if (err)
            reject(
              new Errors(HttpCode.UNAUTHORIZED, Message.TOKEN_CREATION_FAILED)
            );
          else resolve(token as string);
        }
      );
    });
  }

  public async checkAuth(token: string): Promise<Member> {
    const result: Member = (await jwt.verify(
      token,
      this.secretToken //this.secretToken 2ta vazifa bor, 1-o'zi tokenni yaratganligini aniqlab beradi
      // 2-tokenni o'zini ma'lumotga aylantirib beradi
    )) as Member;
    console.log(`--- [AUTH] memberNick: ${result.memberNick} ---`);
    return result;
  }
}

export default AuthService;

//this.secretToken 2ta vazifa bor, 1-o'zi tokenni yaratganligini aniqlab beradi
// 2-tokenni o'zini ma'lumotga aylantirib beradi
