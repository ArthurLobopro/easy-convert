import * as vscode from "vscode";
import { EmptySelectionError, NoActiveTextEditorError } from "./errors/errors";

export function hasOneSelection(selections?: readonly vscode.Selection[]) {
  return selections && selections.length === 1 && !selections[0].isEmpty;
}

export function getValidatedEditorAndSelection() {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    throw new NoActiveTextEditorError();
  }

  const selection = editor.selection;

  if (selection.isEmpty) {
    throw new EmptySelectionError();
  }

  return { editor, selection };
}
