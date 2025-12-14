import { getValidatedEditorAndSelection } from "../util";
import { Command } from "./Command";

export class ToSnakeCase extends Command {
  name = "easy-convert.toSnakeCase";

  async exec() {
    const { editor, selection } = getValidatedEditorAndSelection();

    await editor.edit((editBuilder) => {
      editBuilder.replace(
        selection,
        editor.document
          .getText(selection)
          .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
          .replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2")
          .toLowerCase(),
      );
    });
  }
}
