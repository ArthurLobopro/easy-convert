import type * as vscode from "vscode";
import { ToCamelCase } from "./commands/ToCamelCase";
import { ToLowerCase } from "./commands/ToLowerCase";
import { ToPascalCase } from "./commands/ToPascalCase";
import { ToSnakeCase } from "./commands/ToSnakeCase";
import { ToUpperCase } from "./commands/ToUpperCase";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    new ToUpperCase().register(),
    new ToLowerCase().register(),
    new ToSnakeCase().register(),
    new ToCamelCase().register(),
    new ToPascalCase().register(),
  );
}

export function deactivate() {}
