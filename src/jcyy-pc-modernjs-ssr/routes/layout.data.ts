import { name, internet } from 'faker';

export type LoaderData = {
  code: number;
  data: {
    name: string;
    avatar: string;
    email: string;
  }[];
};

export const loader = async (): Promise<LoaderData> => {
  const data = new Array(20).fill(0).map(() => {
    const firstName = name.firstName();
    return {
      name: firstName,
      avatar: `https://api.dicebear.com/7.x/pixel-art/svg?seed=${firstName}`,
      email: internet.email(),
    };
  });

  return {
    code: 200,
    data,
  };
};
