import type * as vscode from "vscode";
import { ToUpperCase } from "./commands/ToUpperCase";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(new ToUpperCase().register());
}

export function deactivate() {}
