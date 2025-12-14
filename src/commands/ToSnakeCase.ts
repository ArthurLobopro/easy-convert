import { getValidatedEditorAndSelection, toSnakeCase } from "../util";
import { Command } from "./Command";

export class ToSnakeCase extends Command {
  name = "easy-convert.toSnakeCase";

  async exec() {
    const { editor, selection } = getValidatedEditorAndSelection();

    await editor.edit((editBuilder) => {
      editBuilder.replace(selection, toSnakeCase(editor.document.getText(selection)));
    });
  }
}
