declare module '*.txt' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.pdf' {
  const content: Uint8Array;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.empty' {
  const content: string;
  export default content;
}
