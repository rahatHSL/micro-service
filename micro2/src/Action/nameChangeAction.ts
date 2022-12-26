export const nameChangeAction = {
  async execute(name: string) {
    return this.modifyName(name);
  },
  modifyName(name: string) {
    if (name) {
      let modifyName = "";
      for (let i = 0; i < name.length; i++) {
        modifyName += name.charAt(i) + `${name.length - 1 == i ? "" : "--"}`;
      }
      return modifyName;
    }
    return "name not found";
  },
};
