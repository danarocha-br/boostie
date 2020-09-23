import 'react';

declare module 'react' {
  interface HTMLAttributes<T>
    extends React.AriaAttributes,
      React.DOMAttributes<T>,
      DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    disabled?: boolean;
    loading?: boolean;
    variants?: string | object | null;
    type?: string;
  }
}
