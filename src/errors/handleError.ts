import * as vscode from "vscode";
import { EmptySelectionError, NoActiveTextEditorError } from "./errors";

export const knowErrors = [NoActiveTextEditorError, EmptySelectionError] as const;

function isKnowError(err: any) {
  return knowErrors.some((classError) => err instanceof classError);
}

export function handleError(err: any) {
  if (isKnowError(err)) {
    vscode.window.showErrorMessage(err.message);
    return;
  }

  throw err;
}
