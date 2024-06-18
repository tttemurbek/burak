// controllerlarni har dayim object usilinda paydalanamiz
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput, LoginInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("gohome");
    res.send("Homepage");
  } catch (err) {
    console.log("Error goHome", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login page");
  } catch (err) {
    console.log("Error getLogin", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup page");
  } catch (err) {
    res.send(err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body", req.body);

    const newMember: MemberInput = req.body; //traditional api
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService(); // instance olib nomini memberService Object yaratib olyabmiz
    const result = await memberService.processSignup(newMember); // call

    res.send(result);
  } catch (err) {
    console.log("Error processSignup", err);
    res.send(err);
  }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);
    const input: LoginInput = req.body;

    const memberService = new MemberService();
    const result = await memberService.processLogin(input);

    res.send(result);
  } catch (err) {
    console.log("Error processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
