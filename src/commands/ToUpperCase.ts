import * as vscode from "vscode";
import { Command } from "./Command";

export class ToUpperCase extends Command {
  name = "var-utils.toUpperCase";

  async exec() {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      vscode.window.showErrorMessage("No active editor!");
      return;
    }

    const selection = editor.selection;

    if (selection.isEmpty) {
      vscode.window.showWarningMessage("No text selected!");
      return;
    }

    await editor.edit((editBuilder) => {
      editBuilder.replace(selection, editor.document.getText(selection).toUpperCase());
    });
  }
}
