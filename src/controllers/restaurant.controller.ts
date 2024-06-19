// controllerlarni har dayim object usilinda paydalanamiz
import { Request, Response } from "express"; // types/expressdan Request ha'm Response typelarin shaqirip alip atirmiz
import { T } from "../libs/types/common"; // T atli interface di shaqirip alip atirmiz
import MemberService from "../models/Member.service"; // MemberServiceModule di shaqirip alip atirmiz
import { MemberInput, LoginInput } from "../libs/types/member"; //MemberInputti biz processSignup da isletip atirmiz,
// LoginInputti biz processLoginda isletip atirmiz
// nege?
import { MemberType } from "../libs/enums/member.enum";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("gohome");
    res.render("home");
  } catch (err) {
    console.log("Error goHome", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
  } catch (err) {
    res.send(err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login");
  } catch (err) {
    console.log("Error getLogin", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body", req.body);

    // bul jerde const newMember dep aship alganimiz sebebi ???

    const newMember: MemberInput = req.body; //traditional api
    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignup(newMember); // call
    // TODO: sessions

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

    const result = await memberService.processLogin(input);
    // TODO: sessions

    res.send(result);
  } catch (err) {
    console.log("Error processLogin", err);
    res.send(err);
  }
};

export default restaurantController;
