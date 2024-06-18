// controllerlarni har dayim object usilinda paydalanamiz
import { Request, Response, json } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { LoginInput, Member, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors from "../libs/types/Errors";

const memberService = new MemberService(); // instance olib nomini memberService Object yaratib olyabmiz, nege?

const memberController: T = {};

memberController.signup = async (req: Request, res: Response) => {
  try {
    console.log("signup");
    console.log("body", req.body);

    // bul jerde const newMember dep aship alganimiz sebebi ???

    const input: MemberInput = req.body; //traditional api
    const result: Member = await memberService.signup(input); // call
    // TODO: token

    res.json({ member: result });
  } catch (err) {
    console.log("Error signup", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

memberController.login = async (req: Request, res: Response) => {
  try {
    console.log("login");
    const input: LoginInput = req.body,
      result = await memberService.login(input);
    // TODO: token

    res.json({ member: result });
  } catch (err) {
    console.log("Error login", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

export default memberController;
