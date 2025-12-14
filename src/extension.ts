import type * as vscode from "vscode";
import { ToLowerCase } from "./commands/ToLowerCase";
import { ToSnakeCase } from "./commands/ToSnakeCase";
import { ToUpperCase } from "./commands/ToUpperCase";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(new ToUpperCase().register(), new ToLowerCase().register(), new ToSnakeCase().register());
}

export function deactivate() {}
