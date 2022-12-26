import axios from "axios";

export const ServiceAction = {
  async execute(name: string) {
    const ev = await axios.post("http://localhost:5000/service2/name-change", {
      name,
    });
    return ev.data;
  },
};
