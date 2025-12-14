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

export function toCamelCase(str: string) {
  return str.toLowerCase().replace(/_+([a-z0-9])/g, (_, char) => char.toUpperCase());
}

export function toPascalCase(str: string) {
  return str[0].toUpperCase() + toCamelCase(str.slice(1));
}

export function toSnakeCase(str: string) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
    .toLowerCase();
}
