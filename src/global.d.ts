declare const ENV:
  | {
      API_KEY: string;
      DATABASE_URL: string;
      PROJECT_ID: string;
    }
  | undefined;

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.webp' {
  const content: string;
  export default content;
}
