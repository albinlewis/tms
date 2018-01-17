/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module '*/mail-header.html' {
  const value: string;
  export default value
}

declare module '*/mail-footer.html' {
  const value: string;
  export default value
}
