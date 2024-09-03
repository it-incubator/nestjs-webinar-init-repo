import process from 'process';

export type ConfigurationType = ReturnType<typeof getSettings>;
const getSettings = () => ({
  apiSettings: {
    PORT: Number.parseInt(process.env.PORT!),
  },
  dbSettings: {
    DB_NAME: process.env.DB_NAME,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: Number.parseInt(process.env.DB_PORT!),
    DB_TYPE: process.env.DB_TYPE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
  },
});

export default getSettings;
