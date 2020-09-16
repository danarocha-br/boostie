import 'react';

declare module 'react' {
  interface HTMLAttributes<T>
    extends React.AriaAttributes,
      React.DOMAttributes<T> {
    disabled?: boolean;
    loading?: boolean;
  }
}
