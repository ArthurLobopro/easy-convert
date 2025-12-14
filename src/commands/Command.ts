import * as vscode from "vscode";
import { handleError } from "../errors/handleError";

export abstract class Command {
  abstract name: string;
  abstract exec(): Promise<void>;

  register() {
    return vscode.commands.registerCommand(this.name, () => this.exec().catch(handleError));
  }
}
