// controllerlarni har dayim object usilinda paydalanamiz
import { Request, Response } from "express"; // types/expressdan Request ha'm Response typelarin shaqirip alip atirmiz
import { T } from "../libs/types/common"; // T atli interface di shaqirip alip atirmiz
import MemberService from "../models/Member.service"; // MemberServiceModule di shaqirip alip atirmiz
import { MemberInput, LoginInput, AdminRequest } from "../libs/types/member"; //MemberInputti biz processSignup da isletip atirmiz,
// LoginInputti biz processLoginda isletip atirmiz
// nege?
import { MemberType } from "../libs/enums/member.enum";
import Errors, { Message } from "../libs/types/Errors";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("gohome");
    res.render("home");
  } catch (err) {
    console.log("Error goHome", err);
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.render("signup");
  } catch (err) {
    res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.render("login");
  } catch (err) {
    console.log("Error getLogin", err);
    res.redirect("/admin");
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processSignup");
    console.log("body", req.body);

    // bul jerde const newMember dep aship alganimiz sebebi ???

    const newMember: MemberInput = req.body; //traditional api
    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignup(newMember); // call

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error processSignup", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace("admin/signup) </script>`
    );
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("processLogin");
    console.log("body:", req.body);

    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);

    req.session.member = result;
    req.session.save(function () {
      res.send(result);
    });
  } catch (err) {
    console.log("Error, processLogin:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace("admin/login) </script>`
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout");
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error logout", err);
    res.redirect("/admin");
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession");
    if (req.session.member)
      res.send(
        `<script> alert("Hi, ${req.session.member.memberNick}") </script>`
      );
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}") </script>`);
  } catch (err) {
    console.log("Error checkAuthSession", err);
    res.send(err);
  }
};

export default restaurantController;
