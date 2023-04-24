import axios from "axios";

export const ServiceAction = {
  async execute(name: string) {
    const ev = await axios.post(
      process.env.MICRO2_API + "/service2/name-change",
      {
        name,
      }
    );
    return ev.data;
  },
};
